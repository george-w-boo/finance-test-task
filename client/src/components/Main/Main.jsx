import React from 'react';
import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Main.scss';


export const Main = React.memo((props) => {
  const tickers = useSelector(state => {
    const { tickers } = state;
    return tickers;
  });

  return (
    <main className="main">
      <Container className="main__wrapper">
        <Row>
          <Col sm>
            {'Apple: '}
            {tickers.find(x => x.ticker === "AAPL")?.price}
          </Col>
          <Col sm>
            {'Google: '}
            {tickers.find(x => x.ticker === "GOOGL")?.price}
          </Col>
          <Col sm>
            {'Microsoft: '}
            {tickers.find(x => x.ticker === "MSFT")?.price}
          </Col>
        </Row>
        <Row>
          <Col sm>
            {'Amazon: '}
            {tickers.find(x => x.ticker === "AMZN")?.price}
          </Col>
          <Col sm>
            {'Facebook: '}
            {tickers.find(x => x.ticker === "FB")?.price}
          </Col>
          <Col sm>
            {'Tesla: '}
            {tickers.find(x => x.ticker === "TSLA")?.price}
          </Col>
        </Row>
      </Container>
    </main>
  );
});
