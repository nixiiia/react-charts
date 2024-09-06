import './App.scss';

import { Table } from './components/Table';

import datas from './assets/data.json';

function App() {
  return (
    <div className="App font-open-sans">
      <Table datas={datas} />
    </div>
  );
}

export default App;
