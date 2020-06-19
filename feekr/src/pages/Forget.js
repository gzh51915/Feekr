import React, { Component } from 'react';
import '../assets/Reg.css'
import { NavLink } from 'react-router-dom';
import { findDOMNode } from 'react-dom'
import Axios from 'axios'
import qs from 'qs'

class Forget extends Component {

    constructor() {
        super()
        this.state = {
            tipText: '',
            title: '',
            pwd: ''
        }
        this.getForget = this.getForget.bind(this)
    }

    changetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    changepwd = (event) => {
        this.setState({
            pwd: event.target.value
        })
    }
    async getForget() {
        let user = this.state.title.trim()
        let pwd = this.state.pwd.trim()
        if (user) {
            if (pwd) {
                const reg = /^\d{11}$/;
                let res = reg.test(user)
                if (res) {
                    const regDwd = /^[a-zA-Z0-9]{6,}$/;
                    let resDwd = regDwd.test(pwd)
                    if (resDwd) {
                        let { data } = await Axios.get('http://localhost:2020/user/check', {
                            params: {
                                name: user
                            }
                        })
                        if (data.code) {
                            this.tip('该用户不存在，请先注册！')
                        } else {

                            let params = qs.stringify({
                                name: user,
                                password: pwd
                            })
                            let { data } = await Axios.post(
                                'http://localhost:2020/user/updatea', params
                            )
                            if (data.code) {
                                this.history.push('/login')
                            } else {
                                console.log('修改失败');

                            }
                        }
                    } else {
                        this.tip('请设置密码（6位数以上数字或字母）')
                    }
                } else {
                    this.tip('请填写正确的手机号码')
                }
            } else {
                this.tip('请设置密码');
            }
        } else {
            this.tip('请填写手机号码');
        }
    }
    tip(message) {
        findDOMNode(this.refs.hide).className = 'global-alert alert-show'
        findDOMNode(this.refs.hides).className = 'alert-content alert-shows'
        findDOMNode(this.refs.hides).className = 'alert-content alert-shows'
        findDOMNode(this.refs.hide).style.zIndex = '100000'
        setTimeout(() => {
            findDOMNode(this.refs.hide).className = 'global-alert'
            findDOMNode(this.refs.hides).className = 'alert-content'
        }, 1000); //1秒后消失
        this.setState({
            tipText: message
        })
    }
    render() {
        return <div className='boxs'>
            <div className="inner-wrap register-wrap">
                <header className="back-title">
                    <NavLink to="/login" className="iconfont icon-fanhui" data-history="back"></NavLink>
                    <span className="style-title">忘记密码</span>
                </header>
                <div className="reg-container body-space-large">
                    <form className="reg-form">
                        <div className="username-wrap input-wrap">
                            <span className="iconfont icon-yonghu"></span>
                            <input type="text" className="hide" />
                            <input type="text" className="account reg-input"
                                onChange={this.changetitle}
                                value={this.state.title}
                                placeholder="请输入手机号码" data-type="cellphone" />
                        </div>
                        <div className="password-wrap input-wrap">
                            <span className="iconfont icon-mima"></span>
                            <input type="password" className="hide" />
                            <input type="password" className="pwd reg-input"
                                value={this.state.pwd}
                                onChange={this.changepwd}
                                placeholder="请设置密码（6位数以上数字或字母）" data-type="password" />
                        </div>
                        <input type="button" className="reg-submit submit-btn" value='完 成'
                            onClick={this.getForget}
                        ></input>
                    </form>
                    <div className="policy info">您已同意并愿意遵守Feekr的<span className="normal policy-btn">用户协议</span>.</div>
                </div>
            </div>
            <div className="global-alert" style={{ zIndex: 10001 }}>
                <div className="alert-content">请填写手机号码</div>
            </div>
            <div ref='hide' className="global-alert" style={{ zIndex: 10001 }}>
                <div className="alert-content" ref='hides'>{this.state.tipText}</div>
            </div>
        </div>
    }
}

export default Forget;