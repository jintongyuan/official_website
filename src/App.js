import React, { Component } from "react";
import "./App.scss";
import Nav from "./component/nav";
import LatestPosition from "./component/latestPosition";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: [
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        },
        {
          content: "蚂蚁金服-国际技术合规专家",
          time: "30分钟前",
          place: "北京,杭州"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="wrap-main">
          <div className="mask" />
          <div className="wrap-search">
            <div className="text-introduction">
              <p>If not now, when?</p>
              <p>If not me, who?</p>
              <p className="chinese">此时此刻，非我莫属！</p>
            </div>
            <div className="search-input-wrap">
              <div className="input-mask" />
              <div className="input-wrap">
                <input type="text" placeholder="请输入职位关键词" />
                <div className="button">搜索</div>
              </div>
            </div>
            <div className="serch-content">
              <ul>
                <li>热门搜索：</li>
                <li>JAVA</li>
                <li>IOS</li>
                <li>数据</li>
                <li>安全</li>
                <li>搜索</li>
                <li>算法</li>
                <li>运营</li>
                <li>视觉</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="newPosition-content">
          <LatestPosition position={this.state.position} />
          <div className="newPosition-content-r">
            <div className="cloud">
              <img
                src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png"
                alt=""
              />
            </div>
            <div className="intelligence">
              <img
                src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer-content">
          <span>阿里巴巴集团 Copyright ©1999-2019 版权所有</span>
        </div>
      </div>
    );
  }
}

export default App;
