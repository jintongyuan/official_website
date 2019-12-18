import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navList: ["首页", "社会招聘", "了解阿里", "个人中心"]
    };
  }
  render() {
    return (
      <div>
        <div className="head">
          <div className="head-main">
            <div className="head-menu">
              <a
                href="https://job.alibaba.com/zhaopin/index.htm"
                className="logo"
              >
                <img
                  className="company-logo"
                  src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png"
                  height="20"
                  alt=""
                />
              </a>
              <i className="logo-line">|</i>
              <i className="logo-right">社招官网</i>
              <ul>
                {this.state.navList.map(v => {
                  return <li key={v}>{v}</li>;
                })}
                <div className="welcome">
                  <span>欢迎来到阿里巴巴集团招聘！</span>
                  <span>
                    登录
                    <span style={{ padding: "0 5px" }}>|</span>
                    注册
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
