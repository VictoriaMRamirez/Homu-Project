import React from 'react';
import useFetchAuth from '../../hooks/useFetchAuth';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MyFavoriteCard from './MyFavoriteCard';
import MyBookingsEmpty from './MyBookingsEmpty';

function MyFavorites() {

    const authToken = localStorage.getItem("user");

    const deleteMethod = async (id2) => {
        const response = await fetch(`http://3.133.114.51:8086/favourites/deleteFavourite/${id2}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${authToken}`,
                "content-type": "application/json",
            },
        });
        const datas = await response.json();
        deleteMethod();
    }

    const { data, isLoaded } = useFetchAuth(`/favourites/allFavourites`);
    const productList = data.map((favs) => {

        if (favs.users.id === JSON.parse(localStorage.getItem("userId"))) {
            return (
                <MyFavoriteCard
                    onDelete={deleteMethod}
                    id2={favs.id}
                    key={favs.products.id}
                    id={favs.products.id}
                    url={favs.products.url}
                    rating={favs.products.rating}
                    review={favs.products.review}
                    location={favs.products.location}
                    map_url={favs.products.map_url}
                    watch={favs.products.watch}
                    title={favs.products.title}
                    description={favs.products.description}
                    categories={favs.products.categories.title}
                />
            )
        }
    });

    let favsUser = [];

    const favsListFilter = data.map(favs => {
        if (favs.users.id === JSON.parse(localStorage.getItem("userId")))
            favsUser.push(favs.id);
    })

    return (
        <>
            <Header />
            <div className="bookingsContainer">
                <h3 className="title bookingTitle">Mis favoritos</h3>
                {favsUser.length > 0 ? <section className='myBooking'>{productList}</section> :
                    <section className="emptyBookingList">
                        <MyBookingsEmpty />
                    </section>}
            </div>
            <Footer />
        </>
    )
}

export default MyFavorites;