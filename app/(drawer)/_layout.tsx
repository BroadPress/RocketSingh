import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function DrawerLayout() {
  return (
     <Drawer
      screenOptions={({ navigation }) => ({
        headerShown: true,

        // 👇 THIS changes the drawer toggle icon
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 15 }}
          >
            <Ionicons name="menu" size={26} color="#000" />
          </TouchableOpacity>
        ),
      })}
    >

      <Drawer.Screen
        name="FAQs"
        options={{
          title: 'FAQs',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="help-circle-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Glossary"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Partnership"
        options={{
          drawerIcon: ({ color, size }) => (
          <Ionicons name="people-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Career"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="Admin"
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="shield-checkmark-outline" size={size} color={color} />
          ),
        }}
      />

        <Drawer.Screen
        name="AdminChangePassword"
        options={{ drawerItemStyle: { display: 'none' } }}
      />


    </Drawer>
  );
}