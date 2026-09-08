# Documents folder

These PDFs are shown on the **Documents** page (`documents.html`) with an inline
preview + download button. Current mapping:

| File                                   | Shown on the site as             | Status              |
| -------------------------------------- | -------------------------------- | ------------------- |
| `cv.pdf`                               | Curriculum Vitae (CV)            | identified          |
| `bsc-software-engineering-degree.pdf`  | BSc Software Engineering degree  | identified          |
| `international-youth-conference.pdf`   | International Youth Conference   | identified          |
| `certificate-1.pdf`                    | Certificate 1                    | title to confirm    |
| `certificate-2.pdf`                    | Certificate 2                    | title to confirm    |
| `certificate-3.pdf`                    | Certificate 3                    | title to confirm    |
| `certificate-4.pdf`                    | Certificate 4                    | title to confirm    |
| `certificate-5.pdf`                    | Certificate 5                    | title to confirm    |
| `certificate-6.pdf`                    | Certificate 6                    | title to confirm    |
| `scanned-documents-1.pdf`              | Scanned Documents 1              | title to confirm    |
| `scanned-documents-2.pdf`              | Scanned Documents 2              | title to confirm    |

## To rename / relabel a certificate

Tell Claude the real title for each `certificate-N.pdf`, or edit `documents.html`
directly — each card is clearly commented. If you rename a PDF file here, update
the matching `data-doc-src` and `href` in `documents.html`.

## Notes

- File names are web-safe (lowercase, no spaces/parentheses) so they work on
  GitHub Pages and other hosting.
- 3 exact-duplicate PDFs were removed during cleanup.
- PDFs preview inline in the browser. Opened straight from disk (`file://`) the
  preview loads the PDF directly; over http(s) a missing file shows a friendly
  message instead of a broken frame.
