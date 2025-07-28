import { Text, View } from "react-native";
import { User } from "../User";
import { Userlist } from "../Userlist";

export const Home = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Userlist />
    </View>
  );
};
