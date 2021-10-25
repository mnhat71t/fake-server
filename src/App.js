import HttpClient from './httpClient';
import { useState, useEffect } from 'react';

function App() {
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState(null);

  const httpClient = new HttpClient("http://localhost:3500");

  useEffect(() => {
    httpClient.getProducts(setProducts);
  }, []);


  return (
    <div className="App">
      {products && JSON.stringify(products, null, 2)}
    </div>
  );
}

export default App;
