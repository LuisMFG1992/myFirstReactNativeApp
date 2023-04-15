import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const ScrollViewRef = useRef()

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        horizontal
        ref={ScrollViewRef}
        onContentSizeChange={() => ScrollViewRef.current.scrollToEnd()}
      >
        {imageUris.map(uri => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={uri => onAddImage(uri)} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: { marginRight: 20 },
  scrollView: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
})

export default ImageInputList
