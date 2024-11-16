import React, { useState, useContext } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null); 
    const location = useLocation();
    const { signIn } = useContext(AuthContext); 
    const navigate = useNavigate(); // To redirect after successful login

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const rememberMe = e.target.remember.checked;

        // Call signIn function from context
        signIn(email, password)
            .then(() => {
                // Successful login
                navigate(location?.state? location.state : '/');  // Redirect to dashboard or home after successful login
                
            })
            .catch((err) => {
                // Handle error
                setError('Invalid email or password'); // Set error message
                console.error('Error during login:', err);
                 // Clear the email and password fields after error
                 e.target.email.value = '';
                 e.target.password.value = '';
            });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                    <p className="text-gray-600">Please sign in to your account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Error Message */}
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                required
                                className="block w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-5 w-5 text-gray-400" />
                                ) : (
                                    <Eye className="h-5 w-5 text-gray-400" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Remember Me and Forgot Password */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                name="remember"
                                type="checkbox"
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                            />
                            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                Remember me
                            </label>
                        </div>
                        <button type="button" className="text-sm font-medium text-blue-600 hover:text-blue-500">
                            Forgot password?
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Sign in
                    </button>

                    {/* Sign Up Link */}
                    <div className="text-center">
                        <p className="text-sm text-gray-600">
                            Don't have an account?{' '}
                            <Link to='/auth/register' type="button" className="font-medium text-blue-600 hover:text-blue-500">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
