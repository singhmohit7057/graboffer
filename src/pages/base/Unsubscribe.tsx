import UnsubscribeForm from "../../components/forms/UnsubscribeForm";

export default function Unsubscribe() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 border">
        
        <h1 className="text-2xl font-semibold text-center mb-2">
          Unsubscribe
        </h1>

        <p className="text-sm text-gray-500 text-center mb-6">
          Enter your email to stop receiving deal updates.
        </p>

        <UnsubscribeForm />

      </div>
    </div>
  );
}
