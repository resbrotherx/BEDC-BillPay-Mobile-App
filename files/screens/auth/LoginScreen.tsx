import { View, Text, Pressable } from 'react-native'

export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>

      <Pressable
        onPress={() => navigation.replace('Main')}
        style={{
          marginTop: 20,
          backgroundColor: '#00E5FF',
          padding: 16,
          borderRadius: 12,
        }}
      >
        <Text>Continue</Text>
      </Pressable>
    </View>
  )
}
