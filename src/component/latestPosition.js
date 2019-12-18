import React, { Component } from "react";

class LatestPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      timer: "",
    };
    this.heightRef = ref => {
      this.refDom = ref;
    };
  }
  componentDidMount() {
    this.rollFun();
  }
  rollFun() {
    const { clientHeight } = this.refDom;

    let timer = setInterval(() => {
      if (Math.abs(this.state.top) + 250 > Number(clientHeight)) {
        this.setState({ top: 0 });
      } else {
        this.setState({ top: this.state.top + 2 });
      }
    }, 100);
    this.setState({
      timer: timer
    });
  }
  handleMouseEnter() {
    clearInterval(this.state.timer);
  }
  handleMouseLeave() {
    this.rollFun();
  }
  render() {
    return (
      <div className="latest-position">
        <div className="more-positions">
          <span>最新职位</span>
          <span>更多</span>
        </div>
        <div
          className="positions-content"
          ref={this.heightRef}
          style={{ top: -this.state.top }}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
        >
          <ul>
            {this.props.position.map((v, i) => {
              return (
                <li key={i}>
                  <a href="www.albb.com">{v.content}</a>
                  <em className="time">{v.time}</em>
                  <em className="city" title="北京,杭州">
                    {v.place}
                  </em>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default LatestPosition;
