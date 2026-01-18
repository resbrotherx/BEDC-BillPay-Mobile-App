import Svg, { Path } from 'react-native-svg'

export function PayIcon({ color }: { color: string }) {
  return (
    <Svg width={26} height={26} viewBox="0 0 24 24">
      <Path
        fill={color}
        d="M4 6.5
           C4 5.7 4.7 5 5.5 5H18.5
           C19.3 5 20 5.7 20 6.5V17.5
           C20 18.3 19.3 19 18.5 19H5.5
           C4.7 19 4 18.3 4 17.5V6.5Z"
      />
      <Path
        fill="#ffffff"
        d="M4 9.5H20V11H4V9.5Z"
        opacity={0.9}
      />
      <Path
        fill="#ffffff"
        d="M7 14.5H11V16H7V14.5Z"
        opacity={0.85}
      />
    </Svg>
  )
}
