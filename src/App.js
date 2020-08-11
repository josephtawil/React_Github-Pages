import React,{useState} from 'react';
import './App.css';
import Translationinput from './components/Translationinput';
import TranslationList from './components/TranslationList';

function App() {

  const [translation, setTranslation] = useState({
    text:"", 
    translationList: [],
  });

const editText = (e) =>{
  setTranslation({...translation, [e.target.name] : e.target.value});
  console.log(translation);
}

const submitText = (e) => {
  e.preventDefault();
  setTranslation({...translation, translationList: [...translation.translationList, translation.text]});
}
  return (
    <div className="App">
      <div className="container">
      <div className="jumbotron">
      
      <TranslationList/>
      <Translationinput submitText={submitText} editText={editText}/>
      </div>
      </div>
    </div>
  );
}

export default App;
