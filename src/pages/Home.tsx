import React from 'react'
import CustomCard from '../components/CustomCard';
const Home = () => {
  return (
    <div className='w-full flex h-[calc(100vh-10rem)]'>
           <div className="flex flex-col  gap-10  justify-center items-center mx-auto  ">
        <h2 className="flex capitalize">Pick your Positions</h2>
        <div className="flex gap-4">
          <CustomCard  backgroundColor="bg-[#302A18]" value={500} title="Rock" />
          <CustomCard   backgroundColor="bg-[#113E21]" value={500} title="Paper" />
          <CustomCard   backgroundColor="bg-[#9A8174]" title="Scissors" />
        </div>
      </div>

    </div>
  )
}

export default Home
