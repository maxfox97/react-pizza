import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Button({clickPoKnopke, className, outline, children }) {
   
  return (
    <Link to="cart"> 
        <button
        onClick={clickPoKnopke}
        className={classNames('button', className, {
            'button--outline': outline,
        })}>
        {children}
        </button>
    </Link>
  )
}

export default Button