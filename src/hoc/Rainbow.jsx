import React from "react";

function Rainbow(WrappedComponent) {
  const colors = ["green", "red", "purple", "blue"];
  const randomColor = colors[Math.floor(Math.random() * 3)];
  const className = randomColor + "-text";

  //   make sure to take in and return back any props that the original WrappedComponent would have had passed to it
  //   also in case we need to use them in our HOC
  return props => {
    return (
      <div className={className}>
        {/* passing along the props  */}
        <WrappedComponent {...props} />
      </div>
    );
  };
}

// gives the text a random color selected from our array above
export default Rainbow;
