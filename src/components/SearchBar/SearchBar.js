import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import searchIcon from '../../assets/icons/search.png'

import './SearchBar.css'

const SearchBar = ({ style, onChange }) => {
  const { t } = useTranslation(['translation'])

  return (
    <div className="search-bar" style={style}>
      <div className="search-bar-wrapper">
        <div className="search-bar-icon">
          <img
            className="icon icon-search"
            src={searchIcon}
            alt={t('common.search-alt-icon')}
          />
        </div>
        <input
          className="search-bar-input"
          placeholder={t('common.search-placeholder')}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

SearchBar.propTypes = {
  style: Proptypes.object,
  onChange: Proptypes.func.isRequired,
}

export default SearchBar
