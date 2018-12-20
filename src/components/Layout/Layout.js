import React, { Component } from 'react';
import './layout.css'
class Layout extends Component {
    render() {
        const {className,children}=this.props
        return (
            // 布局组件
            <div className={`layout ${className}`}>
                <div className="layout-inner">
                {/* 我们要接受一个 children ,这里的children就是 layout 下的所有元素*/}
                {children}
                </div>    
            </div>
        );
    }
}

export default Layout;
Layout.defaultProps={
    className :''
}