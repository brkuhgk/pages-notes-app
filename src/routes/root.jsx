import {Link, Outlet, useLoaderData} from "react-router-dom";

export default function Root() {
    const pages = useLoaderData();

    return (
        <>
            <div id="sidebar">
                <h1>User Name</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <Link to={`/pages/1`}>{pages[0]}</Link>
                        </li>
                        <li>
                            <Link to={`/pages/2`}>{pages[1]}</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}
