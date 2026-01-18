import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BottomTabs } from '../navigation/BottomTabs'
import SplashScreen from '../screens/SplashScreen'
import LoginScreen from '../screens/auth/LoginScreen'
import AirtimeScreen from '../screens/PayBill/AirtimeScreen'
import CableTvScreen from '../screens/PayBill/CableTvScreen'
import MainDrawer from '../navigation/MainDrawer'
import PayBillScreen from '../screens/PayBill/E_Bill'
import FundWalletScreen from '../screens/FundWallet'
import StatisticScreen from '../screens/StatisticScreen'

const Stack = createNativeStackNavigator()

export function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          animationDuration: 250, // LOW FLASH
        }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Main" component={MainDrawer} />
      <Stack.Screen name="Airtime" component={AirtimeScreen} />
      <Stack.Screen name="CableTV" component={CableTvScreen} />
      <Stack.Screen name="PayBill" component={PayBillScreen} />
      <Stack.Screen name="FundWallet" component={FundWalletScreen} options={{
        animation: 'slide_from_right',
        animationDuration: 200,
      }}/>
      <Stack.Screen name="chart" component={StatisticScreen} options={{
        animation: 'slide_from_right',
        animationDuration: 200,
      }}/>
     

    </Stack.Navigator>
  )
}
