import { StyleSheet, View } from "react-native";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="Home" component={Home} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <View style={styles.container}>
      <Home/>
      {/* <Login/> */}
    </View>
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
