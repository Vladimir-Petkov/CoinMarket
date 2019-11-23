const postService = {
    loadData: function() {
        debugger
        return fetch('https://api.coingecko.com/api/v3/coins').then(res => 
        res.json());
    },
    dataDiagrams: function(id, days) {
        return fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`).then(res => 
        res.json());
    }
};

export default postService;