import Header from '../components/Header'
import Footer from '../components/Footer'
import { Phone, Mail, MapPin, Clock, Star, Check, Car } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Välkommen till Vinsta Trafikskola
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Ta ditt körkort med Sveriges mest erfarna trafikinstruktörer. 
            Vi hjälper dig att bli en säker och självsäker förare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:01266163" className="bg-white text-blue-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
              <Phone className="mr-2 h-5 w-5" />
              Ring nu: 012-66 163
            </a>
            <a href="#kontakt" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors">
              Boka lektion
            </a>
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Våra Tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Car className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">B-körkort</h3>
              <p className="text-gray-600 mb-4">
                Komplett utbildning för personbil. Vi guidar dig genom hela processen från teori till godkänt prov.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Teorikurs</li>
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Körlektioner</li>
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Uppkörning</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Star className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Intensivkurs</h3>
              <p className="text-gray-600 mb-4">
                Snabb väg till körkort med intensiv utbildning. Perfekt för dig som vill ha körkort snabbt.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />2-4 veckor</li>
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Dagliga lektioner</li>
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Garanterat prov</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Clock className="h-12 w-12 text-blue-700 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Återkommande Elever</h3>
              <p className="text-gray-600 mb-4">
                Har du tidigare erfarenhet eller behöver kompletterande lektioner? Vi anpassar utbildningen efter dina behov.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Individuell bedömning</li>
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Flexibla tider</li>
                <li className="flex items-center justify-center"><Check className="h-4 w-4 text-green-500 mr-2" />Erfarna instruktörer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Om Oss */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Om Vinsta Trafikskola
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Med många års erfarenhet inom körkortsutbildning har Vinsta Trafikskola 
                hjälpt tusentals elever att få sitt körkort. Våra certifierade instruktörer 
                använder moderna undervisningsmetoder för att göra din utbildning så effektiv 
                och trygg som möjligt.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Erfarna instruktörer</h4>
                    <p className="text-gray-600">Alla våra instruktörer är certifierade och har många års erfarenhet</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Moderna fordon</h4>
                    <p className="text-gray-600">Våra övningsbilar är nya och utrustade med de senaste säkerhetssystemen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold">Hög genomströmning</h4>
                    <p className="text-gray-600">Majoriteten av våra elever klarar uppkörningen på första försöket</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-blue-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Varför välja oss?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  Flexibla tider som passar dig
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  Personlig och trygg miljö
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  Konkurrenskraftiga priser
                </li>
                <li className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-3" />
                  Lokalt förankrat i Vinsta
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-blue-600">
                <p className="text-sm opacity-90">
                  "Tack vare Vinsta Trafikskola fick jag mitt körkort på rekordtid. 
                  Instruktörerna var tålmodiga och professionella."
                </p>
                <p className="text-sm mt-2 font-semibold">- Maria, nöjd elev</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Kontakta Oss
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Kom i kontakt</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Telefon</h4>
                    <a href="tel:01266163" className="text-blue-700 hover:underline">
                      012-66 163
                    </a>
                    <p className="text-gray-600 text-sm">Ring för att boka din första lektion</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">E-post</h4>
                    <a href="mailto:info@vinstatrafikskola.se" className="text-blue-700 hover:underline">
                      info@vinstatrafikskola.se
                    </a>
                    <p className="text-gray-600 text-sm">Skicka dina frågor via e-post</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Område</h4>
                    <p className="text-gray-700">Vinsta och närliggande områden</p>
                    <p className="text-gray-600 text-sm">Vi hämtar upp dig vid önskad plats</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-blue-700 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold">Öppettider</h4>
                    <p className="text-gray-700">Måndag - Fredag: 08:00 - 20:00</p>
                    <p className="text-gray-700">Lördag - Söndag: 09:00 - 17:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">Boka din första lektion</h3>
              <p className="text-gray-600 mb-6">
                Ta första steget mot ditt körkort idag! Ring oss eller skicka ett meddelande 
                så hjälper vi dig att komma igång med din körkortsutbildning.
              </p>
              <div className="space-y-4">
                <a href="tel:01266163" className="block w-full bg-blue-700 text-white text-center py-3 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold">
                  Ring nu: 012-66 163
                </a>
                <a href="mailto:info@vinstatrafikskola.se" className="block w-full border-2 border-blue-700 text-blue-700 text-center py-3 px-6 rounded-lg hover:bg-blue-700 hover:text-white transition-colors font-semibold">
                  Skicka e-post
                </a>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Första lektionen</h4>
                <p className="text-blue-700 text-sm">
                  Din första körlektion inkluderar bedömning av dina nuvarande kunskaper 
                  och en personlig utbildningsplan anpassad efter dina behov.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}