import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const Button = ({ children, onClick, color, size, disabled, w }) => {
  const [isActive, setIsActive] = useState(false);

  const buttonClasses = cn(
    'py-2 px-4 font-semibold rounded-full',
    {
      'bg-blue-500 text-white': color === 'primary',
      'bg-gray-500 text-white': color === 'secondary',
      'text-sm': size === 'small',
      'text-lg': size === 'large',
      'opacity-50 cursor-not-allowed': disabled || isActive,
    }
  );

  const handleClick = () => {
    setIsActive(true);
    onClick();
  };

  return (
    <button
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || isActive}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: 'primary',
  size: 'medium',
  disabled: false,
};

export default Button;
