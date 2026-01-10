import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabs } from '../navigation/BottomTabs'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/auth/LoginScreen'

const Stack = createNativeStackNavigator()

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={BottomTabs} />
    </Stack.Navigator>
  )
}
