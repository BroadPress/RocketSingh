import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function AdminLoginScreen({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const login = () => {
    if (user === "admin" && pass === "1234") {
      navigation.navigate("Vendor Dashboard");
    } else {
      Alert.alert("Invalid login");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Username" onChangeText={setUser} />
      <TextInput placeholder="Password" secureTextEntry onChangeText={setPass} />
      <Button title="Login" onPress={login} />
    </View>
  );
}