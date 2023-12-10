import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick = () => {
        let newText = text.toUpperCase()
        // setText("kya bolti public")
        setText(newText)
        props.showAlert("Text has been converted to Upper case","success")
    }
    const handleDnClick = () => {
        let newText = text.toLowerCase()
        // setText("kya bolti public")
        setText(newText)
        props.showAlert("Text has been converted to Lower case","success")
    }
    const handleChange = (event) => {
        // console.log("Changed" + text)
        setText(event.target.value)
        
    }
    const [text, setText] = useState("Enter text Here")

  return (
    <div style = {{color :props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" id="exampleFormControlTextarea1" style = {{color :props.mode === "dark" ? "white" : "black",backgroundColor : props.mode === 'dark'?'#14052e':'white',caretolor: "white"}} value={text} onChange={handleChange} rows="8"></textarea>
          <button className="btn btn-primary mx-2 my-3" onClick={handleUpClick}>Convert to UpperCase</button>
          <button className="btn btn-primary mx-2 my-3" onClick={handleDnClick}>Convert to LowerCase</button>
        </div>
        <div className="container my-3">
            <h2>Text Summary</h2>
            <p>{text.split(" ").length } words and {text.length} characters</p>
            <p>Time to read {text.split(" ").length} words is { 0.008 * (text.split(" ").length) }</p>
        </div>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : "Enter Some text in textbox to analyze"}</p>
    </div>
  )
}
