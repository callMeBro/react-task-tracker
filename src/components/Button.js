import PropTypes from 'prop-types'


const Button = ({ text, color, onClick }) => {
//   const onClick = (e) => {
//     console.log("click");
//   };

  return (
    <buttton
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </buttton>
  );
};

Button.defaultProps = {
    color: 'steelblue'
}

export default Button