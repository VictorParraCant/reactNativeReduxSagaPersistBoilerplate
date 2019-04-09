import app from './appStore'
import auth from './authStore'
import navigation from './navigationStore'
import products from './productsStore'

const rootReducer = {
  app,
  auth,
  navigation,
  products
}

export default rootReducer
