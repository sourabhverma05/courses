import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Progress } from '../components/ui/progress';
import { IoArrowBackOutline, IoLocateOutline } from 'react-icons/io5';
import { Mail, Phone, User2 } from 'lucide-react';

const MyProfilePage = () => {
  const [student, setStudent] = useState(null);

  const getData = useCallback(async () => {
    try {
      const response = await fetch('https://react-course-2a960-default-rtdb.firebaseio.com/students.json');
      const data = await response.json();
      setStudent(data);
    } catch (error) {
      console.error('Error fetching student data:', error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  const dispatch = useDispatch();
  const courseData = useSelector((state) => state.courses);

  return (
    <div className="container">
        <Link to="/" className='bg-gray-400'>
          <IoArrowBackOutline className="p-1 mt-5 text-4xl text-gray-700 rounded-full" />
        </Link>
      <div className="student-deatils-sec bg-gray-50 border-2 rounded mt-10 w-auto">
        {Array.isArray(student) &&
          student.map((items) => (
            <div key={items.id} className="student-deatils flex gap-[10rem] px-[3rem] h-auto items-center flex-wrap py-16">
              <div>
                <img src={items.image} alt="#Student Profile Picture" className="rounded-2xl w-[200px] h-[200px] shadow-xl md:rounded-full xs:rounded-full" />
              </div>
              <div className="leading-[2.3rem] text-xl text-gray-900">
                <h1 className="text-5xl font-bold pb-2">{items.name}</h1>
                <span className="pb-1 flex items-center gap-4 ">
                  <User2 />
                  {items.gender}
                </span>
                <span className="pb-1 flex items-center gap-4 ">
                  <Phone /> {items.phone}
                </span>
                <span className=" flex items-center gap-4 pb-1 text-wrap ...">
                  <Mail /> {items.email}
                </span>
                <span className=" flex items-center gap-4 text-wrap">
                  <IoLocateOutline />
                  {items.address}
                </span>
              </div>
            </div>
          ))}
      </div>
        <h1 className='text-4xl font-semibold text-center pt-10'>Enrolled Courses</h1>
      <div className="enrolled-courses-sec flex m-auto gap-5 my-10 py-10 rounded flex-wrap">
        {courseData.map((item) => (
          <div key={item.id} className='pb-10'>
            <div className="profile-page-card border w-[260px] h-auto p-2 rounded-lg flex flex-col gap-[0.4rem] bg-slate-50">
              <Link onClick={() => localStorage.setItem('item', JSON.stringify(item))} to={`/product-details/${item.name}/${item.id}`}>
                <img src={item.thumbnail} alt="#user-image" width={300} height={300} className="rounded-lg h-[180px]" />
                <div className="px-3 flex flex-col gap-1">
                  <h4 className="truncate pt-2 text-xl font-bold">{item.name}</h4>
                  <p className="truncate text-gray-500">{item.description}</p>
                  <p className="text-sm">
                    <b>Instructor :</b> {item.instructor}
                  </p>
                  <p className="text-sm">
                    <b>Duration :</b> {item.duration}
                  </p>
                  <p className="text-sm leading-6">
                    <b>Schedule :</b> {item.schedule}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">10%</span>
                    <Progress value={20} />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProfilePage;
