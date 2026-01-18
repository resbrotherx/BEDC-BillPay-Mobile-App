import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Animated, {
  FadeInDown,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'

/* -------------------------------------------------------------------------- */
/*                              PRESSABLE ICON                                */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*                                   DATA                                     */
/* -------------------------------------------------------------------------- */

const UPCOMING_BILLS = [
  {
    id: '1',
    name: 'Jio Prepaid',
    due: '₹179 · Expiring Feb 12',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/Jio_Logo.svg',
  },
  {
    id: '2',
    name: 'Credit Card',
    due: '₹1,179 · Due Feb 21',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
  },
    {
    id: '3',
    name: 'Credit Card',
    due: '₹1,179 · Due Feb 21',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png',
  },
]

const TRANSACTIONS = [
  {
    id: '1',
    name: 'Zubair Mohammad',
    date: 'January 1, 2023 · 2:56 PM',
    amount: '₹ 4,000',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
    {
    id: '2',
    name: 'Patrick Mohammad',
    date: 'January 1, 2023 · 2:56 PM',
    amount: '₹ 4,000',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
]
const QUICK_ACTIONS = [
  {
    label: 'Fund Wallet',
    icon: 'wallet-outline',
    route: 'FundWallet',
    bg: '#EAF6FF',
  },
  {
    label: 'Buy Token',
    icon: 'flash-outline',
    route: 'FundWallet', // change later if needed
    bg: '#F0FFF6',
  },
]

/* -------------------------------------------------------------------------- */
/*                                   SCREEN                                   */
/* -------------------------------------------------------------------------- */

export default function HomeScreen() {
  const navigation = useNavigation<any>()

  const IconButton = ({ icon, onPress }: any) => {
    const scale = useSharedValue(1)

    const style = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }))

    return (
      <Animated.View style={style}>
        <TouchableOpacity
          onPressIn={() => (scale.value = withSpring(0.9))}
          onPressOut={() => (scale.value = withSpring(1))}
          onPress={onPress}
          style={styles.iconBtn}
        >
          <Ionicons name={icon} size={18} />
        </TouchableOpacity>
      </Animated.View>
    )
  }


  const ActionButton = ({ item, onPress }: any) => {
    const scale = useSharedValue(1)

    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
    }))

    return (
      <Animated.View style={[animatedStyle, { flex: 1 }]}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPressIn={() => (scale.value = withSpring(0.94))}
          onPressOut={() => (scale.value = withSpring(1))}
          onPress={onPress}
          style={[styles.actionBtn, { backgroundColor: item.bg }]}
        >
          <Ionicons name={item.icon} size={20} color="#2B7FFF" />
          <Text style={styles.actionText}>{item.label}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
    <Animated.View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* HEADER */}
        <Animated.View entering={FadeInDown}>
          <View style={styles.header}>
            <View style={styles.profileRow}>
              <Image
                source={{ uri: 'https://i.pravatar.cc/100' }}
                style={styles.avatar}
              />
              <View>
                <Text style={styles.hello}>Hey, Zubair 👋</Text>
                <Text style={styles.sub}>Welcome back!</Text>
              </View>
            </View>

            <IconButton icon="notifications-outline" />
          </View>
        </Animated.View>

        {/* BANK CARD */}
        <Animated.View entering={FadeInDown.delay(80)} style={styles.bankCard}>
          <Text style={styles.bankName}>Paytm Payments Bank</Text>
          <Text style={styles.account}>
            A/C No. XXXXX4556
          </Text>

          <View style={styles.balanceRow}>
            <View>
              <Text style={styles.label}>wallet Balance</Text>
              <Text style={styles.balance}>₹ 42,454.26</Text>
            </View>

            <View>
              <Text style={styles.label}>A/C Name</Text>
              <Text style={styles.name}>Zubair Pasha</Text>
            </View>
          </View>
        </Animated.View>

        {/* QUICK ACTIONS */}
        <Animated.View entering={FadeInDown.delay(120)} style={styles.actions}>
          {QUICK_ACTIONS.map((item, index) => (
            <ActionButton
              key={index}
              item={item}
              onPress={() => navigation.navigate(item.route)}
            />
          ))}
        </Animated.View>


        {/* UPI ID */}
        <Animated.View entering={FadeInDown.delay(160)} style={styles.upiBox}>
          <Text style={styles.upiText}>
            zubairpasha-855@hdfcbank
          </Text>
          <TouchableOpacity style={styles.copyBtn}>
            <Ionicons name="copy-outline" size={16} />
            <Text style={styles.copyText}>Copy</Text>
          </TouchableOpacity>
        </Animated.View>

        {/* SERVICES */}
        <Animated.View entering={FadeInDown.delay(200)} style={styles.services}>
          {[
            'Mobile\nRecharge',
            'Scan & Pay',
            'Send to\nContacts',
            'Credit Card\nBill Payment',
          ].map((label, i) => (
            <View key={i} style={styles.service}>
              <View style={styles.serviceIcon} />
              <Text style={styles.serviceText}>{label}</Text>
            </View>
          ))}
        </Animated.View>

        {/* UPCOMING BILL PAYMENTS */}
        <Animated.View entering={FadeInDown.delay(240)} style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Bill Payments</Text>
            <Text style={styles.viewAll}>View All</Text>
          </View>

          <View style={styles.billRow}>
            {UPCOMING_BILLS.map((bill) => (
              <View key={bill.id} style={styles.billCard}>
                <Image
                  source={{ uri: bill.logo }}
                  style={styles.billLogo}
                />
                <View>
                <Text style={styles.billName}>{bill.name}</Text>
                <Text style={styles.billDue}>{bill.due}</Text>
                </View>
              </View>
            ))}
          </View>
        </Animated.View>

        {/* RECENT TRANSACTIONS */}
        <Animated.View entering={FadeInDown.delay(280)} style={[styles.section, {top:10}]}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>

          {TRANSACTIONS.map((tx) => (
            <View key={tx.id} style={styles.txRow}>
              <Image
                source={{ uri: tx.avatar }}
                style={styles.txAvatar}
              />
              <View style={{ flex: 1 }}>
                <Text style={styles.txName}>{tx.name}</Text>
                <Text style={styles.txDate}>{tx.date}</Text>
              </View>
              <Text style={styles.txAmount}>{tx.amount}</Text>
            </View>
          ))}
        </Animated.View>
      </ScrollView>
    </Animated.View>
    </SafeAreaView>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileRow: { flexDirection: 'row', gap: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22 },
  hello: { fontWeight: '600', fontSize: 16 },
  sub: { color: '#888', fontSize: 12 },

  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bankCard: {
    marginHorizontal: 20,
    backgroundColor: '#2F3553',
    borderRadius: 20,
    padding: 20,
  },
  bankName: { color: '#FFF', fontWeight: '600' },
  account: { color: '#CCC', marginTop: 6 },
  balanceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  label: { color: '#AAA', fontSize: 12 },
  balance: { color: '#FFF', fontSize: 18, fontWeight: '700' },
  name: { color: '#FFF' },

  actions: {
    flexDirection: 'row',
    gap: 12,
    padding: 20,
  },
  // actionBtn: {
  //   flex: 1,
  //   backgroundColor: '#EAF6FF',
  //   paddingVertical: 14,
  //   borderRadius: 14,
  //   alignItems: 'center',
  // },

  actionBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
    borderRadius: 16,
  },

  actionText: {
    fontWeight: '600',
    fontSize: 14,
  },

  upiBox: {
    borderColor: '#EAF6FF',
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    padding: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upiText: { fontWeight: '500' },
  copyBtn: { flexDirection: 'row', gap: 6 },
  copyText: { fontWeight: '500' },

  services: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  service: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceIcon: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#EAF6FF',
    marginBottom: 8,
  },
  serviceText: {
    textAlign: 'center',
    fontSize: 11,
  },

  section: { paddingHorizontal: 20, marginTop: 10 },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontWeight: '600', fontSize: 15 },
  viewAll: { color: '#2B7FFF', fontWeight: '500' },

  billRow: { flexDirection: 'row', justifyContent:'space-between', gap: 12, marginTop: 10, width:'150%'},
  billCard: {
    backgroundColor: '#EAF6FF',
    borderRadius: 14,
    padding: 12,
    width: 160,
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
  },
  billLogo: { width: 28, height: 28, marginBottom: 8, borderRadius:5 },
  billName: { fontWeight: '500' },
  billDue: { fontSize: 12, color: '#E53935', top:5 },

  txRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  txAvatar: { width: 36, height: 36, borderRadius: 18, marginRight: 12 },
  txName: { fontWeight: '500' },
  txDate: { fontSize: 11, color: '#888' },
  txAmount: { fontWeight: '600' },
})
