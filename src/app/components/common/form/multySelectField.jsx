import React from 'react';
import Select from "react-select";
import PropTypes from "prop-types";

const MultiSelectField = ({ options, onChange, name, label }) => {

    const optionsArray =
        !Array.isArray(options) && typeof (options) === "object"
            ? Object.keys(options).map((optionName) => ({
                label: options[optionName].name,
                value: options[optionName]._id,
                key: options[optionName]._id
            }))
            : options;
    const handleChange = (value) => {
        console.log(value)
        onChange({ name: name, value })
    }
    return (
        <div className="mb-4">
            <label className="form-label">
                {label}
            </label>
            <Select
                closeMenuOnSelect={false}
                isMulti
                options={optionsArray}
                className="basic-multi-select"
                onChange={handleChange}
                name={name}
            />
        </div>
    );
}
MultiSelectField.propTypes = {
    options: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    onChange: PropTypes.func,
    name: PropTypes.string,
    label: PropTypes.string

};
export default MultiSelectField;