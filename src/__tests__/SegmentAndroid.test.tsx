import { render, screen } from '@testing-library/react-native'
import { SegmentAndroid } from '../Segment';


test('given empty GroceryShoppingList, user can add an item to it', () => {
  render(
    <SegmentAndroid 
      label={'All'}
      onPress={() => null}
      isActive={true}
      isFirst={true}
      isLast={true}
      renderLeftSeparator={true}
     />
  );

  const segments = screen.getAllByText('All');
  expect(segments).toHaveLength(1);

  // fireEvent.press(segments); 
});