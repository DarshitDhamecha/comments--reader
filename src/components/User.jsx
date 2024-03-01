import React, { useEffect, useState } from 'react'

const User = () => {

    const [userData, setUserData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let url = `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=3`;
                let urlData = await fetch(url);
                let finalData = await urlData.json();
                console.log(finalData);
                setUserData(finalData);
            } catch (error) {
                console.log("not working", error);
            }
            setLoading(false);
        }
        fetchData();
    }, [currentPage]);


    const nextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    }
    const prevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    }

    return (
        <>
        <h2 className='fs-3 text-center mt-3'>Top Users</h2>
        <div className='w-100 bg-gray-400 h-[2px] my-3'></div>
            <div className='row justify-center w-100 m-0 px-3 my-0'>
                {loading ? (
                    <button class="btn btn-primary w-fit" type="button" disabled>
                        <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
                        <span role="status">Loading...</span>
                    </button>
                ) : (
                    <>
                        {userData.map(user => (
                            <div key={user.id} className='col-md-4 my-3'>
                                <div className="card">
                                    <div className="card-header">
                                        {user.name}
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">{user.email}</li>
                                        <li className="list-group-item">{user.address.city} - {user.address.zipcode}</li>
                                        <li className="list-group-item">{user.company.name}</li>
                                        <li className="list-group-item">{user.website}</li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </>
                )}
            </div>
            <div className='w-100 justify-evenly items-center flex mb-3'>
                <button className='btn btn-danger rounded-2' onClick={prevPage} disabled={currentPage === 1}>Previous</button>
                <button className='btn btn-success rounded-2' onClick={nextPage}>Next</button>
            </div>
        </>
    )
}

export default User
