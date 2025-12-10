import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Vinsta Trafikskola</h3>
            <p className="text-gray-300 mb-4">
              Din lokala trafikskola som hjälper dig att få ditt körkort snabbt och säkert. 
              Med erfarna instruktörer och moderna utbildningsmetoder.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontaktinformation</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-400" />
                <a href="tel:01266163" className="hover:text-blue-400 transition-colors">
                  012-66 163
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-400" />
                <a href="mailto:info@vinstatrafikskola.se" className="hover:text-blue-400 transition-colors">
                  info@vinstatrafikskola.se
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-400" />
                <span>Vinsta och närliggande områden</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Tjänster</h4>
            <ul className="space-y-2 text-gray-300">
              <li>B-körkort (personbil)</li>
              <li>Intensivkurser</li>
              <li>Teorikurser</li>
              <li>Körlektioner</li>
              <li>Uppkörning</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400">
          <p>&copy; 2024 Vinsta Trafikskola. Alla rättigheter förbehållna.</p>
          <p className="mt-2">Skapad av <span className="text-blue-400">Noory Solution</span></p>
        </div>
      </div>
    </footer>
  )
}