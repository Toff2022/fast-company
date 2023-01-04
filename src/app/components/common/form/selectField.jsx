import React from "react";
import PropTypes from "prop-types";

// options - объект с профессиями
const SelectField = ({ label, value, name, onChange, defaultOption, options, error }) => {
    const handleChange = ({ target }) => {
        // console.log("target", target)
        onChange({ name: target.name, value: target.value });
    };
    const getInputClass = () => {
        return "form-select" + (error ? " is-invalid" : "");
    };
    // console.log("options", options)
    // const optionsArray =
    //     !Array.isArray(options) && typeof (options) === "object"
    //         ? Object.keys(options).map((optionName) => ({
    //             name: options[optionName].name,
    //             value: options[optionName]._id,
    //             key: options[optionName]._id
    //         }))
    //         : options;
    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.values(options)
            : options;
    // console.log("optionsArray", optionsArray)
    return (
        <div className="mb-4">
            <label htmlFor={name} className="form-label">
                {label}
            </label>
            <select
                className={getInputClass()}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray.length > 0 &&
                    optionsArray.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                {/* {optionsArray && optionsArray.map((option) => <option
                    value={option.value}
                    key={option.name}
                >
                    {option.name}
                </option>
                )
                } */}

            </select>
            {error && <div className="invalid-feedback">
                {error}
            </div>}
        </div>
    );
};
SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    value: PropTypes.string,
    onChange: PropTypes.func
};
export default SelectField;
