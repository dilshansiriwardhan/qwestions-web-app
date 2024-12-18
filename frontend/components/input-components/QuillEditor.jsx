/* eslint-disable */

'use client';

import React, {
   useState,
   useRef,
   useImperativeHandle,
   forwardRef,
} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '@/app/customQuill.css';



const QuillEditor = forwardRef((props, ref) => {
   const [value, setValue] = useState('');
   const quillRef = useRef(null);

   useImperativeHandle(ref, () => ({
      getQuillInstance: () => quillRef.current.getEditor(), // Expose Quill instance to parent
      getDelta: () => quillRef.current.getEditor().getContents(),
   }));

   const modules = {
      toolbar: {
         container: [
            [{ size: [] }],
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['image'],
            ['clean'],
         ],
         // handlers: {
         //    image: imageHandler,
         // },
      },
   };

   const formats = [
      'size',
      'bold',
      'italic',
      'underline',
      'list',
      'bullet',
      'image',
   ];


   return (
      <div className='text-editor '>
         <ReactQuill
            ref={quillRef}
            value={value}
            onChange={setValue}
            modules={modules}
            formats={formats}
            placeholder='...'
         />
      </div>
   );
});

export default QuillEditor;
