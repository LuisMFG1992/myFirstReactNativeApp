import React from "react";
import AppTextInput from "../AppTextInput";
import ErrorMesseges from "./ErrorMesseges";
import { useFormikContext } from "formik";

function AppFormField({ name, width, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        width={width}
        {...otherProps}
      />
      <ErrorMesseges error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;
