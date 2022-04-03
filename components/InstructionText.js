import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const InstructionText = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]}>{children}</Text>
  )
}

export default InstructionText

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: Colors.secondary300,
        fontFamily: 'open-sans'
    }
})