import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {AnimatedPress} from '../AnimatedPress'
import { useNavigation } from '@react-navigation/native'

export default function StatHeader() {
   const navigation = useNavigation()
  return (
    <View style={styles.header}>
      <AnimatedPress onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={24} />
      </AnimatedPress>

      <Text style={styles.title}>Statistic</Text>

      <AnimatedPress>
        <Ionicons name="settings-outline" size={22} />
      </AnimatedPress>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
   // paddingTop: 50,
    paddingBottom: 14,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
})
