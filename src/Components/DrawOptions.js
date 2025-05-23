import '../Styles/DrawOptions.css'
import {useState} from 'react'

function DrawOptions() {
  const [color, setColor] = useState('#ffffff');
  const [cursor, setCursor] = useState(false);
  const [text, setText] = useState(false);
  const [pencil, setPencil] = useState(false);
  const [shape, setShape] = useState(false);
  const [square, setSquare] = useState(false);
  const [circle, setCircle] = useState(false);

  const setAll = () => {
    setCursor(false);
    setText(false);
    setPencil(false);
    setShape(false);
    setSquare(false);
    setCircle(false);
  };

  const clickCursor = () => {
    const set = !cursor;
    setAll();
    setCursor(set);
  }

  const clickText = () => {
    const set = !text;
    setAll();
    setText(set);
  }

  const clickPencil = () => {
    const set = !pencil;
    setAll();
    setPencil(set);
  }

  const clickShape = () => {
    const set = !shape;
    setAll();
    setShape(set);
  }

  const clickSquare = () => {
    const set = !square;
    setAll();
    setSquare(set);
  }

  const clickCircle = () => {
    const set = !circle;
    setAll();
    setCircle(set);
  }

  return (
    <div className="draw-options">
      <div className="color-picker-wrapper">
      <input
        type="color"
        className="color-picker-hidden"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>

      <button
        className={`highlight ${cursor ? "highlight-active" : ""}`}
        onClick={clickCursor}
      ><i className="fa-solid fa-arrow-pointer"></i></button>
      <button
        className={`text highlight ${text ? "highlight-active" : ""}`}
        onClick={clickText}
      >T</button>
      <button
        className={`highlight ${pencil ? "highlight-active" : ""}`}
        onClick={clickPencil}
      ><i class="fa-solid fa-pencil"></i></button>
      <button
        className={`highlight ${shape ? "highlight-active" : ""}`}
        onClick={clickShape}
      ><i class="fa-solid fa-star"></i></button>
      <button
        className={`highlight ${square ? "highlight-active" : ""}`}
        onClick={clickSquare}
      ><i class="fa-regular fa-square"></i></button>
      <button
        className={`highlight ${circle ? "highlight-active" : ""}`}
        onClick={clickCircle}
      ><i class="fa-regular fa-circle"></i></button>
    </div>
  );
}

export default DrawOptions