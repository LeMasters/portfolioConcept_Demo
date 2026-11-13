# games_PortfolioConcept

The name of this experimental Hugo template is PortfolioConcept.

A one-page portfolio site for ETBD/Games students: Rooted in one or more Hugo static-site generator themes, then edited through Pages CMS forms, and finally published gratis on GitHub Pages. 

Non-proprietary content is stored in .md files inside a Pages repo on their GitHub account.  Everything is web-based, with no installation or coding necessary.  At the same time, students who wish to create content outside of Pages CMS or edit the theme (or install a different one, or write their own) may easily do so.

Theme:
PortfolioConcept (`themes/PortfolioConcept/`), 
adapted by Garrison LeMasters from different sources including especially [kiyomi-portfolio](https://github.com/mathscantor/hugo-theme-kiyomi-portfolio) by mathscantor, commit `e2d03b5`. The original theme bears MIT License; the original copyright notice is in `themes/PortfolioConcept/LICENSE`. As PortfolioConcept is an experiment, and as less than 50% of the work originates with me, the original license persists.

## Tour:  What is, and Where

| Repo Path | Description | Origin |
|---|---|---|
| `themes/PortfolioConcept/` | The theme (layouts, styles, scripts) | Template author |
| `config/_default/hugo.toml` | Technical settings | Template author |
| `config/_default/params.yaml` | Name, tagline, photos, email, links, résumé | Pages CMS → Profile |
| `content/_index.md` | About text | Pages CMS → About |
| `data/*.yaml` | One file per section: projects, experience, skills, education, awards | Pages CMS, one form each |
| `static/images/`, `static/files/` | Uploaded images and the résumé | Pages CMS |
| `.pages.yml` | Pages CMS forms | Template author |
| `.github/workflows/hugo.yml` | Builds with Hugo extended and publishes | Template author |
