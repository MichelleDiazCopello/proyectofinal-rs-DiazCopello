const Product = ( image, name ) => {
    return (
        <tr>
        <td>
            <img src= { image } alt= "imagen" height= { 50 }/>
        </td>
        <td>
            { name }
        </td>
        </tr>
    );
};

export default Product;