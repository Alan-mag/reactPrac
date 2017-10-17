class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Testing</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide" : "Show"}
        </button>
        {this.state.visibility && <p>Some Text</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// let visible = false;

// const toggleVisible = () => {
//     visible = !visible;
//     renderApp();
// };

// const appRoot = document.getElementById("app");

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Bullshit</h1>
//             <button onClick={toggleVisible}>{visible ? 'Hide' : 'Show'}</button>
//             {visible && (
//                 <p>Some Text</p>
//             )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderApp();
