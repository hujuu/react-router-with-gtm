import {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    dataLayer: {
        user_id: '001',
        userProject: 'project',
        page: 'home'
    },
    dataLayerName: 'PageDataLayer'
}
TagManager.dataLayer(tagManagerArgs)

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
                        <Link to={`/contacts/1`} onClick={()=>{window.dataLayer.push({'event': {action: 'purchase', category: 'ecommerce', value: 10}})}}>
                            リンク
                        </Link>
                        <Link to={`/contacts/1`} onClick={()=>{window.dataLayer.push({user_id: '001'})}}>
                            イベント
                        </Link>
                        <Link to={`/contacts/1`} onClick={()=>{window.dataLayer.push({action: 'purchase', category: 'ecommerce', value: 10})}}>
                            購入
                        </Link>
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
