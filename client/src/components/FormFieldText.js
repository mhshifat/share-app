import React from "react";

const FormFieldText = ({ label, name, placeholder, onInputChange }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <textarea
        type="email"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  );
};

export default FormFieldText;
