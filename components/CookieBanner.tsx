"use client";
import { useEffect, useState } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const accepted = window.localStorage.getItem('cookie-consent');
    if (!accepted) setVisible(true);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 max-w-xl w-[92%] bg-gray-900 text-white p-4 rounded shadow-lg flex flex-col gap-3 z-50">
      <p className="text-sm">
        We use cookies for basic analytics and a better experience. By using this site, you agree to our cookie policy.
      </p>
      <div className="flex gap-3 justify-end">
        <button
          className="bg-white text-gray-900 rounded px-3 py-1 text-sm"
          onClick={() => {
            window.localStorage.setItem('cookie-consent', 'accepted');
            setVisible(false);
          }}
        >
          Accept
        </button>
        <button
          className="bg-transparent border border-white/30 rounded px-3 py-1 text-sm"
          onClick={() => setVisible(false)}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

