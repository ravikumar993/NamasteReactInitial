import React from "react";
import ReactDOM from "react-dom/client";

const titleElement = <h1>hii ravi,how are you..</h1>;

const Header = ({ title }) => {
  return (
    <div>
      {titleElement}
      <h1>{title}</h1>
    </div>
  );
};

const Footer = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Content = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

const Children = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <div>
      <Header title="this is title"></Header>
      <Footer title="this is footer"></Footer>
      <Content title="this is content"></Content>
      <children>
        <h1>My Application</h1>
        <p>Welcome to my application!</p>
        <footer>© 2024 My Company</footer>
        <Header title="this is title"></Header>
        <Footer title="this is footer"></Footer>
        <Content title="this is content"></Content>
      </children>
    </div>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
