import React, { useState } from "react";
import { Button, Modal, Text, View, StyleSheet, Image } from "react-native";
import { Renk } from "./Renk.js";

export const Hoo = ({ navigation }) => {
  const [visibleModal, setVisibleModal] = useState(null);

  const data = Array.from({ length: 6 }, (_, i) => ({
    id: i.toString(),
    image: `https://picsum.photos/200/200?random=${i}`, // Dinamik fotoğraflar
    title: `Fotoğraf ${i + 1}`,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {data.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Button title="Model Aç" onPress={() => setVisibleModal(item.id)} />

            {visibleModal === item.id && (
              <Modal
                visible={true}
                animationType="fade"
                onRequestClose={() => setVisibleModal(null)} // Android geri tuşu için
                transparent={true}
              >
                <View style={styles.modalOverlay}>
                  <View style={styles.model}>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                      {item.title}
                    </Text>
                    <Renk />
                    <Button
                      title="Kapat"
                      onPress={() => setVisibleModal(null)}
                    />
                  </View>
                </View>
              </Modal>
            )}
          </View>
        ))}
      </View>
      {/* Alt Ortada Kamera Aç Butonu */}
      <View style={styles.footer}>
        <Button
          title="Kamera Aç"
          onPress={() => navigation.navigate("Foto")}
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    padding: 10,
  },
  item: {
    width: "45%", // 2 sütun düzeni
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  model: {
    width: 300,
    height: 300,
    backgroundColor: "#E3E3E3",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  button: {
    padding: 10,
    backgroundColor: "#007BFF",
    borderRadius: 10,
    color: "#fff",
    textAlign: "center",
  },
});

