import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const FormField = () => {
  const [text, settext] = useState('');

  return (
    <View>
      <Text>Username</Text>
      <View>
        {/* <TextInput 
          placeholderTextColor="#7b7b8b"

          style={styles.input}
          onChangeText={(text) => settext(text)}
          value={settext}
          placeholder="useless placeholder"
          keyboardType="numeric"
        
        /> */}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})