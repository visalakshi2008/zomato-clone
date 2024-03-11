import logo from './logo.svg';
import './App.css';
import CustomHeader from './components/CustomHeader';
import Localities from './components/Localities';
import Form from './components/Form';
import QuestonAndAnswers from './components/QuestonAndAnswers';

function App() {
  return (
    <div>
      <CustomHeader />
      <Localities />
      <Form />
      <QuestonAndAnswers />
    </div>
  );
}

export default App;
