import "./Glass.css";
import { useState } from "react";
import axios from "axios";

function Glass() {
  const [input, setInput] = useState("");
  const [filename, setFileName] = useState("Enter Text");
  const [prediction, setPrediction] = useState(null);

  const onChange = (e) => {
    setFileName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", e.target[0].value);
    // console.log(e.target[0].value);

    fetch("http://fee5-34-69-57-154.ngrok.io/submit", {
      method: "POST",
      body: formData,
    })
      // .then((response) => response.text())
      // .then((text) => console.log(text));
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setPrediction(data);
      });
  };

  const onFeedback = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Feedback", true);

    fetch("http://fee5-34-69-57-154.ngrok.io/feedback", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        // setPrediction(data);
      });
  };

  return (
    <div className="glass">
      <form onSubmit={onSubmit} className="glass__form">
        <h4>Tamil SA and NER</h4>
        <div className="glass__form__group">
          <input
            id="input"
            className="glass__form__input"
            placeholder="Enter Input"
            required
            autoFocus
            title="Input text must be in tamil"
            type="text"
            onChange={onChange}
          />
        </div>
        <div className="glass__form__group">
          <label className="glass__form__label">Input Text: </label>
          <label className="glass__form__label" style={{ marginLeft: "1rem" }}>
            {filename}
          </label>
        </div>

        <div className="glass__form__group">
          <button type="submit" className="glass__form__btn">
            Submit
          </button>
        </div>
      </form>
      <div className="glass__form__group">
        <label className="glass__form__label">Sentiment: </label>
        {prediction && (
          <label
            className="glass__form__label"
            style={{ marginLeft: "1rem", fontWeight: "Bold" }}
          >
            {prediction.message}
          </label>
        )}
      </div>
      <form onSubmit={onFeedback} className="glass__form">
        <div className="glass__form__group">
          <label className="glass__form__label">Correct? </label>
          <button
            className="glass__form__btn"
            style={{
              marginLeft: "1rem",
              backgroundColor: "green",
              color: "white",
            }}
          >
            Yes
          </button>
        </div>
      </form>
    </div>
  );
}

export default Glass;
