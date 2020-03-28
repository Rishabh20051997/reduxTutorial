import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SplashScreen, HomeScreen, ListScreen, PlayListScreen, SettingScreen } from '../screen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function MainRouter(isSplashScreenVisible) {
    setTimeout( () => { isSplashScreenVisible = false  }, 2500)
    console.warn('isSplashScreenVisible ', isSplashScreenVisible)
    return (
        <NavigationContainer>
             <Stack.Navigator>
            {isSplashScreenVisible ? 
            <Stack.Screen name = 'SplashScreen' component = {SplashScreen}/> 
            :
            <>
            <Stack.Screen name = 'BottomTabScreen' component = {MyTabs}/>
            </>
            }
            </Stack.Navigator>
        </NavigationContainer>
    );
}


function homeScreen() {
    return <Stack.Navigator>
        <Stack.Screen name = 'Home' component = {HomeScreen}/>
        <Stack.Screen name = 'ListScreen' component = {ListScreen}/>
            </Stack.Navigator>
}

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={homeScreen} />
            <Tab.Screen name="PlayListScreen" component={PlayListScreen} />
            <Tab.Screen name="SettingScreen" component={SettingScreen} />
        </Tab.Navigator>
    );
}