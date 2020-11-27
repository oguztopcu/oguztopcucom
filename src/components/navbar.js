import Link  from 'next/Link';

export default function Navbar() {
  return (
    <div className="relative pt-6 px-3 mt-5 md:p-0">
      <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/">
              <a className="font-bold text-3xl">oğuz topçu</a>
            </Link>

            <div className="flex items-center md:hidden">
              <button type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:ml-auto md:pr-4 md:space-x-8">
          <Link href="/">
            <a className="font-medium text-gray-500 hover:text-gray-900">ana sayfa</a>
          </Link>

          <Link href="/about">
            <a className="font-medium text-gray-500 hover:text-gray-900">hakkımda</a>
          </Link>

          <Link href="/work">
            <a className="font-medium text-gray-500 hover:text-gray-900">çalışmalarım</a>
          </Link>

          <Link href="/contact">
            <a className="font-medium text-gray-500 hover:text-gray-900">iletişim</a>
          </Link>
        </div>
      </nav>
    </div>
  );
}