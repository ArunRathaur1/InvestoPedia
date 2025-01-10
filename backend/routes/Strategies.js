const express=require("express");
const { spawn } = require('child_process');
const app=express();

  app.get('/:scriptName', (req, res) => {
    const scriptName = req.params.scriptName;
    const childPython = spawn('python', [`Strategies/${scriptName}`]);
    // Listen for data event to capture stdout
    childPython.stdout.on('data', (data) => {
      res.send(data);
    });
  
    // Listen for error event to handle stderr
    childPython.stderr.on('data', (data) => {

    });
  
    // Listen for close event to send the response
    childPython.on('close', (code) => {
    });
  });
  module.exports=app;