import React from 'react'
import { View, StyleSheet } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated'

export function Skeleton({ height }: any) {
  const opacity = useSharedValue(0.4)

  React.useEffect(() => {
    opacity.value = withRepeat(
      withTiming(1, { duration: 800 }),
      -1,
      true
    )
  }, [])

  const style = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }))

  return (
    <Animated.View
      style={[
        styles.box,
        style,
        { height },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#E5E7EB',
    borderRadius: 16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
})
