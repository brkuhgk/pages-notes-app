import {useState} from "react";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.bubble.css';
import 'react-quill/dist/quill.snow.css';
import {useLoaderData} from "react-router-dom";


export default function Page() {
    const [value, setValue] = useState('');
    const  fileName = useLoaderData();
    return (
        <>
           <h1> File name : {fileName}</h1>
            <ReactQuill theme="bubble" placeholder="write something..." value={value} onChange={setValue} />
            <h1>
                {value}
            </h1>
        </>

    );

}
