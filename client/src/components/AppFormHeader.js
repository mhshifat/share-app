import React from "react";
import AddImages from "./AddImages";
import ShowImages from "./ShowImages";

const AppFormHeader = ({
  filesTab,
  onFileChange,
  files,
  onFileChange2,
  onIconClick,
  error
}) => {
  return (
    <React.Fragment>
      {!filesTab ? (
        <AddImages onFileChange={onFileChange} error={error} />
      ) : (
        <ShowImages
          files={files}
          onFileChange={onFileChange2}
          onIconClick={onIconClick}
        />
      )}
    </React.Fragment>
  );
};

export default AppFormHeader;
