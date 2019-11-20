const postService = {
    load: function() {
        debugger
        return fetch('https://api.coingecko.com/api/v3/coins').then(res => 
        res.json());
    }
};

export default postService;