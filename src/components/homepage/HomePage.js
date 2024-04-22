import React from "react";

function HomePage() {
  return (
    <div className="mt-20 px-10 my-4">
      {/* section1 */}

      {/* section2 */}

      <div>
        <h2 className="text-center ">We’ve done work for top brands</h2>

        <div className="grid grid-cols-3 gap-2 md:grid-cols-5  w-full justify-between my-10 ">
          <div className="border rounded p-5 h-10"></div>
          <div className="border rounded p-5 h-10"></div>
          <div className="border rounded p-5 h-10"></div>
          <div className="border rounded p-5 h-10"></div>
          <div className="border rounded p-5 h-10"></div>
        </div>
      </div>
      {/* section3 */}

      {/* section4 */}

      <div className=" grid md:grid-cols-2 gap-2">
        <div className="border h-60 rounded-lg"></div>
        <div className="border h-60 rounded-lg"></div>
        <div className="border h-60 rounded-lg"></div>
        <div className="border h-60 rounded-lg"></div>
      </div>

      {/* section 5 */}
      <div className="my-5">
        <h1 className="text-center font-bold text-5xl">
          Design, Development, <br />
          Automation & More
        </h1>
        <div className="flex my-3 space-x-2 space-y-2 flex-wrap text-xl font-semibold justify-center">
          <h4 className="border rounded-full px-3 py-1 text-center">
            Mobile Apps
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Web Apps
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Landing Pages
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Prototypes
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Full Stack Development (Bubble)
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Logos / Branding
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Presentation Deck Design
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Social Media Graphics
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Email Templates
          </h4>
          <h4 className="border rounded-full px-3 py-1 text-center">
            Process Automations
          </h4>
        </div>
      </div>

      {/* section6 */}
      <div className="w-full">
        <h1 className="font-bold text-center text-5xl">
          Great design, without the overhead.
        </h1>
        <p className="text-center text-gray-600 my-5 ">
          Our team has over a decade of experience building consumer and
          enterprise solutions<br/> for two-sided marketplaces and Software as a
          Service companies.
        </p>
      </div>
      {/* section7 */}

      <div className="grid grid-cols-3 w-full gap-3">
        <div className="h-36 border rounded-lg"></div>
        <div className="h-36 border rounded-lg"></div>
        <div className="h-36 border rounded-lg"></div>
        <div className="h-36 border rounded-lg"></div>
        <div className="h-36 border rounded-lg"></div>
        <div className="h-36 border rounded-lg"></div>
      </div>
    </div>
  );
}

export default HomePage;
