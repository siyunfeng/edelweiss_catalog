import data from '../data.json';
import { Link } from 'react-router-dom';

const Home = () => {
  const { catalogID, name, imageUri, orgName } = data;
  return (
    <div className='catalogs-container'>
      <Link to={`/catalogs/${catalogID}`}>
        <div className='each-catalog-container'>
          <img src={imageUri} alt='catalog cover' />
          <div className='catalog-info'>
            <div>{name}</div>
            <div>{orgName}</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
