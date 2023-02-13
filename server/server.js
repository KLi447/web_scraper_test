const axios = require('axios')

const getSingleStockInfo = stock => new Promise((resolve, reject) => {
    if (!stock) { return reject(Error('Stock symbol required')); }
    if (typeof stock !== 'string') { return reject(Error(`Invalid argument type. Required: string. Found: ${typeof stock}`)); }
    
    // original
    //const url = `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${stock}`;    
    // new stock for time period -> chart -> result
    //const url = "https://query2.finance.yahoo.com/v8/finance/chart/AAPL?symbol=AAPL&period1=1644712262&period2=1676251092&interval=3mo";
    //new options -> optionChain -> result
    //const url = "https://query2.finance.yahoo.com/v7/finance/options/AAPL";
    //new modules -> quoteSummary -> result
    // const url = "https://query2.finance.yahoo.com/v10/finance/quoteSummary/AAPL?modules=price%2CsectorTrend"
    return axios.get(url).then((res) => {
        if (!res) {
            return resolve(new Error(`Error retrieving info for symbol ${stock}`));
        }
        console.log(res.data.quoteSummary.result);
        return resolve(res);
    }).catch(err => reject(err));
});

// getSingleStockInfo("AAPL");
