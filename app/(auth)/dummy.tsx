import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('LOGIN');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>BLOG CLUB</Text>
      
      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'LOGIN' && styles.activeTab]}
          onPress={() => setActiveTab('LOGIN')}
        >
          <Text style={[styles.tabText, activeTab === 'LOGIN' && styles.activeTabText]}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'SIGN UP' && styles.activeTab]}
          onPress={() => setActiveTab('SIGN UP')}
        >
          <Text style={[styles.tabText, activeTab === 'SIGN UP' && styles.activeTabText]}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

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
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOGIN</Text>
        </TouchableOpacity>
        
        <Text style={styles.forgotPassword}>Forgot your password? Reset here</Text>
        
        <Text style={styles.orText}>OR SIGN IN WITH</Text>
        
        <View style={styles.socialIcons}>
          {/* Add social media icons here */}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4285F4',
    marginTop: 20,
    marginBottom: 20,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#4285F4',
    borderRadius: 25,
    marginBottom: 30,
  },
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  activeTab: {
    backgroundColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  activeTabText: {
    color: '#4285F4',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subText: {
    color: '#888',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4285F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#4285F4',
    marginTop: 15,
  },
  orText: {
    color: '#888',
    marginTop: 20,
    marginBottom: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
});