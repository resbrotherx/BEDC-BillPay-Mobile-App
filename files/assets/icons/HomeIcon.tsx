import Svg, { Path } from 'react-native-svg'
import Animated from 'react-native-reanimated'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export function HomeIcon({ color }: { color: string }) {
  return (
    <Svg width={26} height={26} viewBox="0 0 24 24">
      <AnimatedPath
        fill={color}
        d="M4.5 10.4L11.2 4.9C11.7 4.5 12.3 4.5 12.8 4.9L19.5 10.4
           C19.8 10.7 20 11.1 20 11.6V18.5
           C20 19.3 19.3 20 18.5 20H14.2
           C13.6 20 13.2 19.6 13.2 19V15.5
           C13.2 14.9 12.8 14.5 12.2 14.5H11.8
           C11.2 14.5 10.8 14.9 10.8 15.5V19
           C10.8 19.6 10.4 20 9.8 20H5.5
           C4.7 20 4 19.3 4 18.5V11.6
           C4 11.1 4.2 10.7 4.5 10.4Z"
      />
    </Svg>
  )
}
