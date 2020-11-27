import Link from 'next/link';
import Layout from '../components/layout';

export default function Work() {
  return (
    <Layout>
      <div className="w-4/6 mx-auto">
        <h1 className="font-bold text-4xl mt-8">çalışmalarım</h1>

        <div className="grid grid-cols-2 gap-6 mt-6">
          <div>
            <div className="border-solid border-2 rounded border-gray-300">
              <img src="/images/modaanaliz.png" alt="Moda Analiz" className="w-full h-96" />

              <Link href="https://modaanaliz.com">
                <a className="block py-8 text-xl font-semibold text-center pt-3 pb-0">
                  Moda Analiz
                </a>
              </Link>
              <h3 className="text-center text-gray-400 mb-3">B2B ve B2C E-Ticaret Sitesi</h3>
            </div>
          </div>

          <div>
            <div className="border-solid border-2 rounded border-gray-300">
              <img src="/images/izlegor.png" alt="İzle Gör" className="w-full h-96" />

              <Link href="https://modaanaliz.com">
                <a className="block py-8 text-xl font-semibold text-center pt-3 pb-0">
                  İzle Gör
                </a>
              </Link>
              <h3 className="text-center text-gray-400 mb-3">Aktivite Kiralama</h3>
            </div>
          </div>

          <div>
            <div className="border-solid border-2 rounded border-gray-300">
              <img src="/images/promoyotel.png" alt="ProMoyOtel" className="w-full h-96" />

              <Link href="https://modaanaliz.com">
                <a className="block py-8 text-xl font-semibold text-center pt-3 pb-0">
                  ProMoyOtel
                </a>
              </Link>
              <h3 className="text-center text-gray-400 mb-3">Tatil Kiralama</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}