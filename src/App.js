import './App.css';
import Countries from "./components/Countries";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container className='bg-white p-3'>
      <Countries />
    </Container>
  );
}

export default App;
