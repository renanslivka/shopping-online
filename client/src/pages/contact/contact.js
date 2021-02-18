import React, { useState } from "react";
import axios from "axios";

import CustomButton from "./../../components/custom-button/custom-button";
import FormInput from "./../../components/form-input/form-input";
import { Form } from "./../../components/sign-up/sign-up.styles";
import {
  ContactPageContainer,
  CustomerCareContainer,
  PeragraphContainer,
  BorderButtom,
  ContactFormContanier,
  QuestionContainer,
  Question,
  ContactDetails,
  TextDetails,
  FormContainer,
  FormDiv,
  MessageInput,
  FaqContainer,
  QuestionsListContainer,
  QuestionAndAnswerContainer,
  QuestionAndAnswer,
} from "./contact.style";

const ContactPage = () => {
  const [userCredentials, setCredentials] = useState({
    displayName: "",
    email: "",
    message: "",
  });

  const { displayName, email, message } = userCredentials;

  const paragraph = `I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.I'm a paragraph.`;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios({
      url: "https://shopping-online-server.herokuapp.com/send",
      method: "post",
      data: {
        name: displayName,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  };

  const resetForm = () => {
    setCredentials({ displayName: "", email: "", message: "" });
  };

  return (
    <ContactPageContainer>
      <CustomerCareContainer>
        <PeragraphContainer>
          <h1>CUSTOMER CARE</h1>
          <p>
            All online retailers should invest in ecommerce customer service.
            Providing a great customer experience is one of the few ways to
            genuinely standout in an already saturated online retail
            marketplace. Customers who don’t get the service they’d prefer can
            simply move onto to another store, it’s literally a click away.
          </p>
        </PeragraphContainer>
      </CustomerCareContainer>
      <BorderButtom />
      <ContactFormContanier>
        <QuestionContainer>
          <Question>
            Have any questions or concerns? We’re always ready to help!
          </Question>
          <ContactDetails>
            <TextDetails>
              <strong>Call us at</strong>
            </TextDetails>
            <TextDetails>123-456-7890</TextDetails>
            <TextDetails>or send us an email to:</TextDetails>
            <TextDetails>renanslivka@gmail.com</TextDetails>
          </ContactDetails>
        </QuestionContainer>

        <FormContainer>
          <FormDiv>
            <Form onSubmit={handleSubmit} method="POST">
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Name"
                required
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
              />

              <MessageInput
                name="message"
                className="validate[required,length[6,300]]feedback-input"
                id="comment"
                placeholder="Message"
                value={message}
                onChange={handleChange}
                required
              />

              <CustomButton id="button-blue" type="submit">
                submit
              </CustomButton>
            </Form>
          </FormDiv>
        </FormContainer>
      </ContactFormContanier>
      <BorderButtom />
      <CustomerCareContainer>
        <PeragraphContainer>
          <h1>RETURNS</h1>
          <p>{paragraph}</p>
        </PeragraphContainer>
      </CustomerCareContainer>
      <BorderButtom />
      <FaqContainer>
        <h1>FAQ</h1>
        <QuestionsListContainer>
          <QuestionAndAnswerContainer>
            <QuestionAndAnswer>
              <h3>Do you provide International delivery?</h3>
              <p>{paragraph}</p>
            </QuestionAndAnswer>

            <QuestionAndAnswer>
              <h3>How do I track my order?</h3>
              <p>{paragraph}</p>
            </QuestionAndAnswer>
          </QuestionAndAnswerContainer>
        </QuestionsListContainer>
        <QuestionsListContainer>
          <QuestionAndAnswerContainer>
            <QuestionAndAnswer>
              <h3>How do I return an item?</h3>
              <p>{paragraph}</p>
            </QuestionAndAnswer>

            <QuestionAndAnswer>
              <h3>How can I contact your couriers?</h3>
              <p>{paragraph}</p>
            </QuestionAndAnswer>
          </QuestionAndAnswerContainer>
        </QuestionsListContainer>
        <QuestionsListContainer>
          <QuestionAndAnswerContainer>
            <QuestionAndAnswer>
              <h3>What is your returns policy?</h3>
              <p>{paragraph}</p>
            </QuestionAndAnswer>

            <QuestionAndAnswer>
              <h3>What are your delivery options?</h3>
              <p>{paragraph}</p>
            </QuestionAndAnswer>
          </QuestionAndAnswerContainer>
        </QuestionsListContainer>
      </FaqContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
