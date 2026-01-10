import Svg, { Path } from 'react-native-svg'

export function PayIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M4 6H20V18H4V6ZM4 10H20"
        fill={color}
      />
    </Svg>
  )
}
