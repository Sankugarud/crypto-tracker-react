import React, { useEffect, useState } from 'react';
import LineChart from '../../charts/linechart/LineChart';
import Selectdays from '../../charts/selectDays/SelectDays';
import CoingInfo from '../../MainCoinPage/coinPage/CoingInfo';
import ComaireTwobtns from '../compareButtons/ComaireTwobtns';
import apicall from '../../functions/apicall';
import coinPrices from '../../functions/coinprices';
import Loader from '../../Dashboard/loader/Loader';
import Listcomponent from '../../Dashboard/listcomponent/Listcomponent';
import convertDate from '../../functions/convirtDate';
import './comparePgae.css'
import ChangeBtns from '../../charts/changebuttons/ChangeBtns';
import Discription from '../../MainCoinPage/discription/Discription'

const ComparePage = React.memo(({changeTheme}) => {
  const [coin1, setCoin1] = useState('bitcoin');
  const [coin2, setCoin2] = useState('ethereum');
  const [days, setDays] = useState(30);
  const [cryptodata1, setCryptoData1] = useState([]);
  const [cryptodata2, setCryptoData2] = useState([]);
  const [loader, setLoader] = useState(true);
  const [priceType, setPriceType] = useState('prices');
  const [combinedChartData, setCombinedChartData] = useState({
    labels: [], // Assuming you want the same labels for both datasets
    datasets: [
      {
        label: 'Coin 1 Data',
        data: [],
        borderColor: 'green',
        fill: true,
        borderWidth: 1,
        tension: 0.25,
        yAxisID: 'y',
      },
      {
        label: 'Coin 2 Data',
        data: [],
        borderColor: 'red',
        fill: true,
        borderWidth: 1,
        tension: 0.25,
        yAxisID: 'y1',
      },
    ],
  });
 
  const backgroundColor = changeTheme ? 'white' : 'black';
  const textColor = changeTheme ? 'black' : 'white';
  // Date
  const handleChange = async (e) => {
    setDays(e.target.value);
  };

  // Coin 1
  const handleChangecoin1 = async (e) => {
    setCoin1(e.target.value);
  };

  // Coin 2
  const handleChangecoin2 = async (e) => {
    setCoin2(e.target.value);
  };
  //changePriceType
  const handleChangePrice = (e) => {
    setPriceType(e.target.value);
    console.log(e.target.value)
  };
  let typePrice = priceType;
  console.log(priceType);
  const getfetchData = async () => {
    try {
      setLoader(true);
      const data1 = await apicall(coin1);
      const data2 = await apicall(coin2);
      console.log(typePrice);
      if (data1 && data2) {
        CoingInfo(setCryptoData1, data1);
        CoingInfo(setCryptoData2, data2);
        console.log(priceType);
        const prices1 = await coinPrices(coin1, days, priceType);
        const prices2 = await coinPrices(coin2, days, priceType);

        if (prices1.length > 0 && prices2.length > 0) {
          setCombinedChartData({
            labels: prices1.map((price) => convertDate(price[0])), // Assuming the labels are the same
            datasets: [
              {
                label: coin1,
                data: prices1.map((price) => price[1]),
                borderColor: 'green',
                fill: false,
                borderWidth: 1,
                tension: 0.25,
                yAxisID: 'y',
                pointRadius: 0,
              },
              {
                label: coin2,
                data: prices2.map((price) => price[1]),
                borderColor: 'red',
                fill: false,
                borderWidth: 1,
                tension: 0.25,
                yAxisID: 'y1',
                pointRadius: 0,
              },
            ],
          });
          setLoader(false);
        }
      }
    } catch (error) {
      setLoader(true);
      <Loader/>
    }
  };

  useEffect(() => {
    getfetchData();
  }, [coin1, coin2, days,priceType ]);

  return (
    <div style={{backgroundColor}} class="compare_pages">
      
      
          
        <div>
            <div className='compare_heading'>
        <ComaireTwobtns
          changeTheme={changeTheme}
          coin1={coin1}
          coin2={coin2}
          handleChangecoin1={handleChangecoin1}
          handleChangecoin2={handleChangecoin2}
        />
        <div style={{backgroundColor}} className="select_dayz">
          <Selectdays changeTheme={changeTheme} days={days} handleChange={handleChange} />
        </div>
       
      </div>
      <div style={{backgroundColor}} className='two_listComponents'>
        <div className='list_coin'>
        <Listcomponent changeTheme={changeTheme} item={cryptodata1} />
        </div>    
        <div className='list_coin'>
        <Listcomponent changeTheme={changeTheme} item={cryptodata2} />
        </div>
        
      </div>
      <div style={{backgroundColor}} className="two_chartCcontainer">
          <ChangeBtns priceType={priceType} handleChangePrice={handleChangePrice} />
           <LineChart changeTheme={changeTheme} chartData={combinedChartData} />
        
      </div>
      <div className="two_discriptions">
        <Discription changeTheme={changeTheme} data={cryptodata1} />
        <Discription changeTheme={changeTheme} data={cryptodata2} />
      </div>
        </div>
        
      
    </div>
  );
});

export default ComparePage;
