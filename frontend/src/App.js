import React from 'react';
import LoginScreen from './screens/LoginScreen';
import { Route, Routes } from 'react-router-dom';
import SideNav from './components/SideNav';
import { useSelector } from 'react-redux';
import StudentDashboardScreen from './screens/StudentDashboardScreen';
import CourseDetailsScreen from './screens/student/CourseDetailsScreen';
import MyCoursesScreen from './screens/MyCoursesScreen';
import InstructorDashboard from './screens/InstructorDashboard';
import SignupScreen from './screens/SignupScreen';


function App() {

  const { loading, Info, error } = useSelector((state) => {
    return state.Info;
  });

  return (
    <div className="flex w-full min-h-screen overflow-auto">
      {/* {adminInfo && <SideNav />} */}

      < Routes >
        <Route path='/login' element={<LoginScreen />} />
        <Route path="/student/signup" element={<SignupScreen />} />
      </Routes>

      {Info && Info.instructorId &&
        // instructor
        < Routes >
          <Route path='/login' element={<LoginScreen />} />
          <Route path="/student/signup" element={<SignupScreen />} />
          <Route path='/instructor/dashboard' element={<InstructorDashboard />} />
        </Routes>
      }

      {
        Info && Info.rollNumber &&
        // student
        < Routes >
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/student/dashboard' element={<StudentDashboardScreen />} />
          <Route path='/student/course' element={<MyCoursesScreen />} />
          <Route path='/student/course/:cid' element={<CourseDetailsScreen />} />
          <Route path="/student/signup" element={<SignupScreen />} />



          <Route path='/instructor/dashboard' element={<InstructorDashboard />} />

        </Routes>
      }



    </div >
  );
}

export default App;





{/* <FontAwesomeIcon icon={faPenNib} />
      <h1 className='text-base3'>Hello</h1>
      <h1>
        <FontAwesomeIcon icon={faAtom} />
        <FontAwesomeIcon icon={faCheck} />
        <FontAwesomeIcon icon={faBook} className='text-red-600' />
        <CircularProgress isIndeterminate color='red' size={10} />
        <div className="h-10">

          <div>

            <Alert status='error' w="80%" className='m-auto'>
              <AlertIcon />
              <AlertTitle>Your browser is outdated!</AlertTitle>
              <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
            </Alert>
          </div>
        </div>
      </h1>
      <Button
        onClick={() =>
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: 'top'
          })
        }
      >
        Show Toast
      </Button> */}