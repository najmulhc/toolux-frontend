import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import Heading from '../../Components/Heading';
import auth from '../../firebase.init'

const MyProfile = () => {
  const [user] = useAuthState(auth);

  return (
    <section>
      <Heading>My Profile </Heading>
   </section>
  )
}

export default MyProfile