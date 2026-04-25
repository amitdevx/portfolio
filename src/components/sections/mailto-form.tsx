'use client';

import { useState, type FormEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

interface MailtoFormProps {
  user: string;
  domain: string;
}

export default function MailtoForm({ user, domain }: MailtoFormProps) {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${user}@${domain}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input 
          id="subject"
          placeholder="Subject of your email" 
          value={subject} 
          onChange={(e) => setSubject(e.target.value)} 
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="body">Message</Label>
        <Textarea 
          id="body"
          placeholder="Your message..." 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          rows={5} 
          required
        />
      </div>
      <Button type="submit" className="group">
        Send Email
        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </form>
  );
}
