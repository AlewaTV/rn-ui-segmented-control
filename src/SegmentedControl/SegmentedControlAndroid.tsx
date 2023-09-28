import { PlatformColor, StyleSheet, View } from "react-native";
import type { SegmentedControlProps } from "../types";
import { useEffect, useState } from "react";
import { triggerHapticFeedback } from "../utils";
import { SegmentAndroid } from "../Segment/SegmentAndroid";
import type { PressableAndroidRippleConfig } from "react-native";

export interface SegmentedControlAndroidProps extends SegmentedControlProps {
  android_ripple?: PressableAndroidRippleConfig | null | undefined
}

export const SegmentedControlAndroid: React.FC<SegmentedControlAndroidProps> = (props) => {
  const {
    labels,
    mode = 'single',
    onIndexChange,
    onSelectionChange,
    selectedIndex: _selectedIndex = 0,
    hapticFeedback: hapticFeedbackEnabled = true,

    style,
    segmentStyle,
    activeSegmentStyle,
    labelStyle,
    activeLabelStyle,
    android_ripple,

    accessible = true,
    accessibilityLabel = 'Tab Bar',
    accessibilityHint = `You can select 1 ${mode === 'multiple' ? 'or more' : '' } of ${labels.length} tabs`
  } = props

  const [selection, updateSelection] = useState<number[] | undefined>(Array.isArray(_selectedIndex) ? _selectedIndex : undefined)
  const [selectedIndex, setSelectedIndex] = useState(typeof _selectedIndex === 'number' ? _selectedIndex : 0);

  const length = labels.length;

  useEffect(() => {
    if (selection === undefined) return

    onSelectionChange?.(selection)
  }, [selection])


  const handleIndexChange = (index: number, label: string) => {
    hapticFeedbackEnabled && triggerHapticFeedback()

    setSelectedIndex(index);
    onIndexChange?.(index, label);
  };

  const toggleSelected = (index: number) => {
    hapticFeedbackEnabled && triggerHapticFeedback()

    updateSelection(prev => {
      const s = prev || []

      return s.includes(index) 
          ? s.filter(k => k !== index) 
          : [index, ...s]
    })
  };

  const onTabPress = (index: number, label: string) => {
    return (mode === 'single') 
        ? handleIndexChange(index, label)
        : toggleSelected(index)
  }

  const isActive = (index: number): boolean => {
    return (mode === 'single') 
        ? selectedIndex === index
        : Boolean(selection && selection.includes(index))
  }
  
  return (
    <View 
      style={[styles.container, style]} 

      accessible={accessible} 
      accessibilityLabel={accessibilityLabel} 
      accessibilityHint={accessibilityHint}
      >
        <View style={[styles.tabs]}>
          {labels.map((label: string, index: number) => (
            <SegmentAndroid
              label={label}
              index={index}
              onPress={() => onTabPress(index, label)}
              isActive={isActive(index)}
              isFirst={index === 0}
              isLast={index === length - 1}
              key={index}
              style={[segmentStyle]}
              labelStyle={labelStyle}
              activeLabelStyle={activeLabelStyle}
              activeSegmentStyle={activeSegmentStyle}
              android_ripple={android_ripple}
            />
          ))}
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '95%',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PlatformColor('@android:color/background_light', 'white'),

    padding: 0,
  },
  tabs: {
    flex: 1,
    height: 36,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
