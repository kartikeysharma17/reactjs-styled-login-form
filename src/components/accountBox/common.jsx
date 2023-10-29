import styled from "styled-components";

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 37px;
`;

export const MutedLink = styled.a`
margin-top:10px;
  font-size: 11px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;
`;

export const BoldLink = styled.a`
  font-size: 11px;
  color: rgb(241, 196, 15);
  font-weight: 500;
  text-decoration: none;
  margin: 0 4px;
`;
export const Inputcheckbox = styled.input`
  
  height: 15px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  margin-right: 1px
  
  
  
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  
  transition: all 200ms ease-in-out;
  font-size: 12px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  display:flex;
  justify-content:center;
  margin-top:10px;
  padding:10px;
  color:white;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 10;
  cursor: pointer;
  
  background: #1575A7;
  
`;
