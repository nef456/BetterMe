import React, {useState} from 'react';
import {  NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../../Screens/HomeScreen.js';
import LoseWeight from '../../Screens/LoseWeight.js';
import MaintainWeight from '../../Screens/MaintainWeight.js';
import GainWeight from '../../Screens/GainWeight.js';
import History from '../../Screens/History.js';


const Drawer = createDrawerNavigator();

const BetterMe = () => {

  /*Setting the state variables that I want to use in each screen. This allows me to dynamically retrieve the updated state
  when a user makes changes. It will update in whichever screen they navigate to. It allows the user to make changes to see
  where they will stand in real time without having to reload the screen each time.*/
  

  const [basilRate, setBasilRate] = useState(0);
  const [calories, setCalories] = useState(0);
  

  return (
      <NavigationContainer independent={true}>
        <Drawer.Navigator screenOptions={{ headerTitle: 'Better Me', headerTintColor: 'white', headerStyle: { backgroundColor: 'gray'}}}>
        <Drawer.Screen 
          name="Home" 
        >
          {(props) => <HomeScreen {...props} basilRate={basilRate} setBasilRate={setBasilRate} />}
        </Drawer.Screen>
        <Drawer.Screen 
          name="Lose Weight" 
        >
          {(props) => <LoseWeight {...props} basilRate={basilRate} calories={calories} setCalories={setCalories}/>}
        </Drawer.Screen>
          <Drawer.Screen 
          name="Maintain Weight">
            {(props) => <MaintainWeight {...props} basilRate={basilRate} calories={calories} setCalories={setCalories}/>}
            </Drawer.Screen>
          <Drawer.Screen 
          name="Gain Weight" 
        >
          {(props) => <GainWeight {...props} basilRate={basilRate} calories={calories} setCalories={setCalories} />}
        </Drawer.Screen>
          <Drawer.Screen 
          name="History"
          > 
          {(props) => <History {...props} calories={calories} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
        
        
      );
}

export default BetterMe;