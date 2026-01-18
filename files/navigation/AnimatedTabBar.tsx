import { View, StyleSheet } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { TabButton } from './../components/tab/TabButton'

export function AnimatedTabBar({ state, navigation }) {
  const insets = useSafeAreaInsets()

  return (
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
            label={route.name}
            focused={focused}
            onPress={() => {
              // Emit the tabPress event
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });

              // Only navigate if the event wasn't prevented
              if (!event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            }}
          />
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    //left: 16,
    right: 16,
    height: 200,
    width:50,
    borderRadius: 20,
    backgroundColor: '#fff',
    //flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 5,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 8 },
    elevation: 15,
  },
})
