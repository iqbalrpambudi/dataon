import React from 'react';

function Card2(props) {
    return (
        <div className='mb-4'>
            <div className="card-content-2">
                <div className="card-bg-2">
                    <img src="https://picsum.photos/150/150" alt="" />
                </div>
                <div className="d-flex flex-column">
                    <div className="profile d-flex">
                        <div className="profile-name ps-2">
                            <p>18 Nov</p>
                            <h5>Iqbal Rilo Pambudi</h5>
                        </div>
                        <img src="https://picsum.photos/50/50" alt="" />
                    </div>
                    <div className="profile-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facilis rem excepturi dolore optio debitis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card2;