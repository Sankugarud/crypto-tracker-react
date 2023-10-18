import React, { useState, useEffect } from 'react';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import './liscomponent.css';
import { Link } from 'react-router-dom';

const Listcomponent = ({ item,changeTheme}) => {
  const [posNdneg, setposNdneg] = useState(false);
  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';
  useEffect(() => {
    if (item && item.market_cap_change_24h !== undefined) {
      if (item.market_cap_change_24h > 0) {
        setposNdneg(true);
      } else {
        setposNdneg(false);
      }
    }
  }, [item]);

  return (
    <Link to={`/coin/${item.id}`}>
      <div style={{backgroundColor, color: textColor }} className='container_list'>
        <div className= {changeTheme ? 'box3'  : 'box1'}>
          <div className="first1">
            <img className='img2' src={item.image} alt="coinImg" />
            <div className="heading">
              <h3 className='symbol'>{item.symbol && item.symbol.toUpperCase()}-USD</h3>
              <p className='name'>{item.name}</p>
            </div>
          </div>
          <div className="second1">
            {item.price_change_percentage_24h !== undefined ? (
              posNdneg ? (
                <button className='percentage-plus1'>+{item.price_change_percentage_24h.toFixed(2)} %</button>
              ) : (
                <button className='percentage-minus1'>-{item.price_change_percentage_24h.toFixed(2)} %</button>
              )
            ) : null}
            {posNdneg ? <p className='plus1'><TrendingUpIcon /></p> : <p className='minus1'><TrendingDownIcon /></p>}
          </div>
          <div className="forth1">
            {item.current_price !== undefined ? (
              posNdneg ? (
                <p className='positive'>
                  ${Number.isInteger(item.current_price)
                    ? item.current_price
                    : item.current_price.toFixed(3)}
                </p>
              ) : (
                <p className='negative'>
                  ${Number.isInteger(item.current_price)
                    ? item.current_price
                    : item.current_price.toFixed(3)}
                </p>
              )
            ) : null}
          </div>
          <div className="third1">
            <p className='tVolume1'> {item.total_volume}</p>
            <p className='mCap'> {item.market_cap}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Listcomponent;
