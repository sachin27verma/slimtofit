/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PKaEaPbnF6c
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-[#2ecc71] p-10 text-white">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Enjoy Delicious Food While Smiling</h2>
          <a className="text-xl mb-8 block" href="#">
            hello@healthny.com
          </a>
          <nav className="flex flex-wrap gap-4">
            <Link className="hover:underline" href="#">
              Home
            </Link>
            <Link className="hover:underline" href="#">
              About
            </Link>
            <Link className="hover:underline" href="#">
              Products
            </Link>
            <Link className="hover:underline" href="#">
              Blog
            </Link>
            <Link className="hover:underline" href="#">
              Consultation
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
          <div className="border-l-4 border-white pl-4 mb-8">
            <p className="text-xl mb-4">2464 ROYAL LN. MESA,</p>
            <p className="text-xl">NEW JERSEY 45463</p>
          </div>
          <div className="flex gap-4 mb-8">
            <Link className="hover:underline" href="#">
              Instagram
            </Link>
            <Link className="hover:underline" href="#">
              Twitter
            </Link>
            <Link className="hover:underline" href="#">
              Facebook
            </Link>
          </div>
          <p className="text-sm">
            © Healthy 128. All Rights Reserved 2023. Licensing Webflow Templates by 128.digital. Powered by Webflow
          </p>
        </div>
      </div>
    </footer>
  )
}