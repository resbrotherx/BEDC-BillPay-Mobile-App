// components/BankAccountCard.tsx
import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { AnimatedPress } from './AnimatedPress'

type Props = {
  primary?: boolean
  selected?: boolean
  onPress?: () => void
  bank: {
    name: string
    account: string
    balance?: string
    holder?: string
    logo: any
  }
}

export function BankAccountCard({
  primary,
  selected,
  onPress,
  bank,
}: Props) {
  return (
    <AnimatedPress
      onPress={onPress}
      style={[
        styles.card,
        primary && styles.primary,
        selected && styles.selected,
      ]}
    >
      <View style={styles.row}>
        <Image source={bank.logo} style={styles.logo} />

        <View style={{ flex: 1 }}>
          <Text style={styles.bank}>{bank.name}</Text>
          <Text style={styles.sub}>Savings A/C No: {bank.account}</Text>
        </View>

        {primary && <Ionicons name="ellipsis-vertical" size={18} />}
      </View>

      {/* PRIMARY INFO */}
      {primary && (
        <View style={styles.infoRow}>
          <View>
            <Text style={styles.label}>Balance</Text>
            <Text style={styles.value}>₹ {bank.balance}</Text>
          </View>

          <View>
            <Text style={styles.label}>A/C Name</Text>
            <Text style={styles.value}>{bank.holder}</Text>
          </View>

          <View>
            <Text style={styles.label}>Unlock</Text>
            <Text style={styles.value}>Remove Pro</Text>
          </View>
        </View>
      )}

      {/* SELECTED CHECK */}
      {selected && (
         <>
         <View style={[styles.infoRow]}>

          <View>
            <Text style={styles.value}>{bank.holder}</Text>
          </View>

            <Text style={{width:100}}></Text>

          <View>
              <Ionicons
                name="checkmark-circle"
                size={22}
                color="#fff"
                style={styles.check}
              />
          </View>
        </View>

      
        </>
      )}
    </AnimatedPress>
  )
}

const styles = StyleSheet.create({

  card: { flex:1, 
    backgroundColor: '#FFF', 
    marginHorizontal: 12, 
    borderRadius: 10, 
    padding: 16, 
    marginBottom: 14, 
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
  }, 
  primary: { borderWidth: 1, borderColor: '#1A8FE3', },

  selected: {
    backgroundColor: '#1596d5',
    borderColor: '#1A8FE3',
    color:'#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 36,
    height: 36,
  },
  bank: {
    fontWeight: '600',
    fontSize: 15,
  },
  sub: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 27,
  },
  label: {
    fontSize: 11,
    color: '#6B7280',
  },
  value: {
    fontWeight: '500',
    marginTop: 4,
  },
  check: {
    position: 'absolute',
    //top: 10,
    right: -5,
  },
})
