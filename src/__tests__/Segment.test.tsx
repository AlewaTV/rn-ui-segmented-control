import { render, screen } from '@testing-library/react-native'
import Segment from "../Segment";


test('given empty GroceryShoppingList, user can add an item to it', () => {
  render(
    <Segment 
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