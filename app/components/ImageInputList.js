import React, { useRef } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import ImageInput from './ImageInput'

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef()
  return (
    <ScrollView
      horizontal
      ref={scrollView}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imageUris.map(uri => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={uri => onAddImage(uri)} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  image: { marginRight: 20 },
})

export default ImageInputList
