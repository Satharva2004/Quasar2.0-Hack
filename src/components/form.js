import React from "react";

export default function Forms() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <h2 className="text-xl font-semibold mb-4">Patient Information</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="regNo">Registration No.</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="regNo" type="text"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="collectionDate">Collection Date</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="collectionDate" type="text"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="name">Name</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="name" type="text" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="sampleReceived">Sample Received</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="sampleReceived" type="text"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="age">Age</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="age" type="text"/>
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="reportDate">Report Date</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="reportDate" type="text"  />
                </div>
                <div className="col-span-2">
                    <label className="block mb-2 text-sm font-semibold" htmlFor="sex">Sex</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="sex" type="text"/>
                </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Test Results</h2>
            <div className="grid grid-cols-4 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="test1">Test Name</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="test1" type="text" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="method1">Method</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="method1" type="text" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="observedValue1">Observed Value</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="observedValue1" type="text" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="biologicalRange1">Biological Range</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="biologicalRange1" type="text"  />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="test2">Test Name</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="test2" type="text" />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="method2">Method</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="method2" type="text"  />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="observedValue2">Observed Value</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="observedValue2"  />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-semibold" htmlFor="biologicalRange2">Biological Range</label>
                    <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" id="biologicalRange2"  />
                </div>
            </div>
        </div>
    );
}
