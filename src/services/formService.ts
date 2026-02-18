const WEB3_ENDPOINT = "https://api.web3forms.com/submit";

const ACCESS_KEYS = {
  newsletter: import.meta.env.VITE_WEB3_NEWSLETTER_KEY,
  contact: import.meta.env.VITE_WEB3_CONTACT_KEY,
  partner: import.meta.env.VITE_WEB3_PARTNER_KEY,
  feedback: import.meta.env.VITE_WEB3_FEEDBACK_KEY,
  unsubscribe: import.meta.env.VITE_WEB3_UNSUB_KEY,
};

const GOOGLE_SHEET_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

export type FormType = keyof typeof ACCESS_KEYS;

export async function submitForm(type: FormType, data: any) {
  const accessKey = ACCESS_KEYS[type];

  if (!accessKey) {
    throw new Error(`Missing API key for ${type} form`);
  }

  try {
    const web3Response = await fetch(WEB3_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `GrabOffer - ${type.toUpperCase()} Form`,
        from_name: "GrabOffer Website",
        ...data,
      }),
    });

    const result = await web3Response.json();

    if (!result.success) {
      throw new Error(result.message || "Web3Forms submission failed");
    }

    // Log to Google Sheets (non-blocking)
    if (GOOGLE_SHEET_URL) {
      fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: JSON.stringify({
          ...data,
          type,
          timestamp: new Date().toISOString(),
        }),
      }).catch(() => {
        console.warn("Google Sheet logging failed");
      });
    }

    return result;

  } catch (error: any) {
    throw new Error(error.message || "Form submission failed");
  }
}
