import {TextInput} from 'react-native';
import React from 'react';

export default function Field(props) {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 40,
        color: 'green',
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 12,
      }}
      placeholderTextColor="green"></TextInput>
  );
}
