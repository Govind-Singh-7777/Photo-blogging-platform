
import React from "react";
import axios from "axios";

function CreateBlogs() {
  async function handleSubmit(event) {
    event.preventDefault();

    const image = event.target.image.files[0];
    const caption = event.target.caption.value;

    if (!image || !caption.trim()) {
      alert("Please select an image and enter a caption.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("caption", caption.trim());

    try {
      const response = await axios.post(
        "http://localhost:3000/post",
        formData
      );

      alert("Blog created successfully!");
      event.target.reset();
    } catch (err) {
      console.error(err);
      alert("Failed to create blog.");
    }
  }

  return (
    <section className="blog-page">
      <h1>Create Blog</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="image">Select Image</label>
        <input
          type="file"
          name="image"
          id="image"
          accept="image/*"
          required
        />

        <label htmlFor="caption">Add caption</label>
        <input
          type="text"
          name="caption"
          id="caption"
          required
        />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default CreateBlogs;
