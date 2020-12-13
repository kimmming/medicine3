import React from 'react';
import './Header.css';
import logo_y from './white_bold.png';

const MenuItem = ({active, children, to}) => (
    <div className="menu-item">
        {children}
    </div>
)

const Header = () => {
    return (
        <div>
            <div className="logo">
               <div>
               <img src={logo_y}
               width='130'
               height='75'
               />
               </div>
            </div>
            <div className="menu">
                <MenuItem>홈</MenuItem>
                <MenuItem>소개</MenuItem>
                <MenuItem>포스트</MenuItem>
            </div>
        </div>
    );
};

export default Header;