import React, { useContext } from "react";
import styled from "styled-components";

import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  Inputcheckbox,
  MutedLink,
  SubmitButton,

} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const SmallText = styled.h5`
  color: black;
  font-weight: 500;
  font-size: 12px;
  z-index: 10;
  margin: 0;
`;
  const SameLine = styled.div`
  display:flex
`;



  return (
    <>

    <BoxContainer>
      
      <FormContainer>
        <SmallText>Login Id</SmallText>


        <Input
          type="email"
          placeholder="Enter Login ID"
        />

        <br />
        <SmallText>Password</SmallText>


        <Input
          type="password"
          placeholder="Enter Password"
        />
        



      </FormContainer>
   
    </BoxContainer>
    <SameLine> 
    <Inputcheckbox
      type="checkbox"
      placeholder="Enter Login ID"

    />
      <SmallText>Remember Me</SmallText>
      <BoldLink style={{marginTop:"3px", marginLeft:"230px"}} href="#">  Change Password </BoldLink>
    </SameLine>
    <SameLine> 
    <Inputcheckbox
      type="checkbox"

    />
      <SmallText>Agree to <BoldLink href="#">  Terms & Conditions </BoldLink> </SmallText>
    </SameLine>
    <SubmitButton type="submit">Login</SubmitButton>
    <MutedLink style={{display:"flex",justifyContent:"center",color:"black"}} href="#" >
        Don't have an account?{" "}
        <BoldLink href="#" >
          Register Here
        </BoldLink>
        <br />
        <br />

      </MutedLink>

    </>
    
  );
}
