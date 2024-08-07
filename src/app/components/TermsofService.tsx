import React from 'react';

const TermsOfService = () => {
  return (
    <div
      style={{
        backgroundImage: `url('scene2.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="bg-black bg-opacity-50 text-white max-w-2xl mx-auto px-4 py-8 rounded-lg shadow-lg mt-10 mb-10">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Terms of Service
        </h1>
        <p className="text-gray-300 mb-6">
          Welcome to our platform. By using our services, you agree to comply
          with and be bound by the following terms and conditions. Please read
          the following terms carefully before using our services.
        </p>

        <div className="border-t border-gray-600 py-6">
          <h2 className="text-2xl font-semibold mb-2">Acceptance of Terms</h2>
          <p className="text-gray-300 mb-4">
            By accessing or using our services, you agree to these Terms of
            Service and all applicable laws and regulations. If you do not agree
            with any of these terms, you are prohibited from using or accessing
            our services.
          </p>
        </div>

        <div className="border-t border-gray-600 py-6">
          <h2 className="text-2xl font-semibold mb-2">Use of Services</h2>
          <p className="text-gray-300 mb-4">
            Our services are provided on an "as is" and "as available" basis. We
            reserve the right to modify or discontinue the services at any time
            without notice. We do not warrant that the services will be
            error-free or uninterrupted.
          </p>
        </div>

        <div className="border-t border-gray-600 py-6">
          <h2 className="text-2xl font-semibold mb-2">User Conduct</h2>
          <p className="text-gray-300 mb-4">
            You agree to use the services for lawful purposes and in a way that
            does not infringe on the rights of others. Prohibited activities
            include but are not limited to violating applicable laws, spreading
            harmful content, and unauthorized access to our systems.
          </p>
        </div>

        <div className="border-t border-gray-600 py-6">
          <h2 className="text-2xl font-semibold mb-2">Changes to Terms</h2>
          <p className="text-gray-300 mb-4">
            We reserve the right to update or change these Terms of Service at
            any time. The updated terms will be effective immediately upon
            posting on our website. It is your responsibility to review the
            terms periodically for changes.
          </p>
        </div>

        <div className="border-t border-gray-600 py-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions or concerns about our Privacy Policy,
            please contact us at{' '}
            <a href="mailto:polar@IDK.COM" className="text-blue-400">
              polar@IDK.COM
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
