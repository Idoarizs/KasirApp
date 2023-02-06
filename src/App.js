import './style/App.css'

import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import swal from 'sweetalert';
import axios from 'axios';

import { API_URL } from './api/constants'
import NavigationBar from './components/NavigationBar';
import DaftarKategori from './components/DaftarKategori';
import DaftarProduk from './components/DaftarProduk';
import DaftarHasil from './components/DaftarHasil';


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menus: [],
    }
  }

  componentDidMount() {
    axios
      .get(API_URL + 'products')
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    console.log(this.state.menus)
    return (
      <div className="App">
        <NavigationBar />
        <div className="Tabel">
          <Container>
            <hr />
            <Row>
              <DaftarKategori />
              <DaftarProduk />
              <DaftarHasil />
            </Row>
            <hr />

            <Row>
              menus
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}