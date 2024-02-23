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
    <div className="flex flex-col items-center">
      <button className="flat-button" onClick={() => downloadPDF()}>
        Download Resume
      </button>
      <div className="resume-page">
        <iframe
          style={{ border: " 1px solid #777" }}
          src="https://indd.adobe.com/view/9ef0e468-663e-4edd-be5c-5b39592b5f39"
          title="kawtar azzouzi"
          width="718px"
          height="700px"
          allowFullScreen
        />
      </div>
    </div>
  );
}
