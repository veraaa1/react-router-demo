import React, { Component } from 'react';
import './home.css'
import { NavLink,Route } from 'react-router-dom';
import Recommend from '../Recommend/Recommend'
import Frontend from '../Frontend/Frontend'
import Andriod from '../Andriod/Android'
import Layout from '../Layout/Layout';
class Home extends Component {
    render() {
        return (
            <Layout className="home">
                <div className="topics">
                    <h3>热门文章</h3>
                    <ul className="topic-list">
                        <li><NavLink to="/" exact >推荐</NavLink></li>
                        <li><NavLink to="/home/frontend">前端</NavLink></li>
                        <li><NavLink to="/home/andriod">Andriod</NavLink></li>
                        <li><NavLink to="/home/end">后端</NavLink></li>
                        <li><NavLink to="/home/AI">人工智能</NavLink></li>
                        <li><NavLink to="/home/IOS">IOS</NavLink></li>
                        <li><NavLink to="/home/source">工具资源</NavLink></li>
                        <li><NavLink to="/home/read">阅读</NavLink></li>
                        <li><NavLink to="/home/yunwei">运维</NavLink></li>
                    </ul>
                </div>
                <div className="content">
                    <Route component={Recommend} path="/" exact/>
                    <Route component={Andriod} path="/home/frontend"/>
                    <Route component={Frontend} path="/home/andriod"/>
                </div>
            </Layout>
        );
    }
}

export default Home;