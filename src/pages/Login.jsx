const Login = () => {
    return (
        <section className="h-full flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:mt-0 ">
            <div className="md:w-1/3 max-w-sm border-gray-400 shadow-custom-dark rounded-2xl">
                <img src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" alt="Sample image" />
            </div>
            <div className="md:w-1/3 max-w-sm ">
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    type="text"
                    placeholder="Correo Electronico"
                />
                <input
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
                    type="password"
                    placeholder="Contraseña"
                />
                <div className="mt-4 flex justify-between font-semibold text-sm ">
                    <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                        <input className="mr-1" type="checkbox" />
                        <span>Recordarme</span>
                    </label>
                    <a className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4" href="#">
                        Olvidaste tu contraseña?
                    </a>
                </div>
                <div className="text-center md:text-left">
                    <button
                        className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
                <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
                    No tienes una cuenta?{" "}
                    <a className="text-red-600 hover:underline hover:underline-offset-4" href="#">
                        Registrarme
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Login;
