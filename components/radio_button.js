import React, { useState } from "react";
import { View } from "react-native";
import { RadioButton } from "react-native-radio-buttons-group";
import COLORS from "../Constants/colors";

export default function R_Button() {
  const radioButtonColor = COLORS.grey;
  const [isChecked, setIsChecked] = useState(false);

  const onPressRadioButton = () => {
    setIsChecked(!isChecked); // Toggle the checked state when the radio button is pressed
  };

  return (
    <View>
      <RadioButton
      
        label="Remember me"
        onPress={onPressRadioButton}
        isSelected={isChecked} // Pass the isSelected prop to RadioButton
        innerColor={radioButtonColor}
        outerColor={radioButtonColor}
        
      />
    </View>
  );
}
