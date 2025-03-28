import { Menu, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { useTranslations } from '@/locales/useTranslations'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CheckIcon from '@mui/icons-material/Check'

const labels: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
}

export const LocaleSwitcher = () => {
  const router = useRouter()
  const { pathname, asPath, query, locale, locales } = router
  const t = useTranslations()

  if (!locales || locales.length < 2) {
    return null
  }

  return (
    <Menu as="div" className="z-100 md:fixed block text-left top-[20px] right-[20px]">
      <Menu.Button className="cursor-pointer flex md:border-beige-200 items-center bg-white md:border rounded-full px-4 py-2 h-[40px] text-[13px] font-normal"
        style={{boxShadow: `0px 4px 9.3px 0px rgba(75, 41, 28, 0.05)`}}>
        {labels[locale ?? 'en']}
        <ArrowDropDownIcon className="w-5 h-5 ml-2 text-green-800 transition-transform focus:rotate-180" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="border border-beige-200 h-19 absolute left-0 overflow-hidden mt-1 md:mt-2 w-20 origin-top-left bg-white rounded-md focus:outline-none"
        style={{boxShadow: `0px 4px 9.3px 0px rgba(75, 41, 28, 0.05)`}}>
          {locales.map((availableLocale) => (
            <Menu.Item key={availableLocale}>
              {({ active }) => (
                <button
                  onClick={() =>
                    router.push({ pathname, query }, asPath, {
                      locale: availableLocale,
                    })
                  }
                  className="cursor-pointer h-[37px] hover:bg-beige-100 flex w-full px-4 py-2 font-normal text-[13px] text-green-800 justify-between items-center"
                >
                  {labels[availableLocale]}
                  {locale === availableLocale && (
                    <CheckIcon className="text-orange-500" fontSize="small"/>
                  )}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
