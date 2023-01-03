import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false); //следим за состоянием скрыть\показать пароль
    const getInputClass = () => {
        return "form-control" + (error ? " is-invalid" : "");
    };
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value })
    };
    const toggleShowPassword = () => {
        //переключатель скрыть/показать пароль
        setShowPassword((prevState) => !prevState);
    };
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    className={getInputClass()}
                    type={showPassword ? "text" : type}
                    id={name}
                    value={value}
                    name={name}
                    onChange={handleChange}
                />
                {type === "password" && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        {showPassword ? "Hide" : "Show"}
                        {/* <i className={"bi bi-eye" +(showPassword ? "-slash" :"" )}></i> */}
                    </button>
                )}
                {error && <div className="inalid-feedback">{error}</div>}
            </div>
        </div>
    );
};
TextField.defaultProps = {
    type: "text"
};
TextField.propTypes = {
    label: PropTypes.string,
    error: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default TextField;
