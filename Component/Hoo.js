import {Button,Modal} from "react-native";
import {Text,View,StyleSheet} from "react-native";
import React,{ useState } from 'react';
import {Renk} from "./Renk.js";
export const Hoo = ({navigation}) => {
  let [visible,setVisible]= useState(false);
  return (
    <View style={styles.container}>
      <View style={{width:300,height:30,backgroundColor:"red"}}>
        <View style={{backgroundColor:"blue"}}>
          
          <Button title="model" onPress={()=>setVisible((prev)=>!prev)}/>
          
          <Modal visible={visible} animationType="fade">
            <View style={styles.modelView}>
              <View style={styles.model}>
                <Text style={{fontSize:20,fontWeight:"bold"}}>Renginizi Seçiniz</Text>
                <Renk/>
                <Button title="kapat" onPress={()=>setVisible(false)}/>
              </View>
            </View>
          </Modal>

        </View>
      </View>
    </View>
  );
};

const styles= StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff", 
    alignItems: "center", 
    justifyContent:"center",
  },

  modelView:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },

  model:{
    width:300,
    height:300,
    backgroundColor:"#E3E3E3",
    borderRadius:10,
    alignItems:"center",
    justifyContent:"center",
  }
});
