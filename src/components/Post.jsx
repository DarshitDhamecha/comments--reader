import React from 'react'

const Post = () => {


    


    return (
        <>
            <div className='bg-[#4b4a4a] px-3'>
                <div className='row m-0'>
                    <div className='col-md-3 my-3'>
                        <div class="card" >
                            <img src="https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder." class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div className='flex justify-between'>
                                    <span class="badge text-bg-danger">published</span>
                                    <span class="badge text-bg-success">lorem</span>

                                </div>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <hr />
                                <p class="card-text">Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper.</p>
                                <div className='flex justify-between items-center'>
                                    <div className='text-center'>
                                        <span class="badge text-bg-danger">publishe date</span>
                                        <p>25/12/2022 13:10:07</p>
                                    </div>
                                    <div className='h-[40px] w-[1px] bg-[#2e2e2e]'></div>
                                    <div className='text-center'>
                                        <span class="badge text-bg-success">updated date</span>
                                        <p>19/01/2023 08:25:17</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
