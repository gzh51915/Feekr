import React, { Component } from 'react';
import '../utils/base.css';
import '../utils/icon.css';
import '../assets/Home.css';
import Search from '../components/search';
import Nav from '../layout/Nav';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: [
                {
                    name: 'gonglve',
                    path: '/gonglve',
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
            menu3: [{
                t1: '最新旅游资讯',
                t2: '给你最新的旅行热点'
            }, {
                t1: '当季优惠',
                t2: '本季度最优惠的出游商品'
            }, {
                t1: '目的地推荐',
                t2: '开启城市深度游攻略'
            }, {
                t1: '编辑精选',
                t2: '推荐最具小众特色的旅行体验'
            }],
            img: ['./img/hangzhou.jpg', './img/taibei.jpg', './img/chongqing.jpg', './img/lasa.jpg']
        }
    }

    async componentDidMount() {
        const res = await fetch('https://wapi.feekr.com/strategy/slideThumb?code=strategy');
        const banner = await res.json();

        console.log(banner);
    }
    render() {
        return <div className="box1">
            <Search />

            <section className="nav-container">
                <div className="flex-wrap">
                </div>
            </section>
            <div className="main">
                <section className="list-container news-container">
                    <div className="list">

                    </div>
                    <p className="get-more font-md txt-center" >更多旅行资讯</p>
                </section>
                <section className="list-container product-container">
                    <section className="flex-wrap sub-title-wrap"> <div className="font-md">国内度假</div> <div className="flex-item line"></div>  <a href="###" className="font-md more-btn">更多</a>  </section>
                    <div className="list sales-in-wrap clearfix">
                    </div>
                    <section className="flex-wrap sub-title-wrap"> <div className="font-md">国外度假</div> <div className="flex-item line"></div>  <a href="###" className="font-md more-btn">更多</a>  </section>
                    <div className="list sales-in-wrap clearfix">
                    </div>
                </section>
                <section className="list-container city-container">
                    <div className="list clearfix">
                    </div>
                    <a className="get-more font-md txt-center" href="/column/news">更多目的地推荐</a>
                </section>
                <section className="list-container selected-container">
                    <a className="get-more bota font-md txt-center" href="/column/news">更多栏目推荐</a>
                </section>
            </div>
            <Nav />
        </div>
    }
}
// Home = withRouter(Home)
export default Home;