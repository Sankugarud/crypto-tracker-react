import React,{useState, useEffect} from 'react'
import './tabscomponent.css'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { Link } from 'react-router-dom';


const Tabs = ({item,changeTheme}) => {
    const [posNdneg, setposNdneg] = useState(false);
    const backgroundColor = changeTheme ? 'white' : 'black';
    const textColor = changeTheme ? 'black' : 'white';
    useEffect(() => {
        if (item.market_cap_change_24h > 0) {
          setposNdneg(true);
        } else {
          setposNdneg(false);
        }
      }, [item.market_cap_change_24h]);
  return (
    <Link to={`/coin/${item.id}`} >
        <div style={{backgroundColor, color:textColor}} className='container'>
        <div style={{backgroundColor}} className={posNdneg ? "box" : "box boxes"} >
            <div className="first">
                <img className='img1' src={item.image} alt="cointImg"/>
                <div className="heading">
                    <h3 className='symbol'>{item.symbol.toUpperCase()}-USD</h3>
                    <p className='name'>{item.name}</p>
                </div>
            </div>
            <div className="second">
                {posNdneg ? <button className='percentage-plus'>+{item.price_change_percentage_24h.toFixed(2)}%</button> : <button className='percentage-minus'>-{item.price_change_percentage_24h.toFixed(2)}%</button>}
                { posNdneg ? <p className='plus'><TrendingUpIcon/></p> : <p className='minus'><TrendingDownIcon/></p>}
            </div>
            <div className="forth">
            { posNdneg ? 
                <p className='positive' >${Number.isInteger(item.current_price) ? item.current_price : item.current_price.toFixed(3)}</p> : 
                <p  className='negative'>${Number.isInteger(item.current_price) ? item.current_price : item.current_price.toFixed(3)}</p>
            }
            
            </div>
            <div className="third">
                <p className='tVolume'>Total Volume: {item.total_volume}</p>
                <p className='mCap'>Market Cap: {item.market_cap}</p>
            </div>
            
        </div>
        </div>
    </Link>
    
  )
}

export default Tabs