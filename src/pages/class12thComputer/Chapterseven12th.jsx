import React from "react";
import { motion } from "framer-motion";

export default function ChapterSeven12th() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white shadow-lg rounded-2xl max-w-4xl w-full p-6 md:p-10"
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-6">
            Chapter 7 : Understanding Data
          </h1>

          {/* Data Definition */}
          <motion.div className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                It is a collection of alphabet, numbers and other symbols that
                represent a value of some situation or variable.
              </li>
              <li>Data are stored in a computer in the form of 0 and 1.</li>
              <li>
                Examples of data: name, age, gender, contact detail of a person.
              </li>
              <li>Any image, text, audio, video file, etc.</li>
              <li>Documents, web pages, online posts, comments and messages.</li>
            </ul>
          </motion.div>

          {/* Importance of Data */}
          <motion.div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Importance of Data
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Data helps in decision making.</li>
              <li>
                Bank needs data to maintain and update the records of any
                account holder.
              </li>
              <li>
                Data helps in business organizations to achieve their goals.
              </li>
              <li>
                Scientists record data while doing experiments to calculate and
                compare results.
              </li>
            </ul>
          </motion.div>

          {/* Types of Data */}
          <motion.div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Types of Data
            </h2>
            <p className="mb-2">
              Data comes from different sources in different formats.
            </p>
            <p className="mb-2">
              Example: image is a collection of pixels, video is made up of
              frames, and fee slip is made up of numeric and non-numeric entries.
            </p>
            <p className="mb-2">
              There are two broad categories of data based on these formats:
            </p>

            {/* Structured Data */}
            <h3 className="text-xl font-semibold text-gray-700 mt-4">
              1. Structured Data
            </h3>
            <p>
              Data which is organized and can be stored in a well-defined format
              is called structured data.
            </p>
            <p>Usually stored in computer in table format.</p>
            <div className="overflow-x-auto mt-3">
              <table className="table-auto border border-gray-400 w-full text-left">
                <thead>
                  <tr>
                    <th className="border px-3 py-1">Roll No.</th>
                    <th className="border px-3 py-1">Name</th>
                    <th className="border px-3 py-1">Subject</th>
                    <th className="border px-3 py-1">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-3 py-1">101</td>
                    <td className="border px-3 py-1">Dev</td>
                    <td className="border px-3 py-1">English</td>
                    <td className="border px-3 py-1">98</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">102</td>
                    <td className="border px-3 py-1">Kush</td>
                    <td className="border px-3 py-1">Hindi</td>
                    <td className="border px-3 py-1">93</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">103</td>
                    <td className="border px-3 py-1">Amit</td>
                    <td className="border px-3 py-1">Computer</td>
                    <td className="border px-3 py-1">92</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">104</td>
                    <td className="border px-3 py-1">Ravi</td>
                    <td className="border px-3 py-1">Geography</td>
                    <td className="border px-3 py-1">90</td>
                  </tr>
                  <tr>
                    <td className="border px-3 py-1">105</td>
                    <td className="border px-3 py-1">Ram</td>
                    <td className="border px-3 py-1">Math</td>
                    <td className="border px-3 py-1">94</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Unstructured Data */}
            <h3 className="text-xl font-semibold text-gray-700 mt-6">
              2. Unstructured Data
            </h3>
            <p>
              When data are stored in no particular format and no fixed
              structure.
            </p>
            <p>
              <span className="font-semibold">Example:</span> Newspapers,
              E-mails
            </p>
          </motion.div>

          {/* Data Collection */}
          <motion.div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Data Collection
            </h2>
            <p>
              A process to collect data from different sources is called data
              collection.
            </p>
            <p>
              <span className="font-semibold">Example:</span> Sales data in
              grocery stores available in diary/register or digital format like
              Excel sheet.
            </p>
          </motion.div>

          {/* Data Storage */}
          <motion.div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Data Storage
            </h2>
            <p>
              A process to store the collected data in computer storage devices.
            </p>
            <p>
              <span className="font-semibold">Examples:</span> Hard disk, DVD,
              Pen drive, Memory card, CD, SSD.
            </p>
          </motion.div>

          {/* Data Processing */}
          <motion.div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Data Processing
            </h2>
            <p>
              In computers, data needs to be processed to get the result and
              then we take decisions.
            </p>
            <p>
              <span className="font-semibold">Cycle:</span> Raw Data → Data
              Processing → Information
            </p>

            <div className="mt-4">
              <h3 className="font-semibold text-gray-800 mb-2">
                Data Process Cycle
              </h3>
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Input:</span> Data Collection,
                  Data Preparation, Data Entry
                </li>
                <li>
                  <span className="font-semibold">Processing:</span> Store,
                  Retrieve, Classify, Update
                </li>
                <li>
                  <span className="font-semibold">Output:</span> Reports,
                  Results, Processing System
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Techniques for Data Processing */}
          <motion.div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Techniques for Data Processing
            </h2>
            <h3 className="text-xl font-semibold mt-4">
              Statistical Techniques
            </h3>
            <p>
              There are various techniques to understand the data. They are
              mainly divided into:
            </p>

            {/* Measures of Central Tendency */}
            <h3 className="text-lg font-semibold mt-4">
              1. Measures of Central Tendency
            </h3>
            <p>
              It is the single value that gives us some idea about the data.
              There are three methods: Mean, Median, Mode.
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <span className="font-semibold">Mean:</span> The average of
                numeric values. <br />
                Formula: X̄ = Σx / n <br />
                Example: [10, 20, 30, 20, 10] → Mean = 90/5 = 18
              </li>
              <li>
                <span className="font-semibold">Median:</span> The middle value
                after sorting data in ascending order. <br />
                Formula: (n+1)/2 for odd, n/2 for even <br />
                Example: [10, 10, 20, 20, 30] → Median = 20
              </li>
              <li>
                <span className="font-semibold">Mode:</span> The value which
                occurs most frequently. <br />
                Example: [90, 120, 110, 115, 85, 90, 100, 110, 110, 107] → Mode
                = 110
              </li>
            </ul>

            {/* Measures of Variability */}
            <h3 className="text-lg font-semibold mt-6">
              2. Measures of Variability
            </h3>
            <p>
              It refers to the spread/diversity of values around the mean. It
              indicates the degree of diversity in a dataset.
            </p>

            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>
                <span className="font-semibold">Range:</span> Difference between
                maximum and minimum value. <br />
                Formula: R = Max – Min <br />
                Example: [100, 80, 90, 110, 120, 70] → Range = 120 – 70 = 50
              </li>
              <li>
                <span className="font-semibold">Standard Deviation:</span>{" "}
                Refers to the difference within the group of data of a variable.{" "}
                <br />
                Formula: σ = √(Σ(x – X̄)² / n) <br />
                Example: [10, 50, 20, 40, 30] → σ ≈ 14.12
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
