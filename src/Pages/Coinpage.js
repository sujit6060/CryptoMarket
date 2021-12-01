import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CryptoState } from "../CryptoContext";
import { SingleCoin } from "../config/api";
const Coinpage = () => {
  const { id } = useParams();
  const [coin, setcoin] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));

    setcoin(data);
  };
  console.log(coin);

  useEffect(() => {
    fetchCoin();
  }, []);
  return <div>coin</div>;
};

export default Coinpage;
