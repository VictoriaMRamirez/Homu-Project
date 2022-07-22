import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Categories from '../Cards/Categories';
import Products from '../Cards/Products';
import '../../styles/Components/Home.css';
import useFetchAuth from '../../hooks/useFetchAuth';
function Home() {
    const { data, isLoaded } = useFetchAuth(`/users/allUsers`);

    const userId = data.map((users) => {
        if (users.email === localStorage.getItem("username")) {
            return (
                localStorage.setItem("userId", users.id),
                localStorage.setItem("name", users.name),
                localStorage.setItem("surname", users.surname),
                localStorage.setItem("cityUser", users.city)
            )
        }
    })

    return (
        <div className='home_container'>
            {userId}
            <section className='home_header'>
                <Header />
            </section>

            <section className='home_body'>
                <Navbar />
            </section>

            <section className='categories_body'>
                <Categories />
            </section>

            <section className='cards_body'>
                <Products />
            </section>

            <section className='home_footer'>
                <Footer />
            </section>
        </div>
    )
}

export default Home;