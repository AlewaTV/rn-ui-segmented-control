# rn-ui-segmented-control

Segmented Control for iOS and Tab Control for Android.

## Installation

```sh
yarn add rn-ui-segmented-control
```

## Usage

```js
import { View } from 'react-native';
import { SegmentedControl } from 'rn-ui-segmented-control';

export default function App() {
  const handleOnIndexChange = (index: number, label: string) => {
    // ...
  }

  return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        <SegmentedControl 
          labels={['Day', 'Week', 'Month']}
          style={{width: '90%', alignSelf: 'center'}}
          onIndexChange={handleOnIndexChange}
        />
      </View>
  );
}

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
