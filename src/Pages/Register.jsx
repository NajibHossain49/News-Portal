import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const Register = () => {
  const { signUp } = useContext(AuthContext);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    photoUrl: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Success state
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get all form values using e.target.name.value
    const name = e.target.name.value;
    const photoUrl = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const terms = e.target.terms.checked;

    // Validate form before submitting
    const newErrors = {};

    if (!name) {
      newErrors.name = 'Name is required';
    }

    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (!terms) {
      newErrors.terms = 'You must accept the terms and conditions';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If validation passes, attempt to sign up the user
    signUp(email, password)
      .then((userCredential) => {
        // Successfully signed up
        const user = userCredential.user;
        console.log(user);

        // Clear the form data and show success message
        setFormData({
          name: '',
          photoUrl: '',
          email: '',
          password: '',
          confirmPassword: '',
          terms: false,
        });

        setIsSuccess(true);  // Set success state to true

        // Optionally, reset error state in case the user tries to sign up again
        setErrors({});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // Handle specific Firebase error codes
        if (errorCode === 'auth/email-already-in-use') {
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: 'This email is already in use.',
          }));
        } else {
          console.error(errorMessage);
        }
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-2xl border">
      <h2 className="text-2xl mb-6 text-center">Sign Up</h2>

      {isSuccess && (
        <div className="mb-4 text-green-500 text-center">
          <p>You've successfully signed up! Welcome!</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Name:</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block mb-1">Photo URL:</label>
          <input
            type="text"
            name="photoUrl"
            className="w-full p-2 border rounded"
            value={formData.photoUrl}
            onChange={(e) => setFormData({ ...formData, photoUrl: e.target.value })}
          />
        </div>

        <div>
          <label className="block mb-1">Email:</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block mb-1">Password:</label>
          <input
            type="password"
            name="password"
            className="w-full p-2 border rounded"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
        </div>

        <div>
          <label className="block mb-1">Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full p-2 border rounded"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="terms"
            id="terms"
            checked={formData.terms}
            onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the terms and conditions
          </label>
        </div>
        {errors.terms && <p className="text-red-500 text-sm">{errors.terms}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
