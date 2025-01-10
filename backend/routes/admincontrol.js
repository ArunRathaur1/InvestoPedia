const express=require('express');
const path = require('path');
const StrategyInfo =require("../modles/strategyinfo");
const AdminData=require('../modles/adminauth')
const bycrypt=require("bcryptjs");
const jsonweb=require("jsonwebtoken");
require('dotenv').config();
const serect_data="This is very confidential"
const fetchuser=require("../middleware/fetchuser");
const multer=require('multer')
const app=express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Strategies');
  },
  filename: function (req, file, cb) {
    const strategyName = req.body.strategy_name.toLowerCase();
    const fileExtension = path.extname(file.originalname);
    cb(null, `${strategyName}${fileExtension}`);
  }
});

const upload = multer({ storage });

app.post("/addStrategyInfo", fetchuser, upload.single('strategyFile'), async (req, res) => {
  jsonweb.verify(req.token, serect_data, async (err, authData) => {
    if (err) {
      return res.status(403).send("Invalid token");
    } else {
      try {
        const findUser = await AdminData.findOne({ _id: authData.id });

        if (!findUser) {
          return res.status(404).send("User not found");
        }

        try {
          const { strategy_name, strategy_description,image } = req.body;
          const strategyName = strategy_name.toLowerCase(); // Convert to lowercase for case-insensitive comparison

          // Check if the strategy name already exists (case-insensitive)
          let strategyInfo = await StrategyInfo.findOne({ Strategy_name: { $regex: new RegExp("^" + strategyName + "$", "i") } });

          if (strategyInfo) {
            // Update existing strategy
            strategyInfo.StrategyDescription = strategy_description;
            if(req.image){
              strategyInfo.image=image
            }
            if (req.file) {
              strategyInfo.StrategyFilePath = req.file.path; // Update the file path if a new file is uploaded
            }

            await strategyInfo.save();
            res.status(200).json(strategyInfo);
          } else {
            // Create and save the new strategy info
            const newStrategyInfo = new StrategyInfo({
              Strategy_name: strategyName,
              StrategyDescription: strategy_description,
              image:image,
              StrategyFilePath: req.file ? req.file.path : null // Save the file path if provided
            });

            await newStrategyInfo.save();
            res.status(201).json(newStrategyInfo);
          }
        } catch (error) {
          console.error("Error in strategy creation/updating:", error.message);
          res.status(500).send('Internal Server Error');
        }
      } catch (error) {
        console.error('Error querying database:', error.message);
        res.status(500).send("Server error");
      }
    }
  });
});

app.post("/checkStrategyName", fetchuser, async (req, res) => {
  jsonweb.verify(req.token, serect_data, async (err, authData) => {
    if (err) {
      return res.status(403).send("Invalid token");
    } else {
      try {
        const findUser = await AdminData.findOne({ _id: authData.id });

        if (!findUser) {
          return res.status(404).send("User not found");
        }

        const { strategy_name } = req.body;
        const strategyName = strategy_name.toLowerCase(); // Convert to lowercase for case-insensitive comparison

        // Check if the strategy name already exists (case-insensitive)
        let strategyInfo = await StrategyInfo.findOne({ Strategy_name: { $regex: new RegExp("^" + strategyName + "$", "i") } });

        if (strategyInfo) {
          res.status(200).json({ exists: true });
        } else {
          res.status(200).json({ exists: false });
        }
      } catch (error) {
        console.error("Error querying database:", error.message);
        res.status(500).send("Server error");
      }
    }
  });
});

app.get("/getAllStrategyInfo", fetchuser, async (req, res) => {
  jsonweb.verify(req.token, serect_data, async (err, authData) => {
    if (err) {
      return res.status(403).send("Invalid token");
    } else {
      try {
        const findUser = await AdminData.findOne({ _id: authData.id });
        if (!findUser) {
          return res.status(404).send("User not found");
        }

        const allStrategies = await StrategyInfo.find();
        res.status(200).json(allStrategies);
      } catch (error) {
        res.status(500).send("Internal Server Error");
      }
    }
  });
});


app.post('/signup', async (req, res) => {
  try {
      let success = false;
      const { email, password, name, mobile } = req.body;

      const existingUser = await AdminData.findOne({ email: email });
      if (existingUser) {
          return res.json({ success: success });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new AdminData({
          email: email,
          name: name,
          password: hashedPassword,
          mobile: mobile
      });

      await newUser.save();
      const id = newUser._id;
      // Create a JWT token with only the user ID as payload
      const token = jsonweb.sign({ id: id }, serect_data);
      success = true;
      res.json({ authToken: token, success: success });
  } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
      const findUser = await AdminData.findOne({ email: email });
      if (!findUser) {
          res.json({ success: false,statement:"user not found" });
          return;
      }

      const isPasswordValid = await bycrypt.compare(password, findUser.password); // Await the bcrypt.compare function
      if (!isPasswordValid) {
          res.json({ success: false,statment:"password is wrong"});
          return;
      }

      const id = findUser._id; // Create a payload object with user ID
      const token = jsonweb.sign({ id: id }, serect_data);

      res.json({ authToken: token, success: true });
  } catch (error) {
      console.error(error.message);
      res.json({ success: false });
      return;
  }
});
app.post("/fetchuser", fetchuser, async (req, res) => {
  jsonweb.verify(req.token, serect_data, async (err, authData) => {
      if (err) {
        res.status(403).send("Invalid token");
      } else {
        try {
          const findUser = await AdminData.findOne({ _id:authData.id });
          if (findUser) {
            res.json({findUser,success:true});
          } else {
            res.status(404).send("User not found");
          }
        } catch (error) {
          console.error('Error querying database:', error.message);
          res.status(500).send("Server error");
        }
      }
    });
  });
  

module.exports = app;