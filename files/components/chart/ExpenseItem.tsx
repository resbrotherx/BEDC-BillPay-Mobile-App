import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

export default function ExpenseItem({
  title,
  time,
  amount,
  positive,
}: any) {
  return (
    <Animated.View
      entering={FadeInDown}
      style={styles.row}
    >
      <View style={styles.left}>
        <View style={styles.icon}>
          <Text style={{ fontWeight: '700' }}>
            {title[0]}
          </Text>
        </View>

        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>

      <Text
        style={[
          styles.amount,
          { color: positive ? '#22C55E' : '#EF4444' },
        ]}
      >
        {amount}
      </Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  icon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EEF2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
  },
  time: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 2,
  },
  amount: {
    fontSize: 15,
    fontWeight: '700',
  },
})
