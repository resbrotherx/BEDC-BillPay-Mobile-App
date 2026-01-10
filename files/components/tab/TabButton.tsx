import { Pressable, View, StyleSheet } from 'react-native'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import {
  HomeIcon,
  PayIcon,
  UsageIcon,
  AIIcon,
  ProfileIcon,
} from '../../assets/icons'

const icons = {
  Home: HomeIcon,
  Pay: PayIcon,
  Usage: UsageIcon,
  AI: AIIcon,
  Profile: ProfileIcon,
}

export function TabButton({ focused, routeName, onPress }) {
  const Icon = icons[routeName]

  const bgStyle = useAnimatedStyle(() => ({
    opacity: withTiming(focused ? 1 : 0),
    transform: [{ scale: withTiming(focused ? 1 : 0.6) }],
  }))

  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      {/* SELECTED BACKGROUND */}
      <Animated.View style={[styles.activeBg, bgStyle]} />

      {/* ICON */}
      <View style={styles.icon}>
        <Icon color={focused ? '#fff' : '#111'} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeBg: {
    position: 'absolute',
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#4FA3AE', // teal
  },
  icon: {
    zIndex: 2,
  },
})
