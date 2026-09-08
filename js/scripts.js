/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', () => {
    // Keep the footer copyright year current
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Animate skill bars when they scroll into view
    const fills = document.querySelectorAll('.skill-fill');
    if (fills.length) {
        const reveal = (el) => {
            const pct = el.getAttribute('data-width') || '0';
            el.style.width = pct + '%';
        };
        if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver((entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        reveal(entry.target);
                        obs.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.25 });
            fills.forEach((el) => io.observe(el));
        } else {
            fills.forEach(reveal);
        }
    }

    // Document preview modal: load the clicked document into the iframe
    const previewModal = document.getElementById('docPreviewModal');
    if (previewModal) {
        const frame = document.getElementById('docPreviewFrame');
        const missing = document.getElementById('docPreviewMissing');
        const title = document.getElementById('docPreviewModalLabel');
        const dlBtn = document.getElementById('docPreviewDownload');

        previewModal.addEventListener('show.bs.modal', (event) => {
            const trigger = event.relatedTarget;
            const src = trigger.getAttribute('data-doc-src');
            const label = trigger.getAttribute('data-doc-title') || 'Document preview';
            title.textContent = label;
            dlBtn.setAttribute('href', src);

            const showFrame = () => {
                frame.setAttribute('src', src);
                frame.classList.remove('d-none');
                missing.classList.add('d-none');
            };
            const showMissing = () => {
                frame.classList.add('d-none');
                frame.setAttribute('src', 'about:blank');
                missing.classList.remove('d-none');
                missing.querySelector('[data-doc-name]').textContent = src;
            };

            // Over http(s) we can probe first and show a friendly message when the file
            // is not uploaded yet. Opened from disk (file://) fetch is blocked, so just
            // load the document straight into the viewer.
            if (window.location.protocol === 'http:' || window.location.protocol === 'https:') {
                fetch(src, { method: 'HEAD' })
                    .then((res) => (res.ok ? showFrame() : showMissing()))
                    .catch(showMissing);
            } else {
                showFrame();
            }
        });

        previewModal.addEventListener('hidden.bs.modal', () => {
            frame.setAttribute('src', 'about:blank');
        });
    }
});
