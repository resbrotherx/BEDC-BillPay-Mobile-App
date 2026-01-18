import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated'
import { AnimatedPress } from '../AnimatedPress'

const WIDTH = Dimensions.get('window').width - 40
const OPTION_WIDTH = WIDTH / 2

export default function ChartSwitcher({ value, onChange }: any) {
  const translateX = useSharedValue(value === 'line' ? 0 : OPTION_WIDTH)

  useEffect(() => {
    translateX.value = withTiming(
      value === 'line' ? 0 : OPTION_WIDTH,
      { duration: 220 }
    )
  }, [value])

  const indicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }))

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {/* SLIDING INDICATOR */}
        <Animated.View style={[styles.indicator, indicatorStyle]} />

        <AnimatedPress
          style={styles.option}
          onPress={() => onChange('line')}
        >
          <Text
            style={[
              styles.text,
              value === 'line' && styles.activeText,
            ]}
          >
            Line
          </Text>
        </AnimatedPress>

        <AnimatedPress
          style={styles.option}
          onPress={() => onChange('bar')}
        >
          <Text
            style={[
              styles.text,
              value === 'bar' && styles.activeText,
            ]}
          >
            Bar
          </Text>
        </AnimatedPress>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  container: {
    height: 46,
    borderRadius: 24,
    backgroundColor: '#EEF2FF',
    flexDirection: 'row',
    position: 'relative',
    overflow: 'hidden',
  },

  indicator: {
    position: 'absolute',
    width: OPTION_WIDTH,
    height: '100%',
    backgroundColor: '#2563EB',
    borderRadius: 24,
  },

  option: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
  },

  text: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },

  activeText: {
    color: '#FFFFFF',
  },
})
