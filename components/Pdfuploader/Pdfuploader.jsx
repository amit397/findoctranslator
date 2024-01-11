"use client";

import { useRef, useState } from "react";
import styles from "./PDFUstyles.module.css";
import Head from "next/head"


export default function Pdfuploader() {

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
            <input type="file" id="file-input" accept=".pdf" className="hidden" onChange={(e) => handleFileChange(e)} />
        </div>
    </div>
    );
}

function handleDragOver(e) {
  e.preventDefault();
}

function handleDrop(e) {
  e.preventDefault();

  const file = e.dataTransfer.files[0];
  handleFile(file);
}

function openFileInput() {
  document.getElementById('file-input').click();
}

function handleFileChange(e) {
  const file = e.target.files[0];
  handleFile(file);
}

function handleFile(file) {
  if (file && file.type === 'application/pdf') {
    // Handle the PDF file, e.g., upload it or perform further processing
    console.log('Uploaded PDF:', file.name);
  } else {
    alert('Please select a valid PDF file.');
  }
}