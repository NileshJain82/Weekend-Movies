import React, { useEffect, useState } from "react";
import { Audio, ThreeDots } from "react-loader-spinner";
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
    {loading ? <div className="w-full flex justify-center items-center h-96"><ThreeDots height={40} color="white" /></div> : 
      data.map((e, i) => {
        return (
          <Link to={`/detail/${e.id}`}><div key={i} className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500">
            <img className="poster" src={e.image} />
            <div className="cards-layout">
            <h1 className="span-text" >
              {e.title}
            </h1>
            <h1 className="flex items-center">
              <span className="span-rating">Rating:</span>
              <ReactStars className="stars"
                size={20}
                half={true}
                value={e.rating/e.rated}
                edit={false}
              />
            </h1>
            <h1>
              <span className="span-text">Year:</span> {e.year}
            </h1>
            </div>
          </div></Link>
        );
      })
    }
    </div>
  );
};

export default Cards;
