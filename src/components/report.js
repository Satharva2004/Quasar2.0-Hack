import React from "react";
import { data } from "./ocrdata";

const MedicalReport = ({ report }) => {
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <h1 className="text-2xl font-bold mb-2">Medical Report</h1>
        <div className="border-b border-gray-200"></div>
      </div>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-4">
          <p><strong>Reg No.:</strong> {report['Reg No.']}</p>
          <p><strong>Name:</strong> {report.Name}</p>
          <p><strong>Age:</strong> {report.Age}</p>
          <p><strong>Sex:</strong> {report.Sex}</p>
        </div>
        <div className="w-full md:w-1/2 px-4 mb-4">
          <p><strong>Sample Received:</strong> {report['Sample Received']}</p>
          <p><strong>Report Date:</strong> {report['Report Date']}</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Test Results</h2>
        <div className="border-b border-gray-200"></div>
      </div>
      <div>
        {report['Final Test Report'].Tests.map((test, index) => (
          <div key={index} className="mb-4">
            <p><strong>Test Name:</strong> {test['Test Name']}</p>
            <p><strong>Method:</strong> {test.Method}</p>
            <p><strong>Observed Value:</strong> {test['Observed Value']}</p>
            <p><strong>Biological Range:</strong> {test['Biological Range']}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function MedicalReports() {
  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">

<div class="flex items-center justify-center">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-3/6 h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-50 dark:hover:bg-gray-50">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
<br></br>
<br></br>
        {data.map((report, index) => (
          <MedicalReport key={index} report={report} />
        ))}
      </div>
    </div>
  );
}

