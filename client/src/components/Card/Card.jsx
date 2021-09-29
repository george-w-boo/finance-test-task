import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Card.scss';

export const Card = (props) => {
  const { company } = props;

  const companiesFromApi = useSelector(state => {
    const { tickers } = state;

    return tickers;
  });

  const companyFromApi = companiesFromApi.find(companyFromApi => companyFromApi.ticker === company.ticker);

  let isGreen = true;
  const prevPrice = useRef(0);
    
  useEffect(() => {
    prevPrice.current = companyFromApi.price;
  }, [companyFromApi.price])

  isGreen = companyFromApi.price > prevPrice.current ? true : false;

  return (
    <section className='card'>
      <h3 className="card__title">{company.name}</h3>
      <p className={`card__price ${isGreen ? 'card__price--green' : 'card__price--red'}`}>
        {`Price: ${companyFromApi.price}`}
      </p>
    </section>
  );
};
