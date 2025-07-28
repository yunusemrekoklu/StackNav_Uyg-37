import { Image, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

export const User = ({ avatar, name, email, id, online }) => {
  const nav = useNavigation();
  return (
    <View>
      <TouchableOpacity onPress={() => nav.navigate("profile", { UserId: id })}>
        <View
          style={{
            width: "90%",
            height: 80,
            margin: 2,
            padding: 2,
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <View style={{ flex: 2 }}>
            <Image
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                borderWidth: 3,
                borderColor: "purple",
              }}
              source={{ uri: avatar }}
            />
            {online && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: "green",
                  position: "absolute",
                  bottom: 9,
                  right: 22,
                }}
              ></View>
            )}
          </View>
          <View style={{ flex: 4, paddingLeft: 5, justifyContent: "center" }}>
            <Text style={{ fontWeight: "bold", fontSize: 20 }}>{name}</Text>
            <Text style={{ fontSize: 12, color: "gray" }}>{email}</Text>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <AntDesign name="rightcircleo" size={28} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
