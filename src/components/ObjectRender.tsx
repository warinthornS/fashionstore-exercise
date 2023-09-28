const ObjectRender = () => {
  const product = {
    name: "Smart Tucked Shorts",
    price: 20,
  };
  return (
    <div>
      <h1>Product: {product.name}</h1>
      <p>${product.price}</p>
    </div>
  );
};

export default ObjectRender;
