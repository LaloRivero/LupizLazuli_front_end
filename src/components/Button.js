import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Button.css'


const Button = ({text}) => {
  return (
    <Link className='Button' to='/'>
      {text}
    </Link>
  );
}

export default Button;
