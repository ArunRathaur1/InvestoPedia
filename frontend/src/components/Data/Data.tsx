import React, { useState } from "react";

export default function PostForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
      image,
    };
    console.log("Post Data:", postData);
  };

  const darkTheme = {
    backgroundColor: "#121212",
    color: "#ffffff",
    padding: "20px",
    borderRadius: "8px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    maxWidth: "600px",
    margin: "auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    borderRadius: "4px",
    border: "1px solid #444",
    backgroundColor: "#1e1e1e",
    color: "#ffffff",
  };

  const buttonStyle = {
    backgroundColor: "#6200ea",
    color: "#ffffff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
  };

  return (
    <div style={darkTheme}>
      <h2>Create a Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          style={inputStyle}
          placeholder="Description"
          rows="5"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <input
          style={inputStyle}
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          style={inputStyle}
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <img
              src={imagePreview}
              alt="Preview"
              style={{ maxWidth: "100%", borderRadius: "8px" }}
            />
          </div>
        )}
        <button type="submit" style={buttonStyle}>
          Submit Post
        </button>
      </form>
    </div>
  );
}
