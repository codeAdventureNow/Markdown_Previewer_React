import './App.css';
import { marked } from 'marked';
import { useState } from 'react';
// import { JSDOM } from 'jsdom';
// import DOMPurify from 'dompurify';

// const window = new JSDOM('').window;
// const purify = DOMPurify(window);

function App() {
  // const clean = purify.sanitize('<b>hello there</b>');
  const [preview, setPreview] = useState('');
  console.log(preview);
  const html = marked.parse(preview);
  // const html = marked.parse('# Marked in Node.js\n\nRendered by **marked**.');

  return (
    <div className='App'>
      <div id='editor'>
        <h3 className='title'>Editor</h3>

        <textarea
          className='text-area'
          value={preview}
          onChange={(e) => setPreview(e.target.value)}
        ></textarea>
      </div>

      <div id='preview'>
        <h3 className='title'>Previewer</h3>

        <p>{html}</p>
      </div>
    </div>
  );
}

export default App;
