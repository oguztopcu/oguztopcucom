import Link from 'next/link';
import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
      <div className="w-4/6 mx-auto">
        <h1 className="font-bold text-4xl mt-8">iletişim</h1>

        <p className="mt-6 leading-loose text-justify">
          <span className="block mb-2">selam!</span>

          Aşağıda bulunan bağlantı linkleriyle bana ulaşabilirsin.

          <ul className="mt-4">
            <li>
              <span className="font-semibold">Telefon Numaram: </span>
              <Link href="+905394042532">
                <a>0539 404 2532</a>
              </Link>
            </li>

            <li>
              <span className="font-semibold">E-Posta Adresim: </span>
              <Link href="mailto:me@oguztopcu.com">
                <a>me@oguztopcu.com</a>
              </Link>
            </li>

            <li>
              <span className="font-semibold">LinkedIn Adresim: </span>
              <Link href="https://linkedin.com/in/oguztopcu">
                <a>LinkedIn</a>
              </Link>
            </li>

            <li>
              <span className="font-semibold">GitHub Adresim: </span>
              <Link href="https://github.com/oguztopcu">
                <a>GitHub</a>
              </Link>
            </li>
          </ul>
        </p>
      </div>
    </Layout>
  );
}