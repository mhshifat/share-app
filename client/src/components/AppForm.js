import React from "react";
import AppFormHeader from "./AppFormHeader";
import FormField from "./FormField";
import FormFieldText from "./FormFieldText";

const AppForm = ({
  filesTab,
  onFileChange,
  form,
  files,
  onFileChange2,
  onIconClick,
  onInputChange,
  onFormSubmit,
  errors
}) => {
  return (
    <React.Fragment>
      <AppFormHeader
        filesTab={filesTab}
        onFileChange={onFileChange}
        onFileChange2={onFileChange2}
        files={files}
        onIconClick={onIconClick}
        error={errors.filesError}
      />
      <form onSubmit={onFormSubmit} className="form-content">
        <FormField
          label="Send To"
          name="to"
          placeholder="Email address"
          onInputChange={onInputChange}
          value={form.to}
          error={errors.toError}
        />
        <FormField
          label="From"
          name="from"
          placeholder="Your email address"
          onInputChange={onInputChange}
          value={form.from}
          error={errors.fromError}
        />
        <FormFieldText
          label="Message"
          name="messaage"
          placeholder="Note ( optional )"
          onInputChange={onInputChange}
          value={form.message}
        />
        <div className="form-field">
          <button type="submit" className="form-btn">
            Send
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default AppForm;
