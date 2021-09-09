import logo from './logo.svg';
import './App.css';
import Greet from './Components/FunctionalComponent';
import Welcome from './Components/ClassComponent';
import Hello from './Components/JSXformat';
import Exm from './Components/FunctionalProps';
import Color from './Components/ClassProps';
import Message from './Components/ClassState';
import Abc from './Components/Bind Event Handler';
import ParentComponent from './Components/ParentComponent';
import FormHandling from './Components/FormHandling';
import ParentComp from './Components/ParentComp';
import RefsDemo from './Refsdemo';
function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome />
      <Hello />
      <Exm name='Krishn' ans='fine'>
            <p>Children prop of Krishn tag.</p>
            <p>Children prop of Krishn tag.</p>
            <p>Children prop of Krishn tag.</p>
      </Exm>
      
      <Exm name='Baldau' ans='not fine'></Exm>
      <Exm name='Radha' ans='fine'></Exm>
      <Color color='Black'></Color>
      <Color color='Blue'></Color>

      <Message ></Message>
      <Abc></Abc>

      <ParentComponent></ParentComponent>
      <FormHandling></FormHandling>

      <ParentComp></ParentComp> */}
      <RefsDemo/>
    </div>
  );
}

export default App;
