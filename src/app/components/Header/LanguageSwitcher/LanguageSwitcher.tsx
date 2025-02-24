'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from 'lucide-react';
import { useState } from 'react';
import styles from './LanguageSwitcher.module.scss';

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'pl', label: 'PL' },
];

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const [selectedLang, setSelectedLang] = useState('en');

  const handleChangeLanguage = (code: string) => {
    setSelectedLang(code);
  };

  return (
    <Menu as="div" className={`${className} ${styles.langSwitcher} relative`}>
      <div>
        <MenuButton
          className={`${styles.langSwitcher__button} flex items-center`}
        >
          <span className="font-semibold">
            {LANGUAGES.find((lang) => lang.code === selectedLang)?.label}
          </span>
          <ChevronDownIcon aria-hidden="true" />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className={`${styles.langSwitcher__dropdown} absolute right-0 z-10 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in`}
      >
        <div className="flex flex-col">
          {LANGUAGES.map((lang) => (
            <MenuItem key={lang.code} as="button">
              <span
                onClick={() => handleChangeLanguage(lang.code)}
                className={`${selectedLang === lang.code ? styles.active : ''}`}
              >
                {lang.label}
              </span>
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}
