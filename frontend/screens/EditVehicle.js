import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Field from '../components/Field';
import Button from '../components/Button';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';
import DatePicker from 'react-native-date-picker';

export default function EditVehicle({route}) {
  const [number, setNumber] = useState('');
  const [model, setModel] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [seller, setSeller] = useState('');
  const [tempDate, setTempDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState(
    'https://getstamped.co.uk/wp-content/uploads/WebsiteAssets/Placeholder.jpg',
  );

  useEffect(() => {
    setNumber(route.params.obj.number);
    setModel(route.params.obj.model);
    setLocation(route.params.obj.location);
    setPrice(route.params.obj.price);
    setSeller(route.params.obj.seller);
    setTempDate(new Date(route.params.obj.date));
    setImage(route.params.obj.image);
  },[])

  const updateVehicle = async () => {
    const username = global.username;
    const id = route.params.obj._id;
    const date = tempDate.getFullYear() +
      '-' +
      (tempDate.getMonth() + 1) +
      '-' +
      tempDate.getDate();

    console.log(image);
    console.log(number);
    console.log(model);
    console.log(date);
    console.log(location);
    console.log(price);
    console.log(seller);
    console.log(username);

  
      await fetch(`http://192.168.1.4:5000/api/vehicles/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          number,
          model,
          date,
          location,
          price,
          seller,
          image,
          username,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(() => {
        Alert.alert('Vehicle Details Updated Successfully');
      })
      .catch(() => {
        Alert.alert('Try Again');
      });
  };

  const deleteVehicle = async () => {

    const id = route.params.obj._id;

    await fetch(`http://192.168.1.4:5000/api/vehicles/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        Alert.alert('Vehicle Details Deleted Successfully');
      })
      .catch(() => {
        Alert.alert('Try Again');
      });
  }

  const takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.7,
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  };

  renderInner = () => (
    <View style={styles.panel}>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose pic</Text>
      </View>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={takePhotoFromCamera}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={choosePhotoFromLibrary}>
        <Text style={styles.panelButtonTitle}>Choose From Library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => this.bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>cancel</Text>
      </TouchableOpacity>
    </View>
  );

  renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  bs = React.createRef();
  fall = new Animated.Value(1);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={this.bs}
        snapPoints={[330, 0]}
        renderContent={this.renderInner}
        renderHeader={this.renderHeader}
        initialSnap={1}
        callbackNode={this.fall}
        enabledGestureInteraction={true}
      />
      <Animated.View
        style={{
          margin: 20,
          opacity: Animated.add(0.1, Animated.multiply(this.fall, 1.0)),
        }}>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              marginVertical: 5,
              fontSize: 25,
              fontWeight: 'bold',
              color: 'purple',
            }}>
            Edit Vehicle Details
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.bs.current.snapTo(0);
            }}>
            <View
              style={{
                height: 110,
                width: 150,

                alignItems: 'center',
              }}>
              <ImageBackground
                source={{
                  uri: image,
                }}
                style={{height: 110, width: 150, marginTop: 2}}
                imageStyle={{borderRadius: 15}}></ImageBackground>
            </View>
          </TouchableOpacity>
          <Field
            placeholder="Vehicle Number"
            value={number}
            onChangeText={e => {
              setNumber(e);
            }}
          />
          <Field
            placeholder="Model"
            value={model}
            onChangeText={e => {
              setModel(e);
            }}
          />
          <DatePicker
            mode={'date'}
            dateFormat="YYYY-MM-DD"
            modal
            open={open}
            date={tempDate}
            onConfirm={tempDate => {
              setTempDate(tempDate);
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
              tempDate.getFullYear() +
              '-' +
              (tempDate.getMonth() + 1) +
              '-' +
              tempDate.getDate()
            }
          />
          <Field
            placeholder="Location"
            value={location}
            onChangeText={e => {
              setLocation(e);
            }}
          />
          <Field
            placeholder="Price"
            value={price}
            onChangeText={e => {
              setPrice(e);
            }}
          />
          <Field
            placeholder="Seller Name"
            value={seller}
            onChangeText={e => {
              setSeller(e);
            }}
          />
          <Button
            textColor="white"
            bgColor="#F79F1F"
            btnLabel="Update"
            press={updateVehicle}
          />
          <Button
            textColor="white"
            bgColor="#B53471"
            btnLabel="Delete
            "
            press={deleteVehicle}
          />
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#1B1464',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
});
