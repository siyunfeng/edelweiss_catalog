import data from '../data.json';
import { Link } from 'react-router-dom';
import defaultCoverImage from '../images/imageNotAvailable.png';
import { dateFormatting } from '../helperFuns';

const AllProducts = () => {
  const { products } = data;
  return (
    <main>
      <div className='back-button-container'>
        <Link to='/'>
          <button>Back to Home Page</button>
        </Link>
      </div>
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
                    onError={(event) => {
                      event.target.onerror = null;
                      event.target.src = defaultCoverImage;
                    }}
                  />
                  <div className='catalog-info'>
                    <Link to={`/products/${product.sku}`}>
                      {product.name ? (
                        <div className='title'>{product.fullName}</div>
                      ) : (
                        <div className='unavailable-data'>
                          Book name is missing at this moment
                        </div>
                      )}
                    </Link>
                    {product.author ? (
                      <div>
                        by <strong>{product.author}</strong>
                      </div>
                    ) : (
                      ''
                    )}
                    {product.pubDate ? (
                      <div>{dateFormatting(product.pubDate)}</div>
                    ) : (
                      ''
                    )}
                    {product.formattedPrices ? (
                      <div>{product.formattedPrices}</div>
                    ) : (
                      ''
                    )}
                    {product.formattedPrices ? <div></div> : ''}
                    {product.formattedPrices ? <div></div> : ''}
                    {product.formattedPrices ? <div></div> : ''}
                    <Link to={`/products/${product.sku}`}>
                      <div className='learn-more'>Learn more</div>
                    </Link>
                  </div>
                </div>
              );
            })
          : 'Product not found'}
      </div>
    </main>
  );
};

export default AllProducts;
