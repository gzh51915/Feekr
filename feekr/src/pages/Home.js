import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../utils/base.css';
import '../utils/icon.css';
import '../assets/Home.css';
import Search from '../components/search';
import Nav from '../components/Nav';
import Carousel from 'antd/es/carousel';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: [],
            num2: [],
            num3: [],
            num4: [],
            menu: [
                {
                    name: 'gonlue',
                    path: '/gonlue',
                    text: '攻略',
                    icon: 'icon-gonglve',
                    color: '#FCBC00'
                }, {
                    name: 'dujia',
                    path: '/dujia',
                    text: '度假',
                    icon: 'icon-dujia',
                    color: '#51A5DC'
                }, {
                    name: 'huwai',
                    path: '/huwai',
                    text: '玩乐',
                    icon: 'icon-huwai',
                    color: '#F15A62'
                }, {
                    name: 'meiwu',
                    path: '/meiwu',
                    text: '美物',
                    icon: 'icon-meiwu',
                    color: '#A5CE00'
                }, {
                    name: 'yanjiusuo',
                    path: '/yanjiusuo',
                    text: '研究所',
                    icon: 'icon-yanjiusuo',
                    color: '#00AC59'
                }
            ],
            names: ''
        }
    }

    async componentDidMount() {
        const res = await fetch('https://wapi.feekr.com/strategy/slideThumb?code=strategy');
        const banner = await res.json();
        // console.log(banner);
        const num = banner.result.slideItem;

        const res2 = await fetch('https://wapi.feekr.com/product/module?moduleId=1');
        const tehui = await res2.json();
        // console.log(tehui);
        const num2 = tehui.result.product[0].list;
        // console.log(num2);

        const res3 = await fetch('https://wapi.feekr.com/guide/cityrecommend');
        const mudidi = await res3.json();
        // console.log(mudidi);
        const num3 = mudidi.result.list;
        // console.log(num3);
        num3.splice(4, 1)
        // console.log(num3);


        const res4 = await fetch('https://wapi.feekr.com/editor/selected')
        const wanlei = await res4.json();
        // console.log(wanlei);
        const num4 = wanlei.result.list;
        // console.log(num4);
        this.setState({
            num,
            num2,
            num3,
            num4
        })
    }

    changelist = (path) => {
        // console.log(path)
        let names = path;
        this.setState({
            names,
        })
        // console.log(names)
    }
    render() {
        let { num, menu, num2, num3, num4 } = this.state;
        return <div className="box1">
            <Carousel autoplay>
                {
                    num.map(item => {
                        return <div className="banner" key={item.thumb}>
                            <img src={item.thumb} alt="###" />
                        </div>
                    })
                }
            </Carousel>
            <Search />
            <section className="nav-container">
                <div className="flex-wrap">
                    {
                        menu.map(item => {
                            return <NavLink to={this.state.names === '/dujia' ? '/dujia' : '/gonlue'} key={item.path} className="flex-item txt-center" href="###" onClick={this.changelist.bind(this, item.path)}>
                                <p className={`iconfont ${item.icon}`} style={{ color: `"${item.color}"` }}></p>
                                <p className="font-sm">{item.text}</p>
                            </NavLink>
                        })
                    }
                </div>
            </section>
            <div className="main">
                <section className="list-container news-container">
                    <section className="title">
                        <span className="header-line"></span>
                        <span className="font-llg header-title">当季特惠</span>
                        <span className="sub-title">本季度最优惠的出游商品</span>
                    </section>
                    <section className="sub-title-wraps"> <div className="font-md">国内度假</div> <div className="flex-item line"></div>  <a href="###" className="font-md more-btn">更多</a>  </section>
                    <div className="list">
                        {
                            num2.map(item => {
                                return <a className="flex-wrap" key={item.productId} href="###">
                                    <img src={item.productCover} alt="###" className="news-cover lazy" style={{ display: "block" }} />
                                    <p className="product-title">{item.productName}</p>
                                    <p className="area">{item.productArea} - {item.productCity}</p>
                                    <p className="price"><span className="font-md">￥{item.productPrice}起</span></p>
                                </a>
                            })
                        }
                    </div>
                </section>
                <section className="list-container city-container">
                    <section className="title">
                        <span className="header-line"></span>
                        <span className="font-llg header-title">目的地推荐</span>
                        <span className="sub-title">开启城市深度游攻略</span>
                    </section>
                    <div className="list-clearfix">
                        {
                            num3.map(item => {
                                return <a className="pull-left city-item" href="###" key={item.cityName}>
                                    <div className="thumb-wrap">
                                        <img className="city-cover lazy" src={`https://images.weserv.nl/?url=${item.cover}`} alt="###" />
                                        <div className="layer font-lg regular-font">{item.cityName}</div>
                                    </div>
                                    <p className="txt-center font-sm">{item.fxb}位当地飞小编推荐</p>
                                </a>
                            })
                        }
                    </div>
                    <a className="get-more font-md txt-center" href="###">更多目的地推荐</a>
                </section>
                <section className="selected-container">
                    <section className="title"> <span className="header-line"></span> <span className="font-llg header-title">编辑精选</span> <span className="sub-title">推荐最具小众特色的旅行体验</span> </section>
                    {
                        num4.map(item => {
                            return <div className="list" key={item.column}>
                                <section className="flex-wrap sub-title-wrap"> <div className="font-md">{item.column}</div> <div className="flex-item line"></div>  <a href="###" className="font-md more-btn">更多</a>  </section>
                                <a className="selected-item" key={item.article[0].id} href="###">
                                    <p className="font-lg selected-title">{item.article[0].title}
                                    </p>
                                    <div className="flex-wrap">
                                        <img className="selected-cover lazy" src={item.article[0].cover} alt="###" />
                                        <div className="flex-item selected">
                                            <p className="font-sm">{item.article[0].desc} </p>
                                            <p className="product-tag">
                                                {
                                                    item.article[0].tag.map(item => {
                                                        return <span key={item[0]}>{item} </span>
                                                    })
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </a>
                                <a className="selected-item" key={item.article[1].id} href="###">
                                    <p className="font-lg selected-title">{item.article[1].title}
                                    </p>
                                    <div className="flex-wrap">
                                        <img className="selected-cover lazy" src={item.article[1].cover} alt="###" />
                                        <div className="flex-item selected">
                                            <p className="font-sm">{item.article[1].desc} </p>
                                            <p className="product-tag">
                                                {
                                                    item.article[1].tag.map(item => {
                                                        return <span key={item[0]}>{item} </span>
                                                    })
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        })
                    }
                    <a className="get-more bota font-md txt-center" href="###">更多栏目推荐</a>
                </section>
            </div>
            <Nav />
        </div>
    }
}
// Home = withRouter(Home)
export default Home;