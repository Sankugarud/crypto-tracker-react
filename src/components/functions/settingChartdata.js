import convertDate from "./convirtDate";

const settingChartdata = (setChartData, prices, coinId) => {
  if(prices){
     setChartData({
      labels: prices.map((price) => convertDate(price[0])),
      datasets: [{
        label: coinId,
        data: prices.map((price) => price[1]),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: ' rgba(34, 81, 151, 0.1);',
        fill:false,
        tension: 0.25,
        pointerRadius:0,
        borderWidth:1,
        pointRadius: 0,
      }]
    });
  }
    
}
export default  settingChartdata;