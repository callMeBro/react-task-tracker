import PropTypes from 'prop-types'
import "./Header.css";
import Button from './Button'

const Header = (props) => {
    const onClick = (e) => {
      console.log("click");
    };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
      {/* <Button color="Blue" text="Hello" />
      <Button color="Green" text="Hello" />
      <Button color="Pink" text="Hello" />
      <Button color="Brown" text="Hello" />
      <Button color="Black" text="Hello" /> */}

      {/* <h1 style={headingStyle}> Big Dawg </h1> */}
    </header>
  );
};

Header.defaultProps = { 
  title: "Task Tracker",
};

Header.propTypes = {
    // title: PropTypes.string, 
    text: PropTypes.string, 
    color: PropTypes.string,
    onClick: PropTypes.func,
}

// CSS IN JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
