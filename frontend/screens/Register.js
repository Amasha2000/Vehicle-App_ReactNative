import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from '../components/Background';
import Field from '../components/Field';
import Button from '../components/Button';

export default function Register({navigation}) {
  return (
    <Background>
      <View>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 50,
            marginTop: 80,
            fontWeight: 'bold',
          }}>
          Sign Up
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            marginTop: 120,
            height: 550,
            width: 410,
            borderTopLeftRadius: 130,
            paddingTop: 10,
            display: 'flex',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: 'green', fontWeight: 'bold'}}>
            Welcome
          </Text>
          <Text
            style={{
              color: 'gray',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 50,
            }}>
            Sign Up to Login to your account
          </Text>
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
      </View>
    </Background>
  );
}
