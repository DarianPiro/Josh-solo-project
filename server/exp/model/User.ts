import  mongoose from './db'
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: String,
  email: String,
  picture: String,
});

const User =  mongoose.model('User', UserSchema);

export default User;
