import React from "react";

const AddImages = ({ onFileChange, error }) => {
  return (
    <div className="app-form__add-images">
      <label className={error ? "add-img-error" : ""}>
        <div className="upload-image">
          <img
            src={
              error ? "/icons/image-upload-red.png" : "/icons/image-upload.png"
            }
            alt="upload icon"
          />
        </div>
        <input type="file" onChange={onFileChange} name="files" multiple />
      </label>
      <p className={error ? "add-img-error-text" : ""}>
        Drag and drop your files here
      </p>
    </div>
  );
};

export default AddImages;
