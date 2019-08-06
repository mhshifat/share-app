import React from "react";

const FormField = ({
  label,
  name,
  placeholder,
  onInputChange,
  error,
  value
}) => {
  return (
    <div className="form-field">
      <label htmlFor={name} className={error ? "input-error-text" : ""}>
        {label}
      </label>
      <input
        className={error ? "input-error" : ""}
        type="email"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onInputChange}
        value={error ? "Email is required!" : value}
      />
    </div>
  );
};

export default FormField;
