import React from 'react'

const Tabs = (props) => {
    const {tabLengthProp, selectedTabProp, setSelectedTabProp} = props;

    const tabStyle = {
        backgroundColor: 'red',
        border: '2px solid'
    }

    const clickTab = (clickedTab) => {
        setSelectedTabProp(clickedTab)
    };

    return (
        <div>
            {tabLengthProp.map((tab, index) => {
                const tabNum= index + 1; 
                return  <span style={selectedTabProp === index ? tabStyle : null} onClick={() => clickTab(index)}>Tab {tabNum}</span>;
            })}
        </div>
    )
}

export default Tabs