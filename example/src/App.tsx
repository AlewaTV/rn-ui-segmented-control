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
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
