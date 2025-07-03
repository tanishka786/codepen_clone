import react from "react";
import Editor from "./Editor";
function App() {
  return (
    <>
      <div classname="pane top-pane">
        <Editor/>
        <Editor/>
        <Editor/>
      </div> {/*upper part of coding i.e html ,css and js window SO 3 EDITOR are mentioned */}
      
      
      <div classname="pane"> {/*output part */}
        <iframe 
             title="output"
             sandbox="allow-scripts"
             frameBorder ="0"
             width="100%"
             height="100%"
        >
        </iframe> 
        {/* for writing text */}
      </div>
    </>
  )
}

export default App;
