let inventory = [];

function findProductIndex(name) {
    name = name.toLowerCase();
    return inventory.findIndex(product => product.name == name);
}

function addProduct(product) {
    const productName = product.name.toLowerCase();
    const index = findProductIndex(productName);

    if (index != -1) {
        inventory[index].quantity += product.quantity;
        console.log(`${productName} quantity updated`);
    } else {
        inventory.push({ name: productName, quantity: product.quantity });
        console.log(`${productName} added to inventory`);
    }
}

function removeProduct(productName, quantity) {
    productName = productName.toLowerCase();
    let index = findProductIndex(productName);

    if (index === -1) {
        console.log(`${productName} not found`);
        return;
    }

    if (inventory[index].quantity < quantity) {
        console.log(`Not enough ${productName} available, remaining pieces: ${inventory[index].quantity}`);
        return;
    }

    inventory[index].quantity -= quantity;

    if (inventory[index].quantity === 0) {
        inventory.splice(index, 1);
    } else {
        console.log(`Remaining ${productName} pieces: ${inventory[index].quantity}`);
    }
}

