import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LiquidTabBar } from './LiquidTabBar'

import HomeScreen from '../screens/HomeScreen'
import PayScreen from '../screens/PayScreen'
import UsageScreen from '../screens/UsageScreen'
import AIScreen from '../screens/AIScreen'
import ProfileScreen from '../screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <LiquidTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Pay" component={PayScreen} />
      <Tab.Screen name="Usage" component={UsageScreen} />
      <Tab.Screen name="AI" component={AIScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
