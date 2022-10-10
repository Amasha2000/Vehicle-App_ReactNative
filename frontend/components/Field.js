import {TextInput} from 'react-native';
import React from 'react';

export default function Field(props) {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 10,
        color: '#1B1464',
        paddingHorizontal: 10,
        width: '80%',
        backgroundColor: 'rgb(220,220,220)',
        marginVertical: 10,
        fontSize: 17,
      }}
      placeholderTextColor="#1B1464"></TextInput>
  );
}
