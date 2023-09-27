import type { AccessibilityProps, TextStyle } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"

export interface SegmentProps extends AccessibilityProps {
  label: string
  index: number
  onPress: () => void
  isActive: boolean
  isFirst: boolean
  isLast: boolean

  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  activeSegmentStyle?: StyleProp<ViewStyle>
  activeLabelStyle?: StyleProp<TextStyle>
  firstSegmentStyle?: StyleProp<ViewStyle>
  lastSegmentStyle?: StyleProp<ViewStyle>
}

export interface SegmentedControlProps extends AccessibilityProps {
  labels: string[],
  onIndexChange?: (index: number, label: string) => void, // in 'single' mode
  onSelectionChange?: (selection: number[]) => void, // in 'multiple' mode
  renderSeparators?: boolean,
  selectedIndex?: number | number[]
  mode?: 'single' | 'multiple'

  style?: StyleProp<ViewStyle>
  segmentStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  activeSegmentStyle?: StyleProp<ViewStyle>
  activeLabelStyle?: StyleProp<TextStyle>
  separatorStyle?: StyleProp<ViewStyle>
}