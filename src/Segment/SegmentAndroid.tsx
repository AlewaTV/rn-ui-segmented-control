import { StyleSheet, Text, View } from "react-native";
import type { SegmentProps } from "../types";
import { Pressable } from "react-native";
import theme from "../theme";

export interface SegmentAndroidProps extends SegmentProps {

}

export const SegmentAndroid: React.FC<SegmentAndroidProps> = (props) => {
  const {
    label,
    onPress,
    isActive,
    isFirst,
    isLast,

    style: tabStyle,
    labelStyle,
    activeSegmentStyle,
    activeLabelStyle,
  } = props

  return (
    <Pressable
      onPress={onPress}
      // @see https://reactnative.dev/docs/pressable#rippleconfig
      android_ripple={{color: theme.color.ripple, borderless: true, foreground: true}}
    >
      <View style={[
          styles.tab, tabStyle,
          isActive && styles.activeTab, isActive && activeSegmentStyle,
          isFirst && styles.firstTab,
          isLast && styles.lastTab
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
  )
}

const { borderColor, activeTextColor } = theme.color;

export const androidTabBarHeight = 40;

const fontStyles = {
  fontFamily: theme.fontFamily.normal,
  fontSize: theme.fontSize.l,
  color: activeTextColor
};

const gap = theme.spacing.s;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    paddingVertical: gap,
    paddingHorizontal: 2 * gap
  },
  label: { ...fontStyles, alignSelf: "center" },
  activeTab: {
    borderBottomWidth: theme.spacing.xs,
    borderBottomColor: borderColor
  },
  activeLabel: {
    ...fontStyles
  },
  firstTab: {},
  lastTab: {}
})
