import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Listcomponent from '../../Dashboard/listcomponent/Listcomponent';
import Loader from '../../Dashboard/loader/Loader';
import Header from '../../header/Header';
import Discription from '../discription/Discription';
import CoingInfo from './CoingInfo';
import './coinPage.css';
import apicall from '../../functions/apicall';
import coinPrices from '../../functions/coinprices';
import LineChart from '../../charts/linechart/LineChart';
import Selectdays from '../../charts/selectDays/SelectDays';
import settingChartdata from '../../functions/settingChartdata';
import ChangeBtns from '../../charts/changebuttons/ChangeBtns';


const CoinPage = ({changeTheme}) => {
  const { coinId } = useParams();
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState('prices');
  const [listdata, setlistdata] = useState([]);
  const [chartData, setChartData] = useState({
    datasets: [
      {
        data: [],
        label: 'Default Data',
      },
    ],
  });

  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';
 const fetchdata = async()=> {
    const gettingListdata = await apicall(coinId);
    CoingInfo(setlistdata, gettingListdata);
 }
useEffect(() => {
  fetchdata();
}, []);
  // Days change function
  const fetchData = useCallback(async () => {
    try {
      setLoader(true);
      const coinData = await apicall(coinId);
      const prices = await coinPrices(coinId, days, priceType);
      setLoader(false);
      CoingInfo(setData, coinData);
      settingChartdata(setChartData, prices, coinId);
     
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoader(true);
        <Loader/>
    }
  }, [coinId, days, priceType]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleChange = useCallback((e) => {
    setDays(e.target.value);
  }, [setDays]);

  const handleChangePrice = (e) => {
    setPriceType(e.target.value);
    
  };
  return (
    <div style={{backgroundColor}}  className='coin_page'>
      <div style={{backgroundColor}}  className='list_coin'>
      <Listcomponent changeTheme={changeTheme} item={listdata} />
      </div>
        <div style={{backgroundColor}}  className="coingPage">
          <div className={changeTheme ? 'lineChart-change' : "lineChart"}>
            <div className="select_daysz">
            <Selectdays changeTheme={changeTheme} days={days} handleChange={handleChange} />
            </div>
            
            <ChangeBtns priceType={priceType} handleChangePrice={handleChangePrice} />
              <LineChart chartData={chartData} />
          </div>
          <div className="discriptions">
            <Discription changeTheme={changeTheme} data={data} />
          </div>
        </div>
    </div>
  );
};

export default CoinPage;
