import React, { useEffect, useState } from 'react'
import './products.css'
import brandimg from '../../assets/pexels-victoria-rain-3315291.jpg'
import { Link } from 'react-router-dom'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../../firebase.config'

const Products = () => {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "category"));
        const unsub = onSnapshot(q, (querySnapshot) => {
            let products = [];
            querySnapshot.forEach((doc) => {
                products.push({ ...doc.data(), id: doc.id });
            });
            setCategory(products);
        })

        return () => { unsub(); }
    }, [])
    return (
        <div>

            <main>
                {
                    category.map((e) => {
                        return (<div class="card">
                            <img src={e.img} alt="" />
                            <div class="card-content">
                                <h2>
                                    {e.name}
                                </h2>

                                <Link to={"/brand/"+e.id} >
                                    Explore
                                </Link>
                            </div>
                        </div>)
                    })
                }
            </main>
        </div>
    )
}

export default Products