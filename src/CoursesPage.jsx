import React, { useCallback, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from './components/ui/button'
import { useDispatch } from 'react-redux';
import { enroll } from './redux/courseSlice';
import toast, { Toaster } from 'react-hot-toast';

const CoursesPage = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState("");
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

    const filterResult = (catagoryItems) => {
        const result = ProductCategory.filter((CurrentProd) => {
            return CurrentProd.category === catagoryItems;
        });
        setProducts(result);
    };
    return (
        <>
            <div className='mt-10'>
                <div className='px-4'>
                    <input
                        type="search"
                        name="search-bar"
                        id="search-bar"
                        placeholder='Search here...'
                        className=' flex justify-center rounded-2xl px-5 bg-slate-200 py-[0.1rem] border border-gray-600'
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className='flex justify-center gap-10 mt-10 py-10 rounded flex-wrap'>
                    {
                        courses.filter((prdct) => prdct.name.toLowerCase().includes(search))
                            .map((item) => (
                                <div key={item.id}>
                                    <div className='border w-[280px] h-auto p-2 rounded-lg flex flex-col gap-[0.4rem] bg-slate-50'>
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
            </div >
        </>
    )
}

export default CoursesPage