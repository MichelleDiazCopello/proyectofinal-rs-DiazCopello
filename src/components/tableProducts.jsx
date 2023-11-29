// import Product from "./product";

const TableProducts = ({ items }) => {
    
    const renderItems = () => {
        const res = [];
        for ( let i = 0; i < items.length; i++ ) {
            res.push (
                    <tr>
                    <td>
                        <img src= { items[i].image } alt= "imagen" height= { 50 }/>
                    </td>
                    <td>
                        { items[i].name }
                    </td>
                </tr>
                // <Product image= { items[i].image } name= { items[i].name} /> // esta manera es la adecuada, pero por alguna razón el sistema no me la toma.
            );
        };

        // con "for", se simplifica la estructura del código a través de la repetición generada por el mismo "for".
        // esto también se puede realizar con "foreach" de la siguiente manera:
        // items.foreach ( item => {
        //     res.push (
        //             <tr>
        //             <td>
        //                 <img src= "" alt=""/>
        //             </td>
        //             <td>
        //                 Nombre
        //             </td>
        //         </tr>
        //     )
        // });

        return res;
    }; // "renderItems" es un componente de presentación, porque está diseñado para mostrar datos (no para procesarlos).

    return (
        <table border= {1}>
            <thead>
                <tr>
                    <th>Imagen
                    </th>
                    <th>Nombre</th>
                </tr>
            </thead>
            <tbody>
                {renderItems ()}
            </tbody>
        </table>
    )
}
export default TableProducts;