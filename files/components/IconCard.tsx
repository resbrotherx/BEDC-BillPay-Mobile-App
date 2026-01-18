import React from 'react'
import { Text, Pressable, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'
import { wp } from '../utils/layout'

type Props = {
  label: string
  iconName: React.ComponentProps<typeof Ionicons>['name']
  color: string
  bgColor: string
  onPress: () => void
}

export default function AnimatedIconCard({
  label,
  iconName,
  color,
  bgColor,
  onPress,
}: Props) {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <Pressable
      onPressIn={() => (scale.value = withSpring(0.92))}
      onPressOut={() => (scale.value = withSpring(1))}
      onPress={onPress}
    >
      <Animated.View style={[styles.card, animatedStyle]}>
        <Animated.View
    style={{
      width: 42,
      height: 42,
      borderRadius: 14,
      backgroundColor: bgColor,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    }}
  > 
  <Ionicons name={iconName} size={22} color={color} style={{borderRadius:50, top:-1, padding:5, alignSelf:'center' }}  />
  </Animated.View>
       
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  card: {
    width: wp(19),
    alignItems: 'center',
    marginBottom: 25,
  },
  text: {
    fontSize: 12,
    marginTop: 6,
    color: '#222',
  },
})
