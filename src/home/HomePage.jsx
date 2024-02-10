import React, { useCallback, useEffect, useState } from 'react'
import { Button } from '../components/ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { enroll } from '../redux/courseSlice'
import toast, { Toaster } from 'react-hot-toast'


const HomePage = () => {
    const navigate = useNavigate()
    const [courses, setCourses] = useState([]);
    const dispatch = useDispatch();
    const getData = useCallback(async () => {
        const response = await fetch("https://react-course-2a960-default-rtdb.firebaseio.com/courses.json")
        const data = await response.json()
        setCourses(data)
    }, [])
    useEffect(() => {
        getData();
    }, []);

    const notify = () => {
        toast.success('Course has been enrolled successfully !');
        setTimeout(() => {
            navigate("/profile")
        }, [1000])
    }

    function handleEnrolled(id) {
        dispatch(enroll(id))
        notify()
    }

    return (
        <div className='container'>
            <div className='home-page-main-section grid grid-cols-2 items-center gap-[10rem]'>
                <div className='home-page-img-sec h-auto'>
                    <img className='h-auto' src="https://blogs.birlabrainiacs.com/wp-content/uploads/2021/08/e01f5737357b9fea77350d2dd2e0bc60.jpg" alt="HomeImage" />
                </div>
                <div className="home-page-details leading-[1.7rem]">
                    <h1 className='text-6xl font-bold pb-5'>Online Education</h1>
                    <h4 className='text-2xl font-semibold pb-5 leading-loose'>Learn something new anywhere & anytime</h4>
                    <p className='home-page-paragraph text-wrap'>Magni incidunt quaerat nostrum vel distinctio quasi a, inventore ducimus velit, tempora repellendus eaque atque, quod magnam! Perspiciatis, consequatur beatae! Optio eveniet alias dignissimos itaque repellendus reiciendis ab, deleniti quos!</p>
                    <div className='home-page-buttons mt-[3rem] flex gap-5'>
                        <Button className='py-5'>SIGN UP</Button>
                        <Button className='py-5'>TRIAL 3 DAYS</Button>
                    </div>
                </div>

            </div>
            <div className='home-page-card-sec flex justify-center gap-10 mt-10 bg-gray-100 py-10 rounded flex-wrap'>
                {
                    courses.slice(0, 4).map((item) => (
                        <div key={item.id} className=''>
                            <div className='cards border w-[280px] h-auto p-2 rounded-lg flex flex-col gap-[0.4rem] bg-slate-50'>
                                <Link onClick={() => localStorage.setItem("item", JSON.stringify(item))} to={`/product-details/${item.name}/${item.id}`}>
                                    <img
                                        src={item.thumbnail}
                                        alt="#user-image"
                                        width={300}
                                        height={300}
                                        className='rounded-lg h-[180px]'
                                    />
                                    <div className='px-3 flex flex-col gap-1'>
                                        <h4 className='truncate pt-2 text-xl font-bold'>{item.name}</h4>
                                        <p className='truncate text-gray-500'>{item.description}</p>
                                        <p className='text-sm'><b>Instructor :</b> {item.instructor}</p>
                                        <p className='text-sm'><b>Duration :</b> {item.duration}</p>
                                        <p className='text-sm leading-6 tracking-wide'><b>Schedule :</b> {item.schedule}</p>
                                    </div>
                                </Link>
                                <Button className={`mt-1`} onClick={() => { handleEnrolled(item) }}>Enroll Now</Button>
                                <Toaster />
                            </div>
                        </div>
                    ))
                }

            </div>
            <div className='m-auto flex justify-center my-10'>
                <Link to={"/courses"} className='text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-gray-50 border-2 px-6 py-[0.4rem] rounded-lg'>All  Courses</Link>
            </div>
        </div>
    )
}

export default HomePage