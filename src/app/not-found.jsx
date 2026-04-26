import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
            <div className="text-center">
                
                <p className="text-8xl font-semibold text-blue-600 uppercase tracking-wide">
                    404
                </p>
                
                <h1 className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                    Page not found
                </h1>
                
                <p className="mt-4 text-base text-gray-500">
                    Sorry, we couldn’t find the page you’re looking for.
                </p>

                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link
                        href="/"
                        className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all"
                    >
                        Go back home
                    </Link>
                    
                    
                </div>
            </div>

           
        </div>
    );
};

export default NotFound;