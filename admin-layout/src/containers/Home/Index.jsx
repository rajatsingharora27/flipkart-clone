import React from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./index.css";

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <div  style={{margin:"5rem"}} className="jumbotron text-center">
          <h2>Welcome To Admin Dashboard</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, incidunt beatae tempora molestiae libero voluptatum nobis eum error omnis magni iste corporis excepturi assumenda officiis. Aut laudantium illum dolores doloribus?</p>
        </div>
      </Container>
    </>
  );
};

export default Home;
