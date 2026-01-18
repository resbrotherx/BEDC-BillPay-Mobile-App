import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native'
import Animated, {
  FadeInDown,
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated'
import StatHeader from '../components/chart/StatHeader'
import IncomeExpenseCard from '../components/chart/IncomeExpenseCard'
import ChartSwitcher from '../components/chart/ChartSwitcher'
import LineChartView from '../components/chart/LineChartView'
import BarChartView from '../components/chart/BarChartView'
import ExpenseItem from '../components/chart/ExpenseItem'

const { width } = Dimensions.get('window')

export default function StatisticScreen({ navigation }: any) {
  const [chart, setChart] = useState<'line' | 'bar'>('line')
  const scrollY = useSharedValue(0)

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.y
    },
  })

  return (
    <SafeAreaView style={styles.container}>
      <StatHeader />

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Animated.View entering={FadeInDown.delay(100)}>
          <IncomeExpenseCard />
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200)}>
          <View style={styles.overviewRow}>
            <View>
              <Text style={styles.sectionTitle}>Statistic Overview</Text>
              <Text style={styles.date}>
                Nov 1, 2020 - Nov 30, 2020
              </Text>
            </View>

            <ChartSwitcher value={chart} onChange={setChart} />
            <View style={styles.filter}>
                <Text style={styles.filterText}>Monthly</Text>
            </View>

          </View>
        </Animated.View>

       
        <Animated.View entering={FadeInDown.delay(300)}>
            {chart === 'line' ? <LineChartView /> : <BarChartView />}
        </Animated.View>


        <Animated.View entering={FadeInDown.delay(400)} style={{margin:20}}>
          <Text style={styles.sectionTitle}>Recent Expenses</Text>
        </Animated.View>

        <ExpenseItem
          title="Starbucks Coffee"
          time="2 Dec 2023 • 4:09 PM"
          amount="+$156.00"
          positive
        />

        <ExpenseItem
          title="Netflix Subscription"
          time="21 Dec 2023 • 2:00 PM"
          amount="-$136.00"
        />
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding:20,
  },
  overviewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },
  date: {
    fontSize: 13,
    color: '#9CA3AF',
    marginTop: 4,
  },

 filter: {
  backgroundColor: '#EEF2FF',
  paddingHorizontal: 12,
  paddingVertical: 6,
  borderRadius: 12,
  marginLeft: 12,
},
filterText: {
  fontSize: 13,
  fontWeight: '600',
  color: '#2563EB',
},


})
