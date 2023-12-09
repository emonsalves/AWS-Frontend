const FooterPublic = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-4 bg-gray-900">
            <div className="flex flex-row items-center justify-center space-x-8 text-white  text-2xl">
                <a className="hover:text-gray-400 hover:scale-125">
                    <i className="fab fa-facebook"></i>
                </a>
                <a className="hover:text-gray-400 hover:scale-125">
                    <i className="fab fa-twitter"></i>
                </a>
                <a className="hover:text-gray-400 hover:scale-125">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <p className="text-lg text-white">&copy; 2023 - All Rights Reserved</p>
        </div>
    );
};

export default FooterPublic;
