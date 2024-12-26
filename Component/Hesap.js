import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { auth } from '../firebase';
import {createUserWithEmailAndPassword } from "firebase/auth";

export const Hesap = ({ navigation }) => {
  const [ad, setAd] = useState("");  // Email adresi
  const [şifre, setŞifre] = useState("");
  const [tekrar, setTekrar] = useState("");

  const handleRegister = () => {
    if (şifre !== tekrar) {
      alert("Şifre ve şifre tekrarı aynı olmalı!");
      return;
    }

    // Firebase Authentication ile kullanıcı kaydetme
    
    createUserWithEmailAndPassword(auth,ad, şifre)
      .then(() => {
        Alert.alert("Başarılı", "Hesap oluşturuldu.");
        navigation.navigate("Login");  // Kayıt sonrası giriş ekranına yönlendir
      })
      .catch((error) => {
        console.error(error);
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Hata", "Bu e-posta adresi zaten kullanımda.");
        } else if (error.code === "auth/invalid-email") {
          Alert.alert("Hata", "Geçersiz e-posta adresi.");
        } else if (error.code === "auth/weak-password") {
          Alert.alert("Hata", "Şifre çok zayıf.");
        } else {
          Alert.alert("Hata", "Bir şeyler ters gitti. Lütfen tekrar deneyin.");
        }
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Renklensin Evimiz</Text>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Kullanıcı Adı (Email)</Text>
          <TextInput
            style={styles.input}
            value={ad}
            onChangeText={setAd}
            placeholder="Email"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Şifre</Text>
          <TextInput
            style={styles.input}
            value={şifre}
            onChangeText={setŞifre}
            placeholder="Şifre"
            secureTextEntry
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Şifre Tekrarı</Text>
          <TextInput
            style={styles.input}
            value={tekrar}
            onChangeText={setTekrar}
            placeholder="Şifre Tekrarı"
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Hesap Oluştur</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      resizeMode: "cstretch", // Resim boyutlandırma
      justifyContent: "center",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    formContainer: {
      width: "70%",
      backgroundColor: "#fff",
      padding: 20,
      borderRadius: 8,
      elevation: 2,
    },
    formTitle: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
      textAlign: "center",
    },
    formGroup: { marginBottom: 15 },
    label: { fontSize: 16, marginBottom: 5 },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 5,
      padding: 10,
      fontSize: 16,
    },
    buttonContainer: { marginTop: 10 },
    button: {
      backgroundColor: "#007BFF",
      padding: 10,
      borderRadius: 5,
      alignItems: "center",
    },
    buttonText: { color: "#fff", fontSize: 16 },
    link: { color: "#007BFF", marginTop: 10, textAlign: "center" },
  });
  