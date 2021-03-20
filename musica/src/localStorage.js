class LocalStorage {
    static getFavouritesList() {
        return localStorage.getItem('favouriteProducts');
    }

    static setFavouritesList(params) {
        const products = LocalStorage.getFavouritesList() || [];
        const {id, ...rest} = params;

        if (!products.length) {
            localStorage.setItem('favouriteProducts', JSON.stringify([{...params}]));
        } else {
            const savedProducts = JSON.parse(products);
            const savedProductIndex = savedProducts.findIndex(item => item.id === id);

            if (savedProductIndex !== -1) {
                savedProducts.splice(savedProductIndex, 1);
            } else {
                savedProducts.push({...params});
            }
            localStorage.setItem('favouriteProducts', JSON.stringify(savedProducts))
        }
    }

    static getCartList() {
        return localStorage.getItem('inCart');
    }

    static setCartList(params) {
        const products = LocalStorage.getCartList() || [];
        const {id, title, artist, rating, discount, price, src} = params;

        if (!products.length) {
            const product = {id, title, artist, rating, price: discount || price, src, total: 1}
            localStorage.setItem('inCart', JSON.stringify([product]));
        } else {
            const savedProducts = JSON.parse(products);
            const savedProduct = savedProducts.find(item => item.id === id);

            if (savedProduct) {
                savedProduct.total++;
            } else {
                savedProducts.push({id, title, artist, rating, price: discount || price, src, total: 1});
            }
            localStorage.setItem('inCart', JSON.stringify(savedProducts))
        }
    }

    static deleteFromCart(id) {
        const cartProducts = JSON.parse(LocalStorage.getCartList());
        const targetItemIndex = cartProducts.findIndex(item => item.id === id);
        if (targetItemIndex !== -1) {
            cartProducts.splice(targetItemIndex, 1);
            localStorage.setItem('inCart', JSON.stringify(cartProducts));
        }
    }

    static clearCart() {
        localStorage.removeItem('inCart');
    }
}

export default LocalStorage;