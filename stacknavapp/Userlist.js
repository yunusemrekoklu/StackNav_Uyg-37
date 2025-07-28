import { View } from "react-native";
import { User } from "./User";
import { DATA } from "./Data";
import { FlatList } from "react-native-gesture-handler";

export const Userlist = () => {
  return (
    <View style={{ width: "90%", marginLeft: 30 }}>
      <FlatList
        data={DATA}
        showsVerticalScrollIndicator={false}
        keyExtractor={(e) => e.id}
        renderItem={({ item }) => (
          <User
            avatar={item.avatar}
            name={item.name}
            online={item.online}
            email={item.email}
            id={item.id}
          />
        )}
      />
    </View>
  );
};
