import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [email, setEmail] = useState('')

  const handleSubscribe = (e) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-3">
              <div className="w-11 h-11 rounded-full inline-flex items-center justify-center font-bold bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow">E</div>
              <span className="ml-3 font-semibold text-white">Ecommerce</span>
            </Link>
            <p className="text-slate-300 text-sm max-w-sm">
              Small shop UI built with ❤️. Curated products, fast shipping and friendly support.
            </p>

            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white p-2 rounded-md hover:bg-slate-800 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M8 19c7 0 10.8-6 10.8-11.2v-.5A7.5 7.5 0 0 0 20 4.6a7.3 7.3 0 0 1-2.1.6 3.7 3.7 0 0 0 1.6-2 7.4 7.4 0 0 1-2.4.9A3.7 3.7 0 0 0 12.6 6c-2 0-3.6 1.8-3.6 4 0 .3 0 .6.1.9A10.5 10.5 0 0 1 3.3 5.8a4 4 0 0 0-.5 2 3.9 3.9 0 0 0 1.6 3.2c-.9 0-1.7-.3-2.4-.7v.1c0 1.9 1.3 3.6 3 4a3.6 3.6 0 0 1-1 .1c-.2 0-.4 0-.6-.1a3.8 3.8 0 0 0 3.4 2.7A7.5 7.5 0 0 1 4 17.6 10.5 10.5 0 0 0 8 19" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-white p-2 rounded-md hover:bg-slate-800 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="GitHub" className="text-slate-400 hover:text-white p-2 rounded-md hover:bg-slate-800 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                  <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.5v-2c-3.3.7-4-1.4-4-1.4-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 .1 1.6.7 1.6.7.9 1.6 2.4 1.1 3 .8.1-.7.4-1.1.7-1.4-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.2-.1-.3-.5-1.7.1-3.5 0 0 1-.3 3.4 1.2a11.6 11.6 0 0 1 6.2 0c2.4-1.6 3.4-1.2 3.4-1.2.6 1.8.2 3.2.1 3.5.8.9 1.2 2 1.2 3.2 0 4.5-2.7 5.4-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.6.8.5A12 12 0 0 0 12 .5" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-semibold mb-2 text-slate-100">Shop</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><Link to="/products" className="hover:text-white">All Products</Link></li>
                <li><a href="#" className="hover:text-white">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white">Best Sellers</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2 text-slate-100">Company</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-2 text-slate-100">Support</h4>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Shipping</a></li>
              </ul>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="text-sm font-semibold mb-3 text-slate-100">Join our newsletter</h4>
            <p className="text-sm text-slate-300 mb-4">Get exclusive deals & updates. No spam — unsubscribe anytime.</p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch gap-2">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="flex-1 min-w-0 px-4 py-3 rounded-full border border-slate-700 bg-slate-800 text-sm placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition"
              />
              <button
                className="mt-2 sm:mt-0 inline-flex items-center px-5 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium shadow-md hover:from-indigo-600 hover:to-pink-600 transition"
                type="submit"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ecommerce. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/terms" className="hover:text-white">Terms</Link>
            <Link to="/privacy" className="hover:text-white">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer