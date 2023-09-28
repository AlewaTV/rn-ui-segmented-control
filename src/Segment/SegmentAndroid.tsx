import { PlatformColor, StyleSheet, Text } from 'react-native';
import type { SegmentProps } from '../types';
import { Pressable } from 'react-native';
import type { PressableAndroidRippleConfig } from 'react-native';

export interface SegmentAndroidProps extends SegmentProps {
  android_ripple?: PressableAndroidRippleConfig | null | undefined
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

    android_ripple,
  } = props

  return (
    <Pressable
      onPress={onPress}
      // @see https://reactnative.dev/docs/pressable#rippleconfig
      android_ripple={android_ripple}
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

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    width: '100%',
    paddingVertical: 2,
    paddingHorizontal: 4,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  label: { 
    fontFamily: "Roboto",
    fontSize: 20,
    color: PlatformColor('?android:attr/textColor', 'black'),
    alignSelf: 'center' 
  },
  activeTab: {
    backgroundColor: PlatformColor('@android:color/background_light', 'white'),
    borderBottomColor: 'black',
  },
  activeLabel: {
    color: PlatformColor('?android:attr/textColor', 'black'),
  },
  firstTab: {},
  lastTab: {}
})
