import {View, Text} from 'react-native';
import React from 'react';
// import {NativeBaseProvider, Button} from 'native-base';
import Background from '../components/Background';
import Button from '../components/Button';

export default function Home({navigation}) {
  return (
    <Background>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 64,
            textAlign: 'center',
            marginTop: 150,
            marginBottom: 200,
          }}>
          Welcome
        </Text>
        <Button
          bgColor="#288789"
          textColor="white"
          btnLabel="Sign In"
          press={() => navigation.navigate('Login')}
        />
        <Button
          bgColor="white"
          textColor="#006A42"
          btnLabel="Sign Up"
          press={() => navigation.navigate('Register')}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 30,
            textAlign: 'center',
            marginTop: 10,
          }}>
          Get start
        </Text>
      </View>
    </Background>
  );
}

