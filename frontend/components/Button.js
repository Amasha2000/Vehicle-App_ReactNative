import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button({bgColor, textColor, btnLabel,press}) {
  return (
    <TouchableOpacity
      onPress={press}
      style={{
        backgroundColor: bgColor,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 10,
        marginTop: 20,
        width: 250,
      }}>
      <Text style={{color: textColor, fontSize: 28, fontWeight: 'bold'}}>
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
