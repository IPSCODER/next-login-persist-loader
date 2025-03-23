import dynamic from 'next/dynamic';
import React from 'react'

function Loading() {
  return <div>Loading...</div>;
}

const DynamicComponent = dynamic(() => import('./AboutSection'), {
  loading: () => <Loading />,
});

const About = () => {
  return (
   <>
   <h1>About US</h1>
   <DynamicComponent/>
   </>
  )
}

export default About
