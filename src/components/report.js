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
        <h1 mt={30} mb={30}>Phyiscal ➡️ Digital</h1>
      <iframe src="https://pragnakalp-ocr-image-to-text.hf.space" class=" ml-96" width="100%"
            height="550"></iframe>

<br></br>
<br></br>
        {data.map((report, index) => (
          <MedicalReport key={index} report={report} />
        ))}
      </div>
    </div>
  );
}

