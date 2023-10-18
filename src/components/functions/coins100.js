import axios from "axios";

const getData = async () => {
    try {
        const response = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
        return response.data;
      } catch (error) {
        console.error("Api diddnt work"+error);
      }
}
export default getData