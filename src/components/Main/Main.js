import React, { Component } from 'react';
import { Route,Switch ,Redirect} from 'react-router-dom';
import Home from '../Home/Home';
import Activity from '../Activity/Activity';
import State from '../State/State';
import Post from '../Post/Post'
import Errors from '../Error/Error'
class Main extends Component {
    render() {
        return (
            <>
            {/* Home 下的路由不能写 exact 因为写了点里面的内容以后就会 跳转了.此种情况用 switch*/}
            {/* 写在 switch 下的路由 Route 只能匹配一个 */}
            <Switch>
                <Route component={Activity} path="/activity"/>
                <Route component={State} path="/state"/>
                {/* 所有的文章都跳到一个路由下,所以是动态路由 */}
                <Route component={Post} path="/post/:postId"/>
                <Route component={Errors} path="/404"/> 
                {/* render 属性值是一个函数,该函数的返回值必须是一个组件作为路由组件,相当于 component.该函数默认接受一个参数,这个参数就是路由传递的 props. */}
                <Route path="/*" render= {props =>{
                    const {pathname} = props.location
                    if(pathname === '/' || pathname.indexOf('home/') !== -1){
                        return <Home />
                    }else{
                        return <Redirect from="/*" to="/404"/>
                    }
                }
                
                }/> 
                
            </Switch>  
            </>
        );
    }
}

export default Main;