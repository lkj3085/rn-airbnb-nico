import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { BlurView } from "expo-blur";
import { Platform } from "react-native";
import Btn from "../../components/Auth/Btn";

const isAndroid = Platform.OS === "android";

const LOGO_URL =
  "http://logok.org/wp-content/uploads/2014/07/airbnb-logo-belo-350x302.png";

const Container = styled.View`
  flex: 1;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  position: absolute;
`;

const Logo = styled.Image`
margin-top:180px
width:100px
height:100px
`;

const BtnContainer = styled.View`
  margin-top: 40px;
`;

export default ({ navigation }) => {
  const goToSignIn = () => navigation.navigate("로그인");
  const goToSignUp = () => navigation.navigate("회원가입");
  return (
    <Container>
      <BlurView
        tint="light"
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
        intensity={isAndroid ? "80" : "25"}
      >
        <Logo source={{ uri: LOGO_URL }} />
        <BtnContainer>
          <Btn onPress={goToSignIn} text={"로그인"} accent />
          <Btn onPress={goToSignUp} text={"회원가입"} accent={false} />
        </BtnContainer>
      </BlurView>
      <Image source={require("../../asset/1.jpg")} />
      <StatusBar style="light" />
    </Container>
  );
};
