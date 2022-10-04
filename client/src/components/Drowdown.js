import React from 'react'
import { Link } from 'react-router-dom'

export default function Drowdown() {
    return (
        <div className='Navbar'>
            <div className='logo'>AN</div>
            <div className='Menu'>
                <div className='Production all'>
                    <span className='chip'><Link to='/'>Production</Link></span>
                </div>
                <div className='Production subassembly'>
                    <span className='chip'><Link to='/subassembly'>Subassembly</Link></span>
                </div>
                <div className='Production paint'>
                    <span className='chip'><Link to='/paint'>Paint</Link></span>
                </div>
                <div className='Production finalassembly'>
                    <span className='chip'><Link to='/final'>Final</Link></span>
                </div>
            </div>
        </div>
    )
}
