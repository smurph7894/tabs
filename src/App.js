import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';

function App() {
    const [selectedTab, setSelectedTab] = useState(0);

    const tabLength = [1,1,1,1,1];

    return (
        <div>
            <Tabs 
                tabLengthProp={tabLength} 
                selectedTabProp={selectedTab} 
                setSelectedTabProp={setSelectedTab}
            />
            <div>
            {tabLength.map((tab, index) => {
                const tabNum= index + 1; 
                return selectedTab===index ? <textarea value={`Tab ${tabNum} content is showing here.`} /> : null
            })}
                
            </div>
        </div>
    );
}

export default App;
