import React from 'react'

function Card2(props) {
    return (
        <div style={props.mystyle}>
            <div className="gridCaerd" >
                <div className={`cardgd  bg-${props.mystyle === "light" ? "red" :"blue" } `}style={props.mystyle}>
                    <ul id='one'>
                        <li> <span  className='card-text2' > Multiple Shop Layout Options </span></li>
                        <li> <span  className='card-text2' > Multiple Product Page Variations </span></li>
                        <li> <span  className='card-text2' > Complete Order Workflow: Cart + Checkout </span></li>
                        <li> <span  className='card-text2' > Shop Customer Account Pages </span></li>
                        <li> <span  className='card-text2' > Dashboard (CMS) Pages (Coming soon) </span></li>
                        <li> <span  className='card-text2' > Electronics, Fashion, Grocery and Furniture Demos </span></li>
                        <li> <span  className='card-text2' > Blog Pages: Blog Layouts + Single Articles </span></li>
                        <li> <span  className='card-text2' > Help Center / Support Pages </span></li>
                        <li> <span  className='card-text2' > Secondary Pages: About, Contacts, 404, etc. </span></li>
                        <li> <span  className='card-text2' > 60+ Flexible Components (UI Kit) </span></li>
                    </ul>
                </div>
                <div className="cardgd2"style={props.mystyle}>
                    <ul id='twe'>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <br />
            <b><br /></b>
            <b><br /></b>
            <b><br /></b>
        </div>
    )
}

export default Card2
