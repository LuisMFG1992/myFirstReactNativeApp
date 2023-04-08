import React, { useEffect, useState } from 'react'
import { View, Button, Image, Text } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

function ImagesPicker(props) {
  const [hasGalleryPermission, SetHasGalleryPermission] = useState(null)
  const [image, setImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      const galleryStatus =
        await ImagePicker.requestMediaLibraryPermissionsAsync()
      SetHasGalleryPermission(galleryStatus === 'grated')
    })()
  }, [])

  const pickImages = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      //   mediaTypes: ImagePicker.mediaTypes.images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }

    if (hasGalleryPermission === false) {
      return <Text>No Access to Internal Storage</Text>
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Pick an image from camera roll"
        onPress={() => pickImages()}
        style={{ marginTop: 30 }}
      />
      {image && <Image source={{ uri: image }} style={{ flex: 1 / 2 }} />}
    </View>
  )
}

export default ImagesPicker
