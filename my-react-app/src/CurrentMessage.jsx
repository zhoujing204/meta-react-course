function CurrentMessage() {
    const day = new Date().getDay();
    const condition = day >= 1 && day <= 5;
    return (
        <div>
            {condition ? (
               <h1>Workdays</h1>
            ) : (
                <h1>Weekends</h1>
            )}
        </div>
    );

}

export default CurrentMessage;