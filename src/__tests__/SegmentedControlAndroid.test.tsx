import { act, render, screen, userEvent } from '@testing-library/react-native'
import { SegmentedControlAndroid as _SegmentedControlAndroid } from '../SegmentedControl';
import { createRef, forwardRef } from 'react';
import type { SegmentedControlRef } from '../types';

const SegmentedControlAndroid = forwardRef(_SegmentedControlAndroid)

test('given a control with 2 segments, user can press a segment to switch to it', async () => {
  const mockFn = jest.fn();
  jest.useFakeTimers();

  const user = userEvent.setup();

  render(
    <SegmentedControlAndroid 
      labels={['Library', 'Discover']}
      onIndexChange={mockFn}
      mode='single'
      hapticFeedback={false}
     />
  );

  const tabs = screen.getAllByRole('tab');
  expect(tabs).toHaveLength(2);

  await user.press(tabs[1]); 
  act(() => jest.runAllTimers());
  expect(mockFn).toBeCalledWith(1, 'Discover');

  await user.press(tabs[0]); 
  act(() => jest.runAllTimers());
  expect(mockFn).toBeCalledWith(0, 'Library');

  jest.useRealTimers();
});

test('given a control with 3 segments, user can select all 3', async () => {
  const mockFn = jest.fn();
  jest.useFakeTimers();
  
  const user = userEvent.setup();

  render(
    <SegmentedControlAndroid 
      labels={['Library', 'Discover', 'All']}
      onSelectionChange={mockFn}
      mode='multiple'
      hapticFeedback={false}
     />
  );

  const tabs = screen.getAllByRole('tab');
  expect(tabs).toHaveLength(3);


  await user.press(tabs[0]);
  act(() => jest.runAllTimers());
  expect(mockFn).toBeCalledWith([0]);

  await user.press(tabs[1]);
  act(() => jest.runAllTimers());
  expect(mockFn).toBeCalledWith([1, 0]);

  await user.press(tabs[2]);
  act(() => jest.runAllTimers());
  expect(mockFn).toBeCalledWith([2, 1, 0]);

  jest.useRealTimers();
});

test('when ref is prop is set, we should be able to trigger index change programmatically', () => {
  const mockFn = jest.fn();
  const ref = createRef<SegmentedControlRef>();

  render(
    <SegmentedControlAndroid 
      labels={['Library', 'Discover']}
      onIndexChange={(mockFn)}
      hapticFeedback={false}
      ref={ref}
     />
  );

  act(() => ref.current?.goToIndex(1))
  expect(mockFn).toBeCalledWith(1, 'Discover');
});