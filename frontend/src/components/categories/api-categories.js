const category = async() => {
    try {
        const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json()
        console.log(data)
    }
     catch (error) {
        console.log("error in fetching" + error )
    }
   
}

export {category}