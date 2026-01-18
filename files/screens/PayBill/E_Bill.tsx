import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Switch,
  Dimensions,
  SafeAreaView,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Animated, {
  FadeInDown,
  FadeIn,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated'

const { width } = Dimensions.get('window')

export default function PayBillScreen() {
  const [amount, setAmount] = useState('53')
  const [autoPay, setAutoPay] = useState(true)
  
  const PressableIcon = ({ icon, onPress }: any) => {
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
            <Ionicons name={icon} size={18} color="#111" />
        </TouchableOpacity>
        </Animated.View>
    )
  }

/* -------------------------------------------------------------------------- */
/*                               AMOUNT CHIP                                  */
/* -------------------------------------------------------------------------- */

  const AmountChip = ({ value, active, onPress }: any) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
            styles.amountChip,
            active && styles.amountChipActive,
        ]}
      >
      <Text
        style={[
          styles.amountChipText,
          active && { color: '#6D4AFF' },
        ]}
      >
        ₦{value}
      </Text>
    </TouchableOpacity>
  )
}
  return (
    <SafeAreaView style={styles.container}>
    <Animated.View
      entering={FadeIn}
      
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
      >
        {/* HEADER */}
        <View style={styles.header}>
          <PressableIcon icon="chevron-back" />
          <Text style={styles.headerTitle}>Top Up</Text>
          <PressableIcon icon="chatbubble-outline" />
        </View>

        {/* CONTACT */}
        <Animated.View entering={FadeInDown.delay(50)}>
          <View style={styles.contactRow}>
            <View style={styles.phoneIcon}>
              <Ionicons name="call-outline" size={18} />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.phoneText}>
                +7623 276-16-81
              </Text>
              <Text style={styles.subText}>
                Adam smith ₦625.99
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#999"
            />
          </View>
        </Animated.View>

        {/* AMOUNT INPUT */}
        <Animated.View entering={FadeInDown.delay(100)}>
          <View style={styles.amountInput}>
            <Text style={styles.dollar}>₦</Text>
            <TextInput
              value={amount}
              onChangeText={setAmount}
              keyboardType="numeric"
              style={styles.amountText}
            />
            <Ionicons name="close" size={18} />
          </View>
          <Text style={styles.helperText}>
            The last payment amount
          </Text>
        </Animated.View>

        {/* QUICK AMOUNTS */}
        <Animated.View
          entering={FadeInDown.delay(150)}
          style={styles.amountRow}
        >
          {[10, 25, 50, 75, 100].map(v => (
            <AmountChip
              key={v}
              value={v}
              active={amount === String(v)}
              onPress={() => setAmount(String(v))}
            />
          ))}
        </Animated.View>

        {/* NO COMMISSION */}
        <Animated.View
          entering={FadeInDown.delay(200)}
          style={styles.infoRow}
        >
          <Ionicons
            name="checkmark-circle"
            color="#6D4AFF"
            size={18}
          />
          <Text style={styles.infoText}>
            No Commission
          </Text>
        </Animated.View>

        {/* PAYMENT METHOD */}
        <Animated.View
          entering={FadeInDown.delay(250)}
          style={styles.card}
        >
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>
              Payment Method
            </Text>
            <Text style={styles.changeText}>Change</Text>
          </View>

          <View style={styles.methodRow}>
            <View style={styles.bankIcon}>
              <Ionicons name="card-outline" size={18} />
            </View>
            <View>
              <Text style={styles.methodTitle}>
                Adam627
              </Text>
              <Text style={styles.subText}>
                SberBank
              </Text>
            </View>
          </View>
        </Animated.View>

        {/* AUTOPAY */}
        <Animated.View
          entering={FadeInDown.delay(300)}
          style={styles.card}
        >
          <View style={styles.switchRow}>
            <View>
              <Text style={styles.cardTitle}>
                Enable autopayments
              </Text>
              <Text style={styles.subText}>
                No commission in the future
              </Text>
            </View>
            <Switch
              value={autoPay}
              onValueChange={setAutoPay}
              trackColor={{
                true: '#6D4AFF',
                false: '#ccc',
              }}
            />
          </View>

          <View style={styles.cashback}>
            <Text style={styles.cashbackText}>
              +10% cashback.. more
            </Text>
            <Ionicons name="percent" />
          </View>
        </Animated.View>

        {/* FOOTER */}
        <Text style={styles.footerText}>
          We will send a check to +7623 276-16-81
        </Text>

        {/* PAY BUTTON */}
        <TouchableOpacity style={styles.payBtn}>
          <Text style={styles.payText}>Pay</Text>
        </TouchableOpacity>
      </ScrollView>
    </Animated.View>
    </SafeAreaView>
  )
}

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  headerTitle: { fontSize: 18, fontWeight: '600' },

  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  phoneIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F4F4F4',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  phoneText: { fontWeight: '600' },
  subText: { color: '#888', fontSize: 12 },

  amountInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    borderRadius: 14,
    marginHorizontal: 20,
    padding: 14,
  },
  dollar: { fontSize: 18, marginRight: 4 },
  amountText: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
  },
  helperText: {
    marginLeft: 28,
    marginTop: 6,
    color: '#999',
    fontSize: 12,
  },

  amountRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 16,
  },
  amountChip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: '#F4F4F4',
    borderRadius: 20,
  },
  amountChipActive: {
    backgroundColor: '#ECE7FF',
  },
  amountChipText: { fontWeight: '500' },

  infoRow: {
    backgroundColor: '#F6F6F6',
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    gap: 6,
  },
  infoText: { fontWeight: '500' },

  card: {
    backgroundColor: '#F6F6F6',
    borderRadius: 20,
    padding: 16,
    marginHorizontal: 20,
    marginTop: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardTitle: { fontWeight: '600' },
  changeText: { color: '#6D4AFF' },

  methodRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  bankIcon: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#ECE7FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  methodTitle: { fontWeight: '500' },

  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  cashback: {
    marginTop: 14,
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cashbackText: { fontWeight: '500' },

  footerText: {
    margin: 20,
    color: '#888',
    fontSize: 12,
  },

  payBtn: {
    backgroundColor: '#7A5AF8',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  payText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 16,
  },
})
