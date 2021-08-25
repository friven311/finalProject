export default class RestoService {
    getMenuItems () {
        return fetch('http://localhost:3000/menu')
            .then((response) => {
                return response.json();
              })

    }
}