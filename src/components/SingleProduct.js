import data from '../data.json';
import { Link, useParams } from 'react-router-dom';
import defaultCoverImage from '../images/imageNotAvailable.png';

const SingleProduct = () => {
  const { productId } = useParams();
  const { products } = data;
  const product = products.find((product) => product.sku === productId);

  let {
    sku,
    fullName,
    author,
    series,
    supplier,
    pubDate,
    onSaleDate,
    formattedPrices,
    pages,
    category,
    categoryCode,
    format,
    formatCode,
    measurements,
    language,
    industryCategory,
  } = product;

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
    <main className='single-product-container'>
      <div className='product-detail-container'>
        <div className='detail-cover-container'>
          <img
            src={coverImage || defaultCoverImage}
            className='detail-cover-image'
            alt='product cover'
          />
        </div>
        <div className='product-detail-basic'>
          {fullName ? <div className='book-name'>{fullName}</div> : ''}
          {sku ? <div>SKU: {sku}</div> : ''}
          {author ? <div>Author: {author}</div> : ''}
          {formattedPrices ? <div>Prices: {formattedPrices}</div> : ''}
          {language ? <div>Language: {language}</div> : ''}
          {series ? <div>Series: {series}</div> : ''}
          {category ? <div>Category: {category}</div> : ''}
          {categoryCode ? <div>Category Code: {categoryCode}</div> : ''}
          {pages ? <div>Pages: {pages}</div> : ''}
          {supplier ? <div>Supplier: {supplier}</div> : ''}
          {format ? <div>Format: {format}</div> : ''}
          {formatCode ? <div>Format Code:{formatCode}</div> : ''}
          {measurements ? <div>Measurements:{measurements}</div> : ''}
          {industryCategory ? <div>{industryCategory}</div> : ''}
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
