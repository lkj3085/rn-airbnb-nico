import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "../screen/Auth/SIgnUp";
import SignIn from "../screen/Auth/SIgnIn";
import Welcome from "../screen/Auth/Welcome";
import BackBtn from "../components/Auth/BackBtn";

const Auth = createStackNavigator();

export default ({ navigation }) => (
  <Auth.Navigator
    screenOptions={{
      presentation: "modal",
      headerMode: "screen",
      headerBackTitleVisible: false,
      headerTitleAlign: "center",
      headerTransparent: "true",
      headerBackImage: () => <BackBtn />,
    }}
  >
    <Auth.Screen
      options={{ headerTitleStyle: { color: "white" } }}
      name="Trip Agency"
      component={Welcome}
    />
    <Auth.Screen
      name="로그인"
      component={SignIn}
      options={{ title: "로그인" }}
    />
    <Auth.Screen
      name="회원가입"
      component={SignUp}
      options={{ title: "회원가입" }}
    />
  </Auth.Navigator>
);
