export default class RestoService {
    url = 'http://localhost:3000/menu'
    getMenuItems = async () => {
        const response = await fetch(this.url)
        if (!response.ok) {
            throw new Error('server is dead')
        }
        const result = await response.json()
        return result
    }
}