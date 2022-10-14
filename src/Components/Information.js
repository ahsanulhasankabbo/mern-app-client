import React, { useEffect, useState } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const Information = () => {
    const [students, setStudents] = useState
    ([]);
    useEffect(() => {
        fetch('https://mern-app-server-site.onrender.com/students')
            .then((res) => res.json())
            .then((data) => setStudents(data));
    }, []);
    return (
        <div>
            <div className='my-20 w-3/4 mx-auto'>
                <ComposedChart width={730} height={250} data={students}>
                    <XAxis dataKey='Name' />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="CGPA" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="Marks" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </div>
            <div class="overflow-x-auto relative m-10">
                <h1 className='text-2xl text-center font-semibold m-5 text-[#0182BE]'>Student Information</h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs uppercase text-white bg-cyan-500 border-b border-cyan-100">
                        <tr>
                            <th scope="col" class="py-3 px-6">
                                Student Name
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Email
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Student ID
                            </th>
                            <th scope="col" class="py-3 px-6">
                                CGPA
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Department
                            </th>
                            <th scope="col" class="py-3 px-6">
                                Marks
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td className="py-4 px-6">
                                    {student.Name}
                                </td>
                                <td className="py-4 px-6">
                                    {student.email}
                                </td>
                                <td className="py-4 px-6">
                                    {student.id}
                                </td>
                                <td className="py-4 px-6">
                                    {student.CGPA}
                                </td>
                                <td className="py-4 px-6">
                                    {student.Department}
                                </td>
                                <td className="py-4 px-6">
                                    {student.Marks}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Information;