const {faker} = require('@faker-js/faker') 
const products = [];
const genManyProducts = (quantity) => {
    for (let i = 0; i < quantity; i++) {
        products.push(generateProduct())
    }
    return products
}

const generateProduct = () => {
    return {
        id: faker.datatype.uuid(),
        title: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: Number(faker.commerce.price(500,3000,0)),
        status: true,
        stock: faker.datatype.number(),
        category: faker.commerce.department(),        
        thumbnail: faker.image.imageUrl(),
    }
}

module.exports = {genManyProducts}