import { useState } from "react";
import { Bell } from "lucide-react";
import { submitForm } from "../../services/formService";

type Props = {
  entityName: string;
  entityType: "store" | "category";
  brandColor: string;
  variant?: "light" | "dark";
};

export default function Notify({
  entityName,
  entityType,
  brandColor,
  variant = "light",
}: Props) {
  const [showInput, setShowInput] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const isDark = variant === "dark";

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubmit = async () => {
    if (loading) return;

    if (!email.trim()) {
      setError("Please enter your email");
      return;
    }

    if (!validateEmail(email)) {
      setError("Enter a valid email address");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await submitForm("notify", {
        from_name: "GrabOffer Notify",
        subject: `New ${entityType} Notify Request`,
        email,
        entity_type: entityType,   // store or category
        entity_name: entityName,
        message: `User wants notification for ${entityType}: ${entityName}`,
      });

      setSuccess(true);
      setEmail("");
      setShowInput(false);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center">

      {/* Initial Button */}
      {!showInput && !success && (
        <button
          onClick={() => setShowInput(true)}
          className="px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:opacity-90"
          style={{
            backgroundColor: isDark ? "#ffffff" : brandColor,
            color: isDark ? brandColor : "#ffffff",
          }}
        >
          <Bell className="w-4 h-4 inline mr-2" />
          Notify Me When Available
        </button>
      )}

      {/* Email Input Section */}
      {showInput && !success && (
        <div className="mt-5 flex flex-col items-center gap-3">

          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            disabled={loading}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className={`px-4 py-2 rounded-lg w-72 text-sm transition disabled:opacity-60 focus:outline-none ${
              isDark ? "placeholder-white/80" : "placeholder-gray-400"
            }`}
            style={{
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.6)" : brandColor
              }`,
              backgroundColor: isDark
                ? "rgba(255,255,255,0.12)"
                : "#ffffff",
              backdropFilter: isDark ? "blur(6px)" : "none",
              color: isDark ? "#ffffff" : "#000000",
            }}
          />

          {error && (
  <p
    className={`text-xs font-medium ${
      isDark ? "text-red-300" : "text-red-500"
    }`}
  >
    {error}
  </p>
)}

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:opacity-90 disabled:opacity-60"
            style={{
              backgroundColor: isDark ? "#ffffff" : brandColor,
              color: isDark ? brandColor : "#ffffff",
              boxShadow: isDark ? "0 6px 20px rgba(0,0,0,0.15)" : "none",
            }}
          >
            Notify Me When Available
          </button>

          {!loading && (
            <button
              onClick={() => {
                setShowInput(false);
                setError("");
                setEmail("");
              }}
              className={`text-xs mt-1 hover:underline ${
                isDark ? "text-white/70" : "text-gray-500"
              }`}
            >
              Cancel
            </button>
          )}
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="mt-6 text-center">

          <p
            className={`font-semibold text-lg ${
              isDark ? "text-white" : "text-green-600"
            }`}
          >
            You're subscribed! We'll notify you.
          </p>

          <button
            onClick={() => setSuccess(false)}
            className={`text-sm mt-3 hover:underline ${
              isDark ? "text-white/80" : "text-gray-500"
            }`}
          >
            Subscribe another email
          </button>

        </div>
      )}

    </div>
  );
}