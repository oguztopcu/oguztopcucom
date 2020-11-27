import Link from 'next/Link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <div className="w-4/6 mx-auto mt-28 flex flex-wrap md:flex-nowrap">
        <div className="p-3 sm:w-full">
          <h1 className="text-5xl font-bold md:text-2xl">oğuz topçu</h1>
          <p className="py-4 relative">
            <span className="block mb-2">selam!</span>

            aradığın bir full-stack developer ise tam yerindesin! benimle hemen irtibata geç.
          </p>

          <Link href="/contact">
            <a className="inline-block button bg-black p-3 rounded-md text-white">iletişim</a>
          </Link>
        </div>

        <div className="w-96 ml-12">
          <img src="/images/me.jpg" alt="Oğuz Topçu" className="h-full w-full rounded-md" />
        </div>
      </div>
    </Layout>
  )
}
