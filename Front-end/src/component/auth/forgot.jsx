import { useRef } from "react";
// import api from '../../axios/api'; 

export default function Forgot ({closePopup}) {

    const emailRef = useRef();

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // alert(emailRef.current.value);
    //     const email = emailRef.current.value;

    //     try {
    //         api.post('/forgotPassword', { email })
    //         .then((response) => {
    //             localStorage.setItem('reset_Token', response.data.reset_Token);
    //             console.log(response.data.reset_Token);
    //             alert(response.data.message); 
    //             emailRef.current.value = '';               
    //         })
    //         .catch((error) => {
    //             if (error.response && error.response.status === 404 || error.response.status === 500) {
    //                 console.error('Error :', error.response.data.error); 
    //                 alert(error.response.data.error); 
    //             } else {
    //                 console.error('Error :', error.response.data);
    //             }
    //         })
    //     } catch (error) {
    //         if (error.response && error.response.status === 404 || error.response.status === 500) {
    //             console.error('Error :', error.response.data.error); 
    //             alert(error.response.data.error); 
    //         } else {
    //             console.error('Error :', error.response.data);
    //         }
    //     }
    // }

    return <>
        <div className=" w-full h-screen flex justify-center items-center absolute top-0 bg-gray-400 bg-opacity-50 overflow-hidden">
            <div className="">
                <div className=" bg-white p-5 lg:p-10 rounded-lg">
                    <div className=" flex justify-between items-center  mb-6">
                        <h1 className=" text-center font-semibold text-gray-800 text-lg lg:text-xl">Forgot Pasword</h1>
                        <i onClick={ closePopup } className="fa-solid fa-xmark text-lg text-gray-800"></i>
                    </div>
                    <form 
                        // onSubmit={ handleSubmit }
                        >
                        <div className=" flex flex-col justify-center items-start mb-3">                            
                            <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Email Address <span className=" text-red-600">*</span></label>
                            <input ref={emailRef} className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" id="email" type="email" placeholder=" Enter Email Address" />
                        </div>
                        <div className="">
                            <button className=" w-full h-8 lg:h-9 text-sm lg:text-base bg-blue-700 hover:bg-blue-600 rounded-md text-white font-semibold"> Send email</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}