import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileBody from './ProfileBody'

const Profile = () => {
  const [tabvalue, setTabValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };
    return(
        <main>
            <ProfileHeader value={tabvalue} handleChange={handleChange}/>
            <ProfileBody value={tabvalue} handleChange={handleChange}/>
        </main>
    )
}

export default Profile