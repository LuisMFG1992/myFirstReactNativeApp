import React, { useState } from 'react'
import { View } from 'react-native'

import Screen from './Screen'
import ImageInputList from './ImageInputList'

function ImagesPicker() {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = uri => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = uri => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <Screen>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageInputList
          imageUris={imageUris}
          onAddImage={handleAdd}
          onRemoveImage={handleRemove}
        />
      </View>
    </Screen>
  )
}

export default ImagesPicker
