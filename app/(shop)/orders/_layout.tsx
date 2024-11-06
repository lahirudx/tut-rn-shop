import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const OrdersLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="order" options={{}} />
    </Stack>
  );
};

export default OrdersLayout;
