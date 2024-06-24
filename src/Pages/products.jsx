import { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";
import Counter from "../components/Fragments/Counter";

const products = [
  {
    id: 1,
    name: "Guitar",
    price: "Rp. 1.000.000",
    image: "/images/guitar.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed nemo,`,
  },
  {
    id: 2,
    name: "Bass",
    price: "Rp. 1.500.000",
    image: "/images/guitar.jpg",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nam natus vitae doloremque`,
  },
  {
    id: 3,
    name:"Piano",
    price: "Rp. 2.500.000",
    image: "/images/guitar.jpg",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, laboriosam et, nulla eveniet tempore impedit dicta deserunt odio harum, totam voluptate animi quibusdam sapiente soluta a sequi nesciunt aliquid est!`,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  }
  return (
    <Fragment>
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10">{email}
    <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
    </div>
    <div className="flex justify-center py-5">
      {products.map((product) => (
        <CardProduct key={product.id}>
          <CardProduct.Header image={product.image} />
          <CardProduct.Body name={product.name}>
            {product.description}
          </CardProduct.Body>
          <CardProduct.Footer price={product.price} />
        </CardProduct>
      ))}
    </div>
    <div className="flex w-100 justify-center">
      <Counter></Counter>
    </div>
    </Fragment>
  );
};
export default ProductsPage;
