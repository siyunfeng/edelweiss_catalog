import data from '../data.json';
import { Link, useParams } from 'react-router-dom';
import defaultCoverImage from '../images/imageNotAvailable.png';
import { dateFormatting } from '../helperFuns';

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
    images,
  } = product;

  let coverImage = defaultCoverImage;
  if (images && images.length) {
    let jacketCover = images.filter((cover) =>
      cover.uri.includes('jacket_covers')
    );
    if (jacketCover[0]) {
      coverImage = jacketCover[0].uri;
    }
  }

  images = images.filter((image) => !image.uri.includes('jacket_covers'));

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
          {fullName ? (
            <div className='book-name title'>{fullName}</div>
          ) : (
            <div className='unavailable-data'>
              Book name is missing at this moment
            </div>
          )}
          {author ? <div>by {author}</div> : ''}
          {category ? <div>{category}</div> : ''}
          {pubDate ? <div>{pubDate}</div> : ''}
          {formattedPrices ? <div>{formattedPrices}</div> : ''}
          {pages ? (
            <div>
              {pages} {pages !== '0' ? 'pages' : 'page'}{' '}
            </div>
          ) : (
            ''
          )}
          {measurements ? <div>{measurements}</div> : ''}
          {sku ? <div>SKU: {sku}</div> : ''}

          {language ? <div>Language: {language}</div> : ''}
          {series ? <div>Series: {series}</div> : ''}
          {categoryCode ? <div>Category Code: {categoryCode}</div> : ''}
          {supplier ? <div>Supplier: {supplier}</div> : ''}
          {onSaleDate ? <div>On Sale: {onSaleDate}</div> : ''}
          {format ? <div>Format: {format}</div> : ''}
          {formatCode ? <div>Format Code:{formatCode}</div> : ''}
          {industryCategory ? (
            <div>Industry Category: {industryCategory}</div>
          ) : (
            ''
          )}
        </div>
        {images.length ? (
          <div className='detail-images-container'>
            {images.map((image, i) => {
              return (
                <img
                  className='each-detail-image'
                  src={image.uri}
                  alt={image.caption}
                  key={i}
                />
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
    </main>
  );
};

export default SingleProduct;
