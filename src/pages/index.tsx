import { NextPage } from 'next';
import { Landing } from '../components/Landing';

const Home: NextPage = () => {
  return (
    <>
      <Landing/>
      <div className='h-96'></div>
    </>
  );
};

export default Home;
