import React, { useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const CoinItem = ({ coin }) => {
  const {
    market_cap_rank,
    image,
    id,
    name,
    symbol,
    current_price,
    price_change_percentage_24h,
    total_volume,
    market_cap,
    sparkline_in_7d,
  } = coin;
  const [savedCoin, setSavedCoin] = useState();
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`);
  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });
    } else {
      alert("Please sign in to save a coin to your watch list");
    }
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td onClick={saveCoin}>
        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td>{market_cap_rank}</td>
      <td>
        <Link to={`/coin/${id}`}>
          <div className="flex items-center ">
            <img className="w-6 mr-2 rounded-full" src={image} alt={coin.id} />
            <p className="hidden sm:table-cell">{name}</p>
          </div>
        </Link>
      </td>
      <td>{symbol.toUpperCase()}</td>
      <td>${current_price.toLocaleString()}</td>
      <td>
        {price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : price_change_percentage_24h === 0 ? (
          <p className="text-gray-600">
            {price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        ${market_cap.toLocaleString()}
      </td>
      <td className="hidden md:table-cell">
        <Sparklines data={sparkline_in_7d.price}>
          <SparklinesLine color="blue" />
        </Sparklines>
      </td>
    </tr>
  );
};

export default CoinItem;
