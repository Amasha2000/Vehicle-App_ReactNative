import { View} from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Register from './screens/Register';
import TabScreen from './screens/TabScreen';
import Login from './screens/Login';
import AddVehicle from './screens/AddVehicle';
import EditVehicle from './screens/EditVehicle';
// import { AuthContext } from './components/context';
// import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {

  // const initialLoginState = {
  //   userName: null,
  //   userToken: null,
  // };

  // const loginReducer = (prevState, action) => {
  //   switch( action.type ) {
  //     case 'RETRIEVE_TOKEN': 
  //       return {
  //         ...prevState,
  //         userToken: action.token,
  //       };
  //     case 'LOGIN': 
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //       };
  //     case 'LOGOUT': 
  //       return {
  //         ...prevState,
  //         userName: null,
  //         userToken: null,
  //       };
  //     case 'REGISTER': 
  //       return {
  //         ...prevState,
  //         userName: action.id,
  //         userToken: action.token,
  //       };
  //   }
  // };

  // const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  // const authContext = React.useMemo(() => ({
  //   signIn: async(foundUser) => {
  //     const userToken = String(foundUser[0].userToken);
  //     const userName = foundUser[0].username;
      
  //     try {
  //       await AsyncStorage.setItem('userToken', userToken);
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'LOGIN', id: userName, token: userToken });
  //   },
  //   signOut: async() => {
  //     try {
  //       await AsyncStorage.removeItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'LOGOUT' });
  //   },
  //   signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
  //   },
  // }), []);

  // useEffect(() => {
  //   setTimeout(async() => {
  //     let userToken;
  //     userToken = null;
  //     try {
  //       userToken = await AsyncStorage.getItem('userToken');
  //     } catch(e) {
  //       console.log(e);
  //     }
  //     dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
  //   }, 1000);
  // }, []);

  return (
    // <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {/* loginState.userToken != null && ( */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddVehicle" component={TabScreen} />
        <Stack.Screen name="EditVehicle" component={EditVehicle} />
      </Stack.Navigator>
    </NavigationContainer>
    // </AuthContext.Provider>
  ); 
}