import { useFormikContext } from 'formik'
import React from 'react'
import AppPicker from '../../components/AppPicker'
import ErrorMesseges from './ErrorMesseges'

function AppFormPicker({ items, name, placeholder }) {
  const { errors, setFieldValue, touched, values } = useFormikContext()
  return (
    <AppPicker
      items={item => setFieldValue(name, item)}
      placeholder={placeholder}
      selectedItem={values[name]}
    >
      <ErrorMesseges error={errors[name]} visible={touched[name]} />
    </AppPicker>
  )
}

export default AppFormPicker
