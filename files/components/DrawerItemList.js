import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../constants/constant'
import Icon from '../assets/icons/icons'


const DrawerItem = ({ label, onPress, tabBarTestID, type, name, notification,
  activeItemColor, color, styles }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={tabBarTestID}
      accessibilityRole="button"
      style={[styles.drawerItem, { backgroundColor: activeItemColor }]}
    >
      <View style={styles.row}>
        <Icon type={type} name={name} {...{ color }} />
        <Text style={[styles.label, { color }]}>{label}</Text>
      </View>
      {notification > 0 && <View style={[styles.notificationBadge,
      { backgroundColor: notification > 5 ? colors.important : colors.normal }]}>
        <Text>{notification}</Text>
      </View>}
    </TouchableOpacity>
  )
}


const DrawerItemList = ({ state, descriptors, navigation, styles }) => {
  return (
    <View style={styles.view}>
      {state.routes.map((route, index) => {
        const descriptor = descriptors[route.key]
        if (!descriptor) return null

        const { options } = descriptor

        // 🔑 SAFETY CHECK (THIS FIXES YOUR ERROR)
        if (!options?.item) return null

        const drawerItem = options.item
        const isFocused = state.index === index

        const onPress = () => {
          navigation.navigate(route.name)
          navigation.closeDrawer()
        }

        const color = isFocused ? colors.dark : colors.darkGray
        const activeItemColor = isFocused ? colors.primary : 'transparent'

        return (
          <DrawerItem
            key={route.key}
            label={drawerItem.label}
            onPress={onPress}
            name={drawerItem.icon}
            type={drawerItem.type}
            notification={drawerItem.notification}
            color={color}
            activeItemColor={activeItemColor}
            styles={styles}
          />
        )
      })}
    </View>
  )
}

export default DrawerItemList