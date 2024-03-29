const FooterPublic = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-full py-4 bg-gray-900">
            <div className="flex flex-row items-center justify-center space-x-8 text-white  text-2xl">
                <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-400 hover:scale-125"
                    alt="facebook"
                    aria-label="facebook"
                >
                    <i className="fab fa-facebook"></i>
                </a>
                <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-400 hover:scale-125"
                    alt="twitter"
                    aria-label="twitter"
                >
                    <i className="fab fa-twitter"></i>
                </a>
                <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-400 hover:scale-125"
                    alt="instagram"
                    aria-label="instagram"
                >
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
            <p className="text-lg text-white">&copy; {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
    );
};

export default FooterPublic;
