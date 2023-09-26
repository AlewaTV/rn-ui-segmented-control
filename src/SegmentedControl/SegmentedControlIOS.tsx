import { StyleSheet, View, Animated } from 'react-native';
import type { SegmentedControlProps } from '../types';
import { useEffect, useRef, useState } from 'react';
import SegmentIOS from '../Segment/SegmentIOS';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import { PlatformColor } from 'react-native';
import { segmentStylesIOS } from '../Segment/SegmentIOS';
import { easeOutCubic } from '../utils';

export interface SegmentedControlIOSProps extends SegmentedControlProps {
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
    labelStyle,
    activeSegmentStyle,
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
    <GestureHandlerRootView>
    <View style={[styles.container, style]}>
      <GestureDetector gesture={panGesture}>
        <View
          style={[styles.segments]}
          onLayout={event => {
            setContainerWidth(event.nativeEvent.layout.width);
          }}
        >
          <Animated.View
            style={[
            { width: segmentWidth },
            styles.segment, segmentStyle,
            styles.activeSegment, activeSegmentStyle,
            styles.animatedView,
            { transform: [{translateX: slideAnimRef}] }
          ]}
          />
          {labels.map((label: string, index: number) => (
            <SegmentIOS
              label={label}
              onPress={() => handleIndexChange(index, label)}
              isActive={selectedIndex === index}
              isFirst={index === 0}
              isLast={index === length - 1}
              renderLeftSeparator={ renderSeparators }
              key={index}
              style={[segmentStyle, {width: segmentWidth,}]}
              labelStyle={labelStyle}
              activeLabelStyle={activeLabelStyle}
              separatorStyle={[separatorStyle, {opacity: leftSeparatorOpacity(index, selectedIndex)}]}
            />
          ))}
        </View>
      </GestureDetector>
    </View>
    </GestureHandlerRootView>
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
    borderRadius: 7,

    // borderColor: 'blue', // PlatformColor('separator'),
    // borderWidth: 0.6,
    paddingVertical: 1.5,
    paddingHorizontal: 3,
  },
  segments: {
    position: 'relative',
    minHeight: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    // borderColor: 'red', // PlatformColor('separator'),
    // borderWidth: 0.6,
  },
  segment: segmentStylesIOS.segment,
  activeSegment: segmentStylesIOS.activeSegment,
  animatedView: {
    top: 0,// iosTabVerticalSpacing,
    bottom: 0, //iosTabVerticalSpacing,
    position: 'absolute',

    shadowColor: 'rgba(0,0,0,1)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 4.65,
  }
})
