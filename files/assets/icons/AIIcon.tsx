import Svg, { Path } from 'react-native-svg'

export function AIIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path
        d="M12 2C7 2 4 5 4 10V14C4 19 7 22 12 22C17 22 20 19 20 14V10C20 5 17 2 12 2Z"
        fill={color}
      />
    </Svg>
  )
}
