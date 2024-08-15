import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Mainform = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.heading}>Welcome Back</Text>
      <Text style={styles.subheading}>Sign in with your account</Text>
    </View>
  );
};

export default Mainform;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
    padding: 24,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "yellow",
    bottom: 20,
  },
  heading: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Poppins-SemiBold",
  },
  subheading: {
    fontSize: 14,
    lineHeight: 24,
    fontFamily: "Poppins-Medium",
  },
});
