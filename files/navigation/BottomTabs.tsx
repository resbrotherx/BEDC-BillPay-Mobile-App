import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AnimatedTabBar } from './AnimatedTabBar'

import HomeScreen from '../screens/HomeScreen'
import PayScreen from '../screens/PayScreen'
import UsageScreen from '../screens/UsageScreen'
import AIScreen from '../screens/AIScreen'
import ProfileScreen from '../screens/ProfileScreen'
import { DrawerNavigationProp } from '@react-navigation/drawer'
import { DrawerActions } from '@react-navigation/native'

const Tab = createBottomTabNavigator()

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <AnimatedTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
      {/* <Tab.Screen name="Usage" component={UsageScreen} /> */}
      {/* <Tab.Screen name="AI" component={AIScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
       {/* 🔑 ONLY PROFILE OPENS DRAWER */}
 
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            console.log(e, "jj", navigation)
            e.preventDefault();
            (navigation.getParent() as DrawerNavigationProp<any>)?.openDrawer()
            // 🔑 drawer is TWO LEVELS UP
            const drawer = navigation.getParent()

            
          },
        })}
      />


    </Tab.Navigator>
  )
}
