import mongoose from 'mongoose';
import { userSchema } from './user.schema';
import { UserClass } from './user.class';

const UserSchema = new mongoose.Schema(userSchema, { timestamps: true });

UserSchema.path('passwordHash').validate(
  function () {
    if (this._password && this._password.length < 8) {
      throw new Error('Password must be of minimum 8 chars length!');
    }

    if (this.isNew && !this._password) {
      this.invalidate('password', 'required');
    }
  },
  'Password is not valid',
  'Password is not valid',
);

UserSchema.loadClass(UserClass);

delete mongoose.connection.models.User;
export const User = mongoose.model('User', UserSchema);
