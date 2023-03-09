import './App.css';
import { marked } from 'marked';
// import { JSDOM } from 'jsdom';
// import DOMPurify from 'dompurify';

// const window = new JSDOM('').window;
// const purify = DOMPurify(window);

function App() {
  // const clean = purify.sanitize('<b>hello there</b>');
  const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');
  return <div className='App'>{html}</div>;
}

export default App;
