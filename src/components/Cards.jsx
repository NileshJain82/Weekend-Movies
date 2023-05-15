import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import {getDocs} from 'firebase/firestore'
import {moviesRef} from '../firebase/firebase'
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      _data.forEach((doc) => {
        setData((prv) => [...prv, {...(doc.data()), id: doc.id}])
      })
      setLoading(false);
    }
    getData();
  },[])

  return (
    <div className="cards">
    {loading ? <div className="w-full  flex justify-center items-center h-96"><ThreeDots height={40} color="white" /></div> : 
      data.map((e, i) => {
        return (
          <Link to={`/detail/${e.id}`}>
            <div key={i} className="card-middle">
            <img className="image" src={e.image} />
            <h1  className="text-yellow-500 flex start">
              {e.title}
            </h1>
            <h1 className="flex items-center ">
              <span className="text-gray-500 mr-1">Rating:</span>
              <ReactStars
                size={20}
                half={true}
                value={e.rating/e.rated}
                edit={false}
              />
            </h1>
            <h1>
              <span className="text-gray-500">Year:</span> {e.year}
            </h1>
          </div></Link>
        );
      })
    }
    </div>
  );
};

export default Cards;