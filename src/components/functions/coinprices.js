import axios from "axios"

const coinPrices = async (id, days, prices) => {
    try {
        const responce = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        // console.log(responce.data[prices]);
        // console.log(days);
        return responce.data[prices];
        
    } catch (error) {
        console.error("Api diddnt work"+error);
    }

}

export default coinPrices