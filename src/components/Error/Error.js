import React, { Component } from 'react';
import './error.css'
import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
class Error extends Component {
    render() {
        return (
            <Layout>
              <div className="where-is-pandafish">
              <img className="bg" src="https://b-gold-cdn.xitu.io/v3/static/img/bg.1f516b3.png" alt=""/>
              <img className="panda" src="https://b-gold-cdn.xitu.io/v3/static/img/panfish.9be67f5.png" alt=""/>
              <img className="sea" src="https://b-gold-cdn.xitu.io/v3/static/img/sea.892cf5d.png" alt=""/>
              <img className="lang" src="https://b-gold-cdn.xitu.io/v3/static/img/spray.bc638d2.png" alt=""/>
              </div>  
              <Link to="/" exact className="back">返回首页</Link>
            </Layout>
        );
    }
}

export default Error;