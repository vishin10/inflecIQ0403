import React from 'react';

export default function Careers() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-6">Current Openings</h1>
      <div className="bg-white shadow rounded-lg p-6 mb-4">
        <h2 className="text-xl font-semibold mb-2">Java Developer</h2>
        <p className="mb-2">We are looking for a skilled Full Stack Java Developer to join our team.</p>
        <ul className="list-disc pl-5 mb-2">
          <li>Experience with Java, Spring Boot, and REST APIs</li>
          <li>2+ years of professional experience</li>
          <li>Strong problem-solving skills</li>
        </ul>
        <p className="mb-2">To apply, send your resume to <a href="mailto:hr@infleciq.org" className="text-blue-600 underline">hr@infleciq.org</a></p>
      </div>
    </div>
  );
}