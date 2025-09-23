import { useState } from "react";

function GoalForm(props) {
    const [formData, setFormData] = useState({
        goal: "",
        by: ""
    });

    const changeHandler = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.onAddGoal(formData);
        setFormData({
            goal: "",
            by: ""
        });
    };

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="goal">Goal</label>
                <input
                    type="text"
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    placeholder="Enter the goal"
                    onChange={changeHandler}
                />
            </div>
            <div>
                <label htmlFor="by">By</label>
                <input
                    type="text"
                    id="by"
                    name="by"
                    value={formData.by}
                    placeholder="By when?"
                    onChange={changeHandler}
                />
            </div>
            <button type="submit">Add Goal</button>
        </form>
    );

}

export default GoalForm;
