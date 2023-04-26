import logo from './logo.svg';
import './App.css';
import Productcard from './ProductCard/ProductCard';

const data = [{
  productPic: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=400",
  id: "1234",
  productName: "Nike",
  Brand: "Nike",
  productDescription: "This is best shoe to use",
  Price: "$65",
  Rating: "4.5"

},
{
  productPic: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=400",
  id: "1234",
  productName: "Watch",
  Brand: "Nike",
  productDescription: "This watch is best ",
  Price: "$85",
  Rating: "4.5"
},
{
  productPic: "https://images.pexels.com/photos/1176618/pexels-photo-1176618.jpeg?auto=compress&cs=tinysrgb&w=400",
  id: "1234",
  productName: "Shirt",
  Brand: "Nike",
  productDescription: " Branded Shirt  ",
  Price: "$65",
  Rating: "4.5"
},
{

  productPic: "https://cdn.shopify.com/s/files/1/0490/6011/8686/products/CVC-Sunscreen.jpg?v=1665755509",
  id: "1234",
  productName: " Sunscreen",
  Brand: "Nike",
  productDescription: "This Sunscreen is best",
  Price: "$65",
  Rating: "4.5"
},
{
  productPic: "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=400",
  id: "1234",
  productName: " PUMA ",
  Brand: "Nike",
  productDescription: "This PUMA shoe is branded",
  Price: "$65",
  Rating: "4.5"
}];


function App() {
  return (
    <div className="App">
      <Productcard data={data} />
    </div>
  );
}

export default App;
