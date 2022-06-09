import { useLocation } from "react-router-dom"

export const Error404 = () => {
    const { pathname } = useLocation();
    return <div>
        <p>{`This is ${pathname.replace("/", "")} page`}</p>
        <div>Page not found 404</div>
    </div>

}