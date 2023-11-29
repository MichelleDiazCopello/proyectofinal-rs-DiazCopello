// este archivo se llama "users.js" sin mayúscula (que yo no las uso pero que se pueden utilizar) y sin la "x" ( formato jsx ), porque no va a ser un componente.
// La carpeta "services" está siempre presente y es el lugar a dónde se resuelve la búsqueda de la información que luego voy a usar en los componentes. 
// La carpeta "services" realiza la comunicación entre los componentes y la base de datos.  

import products from "../asyncProducts";

// para tener a todos los productos.
// EJEMPLO DE COMO OBTENER LA INFORMACIÓN DESDE UNA API:
// const getProducts = async () => {
//     const response = await fetch ('https://ejemplodebusquedaenunaapi.com');
// }; 

const getProducts = () => {
    const sProducts = products.map ( ( product ) => ({
        image: product.image,
        name: product.name,
    }));
    return sProducts;
}; 




// para tener un servicio en particular.
const getProduct = ( Id ) => {

};

// para crear un servicio.
const createProduct = ( data ) => {

};

// para remover un servicio.
const removeProduct = ( Id ) => {

};

// para cargar un servicio.
const updateProduct = ( Id, data ) => {

};

// Por ejemplo, para todo lo anterior sirve el espacio "services": si se tratara, por ejemplo, de una autenticación, podría tener "login", "signup", "changepassword", etc.

export const productsServices = {
    getProducts,
    getProduct,
    createProduct,
    removeProduct,
    updateProduct,
};

// La diferencia entre "export" y "export default" es que, al primero se le especifica un nombre y para ser importado, DEBE LLAMARSE AL NOMBRE ENTRE LLAVES. Mientras que el segundo es indistinto como se lo llame y se importa simplemente tipeando el nombre y colocando la ruta.