// icons/HomeIcon.tsx
import Svg, { Path } from 'react-native-svg'
import Animated from 'react-native-reanimated'

const AnimatedPath = Animated.createAnimatedComponent(Path)

export function HomeIcon({ color }: { color: string }) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <AnimatedPath
        d="M3 10L12 3L21 10V21H3V10Z"
        fill={color}
      />
    </Svg>
  )
}
