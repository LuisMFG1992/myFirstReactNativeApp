import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from './Icon'
import AppText from './AppText'

function CategoryPickerItem ({ item, setIsVisible, setPickerValue }) {
  return (
    <TouchableOpacity onPress={() => {
      setIsVisible(false)
      setPickerValue(item.label)
    }}>
      <View styles={styles.container}>
        <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
        <AppText>{item.label}</AppText>
      </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {},
})

export default CategoryPickerItem
