interface SubscriptionData {
  name: string;
  email: string;
  country: string;
  acceptTerms: boolean;
}

export const submitToMailchimp = async (data: SubscriptionData): Promise<Response> => {
  const MAILCHIMP_SERVER = "us9"; // Seu servidor é us9 baseado na API key
  const MAILCHIMP_LIST_ID = "54cfdb8af4"; // Seu Audience ID
  const MAILCHIMP_URL = `https://${MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`;
  const API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;

  console.log("Enviando dados para Mailchimp:", { email: data.email, name: data.name, country: data.country });

  const response = await fetch(MAILCHIMP_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Mailchimp usa Basic Auth com "anystring:apikey"
      "Authorization": `Basic ${btoa(`anystring:${API_KEY}`)}`,
    },
    body: JSON.stringify({
      email_address: data.email,
      status: "subscribed",
      merge_fields: {
        FNAME: data.name,
        COUNTRY: data.country
      }
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    console.error("Erro Mailchimp:", errorData);
    throw new Error(errorData.detail || 'Falha ao enviar para Mailchimp');
  }

  return response;
};

export type { SubscriptionData };