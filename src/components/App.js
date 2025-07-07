import React, { useState } from 'react';
import Editor from './Editor'
function App() {
  const [html, setHtml] = useState('')
  const [css, setCss] = useState('')
  const [js, setJs] = useState('')



  return (
    <>
      <div className="pane top-pane">
        <Editor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
         <Editor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
         <Editor
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div> {/*upper part of coding i.e html ,css and js window SO 3 EDITOR are mentioned */}
      <div className="pane"> {/*output part */}
        <iframe
          title="output"
          sandbox="allow-scripts"
          style={{ border: 'none' }}
          width="100%"
          height="100%"
        />{/* for writing text */}
      </div>
    </>
  )
}

export default App;
