import React from "react";

const DriverDashboard = () => {
    return (
        <div className="container mx-auto my-8">
            <div className="flex flex-col md:flex-row md:space-x-4">
                <div className="w-full md:w-1/2">
                    <div className="card">
                        <h2 className="text-2xl font-bold">Trip Details</h2>
                        <p>Pickup: New York</p>
                        <p>Drop-off: Boston</p>
                        <p>Date: May 20, 2023</p>
                        <p>Time: 9:00 AM</p>
                        <p>Seats available: 2</p>
                    </div>
                    <div className="card mt-4">
                        <h2 className="text-2xl font-bold">Passengers</h2>
                        <ul className="list-disc pl-5">
                            <li className="flex items-center my-2">
                                <img src="/profile-pic.jpg" alt="Profile Picture" className="w-8 h-8 rounded-full inline-block" />
                                <span className="ml-3">John Smith</span>
                            </li>
                            <li className="flex items-center my-2">
                                <img src="/profile-pic.jpg" alt="Profile Picture" className="w-8 h-8 rounded-full inline-block" />
                                <span className="ml-3">Jane Doe</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <div className="card">
                        <h2 className="text-2xl font-bold">Payments</h2>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2">Passenger</th>
                                    <th className="px-4 py-2">Fare Amount</th>
                                    <th className="px-4 py-2">Payment Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-2 flex items-center">
                                        <img src="/profile-pic.jpg" alt="Profile Picture" className="w-8 h-8 rounded-full inline-block" />
                                        <span className="ml-3">John Smith</span>
                                    </td>
                                    <td className="border px-4 py-2">$25</td>
                                    <td className="border px-4 py-2">Paid</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2 flex items-center">
                                        <img src="/profile-pic.jpg" alt="Profile Picture" className="w-8 h-8 rounded-full inline-block" />
                                        <span className="ml-3">Jane Doe</span>
                                    </td>
                                    <td className="border px-4 py-2">$25</td>
                                    <td className="border px-4 py-2">Pending</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DriverDashboard;
