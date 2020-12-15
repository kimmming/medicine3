import React from 'react';
import './Header.css';
import logo_y from './white_bold.png';
import {Link} from 'react-router-dom';

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
                <MenuItem>
                <Link to='/'>홈</Link>
                </MenuItem>
                <MenuItem>
                <Link to='/about'>폐의약품 처리 방법</Link>
                </MenuItem>
                <MenuItem>
                <Link to='/manage'>관리 모드</Link>
                </MenuItem>
            </div>
            <div>
                <br/><br/>
            </div>
        </div>
    );
};

export default Header;