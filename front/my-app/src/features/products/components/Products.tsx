import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';

import { selectProducts, getproductsAsync } from '../slices/productsSlice';
import { Product } from '../../../models/products';
import "../../../../src/cards.css"
import { Link, useParams } from 'react-router-dom';
const Products = () => {
  const { name } = useParams<{ name: string }>();
  console.log(name)
  const products = useAppSelector(selectProducts);
  const dispatch = useAppDispatch();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(name);
  const [selectedSubcat, setSelectedSubcat] = useState<string | null>(null);

  const filteredProducts = selectedSubcat
    ? products.filter((product) => product.category === selectedCategory && product.subcategory === selectedSubcat)
    : products.filter((product) => product.category === selectedCategory);

  const subcategories = [...new Set(filteredProducts.map((product) => product.subcategory))];


  const filteredSubcats = selectedCategory
    ? [...new Set(products.filter((product) => product.category === selectedCategory).map((product) => product.subcategory))]
    : [...new Set(products.map((product) => product.subcategory))];

  const handleSubcatClick = (category: string, subcat: string) => {
    setSelectedCategory(category);
    setSelectedSubcat(subcat);
  };
  useEffect(() => {
    console.log('Fetching products with name:', name);
    dispatch(getproductsAsync());
  }, [selectedCategory]);

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div>

        {filteredSubcats.map((subcat) => (
          <span key={subcat}>
            {' '}
            <Link
              to="#"
              onClick={() => handleSubcatClick(selectedCategory ? selectedCategory : "", subcat)}
              style={{
                backgroundImage: `url(http://127.0.0.1:8000${filteredProducts.find((product) => product.subcategory === subcat)?.subimage
                  })`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                display: "inline-block",
                width: "100px",
                height: "100px",
                margin: "10px",
              }}
            >
              {subcat}
            </Link>
            |
          </span>
        ))}
        <span>
          <Link to="#" onClick={() => setSelectedSubcat(null)}>
            All
          </Link>
        </span>
      </div>
      <div>
        {filteredProducts.map((product) => (

          <div className="card" key={product.id}>


            <h2>{product.name}</h2>
     
           
            {/* <p>{product.desc}</p> */}
            <p className='price'>Price: {product.price}</p>
            {/* <p>Quantity: {product.quantity}</p>
            <p>Count in Stock: {product.count_in_stock}</p>
            <p>Category: {product.category}</p>
            <p>Subcategory: {product.subcategory}</p> */}
            <Link to={`/product/${product.id}`}>
              <img src={`http://127.0.0.1:8000${product.proimage}`}
                width={200}
                height={200}
                alt={product.name} />
            </Link>
            <button>Buy</button>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
