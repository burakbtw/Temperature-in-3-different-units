import React, { useState } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Sıcaklık from "./components/Celcius";
import Fahrenheit from "./components/Fahrenheit";
import Kelvin from "./components/Kelvin";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const [sıcaklık, setSıcaklık] = useState(1);

  return (
    <div
      style={{
        backgroundColor: isDarkMode ? "#222" : "#fff",
        minHeight: "100vh",
        color: isDarkMode ? "#fff" : "#000",
      }}
    >
      <Container style={{ margin: 15 }}>
        <Row>
          <h1>Sıcaklık Birimleri</h1>
          <h3>Şu an sıcaklık: {sıcaklık} Derece</h3>
          <Button
            color="danger"
            style={{ maxWidth: 125, marginLeft: 7 }}
            onClick={() => setSıcaklık(sıcaklık + 1)}
          >
            Sıcaklık Arttır
          </Button>
          <Button
            color="primary"
            style={{ maxWidth: 125, marginLeft: 7 }}
            onClick={() => setSıcaklık(sıcaklık - 1)}
          >
            Sıcaklık Azalt
          </Button>
          <Button
            color="warning"
            style={{ maxWidth: 125, marginLeft: 7 }}
            onClick={() => setSıcaklık(0)}
          >
            Sıfırla
          </Button>
          <Button
            color={isDarkMode ? "light" : "dark"}
            style={{ maxWidth: 125, marginLeft: 7 }}
            onClick={toggleDarkMode}
          >
            {isDarkMode ? "Aydınlık Tema" : "Karanlık Tema"}
          </Button>
        </Row>

        <br />

        <Row>
          <h5>3 Birimde Sıcaklık Ölçümü</h5>
          <Col xs="3">
            <Sıcaklık derece={sıcaklık} />
          </Col>
          <Col xs="4">
            <Fahrenheit derece={sıcaklık} />
          </Col>
          <Col>
            <Kelvin derece={sıcaklık} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
