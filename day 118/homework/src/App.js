import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import Toggle from './toggle';
import ParagraphVsibility from './paragraphVisibility';
import ColorChanger from './colorChanger';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ColorChanger />
      </header>
      <main>
        <Counter />
        <ParagraphVsibility />
        <Toggle />
      </main>
    </div>
  );
}

export default App;
