import React from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { services } from "../data/services";

export default function ServicesScreen({ navigation }) {
  return (
    <FlatList
      data={services}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("ServiceDetail", { service: item })}
        >
          <View style={{ padding: 15, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
            <Text>{item.desc}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}