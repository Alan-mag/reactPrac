console.log("app.js is running");

("use strict");

const app = {
  title: "Title",
  subtitle: "Subtitle",
  options: []
};


const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  if (option) {
    console.log(option);
    app.options.push(option);
    e.target.elements.option.value = "";
    renderApp();
  }
};

const removeAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById("app");

const numbers =[105, 101, 1000];

const renderApp = () => {
  const template = (
    <div>
      <h1 id="first-react-element">{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={removeAll}>Remove All</button>
      <ol>
        {
        app.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderApp();
