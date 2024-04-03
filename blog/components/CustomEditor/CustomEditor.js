import React, {useState} from 'react';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from "../../ckeditor5";

const editorConfiguration = {
    toolbar: [
        'heading',
        '|',
        'bold',
        'italic',
        'link',
        'bulletedList',
        'numberedList',
        '|',
        'outdent',
        'indent',
        '|',
        'imageUpload',
        'blockQuote',
        'insertTable',
        'mediaEmbed',
        'undo',
        'redo'
    ]
};

function CustomEditor( props ) {
        return (
            <CKEditor
                editor={ Editor }
                config={ editorConfiguration }
                data={ '' }
                onChange={ (event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                    // setValue(data)
                } }
            />
        )
}

export default CustomEditor;
