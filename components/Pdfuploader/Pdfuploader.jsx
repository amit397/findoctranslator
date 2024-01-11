"use client";

import { useEffect, useState } from "react";
import styles from "./PDFUstyles.module.css";
import Head from "next/head"


export default function Pdfuploader() {

    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
    const handleDragEnter = (e) => {
      e.preventDefault();
      setIsDragging(true);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsDragging(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      handleFile(file);
    };

    document.addEventListener('dragenter', handleDragEnter);
    document.addEventListener('dragleave', handleDragLeave);
    document.addEventListener('dragover', (e) => e.preventDefault());
    document.addEventListener('drop', handleDrop);

    return () => {
      document.removeEventListener('dragenter', handleDragEnter);
      document.removeEventListener('dragleave', handleDragLeave);
      document.removeEventListener('drop', handleDrop);
    };}, []);

  const handleFile = (file) => {
    if (file && file.type === 'application/pdf') {
      // Handle the PDF file, e.g., upload it or perform further processing
      dropHandler();
      console.log('Uploaded PDF:', file.name);
    } else {
      alert('Please drop a valid PDF file.');
    }
  };

    return(
    <div className="flex items-center justify-center h-screen">
        <Head>
            <title>Drag and Drop PDF Uploader</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" />
        </Head>

        <div className="w-96 p-8 border-dashed border-2 border-gray-400 rounded-md text-center cursor-pointer"
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e)}
            onClick={() => openFileInput()}
        >
            <p>Drag & Drop PDF file here or click to browse</p>
            <input type="file" id="file-input" accept=".pdf" className="hidden" onChange={(e) => handleFile(e)} />
        </div>
    </div>
    );
}


function openFileInput() {
  document.getElementById('file-input').click();
}

function dropHandler(ev) {
  console.log("File(s) dropped");

  // Prevent default behavior (Prevent file from being opened)
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    // Use DataTransferItemList interface to access the file(s)
    [...ev.dataTransfer.items].forEach((item, i) => {
      // If dropped items aren't files, reject them
      if (item.kind === "file") {
        const file = item.getAsFile();
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    // Use DataTransfer interface to access the file(s)
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}


