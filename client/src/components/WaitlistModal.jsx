import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { EMAIL_URL, WAITLIST_FORM_ENDPOINT } from '../config/links';
import '../styles/WaitlistModal.css';

const EMPTY = { firstName: '', lastName: '', email: '' };

// Popup form for the Nutch waitlist. Each signup is emailed to Kene (see
// WAITLIST_FORM_ENDPOINT). Closes on Escape, on the backdrop and on the
// close button, and hands focus back to whatever opened it. Rendered into
// <body> so it sits above the fixed site header.
const WaitlistModal = ({ isOpen, onClose, product = 'Nutch' }) => {
  const [fields, setFields] = useState(EMPTY);
  const [status, setStatus] = useState('idle'); // idle | sending | done | error
  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const opener = document.activeElement;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    firstFieldRef.current?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      // Keep Tab inside the dialog
      if (e.key === 'Tab' && dialogRef.current) {
        const items = dialogRef.current.querySelectorAll('input:not([tabindex="-1"]), button');
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      opener?.focus?.();
    };
  }, [isOpen, onClose]);

  // Start fresh each time it opens
  useEffect(() => {
    if (isOpen) { setFields(EMPTY); setStatus('idle'); }
  }, [isOpen]);

  if (!isOpen) return null;

  const update = (name) => (e) => setFields((f) => ({ ...f, [name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    // Hidden from people; a bot that fills it in is quietly ignored
    if (form.elements._honey.value) { setStatus('done'); return; }
    setStatus('sending');
    try {
      const res = await fetch(WAITLIST_FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'First name': fields.firstName.trim(),
          'Last name': fields.lastName.trim(),
          email: fields.email.trim(),
          _subject: `New ${product} waitlist signup`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      setStatus(res.ok && String(data.success) === 'true' ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return createPortal(
    <div className="waitlist-overlay" onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}>
      <div
        className="waitlist-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="waitlist-title"
        ref={dialogRef}
      >
        <button type="button" className="waitlist-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {status === 'done' ? (
          <div className="waitlist-done" role="status">
            <h2 id="waitlist-title" className="waitlist-title">You’re on the list</h2>
            <p className="waitlist-text">Thanks, {fields.firstName.trim() || 'friend'}. We’ll email you when {product} is ready.</p>
            <button type="button" className="waitlist-submit" onClick={onClose}>Done</button>
          </div>
        ) : (
          <form className="waitlist-form" onSubmit={submit}>
            <h2 id="waitlist-title" className="waitlist-title">Join the {product} waitlist</h2>
            <p className="waitlist-text">Be the first to know when {product} launches.</p>

            <div className="waitlist-row">
              <label className="waitlist-field">
                <span>First name</span>
                <input ref={firstFieldRef} name="firstName" autoComplete="given-name" required value={fields.firstName} onChange={update('firstName')} />
              </label>
              <label className="waitlist-field">
                <span>Last name</span>
                <input name="lastName" autoComplete="family-name" required value={fields.lastName} onChange={update('lastName')} />
              </label>
            </div>
            <label className="waitlist-field">
              <span>Email address</span>
              <input name="email" type="email" autoComplete="email" required value={fields.email} onChange={update('email')} />
            </label>

            {/* Honeypot: off-screen and skipped by keyboard and autofill */}
            <input className="waitlist-honey" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

            {status === 'error' && (
              <p className="waitlist-error" role="alert">
                Something went wrong. Please try again, or email <a href={EMAIL_URL}>{EMAIL_URL.replace('mailto:', '')}</a>.
              </p>
            )}

            <button type="submit" className="waitlist-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Joining…' : 'Join waitlist'}
            </button>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
};

export default WaitlistModal;
