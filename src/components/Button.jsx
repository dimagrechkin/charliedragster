import PropTypes from 'prop-types'

export const Button = ({ onClick, children, className, type = 'button' }) => (
  <button type={type} onClick={onClick} className={className}>
    {children}
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
}
