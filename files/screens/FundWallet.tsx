// screens/PaymentSettingsScreen.tsx
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {AnimatedPress} from '../components/AnimatedPress'
import { BankAccountCard } from '../components/BankAccountCard'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function FundWalletScreen({ navigation }: any) {
  const [selectedId, setSelectedId] = React.useState('1')
  const BANK_ACCOUNTS = [
  {
    id: '1',
    name: 'HDFC Bank',
    account: 'XXXX4556',
    balance: '42,454.26',
    holder: 'Mohammad Zubair',
    logo: require('../assets/images/logos/glo.png'),
  },
  {
    id: '2',
    name: 'HDFC Bank',
    account: 'XXXX4123',
    holder: 'Mohammad Zubair',
    logo: require('../assets/images/logos/glo.png'),
  },
  {
    id: '3',
    name: 'ICICI Bank',
    account: 'XXXX8891',
    holder: 'Mohammad Zubair',
    logo: require('../assets/images/logos/glo.png'),
  },
]

  return (
    <SafeAreaView style={styles.container}>
    <Animated.View>
      {/* HEADER */}
      <View style={styles.header}>
        <AnimatedPress onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} />
        </AnimatedPress>

        <Text style={styles.title}>Payment Settings</Text>

        <Ionicons name="ellipsis-vertical" size={20} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        {/* PROFILE */}
        <Animated.View entering={FadeInDown}>
          <View style={styles.profile}>
            {/* <Image
              source={{ uri: 'https://i.pravatar.cc/150' }}
              style={styles.avatar}
            /> */}
            <Text style={styles.name}>Zubair Mohammad</Text>
            <Text style={styles.phone}>+91 9876543210</Text>
          </View>
        </Animated.View>

        {/* UPI */}
        <Animated.View entering={FadeInDown.delay(80)} style={styles.upiBox}>
          <View>
            <Text style={styles.label}>UPI ID</Text>
            <Text style={styles.upi}>zubairpasha-855@hdfcbank</Text>
          </View>

          <AnimatedPress style={styles.copyBtn}>
            <Text style={{ color: '#1A8FE3' }}>Validate</Text>
          </AnimatedPress>
        </Animated.View>

        {/* ACTIONS */}
        <View style={styles.actions}>
          {['Manage UPI', 'Manage Beneficiaries'].map((t) => (
            <AnimatedPress key={t} style={styles.actionCard}>
              <Text style={styles.actionTitle}>{t}</Text>
              <Text style={styles.actionSub}>
                Select UPI / Add & Remove
              </Text>
            </AnimatedPress>
          ))}
        </View>

        {/* PRIMARY */}
        <Text style={styles.section}>Primary account</Text>
        <BankAccountCard
          primary
          bank={{
            name: 'Paytm Payments Bank',
            account: 'XXXXXX5644',
            balance: '42,454.26',
            holder: 'Mohammad Zubair',
            logo: require('../assets/images/logos/glo.png'),
          }}
        />

        {/* OTHER BANKS */}
       <Text style={styles.section}>Manage bank accounts</Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 3 }}
        >
          {BANK_ACCOUNTS.map((item) => (
            <BankAccountCard
              key={item.id}
              bank={item}
              selected={selectedId === item.id}
              onPress={() => setSelectedId(item.id)}
            />
          ))}
        </ScrollView>

        {/* ADD */}
        <AnimatedPress style={styles.addBtn}>
          <Ionicons name="add" size={22} color="#1A8FE3" />
          <Text style={styles.addText}>Add</Text>
        </AnimatedPress>
      </ScrollView>
    </Animated.View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 3,
  },

  /* -------------------------------- HEADER ------------------------------- */
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF2F6',
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: '#1F2937',
  },

  /* -------------------------------- PROFILE ------------------------------ */
  profile: {
    alignItems: 'center',
    paddingVertical: 28,
    backgroundColor: '#FFF',
    marginBottom: 12,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 14,
  },
  name: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  phone: {
    marginTop: 6,
    fontSize: 14,
    color: '#9CA3AF',
  },

  /* --------------------------------- UPI --------------------------------- */
  upiBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: '#CDE7FA',
  },
  label: {
    fontSize: 11,
    color: '#6B7280',
    marginBottom: 4,
  },
  upi: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
  },
  copyBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#E8F4FF',
  },

  /* -------------------------------- ACTIONS ------------------------------ */
  actions: {
    flexDirection: 'row',
    justifyContent:'space-between',
    gap: 7,
    paddingHorizontal: 10,
    marginBottom: 22,
  },
  actionCard: {
    flex: 1,
    backgroundColor: '#F1F9FF',
    padding: 16,
    borderRadius: 16,
  },
  actionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 6,
  },
  actionSub: {
    fontSize: 12,
    color: '#6B7280',
    lineHeight: 16,
  },

  /* -------------------------------- SECTIONS ----------------------------- */
  section: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1F2937',
    paddingHorizontal: 16,
    marginBottom: 12,
    marginTop: 10,
  },

  /* ---------------------------------- ADD -------------------------------- */
  addBtn: {
    marginHorizontal: 16,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 18,
    backgroundColor: '#EAF6FF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  addText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A8FE3',
  },
})
