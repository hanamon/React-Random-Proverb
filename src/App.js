import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = [
    '강한 사람은 자신을 통제할 수 있는 사람이다.',
    '자기를 아는 것이 최대의 지혜다.',
    '자기보다 현명한 사람에게 지는 것이 자기보다 어리석은 자에게 이기는 것보다 낫다.',
    '날마다 오늘이 당신의 마지막 날이라고 생각하라. 날마다 오늘이 당신의 첫날이라고 생각하라.',
    '만나는 사람 누구에게나 무엇인가를 배울 수 있는 사람이 이 세상에서 가장 현명한 사람이다.',
  ];

  const getRandomIndexFn = (length) => { 
    return parseInt(Math.random() * length);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Random Proverb App 2021 (탈무드 명언)
        </p>
        {proverbs[getRandomIndexFn(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
