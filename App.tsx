import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import PrivateNavigation from "./src/navigations/private";
import PublicNavigation from "./src/navigations/public";
import store from "./src/services/store";


export default function App() {
  const isLogged = false;
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          {isLogged ? <PrivateNavigation /> : <PublicNavigation />}
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
