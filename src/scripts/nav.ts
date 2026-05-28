const copyButtons = document.querySelectorAll<HTMLButtonElement>('[data-copy-email]');
copyButtons.forEach((btn) => {
  const email = btn.dataset.copyEmail;
  if (!email) return;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Fallback: select-and-copy via a temporary textarea.
      const ta = document.createElement('textarea');
      ta.value = email;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
    }

    const label = btn.querySelector<HTMLElement>('.contact__copy-label');
    const original = label?.textContent ?? 'Copy';
    if (label) label.textContent = 'Copied';
    btn.dataset.copied = 'true';

    setTimeout(() => {
      if (label) label.textContent = original;
      delete btn.dataset.copied;
    }, 1800);
  });
});
