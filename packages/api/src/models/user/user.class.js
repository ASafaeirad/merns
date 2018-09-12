import jwt from 'jsonwebtoken';
import randToken from 'rand-token';
import { hash, compare } from '@fem/password';

export class UserClass {
  static async authenticate(email, password) {
    if (email == null || password == null) {
      throw new Error('You need a username and password');
    }

    const user = await this.findOne({ email: email.toLowerCase() });

    if (!user) {
      return null;
    }

    const isAuthenticated = user.authenticate(password);
    return isAuthenticated ? user : null;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
    this.passwordHash = hash(this._password);
  }

  authenticate(password) {
    return compare(password, this.passwordHash);
  }

  toAuthJSON() {
    return {
      token: `Bearer ${this.createToken()}`,
      user: {
        id: this._id,
        email: this.email,
        name: this.name,
      },
      refreshToken: randToken.uid(16),
    };
  }

  createToken() {
    return jwt.sign(
      { id: this._id },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXP },
    );
  }

  toJSON() {
    return {
      id: this._id,
      email: this.email,
      name: this.name,
    };
  }
}
