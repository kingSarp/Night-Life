import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,

  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import FormField from "./FormField";
import { router } from "expo-router";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.welcomeText}>Welcome back</Text>
      <Text style={styles.subText}>Sign in with your account</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton}   onPress={() => router.replace("/home")}
      >
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>
        Forgot your password? Reset here
      </Text>

      <Text style={styles.orText}>OR SIGN IN WITH</Text>

      <View style={styles.socialIcons}>
        <Image source={require("../assets/icons/Google.png")}/>
        <Image source={require("../assets/icons/Facebook.png")}/>
        <Image source={require("../assets/icons/Twitter.png")}/>
      </View>
    </View>
  );
};

export default SignInForm;

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Poppins-SemiBold",
  },
  loginContainer: {
    width: "100%",
    padding: 24,
    backgroundColor: "white",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    bottom: 18,
    // alignItems:"center"
  },
  welcomeText: {
    fontWeight: "bold",
    marginBottom: 10,

    fontSize: 24,
    lineHeight: 32,
    fontFamily: "Poppins-SemiBold",
  },
  subText: {
    color: "#888",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    // borderWidth: 1,
    borderBottomWidth: 2,
    // borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4285F4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  forgotPassword: {
    color: "#4285F4",
    marginTop: 15,
    textAlign: "center",
  },
  orText: {
    color: "#888",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    width: "60%",
    marginTop:10,
    marginLeft:60

  },
});
