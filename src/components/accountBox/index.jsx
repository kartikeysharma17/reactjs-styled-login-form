import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./accountContext";
import { SignupForm } from "./signupForm";
// import loginImg from "/images/loginImg.svg";

const BoxContainer = styled.div`
  width: 500px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
`;



const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.24;
  text-align: center;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
  text-align: center;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const BoldText = styled.h3`
  color: black;
  text-align: center;
  font-size: 28px;
  transition-duration:1s;
  font-weight: 700;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "200%",
    height: "1000px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "150%",
    height: "550px",
    borderRadius: "50%",
    transform: "rotate(60deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.3,
  stiffness: 30,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {

    setTimeout(() => {
      setActive("signup");
    }, 50);
  };

  const switchToSignin = () => {
 
    setTimeout(() => {
      setActive("signin");
    }, 50);
  };
  const SameLine = styled.div`
  display:flex
`;

  const contextValue = { switchToSignup, switchToSignin };

  return (
    <AccountContext.Provider value={contextValue}>
      <SameLine>
      <img style={{width:"450px",height:"450px",marginTop:"50px",marginRight:"100px"}} src={"/images/loginImg.svg"} alt="Your SVG" />

      <BoxContainer>
        
        <TopContainer>
          
          {active === "signin" && (
            <HeaderContainer>
            <BoldText>Login</BoldText>

            </HeaderContainer>
            
          )}
          {active === "signup" && (
            <HeaderContainer>
            <BoldText>Sign up now!</BoldText>
          </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
      </SameLine>
    </AccountContext.Provider>
  );
}
