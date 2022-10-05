import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Field from '../components/Field';
import Button from '../components/Button';

export default function Form({navigation}) {
  return (
      <View>
          <Field placeholder="Email" />
          <Field placeholder="Username" />
          <Field placeholder="Password" secureTextEntity={true} />
          <Button
            textColor="white"
            bgColor="green"
            btnLabel="Sign Up"
            press={() => alert('Logged In')}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginTop: 20}}>
              Do you have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: 'green',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginTop: 20,
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
  );
}
