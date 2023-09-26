import { Pressable, StyleSheet, Text, View } from "react-native";
import type { SegmentProps } from "../@types";
import theme from "../theme";
import { PlatformColor } from "react-native";

export interface SegmentIOSProps extends SegmentProps {

}

export const SegmentIOS: React.FC<SegmentIOSProps> = (props) => {
  const {
    label,
    onPress,
    isActive,
    isFirst,
    isLast,
    renderLeftSeparator,

    style: segmentStyle,
    labelStyle,
    // activeSegmentStyle,
    activeLabelStyle,
    separatorStyle,
  } = props

  return (
    <View style={[
      styles.container,
    ]}>
      {renderLeftSeparator && (
        <View
          style={[styles.separator, separatorStyle]}
        ></View>
      )}
      <Pressable onPress={onPress}>
        <View style={[
          styles.segment, segmentStyle,
          // isActive && styles.activeSegment, isActive && activeSegmentStyle,
          isFirst && styles.firstSegment,
          isLast && styles.lastSegment
          ]}>
          <Text style={[
            styles.label, labelStyle, 
            isActive && styles.activeLabel, isActive && activeLabelStyle
          ]}
          >
            {label}
          </Text>
        </View>
      </Pressable>
    </View>
  )
}

export default SegmentIOS

const {
  activeBgColor,
} = theme.color;

const borderRadius = 7;
const gap = 2;

export const iosTabVerticalSpacing = gap;


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: "row", 
    alignItems: "center" 
  },
  separator: {
    height: "50%",
    width: 1,
    backgroundColor: PlatformColor('separator')
  },
  segment: {
    flex: 1,
    marginVertical: iosTabVerticalSpacing,
    borderRadius
  },
  label: {
    color: PlatformColor('label'),
    fontFamily: theme.fontFamily.normal,
    fontSize: theme.fontSize.l,
    paddingVertical: 2 * gap,
    paddingHorizontal: 2 * gap,
    alignSelf: "center"
  },
  activeSegment: {
    backgroundColor: activeBgColor
  },
  activeLabel: {
    color: PlatformColor('label')
  },
  firstSegment: { marginLeft: 0 },
  lastSegment: { marginRight: 0 }
})
