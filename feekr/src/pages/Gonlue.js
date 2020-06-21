import React, { Component } from 'react';
import Search from '../components/search'
import '../assets/Gonlue.css'
import Nav from '../components/Nav';
import http from '../utils/gonluehttp';

class Gonlue extends Component {
    state = {
        num: [],
        num2: [],
        num3: [],
    }
    async componentDidMount() {
        let res = await http.get('cityrecommend', {

        })
        // console.log(res);
        let num = res.result.list;
        num.splice(4, 1);
        // console.log(num);

        let res2 = await http.get('citylist', {

        })
        // console.log(res2);
        let num2 = res2.result.list;
        num2.splice(9, 1);
        // console.log(num2);

        let res3 = await http.get('citylist', {

        })
        let num3 = res3.result.list;
        num3.splice(0, 9);
        // console.log(num3);


        this.setState({
            num,
            num2,
            num3
        })
    }
    render() {

        let { num, num2, num3 } = this.state;
        return <div id='gonglve'>
            <Search />
            <section className="season-recommend-container">
                <div className="season-recommend">
                    <header className="header-title-wrap txt-center font-lg regular-font">
                        <span>-</span>
                        <span className="section-title">当季小众推荐</span>
                        <span>-</span>
                    </header>
                    <div className="item-container clearfix body-space">
                        {
                            num.map((item) => {
                                return <div className="item pull-left"
                                    key={item.scenic}>
                                    <img src={`https://images.weserv.nl/?url=${item.cover}`} alt="###" style={{ display: "block" }} />
                                    <div className="item-title txt-center city-title font-md">{item.cityName}</div>
                                    <div className="item-desc txt-center city-desc font-sm">{item.desc}</div>
                                </div>
                            })
                        }
                    </div>
                </div>

            </section>
            <section className="area-list-container">
                {
                    num2.map((item, inx) => {
                        return <section className="area-list" key={inx}>
                            <div className="item-container body-space clearfix">
                                <header className="header-title-wrap txt-center font-lg">
                                    <span className="section-title regular-font">{item.area}</span>
                                    <div className="sub-title txt-center font-sm" > {item.desc} </div >
                                </header>
                                {
                                    item.city.map((item, inx) => {
                                        return <div className="item pull-left" key={item.id}>
                                            <img src={`https://images.weserv.nl/?url=${item.cover}`} alt="###" style={{ display: "block" }} />
                                            <div className="item-title txt-center city-title font-md">{item.name}</div>
                                        </div>
                                    })
                                }
                            </div>
                        </section>
                    })

                }
                {
                    num3.map((item, inx) => {
                        return <section className="area-list" key={inx}>
                            <div className="item-container body-space clearfix">
                                <header className="header-title-wrap txt-center font-lg">
                                    <span className="section-title regular-font">{item.area}</span>
                                    <div className="sub-title txt-center font-sm" > {item.desc} </div >
                                </header>
                                {
                                    item.city.map((item, inx) => {
                                        return <div className="item-bottom pull-left item-bottom" key={item.id}>
                                            <img src={`https://images.weserv.nl/?url=${item.cover}`} alt="###" style={{ display: "block" }} />
                                            <div className="item-title txt-center city-title font-md">{item.name}</div>
                                        </div>
                                    })
                                }
                            </div>
                        </section>
                    })

                }
            </section>
            <Nav path={this.props.location.pathname} />
        </div>
    }
}

export default Gonlue;