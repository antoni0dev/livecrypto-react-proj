import React from 'react'
import CoinSearch from './CoinSearch'
import Trending from '../components/Trending'

const Home = ({ coins }) => {

  return (
    <div>
      <CoinSearch />
      <Trending />
    </div>
  )
}

export default Home