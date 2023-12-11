const Notification = (props) => {
  const { className, iconUrl, iconImage, text } = props;

  const containerClassName = `notification-container ${className}`;

  return (
    <div className={containerClassName}>
      <img className="icon-image" src={iconUrl} />
      <p>{text}</p>
    </div>
  );
};

const element = (
  <div className="home">
    <div className="text-content">
      <h1 className="heading">Notifications</h1>
    </div>

    <div className="card-container">
      <Notification
        className="notification-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        iconImage="icon-image"
        text="Information Message"
      />

      <Notification
        className="success-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        iconImage="icon-image"
        text="Success Message"
      />
      <Notification
        className="warning-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        iconImage="icon-image"
        text="Warning Message"
      />
      <Notification
        className="error-container"
        iconUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        iconImage="icon-image"
        text="Error Message"
      />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
