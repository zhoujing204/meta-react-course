import React, { useState } from "react";

function SimpleSelect() {
    const [selectedFruit, setSelectedFruit] = useState("apple");
    const handleChange = (e) => {
        setSelectedFruit(e.target.value);
        console.log(e.target.value);
    }

    return(
        <div>
            <select value={selectedFruit} onChange={handleChange}>
                <option value="apple">Apple</option>
                <option value="orange">Orange</option>
                <option value="banana">Banana</option>
            </select>
        </div>
    )

}

export default SimpleSelect;