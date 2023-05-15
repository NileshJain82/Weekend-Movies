import React, { useContext } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Appstate } from '../App';

const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className='z-10 header top-0 text-3xl flex justify-between items-center text-red-500 font-bold p-3 border-b-2 border-gray-500'>
      <Link to='/'>
        <span className='text'>Weekend<span className='text2'>Movies</span></span>
      </Link>
      {useAppstate.login ? (
        <Link to='/addmovie'></Link>
      ) : (
        <>
          <Link to='/addmovie'>
            <h1>
              <Button
                className='header-button'
                sx={{
                  backgroundColor: '#137409;',
                  border: '0 solid #E5E7EB',
                  borderRadius: '6px',
                  boxShadow: 'none',
                  boxSizing: 'border-box',
                  color: '#000000',
                  cursor: 'pointer',
                  display: 'flex',
                  fontFamily: 'ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                  fontSize: '1rem',
                  fontWeight: 700,
                  justifyContent: 'center',
                  lineHeight: '1.75rem',
                  padding: '.75rem 1.65rem',
                  position: 'relative',
                  textAlign: 'center',
                  textDecoration: 'none #000000 solid',
                  textDecorationThickness: 'auto',
                  width: '100%',
                  maxWidth: '460px',
                  cursor: 'pointer',
                  transform: 'rotate(-2deg)',
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  touchAction: 'manipulation',
                }}
              >
                <span className='text-white font-medium capitalize'>Add New</span>
              </Button>
            </h1>
          </Link>
          <Link to='/login'>
            <h1>
              <button className='header-button' role='button'>
                <span className='text-white font-medium capitalize'>Login</span>
              </button>
            </h1>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
