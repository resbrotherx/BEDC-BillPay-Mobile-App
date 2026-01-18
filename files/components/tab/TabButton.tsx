import { Pressable, Text, StyleSheet } from 'react-native'
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

import {
  HomeIcon,
  PayIcon,
  UsageIcon,
  AIIcon,
  ProfileIcon,
} from '../../assets/icons'

const ICONS = {
  Home: HomeIcon,
  Pay: PayIcon,
  Usage: UsageIcon,
  AI: AIIcon,
  Profile: ProfileIcon,
}

const COLORS = {
  Home: '#4FA3AE',
  Pay: '#2E86DE',
  Usage: '#27AE60',
  AI: '#9B59B6',
  Profile: '#E67E22',
}

export function TabButton({ label, focused, onPress }) {
  const Icon = ICONS[label]
  const color = COLORS[label]

  const containerStyle = useAnimatedStyle(() => ({
    flex: withSpring(focused ? 1.4 : 0.7),
  }))

  const bgStyle = useAnimatedStyle(() => ({
    opacity: withTiming(focused ? 1 : 0),
    transform: [{ scale: withSpring(focused ? 1 : 0.6) }],
  }))

  const textStyle = useAnimatedStyle(() => ({
    opacity: withTiming(focused ? 1 : 0),
    width: focused ? 'auto' : 0,
  }))

  return (
    <Pressable onPress={onPress} style={{ flex: 1 }}>
      <Animated.View style={[styles.tab, containerStyle]}>
        {/* ACTIVE PILL */}
        <Animated.View
          style={[
            styles.activeBg,
            { backgroundColor: color },
            bgStyle,
          ]}
        />

        {/* ICON */}
        <Icon color={focused ? '#fff' : '#9CA3AF'} />


        {/* LABEL */}
        <Animated.Text style={[styles.label, textStyle]}>
          {label}
        </Animated.Text>
      </Animated.View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 18,
    borderRadius: 14,
    gap: 1,
    overflow: 'hidden',
  },
  activeBg: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 10,
    paddingHorizontal:10,
    height:'80%',
    marginTop:5,

  },
  label: {
    color: '#fff',
    fontWeight: '300',
  },
})
