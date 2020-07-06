// removes Animated: `useNativeDriver` is not supported Warning
// eslint-disable-next-line no-undef
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

// Removes the ReferenceError: You are trying to `import`
// eslint-disable-next-line no-undef
jest.useFakeTimers();
