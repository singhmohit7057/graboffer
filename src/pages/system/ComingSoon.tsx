import SEO from '../../components/SEO';

export default function ComingSoon() {
  return (
    <>
    <SEO
      title="Coming Soon – GrabOffer"
      noIndex
    />

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0064c9] to-[#42a5f5] px-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8 text-center">
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#0064c9] flex items-center justify-center">
          <span className="text-white text-2xl font-bold">G</span>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Coming Soon
        </h1>

        <p className="text-gray-600 mb-6">
          We’re working hard to bring you something awesome. Stay tuned.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 rounded-full bg-[#0064c9] animate-pulse" />
          Launching shortly
        </div>

        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} GrabOn
        </div>
      </div>
    </div>
    </>
  );
}
