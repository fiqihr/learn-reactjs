import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-9xl font-bold">Oops!</h1>
            <p className="my-5 text-xl">Sorry, an unexpected error has occurred.</p>
            <p className="text-lg">{error.statusText || error.message}</p>
        </div>
    );
}

export default ErrorPage;