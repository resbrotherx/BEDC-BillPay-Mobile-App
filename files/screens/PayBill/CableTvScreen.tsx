import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const CABLES = [
  { id: 'dstv', name: 'DSTV Subscription' },
  { id: 'iroko', name: 'Iroko TV Subscription' },
  { id: 'gotv', name: 'GoTV Subscription' },
  { id: 'startimes', name: 'Startimes Subscription' },
  { id: 'linda', name: 'Linda Ikeji TV Subscription' },
]

export default function CableTvScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cable/TV</Text>

      <View style={styles.search}>
        <Icon name="search" size={18} color="#999" />
        <TextInput placeholder="Search Cable/TV" style={styles.searchInput} />
      </View>

      <FlatList
        data={CABLES}
        keyExtractor={(i) => i.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.name}</Text>
            <Icon name="chevron-forward" size={18} color="#999" />
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: '700', marginBottom: 20 },

  search: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    paddingHorizontal: 14,
    borderRadius: 14,
    marginBottom: 20,
  },
  searchInput: { marginLeft: 8, flex: 1, height: 44 },

  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: '#f1f1f1',
  },
})
