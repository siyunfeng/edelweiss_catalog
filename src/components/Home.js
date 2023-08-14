import data from '../data.json';

const Home = () => {
  const { name, imageUri, orgName } = data;
  return (
    <div className='catalogs-container'>
      <div className='each-catalog-container'>
        <img src={imageUri} alt='catalog cover' />
        <div className='catalog-info'>
          <div>{name}</div>
          <div>{orgName}</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
