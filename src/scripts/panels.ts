/**
 * Minimal panel open/close via class toggling.
 * No framework — just DOM events.
 *
 * Trigger elements: data-panel-open="<panel-id>"
 * Close buttons:    data-panel-close (anywhere inside .panel)
 * Panel elements:   id="<panel-id>", class="panel"
 */

function closeAll(): void {
  document.querySelectorAll<HTMLElement>('.panel--open').forEach((el) => {
    el.classList.remove('panel--open');
  });
  document.body.classList.remove('has-open-panel');
}

function init(): void {
  // Open
  document.querySelectorAll<HTMLElement>('[data-panel-open]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const id = trigger.dataset.panelOpen;
      if (!id) return;

      // Close any already-open panel first
      closeAll();

      const panel = document.getElementById(id);
      if (panel) {
        panel.classList.add('panel--open');
        document.body.classList.add('has-open-panel');
      }
    });
  });

  // Close via button inside panel
  document.querySelectorAll<HTMLElement>('[data-panel-close]').forEach((btn) => {
    btn.addEventListener('click', () => {
      btn.closest<HTMLElement>('.panel')?.classList.remove('panel--open');
      document.body.classList.remove('has-open-panel');
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'Escape') closeAll();
  });
}

init();
