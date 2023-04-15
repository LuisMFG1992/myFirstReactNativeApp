import React from 'react'
import ImageInputList from '../ImageInputList'
import ErrorMesseges from './ErrorMesseges'
import { useFormikContext } from 'formik'

function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()

  const imageUris = values[name]

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
