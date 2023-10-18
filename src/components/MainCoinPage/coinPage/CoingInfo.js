 const CoingInfo = (setData, data) => {
    setData({
      market_cap_change_24h: data.market_data.market_cap_change_percentage_24h,
      image: data.image.large,
      id: data.id,
      name: data.name,
      symbol: data.symbol,
      desc: data.description.en,
      total_volume: data.market_data.total_volume.usd,
      current_price: data.market_data.current_price.usd,
      market_cap: data.market_data.market_cap.usd,
      price_change_percentage_24h: data.market_data.price_change_24h
    });
  };
  export default CoingInfo