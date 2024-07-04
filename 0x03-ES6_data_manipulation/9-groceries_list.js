/**
 * Returns a map of groceries with items and their quantities.
 * @returns {Map<string, number>} A Map where keys are grocery items and values are quantities.
 */
export default function groceriesList() {
  // Returns a map of groceries with items and quantity.
  // Example: {'Apple' => 10, 'Tomatoes' => 10, 'Paste' => 1, 'Rice' => 1, 'Banana' => 5}
  
  const myList = new Map();
  const items = ['Apple', 'Tomatoes', 'Paste', 'Rice', 'Banana'];
  const quantities = [10, 10, 1, 1, 5];

  // Populate the Map with grocery items and quantities
  for (let i = 0; i < items.length; i++) {
    myList.set(items[i], quantities[i]);
  }

  return myList;
}

