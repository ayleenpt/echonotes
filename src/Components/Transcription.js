import React, { useEffect, useState, useRef } from 'react';
import '../Styles/Transcription.css';

const lorem = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Morbi a enim eu leo vehicula rhoncus eget nec augue. Nullam malesuada lacus eu auctor dapibus. In sodales massa ligula, a rutrum augue tincidunt eu. Donec interdum finibus augue et pharetra. Maecenas at ante ultrices mi imperdiet euismod. Donec id nisi nec tellus dignissim dignissim. Suspendisse posuere ut tortor nec venenatis. Maecenas eu elit pulvinar, semper lorem vel, venenatis elit. Donec molestie luctus ullamcorper. Phasellus dictum tellus id iaculis posuere. Sed in elit sodales, egestas ex id, porta sem. Morbi tincidunt suscipit hendrerit. Nullam id tellus interdum, gravida purus in, lacinia purus. Cras mi purus, volutpat nec consequat vestibulum, finibus faucibus felis. Vivamus sagittis tellus sit amet mi vehicula maximus. Aenean porta vitae metus vel feugiat.`;

const Transcription = ({ recording, playing }) => {
  const [words, setWords] = useState([]);
  const [notes, setNotes] = useState([]);
  const indexRef = useRef(0);
  const allWords = useRef(lorem.split(' '));
  const firstNoteRef = useRef(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (recording && playing) {
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        const nextWord = allWords.current[indexRef.current % allWords.current.length];
        indexRef.current++;

        if (/[.!?]$/.test(nextWord)) {
          setNotes(prevNotes => [
            ...prevNotes,
            formatNote([...words, nextWord].join(' '))
          ]);
          setWords([]);
        } else {
          setWords(prev => [...prev, nextWord]);
        }
      }, 300);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [recording, playing, words]);


  const formatNote = (sentence) => {
    const isHeader = firstNoteRef.current || Math.random() < 0.3;
    firstNoteRef.current = false;

    if (isHeader) {
      console.log("print header");
      return (
        <div className="note-block" key={Math.random()}>
          <h4>{sentence}</h4>
        </div>
      );
    } else {
      console.log("print bullet");
      return (
        <div className="note-block" key={Math.random()}>
          <ul>
            <li>{sentence}</li>
          </ul>
        </div>
      );
    }
  };

  return (
    <div className="transcription-container">
      {notes.map((note, i) => (
        <div key={i}>{note}</div>
      ))}

      <div className="transcription-padding">
        <div className="live-transcription">
          {words.join(' ')}
        </div>
      </div>
    </div>
  );
};

export default Transcription;
