// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, changeActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  // console.log(displayText)
  const onChangeActiveTabId = () => {
    changeActiveTabId(tabId)
  }

  const selectedTabStyles = isActive ? 'active-tab' : ''
  return (
    <li className="single-tab-item">
      <button
        className={`single-tab-item ${selectedTabStyles}`}
        onClick={onChangeActiveTabId}
        type="button"
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
