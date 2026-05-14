# CLAUDE.md - Lifestyle Feminin

## CONTEXT
Site Astro 5 SSG pentru blog lifestyle feminin, proprietar Sonia.
Strategie: SEO maxim + AI Search optimization + 8 nise lifestyle.
Partener declarat: sonia11.com (cross-link DOFOLLOW + Schema sameAs).

## STACK
- Astro 5 + TypeScript strict
- Tailwind CSS v4 (via @tailwindcss/vite)
- Cloudflare Pages deploy (viitor)
- Node 20+

## REGULI ABSOLUTE
1. Date centralizate in `src/config/site.ts` - singura sursa de adevar
2. Toate componentele cu props tipate strict TypeScript
3. NU se modifica design fara confirmare user
4. Build local OBLIGATORIU inainte de commit: `npm run build`
5. TSC check obligatoriu: `npx astro check`
6. Commit explicit pe fisiere (NU `git add .` sau `-A`)
7. Wording absolut: "Lifestyle Feminin", "creator lifestyle"
8. NU se mentioneaza OnlyFans direct pe acest site
9. Linkuri catre sonia11.com DOAR in:
   - `/despre/`
   - Author bio card la final articol (viitor)
   - Footer disclosure
10. Schema sameAs declarata in SEO.astro
11. NU duplicate content cu sonia11.com (continut UNIC)
12. Atribut linkuri: DOFOLLOW normal (NU rel=sponsored, NU rel=nofollow)
    pentru cross-link la sonia11.com - declarare via Schema sameAs

## SKILLS ACTIVE
- /mnt/skills/user/blog-article-seo/SKILL.md (auto-aplicat la blog)
- /mnt/skills/public/frontend-design/SKILL.md (UI components)

## REGULI E-E-A-T
- Articole cu autor "Sonia" + bio coerent
- Schema.org Person + sameAs network
- Continut answer-engine optimized (FAQ JSON-LD)
- Imagini autentice (faceless OK conform strategiei)
- Element-semnatura vizual recurent (bijuterie/tatuaj)

## SECURITATE
- Fail-closed pattern peste tot
- Validare Zod pe input-uri (daca apar formulare)
- Niciodata hardcoded credentials
- Niciodata secrete in client-side code
- Niciodata keys API in repo public

## WORKFLOW DEZVOLTARE
- Audit-first READ-ONLY -> apply atomic -> test build -> commit -> push
- STOP-uri defensive pe orice modificare la auth/payments (N/A aici)
- Rollback plan documentat pentru fiecare modificare majora
