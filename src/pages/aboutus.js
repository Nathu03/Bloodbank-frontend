import React from 'react';

const AboutUsPage = () => {
  return (
    <div style={{ backgroundColor: 'rgb(220, 38, 38)' }}>
    <div className='container'>
    <div className="bg-gray-100">
      <div className="container mx-auto p-4">
        <div className="py-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
          <p className="mt-2 text-gray-600">Welcome to our Blood Bank Management website!</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center items-center md:items-start">
            <img
              className="p-4 w-64 h-64 object-cover rounded-full shadow-lg"
              src={"images/1083921_Wallpaper2.avif"}
              alt="Team"
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Meet the Team</h2>
            <div className="mt-4 space-y-4">
              <div className="flex items-center space-x-4">
                <img className="w-16 h-16 object-cover rounded-full" src={"images/team/ramya.jpg"} alt="Sri ramya" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Sri Ramya</p>
                  <p className="text-gray-600">Founder & CEO</p>
                  <p className="text-gray-600">Meet Sri Ramya, the Co-Founder & CEO of our Blood Bank Management system. With expertise in web development, she led the project to success, saving lives through innovative solutions. Making a positive impact, one donation at a time.</p>
                </div>
              </div>
             {/* <div className="flex items-center space-x-4">
                <img className="w-16 h-16 object-cover rounded-full" src={"images/team/Narthanan.jpg"} alt="Narthanan" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Narthanan</p>
                  <p className="text-gray-600">MD</p>
                  <p className="text-gray-600">Meet Narthanan, our MD, contributing to the Blood Bank Management system's success. Passionate about web development, driving positive change, and saving lives through innovation.</p>
                </div>
              </div>
               Add more team members here */}
            </div>
          </div>
        </div>
        <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
            <p className="mt- text-gray-600">
              We are a team of dedicated individuals who are passionate about saving lives through efficient blood donation processes. Our mission is to connect blood donors with patients in need, ensuring a seamless and reliable blood supply chain. With our user-friendly interface and advanced features, our website aims to simplify the process of blood donation and improve the overall blood management system.
            </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Our Commitment</h2>
          <p className="mt-4 text-gray-600">
            At our Blood Bank Management website, we believe in making a positive impact on society by saving lives and contributing to a sustainable blood supply. We understand that blood donation is a vital aspect of healthcare, and we strive to create a healthier community through responsible blood management practices.
          </p>
          <p className="mt-4 text-gray-600">
            Our website's user-friendly interface allows donors to easily navigate and access the necessary information. We provide comprehensive profiles for registered blood donors, including their blood types, medical history, and contact details. This information is securely stored and made available to medical professionals, ensuring a reliable and efficient blood matching process during emergencies.
          </p>
          <p className="mt-4 text-gray-600">
            We are committed to maintaining the highest standards of privacy and security. Our website employs encryption and other industry-standard measures to protect user information. We adhere to strict donor eligibility criteria and conduct regular screenings to ensure the safety of donated blood. By following these protocols, we ensure that every blood donation made through our platform meets the necessary quality and safety standards.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800">Join Our Mission</h2>
          <p className="mt-4 text-gray-600">
            Join us in our mission to make a difference and create a healthier community through responsible blood management. By becoming a blood donor, you can play a vital role in saving lives and providing hope to those in need. Together, we can build a sustainable blood supply chain that serves the healthcare needs of our community.
          </p>
          <p className="mt-4 text-gray-600">
            Thank you for choosing our Blood Bank Management website, and we appreciate your support in our life-saving efforts.
          </p>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AboutUsPage;
