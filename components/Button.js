import { View, Text,Button,StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const FormButton = props => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={props.onPress}>
        <Text style={styles.btnText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'deepskyblue',
    borderRadius: 25,
    paddingVertical:10,
    alignSelf:'center'
    
  },
  btnText:{
    alignSelf:'center',
    color:'white',
    fontSize:18,

  }

 
});

export default FormButton;
