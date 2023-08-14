import data from '../data.json';
import { Link } from 'react-router-dom';
import defaultCoverImage from '../images/imageNotAvailable.png';

const AllProducts = () => {
  const { products } = data;
  return (
    <div className='all-products-container'>
      {products
        ? products.map((product) => {
            let coverImage = defaultCoverImage;
            if (product.images && product.images.length) {
              let jacketCover = product.images.filter((cover) =>
                cover.uri.includes('jacket_covers')
              );
              if (jacketCover[0]) {
                coverImage = jacketCover[0].uri;
              }
            }
            return (
              <div className='each-product-container'>
                <img
                  src={coverImage || defaultCoverImage}
                  alt='product cover'
                  className='coverImage'
                />
                <div className='catalog-info'>
                  <Link to={`/products/${product.sku}`}>
                    <div>{product.fullName || 'Name not available'}</div>
                  </Link>
                  <div>Author: {product.author || 'not available'}</div>
                </div>
              </div>
            );
          })
        : 'Product not found'}
    </div>
  );
};

export default AllProducts;
