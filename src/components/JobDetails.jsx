import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const JobDetails = () => {
    const { user } = useAuth()
    const { data } = useLoaderData()
    const [startDate, setStartDate] = useState(new Date());
    const { _id, job_title,
        deadline,
        category,
        min_price,
        max_price,
        description,buyer } = data || {}
    const handelFrom = async (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const comment = from.comment.value
        const price = parseInt(from.price.value)
        if(price<min_price || price>max_price)return toast.error("Up to Add minimum Value")
        const deadline = startDate
        const status = "pending"
        const jobId = _id


        const bidData = { email, comment, price, deadline, status, jobId, job_title, category }
        console.table(bidData)
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/bid`, bidData)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="grid grid-cols-2 gap-6">
            {/* job details */}
            <div className='w-full  px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                <div className='flex items-center justify-between'>
                    <span className='text-xs font-light text-gray-800 '>
                        Deadline: {new Date(deadline).toLocaleDateString()}
                    </span>
                    <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                        {category}
                    </span>
                </div>
                <div>
                    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                        {max_price}
                    </h1>

                    <p className='mt-2 text-sm text-gray-600 '>
                        {description}
                    </p>
                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        Range: ${min_price} - ${min_price}
                    </p>
                </div>

                <div>
                    <h3 className="text-xl">Authore Info</h3>
                    <p>Email: {buyer?.email}</p>
                </div>
            </div>
            {/* bid job form */}
            <form onSubmit={handelFrom} >
                <div className="space-y-4">
                    <div>
                        <h2 className="text-3xl text-center font-semibold">Place A Bid!</h2>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <input type="number" name="price" required placeholder="Enter Your Price" className="border-b-[1px] border-gray-500 p-3 w-full outline-0" />
                        </div>
                        <div>
                            <input type="email" defaultValue={user?.email} readOnly name="email" placeholder="Enter Your Email" className="border-b-[1px] border-gray-500 p-3 w-full outline-0" />
                        </div>
                        <div>
                            <input type="text" name="comment" placeholder="Enter Your Comment" required className="border-b-[1px] border-gray-500 p-3 w-full outline-0" />
                        </div>
                        <div>
                            <DatePicker className="border-b-[1px] border-gray-500 p-3 w-full outline-0" selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <input type="submit" value="Bid Now!" className="bg-black text-gray-200 px-4 py-2 " />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobDetails;