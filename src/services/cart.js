async function addItem(userCart, item){
    userCart.push(item)
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name);

    if (index !== 1) {
        userCart.splice(index, 1);
    }
}

async function removeItem(userCart, index){
    if (index >= 0 && index < userCart.lenght)
        userCart.splice(index, 1);

}

async function calculateTotal(userCart) {
    const total = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`Total: ${total}`);
    
}

async function displayCart(userCart){
    console.log('Shopee Cart List \n')
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | ${item.quantity}x 
        Subtotal = ${item.subtotal()}\n`)

        
    })

}


export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displayCart
}