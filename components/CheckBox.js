import { View, Text } from "react-native";
import React from "react";
import CheckBox from 'react-native-check-box';

const CheckBoxInput = props => {
  return (
    <CheckBox
      style={{padding: 10}}
      onClick={props.onClick}
      isChecked={props.isChecked}
      rightText={props.text}
      rightTextStyle={{fontSize:18,color:'grey'}}
      checkBoxColor="green"
      
    />
  );
};

export default CheckBoxInput;
