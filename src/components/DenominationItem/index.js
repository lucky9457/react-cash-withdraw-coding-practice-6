// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationitem, fun} = props
  const {id, value} = denominationitem

  const minus = () => {
    fun(value)
  }
  return (
    <li className="denomination-card">
      <button type="button" onClick={minus} className="val">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
