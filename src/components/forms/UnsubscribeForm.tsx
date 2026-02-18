import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { submitForm } from "../../services/formService";

const schema = z.object({
  email: z.string().email("Invalid email"),
});

export default function UnsubscribeForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (website) return; // honeypot

    const validation = schema.safeParse({ email });
    if (!validation.success) {
      toast.error(validation.error.issues[0].message);
      setMessage(validation.error.issues[0].message);
      setIsSuccess(false);
      return;
    }

    setLoading(true);

    const res = await submitForm("unsubscribe", {
      subject: "Unsubscribe Request",
        from_name: "GrabOffer UnSubscribe",
      email,
    });

    setLoading(false);

    if (res.success) {
      toast.success("Unsubscribed successfully.");
      setMessage("You have been unsubscribed successfully.");
      setIsSuccess(true);
      setEmail("");
    } else {
      toast.error("Failed to unsubscribe.");
      setMessage("Something went wrong. Please try again.");
      setIsSuccess(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <input
        type="text"
        style={{ display: "none" }}
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
      />

      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white px-4 py-2 w-full"
      >
        {loading ? "Processing..." : "Unsubscribe"}
      </button>

      {/* Inline Message */}
      {message && (
        <p
          className={`text-sm ${
            isSuccess ? "text-green-600" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
