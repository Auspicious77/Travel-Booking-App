import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Account() {
  return (
    <View style={styles.Body}>
      <Text>Account</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Body: {
    flex: 1,
    backgroundColor: 'white'
  }
})