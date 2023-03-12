import React from 'react'

import { Routes, Route, Navigate } from "react-router-dom";
//MAIN APP
import Main from './main_app/Main'
import Home from './main_app/Home';
import ViewPage from './main_app/ViewPage';
import SuggestionPage from './main_app/SuggestionPage';
import VerifyRegistration from './main_app/VerifyRegistration';
import Register from './main_app/Register';
import VerificationNotice from './main_app/VerificationNotice';
import ContactPage from './main_app/ContactPage';
import ReviewPage from './main_app/ReviewPage';
import Form from './main_app/Form';

//ADMIN - LOGIN PAGES
import Login from './admin_pages/LoginPage';
import ForgotPage from './admin_pages/ForgotPage';
import ResetPage from './admin_pages/ResetPage';
import AdminPage from './admin_pages/AdminPage';

//ADMIN - DASHBOARD PAGE
import Overview from './admin_pages/Dashboard';

// ADMIN - RECORDS PAGES
import Records from './admin_pages/records/Records';
import CreatePage from './admin_pages/records/CreatePage';
import UpdatePage from './admin_pages/records/UpdatePage';
import Comments from './admin_pages/records/Comments';
import Reviews from './admin_pages/records/Reviews';

// ADMIN - PENDING PAGES
import Pending from './admin_pages/pending/PendingPage';
import ApprovePage from './admin_pages/pending/ApprovePage';
import RejectPage from './admin_pages/pending/RejectPage';

// ADMIN - ARCHIVE PAGES
import ArchivePage from './admin_pages/archives/ArchivePage';
import { UnarchivePage } from './admin_pages/archives/UnarchivePage';

// ADMIN - ACCOUNT PAGES
import Accounts from './admin_pages/account/AccountPage';
import CreateAccount from './admin_pages/account/CreateAccount';
import AdminLists from './admin_pages/account/AdminLists';
import UserLists from './admin_pages/account/UserLists';

//Layouts
import AuthLayout from './layouts/AuthLayout';
import GuestLayout from './layouts/GuestLayout';
import AuthUserLayout from './layouts/AuthUserLayout';
//404
import NoPermission from './components/NoPermission';
import Redirectadmin from './components/redirectadmin';
import Sucess from './main_app/Sucess';
import NoRoute from './main_app/404';

export function App() {
  return (
    <>
     <div>
        <Routes>
          {/* Main Application Routes */}

          {/* <Route element={<AuthUserLayout/>}> */}
            <Route path="/" element={<Main /> }>
                <Route index element={<Home />} />
                <Route path="/search/:business_name/:id" element={<ViewPage />}></Route>
                <Route path="/writeareview/:business_name/:id" element={<ReviewPage />}></Route>
                <Route path="discover-hidden-treasures" element={<SuggestionPage />}></Route>
                <Route path="about-us" element={<Form />}></Route>
                <Route path="contact-us" element={<ContactPage />}></Route>
                <Route path="success" element={<Sucess />}></Route>
            </Route>
          {/* </Route> */}
       
          <Route path="/403" element={<NoPermission />}/>
                    <Route path='*'  element={<NoRoute />}/>
          <Route path="/redirect" element={<Redirectadmin />}/>
          <Route path="/verify" element={<VerifyRegistration />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/register-verification" element={<VerificationNotice />}/>

          

          {/* <Route path="/" element={<Main />} /> */}

          
          {/* Admin Panel Routes */}
          <Route path="/admin" element={ <Navigate to="/login"/> } />
          <Route path="/forgot-password" element={<ForgotPage />}/>
          <Route path="/password-reset/:token" element={<ResetPage />}/>
          <Route element={ <AuthLayout /> }>
            <Route path="/dashboard" element={<AdminPage /> }>
              <Route index element={<Overview />} />
              <Route path="records" element={<Records />}></Route>
              <Route path="comments" element={<Comments />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
              <Route path="records/create" element={<CreatePage />}></Route>
              <Route path="records/:id/edit" element={<UpdatePage />}></Route>
              <Route path="pending-records" element={<Pending />}></Route>
              <Route path="pending-records/:id/approve" element={<ApprovePage />}></Route>
              <Route path="pending-records/:id/reject" element={<RejectPage />}></Route>
              <Route path="archived-records" element={<ArchivePage />}></Route>
              <Route path="archived-records/:id/unarchive" element={<UnarchivePage />}></Route>
              <Route path="admin-profile" element={<Accounts />}></Route>
              <Route path="admin-records" element={<AdminLists />}></Route>
              <Route path="users-records" element={<UserLists />}></Route>
              <Route path="admin-records/create" element={<CreateAccount />}></Route>
            </Route>
          </Route>   
          <Route element={ <GuestLayout /> }>
            <Route path="/login" element={<Login />}/>
          </Route>
          
        </Routes>
     </div>
    </>
    
  );
}

export default App
