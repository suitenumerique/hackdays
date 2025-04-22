import Link from 'next/link'
import { useTranslations } from '@/hooks/useTranslations';

const hover =
  'hover:underline hover:decoration-2 hover:underline-offset-4 transition ease-in-out delay-50 duration-300 hover:cursor-pointer'

const externalLinks = [
  { href: 'https://legifrance.gouv.fr/fr/', children: 'legifrance.gouv.fr' },
  { href: 'https://info.gouv.fr/fr/', children: 'info.gouv.fr' },
  { href: 'https://www.service-public.fr/', children: 'service-public.fr' },
  { href: 'https://www.data.gouv.fr/fr/', children: 'data.gouv.fr' },
]

const pages = [
  { href: '/mentions-legales', children: 'footer.legal' as const },
]

export const Footer = () => {
  const { t } = useTranslations();
  return (
    <footer className="footer py-8 mt-auto border-t-2 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between mb-6">
          <a
            className="w-fit flex no-wrap items-center gap-2 sm:gap-6 hover:bg-white-1 p-4 pl-0 transition ease-in-out delay-50 duration-300 min-w-[114px] ml-[-0.5rem] overflow-hidden"
            href="https://www.numerique.gouv.fr/"
            target="_blank"
            title={`${t('common.back_to_home')} - ${t('common.la_suite')}`}
          >
            <p className="logo-footer text-base xs:text-xl font-bold leading-[1.0317460317em] tracking-[-.01em] pl-2 uppercase align-middle inline-block">
              Gouvernement
            </p>
            <span className="logo-footer-separator w-100% md:block hidden" />
            <p className="font-bold leading-5 text-sm xs:text-base md:block hidden">
              Direction
              <br />
              interministérielle
              <br />
              du numérique
            </p>
          </a>
          <div className="basis-full md:basis-2/4 max-w-2xl">
            <ul className="flex flex-wrap align-middle mt-2">
              {externalLinks.map((link) => (
                <li
                  key={link.href}
                  className={`mr-6 my-2 decoration-grey-5 ${hover}`}
                >
                  <a target="_blank"
                    className="font-bold text-sm text-grey-5 external-link-grey"
                    {...link}
                  >
                    {link.children}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-4 border-t border-[#d9d9d9] flex flex-row flex-wrap">
          <div className="mt-2 mb-4 sm:mb-0 w-[75%] m-w-[75%]">
            <ul className="block justify-start flex-wrap">
              {pages.map((link) => (
                <li
                  key={link.href}
                  className="inline internal-link-footer text-xs text-grey-3"
                >
                  <Link
                    {...link}
                    locale={false}
                    className={`border-grey-1 ${hover}`}
                  >
                    {t(link.children)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <p className="inline text-xs text-grey-3 leading-5"
              dangerouslySetInnerHTML={{
                __html: t('footer.license'),
              }}>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
