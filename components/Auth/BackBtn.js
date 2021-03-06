import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";

const isAndroid = Platform.OS === "android";

const Container = styled.View`
  padding-left: 20px;
`;

export default () => (
  <Container>
    <Ionicons
      name={isAndroid ? "md-arrow-down-circle" : "ios-arrow-down-circle"}
      size={26}
    />
  </Container>
);
