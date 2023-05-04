import React from 'react';
import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import { useQuery } from 'react-query'
import { getProducts } from './api/api'

interface Product {
	title: string;
	id: number;
	category: string;
	description: string;
	image: string;
	price: number;
	rating: object;
}

const App = () => {
	const { data, isLoading, isError } = useQuery<Array<Product>>('products', getProducts, {
		staleTime: 30000,
		cacheTime: 30000
	});

	if (isLoading) {
    return <h4>Loading</h4>
  }
  if (isError) {
    return <h4>Something went wrong !!</h4>
  }
	
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
				<CounterContainer />
      </header>
			{data?.map((product: Product) => (
        <div key={product.id}>
          <h5>{product.title}</h5>
        </div>
      ))}
    </div>
  );
}

export default App;
