import { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { DATA } from "../Data";
import { useNavigation } from "@react-navigation/native";

export const Profile = ({ route }) => {
  const [user, setUser] = useState({});
  const nav = useNavigation();
  useEffect(() => {
    (async () => {
      const id = route.params.UserId;
      const user = DATA.filter((e) => e.id === id)[0];
      setUser(user);
      nav.setOptions({
        title: user.name,
      });
    })();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",

        alignItems: "center",
      }}
    >
      <Image
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          borderWidth: 5,
          borderColor: "purple",
        }}
        source={{ uri: user.avatar }}
      />
      <Text style={{ fontSize: 25, fontWeight: "bold" }}>{user.name}</Text>

      <Text style={{ color: "gray", fontSize: 15 }}>{user.email}</Text>
      <View style={{ flexDirection: "row", width: 200, height: 100 }}>
        <View
          style={{
            flex: 1,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {user.followers}
          </Text>
          <Text style={{ fontSize: 12, color: "gray" }}>Takip</Text>
        </View>
        <View
          style={{
            flex: 1,

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            {user.follows}
          </Text>
          <Text style={{ fontSize: 12, color: "gray" }}>Takipçi</Text>
        </View>
      </View>
      <Text
        style={{ color: "gray", fontSize: 15, padding: 10, paddingLeft: 19 }}
      >
        {user.about}
      </Text>
      <FlatList
        numColumns={3}
        data={user.posts}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Image
            style={{ width: 130, height: 130, margin: 1 }}
            source={{ uri: item.image }}
          />
        )}
      />
    </View>
  );
};
