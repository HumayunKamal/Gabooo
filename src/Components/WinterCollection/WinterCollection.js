import { useEffect, useState } from "react";
import { useHttp } from "../../Api/FetchApi";

import Button from "../UI/Button";
import CardSquare from "../UI/CardSquare";
import classes from "./WinterCollection.module.scss";
const WinterCollection = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const { isLoading, error, sendRequest: FetchAllProducts } = useHttp();
  useEffect(() => {
    const fetchedData = (data) => {
      setAllProducts(data);
    };
    FetchAllProducts(
      { url: "https://fakestoreapi.com/products/category/jewelery?limit=4" },
      fetchedData
    );
  }, [FetchAllProducts]);


  return (
    <div className={classes.newCollection}>
      <h2>New Winter Collection</h2>
      <Button to="/allCollection" className={classes.button}>
        All Collection
      </Button>
      {isLoading && <div>Loading</div>}
      {error && <div>{error}</div>}
      <div className={classes.card}>
        {allProducts.slice(0, 4).map((product) => {
          return (
            <CardSquare
              key={product.id}
              id={product.id}
              category={product.category}
              img={product.image}
              name={product.title.slice(0, 10)}
              price={product.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WinterCollection;
