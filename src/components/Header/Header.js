import React, { Component } from 'react';
import { NavLink,Link} from 'react-router-dom';
import './header.css'
class Header extends Component {
    render() {
        return (
            <header>
                <Link to="/" className="logo"><img src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt=""/></Link>
                <ul className="nav">
                {/* activeClassName 属性:当 to 的路径和 当前路径匹配时 此时的 active 就加上了选中的样式 ,默认给的就是 active ,所以要都改名才可以*/}
                    <li><NavLink to="/" isActive={this.active}>首页</NavLink></li>
                    <li><NavLink to="/state">动态</NavLink></li>
                    {/* <li><NavLink to="/pumphlet">小册</NavLink></li>
                    <li><NavLink to="/opensource">开源库</NavLink></li> */}
                    <li><NavLink to="/activity">活动</NavLink></li> 
                </ul>
            </header>
        );
    }
    active=(match,location)=>{
        const re= /home/
        const {pathname} = location
        if(pathname ==='/'||re.test(pathname)){
            return true
        }else{
            return false
        }
        
    }
}
export default Header;