import React, { useRef, useState, useEffect } from "react";
import UploadImageHelper from '@utils/uploadImageHelper';

const CustomEditor = ({
    id,
    name,
    placeholder,             
    props,
    data,
    onChange
}) => {
    const editorRef = useRef();
    const [editorLoaded, setEditorLoaded] = useState(false);
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    useEffect(() => {
        editorRef.current = {
        CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
        ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
        setEditorLoaded(true);
    }, []);


    if (editorLoaded)
    return (
        <CKEditor
            id={id}
            name={name}
            placeholder={placeholder}              
            props={{...props}}
            data={data}
            editor={ClassicEditor}
            onChange={onChange}
            onReady={(editor) => {
                editor.plugins.get('FileRepository').createUploadAdapter = (loader) => new UploadImageHelper(loader);
            }}
        />
    );
    else return <div></div>;
};

export default CustomEditor;
