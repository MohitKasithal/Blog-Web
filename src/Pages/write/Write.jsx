import React from "react";
import { styled } from "@mui/material/styles";

const WriteContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "30px",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
    margin: "20px auto",
  },
}));

const WriteImg = styled("img")({
  width: "100%",
  maxWidth: "500px",
  marginBottom: "1rem",
});

const WriteForm = styled("form")({
  width: "100%",
  maxWidth: "500px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const WriteFormGroup = styled("div")({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "1rem",
});

const WriteIcon = styled("i")({
  marginRight: "0.5rem",
});

const FileInput = styled("input")({
  display: "none",
});

const WriteInput = styled("input")({
  width: "100%",
  flex: 1,
  padding: "0.5rem",
});

const WriteText = styled("textarea")({
  flex: 1,
  padding: "0.5rem",
  width: "100%",
});

const WriteSubmit = styled("button")({
  padding: "0.5rem 1rem",
  background: "#00897b",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    background: "#00695c",
  },
});

function Write() {
  return (
    <WriteContainer>
      <WriteImg
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <WriteForm>
        <WriteFormGroup>
          <label htmlFor="fileInput">
            <WriteIcon className="fas fa-plus" />
          </label>
          <FileInput id="fileInput" type="file" />
          <WriteInput placeholder="Title" type="text" autoFocus={true} />
        </WriteFormGroup>
        <WriteFormGroup>
          <WriteText
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </WriteFormGroup>
        <div className="btn">
          <WriteSubmit type="submit">Publish</WriteSubmit>
        </div>
      </WriteForm>
    </WriteContainer>
  );
}

export default Write;
