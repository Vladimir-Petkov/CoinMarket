import coinController from '../service/coinsController';

function addFavorite (props) {
    if(props.match.params.id) {
        coinController.postCreate(props)
    } else {
        return null
    }
}

export default addFavorite;