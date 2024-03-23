import PropTypes from 'prop-types'

export const Button = ({ onClick, children, className, type = 'button' }) => (
  <div className="relative inline-flex  group">
    <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
    <span className="relative inline-flex items-center justify-center px-8 border-gray-200/90 bg-gray-200/80  transition-all duration-200  font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
      <button type={type} onClick={onClick} className={className}>
        {children}
      </button>
    </span>
  </div>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
}
