import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView
} from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {AnimatedPress2} from '../components/AnimatedPress'
import { InfoCard } from '../components/InfoCard'
import { InfoGrid, InfoCell } from '../components/InfoGrid'
import RNPrint from 'react-native-print'

export default function UsageScreen({ navigation }: any) {

  const handleSubmit = async () => {
    const claimData = {
      employerId: '1007330416',
      employer: 'Salah Ali',
      worker: 'Ahmed',
      loss: 'Refusal to work',
      date: '13-11-2024',
    }

    console.log('CLAIM SUBMITTED:', claimData)

    await RNPrint.print({
      html: `<h1>Claim Review</h1><pre>${JSON.stringify(claimData, null, 2)}</pre>`,
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <AnimatedPress2 onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} />
        </AnimatedPress2>
        <Text style={styles.headerTitle}>Review</Text>
        <View style={{ width: 22 }} />
      </View>

      {/* CONTENT */}
      <Animated.ScrollView
        entering={FadeInDown}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 20, paddingBottom: 120 }}
      >
        {/* POLICY */}
       <InfoCard title="Policy Details" onChange>
        <Animated.View entering={FadeInDown.delay(50)} style={styles.claimHeader}>
          <View style={styles.claimIcon}>
            <Ionicons name="alert-circle-outline" size={22} color="#3BA5F3" />
          </View>

          <View>
            <Text style={styles.claimTitle}>Update 3rd-Party Claim</Text>
            <Text style={styles.claimSub}>Submit a Third-Party Claim</Text>
          </View>
        </Animated.View>

        <InfoGrid>
          <InfoCell label="Employer ID" value="1007330416" />
          <InfoCell label="Employer Details" value="Salah Ali" />
          <InfoCell label="Worker Name" value="Ahmed" />
          <InfoCell label="Border No" value="3144786989" />
          <InfoCell label="Expiry Date" value="06 Jul 2026" />
          <InfoCell label="Inception Date" value="07 Jul 2024" />
        </InfoGrid>
      </InfoCard>

      <InfoCard title="Loss Details" onChange>
        <InfoGrid>
          <InfoCell label="Type of loss" value="Refusal to work" />
          <InfoCell label="Date of Refusal" value="13-11-2024" />
          <InfoCell label="Explain Reason" value="Testing" />
        </InfoGrid>
      </InfoCard>

      </Animated.ScrollView>

      {/* SUBMIT */}
      <AnimatedPress2 style={styles.submitBtn} onPress={handleSubmit}>
        <Text style={styles.submitText}>Submit Claim</Text>
      </AnimatedPress2>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF6FB',
  },
  header: {
    height: 60,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EAF6FB',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
  },
  submitBtn: {
    position: 'absolute',
    bottom: 24,
    left: 20,
    right: 20,
    height: 56,
    backgroundColor: '#7BC4FF',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#3BA5F3',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 6,
},
submitText: {
  color: '#FFFFFF',
  fontSize: 17,
  fontWeight: '700',
},
claimHeader: {
  flexDirection: 'row',
  gap: 14,
  backgroundColor: '#FFFFFF',
  paddingVertical: 5,
  borderRadius: 20,
  marginBottom: 20,
},
claimIcon: {
  width: 44,
  height: 44,
  borderRadius: 14,
  backgroundColor: '#EAF6FF',
  justifyContent: 'center',
  alignItems: 'center',
},
claimTitle: {
  fontSize: 15,
  fontWeight: '700',
  color: '#0F172A',
},
claimSub: {
  fontSize: 13,
  color: '#64748B',
  marginTop: 2,
},

  // submitBtn: {
  //   position: 'absolute',
  //   bottom: 30,
  //   left: 20,
  //   right: 20,
  //   backgroundColor: '#6BB9F7',
  //   paddingVertical: 16,
  //   borderRadius: 30,
  //   alignItems: 'center',
  // },
  // submitText: {
  //   color: '#FFF',
  //   fontSize: 16,
  //   fontWeight: '700',
  // },
})
