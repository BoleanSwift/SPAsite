class CartItem {
    /**
     * @param {string} productId
     * @param {number} quantity
     */
    constructor(productId, quantity) {
        if (quantity <= 0) {
            throw new RangeError('Quantity has to be positive')
        }
        if (quantity % 1 !== 0) {
            throw new RangeError('Quantity has to be an integer')
        }

        this.productId = productId
        this.quantity = quantity
    }
}

export default CartItem
