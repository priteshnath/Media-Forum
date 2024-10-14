import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import MyAccountProfile from '../Components/MyAccountProfile';
import MyAccountSideBar from '../Components/MyAccountSideBar';

const AccountPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-grow">
        <MyAccountSideBar />
        <div className="flex flex-grow justify-center items-center">
          <MyAccountProfile />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountPage;
