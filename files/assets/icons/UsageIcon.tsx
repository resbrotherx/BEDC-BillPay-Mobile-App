import Svg, { Path } from 'react-native-svg'

export function UsageIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M12 3V21M3 12H21"
        stroke={color}
        strokeWidth={2}
      />
    </Svg>
  )
}
