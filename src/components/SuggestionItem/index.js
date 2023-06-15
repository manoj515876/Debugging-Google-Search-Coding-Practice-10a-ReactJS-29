import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  render() {
    const {suggestionDetails, updateSearchInput} = this.props
    const {suggestion} = suggestionDetails

    const onClickSuggestion = () => {
      updateSearchInput(suggestion)
    }
    return (
      <li className="suggestion-item">
        <p className="suggestion-text">{suggestion}</p>
        <button
          type="button"
          className="arrow-button"
          onClick={onClickSuggestion}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
            alt="arrow"
            className="arrow"
          />
        </button>
      </li>
    )
  }
}

export default SuggestionItem
