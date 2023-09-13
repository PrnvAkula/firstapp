import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import {AuthContextProvider} from './context/Authcontext';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <AuthContextProvider>
            <Routes>
              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </AuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
