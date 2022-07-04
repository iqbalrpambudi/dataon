import React from 'react';

function Card1(props) {
    return (
        <div className='mb-4'>
            <div className="card-bg-1">
                <img src="https://picsum.photos/300/150" alt="" />
            </div>
            <div className="card-content-1">
                <div className="d-flex flex-column">
                    <div className="profile d-flex ">
                        <img src="https://picsum.photos/75/75" alt="" />
                        <div className="profile-name ps-2">
                            <h5>Iqbal Rilo Pambudi</h5>
                            <p>18 Nov</p>
                        </div>
                    </div>
                    <div className="profile-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, facilis rem excepturi dolore optio debitis.</p>
                    </div>
                    <div className="profile-footer">
                        <div className="share">
                            <small>share</small>
                        </div>
                        <div className="comment">
                            <small>comment 156</small>
                            <small>likes 14k</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card1;