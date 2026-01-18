import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native'
import {PAY_OPTIONS}  from '../Data/data'
import AnimatedIconCard from '../components/IconCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from 'react-native-vector-icons/Ionicons'

const pastelColors = [
  '#2563EB', // blue
  '#16A34A', // green
  '#F97316', // orange
  '#7C3AED', // purple
  '#DB2777', // pink
];
const listBgColors = [
  '#EFF6FF', // blue background
  '#ECFDF5', // green background
  '#FFF7ED', // orange background
  '#F5F3FF', // purple background
  '#FDF2F8', // pink background
];


const HISTORY = [
  {
    id: '1',
    icon: 'call-outline',
    title: 'Airtime',
    desc: 'MTN 08134412288',
    amount: '-₦1,000',
    date: '23/03/2026 - 04:20',
    color: pastelColors[0],     // icon bg
    bgColor: listBgColors[0],   // list bg
  },
  {
    id: '2',
    icon: 'wifi-outline',
    title: 'Buy Data',
    desc: 'Binge',
    amount: '-₦3,000',
    date: '23/03/2026 - 04:20',
    color: pastelColors[1],
    bgColor: listBgColors[1],
  },
  {
    id: '3',
    icon: 'tv-outline',
    title: 'Cable / TV',
    desc: 'GoTV Max',
    amount: '-₦6,500',
    date: '23/03/2026 - 04:20',
    color: pastelColors[2],
    bgColor: listBgColors[2],
  },
  {
    id: '4',
    icon: 'game-controller-outline',
    title: 'Betting',
    desc: 'Bet9ja',
    amount: '-₦13,000',
    date: '23/03/2026 - 04:20',
    color: pastelColors[3],
    bgColor: listBgColors[3],
  },
  {
    id: '5',
    icon: 'phone-portrait-outline',
    title: 'Airtime',
    desc: 'MTN 08134412288',
    amount: '-₦1,000',
    date: '23/03/2026 - 04:20',
    color: pastelColors[4],
    bgColor: listBgColors[4],
  },
  {
    id: '6',
    icon: 'cellular-outline',
    title: 'Buy Data',
    desc: 'Binge',
    amount: '-₦3,000',
    date: '23/03/2026 - 04:20',
    color: pastelColors[0],
    bgColor: listBgColors[0],
  },
  {
    id: '7',
    icon: 'desktop-outline',
    title: 'Cable / TV',
    desc: 'GoTV Max',
    amount: '-₦6,500',
    date: '23/03/2026 - 04:20',
    color: pastelColors[1],
    bgColor: listBgColors[1],
  },
  {
    id: '8',
    icon: 'trophy-outline',
    title: 'Betting',
    desc: 'Bet9ja',
    amount: '-₦13,000',
    date: '23/03/2026 - 04:20',
    color: pastelColors[2],
    bgColor: listBgColors[2],
  },
];



export default function PayScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={styles.title}>Pay Bill</Text>

      {/* ICON GRID */}
      <View style={styles.grid}>
        {PAY_OPTIONS.map((item) => (
          <AnimatedIconCard
            key={item.key}
            label={item.label}
            iconName={item.iconName}
            color={item.color}
            bgColor={item.bgColor}
            onPress={() => navigation.navigate(item.route)}
          />
        ))}

      </View>

      {/* HISTORY */}
      <View style={styles.historyHeader}>
        <Text style={styles.historyTitle}>History</Text>
        <Text style={styles.historyFilter}>All</Text>
      </View>

      <FlatList
        data={HISTORY}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.historyItem}>
            <View style={{flex:1, flexDirection:'row', gap:5}}>
              <View
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: 17,
                  backgroundColor: item.bgColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 12,
                }}
              >
                <Ionicons name={item.icon} style={{alignSelf:'center' }} color={item.color} size={22}/>
              </View>
              <View>
                <Text style={styles.historyMain}>{item.title}</Text>
                <Text style={styles.historySub}>{item.desc}</Text>
              </View>
            </View>
            <View>
            <Text style={styles.amount}>{item.amount}</Text>
             <Text style={styles.historySub}>{item.date}</Text>
             </View>
          </View>
        )}
      />
    </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 18 },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 24 },

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 10,
  },
  historyTitle: { fontSize: 16, fontWeight: '600', marginHorizontal:7 },
  historyFilter: { color: '#888' },

  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
  historyMain: { fontWeight: '500' , marginBottom: 5 },
  historySub: { color: '#888', marginTop: 2 },
  amount: { color: '#e74c3c', fontWeight: '600', flex:1, textAlign:'right'},
})
