import React from 'react'
import { Link } from 'gatsby'

const Menu = () =>  (
    <div style={{ 
        background: '#f4f4f4',
        paddingTop: '10px',
    }}>
        <ul style={{
            listStyle: 'none',
            display: 'flex',
            justifyContent: 'space-evenly'
        }}>
            <li>
                {/* 스타일 적용대상이 여러개이므로 layout.css에서 a 태그 관련 수정 */}
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about/'>About</Link>
            </li>
            <li>
                <Link to='/services'>Services</Link>
            </li>
            <li>
                <Link to='/blog'>Blog</Link>
            </li>
            {/* 
                <li>
                    <Link to='/using-typescript'>Using TypeScript</Link>
                </li> 
            */}
        </ul>
    </div>
)

export default Menu
