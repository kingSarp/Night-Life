import React, { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignUpForm from "@/components/SignUpForm";
import SignInForm from "@/components/SignInForm";

const signIn = () => {
  const [activeTab, setActiveTab] = useState("LOGIN");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.maincontainer}>
          <Image source={require("@/assets/images/LOGO_SMALL.png")} />
          <View style={styles.siginbox}>
            <TouchableOpacity
              // style={[styles.tab, activeTab === "LOGIN" && styles.activeTab]}
              onPress={() => setActiveTab("LOGIN")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "LOGIN" && styles.activeTabText,
                ]}
              >
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              // style={[styles.tab, activeTab === "SIGN UP" && styles.activeTab]}
              onPress={() => setActiveTab("SIGN UP")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "SIGN UP" && styles.activeTabText,
                ]}
              >
                SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
          {activeTab === "LOGIN" ? <SignInForm /> : <SignUpForm />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FF",
  },
  maincontainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // alignContent: "center",
    // paddingTop: 20,
    // paddingHorizontal: 0,
  },
  siginbox: {
    flexDirection: "row",
    height: 86,
    backgroundColor: "#376AED",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 30,
    width: "100%",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 20,
    // fontWeight: "bold",
    fontFamily: "Poppins",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#4285F4",
    borderRadius: 25,
    marginBottom: 30,
  },

  tabText: {
    color: "#4285F4",
    // fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Poppins",
  },
  activeTabText: {
    color: "#fff",
    // fontWeight: "bold",
    fontSize: 18,
    fontFamily: "Poppins",
  },
});
