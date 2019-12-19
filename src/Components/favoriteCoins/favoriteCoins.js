import coinController from '../service/coinsController';

function addFavorite (props) {
    if(props.match.params.id) {
        console.log(props)
        coinController.postCreate(props)
    } else {
        return null
    }
}

export default addFavorite;