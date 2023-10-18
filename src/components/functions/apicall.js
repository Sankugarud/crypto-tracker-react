import axios from "axios";

const apicall = async (id) => {
    try {
        const response = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
        
        return response.data;
      } catch (error) {
        console.error("Api diddnt work"+error);
      }
      
}
export default apicall;