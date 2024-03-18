// // src/App.js
// import { useState } from "react";

// const App = () => {
//   const [file, setFile] = useState();
//   const [filename, setFileName] = useState("Enter Text");
//   const [prediction, setPrediction] = useState(null);

//   const onChange = (e) => {
//     // setFile(e.target.files[0]);
//     setFileName(e.target.value);
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("text", e.target[0].value);
//     // console.log(formData);

//     fetch("http://localhost:5000/submit", {
//       method: "POST",
//       body: formData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setPrediction(data);
//       });
//   };

//   return (
//     <div className="App">
//       <form onSubmit={onSubmit}>
//         <div className="custom-file">
//           <input
//             type="text"
//             className="custom-file-input"
//             id="customFile"
//             onChange={onChange}
//           />
//           <br />
//           <label className="custom-file-label" htmlFor="customFile">
//             Input Text:{" "}
//           </label>
//           <label className="custom-file-label" htmlFor="customFile">
//             {filename}
//           </label>
//         </div>
//         <input
//           type="submit"
//           value="Submit"
//           className="btn btn-primary btm-block mt-4"
//         />
//       </form>
//       {prediction && <h1>{prediction.message}</h1>}
//     </div>
//   );
// };

// export default App;
import "./App.css";
import Glass from "./Glass";

function App() {
  return (
    <div className="app">
      <Glass />
    </div>
  );
}

export default App;
