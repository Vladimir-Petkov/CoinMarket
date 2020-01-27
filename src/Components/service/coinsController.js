import requester from './requester';

const coinController = function () {

    const postCreate = function (props) {
        const payload = {
            coinId: props.match.params.id,
        };

        requester.post('coins', 'appdata', 'Kinvey', payload)
            .then(requester.handler)
            .then(() => {
                window.location.pathname = '/';
            });
    };

    

    // const getEdit = function (context) {
    //     helper.addHeaderInfo(context);
    //     const movieId = context.params.id;

    //     requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
    //         .then(helper.handler)
    //         .then((singleMovie) => {
    //             context.movie = singleMovie;

    //             context.loadPartials({
    //                 header: "./views/common/header.hbs",
    //                 footer: "./views/common/footer.hbs",
    //             }).then(function () {
    //                 this.partial('./views/movies/edit.hbs');
    //             });
    //         });

    // };

    // const postEdit = (context) => {
    //     const movieId = context.params.id;

    //     const payload = {
    //         title: context.params.title,
    //         imageUrl: context.params.imageUrl,
    //         description: context.params.description,
    //         genres: context.params.genres,
    //         tickets: Number(context.params.tickets)
    //     };

    //     requester.put(`movies/${movieId}`, 'appdata', 'Kinvey', payload)
    //         .then(helper.handler)
    //         .then(() => {
    //             context.redirect('#/movie/myMovies');
    //         });
    // };

    // const getDelete = function (context) {
    //     helper.addHeaderInfo(context);
    //     const movieId = context.params.id;

    //     requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
    //         .then(helper.handler)
    //         .then((singleMovie) => {
    //             context.movie = singleMovie;

    //             context.loadPartials({
    //                 header: "./views/common/header.hbs",
    //                 footer: "./views/common/footer.hbs",
    //             }).then(function () {
    //                 this.partial('./views/movies/delete.hbs');
    //             });
    //         });
    // };

    // const postDelete = function (context) {
    //     const movieId = context.params.id;

    //     requester.del(`movies/${movieId}`, 'appdata', 'Kinvey')
    //         .then(helper.handler)
    //         .then(() => {
    //             context.redirect('#/')
    //         });
    // };

    // const getDetails = function (context) {
    //     helper.addHeaderInfo(context);
    //     const movieId = context.params.id;

    //     requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
    //         .then(helper.handler)
    //         .then((singleMovie) => {
    //             context.movie = singleMovie;

    //             context.loadPartials({
    //                 header: "./views/common/header.hbs",
    //                 footer: "./views/common/footer.hbs",
    //             }).then(function () {
    //                 this.partial('./views/movies/details.hbs');
    //             });
    //         });
    // };

    // const buyTicket = function (context) {
    //     const movieId = context.params.id;

    //     requester.get(`movies/${movieId}`, 'appdata', 'Kinvey')
    //         .then(helper.handler)
    //         .then((movieById) => {
    //             movieById.tickets--;

    //             return requester.put(`movies/${movieId}`, 'appdata', 'Kinvey', movieById)
    //         })
    //         .then(helper.handler)
    //         .then(() => {
    //             context.redirect('#/cinema');
    //         });
    // };

    return {
        postCreate,
        // getEdit,
        // postEdit,
        // getDelete,
        // postDelete,
        // getDetails,
        // buyTicket
    };
}();

export default coinController;