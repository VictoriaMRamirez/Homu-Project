import React, { useEffect, useState } from "react";
import '../../styles/Components/Product.css';
import useFavs from "../../hooks/useFavs";
import useUser from "../../hooks/useUser";
import useFetchAuth from '../../hooks/useFetchAuth';
import {RiHeartAddFill, RiHeartFill} from "react-icons/ri";

export default function Fav({ id, id2, onDelete }) {
    const [products, setProducts] = useState(id);
    const [userId, setUserId] = useState(localStorage.getItem("userId"));
    const { Favs } = useFavs();
    const { addFav } = useUser();
    const { data } = useFetchAuth(`/favourites/allFavourites`);
    const [isFaved, setIsFaved] = useState(<RiHeartAddFill />);
    const [isFav, setIsFav] = useState(false);
    const [state, setState] = useState(false);

    const toggle = () => {
        setIsFav(!isFav);
    }

    const toggleBtn = (e) => {
        setState(prevState => !prevState);
        e.preventDefault();
    }

    const handleDelete = () => {
        onDelete(id2)
    }

    useEffect(() => {
        const productList = data.map(fav => fav.products.id)
        if (products == productList[0] || products == productList[1] || products == productList[2] || products == productList[3]
            || products == productList[4] || products == productList[5] || products == productList[6] || products == productList[7]) {
            setIsFaved(<RiHeartFill />)
            setIsFav(true)
        }
    }, [setIsFav, setIsFaved, products, data]);

    const handleClick = () => {
        Favs({
            products: {
                id: products
            },
            users: {
                id: userId
            }
        })
    }

    return (
        <>
            {
                state ? <button onClick={() => { handleDelete(); toggleBtn(); }} id="favIcon">
                    <span role="img" aria-label="">❤</span>
                </button>
                    :
                    <button type="button" onClick={() => { handleClick(); toggleBtn(); }} id="favIcon">
                        <span role="img" aria-label="">{isFaved}</span>
                    </button>
            }
        </>
    )

}
