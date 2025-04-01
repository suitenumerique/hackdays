import { useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import CheckIcon from '@mui/icons-material/Check'
import { useTranslations } from '@/hooks/useTranslations';

const labels: Record<string, string> = {
  en: 'EN',
  fr: 'FR',
}

export const LocaleSwitcher = () => {
  const { locale, availableLocales } = useTranslations();
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !availableLocales || availableLocales.length < 2) {
    return null
  }

  const changeLocale = (newLocale: string) => {
    localStorage.setItem('locale', newLocale);
    window.location.reload();
  };

  return (
    <Menu as="div" className="z-100 md:fixed block text-left top-[20px] right-[20px]">
      <Menu.Button
        className="cursor-pointer flex md:border-beige-200 items-center bg-white md:border rounded-full px-4 py-2 h-[40px] text-[13px] font-normal"
        style={{ boxShadow: `0px 4px 9.3px 0px rgba(75, 41, 28, 0.05)` }}
      >
        {labels[locale ?? 'en']}
        <ArrowDropDownIcon className="w-5 h-5 ml-2 text-green-800 transition-transform focus:rotate-180" />
      </Menu.Button>

      <Transition
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="border border-beige-200 absolute left-0 mt-2 w-20 bg-white rounded-md">
          {availableLocales.map((availableLocale) => (
            <Menu.Item key={availableLocale}>
              {() => (
                <button
                  onClick={() => changeLocale(availableLocale)}
                  className="cursor-pointer h-[37px] hover:bg-beige-100 flex w-full px-4 py-2 font-normal text-[13px] text-green-800 justify-between items-center"
                >
                  {labels[availableLocale] || availableLocale.toUpperCase()}
                  {locale === availableLocale && <CheckIcon className="text-orange-500" fontSize="small" />}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
