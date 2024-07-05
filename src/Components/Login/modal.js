import React from 'react';
import { Link } from 'react-router-dom';
import { TiTick } from "react-icons/ti";

const LoginSuccessModal = ({ showModal }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white flex flex-col items-center rounded-lg p-6 space-y-4 max-w-sm mx-auto">
                <div className="flex items-center justify-center bg-green-200 rounded-full w-fit p-3">
                    <TiTick className='text-3xl text-green-700' />
                </div>
                <h2 className="text-2xl font-bold text-center">Login Successful</h2>
                <Link to="/"><button
                    className="w-full px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Continue Shopping
                </button></Link>

            </div>
        </div>
    );
};

export default LoginSuccessModal;
