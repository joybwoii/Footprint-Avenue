import React from 'react'
import './Cover.css'

function Cover() {
    return (
        <div>
            <div className='cover-img'>
                <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <div className='inner-img'>
                    <h3>Love the Planet we walk on</h3>
                    <h6>Bibendum fermentum, aenean donec pretium aliquam <br />blandit tempor imperdiet arcu arcu ut nunc in dictum <br />mauris at ut.</h6>
                    <button>SHOP MEN</button>
                    <button>SHOP WOMEN</button>
                </div>
            </div>
        </div>
    )
}

export default Cover
