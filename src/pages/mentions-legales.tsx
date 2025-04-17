import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function LegalMentions() {
  const router = useRouter()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      if (hash) {
        router.replace(`/${hash}`)
      }
    }
    handleHashChange()

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [router])

  return (
    <div className="bg-beige-100">
      <NavBar />
        <div className="container mt-12 md:pt-12 mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-6 mt-12">Mentions légales</h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Éditeur</h2>
            <p>
              Équipe La Suite numérique de la Direction interministérielle du numérique<br />
              20 avenue de Segur 75007 Paris.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Directeur de la publication</h2>
            <p>Directeur interministériel du numérique</p>
          </section>

          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Copyright</h2>
            <p>
              Illustrations : DINUM.<br />
            </p>
          </section>

          <section className="mb-9">
            <h2 className="text-xl font-semibold mb-2">Contact</h2>
            <p>
              L'équipe de La Suite numérique peut être contactée directement à :<br />
              <a
                href="mailto:lasuite@numerique.gouv.fr"
                className="text-orange-600 underline"
              >
                lasuite@numerique.gouv.fr
              </a>
            </p>
          </section>
        </div>
      <Footer />
    </div>
  );
}
