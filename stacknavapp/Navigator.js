import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./screens/Home";
import { Profile } from "./screens/Profile";
import { Text, View } from "react-native";

const Stack = createStackNavigator();

const Logo = () => {
  return (
    <View
      style={{
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
        width: 70,
        height: 70,
        borderRadius: 35,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 20, color: "white" }}>
        DEV
      </Text>
    </View>
  );
};

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "MyAPP",
          headerShadowVisible: false,
          headerLeft: () => <Logo />,
          headerTitleStyle: {
            fontSize: 25,
          },
          headerStyle: {
            height: 150,
          },
        }}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{
          title: "MyAPP",
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};
