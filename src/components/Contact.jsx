import React from "react";

function Contact(props) {
  // programmatic redirection
  setTimeout(() => {
    props.history.push("/about");
  }, 3000);

  return (
    <div className="container">
      <h4 className="center">Contact</h4>
      <div className="card">
        <div className="card-content">
          <p className="center">
            This component will redirect you to the About Component in 3
            seconds.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
