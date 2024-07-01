import React from 'react';
import { createRoot } from 'react-dom/client';
import Editor from '../src/index';
import dedent from 'dedent';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';

import './styles.css';

type State = {
  code: string;
};


require('prismjs/components/prism-jsx');

class App extends React.Component<{}, State> {
  state = {
    code: dedent`
    import React from "react";
    import ReactDOM from "react-dom";

    function App() {
      return (
        <h1>Hello world</h1>
      );
    }

    ReactDOM.render(<App />, document.getElementById("root"));
    `,
  };

  render() {
    return (
      <div className="App">
      <header className="App-header">
        <h1>Welcome to Tealfeed Project</h1>
      </header>
      <main className="container">
        <div className="container__content">
          <h1>react-code-editor</h1>
          {/* <p>A simple no-frills code editor with syntax highlighting.</p> */}
          <a
            className="button"
            href="https://github.com/nitishpatel8843"
          >
            Tealfeed
          </a>
          <div className="container_editor_area">
            <Editor
              placeholder="Type some code…"
              value={this.state.code}
              onValueChange={(code) => this.setState({ code })}
              highlight={(code) => highlight(code, languages.jsx!, 'jsx')}
              padding={10}
              className="container__editor"
            />
          </div>
        </div>
        <footer>
        <p>&copy; 2024 Tealfeed Project</p>
      </footer>
      </main>
      </div>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(<App />);
