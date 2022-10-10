import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React, { useState } from 'react';
import Background from '../components/Background';
import Field from '../components/Field';
import Button from '../components/Button';

export default function Register({ navigation }) {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const register = async() => {
    await fetch('http://192.168.1.4:5000/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        'Content-type':'application/json; charset=UTF-8'
      },
    })
      .then(() => {
        Alert.alert('User Registered Successfully');
      })
      .catch(()=>{ Alert.alert('Try Again');});
  }

  return (
    <Background>
      <View>
        <Text
          style={{
            color: 'purple',
            textAlign: 'center',
            fontSize: 50,
            marginTop: 10,
            fontWeight: 'bold',
          }}>
          Sign Up
        </Text>
        <View
          style={{
            backgroundColor: '#bdc3c7',
            marginTop: 160,
            height: 550,
            width: 410,
            borderTopLeftRadius: 130,
            paddingTop: 10,
            display: 'flex',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 35, color: '#6F1E51', fontWeight: 'bold'}}>
            Welcome
          </Text>
          <Text
            style={{
              color: '#5758BB',
              fontSize: 20,
              fontWeight: 'bold',
              marginBottom: 30,
            }}>
            Sign Up to Login to your account
          </Text>
          <Field placeholder="Email" onChangeText={e => setEmail(e)} />
          <Field placeholder="Username" onChangeText={e => setUsername(e)} />
          <Field
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={e => setPassword(e)}
          />
          <Button
            textColor="#bdc3c7"
            bgColor="#8e44ad"
            btnLabel="Sign Up"
            press={register}
          />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 20,
                color: '#5758BB',
              }}>
              Do you have an account?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: '#6F1E51',
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
