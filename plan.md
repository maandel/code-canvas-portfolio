# Implementation Plan - Real-world Integrations for Portfolio

Integrate direct frontend-to-service communication for email sending and AI chatbot interaction.

## Scope Summary
- **Email**: Integrate **EmailJS** for client-side email dispatch.
- **AI Chatbot**: Integrate **OpenAI API** (or compatible) for real-time AI responses directly from the frontend.
- **Environment Management**: Use Vite's `.env` support for API keys.

## Affected Areas
- `src/components/Contact.tsx`: Implement EmailJS `send` logic.
- `src/components/Chatbot.tsx`: Implement `fetch` call to AI service.
- `.env`: (Guidance provided) Store API keys.

## Ordered Phases

### Phase 1: Email Integration
- Configure `src/components/Contact.tsx` with `@emailjs/browser`.
- Use `import.meta.env` for `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
- Update the submission handler to perform actual email sending with loading and success toasts.

### Phase 2: AI Chatbot Integration
- Configure `src/components/Chatbot.tsx` with an AI endpoint (e.g., OpenAI).
- Implement a `fetch` request to the AI service in `handleSend`.
- Use `import.meta.env` for `VITE_AI_API_KEY` and `VITE_AI_MODEL`.
- Handle stream or JSON responses to provide dynamic chatbot behavior.
- *Note: Warn user about frontend API key exposure.*

### Phase 3: Validation & Refinement
- Ensure error handling for failed API calls.
- Update UI to reflect "Sending..." or "Thinking..." states more accurately.
