import axios from 'axios'

export const checkImage = (url) => {
    axios.get(url).then(function (response) {
        if (response.status == 200) {
            return url
        } else {
            return '/icons/broken.png'
        }
    })
}
