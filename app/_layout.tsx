import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(shop)"
        options={{
          title: "Shop",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="categories"
        options={{
          title: "Categories",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="product"
        options={{
          title: "Product",
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="cart"
        options={{
          title: "Shopping Cart",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="auth"
        options={{
          headerShown: true,
        }}
      />
    </Stack>
  );
}
