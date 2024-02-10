import './App.css'
import CoursesPage from './corses/CoursesPage'
import HomePage from './home/HomePage'
import MyProfilePage from './profile/MyProfile'
import Student from './profile/MyProfile'
import NavBar from './NavBar'
import CourseDetailsPage from './course-details/CourseDetails'
import { BrowserRouter as BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <NavBar/>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/courses' element={<CoursesPage />} />
            <Route path='/student' element={<Student />} />
            <Route path='/product-details/:course_name/:course_id' element={<CourseDetailsPage />} />
            <Route path='/profile' element={<MyProfilePage />} />
          </Routes>
        </BrowserRouter>

      </div>


    </>

  )
}

export default App
