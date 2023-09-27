import { PlatformColor, StyleSheet, Text } from 'react-native';
import type { SegmentProps } from '../types';
import { Pressable } from 'react-native';
import theme from '../theme';

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
      style={[
        styles.tab, tabStyle,
        isActive && styles.activeTab, isActive && activeSegmentStyle,
        isFirst && styles.firstTab,
        isLast && styles.lastTab
      ]}
      accessibilityRole='tab'
    >
          <Text style={[
                styles.label, labelStyle, 
                isActive && styles.activeLabel, isActive && activeLabelStyle
              ]}
              >
                {label}
          </Text>
    </Pressable>
  )
}

export const androidTabBarHeight = 40;


const gap = 2;

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    width: '100%',
    paddingVertical: gap,
    paddingHorizontal: 2 * gap,
    borderBottomWidth: theme.spacing.xs,
    borderBottomColor: 'transparent',

    // borderColor: 'red', // PlatformColor('separator'),
    // borderWidth: 0.6,
  },
  label: { 
    fontFamily: theme.fontFamily.normal,
    fontSize: theme.fontSize.l,
    color: PlatformColor('?android:attr/textColor', 'black'),
    alignSelf: 'center' 
  },
  activeTab: {
    backgroundColor: PlatformColor('@android:color/background_light', 'white'),
    borderBottomColor: 'black', //PlatformColor('@android:color/darker_gray', 'black'),
  },
  activeLabel: {
    fontFamily: theme.fontFamily.normal,
    fontSize: theme.fontSize.l,
    color: PlatformColor('?android:attr/textColor', 'black'),
  },
  firstTab: {},
  lastTab: {}
})
