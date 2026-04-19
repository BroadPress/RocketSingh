import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";

export default function BookingScreen() {
  const [name, setName] = useState("");
  const [service, setService] = useState("");
  const [address, setAddress] = useState("");

  const handleBooking = () => {
    Alert.alert("Booked", "Service booked successfully!");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Your Name" onChangeText={setName} />
      <TextInput placeholder="Service" onChangeText={setService} />
      <TextInput placeholder="Address" onChangeText={setAddress} />
      <Button title="Book Now" onPress={handleBooking} />
    </View>
  );
}