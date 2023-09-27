import { act, render, screen, userEvent } from '@testing-library/react-native'
import { Segment } from "../Segment";


test('given empty GroceryShoppingList, user can add an item to it', async () => {
  const mockFn = jest.fn();
  jest.useFakeTimers()

  const user = userEvent.setup();

  render(
    <Segment 
      label={'All'}
      index={0}
      onPress={mockFn}
      isActive={true}
      isFirst={true}
      isLast={true}
     />
  );

  const tabs = screen.getAllByRole('tab');
  expect(tabs).toHaveLength(1);

  await user.press(tabs[0]); 
  act(() => jest.runAllTimers());
  expect(mockFn).toBeCalled();
  
  jest.useRealTimers()
});