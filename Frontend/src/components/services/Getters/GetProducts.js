import useFetch from '../../../hooks/useFetch';

function GetProducts() {
    const { data, isLoaded } = useFetch(`/products/allProducts`);

    const ids = data.map(product => {
        return (
            product.id
        )
    })

    const maxId = Math.max(...ids);
    const maxIdPlus = maxId + 1;

    return (
        
        localStorage.setItem('maxIdProduct', maxIdPlus)
    )
}

export default GetProducts;