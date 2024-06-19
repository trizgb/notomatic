import Proptypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import searchIcon from '../../assets/icons/pencil.png'

import './SearchBar.css'

const SearchBar = ({ onChange }) => {
  const { t } = useTranslation(['translation'])

  return (
    <div className="search-bar">
      <div className="search-bar-wrapper">
        <div className="search-bar-icon">
          <img src={searchIcon} alt={t('common.search-alt-icon')} />
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
  onChange: Proptypes.func,
}

export default SearchBar
