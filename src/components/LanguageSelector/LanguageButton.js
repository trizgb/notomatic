import PropTypes from 'prop-types'

const LanguageButton = ({ id, onClick, img, ariaLabel }) => {
  return (
    <button
      id={id}
      className="language"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      <img src={img.src} alt={img.alt} />
    </button>
  )
}

LanguageButton.propTypes = {
  id: PropTypes.string,
  onClick: PropTypes.func,
  img: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string,
  }),
  ariaLabel: PropTypes.string,
}

export default LanguageButton
