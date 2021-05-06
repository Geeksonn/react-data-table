import { Table } from 'react-bootstrap';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Row from './components/Row';

function App() {
  const header = [
    { value: "TITLE #1", className: "" },
    { value: "TITLE #2", className: "" },
    { value: "TITLE #3", className: "" }
  ];
  const data = [
    { value: "COL #1", className: "" },
    { value: "COL #2", className: "align-right" },
    { value: "COL #3", className: "align-right" },
  ];

  return (
    <Table striped bordered size="sm">
      <thead>
        <Row rowKey="header" isHeader={true} data={header} />
      </thead>
      <tbody>
      <Row rowKey="first_row" isHeader={false} data={data} />
      <Row rowKey="first_row" isHeader={false} data={data} />
      <Row rowKey="first_row" isHeader={false} data={data} />
      </tbody>
      <tfoot>
      <Row rowKey="footer" isHeader={true} data={header} />
      </tfoot>
    </Table>
  );
}

export default App;
