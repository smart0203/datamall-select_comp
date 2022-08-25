import React from 'react';
import './App.css';
import SelectComponent from './SelectComponent';
function App() {
    const location = [
        {
            id: 0,
            title: 'New York',
            selected: false,
            key: 'location'
        },
        {
            id: 1,
            title: 'Dublin',
            selected: false,
            key: 'location'
        },
        {
            id: 2,
            title: 'California',
            selected: false,
            key: 'location'
        },
        {
            id: 3,
            title: 'Istanbul',
            selected: false,
            key: 'location'
        },
        {
            id: 4,
            title: 'Izmir',
            selected: false,
            key: 'location'
        },
        {
            id: 5,
            title: 'Oslo',
            selected: false,
            key: 'location'
        }
    ];
    return (
        <div className="App">
            <SelectComponent 
                title="Select location"
                list={location}
            />
        </div>
    );
}

export default App;
