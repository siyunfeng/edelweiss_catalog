import data from '../data.json';
import { Link, useParams } from 'react-router-dom';
import defaultCoverImage from '../images/imageNotAvailable.png';

const SingleProduct = () => {
  const { productId } = useParams();
  const { products, catalogID } = data;
  const product = products.find((product) => product.sku === productId);

  let {
    sku,
    fullName,
    author,
    series,
    supplier,
    formattedPrices,
    pages,
    category,
    categoryCode,
    format,
    formatCode,
    measurements,
    language,
    industryCategory,
    pubDate,
    onSaleDate,
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

  const dateFormatting = (date) => {
    if (date) {
      let YYYY = date.slice(0, 4);
      let MM = date.slice(5, 7);
      let DD = date.slice(8, 10);
      return `${MM}/${DD}/${YYYY}`;
    }
  };

  pubDate = dateFormatting(pubDate);
  onSaleDate = dateFormatting(onSaleDate);

  return (
    <main className='single-product-container'>
      <Link to={`/catalogs/${catalogID}`}>
        <button>Back to Catalog List</button>
      </Link>
      <div className='product-detail-container'>
        <div className='detail-cover-container'>
          <img
            src={coverImage || defaultCoverImage}
            className='detail-cover-image'
            alt='product cover'
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = defaultCoverImage;
            }}
          />
        </div>
        <div className='product-detail-basic'>
          {fullName ? <div className='book-name title'>{fullName}</div> : ''}
          {sku ? <div>SKU: {sku}</div> : ''}
          {author ? <div>Author: {author}</div> : ''}
          {formattedPrices ? <div>Prices: {formattedPrices}</div> : ''}
          {language ? <div>Language: {language}</div> : ''}
          {series ? <div>Series: {series}</div> : ''}
          {category ? <div>Category: {category}</div> : ''}
          {categoryCode ? <div>Category Code: {categoryCode}</div> : ''}
          {pages ? <div>Pages: {pages}</div> : ''}
          {supplier ? <div>Supplier: {supplier}</div> : ''}
          {pubDate ? <div>Publish Date: {pubDate}</div> : ''}
          {onSaleDate ? <div>On Sale Date: {onSaleDate}</div> : ''}
          {format ? <div>Format: {format}</div> : ''}
          {formatCode ? <div>Format Code:{formatCode}</div> : ''}
          {measurements ? <div>Measurements:{measurements}</div> : ''}
          {industryCategory ? (
            <div>Industry Category: {industryCategory}</div>
          ) : (
            ''
          )}
        </div>
      </div>
    </main>
  );
};

export default SingleProduct;
