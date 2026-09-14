'use client';
import { useState } from 'react';
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const r = await fetch('https://formspree.io/f/moqywdvv', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      setStatus(r.ok ? 'Message sent successfully!' : 'Failed to send. Try again.');
    } catch { setStatus('Failed to send. Try again.'); }
  };
  const inp = 'bg-input/20 border border-input/50 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-primary';
  return (
    <section id="contact" className="space-y-12 px-4">
      <h2 className="text-3xl font-bold text-center text-foreground">Contact Me</h2>
      <form onSubmit={onSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div className="space-y-2"><label className="text-sm font-medium text-muted-foreground">Name</label>
        <input className={inp} placeholder="Enter your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></div>
        <div className="space-y-2"><label className="text-sm font-medium text-muted-foreground">Email</label>
        <input className={inp} type="email" placeholder="Enter your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required /></div>
        <div className="space-y-2"><label className="text-sm font-medium text-muted-foreground">Message</label>
        <textarea className={inp} placeholder="Enter your message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required /></div>
        <button type="submit" className="bg-primary px-6 py-3 rounded text-white font-medium hover:bg-primary/90 transition-colors">Send Message</button>
        {status && <p className="text-sm text-muted-foreground">{status}</p>}
      </form>
    </section>
  );
}
