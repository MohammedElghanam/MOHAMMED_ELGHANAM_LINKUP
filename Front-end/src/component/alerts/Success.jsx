import React, {useEffect } from 'react';

export default function Success({ successMessage, setsuccessMessage }) {

    const handleAgree = () => {
        setsuccessMessage(''); 
    };

    useEffect( () => {
        setTimeout(() => setsuccessMessage(''), 3000); 
    }, [])

    return (
        <div className="w-full h-screen absolute top-0 flex justify-center items-center mx-auto bg-gray-400 bg-opacity-45">
          <div className="flex flex-col p-5 rounded-lg shadow bg-white w-96">
            <div className="flex flex-col items-center text-center">
              <div className="inline-block p-4 bg-yellow-50 rounded-full">
                <svg 
                        className="w-16 h-16 fill-current text-green-500"
                        xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                        <path fillRule="evenodd" d="m283.735 52.918l31.295 26.614a42.7 42.7 0 0 0 24.213 
                            10.03l40.947 3.309c20.86 1.686 37.42 18.246 39.106 39.106l3.31 40.947a42.7 42.7 0 0 0 10.029 
                            24.213l26.614 31.294c13.557 15.942 13.557 39.362 0 55.304l-26.614 31.295a42.7 42.7 0 0 0-10.03 
                            24.213l-3.31 40.947c-1.685 20.86-18.246 37.42-39.105 39.106l-40.947 3.31a42.7 42.7 0 0 0-24.213 
                            10.029l-31.295 26.614c-15.942 13.557-39.362 13.557-55.304 0l-31.294-26.614a42.7 
                            42.7 0 0 0-24.213-10.03l-40.947-3.31c-20.86-1.685-37.42-18.246-39.106-39.105l-3.31-40.947a42.7 
                            42.7 0 0 0-10.03-24.213l-26.613-31.295c-13.557-15.942-13.557-39.362 0-55.304l26.614-31.294a42.7 
                            42.7 0 0 0 10.03-24.213l3.309-40.947c1.686-20.86 18.246-37.42 39.106-39.106l40.947-3.31a42.7 42.7 
                            0 0 0 24.213-10.03l31.294-26.613c15.942-13.557 39.362-13.557 55.304 0m52.6 126.863L234.667 282.002l-48.916-48.916l-30.167 
                            30.166l79.083 79.084l131.836-132.388z">
                        </path>
                    </svg>
              </div>
              <h2 className="mt-2 font-semibold text-gray-800">
                Success!
              </h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                { successMessage }
              </p>
            </div>
    
            <div className="flex items-center mt-3">
              <button
                className="flex-1 px-4 py-2 ml-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-md"
                onClick={ handleAgree }
              >
                Agree
              </button>
            </div>
          </div>
        </div>
    );
}

