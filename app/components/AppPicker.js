import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Button,
} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import CategoryPickerItem from './CategoryPickerItem'

function AppPicker({
  items,
  icon,
  placeholder,
  setPickerValue,
  pickerValue,
  width = '100%',
  ...otherProps
}) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setIsVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              color={defaultStyles.colors.medium}
              size={20}
              colors={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {pickerValue ? (
            <AppText style={styles.text}>{pickerValue}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons
            name={'chevron-down'}
            color={defaultStyles.colors.medium}
            size={20}
            style={styles.icon}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={isVisible} animationType="slide">
        <Screen>
          <Button title="Close" />
          <FlatList
            data={items}
            keyExtractor={element => element.value}
            renderItem={({ item }) => (
              <CategoryPickerItem
                item={item}
                setIsVisible={setIsVisible}
                setPickerValue={setPickerValue}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
  },
  text: {
    flex: 1,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
})

export default AppPicker
