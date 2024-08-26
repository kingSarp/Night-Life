import Button from "@/components/Button";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, Text, View, Image, StyleSheet,Dimensions  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// const { height: screenHeight } = Dimensions.get('window');


export default function Index() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.maincontainer}>
          <View style={styles.imageContainer1}>
            <Image
              source={require("@/assets/images/placeholder.png")}
              style={styles.image}
            />
            <Image
              source={require("@/assets/images/vrglasses.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.imageContainer2}>
            <Image
              source={require("@/assets/images/swimmer.png")}
              style={styles.image}
            />
            <Image
              source={require("@/assets/images/sky.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.subcontainer}>
            <Text style={styles.headingtext}>
              Read the article you want instantly
            </Text>
            <Text style={styles.subtext}>
              You can read thousands of articles on night life, save them in the
              application and share them with your loved ones
            </Text>
            <View style={styles.buttoncontainer}>
              <Button
                style={styles.button}
                imageSource={require("../assets/icons/right-arrow.png")}
                handlePress={() => router.push("/sign-in")}

              />
            </View>
          </View>
        </View>
      </ScrollView>
      {/* <StatusBar backgroundColor="#161622" style="light" /> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F4F7FF",
    alignItems: 'center',

  },
  maincontainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    padding: 20,
    paddingHorizontal: 0,
 
  },
  imageContainer1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  image: {
    borderRadius: 24,
  },
  imageContainer2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  subcontainer: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    width: "100%",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    padding: 30,
    marginTop: 20
  


  },
  headingtext: {
    fontSize: 24,
    textAlign: "left",
    fontFamily: "Poppins-Bold",
    paddingTop: 10,
  },
  subtext: {
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Poppins-Light",
    marginTop: 10,
    lineHeight: 24,
  },
  buttoncontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 10,
    // backgroundColor: "#161622",
    width: "100%",
    marginTop: 20,
  },
  button: {
    height: 60,
    width: 88,
    backgroundColor: "#376AED",
    borderRadius: 8,
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
});
