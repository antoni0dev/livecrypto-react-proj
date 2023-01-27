import React, { useState, useEffect } from 'react'
import CoinItem from './CoinItem'
import axios from 'axios'

const CoinSearch = () => {

   const [coins, setCoins] = useState([])

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true'

    useEffect(() => {
      axios.get(url).then(response => {
        setCoins(response.data)
      })
    }, [url])

  const [searchText, setSearchText] = useState('')

  return (
    <div className='rounded-div my-4'>
      <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2'>Search Crypto</h1>
        <form>
          <input 
            onChange={e => setSearchText(e.target.value)} 
            className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl' 
            type="text" 
            placeholder='Search a coin'/>
        </form>
      </div>

      <table className='w-full border-collapse text-center'>
        <thead>
          <tr className='border-b'>
            <th></th>
            <th className='px-4'>#</th>
            <th className='text-left'>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h</th>
            <th className='hidden md:table-cell'>24h Volume</th>
            <th className='hidden sm:table-cell'>Market Cap</th>
            <th className='hidden md:table-cell'>Last 7 days</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            coins
              .filter(coin => {
                if (searchText === '') {
                  return coin
                } else if (
                    coin.name.toLowerCase().includes(searchText.toLowerCase()) || coin.symbol.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return coin 
                } 
                return null
              }).map((coin) => (
                <CoinItem key={coin.id} coin={coin}/>
              ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default CoinSearch