import styled from "styled-components";

export const ContactPageContainer = styled.div`
  padding: 50px 100px 50px 100px;
  @media screen and (max-width: 800px) {
    padding: 20px;
  }
`;

export const CustomerCareContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const PeragraphContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 40em;
`;

export const BorderButtom = styled.div`
  border-bottom: 1px solid darkgrey;
  margin: 20px 120px 0px 120px;
  @media screen and (max-width: 800px) {
    border-bottom: 1px solid darkgrey;
    margin: 20px 0px 0px 0px;
  }
`;

export const ContactFormContanier = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const QuestionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 800px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Question = styled.p`
  width: 45%;
  padding-top: 6em;
  text-align: center;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    width: 70%;
    padding-top: 10px;
    text-align: center;
    font-size: 18px;
  }
`;

export const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  letter-spacing: 0.1em;
  padding-top: 4em;
`;

export const TextDetails = styled.span``;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormDiv = styled.div`
  background: #fff;
  padding: 35px;
  width: 450px;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: 150px;
  line-height: 150%;
  resize: vertical;
  color: #000;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 300;
  font-size: 14px;
  border-radius: 0;
  line-height: 22px;
  background-color: #fff;
  padding: 13px 13px 13px 13px;
  margin-bottom: 10px;
  width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  border: 0px solid transparent;
  border-bottom: 1px solid #000;
  &:focus {
    background: #fff;
    box-shadow: 0;
    color: #000;
    outline: none;
    padding: 13px 13px 13px 13px;
  }
`;

export const FaqContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const QuestionsListContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const QuestionAndAnswerContainer = styled.div`
  display: flex;
  width: 80em;
  padding: 20px;
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    width: 80em;
    padding: 0px;
  }
`;
export const QuestionAndAnswer = styled.div`
  padding: 15px;
`;
