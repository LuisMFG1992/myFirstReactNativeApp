import React, { useState } from 'react'
import * as Yup from 'yup'
import AppPicker from '../components/AppPicker'

import {
  AppForm,
  AppFormField,
  // AppFormPicker,
  SubmitButton,
} from '../components/foms'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.string().required().min(1).max(1000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
})

const categories = [
  { label: 'Forniture', value: 1, backgroundColor: 'red', icon: 'apps' },
  { label: 'Clothing', value: 2, backgroundColor: 'green', icon: 'email' },
  { label: 'Camera', value: 3, backgroundColor: 'blue', icon: 'lock' },
]

function ListingEditScreen(props) {
  const [pickerValue, setPickerValue] = useState()
  return (
    <Screen>
      <AppForm
        initialValues={{
          title: '',
          price: '',
          description: '',
          categories: null,
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLeght={255} name="title" placeholder="Title" />
        <AppFormField
          keyboardType="numeric"
          maxLeght={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <AppPicker
          items={categories}
          name="category"
          placeholder="Category"
          pickerValue={pickerValue}
          setPickerValue={setPickerValue}
          width={'50%'}
          numberOfColumns={3}
        />
        <AppFormField
          maxLeght={255}
          miltiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
          pickerValue={pickerValue}
          setPickerValue={setPickerValue}
        />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 10,
//   },
// });

export default ListingEditScreen
