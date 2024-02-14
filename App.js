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


const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          black: require("./assets/fonts//Roboto-Black.ttf"),
          blackItalic: require("./assets/fonts/Roboto-BlackItalic.ttf"),
          bold: require("./assets/fonts/Roboto-Bold.ttf"),
          boldItalic: require("./assets/fonts/Roboto-BoldItalic.ttf"),
          italic: require("./assets/fonts/Roboto-Italic.ttf"),
          light: require("./assets/fonts/Roboto-Light.ttf"),
          lightItalic: require("./assets/fonts/Roboto-LightItalic.ttf"),
          medium: require("./assets/fonts/Roboto-Medium.ttf"),
          mediumItalic: require("./assets/fonts/Roboto-MediumItalic.ttf"),
          regular: require("./assets/fonts/Roboto-Regular.ttf"),
          thin: require("./assets/fonts/Roboto-Thin.ttf"),
          thinItalic: require("./assets/fonts/Roboto-ThinItalic.ttf"),
        });
      }
      catch (e) {
        console.log(e);
      }
    };
  
  
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Stack.Navigator>
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
