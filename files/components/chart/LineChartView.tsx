import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import Animated, {
  FadeIn,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'

const { width } = Dimensions.get('window')

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      data: [40, 30, 25, 45, 50, 42],
      strokeWidth: 3,
    },
  ],
}

export default function LineChartView() {
  const [point, setPoint] = useState({ x: 3, value: 45 })
  const scale = useSharedValue(0)

  const tooltipStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: scale.value,
  }))

  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <LineChart
        data={data}
        width={width + 30}
        height={230}
        withInnerLines={false}
        withOuterLines={true}
        withDots
        withShadow
        bezier
        onDataPointClick={({ value, index }) => {
          setPoint({ x: index, value })
          scale.value = withSpring(1)
        }}
        chartConfig={{
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0,
          color: () => '#2563EB',
          labelColor: () => '#9CA3AF',
          propsForDots: {
            r: '6',
            strokeWidth: '3',
            stroke: '#2563EB',
          },
          fillShadowGradient: '#2563EB',
          fillShadowGradientOpacity: 0.15,
        }}
        style={styles.chart}
      />

      {/* Tooltip */}
      <Animated.View style={[styles.tooltip, tooltipStyle]}>
        <Text style={styles.tooltipText}>${point.value}.000</Text>
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
    // marginTop: 10,
    // backgroundColor: '#fff',
    // borderRadius: 24,
    //paddingVertical: 10,
    // shadowOpacity: 0.05,
    // shadowRadius: 12,
    // elevation: 3,
  },
  chart: {
    borderRadius: 24,
  },
  tooltip: {
    position: 'absolute',
    top: 20,
    left: width / 2 - 80,
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
  },
  tooltipText: {
    color: '#fff',
    fontWeight: '700',
  },
})
