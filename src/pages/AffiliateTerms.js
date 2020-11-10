import React from 'react';

import Header from '../partials/Header';

const AffiliateTerms = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-8">
                <h3 className="h3">Affiliate Program Terms of Service</h3>
              </div>

              <div className="text-gray-600 text-center mt-6">
                  TBD
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default AffiliateTerms;