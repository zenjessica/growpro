import Link from "next/link"
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-rose-50 to-orange-50 py-12 border-t border-rose-100">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Let's Connect!</h3>

          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {/* Instagram - zenjessica_official */}
            <Link
              href="https://instagram.com/zenjessica_official"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-rose-100 hover:border-rose-200"
            >
              <Instagram className="h-5 w-5 text-rose-600" />
              <span className="text-gray-700 font-medium">@zenjessica_official</span>
            </Link>

            {/* Instagram - kickstartsocial.co */}
            <Link
              href="https://instagram.com/kickstartsocial.co"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-rose-100 hover:border-rose-200"
            >
              <Instagram className="h-5 w-5 text-rose-600" />
              <span className="text-gray-700 font-medium">@kickstartsocial.co</span>
            </Link>

            {/* Facebook */}
            <Link
              href="https://facebook.com/kickstartsocial"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-rose-100 hover:border-rose-200"
            >
              <Facebook className="h-5 w-5 text-blue-600" />
              <span className="text-gray-700 font-medium">Kickstart Social</span>
            </Link>

            {/* LinkedIn */}
            <Link
              href="https://linkedin.com/in/jessica-lynne-white"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-rose-100 hover:border-rose-200"
            >
              <Linkedin className="h-5 w-5 text-blue-700" />
              <span className="text-gray-700 font-medium">Jessica Lynne White BS, MSPT</span>
            </Link>

            {/* Email */}
            <Link
              href="mailto:hello@kickstartsocial.co"
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-rose-100 hover:border-rose-200"
            >
              <Mail className="h-5 w-5 text-orange-600" />
              <span className="text-gray-700 font-medium">hello@kickstartsocial.co</span>
            </Link>
          </div>

          <div className="pt-8 border-t border-rose-100">
            <p className="text-gray-600 text-sm">
              © 2025 GrowPro. All rights reserved. | Empowering telehealth entrepreneurs to build successful GLP-1
              businesses.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
