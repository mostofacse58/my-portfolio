/**
 * Runs before first paint so the page never flashes the wrong theme.
 *
 * This has to be a blocking inline script in <head>: a React effect runs after
 * hydration, which is far too late — the user would see a dark flash on a light
 * page. Keep it small and dependency-free.
 *
 * Precedence: an explicit choice in localStorage wins; otherwise follow the OS.
 * The matching runtime logic lives in ThemeToggle — keep the storage key and the
 * data-theme values in step across both files.
 */
export const THEME_STORAGE_KEY = 'mostofa-theme';

const script = `
(function () {
  try {
    var stored = localStorage.getItem('${THEME_STORAGE_KEY}');
    var theme = stored === 'light' || stored === 'dark'
      ? stored
      : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.dataset.theme = theme;
  } catch (e) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
