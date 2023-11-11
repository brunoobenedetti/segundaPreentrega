import mongoose from 'mongoose'

export const init = async () => {
  try {
    const URI = 'mongodb+srv://Brunobenedetti:gqR5QK9cZyLi81Pa@cluster0.ieacksr.mongodb.net/ecommerce'
    await mongoose.connect(URI)
    console.log('DB connected')
  } catch (error) {
    console.log('DB conection error:', error.message)
  }
}