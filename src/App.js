import './App.css';
import { Productcard } from './components/ProductCard/ProductCard';
import { Fragment } from 'react';

function App() {


  const product1 = {
    productPic: "https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?auto=compress&cs=tinysrgb&w=400",
    id: "1234",
    productName: "Nike",
    Brand: "Nike",
    productDescription: "This is best shoe to use",
    Price: "$65",
    Rating: "4.5"

  }

  const product2 = {
    productPic: "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=400",
    id: "1234",
    productName: "Watch",
    Brand: "Nike",
    productDescription: "This watch is best ",
    Price: "$85",
    Rating: "4.5"
  }

  const product3 = {
    productPic: "https://images.pexels.com/photos/581087/pexels-photo-581087.jpeg?auto=compress&cs=tinysrgb&w=400",
    id: "1234",
    productName: "T-Shirts",
    Brand: "Nike",
    productDescription: "Some branded t-shirts  ",
    Price: "$65",
    Rating: "4.5"
  }

  const product4 = {

    productPic: "https://cdn.shopify.com/s/files/1/0490/6011/8686/products/CVC-Sunscreen.jpg?v=1665755509",
    id: "1234",
    productName: " Sunscreen",
    Brand: "Nike",
    productDescription: "This Sunscreen is best",
    Price: "$65",
    Rating: "4.5"
  }

  const product5 = {
    productPic: "https://images.pexels.com/photos/2759783/pexels-photo-2759783.jpeg?auto=compress&cs=tinysrgb&w=400",
    id: "1234",
    productName: " PUMA ",
    Brand: "Nike",
    productDescription: "This PUMA shoe is branded",
    Price: "$65",
    Rating: "4.5"
  }


  function productalert1() {
    alert("product details "+ product1.productName)
  }
  function productalert2() {
    alert("product details "+ product2.productName)
  }
  function productalert3() {
    alert("product details "+ product3.productName)
  }
  function productalert4() {
    alert("product details "+ product4.productName)
  }
  function productalert5() {
    alert("product details "+ product5.productName)
  }

  const card1 = {
    background: 'orange'
  }


  const card2 = {
    background: 'blue'
  }


  const card3 = {
    background: 'green'
  }


  const card4 = {
    background: 'red'
  }

  const card5 = {
    background: 'yellow'
  }

  return (

    <Fragment>
      <div className='child_container'>

        <Productcard
          productDetails={product1}
          alertfun={productalert1}
          button={card1}

        />
        <Productcard
          productDetails={product2}
          alertfun={productalert2}
          button={card2}

        />
        <Productcard
          productDetails={product3}
          alertfun={productalert3}
          button={card3}
        />
        <Productcard
          productDetails={product4}
          alertfun={productalert4}
          button={card4}
        />
        <Productcard
          productDetails={product5}
          alertfun={productalert5}
          button={card5}
        />
      </div>
    </Fragment>
  );
}

export default App;