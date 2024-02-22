"use client";
import React from "react";
import "@/app/globals.css";

export default function Resume() {
  const downloadPDF = () => {
    window.open(
      "https://indd.adobe.com/view/9ef0e468-663e-4edd-be5c-5b39592b5f39",
      "_blank"
    );
  };

  return (
    <div className="flex justify-center items-center resume-page">
      <button className="flat-button" onClick={() => downloadPDF()}>
        Download Resume
      </button>
      <div className="resume-iframe">
        <iframe
          style={{ border: " 1px solid #777" }}
          src="https://indd.adobe.com/view/9ef0e468-663e-4edd-be5c-5b39592b5f39"
          title="kawtar azzouzi"
          width="718px"
          height="800px"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    </div>
  );
}
