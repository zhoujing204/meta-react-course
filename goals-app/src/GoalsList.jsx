

export const GoalsList = ({allGoals}) => {
    return (
        <ul>
            {allGoals.map((goal, index) => (
                <li key={goal.id}>
                    {index + 1}. {goal.goal} - <em>{goal.by}</em>
                </li>
            ))}
        </ul>
    );
};