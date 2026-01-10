import { View, Text, StyleSheet } from 'react-native'
import { AIIcon } from '../../assets/icons'

export function AIWaveBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.pill}>
        <AIIcon color="#fff" />
        <Text style={styles.text}>Search with AI</Text>
      </View>

      <View style={styles.newBadge}>
        <Text style={styles.newText}>NEW</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -6,
    right: 20,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4FA3AE',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    gap: 8,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
  },
  newBadge: {
    position: 'absolute',
    bottom: -10,
    right: 12,
    backgroundColor: '#F4B400',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  newText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '700',
  },
})
