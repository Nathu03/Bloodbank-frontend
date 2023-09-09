import React from 'react';
import { Link } from 'react-router-dom';

function App() {
    return (
        <div className="App bg-red-400">
        <div id="layoutSidenav">
            <div id="layoutSidenav_content">
                <main>
                    <div className="container mx-auto px-4">
                        <h1 className="mt-4 text-2xl" style={{ color: 'white' }}>Blood Availability Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                            <li className="breadcrumb-item active">Blood-bags</li>
                        </ol>
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">A+ -Availability [10]  </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-danger text-white p-4 h-full">
                                    <div className="font-semibold">A -Availability [20] </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/available">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">A- -Availability [10]</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">B+ -Availability [20]  </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-danger text-white p-4 h-full">
                                    <div className="font-semibold">B -Availability [41] </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/available">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">B- -Availability [21]</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">AB+ -Availability [12]  </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-danger text-white p-4 h-full">
                                    <div className="font-semibold">AB -Availability [42] </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/available">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">AB- -Availability [30]</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">O+ -Availability [15]  </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-danger text-white p-4 h-full">
                                    <div className="font-semibold">O -Availability [35] </div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/available">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                <div className="bg-warning text-white p-4 h-full">
                                    <div className="font-semibold">O- -Availability [20]</div>
                                    <div className="flex justify-between items-center mt-4">
                                        <a className="text-white" href="/blood/total">View Details</a>
                                        <i className="fas fa-angle-right"></i>
                                    </div>
                                </div>
                            </div>
                            {/* Add more cards for different blood types */}
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container mx-auto px-4">
                        <div className="flex justify-between items-center small">
                            {/* Footer content if needed */}
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        </div>
    );
}

export default App;
