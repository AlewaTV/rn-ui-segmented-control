import { Pressable, StyleSheet, Text, View, type StyleProp, type ViewStyle, type AccessibilityPropsIOS } from 'react-native';
import type { SegmentProps } from '../types';
import theme from '../theme';
import { PlatformColor } from 'react-native';


export interface SegmentIOSProps extends SegmentProps, AccessibilityPropsIOS {
  containerStyle?: StyleProp<ViewStyle>
}

export const SegmentIOS: React.FC<SegmentIOSProps> = (props) => {
  const {
    label,
    index, 
    onPress,
    isActive,
    isFirst,
    isLast,

    style: segmentStyle,
    containerStyle,
    labelStyle,
    activeSegmentStyle,
    activeLabelStyle,

    accessible = true,
    accessibilityLabel = `Tab ${index+1}: ${label}.`,
    accessibilityHint = 'Tap to switch to this tab.'
  } = props

  return (
    <View 
      style={[ styles.container, containerStyle ]} 
      
      accessible={accessible} 
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      >
      <Pressable onPress={onPress} accessibilityRole='tab' style={[
            styles.segment, segmentStyle,
            isActive && styles.activeSegment, isActive && activeSegmentStyle,
            isFirst && styles.firstSegment,
            isLast && styles.lastSegment
          ]}
      >
          { isActive 
          ? <Text style={[
              styles.label, labelStyle, 
              styles.activeLabel, activeLabelStyle
            ]}
            >
              {label}
            </Text>
          : <Text style={[styles.label, labelStyle]}>
              {label}
            </Text>
          }
      </Pressable>
    </View>
  )
}

export default SegmentIOS


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    height: '100%',
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  segment: {
    flex: 10,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 

    // borderColor: 'red',
    // borderWidth: 0.6,
  },
  label: {
    color: PlatformColor('label'),
    fontFamily: theme.fontFamily.normal,
    fontSize: 15,
  },
  activeSegment: {

  },
  activeLabel: {
    color: PlatformColor('label'),
    fontWeight: '600',
  },
  firstSegment: { marginLeft: 0 },
  lastSegment: { marginRight: 0 }
})

export {styles as segmentStylesIOS}