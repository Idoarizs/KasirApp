import './style/App.css'
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import Hasil from './components/Hasil';
import ListCategories from './components/ListCategories';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <div className="Tabel">
        <Container>
          <hr />
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>
                  Daftar Produk
                </strong>
              </h4>
            </Col>
            <Hasil />
          </Row>
          <hr />
        </Container>
      </div>
    </div>
  );
}

export default App;