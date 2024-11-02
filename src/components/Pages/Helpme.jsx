import React from 'react';

const HelpPage = () => {
  const faqs = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page."
    },
    {
      question: "How can I contact support?",
      answer: "You can contact our support team by emailing support@example.com or using the contact form on our website."
    },
    {
      question: "Where can I find the user guide?",
      answer: "The user guide is available in the 'Help' section of your account settings."
    },
    {
      question: "How do I update my profile information?",
      answer: "You can update your profile information in the 'Settings' page of your account."
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Help & Support</h2>

      <section className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Frequently Asked Questions</h3>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
            <li key={index} className="border-b border-gray-200 pb-4">
              <h4 className="text-lg font-semibold text-gray-800">{faq.question}</h4>
              <p className="text-gray-600">{faq.answer}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-2">If you need further assistance, please reach out to us:</p>
        <p className="text-gray-800">Email: <a href="mailto:imuhammadbilaldev@gmail.com" className="text-blue-500 hover:underline">support@example.com</a></p>
        <p className="text-gray-800">Phone: <span className="text-blue-500 hover:underline">+923039578370</span></p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl mt-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Additional Resources</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-blue-500 hover:underline">User Guide</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Full FAQ</a>
          </li>
          <li>
            <a href="#" className="text-blue-500 hover:underline">Community Forum</a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HelpPage;
