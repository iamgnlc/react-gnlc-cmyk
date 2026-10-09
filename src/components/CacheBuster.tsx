import { ReactNode, useEffect, useState } from 'react';

interface CacheBusterProps {
  currentVersion: string;
  isEnabled?: boolean;
  loadingComponent?: ReactNode;
}

interface CacheMeta {
  version: string;
}

const fetchCacheMeta = async (): Promise<CacheMeta | null> => {
  const response = await fetch('/meta.json', { cache: 'no-store' });
  if (!response.ok) return null;
  return (await response.json()) as CacheMeta;
};

const clearCacheAndReload = () => {
  if (caches) {
    caches.keys().then((names) => {
      names.forEach((name) => caches.delete(name));
    });
  }
  window.location.reload();
};

/**
 * Reloads the page when the deployed version (public/meta.json) differs from the bundled version.
 */
const CacheBuster = ({
  currentVersion,
  isEnabled = false,
  loadingComponent = null,
  children,
}: CacheBusterProps & { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isEnabled) {
      setLoading(false);
      return;
    }

    fetchCacheMeta()
      .then((meta) => {
        if (meta?.version && meta.version !== currentVersion) {
          clearCacheAndReload();
          return;
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [currentVersion, isEnabled]);

  if (loading) return <>{loadingComponent}</>;
  return <>{children}</>;
};

export default CacheBuster;
