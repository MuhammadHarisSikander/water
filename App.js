import React, { useState } from 'react'
import { Text, View, Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/login'
import SignUp from './src/screens/signUp'
import Home from './src/screens/phScreen'
import Chart from "./src/screens/chart";
import Graph from "./src/screens/graph";
import WaterPh from './src/screens/waterPh';
import WaterMineral from './src/screens/waterMineral';
import Profile from './src/screens/profile';



const MyDrawer = function (props) {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={Home} options={{
        headerBackVisible: false,
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center' }}>
            <Image source={require('./src/component/img/home.png')}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#036fa5' : '#748c94'
              }}
            />
            <Text style={{ color: focused ? '#036fa5' : '#748c94' }}>
              Home
            </Text>

          </View>
        ),
        headerTitleAlign: 'center',
        tabBarLabel: () => false

      }} />

      <Tab.Screen name="WaterPH" component={WaterPh}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image source={require('./src/component/img/waterdrop.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#036fa5' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#036fa5' : '#748c94' }}>PH</Text>

            </View>
          ),
          headerTitleAlign: 'center',
          tabBarLabel: () => false,
          headerBackVisible: false

        }}
      />

      <Tab.Screen name="WaterTemp" component={Chart}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image source={require('./src/component/img/temp.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#036fa5' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#036fa5' : '#748c94' }}>Temp</Text>
            </View>
          ),
          headerTitleAlign: 'center',
          tabBarLabel: () => false,
          headerBackVisible: false
        }}
      />


      <Tab.Screen name="WaterMineral" component={WaterMineral}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image source={require('./src/component/img/mineral-water.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#036fa5' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#036fa5' : '#748c94' }}>Mineral</Text>

            </View>
          ),
          headerTitleAlign: 'center',
          tabBarLabel: () => false,
          headerBackVisible: false
        }}
      />

      <Tab.Screen name="Records" component={Graph}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center' }}>
              <Image source={require('./src/component/img/edit.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#036fa5' : '#748c94'
                }}
              />
              <Text style={{ color: focused ? '#036fa5' : '#748c94' }}>Records</Text>

            </View>
          ),
          headerTitleAlign: 'center',
          tabBarLabel: () => false,
          headerBackVisible: false
        }}
      />

    </Tab.Navigator>
  );
};





const App = (props) => {

  const Stack = createNativeStackNavigator();
  const [route, setRoute] = useState("Login")

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={route} >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'LOGIN', headerTitleAlign: 'center', headerBackVisible: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: 'SIGN-UP', headerTitleAlign: 'center', headerBackVisible: false }}
        />
        <Stack.Screen
          name="Home"
          component={MyDrawer}
          options={{ headerBackVisible: false }}
        // options={{  headerRight:()=><Button  onPress={()=>console.log(user.currentUser.email)} color="red">Logout</Button> }} //icon={require('./src/component/img/logout.png')} , , icon={({})=>(<Image source={require('./src/component/img/logout.png')} style={{width:40,height:40,borderWidth:1}}/>)}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
        // options={{headerBackVisible: false }}
        // options={{  headerRight:()=><Button  onPress={()=>console.log(user.currentUser.email)} color="red">Logout</Button> }} //icon={require('./src/component/img/logout.png')} , , icon={({})=>(<Image source={require('./src/component/img/logout.png')} style={{width:40,height:40,borderWidth:1}}/>)}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}
export default App