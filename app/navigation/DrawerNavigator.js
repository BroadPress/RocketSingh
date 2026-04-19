import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import AdminLoginScreen from "../screens/AdminLoginScreen";
import VendorDashboard from "../screens/VendorDashboard";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Admin Login" component={AdminLoginScreen} />
      <Drawer.Screen name="Vendor Dashboard" component={VendorDashboard} />
    </Drawer.Navigator>
  );
}