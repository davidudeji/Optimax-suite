# Centrifuge Group: Lead Capture Form (short design)


## Intent and why
Visitors to the website can send a quote or demo request. Submissions arrive in the company email with enough detail to tell serious inquiries from casual ones and follow up quickly. Goal: turn existing site visits into paying clients.

## Goals
- A short form that a visitor can finish in about a minute on a phone.
- Every submission is emailed to the company address, including the details that help qualify it.
- Free to run: no paid plan, no card.

## Non-goals
- Storing leads in a database or CRM, a dashboard, auto-replies, follow-up sequences.
- Connecting to the Swagger backend (no access yet).

## Anti-goals
- Submissions lost silently (the visitor must see success or a clear error).
- The inbox flooded with spam.
- Any paid dependency.

## Constraints
- Existing stack: React + Vite on Vercel. The codebase has not been inspected.

## Approaches
- **A. Hosted form service (Web3Forms or Formspree free tier): chosen.** No server code, quick to ship. Free tiers cap monthly submissions, and a third party handles lead details.
- **B. Own Vercel serverless endpoint + free email service.** Full control and a path to the real API, but more to build and a sender address and credentials to manage. Kept as the upgrade path.
- Dropped: sending email directly from the browser (exposes keys, easy to spam).

Chosen: A, picked by David, because it ships fastest. The submit step sits behind one function so switching to B or the Swagger API later is a swap.

## Decisions made together
- Submissions go to the company email.
- Approach A first.

## My calls (not yet agreed; please check)
1. **Fields:** name, work email, company, phone (optional), service interested in (Enterprise software, Healthcare platforms, Logistics systems, Other), budget range (with "Not sure yet"), timeline, and a message.
2. **Spam protection:** a hidden honeypot field plus the service's built-in filtering.
3. **Validation:** required fields, email format, Nigerian and international phone formats when a phone is given.
4. **Privacy note** under the form saying how details are used (relevant under Nigeria's NDPA).
5. **After submit:** a clear success message, and an error state with a fallback (the company email shown) if sending fails.
6. **Placement:** a "Request a quote" section and a link in the main navigation.
7. **Which service** (Web3Forms or Formspree): chosen after checking current free limits.

## Left to the builder
- Visual design to match the existing site, component structure and styling approach.
- Exact wording and error messages.
- Accessibility (labels, keyboard use, focus handling).

## Open questions for David
- The company email address that should receive submissions : enquiries@centrifugegroup.com 
- Any fields to add or remove: Have custom default message and then ability to manually edit/write
