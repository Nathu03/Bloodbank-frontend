import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Example() {
  const homeHeaderImage = '/images/home-header.jpg';
  const homeHeaderImage1 = '/images/1 (3).jpg';
  return (          
<div className="mx-auto flex flex-col gap-y-4">
<img src={homeHeaderImage1} alt="Image" className="mx-auto w-2400px h-auto" />
  <div className="flex justify-center gap-4">
  <Link to="/donate-now">
    <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
    Donate form registration
    </button>
    </Link>
    <Link to="/contact-us">
    <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600">
      Contact Us 
    </button>
    </Link>
  </div>
</div>


  );
}
