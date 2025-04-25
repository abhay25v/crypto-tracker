import React, { useEffect, useState } from 'react';

const DarkModeToggle = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded bg-gray-800 text-white dark:bg-white dark:text-black"
    >
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
};

export default DarkModeToggle;
