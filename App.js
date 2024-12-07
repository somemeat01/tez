import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Foo} from "./Component/Foo.js";
import {Hoo} from "./Component/Hoo.js";
import {LoginScreen} from "./Component/LoginScreen.js";
import {Hesap} from "./Component/Hesap.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Giriş Yap' }} />
        <Stack.Screen name="Home" component={Hoo} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Foto" component={Foo} options={{ title: 'Kamera' }} />
        <Stack.Screen name="Hesap" component={Hesap} options={{title:'Hesap oluştur'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


