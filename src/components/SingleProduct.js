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
    <main>
      <div>
        <img src={coverImage || defaultCoverImage} alt='product cover' />
        {sku}
        {fullName}
        {author}
        {series}
        {supplier}
        {formattedPrices}
        {pages}
        {category}
        {categoryCode}
        {format}
        {formatCode}
        {measurements}
        {language}
        {industryCategory}
      </div>
    </main>
  );
};

export default SingleProduct;
