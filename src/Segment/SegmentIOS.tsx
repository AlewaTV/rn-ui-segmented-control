import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { SegmentProps } from '../types';
import theme from '../theme';
import { PlatformColor } from 'react-native';


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
          style={[styles.separator, separatorStyle, {opacity: 1, backgroundColor: 'red'}]}
          collapsable={false}
        />
      )}
      <Pressable onPress={onPress}>
        <View style={[
          styles.segment, segmentStyle,
          // isActive && styles.activeSegment, isActive && activeSegmentStyle,
          isFirst && styles.firstSegment,
          isLast && styles.lastSegment
          ]}>
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
        </View>
      </Pressable>
    </View>
  )
}

export default SegmentIOS


const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  separator: {
    flex: 1,
    height: '50%',
    //width: 3,
    backgroundColor: 'red', // PlatformColor('separator'),
    opacity: 1,
  },
  segment: {
    flex: 1,
    borderRadius: 7,
    flexDirection: 'row',
    justifyContent: 'center',

    // borderColor: 'red',
    // borderWidth: 0.6,
  },
  label: {
    color: PlatformColor('label'),
    fontFamily: theme.fontFamily.normal,
    fontSize: 15,
    alignSelf: 'center'
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