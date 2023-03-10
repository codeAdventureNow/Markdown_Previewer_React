import './App.css';
import { marked } from 'marked';
import { useState } from 'react';
// import { JSDOM } from 'jsdom';
// import DOMPurify from 'dompurify';

// marked.parse(markdownString [,options] [,callback])

// const window = new JSDOM('').window;
// const purify = DOMPurify(window);

// this marked.set options is not working just left in to show what I have attempted.
marked.setOptions({
  renderer: new marked.Renderer(),
  // highlight: function (code, lang) {
  //   const hljs = require('highlight.js');
  //   const language = hljs.getLanguage(lang) ? lang : 'plaintext';
  //   return hljs.highlight(code, { language }).value;
  // },
  // langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
  pedantic: false,
  gfm: true,
  breaks: false,
  sanitize: false,
  smartypants: false,
  xhtml: false,
});

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
