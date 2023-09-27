import { render, screen, fireEvent } from '@testing-library/react-native'
import { SegmentIOS } from '../Segment';


test('given empty GroceryShoppingList, user can add an item to it', () => {
  const mockFn = jest.fn();

  render(
    <SegmentIOS 
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

  fireEvent.press(tabs[0]); 
  expect(mockFn).toBeCalled();
});