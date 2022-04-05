import React, { useState,useEffect } from 'react'
import Navbar from './components/Navbar';
import { getuser } from './components/cofig'
import Userlist from './components/Userlist';
const App = () => {
  const [userdata, setuserdata] = useState([]);
  const [page, setPage] = useState({ currPage: 1, max_Page: 1 });
  const usedatapresent = userdata.length !== 0;

  const getuserdata = async currPage => {
    if (userdata.length !== 0 && currPage === 1) {
      return;
    }
    const users = await getuser(currPage);
    console.log(users);
    setPage({ currPage, max_Page: users.total_pages });
    setuserdata([...userdata, ...users.data]);
  };

  return (
    <>
       <Navbar getuserdata={getuserdata} />

       { !usedatapresent && (
        <p className="center size-20 mt-2">
          Click on Get Users button to fetch data
        </p>
      )}


      {/* {userdata && <Userlist userData={userdata} />} */}
      { userdata && <Userlist userdata={userdata} />}
      {page.currPage < page.max_Page && usedatapresent && (

        <button
          className="load-more btn"
          type="button"
          onClick={() => getuserdata(page.currPage + 1)}
        >
          More
        </button>
      )}
    </>
  )
}

export default App