import { useReducer } from "react";

function ExpenseTracker() {
    const initialState = { wallet: 100};

    function reducer(state, action) {
        switch (action.type) {
            case 'buy_ingredient':
                return {wallet: state.wallet - 10};
            case 'sell_dish':
                return {wallet: state.wallet + 20};
            case 'celebrity_visit':
                return {wallet: state.wallet + 5000};
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Wallet: ${state.wallet} </p>

            <button onClick= {() => dispatch({type: 'buy_ingredient'})}>
                Buy Ingredient (-$10)
            </button>

            <button onClick= {() => dispatch({type: 'sell_dish'})}>
                Sell Dish (+$20)
            </button>

            <button onClick= {() => dispatch({type: 'celebrity_visit'})}>
                Celebrity Visit (+$5000)
            </button>
        </div>
    );

}

export default ExpenseTracker;