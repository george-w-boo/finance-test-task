import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from '../Card';
import './Main.scss';


export const Main = (props) => {
  const companies = [
    {name: 'Apple', ticker: "AAPL"},
    {name: 'Google', ticker: "GOOGL"},
    {name: 'Microsoft', ticker: "MSFT"},
    {name: 'Amazon', ticker: "AMZN"},
    {name: 'Facebook', ticker: "FB"},
    {name: 'Tesla', ticker: "TSLA"},
  ];

  return (
    <main className="main">
      <Container className="main__wrapper">
        <div className="main__grid">
          {companies.map(company => (
            <Card company={company} key={company.name} />
          ))}
        </div>
      </Container>
    </main>
  );
};
