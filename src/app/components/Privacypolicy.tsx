import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black text-white max-w-2xl mx-auto mt-8 px-4 py-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
      <p className="text-gray-300 mb-6">
        Your privacy is important to us. This Privacy Policy outlines how we
        collect, use, disclose, and protect your information when you use our
        services.
      </p>

      <div className="border-t border-solid border-gray-600 py-6">
        <h2 className="text-2xl font-semibold mb-2">
          Information Collection and Use
        </h2>
        <p className="text-gray-300 mb-4">
          We collect various types of information for different purposes,
          including but not limited to personal identification information,
          non-personal information, and more. The information collected is used
          to provide and improve our services.
        </p>
      </div>

      <div className="border-t border-solid border-gray-600 py-6">
        <h2 className="text-2xl font-semibold mb-2">Consent</h2>
        <p className="text-gray-300 mb-4">
          By using our services, you consent to the collection, use, and
          disclosure of your information in accordance with this Privacy Policy.
          If you do not agree with the terms, please refrain from using our
          services.
        </p>
      </div>

      <div className="border-t border-solid border-gray-600 py-6">
        <h2 className="text-2xl font-semibold mb-2">
          Changes to This Privacy Policy
        </h2>
        <p className="text-gray-300 mb-4">
          We may update our Privacy Policy from time to time. Any changes will
          be effective immediately upon posting the updated policy on our
          website. It is your responsibility to review this Privacy Policy
          periodically for changes.
        </p>
      </div>

      <div className="border-t border-solid border-gray-600 py-6">
        <h2 className="text-2xl font-semibold mb-2">Information Security</h2>
        <p className="text-gray-300 mb-4">
          We prioritize the security of your information and take reasonable
          steps to protect it. However, no method of transmission over the
          internet or electronic storage is completely secure. Therefore, we
          cannot guarantee absolute security.
        </p>
      </div>

      <div className="border-t border-solid border-gray-600 py-6">
        <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
        <p className="text-gray-300 mb-4">
          If you have any questions or concerns about our Privacy Policy, please
          contact us at{' '}
          <a href="mailto:polar@IDK.COM" className="text-blue-400">
            polar@IDK.COM
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
