/*import "./Write.css";

function Write() {
  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="btn">
          <button className="writeSubmit" type="submit">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
}
export default Write;
*/

import { useState } from "react";
import axios from "axios";
import "./Write.css";

function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // validate form fields
    if (!title || !content || !file) {
      setErrorMessage("Please fill all fields");
      return;
    }

    try {
      setIsSubmitting(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("content", content);
      formData.append("file", file);

      const response = await axios.post(
        "http://localhost:8080/blog",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response);
      if (response.status === 201) {
        console.log("Post created successfully!");
        setTitle("");
        setContent("");
        setFile(null);
      } else {
        setErrorMessage("Failed to create post");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Failed to create post");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="write">
      <img
        className="writeImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            required
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            required
            autoFocus={true}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            required
            autoFocus={true}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        {errorMessage && (
          <p
            className="error"
            style={{
              color: "red",
              textTransform: "uppercase",
            }}>
            {errorMessage}
          </p>
        )}
        <div className="btn">
          <button className="writeSubmit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
}
export default Write;
