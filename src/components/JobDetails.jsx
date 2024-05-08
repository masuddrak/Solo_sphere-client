import { useLoaderData, useParams } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const JobDetails = () => {
    const {user}=useAuth()
    const { data } = useLoaderData()
    const { _id, jobTitle, category, description, minPrice, maxPrice, deadline, employerEmail } = data
    const handelFrom = (e) => {
        e.preventDefault()
        const from = e.target
        const email = from.email.value
        const comment=from.comment.value
        const price=from.price.value
        const date=from.date.value

        console.log(email,comment,price,date)

    }
    return (
        <div className="grid grid-cols-2 gap-6">
            {/* job details */}
            <div className='w-full  px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
                <div className='flex items-center justify-between'>
                    <span className='text-xs font-light text-gray-800 '>
                        Deadline: {deadline}
                    </span>
                    <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
                        {category}
                    </span>
                </div>
                <div>
                    <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
                        {jobTitle}
                    </h1>

                    <p className='mt-2 text-sm text-gray-600 '>
                        {description}
                    </p>
                    <p className='mt-2 text-sm font-bold text-gray-600 '>
                        Range: ${minPrice} - ${maxPrice}
                    </p>
                </div>

                <div>
                    <h3 className="text-xl">Authore Info</h3>
                    <p>Email: {employerEmail}</p>
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
                            <input type="date" name="date" placeholder="Enter Your date" required className="border-b-[1px] border-gray-500 p-3 w-full outline-0" />
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