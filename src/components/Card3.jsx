import React from 'react';

function Card3(props) {
    return (
        <div className='mb-4'>
            <div className="card-content-3">
                <div className="d-flex flex-column">
                    <div className="profile d-flex">
                        <img src="https://picsum.photos/50/50" alt="" />
                        <div className="profile-name ps-2">
                            <p>18 Nov</p>
                            <h5>Iqbal Rilo Pambudi</h5>
                        </div>
                    </div>
                    <div className="profile-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facilis rem excepturi dolore optio debitis.</p>
                    </div>
                </div>
                <div className="card-bg-3">
                    <img src="https://picsum.photos/150/150" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Card3;