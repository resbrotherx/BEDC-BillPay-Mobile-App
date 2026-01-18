import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { BottomTabs } from './BottomTabs'
import CustomDrawer1 from './SideTabs'
import { ScreensArray } from '../Data/data';
import { Platform, StyleSheet, View, Text } from 'react-native'
const Drawer = createDrawerNavigator()

export default function MainDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,

        // 🔒 Disable swipe everywhere
        swipeEnabled: false,
        drawerType: 'front',
        swipeEdgeWidth: Platform.OS === 'android' && 180,
        drawerStyle: {
          width: 260,
          backgroundColor: 'transparent',
        },
      }}
      drawerContent={(props) => <CustomDrawer1 {...props} />}
    >
      <Drawer.Screen name="Tabs" component={BottomTabs} />
        {ScreensArray.map((_, i) => (
         <Drawer.Screen key={i} name={_.route} component={_.component}
           options={{
             item: _,
           }}
         />
       ))}
    </Drawer.Navigator>
  )
}