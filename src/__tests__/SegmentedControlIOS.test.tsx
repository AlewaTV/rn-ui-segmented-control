import { render, screen, fireEvent } from '@testing-library/react-native'
import { SegmentedControlIOS } from '../SegmentedControl';


test('given a control with 2 segments, user can press a segment to switch to it', () => {
  const mockFn = jest.fn();

  render(
    <SegmentedControlIOS 
      labels={['Library', 'Discover']}
      onIndexChange={mockFn}
     />
  );

  const tabs = screen.getAllByRole('tab');
  expect(tabs).toHaveLength(2);

  fireEvent.press(tabs[1]); 
  expect(mockFn).toBeCalledWith(1, 'Discover');

  fireEvent.press(tabs[0]); 
  expect(mockFn).toBeCalledWith(0, 'Library');
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

test('given a control with 3 segments, user can select all 3', () => {
  const mockFn = jest.fn();

  render(
    <SegmentedControlIOS 
      labels={['Library', 'Discover', 'All']}
      onSelectionChange={mockFn}
      mode='multiple'
     />
  );

  const tabs = screen.getAllByRole('tab');
  expect(tabs).toHaveLength(3);


  fireEvent.press(tabs[0]); 
  expect(mockFn).toBeCalledWith([0]);

  fireEvent.press(tabs[1]); 
  expect(mockFn).toBeCalledWith([1, 0]);

  fireEvent.press(tabs[2]); 
  expect(mockFn).toBeCalledWith([2, 1, 0]);
});