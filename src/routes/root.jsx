import {useEffect} from "react";
import {useLocation} from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Root({title}) {
    const location = useLocation();

    useEffect(() => {
        document.title = title;
    }, [title, location]);
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
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
                        <button onClick={()=>{window.dataLayer.push({'event': 'buyNow'})}}>
                            Buy Now
                        </button>
                    </form>
                </div>
                <nav>
                    <ul>
                        <li>
                            <a className="contact-name" href={`/contacts/1`}>Your Name</a>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Your Friend</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}
