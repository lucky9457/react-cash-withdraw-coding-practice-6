// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {bal: 2000}

  onFifty = value => {
    this.setState(prevState => ({bal: prevState.bal - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {bal} = this.state
    return (
      <div className="main">
        <div className="card">
          <div className="name-container">
            <p className="dp">S</p>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance_class">Your Balance</p>
            <div>
              <p className="balance-amount">{bal}</p>
              <p className="InrupeesText">In Rupees</p>
            </div>
          </div>
          <p className="widthdraw-heading">Withdraw</p>
          <p className="choose-amount-text">CHOOSE SUM (IN RUPEES)</p>
          <div>
            <ul className="ull">
              {denominationsList.map(each => (
                <DenominationItem
                  fun={this.onFifty}
                  denominationitem={each}
                  key={each.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
