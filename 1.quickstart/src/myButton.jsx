const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

export default function Profile(user) {
  const listItems = products.map((products) => (
    <li key={products.id}>{products.title}</li>
  ));

  return <ul>{listItems}</ul>;
}
