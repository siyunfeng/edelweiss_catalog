import data from '../data.json';
import { Link } from 'react-router-dom';
import defaultCoverImage from '../images/imageNotAvailable.png';

const Home = () => {
  const { catalogID, name, imageUri, orgName } = data;
  return (
    <div className='catalogs-container'>
      <Link to={`/catalogs/${catalogID}`}>
        <div className='each-catalog-container'>
          <img
            src={imageUri}
            alt='catalog cover'
            onError={(event) => {
              event.target.onerror = null;
              event.target.src = defaultCoverImage;
            }}
          />
          <div className='catalog-info'>
            <div className='title'>{name}</div>
            <div>{orgName}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
