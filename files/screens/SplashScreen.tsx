import { useEffect } from 'react'
import { View, Text } from 'react-native'

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login')
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>BEDC Bill Pay</Text>
    </View>
  )
}
