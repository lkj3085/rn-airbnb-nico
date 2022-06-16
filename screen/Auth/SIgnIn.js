import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/DismissKeyboard";
import { userLogin } from "../../redux/userSlice";
import { isEmail } from "../../utils";

const Container = styled.View`
flex:1
justify-content:center
align-items:center
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ route: { params } }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);

  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("잘못된 정보! 다시 입력");
      return false;
    }
    if (!isEmail(email)) {
      alert("이메일 형식이 아닌데??");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!isFormValid()) {
      return;
    }
    dispatch(
      userLogin({
        username: email,
        password,
      })
    );
  };

  return (
    <DismissKeyboard>
      <Container>
        <KeyboardAvoidingView>
          <StatusBar style="dark" />
          <InputContainer>
            <Input
              value={email}
              placeholder="E메일"
              autoCaptitalize="email-address"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="패쓰워드"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn text={"접속하기"} accent onPress={handleSubmit}></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
