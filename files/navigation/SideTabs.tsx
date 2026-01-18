import React, { useReducer, useRef } from 'react'
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import type { DrawerContentComponentProps } from '@react-navigation/drawer'
import { useDrawerProgress } from '@react-navigation/drawer'
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'

import { colors, constant } from '../constants/constant'
import Icon, { Icons } from '../assets/icons/icons'
import DrawerItemList from '../components/DrawerItemList'
import { ProfileMenu, ProjectsArray } from '../Data/data'

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

type ProjectItemProps = {
  label: string
  type: Icons
  name: string
  color: string
  onPress?: () => void
  activeItemColor?: string
}

type ProfileItemProps = {
  label: string
  type: Icons
  name: string
  onPress?: () => void
}

/* -------------------------------------------------------------------------- */
/*                               SUB COMPONENTS                               */
/* -------------------------------------------------------------------------- */

const ProjectItem: React.FC<ProjectItemProps> = ({
  label,
  onPress,
  type,
  name,
  color,
  activeItemColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, { backgroundColor: activeItemColor }]}
    >
      <View style={[styles.iconContainer, { backgroundColor: color }]}>
        <Icon type={type} name={name} color={colors.white} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

const ProfileItem: React.FC<ProfileItemProps> = ({
  label,
  onPress,
  type,
  name,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.row, { margin: constant.SPACING / 4 }]}
    >
      <Icon type={type} name={name} color={colors.dark} />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

/* -------------------------------------------------------------------------- */
/*                              MAIN COMPONENT                                */
/* -------------------------------------------------------------------------- */

const CustomDrawer1: React.FC<DrawerContentComponentProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const scrollRef = useRef<ScrollView>(null)

  const [showProfile, toggleProfile] = useReducer((s) => !s, false)

  /* ------------------------------ Animations ------------------------------ */

  const drawerProgress = useDrawerProgress()

  const translateXStyle = useAnimatedStyle(() => {
    const translateX = interpolate(drawerProgress.value, [0, 1], [-200, 0])
    return { transform: [{ translateX }] }
  })

  const topViewStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [-100, 0])
    const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1])
    return { transform: [{ translateY }], opacity }
  })

  const bottomViewStyle = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress.value, [0, 1], [100, 0])
    const opacity = interpolate(drawerProgress.value, [0, 1], [0, 1])
    return { transform: [{ translateY }], opacity }
  })

  const profileProgress = useDerivedValue(() =>
    showProfile ? withTiming(1) : withTiming(0)
  )

  const profileMenuStyle = useAnimatedStyle(() => {
    const scaleY = interpolate(profileProgress.value, [0, 1], [0, 1])
    return { transform: [{ scaleY }] }
  })

  /* ------------------------------ Handlers ------------------------------ */

  const onFooterPress = () => {
    if (!scrollRef.current) return

    showProfile
      ? scrollRef.current.scrollTo({ y: 0, animated: true })
      : scrollRef.current.scrollToEnd({ animated: true })

    toggleProfile()
  }

  /* -------------------------------- Render -------------------------------- */

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <Animated.View
        style={[styles.row, styles.view, styles.marginTop, topViewStyle]}
      >
        <View style={styles.iconContainer}>
          <Icon name="logo-electron" type={Icons.Ionicons} size={30} />
        </View>
        <Text style={styles.headerTitle}>Hello there 👋</Text>
      </Animated.View>

      {/* DRAWER CONTENT */}
      <Animated.ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        style={[styles.marginVertical, translateXStyle]}
      >
        <DrawerItemList
          state={state}
          descriptors={descriptors}
          navigation={navigation}
          styles={styles}
        />

        {/* PROJECTS */}
        <View style={[styles.view, styles.marginVertical]}>
          <Text>Projects</Text>
          <View style={styles.separator} />
          {ProjectsArray.map((item, index) => (
            <ProjectItem
              key={index}
              label={item.title}
              type={item.iconType}
              name={item.icon}
              color={item.color}
              onPress={() => navigation.navigate('chart')}
            />
          ))}
        </View>

        {/* PROFILE MENU */}
        <Animated.View
          style={[
            styles.view,
            { backgroundColor: colors.primary },
            profileMenuStyle,
          ]}
        >
          <Text>Kelsey Van</Text>
          <Text>kelseyvan@gmail.com</Text>
          <View style={styles.separator} />
          {ProfileMenu.map((item, index) => (
            <ProfileItem
              key={index}
              label={item.label}
              type={item.iconType}
              name={item.icon}
            />
          ))}
          <Text style={{ marginTop: 10 }}>
            v1.0.0 · Terms & Conditions
          </Text>
        </Animated.View>
      </Animated.ScrollView>

      {/* FOOTER */}
      <TouchableOpacity onPress={onFooterPress}>
        <Animated.View
          style={[
            styles.row,
            styles.view,
            styles.marginBottom,
            bottomViewStyle,
          ]}
        >
          <Image
            style={styles.profile}
            source={require('../assets/images/all.png')}
          />
          <View>
            <Text style={styles.headerTitle}>Kelsey Van</Text>
            <Text>Software Engineer</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default CustomDrawer1

/* -------------------------------------------------------------------------- */
/*                                   STYLES                                   */
/* -------------------------------------------------------------------------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING / 1.5,
  },
  marginTop: {
    marginTop: constant.SPACING / 2,
  },
  marginBottom: {
    marginBottom: constant.SPACING / 2,
  },
  marginVertical: {
    marginVertical: constant.SPACING / 2,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: constant.SPACING / 2,
    justifyContent: 'space-between',
    borderRadius: constant.borderRadius,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: constant.textFontSize,
    color: colors.dark,
    paddingHorizontal: constant.SPACING,
  },
  notificationBadge: {
    paddingVertical: constant.SPACING / 5,
    paddingHorizontal: constant.SPACING / 2,
    borderRadius: constant.borderRadius / 2,
  },
  iconContainer: {
    padding: constant.SPACING / 2.4,
    borderRadius: constant.borderRadius,
    margin: constant.SPACING / 2,
    backgroundColor: colors.primary,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: colors.darkGray,
    marginVertical: constant.SPACING / 2,
  },
  headerTitle: {
    fontSize: constant.titleFontSize,
    color: colors.dark,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: constant.SPACING,
    backgroundColor: colors.light,
  },
})
