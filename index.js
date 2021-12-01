const Button = (props) => {
  //  Write your code here.
  const { buttonText, className } = props;

  return <button className={`btn ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div class="social-button-container">
    <div class="content-container">
      <h1 class="heading">Social-buttons</h1>
      <div class="button-container">
        <Button buttonText="Like" className="like-btn" />
        <Button buttonText="Comment" className="Comment-btn" />
        <Button buttonText="Share" className="Share-btn" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
