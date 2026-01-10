import { NavigationContainer } from '@react-navigation/native'
import { TamaguiProvider } from 'tamagui'
import { tamaguiConfig } from './theme/tamagui.config'
import { AppNavigator } from './app/AppNavigator'

export default function App() {
  return (
    <TamaguiProvider config={tamaguiConfig}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </TamaguiProvider>
  )
}
