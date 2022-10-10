import {View, Text} from 'react-native';
import React from 'react';
// import {NativeBaseProvider, Button} from 'native-base';
import Background from '../components/Background';
import Button from '../components/Button';

export default function Home({navigation}) {
  return (
    <Background>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <View>
          <Text
            style={{
              color: 'purple',
              fontSize: 60,
              textAlign: 'center',
              marginTop: 0,
              fontWeight: 'bold',
            }}>
            Welcome!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#74b9ff',
            marginTop: 220,
            height: 550,
            width: 410,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            paddingTop: 10,
            display: 'flex',
            alignItems: 'center',
          }}>
          <View style={{marginTop: 80}}>
            <Button
              bgColor="#8e44ad"
              textColor="#bdc3c7"
              btnLabel="Sign In"
              press={() => navigation.navigate('Login')}
            />
            <Button
              bgColor="#636e72"
              textColor="#a29bfe"
              btnLabel="Sign Up"
              press={() => navigation.navigate('Register')}
            />
            <Text style={{marginTop:25,color:'purple',fontSize:16}}>Get Started...</Text>
          </View>
        </View>
      </View>
    </Background>
  );
}

