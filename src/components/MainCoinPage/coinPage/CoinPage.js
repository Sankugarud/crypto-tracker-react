import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Listcomponent from '../../Dashboard/listcomponent/Listcomponent';
import Discription from '../discription/Discription';
import CoingInfo from './CoingInfo';
import './coinPage.css';
import apicall from '../../functions/apicall';
import coinPrices from '../../functions/coinprices';
import LineChart from '../../charts/linechart/LineChart';
import Selectdays from '../../charts/selectDays/SelectDays';
import settingChartdata from '../../functions/settingChartdata';
import ChangeBtns from '../../charts/changebuttons/ChangeBtns';
import BarChart from '../../charts/barChart/BarChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';


const CoinPage = ({changeTheme}) => {
  const { coinId } = useParams();
  const [data, setData] = useState([]);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState('prices');
  const [currentChartType, setCurrentChartType] = useState('line');

  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [],
        label: 'Default Data',
      },
    ],
  });

  const backgroundColor = changeTheme ? 'white' : 'black';
 

  // Days change function
  
useEffect(() => {
  const fetchData = async () => {
    try {
     
      const coinData = await apicall(coinId);
      const prices = await coinPrices(coinId, days, priceType);
    
      CoingInfo(setData, coinData);
      settingChartdata(setChartData, prices, coinId);
     
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  fetchData();
},  [coinId, days, priceType]);

  const handleChange = useCallback((e) => {
    setDays(e.target.value);
  }, [setDays]);

  const handleChangePrice = (e) => {
    setPriceType(e.target.value);

  };

  const handleShowChartClick = () => {
    setCurrentChartType('line');
  };
  
  const handleBarChartClick = () => {
    setCurrentChartType('bar');
  };
  return (
    <div style={{backgroundColor}}  className='coin_page'>
      <div style={{backgroundColor}}  className='list_coin'>
      <Listcomponent changeTheme={changeTheme} item={data} />
      </div>
        <div style={{backgroundColor}}  className="coingPage">
          <div className={changeTheme ? 'lineChart-change' : "lineChart"}>
            <div className="select_daysz">
            <Selectdays changeTheme={changeTheme} days={days} handleChange={handleChange} />
            <div className="options_charts">
              <ShowChartIcon onClick={handleShowChartClick} className= {changeTheme?"chartLine":'barChart'} />
              <BarChartIcon onClick={handleBarChartClick} className= {changeTheme?"chartLine":'barChart'} />
            </div>
            </div>
            
            <ChangeBtns priceType={priceType} handleChangePrice={handleChangePrice} />
              
            {currentChartType === 'line' ? (
                <LineChart chartData={chartData} />
              ) : (
                <BarChart chartData={chartData} />
              )}
          </div>
          <div className="discriptions">
            <Discription changeTheme={changeTheme} data={data} />
          </div>
        </div>
    </div>
  );
};

export default CoinPage;
