import React from 'react'
import AppFormImagePicker from './app/components/foms/AppFormImagePicker'
import { AppForm } from './app/components/foms'
import ImageInputList from './app/components/ImageInputList'
import ListingEditScreen from './app/Screens/ListingEditScreen'

export default function App() {
  return (
    // <>
    //   <AppForm
    //     initialValues={{
    //       title: '',
    //       price: '',
    //       description: '',
    //       categories: null,
    //       images: [],
    //     }}
    //     onSubmit={values => console.log(values)}
    //     // validationSchema={validationSchema}
    //   >
    //     <ImageInputList />
    //   </AppForm>
    // </>
    <ImageInputList />
  )
}
