import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TabButton } from '../components/tab/TabButton'
import { AIWaveBanner } from '../components/tab/AIWaveBanner'

export function LiquidTabBar({ state, navigation }) {
  const insets = useSafeAreaInsets()

  return (
    <View pointerEvents="box-none" style={StyleSheet.absoluteFill}>
      {/* AI CURVED BANNER */}
      <AIWaveBanner />

      {/* FLOATING TAB BAR */}
      <View
        style={[
          styles.container,
          { bottom: insets.bottom + 12 },
        ]}
      >
        {state.routes.map((route, index) => {
          const focused = state.index === index

          return (
            <TabButton
              key={route.key}
              focused={focused}
              routeName={route.name}
              onPress={() => navigation.navigate(route.name)}
            />
          )
        })}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 16,
    right: 16,
    height: 78,
    backgroundColor: '#fff',
    borderRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 8 },
    elevation: 12,
  },
})
