import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import Mainform from "@/components/Mainform";

const signIn = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.maincontainer}>
          <Image source={require("@/assets/images/LOGO_SMALL.png")} />
          <View style={styles.siginbox}>
            <Text style={styles.text}>LOGIN</Text>
            <Text>SIGN UP</Text>
            {/* <Link
              href="/sign-up"
              style={styles.text}
            >
              LOGIN
            </Link>
            <Link
              href="/sign-up"
              style={styles.text}
            >
              SIGN UP
            </Link> */}
          </View>
          <Mainform />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  
    // backgroundColor: "#F4F7FF",
    // backgroundColor: "black",
  },
  maincontainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    paddingTop: 20,
    // paddingHorizontal: 0,
  },
  siginbox: {
    flexDirection: "row",
    height: 85,
    backgroundColor: "#376AED",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 35,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 20,
    // fontWeight: "bold",
    fontFamily: "Poppins",
  }

});
