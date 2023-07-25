const CustomError = require('../services/errors/CustomError.js')
const EErrors = require('../services/errors/enumsErrors.js');
const generateProductErrorInfo = require('../services/errors/infoErrors.js')

const postProductsMock = (req, res) => {
    let ejemplo = 100;    

    const productoFailed = [
        {
            _id: 'd944b76a-7a06-419b-8227-d5febe7adb8f',
            title: undefined,
            description: 'Nice wine.',
            price: 1768,
            status: true,
            stock: 696,
            category: 'Wines',
            thumbnail: 'https://loremflickr.com/640/480/wine'
        },
        {
            _id: 'd944b76a-7a06-419b-8227-d5febe7adb8f',
            title: "Patagonia",
            description: 'Best beer.',
            price: undefined,
            status: true,
            stock: 225,
            category: 'Beers',
            thumbnail: 'https://loremflickr.com/640/480/beer'
        }
    ];
    const productMock = productoFailed
   
    const successCant = 0;

    const errorsMap = productMock.map((a) => {

        if (!a.title || !a.price) {

            CustomError.createError({
                name: "Product Creation error",
                cause: generateProductErrorInfo(a),
                message: "Error trying to create product",
                code: EErrors.EMPTY_FIELD_ERROR
            })
        } else {
            successCant += 1

            res.send({ status: "success", payload: successCant })
        }

    });
    console.log(errorsMap)


    res.send({ status: "success", payload: errorsMap })

};

const getProductsMock = (req, res) => {
    res.send({ status: "success", payload: "beer" })
}

module.exports = { getProductsMock, postProductsMock }