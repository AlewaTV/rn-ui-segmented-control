import { render, screen } from '@testing-library/react-native'
import { SegmentedControlIOS } from '../SegmentedControl';


test('given empty GroceryShoppingList, user can add an item to it', () => {
  render(
    <SegmentedControlIOS 
      labels={['Library', 'Discover']}
     />
  );

  const segments = screen.getAllByText('Library');
  expect(segments).toHaveLength(1);

  // fireEvent.press(segments); 
});