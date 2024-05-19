import React, { useState } from 'react'
import './style.scss'
const SwitchTabs = ({ data, onTabChange }) => {
    const [selectedPair, setSelectedPair] = useState(0)
    const [left, setLeft] = useState(0)
    const activeTab = (tab, index) => {
        console.log(tab)
        setLeft(index * 100)
        setTimeout(() => {
            setSelectedPair(index)
        }, 300)
        onTabChange(tab, index)
    }

    return (
        <div className='switchingTabs'>
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span
                        className={`tabItem ${selectedPair === index ? 'active' : ""}`}
                        key={index}
                        onClick={() => activeTab(tab, index)}>
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left }}></span>
            </div>
        </div>
    )
}

export default SwitchTabs