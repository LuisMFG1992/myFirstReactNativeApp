// import React, { useEffect, useState } from 'react'
// import { View, Button, Image, Text } from 'react-native'
// import * as ImagePicker from 'expo-image-picker'

// function ImagesPicker(props) {
//   const [hasGalleryPermission, SetHasGalleryPermission] = useState(null)
//   const [image, setImage] = useState(null)

//   useEffect(() => {
//     ;(async () => {
//       const galleryStatus =
//         await ImagePicker.requestMediaLibraryPermissionsAsync()
//       SetHasGalleryPermission(galleryStatus === 'grated')
//     })()
//   }, [])

//   const pickImages = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       //   mediaTypes: ImagePicker.mediaTypes.images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     })
//     console.log(result)

//     if (!result.canceled) {
//       setImage(result.assets[0].uri)
//     }

//     if (hasGalleryPermission === false) {
//       return <Text>No Access to Internal Storage</Text>
//     }
//   }

//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         title="Pick an image from camera roll"
//         onPress={() => pickImages()}
//         style={{ marginTop: 30 }}
//       />
//       {image && <Image source={{ uri: image }} style={{ flex: 1 / 2 }} />}
//     </View>
//   )
// }

// export default ImagesPicker

import React, { useState } from 'react'
// useEffect,
import { Button, Image, View } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

function ImagesPicker() {
  const [image, setImage] = useState(null)

  // const [hasGalleryPermission, SetHasGalleryPermission] = useState(null)

  // useEffect(() => {
  //   ;(async () => {
  //     const galleryStatus =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync()
  //     SetHasGalleryPermission(galleryStatus === 'grated')
  //   })()
  // }, [])

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.canceled) {
      setImage(result.assets[0].uri)
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  )
}

export default ImagesPicker
