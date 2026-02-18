import { useState } from "react";
import { Star, Send, CheckCircle, ThumbsUp, Lightbulb, Bug, MessageSquare } from "lucide-react";
import { submitForm } from "../../services/formService";

const feedbackTypes = [
  { id: "suggestion", label: "Suggestion", icon: Lightbulb, color: "#f57c00" },
  { id: "compliment", label: "Compliment", icon: ThumbsUp, color: "#4caf50" },
  { id: "complaint", label: "Complaint", icon: MessageSquare, color: "#d32f2f" },
  { id: "bug", label: "Bug Report", icon: Bug, color: "#9c27b0" },
];

const ratingLabels = ["Very Dissatisfied", "Dissatisfied", "Neutral", "Satisfied", "Very Satisfied"];

const initialState = {
  type: "",
  rating: 0,
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function FeedbackForm() {
  const [formData, setFormData] = useState(initialState);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (error) setError(null);

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const honeypot = (form.elements.namedItem("website") as HTMLInputElement)?.value;

    // 🚫 If bot filled hidden field → silently stop
    if (honeypot) return;

    if (!formData.type) {
      setError("Please select feedback type.");
      return;
    }

    if (!formData.rating) {
      setError("Please provide a rating.");
      return;
    }

    setError(null);
    setIsSubmitting(true);

    try {
      const result = await submitForm("feedback", {
        ...formData,

      subject: `New Feedback - ${formData.subject}`,
      from_name: "GrabOffer Feedback",
    });


      if (!result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setIsSubmitted(true);
      setFormData(initialState);

    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-600">Your feedback has been received. We appreciate your input!</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Feedback Type */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">What type of feedback do you have? *</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {feedbackTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, type: type.id }))}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  formData.type === type.id ? "border-[#e91e63] bg-pink-50" : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <Icon
                  className="w-6 h-6"
                  style={{
                    color: formData.type === type.id ? type.color : "#9ca3af",
                  }}
                />
                <span
                  className={`text-sm font-medium ${formData.type === type.id ? "text-gray-900" : "text-gray-500"}`}
                >
                  {type.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Rating */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          How would you rate your experience with GrabOn?
        </label>
        <div className="flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, rating: star }))}
              onMouseEnter={() => setHoveredRating(star)}
              onMouseLeave={() => setHoveredRating(0)}
              className="p-1 transition-transform hover:scale-110"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoveredRating || formData.rating) ? "fill-[#f57c00] text-[#f57c00]" : "text-gray-300"
                }`}
              />
            </button>
          ))}
        </div>

        {formData.rating > 0 && (
          <p className="text-center text-sm text-gray-500 mt-2">{ratingLabels[formData.rating - 1]}</p>
        )}
      </div>

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all"
            placeholder="John Doe"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all"
            placeholder="john@example.com"
          />
        </div>
      </div>

      {/* Subject */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all"
          placeholder="Brief description of your feedback"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Your Feedback *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:border-[#e91e63] focus:bg-white focus:outline-none transition-all resize-none"
          placeholder="Please share your detailed feedback here..."
        />
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-[#e91e63] text-white rounded-xl font-semibold hover:bg-[#c2185b] transition-colors disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Submit Feedback"}
        {!isSubmitting && <Send className="w-5 h-5" />}
      </button>
    </form>
  );
}
