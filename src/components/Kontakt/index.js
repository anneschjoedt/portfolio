import React from "react";
import {
  Container,
  FormContent,
  FormWrap,
  Form,
  Icon,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
} from "./KontaktElements";

const Kontakt = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Schjødt Social</Icon>
        <FormContent>
          <Form action="#">
            <FormH1>Send mig en email</FormH1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required></FormInput>
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required></FormInput>
            <FormButton type="submit">Continue</FormButton>
            <Text>Jeg svarer så hurtigt som muligt.</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Kontakt;
