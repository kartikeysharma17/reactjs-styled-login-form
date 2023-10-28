import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,

} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
  
          <Input
            type="email" 
            placeholder="Email"
          />
      
        <br />
        
          <Input
            type="password" 
            placeholder="Password" 
          />
        
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forgot your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
        <br />
        <br />

      </MutedLink>
    </BoxContainer>
  );
}