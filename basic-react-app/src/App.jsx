import './App.css'
import Title from './title'; './Title.jsx'; // for importing single function 
//import {Title,Name} from './title.jsx' // for importing multiple function 
import ProductTab from './ProductTab.jsx';
import MsgBox from './MsgBox.jsx'; 
import Project from './Project.jsx';
import Button from './Button.jsx';
import Form from './Form.jsx';

function App() {
  return (  // yaha Title function ko App me return karwa diya hai div ka use multiple function ko return karwane ke liye kiya jata hai 
//  hum iss div ko id to simpy de sakte hai lekin class jo hai wo javascript me keyword hai so usko hume camelCase me and alternate name likhna hoga  
// inn sabe title ko group karn ka ek or method hai jime hum empty oppening and closing tag me isse group kar sakte hai isse extra node form nahi hogi div ki 
    <div className='main-box'> 
    <>
      <Title/> 
      <Title/> 
      <ProductTab/>
      <MsgBox userName={"Akshay"} textColor = {"yellow"}/>
      <h2>Blockbuster deals</h2>
      <Project/>
      <Button/>
      <Form/>


    </>
    </div>
  )// iss tarah 2 bar title likh denge to Title function me hume jo return karwaya hai wo 2 baar repeat ho jaayega 
}

export default App;
