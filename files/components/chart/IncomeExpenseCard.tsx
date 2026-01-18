import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function IncomeExpenseCard() {
  return (
    <View style={styles.card}>
      <View style={styles.block}>
        <View style={[styles.icon, { backgroundColor: '#2563EB' }]}>
          <Ionicons name="arrow-up" size={18} color="#fff" />
        </View>
        <View>
          <Text style={styles.amount}>$5,440</Text>
          <Text style={styles.label}>Income</Text>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.block}>
        <View style={[styles.icon, { backgroundColor: '#EF4444' }]}>
          <Ionicons name="arrow-down" size={18} color="#fff" />
        </View>
        <View>
          <Text style={styles.amount}>$2,209</Text>
          <Text style={styles.label}>Expense</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 28,
    flexDirection: 'row',
    padding: 20,
    shadowOpacity: 0.05,
    shadowRadius: 14,
    elevation: 4,
  },
  block: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  divider: {
    width: 1,
    backgroundColor: '#E5E7EB',
    marginHorizontal: 12,
  },
  icon: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
  },
  amount: {
    fontSize: 20,
    fontWeight: '700',
  },
  label: {
    fontSize: 13,
    color: '#9CA3AF',
  },
})
