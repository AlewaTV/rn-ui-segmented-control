import 'react-native-gesture-handler';
import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { SegmentedControl } from 'rn-ui-segmented-control';

export default function App() {
  return (
      <View style={styles.container}>
        <SegmentedControl 
          labels={['Day', 'Week', 'Month']}
          renderSeparators={true}
          selectedIndex={0}
          style={{width: '90%', marginTop: 100, alignSelf: 'center'}}
          animate={true}
          mode='single'
          hapticFeedback={false}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
