import React from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainPage from "./pages/MainPage";
import WeatherPage from "./pages/WeatherPage";
import LanguageSelectScreen from "./pages/LanguageSelectScreen";
import TranslationPage from "./pages/TranslationPage";
import { Provider } from "react-redux";
import store from "./store/store";
import { useEffect } from "react";
import AlertPage from "./pages/AlertPage";
import MessagePage from "./pages/MessagePage";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import Signup from "./pages/Signup";

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false
          }}
        />
            <Stack.Screen
              name="Main"
              component={MainPage}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Weather" component={WeatherPage} />
            <Stack.Screen name="AlertPage" component={AlertPage} options={{title: "Alerts"}}/>
            <Stack.Screen name="MessagePage" component={MessagePage} options={{title: "Messages"}}/>
            <Stack.Screen
              name="languageSelect"
              component={LanguageSelectScreen}
            />
            <Stack.Screen
              name="TranslationPage"
              component={TranslationPage}
              options={{
                tabBarLabel: "Home",
                tabBarIcon: (props) => (
                  <Entypo name="home" size={props.size} color={props.color} />
                ),
                title: "Translation"
              }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 5,
  },
});
