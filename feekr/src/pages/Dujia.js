import React, { Component } from 'react';

import Search from '../components/search';

//按需加载
import Carousel from 'antd/es/carousel'
import '../utils/base.css'
import '../utils/icon.css'
import '../assets/Dujia.css';

import Weixin from '../components/Weixin';
import Nav from '../components/Nav';
import http from '../api/dujiahttp';

class Dujia extends Component {

    state = {
        num: [],
        num2: [],
        num3: [],
        num4: [],
        num5: [],
        like1: []
    }

    async componentDidMount() {


        let res = await http.get('index', {
            shopid: 'FK',
        })
        // console.log(res);
        let num = res.result.slider;
        // console.log(num);
        let num2 = res.result.style;
        // console.log(num2)
        let num3 = res.result.newProduct;
        // console.log(num3)
        let num4 = res.result.specialsProduct;

        let num5 = res.result.theme;
        // console.log(num5);


        let res2 = await http.get('guess_like', {
            page: 1,
            shopid: 'FK',
        })
        // console.log(res2);
        let like1 = res2.result.list;
        // console.log(like1);


        this.setState({
            num,
            num2,
            num3,
            num4,
            num5,
            like1,
        })
        // // console.log(this.state);
    }

    changeMenu(cur) {
        // console.log(cur)
        this.props.history.push(cur)
    }

    render() {
        let { num, num2, num3, num4, num5, like1 } = this.state;
        return <div className="Dujia">
            <Search />
            <Carousel autoplay>
                {
                    num.map(item => {
                        return <div className="banner" key={item.cover}>
                            <img src={item.cover} alt="###" />
                        </div>
                    })
                }
            </Carousel>
            < ul className="search-nav" >
                {
                    num2.map((item, index) => {
                        return <li className="nav-detail" key={item.id} onClick={this.changeMenu.bind(this, `navsearch/${item.id}`)}>
                            <img src={item.icon} className="nav-icon" alt="###" />
                            <p className="type">{item.name}</p>
                        </li>
                    })
                }
            </ul >
            <div className="home-hot home-common-base">
                <div className="common-search-entry">
                    <div className="common-search-entry-header">
                        <span className="common-search-entry-header-name">新品&amp;独家</span>
                        <p className="common-search-entry-header-line"></p>
                        <div className="common-search-entry-header-more">更多</div>
                    </div>
                    <div className="common-search-entry-nav">
                        {
                            num3.map((item, index) => {
                                return <div className="common-goods common-search-entry-item" key={item.id} onClick={this.changeMenu.bind(this, `xiangqing/${item.id}`)}>
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`}
                                        className="common-goods-img lazyloaded" alt="###" />
                                    <h3 className="common-goods-content one-line-ellipsis">{item.productName}
                                    </h3>
                                    <p className="common-goods-price">
                                        <span className="common-goods-num">¥{item.currentPrice}&nbsp;</span>起
                                    <span className="common-goods-unit">
                                            <span className="common-goods-bold">/</span>{item.unit}
                                        </span>
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="common-search-entry">
                    <div className="common-search-entry-header">
                        <span className="common-search-entry-header-name">本周特卖</span>
                        <p className="common-search-entry-header-line"></p>
                        <div className="common-search-entry-header-more">更多</div>
                    </div>
                    <div className="common-search-entry-nav">
                        {
                            num4.map((item, index) => {
                                return <div className="common-goods common-search-entry-item" key={item.id}>
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`}
                                        className="common-goods-img lazyloaded" alt="###" />
                                    <h3 className="common-goods-content one-line-ellipsis">{item.productName}
                                    </h3>
                                    <p className="common-goods-price">
                                        <span className="common-goods-num">¥{item.currentPrice}&nbsp;</span>起
                                    <span className="common-goods-unit">
                                            <span className="common-goods-bold">/</span>{item.unit}
                                        </span>
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="theme-entry home-common-base">
                <div className="common-header">
                    <span className="commonent-header-line"></span>
                    <span className="commonent-header-type">主题推荐</span>
                    <span className="commonent-header-add">给出最新的出游主题</span>
                </div>
                <ul>
                    {
                        num5.map((item, index) => {
                            return <li className="theme-entry-item" key={item.id}>
                                <div className="theme-entry-link">
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`}
                                        className="theme-entry-img lazyloaded" alt="###" />
                                    <p className="theme-entry-content">{item.name}</p>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
            <div className="like">
                <div className="maybe-like home-common-base">
                    <div className="common-header">
                        <span className="commonent-header-line"></span>
                        <span className="commonent-header-type">猜你喜欢</span>
                        <span className="commonent-header-add">这些也许是你喜欢的</span>
                    </div>
                    <div className="maybe-like-box">
                        {
                            like1.map(item => {
                                return <div className="common-goods maybe-like-item" key={item.id}>
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`}
                                        className="common-goods-img lazyloaded" alt="###" />
                                    <h3 className="common-goods-content one-line-ellipsis">{item.productName}</h3>
                                    <p className="common-goods-price">
                                        <span className="common-goods-num">{item.currentPrice}&nbsp;</span>起
                                   <span className="common-goods-unit">
                                            <span className="common-goods-bold">/{item.unitCount}</span>{item.unit}
                                        </span>
                                    </p>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
            <Weixin></Weixin>
            <Nav path={this.props.location.pathname} />
        </div >
    }
}

export default Dujia;