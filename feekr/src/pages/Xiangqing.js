import React, { Component } from 'react';
import '../utils/base.css';
import '../utils/icon.css';
import '../assets/Xiangqing.css'
import Nav from '../components/Nav';
import Like from '../api/Like';
import Carousel from 'antd/es/carousel';
class Xiangqing extends Component {
    constructor(props) {
        super(props);
        // console.log(props);
        let str = this.props.location.pathname.split('/')[2];
        // console.log(str)
        this.state = {
            push: str,
            num: [],
            img: []
        }
    }
    async componentDidMount() {
        let res = await Like.get({
            productId: this.state.push,
            pvFrom: 'wap_index_new',
            shopid: 'FK'
        })
        // console.log(res);
        let num = res.data.result;
        let img = num.productThumb;
        // console.log(img);
        this.setState({
            num,
            img
        })
    }
    render() {
        let { img, num } = this.state
        return <>
            <section className="nav-container">
                <Carousel autoplay>
                    {
                        img.map(item => {
                            return <div className="banner" key={item}>
                                <img src={item} alt="###" />
                            </div>
                        })
                    }
                </Carousel>
                <div className="product-detail-head">
                    <div className="main">
                        <p className="product-detail-price">
                            <b>¥{num.productPrice}</b>
                            <span> 起/{num.productUnitCount}{num.productUnit}</span>
                        </p>
                        <h5 className="product-detail-art">{num.productName}</h5>
                    </div>
                    <div className="share-btn iconfont icon-fenxiang">分享</div>
                </div>
            </section>
            <Nav />
        </>
    }
}
export default Xiangqing;