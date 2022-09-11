import React from "react";

const HomeImage = ({dataRuas}) => {
  return <div className="w-full grid grid-cols-4 gap-4">
    {dataRuas.map((e, i) => {
      return (
        <div>
          <img className={`${i < 4 ? "" : "hidden"} rounded-lg`} src={e.picture} />
        </div>
      )
    })}
  </div>;
};

export default HomeImage;
