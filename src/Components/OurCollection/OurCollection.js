import classes from "./OurCollection.module.scss";
import { useEffect, useState } from "react";
import { useHttp } from "../../Api/FetchApi";
import Card from "../UI/Card";
import Button from "../UI/Button";

const OurCollection = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const { isLoading, error, sendRequest: FetchAllProducts } = useHttp();
  useEffect(() => {
    const fetchedData = (data) => {
      setAllProducts(data);
    };
    FetchAllProducts({ url: "https://fakestoreapi.com/products" }, fetchedData);
  }, [FetchAllProducts]);
  const filterSelectionHandler = (e) => {
    const data = e.target.value;
    const getTendingProducts = allProducts.filter((product) => {
      return product.category === data;
    });
    setFilterProducts(getTendingProducts);
    setIsFilterOn(true);
  };

  return (
    <div className={classes.ourCollection}>
      <h2>From Our Collection</h2>
      <div className={classes.filterBtn}>
        <button value="women's clothing" onClick={filterSelectionHandler}>
          Trending
        </button>
        <button value="men's clothing" onClick={filterSelectionHandler}>
          Best Seller
        </button>
        <button value="jewelery" onClick={filterSelectionHandler}>
          New
        </button>
        <button
          value="electronics"
          // className={classes.active}
          onClick={filterSelectionHandler}
        >
          On Sale
        </button>
      </div>

      <div className={classes.card}>
        {isLoading && <div>Loading</div>}
        {error && <div>{error}</div>}
        {!isFilterOn &&
          allProducts.slice(0, 8).map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                category={product.category}
                img={product.image}
                name={product.title}
                price={product.price}
              />
            );
          })}
        {isFilterOn &&
          filterProducts.slice(0, 4).map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                category={product.category}
                img={product.image}
                name={product.title}
                price={product.price}
              />
            );
          })}
      </div>

      <Button to="/showMeMore">Show Me More</Button>
    </div>
  );
};

export default OurCollection;
