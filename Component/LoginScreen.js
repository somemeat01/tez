import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from "react-native";
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export const LoginScreen = ({ navigation }) => {
  const [ad, setAd] = useState("");  // Email adresi
  const [şifre, setŞifre] = useState("");

  // Giriş yapma işlemi
  const handleLogin = () => {
    if (!ad || !şifre) {
      alert("Lütfen tüm alanları doldurun");
      return;
    }

    // Firebase Authentication ile giriş yapma
    signInWithEmailAndPassword(auth, ad, şifre)
      .then(() => {
        Alert.alert("Başarılı", "Giriş yapıldı.");
        navigation.navigate("Home");  // Başarılı giriş sonrası Home ekranına yönlendir
      })
      .catch((error) => {
        console.error(error);
        alert("şifre veya kullanıcı adı hatalı " );
      });
  };

  return (
    <ImageBackground source={require("../assets/Giris.jpg")} style={styles.backgroundImage}>
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

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Giriş</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Hesap")}>
              <Text style={styles.link}>Hesap Oluştur</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
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
