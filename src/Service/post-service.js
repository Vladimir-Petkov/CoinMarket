const postService = {
    loadData: function() {
        return fetch('https://api.coingecko.com/api/v3/coins').then(res => 
        res.json());
    },
    loadDiagrams: function(id, days) {
        return fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`).then(res => 
        res.json());
    }
};

export default postService;