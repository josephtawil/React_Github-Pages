import React,{useState} from 'react';
import './App.css';
import Translationinput from './components/Translationinput';
import TranslationList from './components/TranslationList';

function App() {

  const [translation, setTranslation] = useState({
    text:"", 
    translationList: [],
  });

  return (
    <div className="App">
      <TranslationList/>
      <Translationinput/>
    </div>
  );
}

export default App;
