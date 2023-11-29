import TableProducts from '../components/tableProducts';
import { productsServices } from '../services/products.js';

const Products = () => {
    const products = productsServices.getProducts ();

    return (
        <div>
            <h1>Usuarios</h1>

        <TableProducts items= { products }/> 
        </div>
    )
};
// en "TableProducts", "items" es una "prop" declarada como parámetro (entre llaves dentro del parámetro) de la misma función "TableProducts".
// para el correcto funcionamiento de "items", esta misma palabra debe estar declarada como parámetro ( como se especificó antes ) y debe recorrer cada uno de los elementos de la tabla.
// "Products" es un componente container, porque está diseñado para buscar datos y compartirlos con sus componentes hijos.
// Los componentes container no siempre se comportan igual.

export default Products;