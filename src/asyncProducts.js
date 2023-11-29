const products = [
    { 
        Id: 1, 
        name: "Almendras", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Las almendras son un tipo de fruto seco con muchos beneficios para la salud. Son una excelente fuente de vitamina E, magnesio y fibra. Las almendras también son ricas en proteínas y grasas saludables, lo que las convierte en una excelente opción de snack.", 
        price: 5.99, 
        stock: 100 
    },
    { 
        Id: 2, 
        name: "Anacardos", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Los anacardos son un tipo de fruto seco que son ricos en nutrientes. Son una buena fuente de proteínas, grasas saludables y minerales como el cobre, el magnesio y el zinc. Los anacardos también son una buena fuente de antioxidantes, que pueden ayudar a proteger contra enfermedades.", 
        price: 6.99, 
        stock: 100 
    },
    { 
        Id: 3, 
        name: "Pistachos", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Los pistachos son un tipo de fruto seco que están llenos de nutrientes. Son una buena fuente de proteínas, fibra y grasas saludables. Los pistachos también son ricos en antioxidantes, que pueden ayudar a proteger contra enfermedades.", 
        price: 7.99, 
        stock: 100 
    },
    { 
        Id: 4, 
        name: "Nueces", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Las nueces son un tipo de fruto seco que son ricas en nutrientes. Son una buena fuente de proteínas, grasas saludables y minerales como el cobre y el magnesio. Las nueces también son ricas en antioxidantes, que pueden ayudar a proteger contra enfermedades.", 
        price: 4.99, 
        stock: 100 
    },
    { 
        Id: 5, 
        name: "Avellanas", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Las avellanas son un tipo de fruto seco que están llenos de nutrientes. Son una buena fuente de proteínas, fibra y grasas saludables. Las avellanas también son ricas en antioxidantes, que pueden ayudar a proteger contra enfermedades.", 
        price: 8.99, 
        stock: 100 
    },
    { 
        Id: 6, 
        name: "Pecanas", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Las pecanas son un tipo de fruto seco que son ricas en nutrientes. Son una buena fuente de proteínas, grasas saludables y minerales como el cobre y el magnesio. Las pecanas también son ricas en antioxidantes, que pueden ayudar a proteger contra enfermedades.", 
        price: 9.99, 
        stock: 100 
    },
    { 
        Id: 7, 
        name: "Nueces de Brasil", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Las nueces de Brasil son un tipo de fruto seco que están llenos de nutrientes. Son una buena fuente de proteínas, fibra y grasas saludables. Las nueces de Brasil también son ricas en antioxidantes, que pueden ayudar a proteger contra enfermedades.", 
        price: 10.99, 
        stock: 100 
    },
    { 
        Id: 8, 
        name: "Macadamias", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Las macadamias son un tipo de fruto seco que son ricas en nutrientes. Son una buena fuente de proteínas, grasas saludables y minerales como el cobre y el magnesio. Las macadamias también son ricas en antioxidantes, que pueden ayudar a proteger contra enfermedades.", 
        price: 11.99, 
        stock: 100 
    },
    { 
        Id: 9, 
        name: "Cacahuetes", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "Los cacahuetes son un tipo de legumbre que están repletas de nutrientes. Son una buena fuente de proteínas, fibra y grasas saludables. Los cacahuetes también tienen un alto contenido de antioxidantes, que pueden ayudar a proteger contra las enfermedades.", 
        price: 3.99, 
        stock: 100 
    },
    { 
        Id: 10, 
        name: "Mix de Frutos Secos", 
        image: "https://i.imgur.com/5JjvZ.jpg", 
        description: "El mix de frutos secos es una combinación de diferentes tipos de frutos secos que están repletos de nutrientes. Son una buena fuente de proteínas, fibra y grasas saludables. El mix de frutos secos también tiene un alto contenido de antioxidantes, que puede ayudar a proteger contra las enfermedades.", 
        price: 12.99, 
        stock: 100 
    },
]

export default products;

export const getProducts = () => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve (products)
        }, 500)
    })
}

export const getProductByID = ( productId ) => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve ( products.find (prod => prod.id === productId))
        }, 500);
    })
}

export const getProductByCategory = ( productCategory ) => {
    return new Promise ( (resolve) => {
        setTimeout ( () => {
            resolve ( products.find (prod => prod.category === productCategory))
        }, 500);
    })
}