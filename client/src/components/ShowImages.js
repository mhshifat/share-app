import React from "react";

const ShowImages = ({ files, onFileChange, onIconClick }) => {
  return (
    <div className="app-form__show-images">
      <ul className="files">
        {Object.values(files).map((file, i) => {
          return (
            <li key={i} className="file">
              <span>
                {file.name.length > 30
                  ? file.name.substring(0, 30) + "..."
                  : file.name}
              </span>
              <i className="material-icons" onClick={onIconClick(i)}>
                clear
              </i>
            </li>
          );
        })}
      </ul>
      <label className="add-more-images">
        <input onChange={onFileChange} type="file" name="files" multiple />
        <i className="material-icons">collections</i>
        <span>Add More Files</span>
      </label>
    </div>
  );
};

export default ShowImages;
