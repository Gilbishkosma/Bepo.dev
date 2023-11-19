import Link from 'next/link';
import { getCountries } from 'whatsapp-country-code';
/**
 * Renders the Home page component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Home() {
  return (
    <>
      <div className='hero min-h-screen' style={{ backgroundImage: 'url()' }}>
        <div>
          <div className='grid text-7xl font-black'>
            Use OpenAi from your <p className='text-success'>whatsapp</p>
          </div>
          <p className='mt-2'>
            Unleash the Power of OpenAI in Your WhatsApp World: Where Innovation
            Meets Instant Messaging!
          </p>
          <Link href='/dashboard'>
            <button className='btn btn-outline btn-success mt-4'>
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
