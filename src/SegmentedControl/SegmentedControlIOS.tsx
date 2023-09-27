import { StyleSheet, View, Animated, type StyleProp, type ViewStyle } from 'react-native';
import type { SegmentedControlProps } from '../types';
import { useEffect, useRef, useState } from 'react';
import SegmentIOS from '../Segment/SegmentIOS';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { PlatformColor } from 'react-native';
import { segmentStylesIOS } from '../Segment/SegmentIOS';
import { easeOutCubic } from '../utils';

export interface SegmentedControlIOSProps extends SegmentedControlProps {
  buttonStyle?: StyleProp<ViewStyle>
  easing?: (x: number) => number
}

export const SegmentedControlIOS: React.FC<SegmentedControlIOSProps> = (props) => {
  const {
    labels,
    onIndexChange,
    renderSeparators = true,
    easing,

    style,
    segmentStyle,
    buttonStyle,
    labelStyle,
    activeLabelStyle,
    separatorStyle,
  } = props

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);

  const slideAnimRef = useRef(new Animated.Value(0)).current;

  const [containerWidth, setContainerWidth] = useState(0);
  const length = labels.length;
  const segmentWidth = containerWidth / length;

  useEffect(() => {
    const leftVal = segmentWidth * selectedIndex;
    const duration = 200 * Math.abs(previousIndex - selectedIndex)

    Animated.timing(slideAnimRef, {
      toValue: leftVal,
      duration, 
      easing: easing || easeOutCubic,
      useNativeDriver: true,
    }).start()

  }, [containerWidth, selectedIndex]);

  const panGesture = Gesture.Pan().onChange(evt => {
    // TODO: implement pan gesture...
    evt.x
  });

  const handleIndexChange = (index: number, label: string) => {
    setPreviousIndex(selectedIndex)
    setSelectedIndex(index);
    onIndexChange?.(index, label);

    // Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const leftSeparatorOpacity = (index: number, selectedIndex: number) => {
    const isFirst = index === 0;
    const isSelected = index === selectedIndex;
    const isPrevSelected = index - 1 === selectedIndex;
    if (isFirst || isSelected || isPrevSelected) {
      return 0.3;
    }
    return 1;
  }
  
  return (
    <View style={[styles.container, style]}>
      <GestureDetector gesture={panGesture}>
        <View
          style={[styles.segments]}
          onLayout={event => {
            setContainerWidth(event.nativeEvent.layout.width);
          }}
        >
          {renderSeparators && <View style={styles.separators}>
            { labels.map((label: string, index: number) => index===0 
                        ? null 
                        : <View style={[styles.separator, separatorStyle, {opacity: leftSeparatorOpacity(index, selectedIndex)}]} />
                        ) }
          </View>}
          <Animated.View
            style={[
            styles.button, buttonStyle,
            { width: segmentWidth, transform: [{translateX: slideAnimRef}] }
          ]}
          />
          {labels.map((label: string, index: number) => (
            <SegmentIOS
              label={label}
              onPress={() => handleIndexChange(index, label)}
              isActive={selectedIndex === index}
              isFirst={index === 0}
              isLast={index === length - 1}
              key={index}
              style={[segmentStyle]}
              containerStyle={[{width: index === 0 ? segmentWidth-5 : segmentWidth}]}
              labelStyle={labelStyle}
              activeLabelStyle={activeLabelStyle}
            />
          ))}
        </View>
      </GestureDetector>
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
    backgroundColor: PlatformColor('systemGroupedBackground'),
    borderRadius: 8,

    paddingVertical: 3,
    paddingHorizontal: 3,
  },
  segments: {
    flex: 1,
    height: 36,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // borderColor: 'red', // PlatformColor('separator'),
    // borderWidth: 0.6,
  },
  button: {
    top: 0,
    bottom: 0,
    position: 'absolute',

    backgroundColor: PlatformColor('systemBackground'),
    borderRadius: 8,

    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 4.65,
  },
  segment: segmentStylesIOS.segment,
  activeSegment: segmentStylesIOS.activeSegment,
  separators: {
    position: 'absolute',
    top: 0, bottom: 0,

    height: '100%',
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  separator: {
    width: 1,
    height: '50%',
    borderRadius: 0.5,
    backgroundColor: PlatformColor('separator'),
  },
})
