import React, { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [disable, setDisable] = useState(false);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${count === 0 ? 0 : count * 20}`);
      const data = await res.json();
      console.log(data);

      if (products.length >= 40) {
        setDisable(true); // Disable button if there are 40+ products
        return;
      }

      setProducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchProducts();
    setLoading(false);
  }, [count]);

  if (loading) {
    return (
      <div className="w-full h-[100vh] flex justify-center items-center">
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <div className="container width-full min-h-[100vh] m-5">
      <div className="grid grid-cols-4 gap-2">
        {products.length > 0 && products.map((p, i) => (
          <div className="h-[200px] w-[200px]" key={p.id}>
            <img src={p.thumbnail} alt={p.title} className="h-[150px] w-full object-cover" />
            <h1>{p.title}</h1>
          </div>
        ))}
      </div>

      <div className="mt-5 flex justify-center">
        <button
          type="button"
          disabled={disable} // Correct attribute for disabling
          onClick={() => setCount(count + 1)}
          className={`mx-auto ${disable ? 'bg-gray-400' : 'bg-blue-500'} p-4 rounded-md`}
        >
          {disable ? 'No more products to load' : 'Load more baby, come on!'}
        </button>
      </div>
    </div>
  );
};

export default App;
