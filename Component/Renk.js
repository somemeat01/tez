import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export const Renk = () => {
  return (
    <View>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity
        onPress={() => {
          alert("kırmızı seçtiniz");
        }}
      >
        <View style={styles.renk1}></View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alert("mor seçtiniz");
        }}
      >
        <View style={styles.renk2}></View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alert("yeşil seçtiniz");
        }}
      >
        <View style={styles.renk3}></View>
      </TouchableOpacity>
      </View>

        
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity
        onPress={() => {
          alert("mavi seçtiniz");
        }}
      >
        <View style={styles.renk4}></View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alert("sarı seçtiniz");
        }}
      >
        <View style={styles.renk5}></View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          alert("turuncu seçtiniz");
        }}
      >
        <View style={styles.renk6}></View>
      </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  renk1: {
    width: 50,
    height: 50,
    backgroundColor: "red",
    borderRadius: 50,
  },
  renk2: {
    width: 50,
    height: 50,
    backgroundColor: "purple",
    borderRadius: 50,
  },
  renk3: {
    width: 50,
    height: 50,
    backgroundColor: "green",
    borderRadius: 50,
  },
  renk4: {
    width: 50,
    height: 50,
    backgroundColor: "blue",
    borderRadius: 50,
  },
  renk5: {
    width: 50,
    height: 50,
    backgroundColor: "yellow",
    borderRadius: 50,
  },
  renk6: {
    width: 50,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 50,
  },
});
