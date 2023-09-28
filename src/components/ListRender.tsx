const ListRender = () => {
  const products = ["Loose Cropped Jeans (Damaged)", "Smart Tucked Shorts"];
  return (
    <ul>
      {products.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};

export default ListRender;
