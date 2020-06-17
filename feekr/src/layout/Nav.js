import React, { Component } from 'react';
import '../assets/Nav.css'
class Nav extends Component {
    render() {

        // console.log('nav', this.props.path.indexOf('/guide/'))
        return <>
            <div className="nav">
                <nav className="nav-wrap table-mode">
                    <div className="table-cell">
                        <span className="iconfont icon-shouyepressed"></span>
                        <span className="nav-name">首页</span>
                    </div>
                    <div className="table-cell">
                        <span className="iconfont icon-0040dujia"></span>
                        <span className="nav-name">度假</span>
                    </div>
                    <div className="table-cell">
                        <span className="iconfont icon-gongluenormal"></span>
                        <span className="nav-name">攻略</span>
                    </div>
                    <div className="table-cell">
                        <span className="iconfont icon-wodenormal"></span>
                        <span className="nav-name">我的</span>
                    </div>

                </nav>
            </div>
        </>
    }
}

export default Nav;