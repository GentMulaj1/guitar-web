import './Guitars.scss'
import RockStar from '../../component/Guitars/RockStar/RockStar'
import Selection from '../../component/Guitars/Selection/Selection'
import Footer from '../../component/shared/Footer/Footer'
import Loading from '../../component/shared/Loading/Loading'
import { useFindAllBrands } from '../../hooks/useFindAllBrands'
import { useEffect, useState } from 'react'

const Guitars = () => {

    const { error, loading, data } = useFindAllBrands();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoading) return <Loading />;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className='Guitars'>  
        <RockStar />
        <Selection />
        <Footer/>


    </div>
  )
}

export default Guitars