import React, { useContext } from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import {Appstate} from '../App'

const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className='heading-container'>
      <Link to={'/'}><h1 className='text'>Filmy<h1 className='text2'>Verse</h1></h1></Link>
      {useAppstate.login ?
        <Link className='home-link' to={'/addmovie'}><h1>
          <Button className="header-button"><AddIcon /> <span className='text2'>Add New</span></Button>
      </h1></Link>
      :
      <Link className='home-link' to={'/login'}><h1 className=''>
          <Button><span className='text-white font-medium capitalize'>Login</span></Button>
      </h1></Link>
      }
    </div>
  )
}

export default Header