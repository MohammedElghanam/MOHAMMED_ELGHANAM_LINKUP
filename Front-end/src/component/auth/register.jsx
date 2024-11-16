import useRegister from '../../hooks/useRegister';
import Error from '../alerts/Error';
import Success from '../alerts/Success';
export default function Register () {

    const {
        name, setName,
        email, setEmail,
        password, setPassword,
        handleSubmit,
        errorMessage, setErrorMessage, 
        successMessage, setsuccessMessage,
        errors,
    } = useRegister();

    return <>
        <div className=" w-full h-screen flex justify-center items-center bg-gray-100 overflow-hidden">
            <div className=" bg-white px-5 lg:px-10 py-7 rounded-lg shadow-xl">
                <h1 className=" text-center mb-3 lg:mb-6 font-semibold text-gray-900 text-lg lg:text-xl">Create a new account</h1>
                <form onSubmit={ handleSubmit }>
                    <div className=" flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="name">Username <span className=" text-red-600">*</span></label>
                        <input 
                            onChange={ (e) => { setName(e.target.value) }}
                            type="text"
                            value={name}
                            id="name" 
                            placeholder=" Enter Username" 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className=" flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="email">Email Address <span className=" text-red-600">*</span></label>
                        <input 
                            onChange={ (e) => { setEmail(e.target.value)}}
                            type="email"
                            value={email}
                            id="email" 
                            placeholder=" Enter Email Address" 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div className="  flex flex-col justify-center items-start mb-3">
                        <label className=" text-xs lg:text-sm font-medium text-gray-900 mb-1" htmlFor="password">Password <span className=" text-red-600">*</span></label>
                        <input
                            onChange={ (e) => { setPassword(e.target.value)}}
                            type="password"
                            value={password} 
                            id="password" 
                            placeholder=" Enter Password" 
                            className=" w-60 lg:w-72 h-8 lg:h-9 px-1 rounded-md border-[0.5px] border-gray-500 focus:border-blue-600 text-xs lg:text-sm" 
                        />
                        {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                    </div>                    

                    <div className="">
                        <button className=" w-full h-8 lg:h-9 bg-blue-700 hover:bg-blue-600 rounded-md text-white font-semibold text-sm lg:text-base">Register</button>
                    </div>
                    <hr className=" my-2 lg:my-4 border-gray-400 "/>                    
                    <div className=" flex justify-center items-center">
                        <p className=" text-xs lg:text-sm font-medium text-gray-800">Back to 
                        <a className=" text-blue-500" href=""> Login.</a></p>
                    </div>
                </form>
            </div>
        </div>
        {successMessage && <Success successMessage={ successMessage } setsuccessMessage={ setsuccessMessage } />}
        {errorMessage && <Error errorMessage={ errorMessage } setErrorMessage={ setErrorMessage } />}
        
    </>
}