import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export function InfoGrid({ children }: any) {
  return <View style={styles.grid}>{children}</View>
}

export function InfoCell({ label, value }: any) {
  return (
    <View style={styles.cell}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
    gap: 16,
  },
  cell: {
    width: '32%',
  },
  label: {
    fontSize: 12,
    color: '#9AA4AF',
    marginBottom: 4,
  },
  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0F172A',
  },
})
