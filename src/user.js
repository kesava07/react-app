import React, { Component } from 'react';
const User = (props) => {
    return (<span>
        <div class="row">
            
                <div class="img-thumbnail">
                    <span>
                        <img src={props.children} alt="Fjords" width="100%" height="236" />
                        <div class="caption">
                            <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                        </div>
                    </span>
        
            </div>
        </div>
    </span>
    )
}
export default User;