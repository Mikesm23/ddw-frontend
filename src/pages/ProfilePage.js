import React from 'react'
import { Link } from "react-router-dom";
import EntryCard from '../components/EntryCard'
import UserDetails from "../components/UserDetails"


function ProfilePage(props) {
  return (
    <div className="profile-page">
      <div>
      <h1>Profile Page</h1>
      <h2>User Details</h2>
      <UserDetails />
     




      {/* <img src={url} alt=" " className=" " /> */}
      </div>
        

        <Link to="/ProfilePage"> About </Link>

        {/* render list of friends, which is an array in the db */}
        <div>
        <h2>List of Friends</h2>
        </div>
      
        {/* render list of your "entries", which are saved in the database */}
        <div>
          <EntryCard />
        <h2>Personal BucketList</h2>
        <button>Add List</button>
          </div>
    </div>
  )
}

export default ProfilePage




