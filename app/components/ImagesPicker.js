import React, { useState } from 'react'
import { Button, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

import Screen from './Screen'
import ImageInput from './ImageInput'

function ImagesPicker() {
  const [imageUri, setImageUri] = useState(null)

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   try {
  //     const result = await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.All,
  //       allowsMultipleSelection: true,
  //       aspect: [4, 3],
  //       quality: 1,
  //     })
  //     console.log(result)
  //     if (!result.canceled) {
  //       setImageUri(result.assets)
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  return (
    <Screen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Button title="Pick an image from camera roll" onPress={pickImage} /> */}
        <ImageInput
          imageUri={imageUri}
          onChangeImage={uri => setImageUri(uri)}
        />
      </View>
    </Screen>
  )
}

export default ImagesPicker
