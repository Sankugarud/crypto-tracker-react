import React, { useState, useEffect } from 'react';
import TabsComponent from '../Tabs/TabsComponent';
import coins100 from '../../functions/coins100';
import './dashboard.css';
import SearchBar from '../search/SearchBar';
import PeginationComponent from '../pegination/PeginationComponent';
import Loader from '../loader/Loader';
import BackToTop from '../backtotop/BackToTop';

const Dashboard = ({changeTheme}) => {
  const [data, setdata] = useState([]);
  const [search, setsearch] = useState('');
  const [peginationData, setpeginationData] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(true);
  const backgroundColor = changeTheme ? 'white' : 'black';
  const handleChangePage = (e, value) => {
    setPage(value);
    let previousIndex = (value -1 ) *10;
    setpeginationData(data.slice(previousIndex, previousIndex+10))
  }


  const onsearch = (e) => {
    setsearch(e.target.value);
  };

  useEffect(() => {
    
    getdata();
  }, []);
  async function getdata() {
    let renderdata = await coins100();
    setdata(renderdata);
      setpeginationData(renderdata.slice(0, 10));
      setLoader(false);
  }
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.symbol.toLowerCase().includes(search.toLowerCase())
  );



  return (
    <div className="dashboard_container" style={{backgroundColor}}>
      { loader ? 
        <div style={{backgroundColor}}>
          <Loader/>
        </div> : <div style={{backgroundColor}}>
          <SearchBar changeTheme={changeTheme} search={search} onsearch={onsearch} />
          <TabsComponent data={search ? filteredData : peginationData} changeTheme={changeTheme}/>
          {
            !search && (
              <PeginationComponent changeTheme={changeTheme} page={page} handleChangePage={handleChangePage}/>
            )
          }
          <BackToTop/>
        </div>
      }
     
      
    </div>
  );
}

export default Dashboard;
