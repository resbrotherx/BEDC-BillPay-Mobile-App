import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import { AnimatedPress2 } from '../AnimatedPress'

export default function ChartToggle({ mode, setMode }: any) {
  const translateX = useSharedValue(mode === 'line' ? 0 : 100)

  const indicator = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.indicator, indicator]} />

      <AnimatedPress2
        style={styles.item}
        onPress={() => {
          translateX.value = withTiming(0)
          setMode('line')
        }}
      >
        <Text style={styles.text}>Line</Text>
      </AnimatedPress2>

      <AnimatedPress2
        style={styles.item}
        onPress={() => {
          translateX.value = withTiming(100)
          setMode('bar')
        }}
      >
        <Text style={styles.text}>Bar</Text>
      </AnimatedPress2>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#EEF2FF',
    borderRadius: 20,
    margin: 20,
    height: 44,
  },
  indicator: {
    position: 'absolute',
    width: 100,
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 20,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#1F2937',
    fontWeight: '600',
  },
})
