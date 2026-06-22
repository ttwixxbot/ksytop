import { siteContacts } from "@/data/site";

type MailtoParams = {
  subject: string;
  lines: string[];
};

export function createMailtoLink({ subject, lines }: MailtoParams) {
  const body = lines.filter(Boolean).join("\n");

  return `${siteContacts.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
