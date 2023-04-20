import React from "react";
import { styled } from "@mui/material/styles";
import Sidebar from "../../component/Sidebar/Sidebar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const SettingsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  marginTop: "30px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const SettingsWrapper = styled("div")({
  flex: 8,
  padding: "2rem",
});

const SettingsTitle = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "2rem",
});

const SettingsTitleUpdate = styled("span")({
  fontWeight: "bold",
  marginRight: "0.5rem",
});

const SettingsTitleDelete = styled(DeleteIcon)({
  color: "red",
  cursor: "pointer",
});

const SettingsForm = styled("form")({
  display: "flex",
  flexDirection: "column",
  maxWidth: "350px",
});

const SettingsLabel = styled("label")({
  marginBottom: "0.5rem",
  fontWeight: "bold",
});

const SettingsPP = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "2rem",
});

const SettingsImg = styled(Avatar)({
  width: "100px",
  height: "100px",
  marginRight: "1rem",
});

const SettingsPPIcon = styled(CloudUploadIcon)({
  marginRight: "0.5rem",
  cursor: "pointer",
});

const SettingsPPInput = styled("input")({
  display: "none",
});

const SettingsInput = styled(TextField)({
  marginBottom: "1rem",
});

const SettingsSubmitButton = styled(Button)({
  alignSelf: "flex-start",
  marginTop: "1rem",
  backgroundColor: "#d219bd",
});

function Settings() {
  return (
    <SettingsContainer>
      <SettingsWrapper>
        <SettingsTitle>
          <SettingsTitleUpdate>Update Your Account</SettingsTitleUpdate>
          <SettingsTitleDelete />
        </SettingsTitle>
        <SettingsForm>
          <SettingsLabel>Profile Picture</SettingsLabel>
          <SettingsPP>
            <SettingsImg
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <SettingsPPIcon />
            </label>
            <SettingsPPInput id="fileInput" type="file" />
          </SettingsPP>
          <SettingsLabel>Username</SettingsLabel>
          <SettingsInput
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Safak"
            name="name"
          />
          <SettingsLabel>Email</SettingsLabel>
          <SettingsInput
            variant="outlined"
            size="small"
            fullWidth
            placeholder="safak@gmail.com"
            name="email"
          />
          <SettingsLabel>Password</SettingsLabel>
          <SettingsInput
            variant="outlined"
            size="small"
            fullWidth
            type="password"
            placeholder="Password"
            name="password"
          />
          <SettingsSubmitButton variant="contained">
            Update
          </SettingsSubmitButton>
        </SettingsForm>
      </SettingsWrapper>
      <Sidebar />
    </SettingsContainer>
  );
}

export default Settings;
