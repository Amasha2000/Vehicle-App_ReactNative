import { View, Text, TouchableOpacity, ImageBackground,StyleSheet,ScrollView} from 'react-native'
import Field from '../components/Field';
import DatePicker from 'react-native-date-picker';
import React, { useState, useEffect } from 'react'

export default function ViewVehicle({ navigation }) {

  const [vehicles, setVehicles] = useState([]);
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  useEffect(() => {
    navigation.addListener('focus', () => {
      fetch(`http://192.168.1.4:5000/api/vehicles/?username=${global.username}`)
        .then(response => response.json())
        .then(json => setVehicles(json));
    })
  },[]);


  const searchLocation = async () => {
    
    await fetch(
      `http://192.168.1.4:5000/api/vehicles/?location=${location}&username=${global.username}`,
    )
      .then(response => response.json())
      .then(json => setVehicles(json));
    trigger = true;
  };  

  const searchDate = async () => {
    await fetch(
      `http://192.168.1.4:5000/api/vehicles/?date=${date}&username=${global.username}`,
    )
      .then(response => response.json())
      .then(json => setVehicles(json));
    trigger = true;
  }; 

  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <Field
          placeholder="Location"
          onChangeText={e => {
            setLocation(e);
          }}
        />
        <TouchableOpacity
          style={{
            width: 150,
            backgroundColor: '#1289A7',
            borderRadius: 5,
            padding: 5,
          }}
          onPress={searchLocation}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Search by Location
          </Text>
        </TouchableOpacity>
        <DatePicker
          mode={'date'}
          modal
          open={open}
          date={date}
          onConfirm={date => {
            setDate(date);
            setOpen(false);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
        <Field
          onFocus={() => {
            setOpen(true);
          }}
          value={
            date.getFullYear() +
            '-' +
            (date.getMonth() + 1) +
            '-' +
            date.getDate()
          }
        />
        <TouchableOpacity
          style={{
            width: 150,
            backgroundColor: '#1289A7',
            borderRadius: 5,
            padding: 5,
          }}
          onPress={searchDate}>
          <Text
            style={{
              fontSize: 16,
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Search by Date
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{padding: 20}}>
        {vehicles.map(item => {
          return (
            <TouchableOpacity
              key={item.number}
              style={{borderWidth: 1, marginBottom: '5%', padding: 5}}
              onPress={() => {
                navigation.navigate('EditVehicle', {obj: item});
              }}>
              <ImageBackground
                source={{uri: item.image}}
                style={styles.tinyLogo}
              />
              <Text
                style={{marginBottom: 10, fontWeight: 'bold', color: 'black'}}>
                Vehicle Number : {item.number}
              </Text>
              <Text style={{marginBottom: 10, color: 'black'}}>
                Model : {item.model}
              </Text>
              <Text style={{marginBottom: 10, color: 'black'}}>
                Date : {item.date}
              </Text>
              <Text style={{marginBottom: 10, color: 'black'}}>
                Location : {item.location}
              </Text>
              <Text style={{marginBottom: 10, color: 'black'}}>
                Price : {item.price}
              </Text>
              <Text style={{marginBottom: 10, color: 'black'}}>
                Seller Name : {item.seller}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  tinyLogo: {
    width: 200,
    height: 100,
  }
});