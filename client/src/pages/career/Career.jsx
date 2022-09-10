import { Alert, Button, Divider, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import CenterContainer from "../../components/CenterContainer";
import Field from "./components/Field";
import backend from "../../APIs/backend";
import { jobs, states } from "../../data/filterData";
import UploadPhoto from "../../components/UploadPhoto";
import { GlobalContext } from "../../contexts/globalContext";
import Snack from "../../components/Snack";
import { useNavigate } from "react-router-dom";

function Career() {
  const { currentUser } = useContext(GlobalContext);
  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("phone", inputs.phone);
    formData.append("description", inputs.description);
    formData.append("idPhoto", image);
    formData.append("city", inputs.city);
    formData.append("profession", inputs.profession);
    formData.append("price", inputs.price);
    try {
      const requestConfig = {
        headers: {
          Authorization: "Bearer " + currentUser.AccessToken,
        },
      };
      const response = await backend.post(
        "/auth/request",
        formData,
        requestConfig
      );
      if (response.data.error) {
        setError(response.data.error);
      } else {
        setMessage(response.data.message);
        setError("");
        setTimeout(() => navigate("/"), 1500);
      }
    } catch (err) {
      setError("Something went wrong " + err);
    }
  };
  return (
    <CenterContainer
      sx={{
        minHeight: "100vh",
        ".MuiDivider-root": {
          display: { xs: "none", md: "block" },
        },
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography style={titleStyle}>Become a </Typography>
        <Typography
          style={{ ...titleStyle, color: "#6439ff", marginInline: "10px" }}
        >
          Brand
        </Typography>
        <Typography style={titleStyle}>professional </Typography>
      </div>

      <Alert severity="info" sx={{ mb: 5 }}>
        This request will be sent to an admin for verification
      </Alert>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <div style={{ width: "300px", height: "100%", marginRight: "10px" }}>
          <Field
            message="What is your profession ?"
            optionsList={jobs}
            name="profession"
            value={inputs.profession || ""}
            onChange={handleChange}
          />
          <Field
            message="In which city do you operate ?"
            name="city"
            optionsList={states}
            value={inputs.city || ""}
            onChange={handleChange}
          />
          <Field
            message="Describe the service you provide :"
            name="description"
            multiline
            value={inputs.description || ""}
            onChange={handleChange}
          />
        </div>
        <Divider orientation="vertical" sx={{ height: "200px", mx: 8 }} />
        <div style={{ width: "300px", height: "100%", marginLeft: "10px" }}>
          <Field
            message="Starting price :"
            price
            name="price"
            value={inputs.price || ""}
            onChange={handleChange}
          />
          <Field
            message="Phone number :"
            phone
            name="phone"
            value={inputs.phone || ""}
            onChange={handleChange}
          />

          <UploadPhoto
            onChange={handleImageChange}
            imageName={image ? image.name : undefined}
            label="upload identity card picture"
          />
        </div>
      </div>
      {error && (
        <Alert severity="error" sx={{ my: 1 }}>
          {error}
        </Alert>
      )}
      {message && <Snack message={message} severity="success" />}
      <Button variant="contained" sx={{ my: 3 }} onClick={handleSubmit}>
        submit request
      </Button>
    </CenterContainer>
  );
}

export default Career;
const titleStyle = {
  color: "#404040",
  fontWeight: "bold",
  fontSize: "2em",
  marginBottom: "20px",
};
