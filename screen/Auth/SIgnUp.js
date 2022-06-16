import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import { KeyboardAvoidingView } from "react-native";
import DismissKeyboard from "../../components/DismissKeyboard";
import { isEmail } from "../../utils";
import api from "../../api";

const Container = styled.View`
flex:1
justify-content:center
align-items:center
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({ navigation: { navigate } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const isFormValid = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("빈칸이 있다니..스파이군요?");
      return false;
    }
    if (!isEmail(email)) {
      alert("이메일 형식이 아닌데..스파이군요?");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    try {
      const { status } = await api.createAccount({
        first_name: firstName,
        last_name: lastName,
        email,
        username: email,
        password,
      });
      if (status === 201) {
        alert("가입완료! 로그인으로!");
        navigate("로그인", { email, password });
      }
    } catch (e) {
      alert("이미 등록되어있는데..스파이..?");
      console.warn(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DismissKeyboard>
      <Container>
        <StatusBar style="dark" />
        <KeyboardAvoidingView>
          <InputContainer>
            <Input
              value={firstName}
              placeholder="퍼스트 네임"
              autoCapitalize="none"
              stateFn={setFirstName}
            />
            <Input
              value={lastName}
              placeholder="라스트 네임"
              autoCapitalize="none"
              stateFn={setLastName}
            />
            <Input
              keyboardType={"email-address"}
              value={email}
              placeholder="E메일"
              autoCapitalize="none"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="패쓰워드"
              isPassword={true}
              stateFn={setPassword}
            />
          </InputContainer>
          <Btn
            loading={loading}
            text={"가입하기"}
            accent
            onPress={handleSubmit}
          ></Btn>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
