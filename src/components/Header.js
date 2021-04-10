import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useStateValue} from './StateProvider'

function Header() {
const [{ basket } ] = useStateValue();

    return (
        <nav className="header">
            <Link to='/login'>
            <img className="header_logo"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftheheartfulnessway.com%2Fus%2Fwp-content%2Fuploads%2Fsites%2F3%2F2018%2F03%2Famazon-white-logo-1024x309.png&f=1&nofb=1"/>

            </Link>
        
        <div className="header_search">
            <input type="text" className="header_searchText"></input>
            <SearchIcon className="header_searchIcon"></SearchIcon>
        </div>


        <div className="header_nav">
            <Link className="header_link">
                <div className="header_option"> 
                <span className="header_optionOne">Hello</span>
                <span className="header_optionTwo">Sign In</span>
                </div>
            </Link>

            <Link className="header_link">
                <div className="header_option"> 
                <span className="header_optionOne">Returns</span>
                <span className="header_optionTwo">& orders</span>
                </div>
            </Link>

            <Link className="header_link">
                <div className="header_option"> 
                <span className="header_optionOne">Your</span>
                <span className="header_optionTwo">Prime</span>
                </div>
            </Link>


            <Link className="header_link" to='/checkout'>
                <div className="header_optionBasket">
                    <ShoppingCartIcon />
                    <span className="header_optionTwo">{basket?.length} </span>
                </div>
            </Link>

        </div>




    </nav>
    )
}

export default Header
