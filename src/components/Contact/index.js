import React from "react";
import emailjs from "emailjs-com";
import {
  Container,
  FormContent,
  FormWrap,
  Form,
  Icon,
  FormH1,
  FormLabel,
  FormInput,
  FormInputMessage,
  FormButton,
  Text,
} from "./ContactElements";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_sfq75k1",
        "template_6009aok",
        e.target,
        "user_7OclaIRRNbXghSbtXYdJH"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <Container>
      <FormWrap>
        <Icon to="/">Schjødt Social</Icon>
        <FormContent>
          <Form action="#" onSubmit={sendEmail}>
            <FormH1>Send mig en email</FormH1>

            <FormLabel htmlFor="for">Dit navn</FormLabel>
            <FormInput type="text" name="from_name" required></FormInput>

            <FormLabel htmlFor="for">Din email</FormLabel>
            <FormInput type="email" name="user_email" required></FormInput>

            <FormLabel htmlFor="for">Din besked</FormLabel>
            <FormInputMessage name="message" required></FormInputMessage>

            <FormButton type="submit" value="Send">
              Send
            </FormButton>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Contact;
