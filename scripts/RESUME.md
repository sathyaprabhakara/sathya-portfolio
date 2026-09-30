# Résumé maintenance

The résumé page and PDF share content in `src/resume.json`.

After editing that file, regenerate the downloadable A4 PDF:

```sh
python3 -m pip install reportlab
python3 scripts/build_resume.py
```

The generator uses the bundled, licensed Liberation Sans fonts and writes
`public/Sathya_Resume.pdf`. Review the rendered PDF after content changes;
the generator rejects content that would cross the bottom margin.

Run `npm run build` after regeneration. Vite copies the PDF into the site
output. The page uses the configured Vite base URL for both PDF actions.
The file has selectable text, embedded fonts, and clickable profile links.
