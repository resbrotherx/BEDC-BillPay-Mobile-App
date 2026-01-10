import Svg, { Path } from 'react-native-svg'

export function ProfileIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M12 12C15 12 17 10 17 7C17 4 15 2 12 2C9 2 7 4 7 7C7 10 9 12 12 12ZM4 22C4 17 8 15 12 15C16 15 20 17 20 22"
        fill={color}
      />
    </Svg>
  )
}
