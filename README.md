# react-native-keyboard-scrollview

A react-native scrollview that will avoid the keyboard when focusing some inputs

## Installation

```sh
npm install react-native-keyboard-scrollview
```

## Usage

```js
import { KeyboardScrollView } from 'react-native-keyboard-scrollview';

// ...

<KeyboardScrollView
    contentContainerStyle={styles.container}
    additionalScrollHeight={20}
>
    <SomeScrollableContent />
    { /*... */ }
</KeyboardScrollView>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
