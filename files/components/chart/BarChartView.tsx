import React from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'
import Animated, { FadeIn } from 'react-native-reanimated'

const { width } = Dimensions.get('window')

export default function BarChartView() {
  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <BarChart
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{ data: [40, 30, 25, 45, 50, 42] }],
        }}
        width={width - 30}
        height={220}
        fromZero
        withInnerLines={false}
        chartConfig={{
          backgroundGradientFrom: '#FFFFFF',
          backgroundGradientTo: '#FFFFFF',
          decimalPlaces: 0,
          color: () => '#2563EB',
          labelColor: () => '#9CA3AF',
          fillShadowGradient: '#2563EB',
          fillShadowGradientOpacity: 0.8,
        }}
        style={styles.chart}
      />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
    // marginTop: 10,
    // backgroundColor: '#fff',
    // borderRadius: 24,
    // paddingVertical: 10,
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },
  chart: {
    borderRadius: 24,
  },
})
