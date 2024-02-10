import React from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IoArrowBackOutline } from 'react-icons/io5';


const CourseDetailsPage = () => {
    const params = useParams();
    const courseId = params.course_id
    const dispatch = useDispatch()
    const courseData = useSelector((state) => state.courses)
    const course = JSON.parse(localStorage.getItem("item"))
    return (
        <>
            < div className='container my-10 items-center rounded'>
                <Link to="/courses">
                    <IoArrowBackOutline className="p-1 mt-5  text-4xl text-gray-700 rounded-full" />
                </Link>
                {

                    <div className='container course-details-page flex text-gray-50 py-[2rem] gap-[5rem]'>
                        <div className='course-detail-image-div my-auto h-auto w-[40%]'>
                            <img
                                src={course.thumbnail}
                                alt="#"
                                className='course-detail-image rounded m-auto'
                            />
                        </div>
                        <div className='course-details-sec flex flex-col gap-2 text-gray-900'>
                            <p className='text-4xl font-bold'>{course.name}</p>
                            <p className='text-2xl text-gray-500 font-semibold text-wrap'>{course.description}</p>
                            <p className='text-xl'><b>Created by : </b><span className='underline font-semibold'> {course.instructor}</span></p>
                            <p><b>Schedule : </b>{course.schedule}</p>
                            <p><b>Duration : </b>{course.duration}</p>
                            <p><b>Location : </b>{course.location}</p>
                            <p><b>EnrollmentStatus : </b>{course.enrollmentStatus}</p>
                            <p><b>Prerequisites : </b>{course.prerequisites}</p>
                        </div>
                    </div >


                }
            </div>


            <div className='details-about-sec px-[4.5rem] py-12'>
                <h2 className='about-sec-heading text-3xl font-bold py-5 text-gray-800'>About this course</h2>
                <p>
                    Quaerat nesciunt, nemo dolorem non rerum saepe dicta perferendis ullam mollitia porro odit voluptatem et ducimus, vero minus nobis neque quae, fugit culpa eaque maiores voluptas. Iure rerum pariatur laboriosam.
                    Fugit mollitia repellendus ad, distinctio quod est exercitationem incidunt nobis cupiditate at ipsum quae esse vitae dignissimos molestiae dolorum quaerat! Quas consectetur possimus repellendus, pariatur deleniti laudantium iusto fuga aliquam?
                    Eaque vero rerum eligendi et maxime fugiat eos quod deleniti at? Culpa laudantium harum eos accusamus enim facere a ullam tempore odio ducimus dolor, in asperiores praesentium est. Labore, possimus.
                </p>
            </div>
        </>
    )
}

export default CourseDetailsPage