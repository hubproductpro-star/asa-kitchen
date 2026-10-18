import { useState, type FormEvent } from 'react';
import { business, whatsappUrl } from '../data/business';
import { ArrowRight, ArrowUpRight } from './Icons';

type EnquiryType = 'general' | 'reservation' | 'menu' | 'other';
type FormValues = {
  fullName: string;
  phone: string;
  enquiryType: EnquiryType;
  date: string;
  guests: string;
  message: string;
};
type FormField = keyof FormValues;
type FormErrors = Partial<Record<FormField, string>>;

const initialForm: FormValues = {
  fullName: '',
  phone: '',
  enquiryType: 'general',
  date: '',
  guests: '',
  message: '',
};

const enquiryLabels: Record<EnquiryType, string> = {
  general: 'General enquiry',
  reservation: 'Reservation request',
  menu: 'Menu enquiry',
  other: 'Other',
};

function localDateString() {
  const today = new Date();
  const offset = today.getTimezoneOffset();
  return new Date(today.getTime() - offset * 60_000).toISOString().slice(0, 10);
}

function ErrorMessage({ id, children }: { id: string; children: string }) {
  return <span className="field-error" id={id} role="alert">{children}</span>;
}

export function EnquirySection() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [preparedLink, setPreparedLink] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState('');

  const updateField = <K extends FormField>(field: K, value: FormValues[K]) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setPreparedLink(null);
    setStatusMessage('');
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    const name = form.fullName.trim();
    const phoneDigits = form.phone.replace(/\D/g, '');
    const message = form.message.trim();

    if (!name) nextErrors.fullName = 'Please enter your full name.';
    else if (name.length < 2) nextErrors.fullName = 'Please enter at least two characters.';

    if (!form.phone.trim()) nextErrors.phone = 'Please enter a phone number.';
    else if (phoneDigits.length < 7 || phoneDigits.length > 15) nextErrors.phone = 'Enter a valid phone number, including the country code if needed.';

    if (!form.enquiryType) nextErrors.enquiryType = 'Please choose an enquiry type.';

    if (form.enquiryType === 'reservation') {
      if (!form.date) nextErrors.date = 'Please choose a preferred date.';
      else if (new Date(`${form.date}T00:00:00`) < new Date(`${localDateString()}T00:00:00`)) {
        nextErrors.date = 'Please choose today or a future date.';
      }

      const guests = Number(form.guests);
      if (!form.guests) nextErrors.guests = 'Please enter the number of guests.';
      else if (!Number.isInteger(guests) || guests < 1 || guests > 30) nextErrors.guests = 'Enter a whole number from 1 to 30.';
    }

    if (!message) nextErrors.message = 'Please add a short message so we know how to help.';
    else if (message.length < 5) nextErrors.message = 'Please enter at least five characters.';
    else if (message.length > 1200) nextErrors.message = 'Please keep your message under 1,200 characters.';

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPreparedLink(null);
    setStatusMessage('');
    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField = Object.keys(nextErrors)[0];
      if (firstInvalidField) requestAnimationFrame(() => document.getElementById(firstInvalidField)?.focus());
      setStatusMessage('Please check the fields marked below.');
      return;
    }

    const isReservation = form.enquiryType === 'reservation';
    const message = [
      `Hello ${business.name}, I would like to make a ${enquiryLabels[form.enquiryType].toLowerCase()}.`,
      '',
      `Name: ${form.fullName.trim()}`,
      `Phone: ${form.phone.trim()}`,
      ...(isReservation ? [`Preferred date: ${form.date}`, `Number of guests: ${form.guests}`] : []),
      `Message: ${form.message.trim()}`,
      '',
      ...(isReservation ? ['I understand this is a request only and is not confirmed until Àṣà Kitchen replies.'] : []),
    ].join('\n');
    const link = whatsappUrl(message);

    // Open directly from the submit gesture. If a browser blocks the new tab,
    // the accessible follow-up link below gives the customer another way in.
    const whatsappWindow = window.open(link, '_blank');
    if (whatsappWindow) whatsappWindow.opener = null;

    setPreparedLink(link);
    setStatusMessage('Your WhatsApp message is prepared. Review it and tap Send in WhatsApp to complete your enquiry.');
  };

  return (
    <section className="enquiry-section section-pad" id="enquiry" aria-labelledby="enquiry-title">
      <div className="page-shell enquiry-section__layout">
        <div className="enquiry-section__intro">
          <p className="eyebrow"><span className="eyebrow__dash" /> Let’s make a plan</p>
          <h2 className="section-title" id="enquiry-title">Your next great meal <em>starts here.</em></h2>
          <p className="body-copy">Planning a visit, asking about our menu, or making arrangements for a special occasion? Get in touch with Àṣà Kitchen.</p>
          <div className="enquiry-section__aside">
            <span className="enquiry-section__aside-mark" aria-hidden="true">À</span>
            <p>Tell us a little about what you have in mind. We’ll pick up the conversation on WhatsApp.</p>
          </div>
        </div>

        <div className="enquiry-card">
          <div className="enquiry-card__top">
            <span>01 <i /> 02</span>
            <p>Share a few details</p>
          </div>

          <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
            <div className="form-grid">
              <div className="form-field">
                <label htmlFor="fullName">Full name <span aria-hidden="true">*</span></label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  maxLength={100}
                  required
                  value={form.fullName}
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                  onChange={(event) => updateField('fullName', event.currentTarget.value)}
                />
                {errors.fullName && <ErrorMessage id="fullName-error">{errors.fullName}</ErrorMessage>}
              </div>

              <div className="form-field">
                <label htmlFor="phone">Phone number <span aria-hidden="true">*</span></label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  maxLength={24}
                  placeholder="e.g. 080… or +234…"
                  required
                  value={form.phone}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  onChange={(event) => updateField('phone', event.currentTarget.value)}
                />
                {errors.phone && <ErrorMessage id="phone-error">{errors.phone}</ErrorMessage>}
              </div>

              <div className="form-field form-field--full">
                <label htmlFor="enquiryType">What can we help with? <span aria-hidden="true">*</span></label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={form.enquiryType}
                  required
                  aria-invalid={Boolean(errors.enquiryType)}
                  aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
                  onChange={(event) => updateField('enquiryType', event.currentTarget.value as EnquiryType)}
                >
                  <option value="general">General enquiry</option>
                  <option value="reservation">Reservation request</option>
                  <option value="menu">Menu enquiry</option>
                  <option value="other">Other</option>
                </select>
                {errors.enquiryType && <ErrorMessage id="enquiryType-error">{errors.enquiryType}</ErrorMessage>}
              </div>

              {form.enquiryType === 'reservation' && (
                <>
                  <div className="form-field">
                    <label htmlFor="date">Preferred date <span aria-hidden="true">*</span></label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      min={localDateString()}
                      required
                      value={form.date}
                      aria-invalid={Boolean(errors.date)}
                      aria-describedby={errors.date ? 'date-error' : undefined}
                      onChange={(event) => updateField('date', event.currentTarget.value)}
                    />
                    {errors.date && <ErrorMessage id="date-error">{errors.date}</ErrorMessage>}
                  </div>
                  <div className="form-field">
                    <label htmlFor="guests">Number of guests <span aria-hidden="true">*</span></label>
                    <input
                      id="guests"
                      name="guests"
                      type="number"
                      min="1"
                      max="30"
                      step="1"
                      inputMode="numeric"
                      required
                      placeholder="e.g. 4"
                      value={form.guests}
                      aria-invalid={Boolean(errors.guests)}
                      aria-describedby={errors.guests ? 'guests-error' : undefined}
                      onChange={(event) => updateField('guests', event.currentTarget.value)}
                    />
                    {errors.guests && <ErrorMessage id="guests-error">{errors.guests}</ErrorMessage>}
                  </div>
                </>
              )}

              <div className="form-field form-field--full">
                <label htmlFor="message">Your message <span aria-hidden="true">*</span></label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  minLength={5}
                  maxLength={1200}
                  required
                  placeholder="Tell us what you’d like to know…"
                  value={form.message}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : 'message-hint'}
                  onChange={(event) => updateField('message', event.currentTarget.value)}
                />
                {errors.message
                  ? <ErrorMessage id="message-error">{errors.message}</ErrorMessage>
                  : <span className="field-hint" id="message-hint">{form.message.length} / 1,200 characters</span>}
              </div>
            </div>

            <button className="button button--green enquiry-form__submit" type="submit">
              Continue in WhatsApp <ArrowRight />
            </button>
            <p className="enquiry-form__privacy">Your details stay in this browser until you continue. Nothing is sent from this website; you’ll need to review and send the prepared WhatsApp message.</p>

            <div className={`form-status${statusMessage ? ' form-status--visible' : ''}`} role="status" aria-live="polite" aria-atomic="true">
              {statusMessage && (
                <>
                  <p>{statusMessage}</p>
                  {preparedLink && (
                    <a href={preparedLink} target="_blank" rel="noopener noreferrer">
                      Open WhatsApp to send your enquiry <ArrowUpRight />
                    </a>
                  )}
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
