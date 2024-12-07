import React,{ useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Linking,ImageBackground} from "react-native";
export const Hesap = ({navigation}) =>{
  const [Ad, setAd] = useState("");
  const [şifre, setŞifre] = useState("");
  const [tekrar, setTekrar] = useState("");

  const handleSubmit = () => {
    if (tekrar == şifre) {
        // Burada giriş doğrulama işlemi yapılabilir
        navigation.navigate("Login");
      } else {
        alert("Lütfen şifreleri do giriniz.");
      }
  };

  return (
    <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>Renklensin Evimiz</Text>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Kullanıcı Adı</Text>
            <TextInput
              style={styles.input}
              value={Ad}
              onChangeText={setAd}
              placeholder="Kullanıcı Adı"
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
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Hesap Oluştur</Text>
            </TouchableOpacity>
          </View>
        </View>
        </View>
  )
}

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
  