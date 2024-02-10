import './App.css'
import CoursesPage from './CoursesPage'
import HomePage from './HomePage'
import MyProfilePage from './MyProfile'
import Student from './MyProfile'
import NavBar from './NavBar'
import CourseDetailsPage from './CourseDetails'
import { BrowserRouter as BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='container'>
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
