import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Recommend extends Component {
    render() {
        return (
            <div>
               <ul>
                   <li>
                       <Link to="/post/1">程序猿生存指南-32 实习招聘（下）</Link>
                   </li>
                   <li>
                       <Link to="/post/2">盘点 CSS Selectors Level 4 中新增的选择器</Link>
                   </li>
                   <li>
                       <Link to="/post/3">如何正确的提出一个 Issue ？</Link>
                   </li>
               </ul>
            </div>
        );
    }
}

export default Recommend;