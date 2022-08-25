import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { ButtonBase, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <FooterContainer>
      <Typography style={logoStyle}>Brand</Typography>

      <FooterBody>
        <FooterSection width="40vw">
          <Typography style={elementTextStyle}>
            Ce site permet d'offrir des services quotidiens et faciliter la vie.
          </Typography>
          <Typography style={elementTextStyle}>+216 52 902 018</Typography>
          <Typography style={elementTextStyle}>
            brand.contact.ensi@gmail.com
          </Typography>
        </FooterSection>

        <FooterSection width="15vw">
          <FooterButton content="About Us" />
          <FooterButton content="What We Do" />
          <FooterButton content="FAQ" />
        </FooterSection>

        <FooterSection width="15vw">
          <FooterButton content="Career" />
          <FooterButton content="Blog" />
          <FooterButton content="Contact Us" />
        </FooterSection>
        <FooterSection width="20vw">
          <SocialIcons />
        </FooterSection>
      </FooterBody>

      <Typography style={{ textAlign: "center", marginTop: "30px" }}>
        © 2022 Brand. All rights reserved
      </Typography>
    </FooterContainer>
  );
}

export default Footer;

//++++++++++++ footer styles ++++++++
const elementTextStyle = {
  fontSize: "1.125rem",
  borderRadius: "10px",
  marginBlock: "20px",
};

const logoStyle = {
  fontSize: "2rem",
};

// ++++++ footer subcomponents +++++++++
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#003333",
  color: "white",
  minHeight: "40vh",
  width: "100vw",
  fontSsize: "large",
  marginTop: "20vh",
  padding: "2.5vw 2.5vw 0vw 2.5vw ",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const FooterBody = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  minHeight: "18vh",
  [theme.breakpoints.down("md")]: {},
}));

const FooterSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== "width",
})(({ theme, width }) => ({
  width: width,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    textAlign: "center",
    marginBottom: "10px",
  },
}));
const FooterButton = ({ content }) => (
  <div>
    <ButtonBase
      style={{
        padding: "10px",

        fontSize: "1.125rem",
        borderRadius: "10px",
      }}
    >
      {content}
    </ButtonBase>
  </div>
);

const SocialIcons = () => {
  const socialButton = {
    width: "40px",
    height: "40px",
    margin: "5px",
    border: "1px solid white",
    borderRadius: "50%",
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <ButtonBase style={socialButton}>
        <Icon icon="fa:twitter" height={20} width={20} />
      </ButtonBase>

      <ButtonBase style={socialButton}>
        <Icon icon="fa:facebook" height={20} width={20} />
      </ButtonBase>

      <ButtonBase style={socialButton}>
        <Icon icon="fa:linkedin" height={20} width={20} />
      </ButtonBase>
    </div>
  );
};
