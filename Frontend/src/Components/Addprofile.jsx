import React from 'react'

const Addprofile = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="flex justify-center items-center w-screen h-screen bg-white">
    {/* COMPONENT CODE */}
    <div className="container mx-auto my-4 px-4 lg:px-20">
      <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
        <div className="flex">
          <h1 className="font-bold uppercase text-5xl">
            Send us a <br /> message
          </h1>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="First Name*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Last Name*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email*"
          />
          <input
            className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            type="number"
            placeholder="Phone*"
          />
        </div>
        <div className="my-4">
          <textarea
            placeholder="Message*"
            className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            defaultValue={""}
          />
        </div>
        <div className="my-2 w-1/2 lg:w-1/4">
          <button
            className="uppercase text-sm font-bold tracking-wide bg-blue-900 text-gray-100 p-3 rounded-lg w-full 
                focus:outline-none focus:shadow-outline"
          >
            Send Message
          </button>
        </div>
      </div>
      
      <i className="fas fa-map-marker-alt pt-2 pr-2">
        <i className="fas fa-phone-alt pt-2 pr-2">
          <i className="fab fa-facebook-f text-blue-900">
            <i className="fab fa-linkedin-in text-blue-900"></i>
          </i>
        </i>
      </i>
    </div>
    <i className="fas fa-map-marker-alt pt-2 pr-2">
      <i className="fas fa-phone-alt pt-2 pr-2">
        <i className="fab fa-facebook-f text-blue-900">
          <i className="fab fa-linkedin-in text-blue-900">
            {/* COMPONENT CODE */}
          </i>
        </i>
      </i>
    </i>
  </div>
  <i className="fas fa-map-marker-alt pt-2 pr-2">
    <i className="fas fa-phone-alt pt-2 pr-2">
      <i className="fab fa-facebook-f text-blue-900">
        <i className="fab fa-linkedin-in text-blue-900">
          {/* BUY ME A PIZZA AND HELP SUPPORT OPEN-SOURCE RESOURCES */}
          <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
            <div>
              <a
                title="Buy me a pizza"
                href="https://www.buymeacoffee.com/Dekartmc"
                target="_blank"
                className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
              >
                <img
                  className="object-cover object-center w-full h-full rounded-full"
                  src="https://img.icons8.com/emoji/48/000000/pizza-emoji.png"
                />
              </a>
            </div>
          </div>
        </i>
      </i>
    </i>
  </i>
</>

    </div>
  )
}

export default Addprofile
