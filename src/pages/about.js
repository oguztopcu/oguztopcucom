import Link from 'next/Link';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <div className="w-4/6 mx-auto">
        <h1 className="font-bold text-4xl mt-8">hakkımda</h1>

        <p className="mt-6 leading-loose text-justify">
          <span className="block mb-2">selam!</span>

          ben oğuz, 1995 yılında antalya'da doğdum, büyüdüm ve ortaokul yıllarında başlayan yazılım merakım beni bu noktalara kadar getirdi.

          php serüveniyle başlayan bu yazılım yolculuğunda mysql, redis, nodejs, react, next gibi yeni teknolojileri öğrene öğrene yolumuza devam ediyoruz.

          bende hem geliştirdiğim projeleri hemde benim hakkımda küçük bilgiler olsun diye bu siteyi açmaya karar verdim.

          üstüne birkaç tane de <Link href="/work"><a className="underline">çalışmalarımı</a></Link> ekledim istersen gözatabilirsin.

          <span className="block mt-4">şimdilik hoşçakal</span>
        </p>
      </div>
    </Layout>
  );
}