import React, { useState } from 'react';
import './Faq.css';

const FAQS = [
  {
    q: 'Does Sentinel store or share my data?',
    a: 'No. Nothing you type into Sentinel is ever stored, logged, or transmitted to any third party. Your conversation exists only in your browser\'s memory for the duration of the session. When you close or refresh the page, everything is permanently erased. We have no database, no user accounts, and no analytics tied to your responses.',
  },
  {
    q: 'Is Sentinel a replacement for calling the police or authorities?',
    a: 'Absolutely not. Sentinel is an educational screening tool — it helps you recognize patterns and understand your risk level. If you believe you have been scammed or are in danger, you should contact law enforcement immediately. File a report with the FBI\'s Internet Crime Complaint Center (IC3) at ic3.gov and with the FTC at reportfraud.ftc.gov. Your local police department can also help document the crime.',
  },
  {
    q: 'What do I do if I am in immediate danger?',
    a: 'Call 911 (or your local emergency number) right away. Sentinel is not an emergency service and cannot contact authorities on your behalf. If you are being threatened, coerced, or feel physically unsafe, please stop using this tool and call emergency services immediately.',
  },
  {
    q: 'I already sent money. Is there any way to get it back?',
    a: 'Act fast. Contact your bank or financial institution immediately — some wire transfers or card transactions can be reversed if reported quickly. If you used cryptocurrency, recovery is extremely difficult because blockchain transactions are irreversible, though law enforcement agencies are developing crypto-tracing capabilities. Report to the FTC and FBI IC3 regardless, as it helps investigators build cases. Never pay a "recovery fee" to someone who claims they can get your money back — that is a secondary scam.',
  },
  {
    q: 'Can Sentinel give a wrong result?',
    a: 'Yes. No AI tool is perfect. Sentinel is designed to surface patterns consistent with known fraud tactics, but it may produce false positives (flagging a legitimate relationship) or miss red flags in unusual situations. The results should be treated as a starting point for reflection and investigation — not a definitive verdict. If you are uncertain, speak with a trusted friend, counselor, or law enforcement.',
  },
  {
    q: 'How does Sentinel\'s AI actually work?',
    a: 'Sentinel uses a large language model (LLM) guided by a structured prompt that incorporates documented characteristics of pig butchering and romance scams drawn from FBI IC3 reports and fraud research. Based on your answers, it identifies which patterns from your situation match known scam tactics, then assigns a risk level: Low, Moderate, High, or Very High. The AI does not access the internet, cannot look up the person you are describing, and cannot verify identities.',
  },
  {
    q: 'Does Sentinel work for other types of scams?',
    a: 'Sentinel is specifically trained and optimized to detect pig butchering (crypto investment) scams and romance scams. While some general fraud patterns may overlap with other scam types — such as advance-fee fraud or lottery scams — Sentinel is not designed to assess those scenarios reliably. For other fraud types, visit the FTC\'s consumer information pages at consumer.ftc.gov.',
  },
  {
    q: 'The person I am talking to seems real. Could I still be getting scammed?',
    a: 'Yes. Professional scam operations employ real human operators who work in shifts and are trained to build authentic-feeling connections. The person you have been talking to may be a real human being — but one who is paid to deceive you. The emotional bond you feel is real even if the relationship itself is a construct designed to exploit you. This is precisely what makes these scams so effective and so devastating.',
  },
  {
    q: 'Should I confront the person directly if I suspect a scam?',
    a: 'We recommend against direct confrontation, especially before you have preserved all evidence. Confronting the person may cause them to delete accounts, block you, or escalate pressure tactics. Instead, quietly take screenshots of all conversations, profile pictures, and any financial communications. Then cease contact and report to authorities. Do not warn the scammer that you have reported them.',
  },
  {
    q: 'Is there support available for scam victims?',
    a: 'Yes. Being defrauded — especially through emotional manipulation — can cause significant psychological harm including shame, depression, and grief. The Global Anti-Scam Organization (GASO) at globalantiscam.org offers peer support communities and resources specifically for pig butchering victims. The AARP Fraud Watch Network Helpline (1-877-908-3360) offers free counseling and support. You are not alone, and being victimized is not your fault.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  return (
    <div className="faq-wrapper">
      <div className="faq-container">

        <div className="faq-header">
          <h1 className="faq-page-title">Frequently Asked <span>Questions</span></h1>
          <p className="faq-page-desc">
            Everything you need to know about Sentinel, your privacy, and what to do if you've been targeted.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? ' faq-item-open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={open === i}
              >
                <span className="faq-q-number">{String(i + 1).padStart(2, '0')}</span>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-chevron" aria-hidden="true">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faq-footer-note">
          <p>
            Still have questions?{' '}
            If you are in immediate danger, call <strong>911</strong>. To report fraud, visit{' '}
            <a href="https://ic3.gov" target="_blank" rel="noreferrer">ic3.gov</a> or{' '}
            <a href="https://reportfraud.ftc.gov" target="_blank" rel="noreferrer">reportfraud.ftc.gov</a>.
          </p>
        </div>

      </div>
    </div>
  );
}