import {useState} from "react";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';


export default function Page() {
    const [value, setValue] = useState('');

    return (
        <>
            <ReactQuill theme="bubble" placeholder="write something..." value={value} onChange={setValue} />
            <h1>
                {value}
            </h1>
        </>

    );

}
