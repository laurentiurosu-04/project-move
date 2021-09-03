import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet, Button } from 'react-native';

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <Button title={title} onPress={handleSubmit} />;
}

const styles = StyleSheet.create({});

export default SubmitButton;
