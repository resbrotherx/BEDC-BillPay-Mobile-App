import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { PanGestureHandler } from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated'

const { width } = Dimensions.get('window')
const CHART_WIDTH = width - 40
const DATA = [40, 30, 25, 45, 50, 42]

export default function ChartScrubber({ onChange }: any) {
  const x = useSharedValue(0)

  const gesture = useAnimatedGestureHandler({
    onActive: (e) => {
      x.value = Math.min(Math.max(e.x, 0), CHART_WIDTH)
      const index = Math.round((x.value / CHART_WIDTH) * (DATA.length - 1))
      runOnJS(onChange)(DATA[index])
    },
  })

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }],
  }))

  return (
    <PanGestureHandler onGestureEvent={gesture}>
      <Animated.View style={styles.overlay}>
        <Animated.View style={[styles.cursor, style]} />
      </Animated.View>
    </PanGestureHandler>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 20,
    right: 20,
  },
  cursor: {
    width: 2,
    height: '100%',
    backgroundColor: '#2563EB',
    opacity: 0.4,
  },
})
