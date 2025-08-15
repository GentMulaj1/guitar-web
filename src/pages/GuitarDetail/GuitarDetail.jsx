import React, { useEffect, useState } from 'react'
import './GuitarDetail.scss'
import GuitarDetailHeader from '../../component/GuitarDetail/GuitarDetailHeader/GuitarDetailHeader'
import SpecAndWhoPlay from '../../component/GuitarDetail/SpecAndWhoPlay/SpecAndWhoPlay'
import { useFindUniqueModel } from '../../hooks/useFindUniqueModel'
import { useParams } from 'react-router-dom'
import Footer from '../../component/shared/Footer/Footer'
import Loading from '../../component/shared/Loading/Loading'

const GuitarDetail = () => {
const { brandId, modelId } = useParams();

const { data, loading, error } = useFindUniqueModel(brandId, modelId);

  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading || showLoading) return <Loading />;
  if (error) return <div>Something went wrong</div>;

  return (
    <div className='GuitarDetail'>
      <GuitarDetailHeader
        guitarImg={data.findUniqueModel.image}
      />
      <SpecAndWhoPlay 
        description={data.findUniqueModel.description}
        specification={data.findUniqueModel.specs}
        whoplaysit={data.findUniqueModel.musicians}
      />

      <Footer/>

    </div>
  )
}

export default GuitarDetail