import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNagivation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name="Tab" component={null} />
      <ProfileTabs.Screen name="Tab" component={null} />
      <ProfileTabs.Screen name="Tab" component={null} />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNagivation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{header: () => null, headerShown: false}} // enable drawer for header
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNagivation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
