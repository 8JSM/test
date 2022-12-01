import PropTypes from "prop-types";
import styles from "./btn.module.css";

function Button({text}) {
    return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
    text: PropTypes.string
}

export default Button;