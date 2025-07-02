import ProductCard from './components/productCard';
import './scss/global.scss';
import { Product } from './types';

const products: Product[] = [
  {
    id: 1,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  },
  {
    id: 2,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  },
  {
    id: 3,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  },
  {
    id: 4,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  },
  {
    id: 5,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  },
  {
    id: 6,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  },
  {
    id: 7,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  },
  {
    id: 8,
    title: 'Название',
    origin: 'Россия',
    price: 35000,
    currency: 'RUB',
    imageUrl: 'https://s00.yaplakal.com/pics/pics_original/9/6/2/19443269.jpg'
  }
]

function App() {
  return (
    <div className="App">
      <div className="container">
        {products.map((e) => {
          return (
            <ProductCard
              title={e.title}
              origin={e.origin}
              price={e.price}
              currency={e.currency}
              imageUrl={e.imageUrl}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
