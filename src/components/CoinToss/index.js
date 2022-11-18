// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossTheCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => ({
      total: prevState.total + 1,
    }))

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {total, heads, tails, imageUrl} = this.state
    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="app-heading">Coin Toss Game</h1>
          <p className="top-para">Heads (or) Tails</p>
          <img src={imageUrl} alt="toss result" className="image-icon" />
          <button
            type="button"
            className="toss-button"
            onClick={this.tossTheCoin}
          >
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count-text">Total: {total}</p>
            <p className="count-text">Heads: {heads}</p>
            <p className="count-text">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
