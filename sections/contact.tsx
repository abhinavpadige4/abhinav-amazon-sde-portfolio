import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import FormInput from '@/components/form-input';
import FormButton from '@/components/form-button';

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data: any) => {
    // Using a placeholder Formspree endpoint - replace with actual ID in production
    fetch('https://formspree.io/f/moqywdvv', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          toast.success('Message sent successfully!');
        } else {
          throw new Error('Failed to send');
        }
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  return (
    <section id="contact" className="space-y-12 px-4">
      <h2 className="text-3xl font-bold text-center text-foreground">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
        <FormInput
          label="Name"
          name="name"
          placeholder="Enter your full name"
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          placeholder="Enter your email address"
        />
        <FormInput
          label="Message"
          name="message"
          type="textarea"
          placeholder="Enter your message"
        />
        <FormButton
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </FormButton>
      </form>
    </section>
  );
}