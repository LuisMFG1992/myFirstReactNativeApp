import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMesseges from './ErrorMesseges'
import ImageInputList from '../ImageInputList'

function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  const imageUris = [values[name]]

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri])
  }

  const handleRemove = uri => {
    setFieldValue(
      name,
      imageUris.filter(imageUri => imageUri !== uri),
    )
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMesseges error={errors[name]} visible={touched[name]} />
    </>
  )
}

export default AppFormImagePicker
