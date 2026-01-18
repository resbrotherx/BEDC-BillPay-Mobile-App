import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native'
import Animated from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons'

const NETWORKS = [
  {
    id: 'mtn',
    name: 'MTN',
    phone: '0813 258 1551',
    image: require('../../assets/images/logos/mtn.webp'),
    brandColor: '#FFD400',
  },
  {
    id: 'glo',
    name: 'Glo',
    phone: '0805 123 9981',
    image: require('../../assets/images/logos/glo.png'),
    brandColor: '#0AA84F',
  },
  {
    id: 'airtel',
    name: 'Airtel',
    phone: '0901 444 7712',
    image: require('../../assets/images/logos/airtel.png'),
    brandColor: '#E11D48',
  },
  {
    id: '9mobile',
    name: '9Mobile',
    phone: '0818 300 4421',
    image: require('../../assets/images/logos/9mobile.png'),
    brandColor: '#16A34A',
  },
]

const AMOUNTS = ['₦100', '₦200', '₦500', '₦1000']

export default function AirtimeScreen() {
  const [selectedNetwork, setSelectedNetwork] = useState('mtn')
  const [multiple, setMultiple] = useState(false)
  const [amount, setAmount] = useState('')
  const balance = '₦12,450.00'

  return (
    <SafeAreaView style={styles.container}>

      <Animated.View style={{padding:15}}>
      <Text style={styles.title}>Airtime</Text>
      <View style={{top:-20}}>
      {/* RECENT */}
      <Text style={styles.section}>Recent</Text>
      <View style={styles.recentRow}>
        {NETWORKS.map(item => (
          <TouchableOpacity
            key={item.id}
            style={styles.recentCard}
            onPress={() => setSelectedNetwork(item.id)}
          >
            {/* <Image source={item.image} style={styles.recentLogo} /> */}
            <View style={{alignItems:'center'}}>
              {/* <Text style={styles.recentName}>{item.name}</Text> */}
              <Image source={item.image} style={styles.recentLogo} />
              <Text style={styles.recentNumber}>{item.phone}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* MULTIPLE */}
      <View style={styles.toggleRow}>
        <Text style={styles.toggleText}>Recharge Multiple (Max 5)</Text>
        <Switch value={multiple} onValueChange={setMultiple} />
      </View>
      <Text style={styles.helper}>
        Numbers must be on the same network
      </Text>

      {/* NETWORK SELECT */}
      <Text style={styles.section}>Select Network</Text>
      <View style={styles.networkRow}>
        {NETWORKS.map(item => {
          const active = selectedNetwork === item.id
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.networkCard,
                active && {
                  borderColor: item.brandColor,
                  backgroundColor: `${item.brandColor}20`,
                },
              ]}
              onPress={() => setSelectedNetwork(item.id)}
            >
              <Image source={item.image} style={styles.networkLogo} />
              <Text style={styles.networkName}>{item.name}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

      {/* PHONE */}
      <Text style={styles.section}>Phone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="0813 258 1551"
        keyboardType="phone-pad"
      />

      {/* AMOUNT HEADER */}
      <View style={styles.amountHeader}>
        <Text style={styles.section}>Amount</Text>
        <Text style={styles.balance}>
          Balance <Text style={styles.balanceAmount}>{balance}</Text>
        </Text>
      </View>

      {/* AMOUNT INPUT */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          placeholder="₦1000"
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.contactIcon}>
          <Ionicons name="book-outline" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      {/* QUICK AMOUNTS */}
      <View style={styles.amountRow}>
        {AMOUNTS.map(a => (
          <TouchableOpacity
            key={a}
            style={[
              styles.amountChip,
              amount === a && styles.amountChipActive,
            ]}
            onPress={() => setAmount(a)}
          >
            <Text
              style={[
                styles.amountText,
                amount === a && styles.amountTextActive,
              ]}
            >
              {a}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* SEND */}
      <TouchableOpacity style={styles.sendBtn}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>
      </View>
      </Animated.View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 16,
  },

  section: {
    marginTop: 30,
    marginBottom: 10,
    fontWeight: '600',
    fontSize: 14,
  },

  /* RECENT */
  recentRow: {
    flexDirection: 'row',
    gap: 12,
  },
  recentCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    //backgroundColor: '#F7F7F7',
    padding: 12,
    borderRadius: 14,
  },
  recentLogo: {
    width: 36,
    height: 36,
    top:-10,
    borderRadius: 10,
  },
  recentName: {
    fontWeight: '600',
  },
  recentNumber: {
    fontSize: 12,
    color: '#666',
  },

  /* MULTIPLE */
  toggleRow: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggleText: {
    fontWeight: '500',
  },


  /* NETWORK */

  networkCard: {
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#eee',
    width: 80,
  },
  networkLogo: {
    width: 32,
    height: 32,
    marginBottom: 6,
  },
  networkName: {
    fontSize: 12,
    fontWeight: '600',
  },

 sendText: {
    color: '#fff',
    fontWeight: '700',
  },
  helper: { fontSize: 12, color: '#888' }, networkRow: {alignItems:'center', flexDirection: 'row', justifyContent:'space-between', top:5 }, network: { flexDirection: 'row', alignItems: 'center', gap: 8, paddingVertical: 12, paddingHorizontal: 14, borderRadius: 12, borderWidth: 1, borderColor: '#eee', }, networkActive: { borderColor: '#0aa84f', backgroundColor: '#ecf9f1', }, inputWrapper: { flexDirection: 'row', alignItems: 'center', }, input: { borderWidth: 1, borderColor: '#eee', borderRadius: 6, padding: 14, }, contactIcon: { position: 'absolute', right: 14, }, amountHeader: { marginTop: 20, marginBottom: 8, flexDirection: 'row', justifyContent: 'space-between', }, balance: { fontSize: 12, color: '#666', marginTop:30 }, balanceAmount: { fontWeight: '600', color: '#111' }, amountRow: { flexDirection: 'row', gap: 10, marginTop: 12 }, amountChip: { borderWidth: 1, borderColor: '#eee', borderRadius: 12, paddingVertical: 8, paddingHorizontal: 14, }, amountChipActive: { borderColor: '#0aa84f', backgroundColor: '#ecf9f1', }, amountText: { color: '#444' }, amountTextActive: { color: '#0aa84f', fontWeight: '600' }, sendBtn: { marginTop: 30, backgroundColor: '#0aa84f', padding: 18, borderRadius: 16, alignItems: 'center', },
  /* INPUT */
})
