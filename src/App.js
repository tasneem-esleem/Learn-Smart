import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Desktop from "./Page/Desktop";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ForgetPassword from "./Page/ForgetPassword";
import OTP from "./Page/OTP";
import ResetPassword from "./Page/ResetPassword";
import Terms from "./Page/Terms";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Search from "./Page/Search";
import Profile from "./Page/Profile";
import QuizzesPage from "./Page/QuizzesPage";
import SettingsPage from "./Page/SettingsPage"
import PrivacyAndSecurity from "./Page/PrivacyAndSecurity";
import HelpSupportPage from "./Page/HelpSupportPage";
import TermsOfUse from "./Page/TermsOfUse";
import FeedbackPage from "./Page/FeedbackPage";
import Home from "./Page/Home";
import TeacherProfile from "./Page/TeacherProfile";
import MoreMaterials from "./Page/MoreMaterials";
import StudyYear from "./Page/StudyYear";
import SecondLiterary from "./Page/SecondLiterary";
import SecondScientific from "./Page/SecondScientific";
import ThirdLiterary from "./Page/ThirdLiterary";
import ThirdScientific from "./Page/ThirdScientific";
import AllBooks from "./Page/AllBooks";
import BookDetails from './Page/BookDetails'
import NotificationsPage from "./Page/NotificationsPage";
import AssignmentsPage from "./Page/AssignmentsPage";
import MessagesPage from "./Page/MessagesPage";
import {UserProvider} from './Context/UserContext'
function Layout() {
  return (
    <>
      <Header />
      <main className="min-h-[80vh]">
      <Outlet />
      </main>
      <Footer />
    </>
  );
}
function LayoutNoFooter() {
  return(
    <>
    <Header/>
    <main className="min-h-screen pt-20">
        <Outlet />
      </main>
    </>
  )
}
function App() {
  return (
    <div className="App">
    <UserProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Desktop />} />
            <Route path="/home" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/moreMaterials" element={<MoreMaterials/>} />
            <Route path="/studyYear" element={<StudyYear/>} />
            <Route path="/secondLiterary" element={<SecondLiterary/>} />
            <Route path="/secondScientific" element={<SecondScientific/>} />
            <Route path="/thirdLiterary" element={<ThirdLiterary/>} />
            <Route path="/thirdScientific" element={<ThirdScientific/>} />
          </Route>
          
          <Route element={<LayoutNoFooter/>}>
              <Route path="/Search" element={<Search/>} />
              <Route path="/Profile" element={<Profile/>} />
              <Route path="/quizzes" element={<QuizzesPage/>} />
              <Route path="/settings" element={<SettingsPage/>} />
              <Route path="/assignment" element={<AssignmentsPage/>} />
              <Route path="/messages" element={<MessagesPage/>} />
              <Route path="/privacy-security" element={<PrivacyAndSecurity/>} />
              <Route path="/help-security" element={<HelpSupportPage/>} />
              <Route path="/terms-of-use" element={<TermsOfUse/>} />
              <Route path="/send-feedback" element={<FeedbackPage/>} />
              <Route path="/teacher/:id" element={<TeacherProfile/>} />
              <Route path="/all-books" element={<AllBooks/>} />
              <Route path="/book/:id" element={<BookDetails/>} />
              <Route path="/notifications" element={<NotificationsPage/>} />
          </Route>


          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/terms" element={<Terms/>} />
        </Routes>
   </UserProvider>
    </div>
  );
}
// loading="lazy"
export default App;
// localStorage.setItem("userToken", "test123")



