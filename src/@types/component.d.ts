export interface SegmentProps {
  label: string,
  onPress: () => void,
  isActive: boolean,
  isFirst: boolean,
  isLast: boolean,
  renderLeftSeparator: boolean
}

export interface SegmentedControlProps {
  values: string[],
  onIndexChange: (index: number) => void,
  renderSeparators: boolean,
  selectedIndex: number
}