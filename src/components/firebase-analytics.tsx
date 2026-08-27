'use client';

import { useEffect } from 'react';
import { getAnalytics, isSupported } from 'firebase/analytics';
import { getFirebaseApp } from '@/lib/firebase';

/**
 * Initializes Firebase Analytics on the client only. Analytics is unsupported
 * during SSR and in some browsers/private modes, so we guard with isSupported().
 */
export function FirebaseAnalytics() {
  useEffect(() => {
    let cancelled = false;
    isSupported()
      .then((ok) => {
        if (ok && !cancelled) {
          getAnalytics(getFirebaseApp());
        }
      })
      .catch(() => {
        /* analytics unavailable — ignore */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
