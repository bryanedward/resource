import Product from '../models/ProductModels';
import Client from '../models/ClientModels';


export async function newToken (req, res){
    res.send(req.user)
};

export async function createProduct(req, res) {
    //CREAR UN PRODUCTO
    const { nameproduct, description, clientid, urlimg } = req.body;
    await Product.create({
        nameproduct,
        description,
        clientid,
        urlimg
    }, {
            fields: ['nameproduct', 'description', 'clientid', 'urlimg']
        });
    res.json({
        message: 'New Product created'
    });
}


export async function getProducts(req, res) {
    //OBTENER TODOS LOS PRODUCTOS
    const tasks = await Product.findAll({
        attributes: ['id', 'nameproduct', 'description', 'clientid', 'urlimg'],
        order: [
            ['id', 'DESC']
        ]
    });
    res.json({ tasks });
}




export async function getOneProduct(req, res) {
    //OBTENER UN PRODUCTO
    const { id } = req.params;
    const tasks = await Product.findOne({
        where: { id },
        attributes: ['id', 'nameproduct', 'description', 'clientid', 'urlimg']
    });
    res.json(tasks);
}



export async function updateProduct(req, res) {
    //ACTUALIZAR UN PRODUCTO
    const { id } = req.params;
    const { nameproduct, description, clientid, urlimg } = req.body;

    /*const tasks = await Product.findOne({
        attributes: ['nameproduct', 'description', 'clientid', 'id', 'urlimg'],
        where: { id }
    });*/
    const updatedTask = await Product.update({
        nameproduct,
        description,
        clientid,
        urlimg
    }, {
            where: { id }
        });
    res.json({
        message: 'Product updated',
        updatedTask
    });
}



export async function deleteProduct(req, res) {
    //BORRAR PRODUCTO
    const { id } = req.params;
    await Product.destroy({
        where: {
            id
        }
    });
    res.json({ message: 'Product deleted' });
}



export async function getProductByClientid(req, res) {
    //OBTENER PRODUCTO POR ID CLIENTE
    const { clientid } = req.params;
    const tasks = await Product.findAll({
        attributes: ['id', 'clientid', 'nameproduct', 'description', 'urlimg'],
        where: { clientid }
    });
    res.json({product:tasks});
}



export async function getUser(req, res) {
    //FUNCTION USER WITH ALL THE PRODUCTS
    const { clientid } = req.params;

    const cli = await Client.findOne({
        attributes: ['name', 'phone', 'email', 'urlimg'],
        where: { id: clientid }
    });
    const produ = await Product.findAll({
        attributes: ['nameproduct', 'description', 'urlimg'],
        where: { clientid }
    })
    res.json(
         produ
    )
}


export async function getUserDouble(req, res) {
    //FUNCTION USER WITH ALL THE PRODUCTS
    const product = await Product.findAll({
        attributes: ['clientid', 'nameproduct', 'description', 'urlimg']
    });
    const client = await Client.findAll({
        attributes: ['id', 'name', 'urlimg', 'email', 'city']
    })
    res.json({ product, client })
}


export async function getUpdate(req, res) {
    //NEW FUNCTION FIND USER WITH EL CLIENTID
    const { user } = req.params;
    const results = await Client.findOne({
        where: {
            id: user
        }
    })

    res.json(results);


}
