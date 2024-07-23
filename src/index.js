import createItem from "./services/item.js";

const cart = [];

async function main() {
    try {
        console.log('Welcome to your Shopee Cart!');

        const item1 = await createItem('celular', 20, 3);
        

        const item2 = await createItem('Tenis', 500, 2);
        

        console.log(item1.subtotal()); // Call subtotal as a function
        console.log(item2.subtotal()); // Call subtotal as a function
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
