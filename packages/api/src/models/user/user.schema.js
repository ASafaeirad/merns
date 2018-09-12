import isEmail from 'validator/lib/isEmail';

export const userSchema = {
  email: {
    type: String,
    unique: [true, 'User already existed!'],
    trim: true,
    required: [true, 'Email is required!'],
    lowercase: true,
    validate: {
      validator: isEmail,
      message: '{VALUE} is not a valid email!',
    },
  },

  name: {
    type: String,
    trim: true,
    maxLength: [256, 'password must be of maximum 256 characters length!'],
  },

  passwordHash: {
    type: String,
    required: [true, 'Password is required!'],
  },
};

export default userSchema;
