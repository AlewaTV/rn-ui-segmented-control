import type { TextStyle } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"

export interface SegmentProps {
  label: string
  onPress: () => void
  isActive: boolean
  isFirst: boolean
  isLast: boolean
  renderLeftSeparator: boolean

  style?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  activeSegmentStyle?: StyleProp<ViewStyle>
  activeLabelStyle?: StyleProp<TextStyle>
  firstSegmentStyle?: StyleProp<ViewStyle>
  lastSegmentStyle?: StyleProp<ViewStyle>
  separatorStyle?: StyleProp<ViewStyle>
}

export interface SegmentedControlProps {
  values: string[],
  onIndexChange: (index: number) => void,
  renderSeparators: boolean,
  selectedIndex: number

  style?: StyleProp<ViewStyle>
  segmentStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  activeSegmentStyle?: StyleProp<ViewStyle>
  activeLabelStyle?: StyleProp<TextStyle>
  separatorStyle?: StyleProp<ViewStyle>
}