import { act, render, screen, userEvent } from '@testing-library/react-native'
import { SegmentedControlIOS } from '../SegmentedControl';


test('given a control with 2 segments, user can press a segment to switch to it', async () => {
  const mockFn = jest.fn();
  jest.useFakeTimers();

  const user = userEvent.setup();

  render(
    <SegmentedControlIOS 
      labels={['Library', 'Discover']}
      onIndexChange={mockFn}
      mode='single'
      hapticFeedback={false}
      animate={false}
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


test('when animate prop is set to {true}, expect animated button to be rendered', () => {
  render(
    <SegmentedControlIOS 
      labels={['Library', 'Discover']}
      animate={true}
     />
  );

  const button = screen.queryByTestId('animated_button');
  expect(button).not.toBeNull();
});

test('when animate prop is set to {false}, expect animated button to NOT be rendered', () => {
  render(
    <SegmentedControlIOS 
      labels={['Library', 'Discover']}
      animate={false}
     />
  );

  const button = screen.queryByTestId('animated_button');
  expect(button).toBeNull();
});

test('when mode prop is set to {"multiple"}, expect animated button to NOT be rendered', () => {
  render(
    <SegmentedControlIOS 
      labels={['Library', 'Discover']}
      animate={true}
      mode='multiple'
     />
  );

  const button = screen.queryByTestId('animated_button');
  expect(button).toBeNull();
});

test('given a control with 3 segments, user can select all 3', async () => {
  const mockFn = jest.fn();
  jest.useFakeTimers();
  
  const user = userEvent.setup();

  render(
    <SegmentedControlIOS 
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