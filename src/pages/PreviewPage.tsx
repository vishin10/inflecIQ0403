import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Download, 
  Mail, 
  ArrowLeft, 
  CheckCircle, 
  FileText, 
  Send,
  Bot,
  Sparkles,
  Copy,
  Edit
} from 'lucide-react';

export default function PreviewPage() {
  const location = useLocation();
  const { formData } = location.state || {};
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  // Sample generated cover letter
  const coverLetter = `Dear Hiring Manager,

I am writing to express my strong interest in the ${formData?.jobDescription?.split(' ').slice(0, 3).join(' ') || 'Software Developer'} position at your company. With my background in software development and passion for creating innovative solutions, I am excited about the opportunity to contribute to your team.

In my previous roles, I have developed expertise in modern web technologies including React, Node.js, and cloud platforms. My experience aligns well with the requirements outlined in your job posting, particularly in areas of:

• Full-stack development with modern JavaScript frameworks
• Database design and optimization
• Agile development methodologies
• Cross-functional team collaboration

I am particularly drawn to your company's commitment to innovation and would welcome the opportunity to bring my technical skills and creative problem-solving approach to your development team. I am confident that my experience and enthusiasm make me a strong candidate for this position.

Thank you for considering my application. I look forward to discussing how I can contribute to your team's success.

Best regards,
${formData?.firstName} ${formData?.lastName}
${formData?.email}
${formData?.phone}`;

  const handleSendEmail = async () => {
    setIsSending(true);
    // Simulate email sending
    setTimeout(() => {
      setIsSending(false);
      setIsEmailSent(true);
    }, 2000);
  };

  const handleDownload = () => {
    const element = document.createElement('a');
    const file = new Blob([coverLetter], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'cover-letter.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(coverLetter);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/form" className="flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
            <span className="text-gray-600">Back to Form</span>
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JobCraft AI
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cover Letter Preview */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Your Cover Letter
                  </h1>
                  <p className="text-gray-600">
                    AI-generated and ready to send
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-3 h-3 bg-green-500 rounded-full"
                  />
                  <span className="text-sm text-green-600 font-medium">Generated</span>
                </div>
              </div>

              {/* Cover Letter Content */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Cover Letter</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={copyToClipboard}
                        className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                        title="Copy to clipboard"
                      >
                        <Copy className="h-4 w-4" />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                        <Edit className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-800 leading-relaxed">
                      {coverLetter}
                    </pre>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  <Download className="h-5 w-5" />
                  <span>Download as PDF</span>
                </motion.button>

                <motion.button
                  onClick={handleSendEmail}
                  disabled={isSending || isEmailSent}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    isEmailSent 
                      ? 'bg-green-600 text-white' 
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  } disabled:opacity-50`}
                >
                  {isSending ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Sending...</span>
                    </>
                  ) : isEmailSent ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span>Email Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send to Recruiter</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Success Animation */}
            {isEmailSent && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle className="h-8 w-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Application Sent!
                </h3>
                <p className="text-green-700 text-sm">
                  Your cover letter has been sent to {formData?.recruiterEmail}
                </p>
              </motion.div>
            )}

            {/* Application Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Application Summary
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">Applicant:</span>
                  <p className="font-medium text-gray-900">
                    {formData?.firstName} {formData?.lastName}
                  </p>
                </div>
                <div>
                  <span className="text-gray-500">Email:</span>
                  <p className="font-medium text-gray-900">{formData?.email}</p>
                </div>
                <div>
                  <span className="text-gray-500">Recruiter:</span>
                  <p className="font-medium text-gray-900">{formData?.recruiterEmail}</p>
                </div>
                <div>
                  <span className="text-gray-500">Subject:</span>
                  <p className="font-medium text-gray-900">{formData?.emailSubject}</p>
                </div>
              </div>
            </motion.div>

            {/* AI Assistant */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <Bot className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                  <p className="text-xs text-gray-600">JobCraft AI</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mb-4">
                Great job! Your resume and cover letter have been optimized for ATS systems and 
                tailored to match the job requirements. The AI has highlighted your 
                relevant skills and experience.
              </p>
              <div className="flex items-center space-x-2 text-xs text-blue-600">
                <Sparkles className="h-4 w-4" />
                <span>95% Match Score</span>
              </div>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg border border-gray-200 p-6"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Next Steps
              </h3>
              <div className="space-y-3">
                {[
                  "Follow up in 1-2 weeks if no response",
                  "Prepare for potential interview questions",
                  "Research the company culture and values",
                  "Update your LinkedIn profile"
                ].map((step, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-blue-600">{index + 1}</span>
                    </div>
                    <p className="text-sm text-gray-700">{step}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Create Another Application */}
            <Link
              to="/form"
              className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              Create Another Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}