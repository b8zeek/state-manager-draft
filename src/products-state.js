import { initStore } from './store'

const configureStore = () => {
    const actions = {
        INCREMENT: (curState, newProduct) => ({
            products: [ ...curState.products, newProduct ]
        })
    }

    initStore(actions, {
        counter: 1
    })
}