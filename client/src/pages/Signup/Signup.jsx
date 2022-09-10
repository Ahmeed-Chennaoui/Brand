import { Button, Divider, TextField, Typography, Alert } from "@mui/material";
import React, { useState } from "react";
import WelcomeText from "../../components/WelcomeText";
import CenterContainer from "../../components/CenterContainer";
import GoogleSignin from "../login/components/GoogleSignin";
import Password from "../../components/Password";
import UploadPhoto from "../../components/UploadPhoto";
import { useNavigate } from "react-router-dom";
import backend from "../../APIs/backend";
import Snack from "../../components/Snack";


function Signup() {
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();

  const submit =
    inputs.password &&
    inputs.email &&
    inputs.firstName.length > 2 &&
    inputs.lastName.length > 2;
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("userName", inputs.firstName + " " + inputs.lastName);
    formData.append("givenName", inputs.firstName);
    formData.append("familyName", inputs.lastName);
    formData.append("photo", image);
    formData.append("email", inputs.email);
    formData.append("password", inputs.password);
    try {
      const response = await backend.post("/auth/register", formData);
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setMessage(response.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }
    } catch (err) {
      setError("Something went wrong with sign up" + err);
    }
  };
  return (
    <CenterContainer sx={{ height: "100vh" }}>
      <WelcomeText />
      <div style={horizontalFlex}>
        <TextField
          name="firstName"
          value={inputs.firstName || ""}
          label="First Name"
          sx={nameSX}
          required
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={inputs.lastName || ""}
          sx={nameSX}
          required
          onChange={handleChange}
        />
      </div>
      <TextField
        label="Email"
        required
        name="email"
        sx={horizontalFlex}
        value={inputs.email || ""}
        onChange={handleChange}
      />
      <Password
        sx={horizontalFlex}
        value={inputs.password || ""}
        required
        onChange={handleChange}
      />
      {error && (
        <Alert severity="error" sx={{ my: 1, width }}>
          {error}
        </Alert>
      )}
      <UploadPhoto
        onChange={handleImageChange}
        imageName={image ? image.name : undefined}
      />
      {message && <Snack message={message} severity="success" />}
      <Button
        variant="contained"
        sx={{ width, mt: 2 }}
        disabled={!submit || message}
        onClick={handleSubmit}
      >
        Sign up
      </Button>
      <Typography sx={{ my: 1 }}>-OR-</Typography>
      <GoogleSignin />

      <Divider sx={{ m: 1 }} />
      <div onClick={() => navigate("/login")}>
        <Typography
          color="secondary"
          style={{
            width,
            textAlign: "end",
            textDecoration: "underline",
            fontSize: ".875rem",
            cursor: "pointer",
          }}
        >
          Already have an account ? Sign in
        </Typography>
      </div>
    </CenterContainer>
  );
}

export default Signup;

const width = "47ch";
const horizontalFlex = {
  display: "flex",
  justifyContent: "space-between",
  width,
  my: 1,
};
const nameSX = {
  width: "46%",
  my: 1,
};
