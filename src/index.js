import createItem from "./services/item.js";
import * as cartService from "./services/cart.js"

const cart = [];
const wishList = [];

async function main() {
    try {
        console.log('Welcome to your Shopee Cart!');

        const item1 = await createItem('Celular', 20, 3);
        

        const item2 = await createItem('Tenis', 500, 2);
        
        await cartService.addItem(cart, item1);
        await cartService.addItem(cart, item2);


        
        cartService.deleteItem(cart, 'Celular')


        cartService.calculateTotal(cart);
        
        
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
