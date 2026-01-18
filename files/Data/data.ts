import { ComponentProps } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Icons } from "../assets/icons/icons";
import UsageScreen from "../screens/UsageScreen";
import { colors }  from "../constants/constant";

export type IoniconName =
  ComponentProps<typeof Ionicons>['name']

export type PayOption = {
  key: string
  label: string
  iconName: IoniconName
  color: string
  bgColor: string
  route: string
}
const payIconColors = [
  '#2563EB', // strong blue
  '#16A34A', // strong green
  '#F97316', // strong orange
  '#7C3AED', // strong purple
  '#DB2777', // strong pink
];


const payBgColors = [
  '#EFF6FF', // blue tint
  '#ECFDF5', // green tint
  '#FFF7ED', // orange tint
  '#F5F3FF', // purple tint
  '#FDF2F8', // pink tint
];


export const PAY_OPTIONS: PayOption[] = [
  {
    key: 'airtime',
    label: 'Airtime',
    iconName: 'call-outline',
    color: payIconColors[0],
    bgColor: payBgColors[0],
    route: 'Airtime',
  },
  {
    key: 'data',
    label: 'Buy Data',
    iconName: 'cellular-outline',
    color: payIconColors[1],
    bgColor: payBgColors[1],
    route: 'DataPurchase',
  },
  {
    key: 'cable',
    label: 'Cable / TV',
    iconName: 'tv-outline',
    color: payIconColors[2],
    bgColor: payBgColors[2],
    route: 'CableTV',
  },
  {
    key: 'betting',
    label: 'Betting',
    iconName: 'game-controller-outline',
    color: payIconColors[3],
    bgColor: payBgColors[3],
    route: 'Betting',
  },
  {
    key: 'token',
    label: 'E-Token',
    iconName: 'flash-outline',
    color: payIconColors[4],
    bgColor: payBgColors[4],
    route: 'BuyToken',
  },
  {
    key: 'bill',
    label: 'Pay Bills',
    iconName: 'receipt-outline',
    color: payIconColors[0],
    bgColor: payBgColors[0],
    route: 'PayBill',
  },
  {
    key: 'wallet',
    label: 'Fund Wallet',
    iconName: 'wallet-outline',
    color: payIconColors[1],
    bgColor: payBgColors[1],
    route: 'FundWallet',
  },
  {
    key: 'trans',
    label: 'Transfer',
    iconName: 'swap-horizontal-outline',
    color: payIconColors[2],
    bgColor: payBgColors[2],
    route: 'Transfer',
  },
];



export const ScreensArray = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: UsageScreen, notification: 0, },
  { route: 'Inbox', label: 'My Inbox', type: Icons.Feather, icon: 'inbox', component: UsageScreen, notification: 9, },
  { route: 'Calendar', label: 'My Calendar', type: Icons.Feather, icon: 'calendar', component: UsageScreen, notification: 4, },
  { route: 'Documents', label: 'My Documents', type: Icons.Feather, icon: 'layers', component: UsageScreen, notification: 0, },
  { route: 'Activity', label: 'My Activity', type: Icons.Feather, icon: 'pie-chart', component: UsageScreen, notification: 2, },
  { route: 'Settings', label: 'Settings', type: Icons.Feather, icon: 'settings', component: UsageScreen, notification: 0, },
];

export const ProjectsArray = [
  { title: "Personal", icon: "profile", color: colors.icon1, iconType: Icons.AntDesign },
  { title: "travel", icon: "profile", color: colors.icon2, iconType: Icons.AntDesign },
  { title: "Business", icon: "profile", color: colors.icon3, iconType: Icons.AntDesign },
  { title: "Add", icon: "plus", color: colors.icon4, iconType: Icons.AntDesign },
]

export const ProfileMenu = [
  { label: 'History', icon: 'history', iconType: Icons.MaterialIcons },
  { label: 'Rate', icon: 'star', iconType: Icons.MaterialIcons },
  { label: 'Share', icon: 'share', iconType: Icons.MaterialIcons },
  { label: 'Logout', icon: 'logout', iconType: Icons.MaterialIcons },
]