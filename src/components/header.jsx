import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {Appstate} from '../App'

const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className='sticky z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
      <Link to={'/'}><span className='text'>Weekend<span className='text2'>Movies</span></span></Link>
      {useAppstate.login ?
        <Link to={'/addmovie'}><h1 className='text-lg cursor-pointer flex items-center'>
          <Button className="header-button">Add New</Button>
      </h1></Link>
      :
      <Link to={'/login'}><h1>
          <Button className = "header-button"><span className='text-white font-medium capitalize'>Login</span></Button>
      </h1></Link>
      }
    </div>
  )
}

export default Header