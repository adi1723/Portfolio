/**
 * Inline bootstrap to avoid a light/dark flash before React hydrates.
 * Must stay a plain script — do not gate children on theme readiness.
 */
export function ThemeScript() {
  const code = `(function(){try{var t=localStorage.getItem('ak-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}var r=document.documentElement;r.classList.toggle('dark',t==='dark');r.style.colorScheme=t}catch(e){}})();`;

  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
