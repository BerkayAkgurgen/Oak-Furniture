class Storage {
    static addCartToStorage(product) {
        let storage = this.getCartFromStorage()
        let productObject = {
            id: product.id,
            title: product.title,
            price: product.price,
            amount: product.amount,
            image: product.image
        }
        storage.push(productObject)
        localStorage.setItem('cartProduct', JSON.stringify(storage))
    }
    
    static getCartFromStorage() {
        return localStorage.getItem('cartProduct') ? JSON.parse(localStorage.getItem('cartProduct')) : []
    }
    
    static addFavoriteToStorage(product) {
        let storage = this.getFavoriteFromStorage()
        let productObject = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        }
        storage.push(productObject)
        localStorage.setItem('favoriteProduct', JSON.stringify(storage))
    }

    static getFavoriteFromStorage() {
        return localStorage.getItem('favoriteProduct') ? JSON.parse(localStorage.getItem('favoriteProduct')) : []
    }
}