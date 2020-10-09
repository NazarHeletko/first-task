import React from "react";

import Loader from "../CustomComponents/Loader";

class Loaders extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Loader showLoader={true}/>
        </div>
      </>
    );
  }
}

export default Loaders;
