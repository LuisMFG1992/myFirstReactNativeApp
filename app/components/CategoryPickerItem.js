import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import AppText from './AppText'

function CategoryPickerItem({ item, setIsVisible, setPickerValue }) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        setIsVisible(false)
        setPickerValue(item.label)
      }}
    >
      <View style={styles.optionContainer}>
        <Icon
          backgroundColor={item.backgroundColor}
          name={item.icon}
          size={80}
        />
        <AppText style={styles.label}>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    width: '33%',
  },
  optionContainer: {
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    textAlign: 'center',
  },
})

export default CategoryPickerItem
