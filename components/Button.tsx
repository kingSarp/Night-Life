import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ButtonProps } from "@/types/Button";

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  handlePress,
  // textStyles,
  // isLoading,
}) => {
  return (
    <TouchableOpacity style={[style]} onPress={handlePress}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
