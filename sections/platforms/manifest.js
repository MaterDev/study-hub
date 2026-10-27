/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Declares what this section may contain so new content can be reasoned against it.
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-10-23",
  "updated": "2026-10-27",
  "id": "platforms",
  "order": 5,
  "title": "Platforms & Client Work",
  "icon": "🧩",
  "summary": "Introductory courses on the platforms developers meet in client work, plus the non-front-end knowledge that makes a project ship.",
  "scope": {
    "purpose": "Help developers understand how to work with specific client platforms (Shopify, WordPress) and the full-stack and client context around them.",
    "includes": [
      "Platform fundamentals for front-end and UI developers (Shopify, WordPress)",
      "Code-first theme and tooling approaches",
      "Data, integrations and APIs a front-end developer touches",
      "Launch, hosting, handoff and support",
      "Scoping, estimating and collaborating with clients"
    ],
    "excludes": [
      "Pure web-platform techniques with no platform angle (→ Rendering, Performance & Motion)",
      "AI tooling and agent workflows (→ Building with AI)",
      "Client-confidential details of specific projects"
    ],
    "admission": [
      "Is it about working on a specific client platform or CMS?",
      "Or is it knowledge a developer needs to collaborate with clients on such projects?"
    ],
    "audience": "Developers working on client sites, especially front-end and UI developers moving toward full stack.",
    "depth": "Introductory and practical, sourced to official docs; patterns from past projects are generalised and never include client details."
  },
  "related": [
    "rendering-performance-motion",
    "building-with-ai"
  ],
  "children": [
    {
      "type": "group",
      "kind": "module",
      "label": "COURSE",
      "id": "shopify-dev",
      "title": "Course: Shopify for Developers",
      "home": "shared/outline.html?id=shopify-dev",
      "pip": "#5a8f29",
      "summary": "An introduction to working on Shopify stores as a developer: how the platform fits together, building in themes, data and integrations, and the client-facing and full-stack knowledge that makes a project ship.",
      "throughline": "Clusters 1 to 3 are the technical path; cluster 4 is the client and full-stack context that applies to any commerce build.",
      "paths": [
        "\"I'm new to Shopify\" → 1 → 2",
        "\"I've inherited a theme\" → 1.2 → 2.4 → 3.2",
        "\"I'm scoping a build\" → 1.1 → 4.1 → 4.2",
        "\"I need to understand headless\" → 1.1 → 3.3"
      ],
      "dates": {
        "created": "2026-10-23",
        "updated": "2026-10-23",
        "verified": "2026-10-23"
      },
      "history": [
        {
          "date": "2026-10-23",
          "note": "Course planned (stubs only)"
        }
      ],
      "rebuild": {
        "brief": "Introductory course for working developers. Build lessons from the stub plans: visual and interactive, sourced to official docs, with the final cluster covering client and full-stack context.",
        "basis": [
          "Stub plans in this course",
          "Official documentation, checked at build time"
        ]
      },
      "children": [
        {
          "type": "group",
          "id": "sh-c1",
          "title": "1. Foundations",
          "summary": "How Shopify is put together and how you work on it day to day.",
          "children": [
            {
              "type": "lesson",
              "id": "sh-1.1",
              "title": "1.1 How Shopify fits together",
              "pip": "#5a8f29",
              "blurb": "A map of Shopify's surfaces: stores, themes, apps, checkout and APIs, and how to tell which one a problem belongs to.",
              "tags": [
                "shopify",
                "architecture",
                "overview"
              ],
              "file": "sections/platforms/lessons/shopify-1-1-how-shopify-fits-together.html",
              "anchors": [
                {
                  "id": "sh11-map",
                  "title": "The map",
                  "anchor": "sec1"
                },
                {
                  "id": "sh11-journey",
                  "title": "One purchase, end to end",
                  "anchor": "sec2"
                },
                {
                  "id": "sh11-surface",
                  "title": "Which surface?",
                  "anchor": "sec3"
                },
                {
                  "id": "sh11-themes",
                  "title": "Themes: one surface among several",
                  "anchor": "sec4"
                },
                {
                  "id": "sh11-apps",
                  "title": "Apps",
                  "anchor": "sec5"
                },
                {
                  "id": "sh11-apis",
                  "title": "The APIs: who is calling?",
                  "anchor": "sec6"
                },
                {
                  "id": "sh11-stores",
                  "title": "Stores and plans",
                  "anchor": "sec7"
                },
                {
                  "id": "sh11-fast",
                  "title": "What changes fast",
                  "anchor": "sec8"
                },
                {
                  "id": "sh11-sources",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built from Shopify's developer docs: platform map, order walkthrough, surface quiz, apps, APIs, stores"
                }
              ],
              "rebuild": {
                "brief": "Introductory map of Shopify for developers: the surfaces (admin, online store, checkout, customer accounts, POS), apps and their distribution, the APIs by caller, dev stores vs client transfer stores, and how to decide which surface a request belongs to. Visual and interactive.",
                "basis": [
                  "shopify.dev: API overview, themes getting started, apps getting started, development stores",
                  "help.shopify.com: plans",
                  "Verify checkout customisation rules, plan features and API versions at build time"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-1.2",
              "title": "1.2 Theme anatomy",
              "pip": "#5a8f29",
              "blurb": "What every folder in a theme is for, and how a page request turns into HTML.",
              "tags": [
                "shopify",
                "theme",
                "liquid"
              ],
              "plan": {
                "goals": [
                  "Explain layout, templates, sections, blocks, snippets, assets, config and locales",
                  "Trace one page from URL to rendered HTML",
                  "Tell JSON templates from Liquid templates and know when each is used"
                ],
                "concepts": [
                  "layout/theme.liquid as the page shell",
                  "templates/*.json compose sections; templates/*.liquid are hand-coded",
                  "sections vs snippets vs blocks (including theme blocks)",
                  "assets/ is served as-is: no build step is required",
                  "config/settings_schema.json vs settings_data.json",
                  "locales/ for translations"
                ],
                "takeaways": [
                  "A theme is a folder convention, and the conventions are the architecture",
                  "JSON templates make pages composable by non-developers"
                ],
                "connections": [
                  "Builds on 1.1",
                  "Feeds 1.3 (Liquid) and 2.1 (sections and blocks)"
                ],
                "build": "Interactive theme tree: click a folder to see its role, then a 'follow the request' animation",
                "notes": [
                  "Informed by a scan of two previously worked inherited themes: no build step, JSON-first pages, ~100+ sections and ~100+ JSON templates, one head layout file."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-1.2",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-1.3",
              "title": "1.3 Liquid essentials",
              "pip": "#5a8f29",
              "blurb": "Enough Liquid to read any theme and change it safely.",
              "tags": [
                "liquid",
                "shopify"
              ],
              "plan": {
                "goals": [
                  "Read objects, tags and filters fluently",
                  "Choose render over include and know why",
                  "Avoid the common performance and escaping traps"
                ],
                "concepts": [
                  "Objects, tags, filters; whitespace control",
                  "render vs include; passing variables; scope",
                  "Common objects: product, collection, cart, settings, request",
                  "Filters for images, money, translations",
                  "{% schema %} and the newer {% doc %} tag",
                  "Liquid cost: loops, nested loops and the render budget"
                ],
                "takeaways": [
                  "Liquid runs on Shopify's servers, so everything the browser needs must be output",
                  "Treat it as templating, not programming"
                ],
                "connections": [
                  "Builds on 1.2",
                  "Leads into 2.1"
                ],
                "build": "A live Liquid playground: edit a snippet, see output for sample product data"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-1.3",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-1.4",
              "title": "1.4 Local workflow & environments",
              "pip": "#5a8f29",
              "blurb": "Shopify CLI, dev stores, previews, branches and how code reaches the live theme.",
              "tags": [
                "cli",
                "workflow",
                "git"
              ],
              "plan": {
                "goals": [
                  "Run a theme locally with hot reload",
                  "Use unpublished themes and previews for safe review",
                  "Set up a sane branch-to-theme workflow"
                ],
                "concepts": [
                  "shopify theme dev / push / pull / check",
                  "Dev store vs client store; theme limits",
                  "GitHub integration vs CLI deploys",
                  "Preview links, theme editor design mode, `request.design_mode`",
                  "Settings data conflicts: why settings_data.json merges badly",
                  "What is committed vs local-only tooling"
                ],
                "takeaways": [
                  "`shopify theme dev` is the only truly required tool",
                  "Content and settings live in the store, code lives in git; know which is which"
                ],
                "connections": [
                  "Builds on 1.2",
                  "Connects to 4.2 (launch)"
                ],
                "build": "A walkthrough diagram of branch → dev theme → preview → publish, with the failure points marked",
                "notes": [
                  "Informed by prior projects: themes with no bundler where the repo is exactly what runs; personal lint/format tooling kept untracked."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-1.4",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            }
          ],
          "standard": "v1"
        },
        {
          "type": "group",
          "id": "sh-c2",
          "title": "2. Building in a theme",
          "summary": "Section-level front-end work: the editor, commerce UI, quality and inherited code.",
          "children": [
            {
              "type": "lesson",
              "id": "sh-2.1",
              "title": "2.1 Sections, blocks & the theme editor",
              "pip": "#5a8f29",
              "blurb": "Build configurable sections that merchants can rearrange without a developer.",
              "tags": [
                "sections",
                "blocks",
                "theme-editor"
              ],
              "plan": {
                "goals": [
                  "Write a section with schema, settings, blocks and presets",
                  "Understand dynamic sources and metafield-driven content",
                  "Design settings that merchants can actually use"
                ],
                "concepts": [
                  "Schema: settings, blocks, presets, max_blocks",
                  "Section groups (header, footer)",
                  "Theme blocks and `blocks/` (verify current state)",
                  "Dynamic sources and metafields in settings",
                  "Editor events: `shopify:section:load` and reloading JS",
                  "Setting design: fewer, clearer, with defaults"
                ],
                "takeaways": [
                  "A good section is configurable, defensive and still fast",
                  "JS must survive the editor re-rendering your section"
                ],
                "connections": [
                  "Builds on 1.2 and 1.3",
                  "Leads into 2.2 and 3.1"
                ],
                "build": "Build a testimonial section with blocks, presets and editor-safe JS"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-2.1",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-2.2",
              "title": "2.2 Product, variants & cart front-end",
              "pip": "#5a8f29",
              "blurb": "How the storefront shops: variant selection, the cart APIs, section re-rendering and events.",
              "tags": [
                "cart",
                "variants",
                "web-components"
              ],
              "plan": {
                "goals": [
                  "Implement variant selection without full page reloads",
                  "Use the Cart AJAX API and Section Rendering API correctly",
                  "Design cart updates that are accessible and resilient"
                ],
                "concepts": [
                  "Product JSON and variant availability",
                  "`/cart/add.js`, `/cart/change.js`, `/cart/update.js`",
                  "Section Rendering API for partial updates",
                  "Web components for product UI",
                  "Custom events for cross-component communication",
                  "Debounce, error states, sold-out and quantity rules"
                ],
                "takeaways": [
                  "The cart is an API plus HTML you re-fetch",
                  "Events beat tight coupling between theme components"
                ],
                "connections": [
                  "Builds on 2.1",
                  "Connects to 2.3 (performance)"
                ],
                "build": "A mini quick-add cart with variant selector, error handling and live region announcements",
                "notes": [
                  "Informed by prior themes using vanilla custom elements, fetch-based cart calls and DOM re-rendering from fetched HTML."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-2.2",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-2.3",
              "title": "2.3 Performance & accessibility in themes",
              "pip": "#5a8f29",
              "blurb": "The theme-specific causes of slow, inaccessible stores and how to fix them.",
              "tags": [
                "performance",
                "accessibility",
                "cwv"
              ],
              "plan": {
                "goals": [
                  "Find the top three performance problems in a typical theme",
                  "Control third-party script cost",
                  "Hold the line on accessibility inside sections and components"
                ],
                "concepts": [
                  "Core Web Vitals on Shopify: where time goes",
                  "Responsive images with `image_url`",
                  "Render-blocking CSS/JS and defer strategy",
                  "App and tag-manager script impact",
                  "Focus management in drawers, modals and the cart",
                  "Testing on real themes: Lighthouse, WebPageTest, axe"
                ],
                "takeaways": [
                  "Most store slowness is third-party and image-driven, not Liquid",
                  "Accessibility is mostly focus, labels and structure"
                ],
                "connections": [
                  "Links to the Core Web Vitals material in the performance course",
                  "Builds on 2.1 and 2.2"
                ],
                "build": "Audit a sample theme page and rank fixes by impact"
              },
              "overlaps": [
                "fe-1.1"
              ],
              "status": "stub",
              "file": "shared/outline.html?id=sh-2.3",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-2.4",
              "title": "2.4 Inheriting & extending a third-party theme",
              "pip": "#5a8f29",
              "blurb": "Working in a purchased, heavily customised theme without making it worse.",
              "tags": [
                "themes",
                "legacy",
                "conventions"
              ],
              "plan": {
                "goals": [
                  "Learn the architecture of an inherited theme before changing it",
                  "Know which files are read-only and why",
                  "Add features that match, not fight, existing conventions"
                ],
                "concepts": [
                  "Base themes and vendor updates (and why you can't just update)",
                  "Legacy vs redesign templates living side by side",
                  "Page-builder integrations and their risk (they can override page structure)",
                  "Read-only zones: minified/vendored assets and tool-managed metafields",
                  "A feature as a triple: section + JS + CSS with one shared name",
                  "JSON-first pages; `window.theme` as the only Liquid→JS bridge",
                  "Frozen `<head>` order for third-party tags"
                ],
                "takeaways": [
                  "Inherited themes rot when each ticket is locally reasonable but the whole drifts",
                  "Write down structural rules and apply them only to new work"
                ],
                "connections": [
                  "Builds on 1.2 and 2.1",
                  "Connects to the Conductor/context-engineering lesson: these rules are exactly what a repo should say once"
                ],
                "build": "Write a one-page 'architecture invariants' for a sample theme and check a diff against it",
                "notes": [
                  "Directly informed by two real inherited Shopify themes (one built on a Vision-style base, one on a Reformation-style base with a landing-page builder). Keep client names and store details out of the finished lesson."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-2.4",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            }
          ],
          "standard": "v1"
        },
        {
          "type": "group",
          "id": "sh-c3",
          "title": "3. Data, apps & integrations",
          "summary": "What sits behind and around the theme.",
          "children": [
            {
              "type": "lesson",
              "id": "sh-3.1",
              "title": "3.1 Metafields, metaobjects & content modelling",
              "pip": "#5a8f29",
              "blurb": "Where structured content lives and how to get it into pages.",
              "tags": [
                "metafields",
                "metaobjects",
                "content"
              ],
              "plan": {
                "goals": [
                  "Model repeatable content with metaobjects and metafields",
                  "Surface it in templates and the editor",
                  "Know the limits and how merchants edit it"
                ],
                "concepts": [
                  "Metafield types and definitions",
                  "Metaobjects as reusable content types",
                  "Collections, products, customers and shop-level data",
                  "Rendering in Liquid and dynamic sources",
                  "Import/export and bulk editing",
                  "Third-party apps that write metafields (treat them as read-only)"
                ],
                "takeaways": [
                  "Model content as data, not as copy pasted into sections",
                  "Know who owns each metafield (you, the merchant, or an app)"
                ],
                "connections": [
                  "Builds on 2.1",
                  "Feeds 3.3 (APIs)"
                ],
                "build": "Model a 'store locator' or 'ingredient' content type end to end"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-3.1",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-3.2",
              "title": "3.2 Apps, embeds & third-party scripts",
              "pip": "#5a8f29",
              "blurb": "How apps attach to a theme and what they cost you.",
              "tags": [
                "apps",
                "integrations",
                "tags"
              ],
              "plan": {
                "goals": [
                  "Tell app embeds, theme app extensions and script injection apart",
                  "Audit the cost of apps and tags",
                  "Keep integrations from colliding"
                ],
                "concepts": [
                  "App embeds and theme app extensions",
                  "Tag manager, A/B testing, reviews and analytics scripts",
                  "Load order dependencies in `<head>`",
                  "Uninstall residue and orphaned snippets",
                  "Performance budget per integration",
                  "Privacy and consent hooks"
                ],
                "takeaways": [
                  "Every integration is a performance and ownership decision",
                  "Order of third-party tags can matter; change it deliberately"
                ],
                "connections": [
                  "Builds on 2.3",
                  "Connects to the analytics and privacy lesson in 4.2"
                ],
                "build": "An audit sheet template for a store's apps and tags with a keep/replace/remove call each",
                "notes": [
                  "Informed by prior themes wiring a tag manager, an A/B testing tool and a reviews platform into the head, with a fixed load order."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-3.2",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-3.3",
              "title": "3.3 Storefront & Admin APIs, and headless",
              "pip": "#5a8f29",
              "blurb": "The two GraphQL APIs and when going headless is worth it.",
              "tags": [
                "api",
                "graphql",
                "headless"
              ],
              "plan": {
                "goals": [
                  "Know what the Storefront and Admin APIs are each for",
                  "Make a simple query and understand auth and scopes",
                  "Decide honestly between theme and headless"
                ],
                "concepts": [
                  "Storefront API (public, buyer-facing)",
                  "Admin GraphQL API (private, merchant-facing)",
                  "Access tokens and scopes",
                  "Hydrogen and Oxygen (verify current state)",
                  "What you give up going headless: theme editor, apps, previews",
                  "Hybrid: a theme plus API-powered islands"
                ],
                "takeaways": [
                  "Headless trades merchant tooling for control; it is rarely the cheapest answer",
                  "Most 'API needs' fit inside a theme with a small endpoint"
                ],
                "connections": [
                  "Builds on 1.1 and 3.1",
                  "Connects to the full-stack literacy in 4.4"
                ],
                "build": "Query products from the Storefront API in a plain script, then render a small list"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-3.3",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-3.4",
              "title": "3.4 Checkout & Shopify Functions",
              "pip": "#5a8f29",
              "blurb": "What you can and can't change at checkout, and how customisation works now.",
              "tags": [
                "checkout",
                "functions"
              ],
              "plan": {
                "goals": [
                  "Understand the checkout customisation model (verify current state)",
                  "Know what Functions are and what they replace",
                  "Know what needs Plus"
                ],
                "concepts": [
                  "Checkout extensibility vs legacy checkout customisation",
                  "UI extensions and branding settings",
                  "Shopify Functions: discounts, delivery, payment customisation",
                  "Plan limits (verify)",
                  "Testing checkout changes safely"
                ],
                "takeaways": [
                  "Checkout is the most locked-down part of Shopify, by design",
                  "Set client expectations early: much of checkout is configuration, not code"
                ],
                "connections": [
                  "Builds on 1.1",
                  "Connects to 4.4"
                ],
                "build": "A decision tree: 'can we change this at checkout, and how?'"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-3.4",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            }
          ],
          "standard": "v1"
        },
        {
          "type": "group",
          "id": "sh-c4",
          "title": "4. Beyond the front end: clients & full stack",
          "summary": "The non-UI knowledge that makes a Shopify project actually ship.",
          "children": [
            {
              "type": "lesson",
              "id": "sh-4.1",
              "title": "4.1 Discovery & scoping a Shopify build",
              "pip": "#5a8f29",
              "blurb": "Turning a merchant's wishlist into a buildable, estimable scope.",
              "tags": [
                "scoping",
                "estimates",
                "clients"
              ],
              "plan": {
                "goals": [
                  "Ask the questions that expose hidden scope",
                  "Separate theme work, app work and platform configuration",
                  "Write assumptions and exclusions into the estimate"
                ],
                "concepts": [
                  "Discovery checklist: catalogue, variants, markets, integrations, content",
                  "What the platform already does (don't rebuild it)",
                  "Estimating custom sections vs configuration",
                  "Change requests and the 'one more tweak' problem",
                  "Dependencies on the merchant (content, assets, approvals)"
                ],
                "takeaways": [
                  "Most overruns are unspoken assumptions",
                  "The cheapest feature is the one the platform already ships"
                ],
                "connections": [
                  "Pairs with the WordPress course's scoping lesson",
                  "Leads into 4.2"
                ],
                "build": "A reusable discovery questionnaire and a scope template"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-4.1",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-4.2",
              "title": "4.2 Launch: domains, redirects, markets & tracking",
              "pip": "#5a8f29",
              "blurb": "Everything between 'the theme is done' and 'the store is live'.",
              "tags": [
                "launch",
                "dns",
                "redirects",
                "analytics"
              ],
              "plan": {
                "goals": [
                  "Run a launch checklist that avoids the usual disasters",
                  "Plan redirects and domain/DNS changes",
                  "Verify tracking and consent end to end"
                ],
                "concepts": [
                  "Domains, DNS records and SSL",
                  "301 redirects from the old site; URL structure",
                  "Markets, currencies, languages",
                  "Analytics, pixels, tag manager and consent",
                  "Password page, test orders, payment testing",
                  "Rollback plan and freeze windows"
                ],
                "takeaways": [
                  "Launches fail on DNS, redirects and tracking, not on CSS",
                  "Write the rollback plan before the launch"
                ],
                "connections": [
                  "Builds on 1.4 and 3.2",
                  "Mirrors the WordPress launch lesson"
                ],
                "build": "A launch-day checklist with owners and a go/no-go gate"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-4.2",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-4.3",
              "title": "4.3 Merchant handoff, training & support",
              "pip": "#5a8f29",
              "blurb": "Leaving a store the merchant can run, and a way to help afterwards.",
              "tags": [
                "handoff",
                "training",
                "support"
              ],
              "plan": {
                "goals": [
                  "Hand over documentation merchants actually use",
                  "Train editors on the theme editor and metafields",
                  "Set up a support and change process"
                ],
                "concepts": [
                  "What to document: sections, settings, content rules",
                  "Recorded walkthroughs vs written guides",
                  "Roles, permissions and staff accounts",
                  "Support agreements vs ad-hoc requests",
                  "Protecting the theme from well-meaning edits"
                ],
                "takeaways": [
                  "A theme the merchant can't safely edit is half-finished",
                  "Guardrails (clear settings, limited options) beat documentation"
                ],
                "connections": [
                  "Builds on 2.1",
                  "Mirrors the WordPress handoff lesson"
                ],
                "build": "A handoff pack outline with sample 'how to add a campaign page' steps"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-4.3",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "sh-4.4",
              "title": "4.4 Payments, tax, shipping & compliance a developer should know",
              "pip": "#5a8f29",
              "blurb": "The business plumbing you will be asked about even though you don't build it.",
              "tags": [
                "compliance",
                "payments",
                "privacy"
              ],
              "plan": {
                "goals": [
                  "Explain at a high level how payments, tax and shipping are configured",
                  "Know the compliance topics that touch a storefront",
                  "Know when to loop in the right specialist"
                ],
                "concepts": [
                  "Payment providers and what a developer can and can't see",
                  "Tax, duties and Markets basics",
                  "Shipping profiles and rates",
                  "Privacy law basics: cookies, consent, data requests",
                  "PCI scope: why Shopify takes most of it",
                  "Accessibility law and why it matters to clients"
                ],
                "takeaways": [
                  "Know the shape of these topics so you can ask the right person",
                  "Don't give legal or tax advice; route it"
                ],
                "connections": [
                  "Builds on 3.4",
                  "Links to the client-communication notes in 4.1"
                ],
                "build": "A one-page 'who do I ask?' routing guide for commerce questions"
              },
              "status": "stub",
              "file": "shared/outline.html?id=sh-4.4",
              "anchors": [],
              "dates": {
                "planned": "2026-10-23"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build this lesson from its plan: visual and interactive, introductory, aimed at working developers. Research current official docs first.",
                "basis": [
                  "Shopify developer docs (shopify.dev)",
                  "Prior Shopify theme projects (patterns only; no client details)"
                ]
              },
              "standard": "v1"
            }
          ],
          "standard": "v1"
        }
      ],
      "standard": "v1"
    },
    {
      "type": "group",
      "kind": "module",
      "label": "COURSE",
      "id": "wordpress-fe",
      "title": "Course: WordPress for Front-End & UI Developers",
      "home": "shared/outline.html?id=wordpress-fe",
      "pip": "#21759b",
      "summary": "An introduction to WordPress for developers who care about the front end and prefer code: how it works, building themes in PHP with modern tooling, headless, and the client and full-stack context around a WordPress project.",
      "throughline": "Cluster 2 is the heart of the course: building in code. Cluster 3 is the client and full-stack context that applies to any WordPress build.",
      "paths": [
        "\"I'm new to WordPress\" → 1 → 2.1",
        "\"I want a modern code stack\" → 1 → 2.3",
        "\"I'm considering headless\" → 1.1 → 2.4",
        "\"I'm scoping a build\" → 1.1 → 3.4 → 3.3"
      ],
      "dates": {
        "created": "2026-10-23",
        "updated": "2026-10-23",
        "verified": "2026-10-23"
      },
      "history": [
        {
          "date": "2026-10-23",
          "note": "Course planned (stubs only)"
        },
        {
          "date": "2026-10-23",
          "note": "Gutenberg and Elementor clusters removed; course is code-first"
        }
      ],
      "rebuild": {
        "brief": "Introductory, code-first course for working developers. Build lessons from the stub plans: visual and interactive, sourced to official docs, with the final cluster covering client and full-stack context.",
        "basis": [
          "Stub plans in this course",
          "Official documentation, checked at build time"
        ]
      },
      "children": [
        {
          "type": "group",
          "id": "wp-c1",
          "title": "1. Foundations",
          "summary": "How WordPress works, from a front-end developer's point of view.",
          "children": [
            {
              "type": "lesson",
              "id": "wp-1.1",
              "title": "1.1 How WordPress fits together",
              "pip": "#21759b",
              "blurb": "The request cycle, hooks (actions and filters), the database and the file tree: the mental model behind WordPress code.",
              "tags": [
                "wordpress",
                "architecture",
                "hooks"
              ],
              "file": "sections/platforms/lessons/wordpress-1-1-how-wordpress-fits-together.html",
              "anchors": [
                {
                  "id": "wp11-cycle",
                  "title": "One request, start to finish",
                  "anchor": "sec1"
                },
                {
                  "id": "wp11-hooks",
                  "title": "Hooks: actions and filters",
                  "anchor": "sec2"
                },
                {
                  "id": "wp11-playground",
                  "title": "Hook playground",
                  "anchor": "sec3"
                },
                {
                  "id": "wp11-data",
                  "title": "Where content lives: the database",
                  "anchor": "sec4"
                },
                {
                  "id": "wp11-files",
                  "title": "Where code lives: the file tree",
                  "anchor": "sec5"
                },
                {
                  "id": "wp11-where",
                  "title": "Where does my code go?",
                  "anchor": "sec6"
                },
                {
                  "id": "wp11-local",
                  "title": "Working locally: wp-env and WP-CLI",
                  "anchor": "sec7"
                },
                {
                  "id": "wp11-sources",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built from the WordPress developer docs: request cycle, hooks playground, data model, file tree, code placement, wp-env and WP-CLI"
                },
                {
                  "date": "2026-10-27",
                  "note": "Added a content-type widget (plugin vs theme registration) and corrected the code-placement quiz feedback"
                }
              ],
              "rebuild": {
                "brief": "Introductory, code-first lesson on how WordPress fits together for front-end developers: the request cycle and its hooks in order, actions vs filters with priority and removal rules, the core data tables, the file tree, where code goes, and local tooling (wp-env, WP-CLI). Interactive.",
                "basis": [
                  "developer.wordpress.org: Plugin Handbook hooks, Action Reference, add_filter, remove_filter, template hierarchy, wp-config",
                  "Codex: Database Description",
                  "@wordpress/env docs; WP-CLI site",
                  "Verify version-specific details at build time"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "wp-1.2",
              "title": "1.2 Themes & the template hierarchy",
              "pip": "#21759b",
              "blurb": "What a theme is made of and how the template hierarchy decides which file renders a page, with functions.php, enqueuing and child themes.",
              "tags": [
                "themes",
                "template-hierarchy",
                "theme.json"
              ],
              "file": "sections/platforms/lessons/wordpress-1-2-themes-and-the-template-hierarchy.html",
              "anchors": [
                {
                  "id": "wp12-anatomy",
                  "title": "What a theme is made of",
                  "anchor": "sec1"
                },
                {
                  "id": "wp12-hierarchy",
                  "title": "The template hierarchy explorer",
                  "anchor": "sec2"
                },
                {
                  "id": "wp12-parts",
                  "title": "Template parts and get_template_part()",
                  "anchor": "sec3"
                },
                {
                  "id": "wp12-functions",
                  "title": "functions.php and enqueuing assets",
                  "anchor": "sec4"
                },
                {
                  "id": "wp12-child",
                  "title": "Child themes: who wins?",
                  "anchor": "sec5"
                },
                {
                  "id": "wp12-detective",
                  "title": "Detective practice",
                  "anchor": "sec6"
                },
                {
                  "id": "wp12-sources",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built from the WordPress Theme Handbook: theme anatomy, hierarchy explorer, template parts, functions.php and enqueuing, child-theme override simulator"
                },
                {
                  "date": "2026-10-27",
                  "note": "Added a how-to-use guide to the hierarchy explorer and a note on who decides the lookup order"
                },
                {
                  "date": "2026-10-27",
                  "note": "Differentiated child and parent theme in the template-part tester and the child-theme simulator (folder paths, colour-coded badges)"
                }
              ],
              "rebuild": {
                "brief": "Code-first lesson on WordPress themes: classic vs block anatomy, the template hierarchy for the main request types with an interactive resolver, get_template_part(), functions.php and wp_enqueue_scripts, and child-theme override rules. Block themes only enough to recognise them.",
                "basis": [
                  "developer.wordpress.org Theme Handbook: template hierarchy, organizing theme files, theme functions, including CSS & JavaScript, child themes, global settings and styles",
                  "get_template_part() reference",
                  "Verify version-specific details (e.g. enqueue strategy args from WP 6.3) at build time"
                ]
              },
              "standard": "v1"
            }
          ],
          "standard": "v1"
        },
        {
          "type": "group",
          "id": "wp-c2",
          "title": "2. Code-first",
          "summary": "Building themes in code, with modern tooling and optionally headless.",
          "children": [
            {
              "type": "lesson",
              "id": "wp-2.1",
              "title": "2.1 Classic PHP themes & the Loop",
              "pip": "#21759b",
              "blurb": "How a classic template produces a page: the Loop, template tags, your own queries, pre_get_posts, escaping and debugging.",
              "tags": [
                "php",
                "classic",
                "theme"
              ],
              "file": "sections/platforms/lessons/wordpress-2-1-classic-php-themes-and-the-loop.html",
              "anchors": [
                {
                  "id": "wp-2.1-0",
                  "title": "A template is PHP wrapped around HTML",
                  "anchor": "sec1"
                },
                {
                  "id": "wp-2.1-1",
                  "title": "The Loop, step by step",
                  "anchor": "sec2"
                },
                {
                  "id": "wp-2.1-2",
                  "title": "Template tags: print or return",
                  "anchor": "sec3"
                },
                {
                  "id": "wp-2.1-3",
                  "title": "Your own query, and putting things back",
                  "anchor": "sec4"
                },
                {
                  "id": "wp-2.1-4",
                  "title": "Changing the main query safely",
                  "anchor": "sec5"
                },
                {
                  "id": "wp-2.1-5",
                  "title": "Escaping: protect the output",
                  "anchor": "sec6"
                },
                {
                  "id": "wp-2.1-6",
                  "title": "Debugging: seeing what went wrong",
                  "anchor": "sec7"
                },
                {
                  "id": "wp-2.1-7",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built from the WordPress developer docs: Loop stepper, template tag demo, reset_postdata bug demo, pre_get_posts guard table, escaping demo and quiz, debug constants"
                }
              ],
              "rebuild": {
                "brief": "Code-first lesson on classic theme templates: the Loop, template tags (the_ vs get_the_), secondary WP_Query and wp_reset_postdata, pre_get_posts guards, late escaping with the right function, and WP_DEBUG constants. Interactive.",
                "basis": [
                  "developer.wordpress.org: The Loop, pre_get_posts, wp_reset_postdata, escaping output, debugging",
                  "WP_Query reference (partially read); get_the_ naming from background knowledge"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "wp-2.2",
              "title": "2.2 Custom post types, taxonomies & fields",
              "pip": "#21759b",
              "blurb": "Modelling your own content in WordPress: custom post types, taxonomies and fields, native post meta or ACF.",
              "tags": [
                "cpt",
                "acf",
                "content-modelling"
              ],
              "file": "sections/platforms/lessons/wordpress-2-2-post-types-taxonomies-and-fields.html",
              "anchors": [
                {
                  "id": "wp22-1",
                  "title": "Model the content first",
                  "anchor": "sec1"
                },
                {
                  "id": "wp22-2",
                  "title": "register_post_type, argument by argument",
                  "anchor": "sec2"
                },
                {
                  "id": "wp22-3",
                  "title": "Taxonomies: flat or hierarchical",
                  "anchor": "sec3"
                },
                {
                  "id": "wp22-4",
                  "title": "Where does each piece live?",
                  "anchor": "sec4"
                },
                {
                  "id": "wp22-5",
                  "title": "Post meta, hands on",
                  "anchor": "sec5"
                },
                {
                  "id": "wp22-6",
                  "title": "ACF and flexible content",
                  "anchor": "sec6"
                },
                {
                  "id": "wp22-7",
                  "title": "Templates for your model",
                  "anchor": "sec7"
                },
                {
                  "id": "wp22-8",
                  "title": "Choosing, and changing your mind",
                  "anchor": "sec8"
                },
                {
                  "id": "wp22-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built lesson 2.2 with eight interactive widgets: plugin-vs-theme registration, register_post_type builder, taxonomy explorer, storage explorer, post meta simulator, ACF flexible content stacker, template-file chain and a field-choice quiz."
                }
              ],
              "rebuild": {
                "brief": "Introductory, code-first lesson for a front-end developer on modelling content in WordPress. Eight small plain-JavaScript widgets (plugin vs theme registration, register_post_type argument builder, hierarchical vs flat taxonomy, where data is stored, post meta add/update/get simulator, ACF Flexible Content stacker with template branch highlighting, template hierarchy chain for a custom type, taxonomy vs meta vs ACF quiz). Sources are the developer.wordpress.org references and ACF docs; own synthesis and illustrative values are labelled.",
                "basis": [
                  "developer.wordpress.org: register_post_type() and register_taxonomy() references",
                  "developer.wordpress.org: template hierarchy",
                  "developer.wordpress.org plugin handbook: custom post types, taxonomies, post metadata",
                  "ACF docs: get_field() and Flexible Content"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "wp-2.3",
              "title": "2.3 Modern tooling: Timber, Sage, Vite & Composer",
              "pip": "#21759b",
              "blurb": "What a modern WordPress stack adds (Timber, Sage, a bundler, Composer, CI) and what it costs the next developer.",
              "tags": [
                "timber",
                "sage",
                "vite",
                "composer"
              ],
              "file": "sections/platforms/lessons/wordpress-2-3-modern-tooling-timber-sage-vite-composer.html",
              "anchors": [
                {
                  "id": "wp23-1",
                  "title": "What problem each tool solves",
                  "anchor": "sec1"
                },
                {
                  "id": "wp23-2",
                  "title": "The same template, three ways",
                  "anchor": "sec2"
                },
                {
                  "id": "wp23-3",
                  "title": "From source assets to enqueued files",
                  "anchor": "sec3"
                },
                {
                  "id": "wp23-4",
                  "title": "Composer and the Bedrock layout",
                  "anchor": "sec4"
                },
                {
                  "id": "wp23-5",
                  "title": "Linting, formatting and a pull request gate",
                  "anchor": "sec5"
                },
                {
                  "id": "wp23-6",
                  "title": "What the next developer inherits",
                  "anchor": "sec6"
                },
                {
                  "id": "wp23-7",
                  "title": "Does the extra tooling pay off?",
                  "anchor": "sec7"
                },
                {
                  "id": "wp23-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built lesson 2.3 with seven widgets: a classic/Twig/Blade template toggle, a build pipeline stepper, a Composer two-machine simulator, a Bedrock layout comparison, a CI gate table, an inherited-cost checklist and a does-it-pay-off picker."
                }
              ],
              "rebuild": {
                "brief": "Introductory lesson on modern WordPress tooling for a front-end developer. Seven plain-JavaScript widgets: the same post list in classic PHP, Timber (Twig) and Sage (Blade) with concern highlighting; a dev/production build pipeline stepper for Vite and @wordpress/scripts including the forgot-to-build failure; a Composer require/update/install simulator across two machines; standard vs Bedrock folder layouts; a lint/build/test pull request gate; a what-the-next-developer-inherits checklist; and a team/project-life/handoff scoring picker (own heuristic, labelled). No version numbers stated. Blade example, escaping defaults and hosting needs are labelled background knowledge.",
                "basis": [
                  "Timber documentation (timber.github.io/docs)",
                  "Roots: Sage installation and Bedrock pages",
                  "developer.wordpress.org: @wordpress/scripts package reference",
                  "Vite guide: backend integration",
                  "Composer docs: basic usage"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "wp-2.4",
              "title": "2.4 Headless WordPress (REST & WPGraphQL)",
              "pip": "#21759b",
              "blurb": "Using WordPress as a content backend for a separate front end: REST, WPGraphQL, previews, plugin breakage and the cost of two systems.",
              "tags": [
                "headless",
                "rest",
                "graphql"
              ],
              "file": "sections/platforms/lessons/wordpress-2-4-headless-wordpress-rest-and-wpgraphql.html",
              "anchors": [
                {
                  "id": "wp24-1",
                  "title": "What \"headless\" means",
                  "anchor": "sec1"
                },
                {
                  "id": "wp24-2",
                  "title": "The REST API: ask for posts",
                  "anchor": "sec2"
                },
                {
                  "id": "wp24-3",
                  "title": "Authentication: who is asking?",
                  "anchor": "sec3"
                },
                {
                  "id": "wp24-4",
                  "title": "REST or WPGraphQL?",
                  "anchor": "sec4"
                },
                {
                  "id": "wp24-5",
                  "title": "Drafts, previews and fresh content",
                  "anchor": "sec5"
                },
                {
                  "id": "wp24-6",
                  "title": "What breaks when the theme goes away",
                  "anchor": "sec6"
                },
                {
                  "id": "wp24-7",
                  "title": "Is headless worth it?",
                  "anchor": "sec7"
                },
                {
                  "id": "wp24-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built lesson 2.4 with six widgets: a REST request explorer with a plain-page render, an authentication quiz, a REST vs GraphQL fetch comparison, a revalidation and preview stepper, a what-breaks-without-the-theme table and an is-headless-worth-it picker."
                }
              ],
              "rebuild": {
                "brief": "Introductory lesson on headless WordPress for a front-end developer. Six plain-JavaScript widgets: a REST request builder over a clearly illustrative payload (per_page, status, credentials, _fields, _embed) that also renders a plain page and shows the text-vs-HTML entity gotcha; a which-authentication-method quiz (cookie plus nonce, application passwords, Basic Auth plugin); a generated REST vs GraphQL comparison for the same page; a time-based vs on-demand revalidation and draft preview stepper; a theme-front-end vs headless breakage table over common plugin needs; and a for/against scoring picker plus the two-systems hosting cost. Own synthesis, illustrative data and background knowledge are labelled.",
                "basis": [
                  "WordPress REST API Handbook: overview, authentication, posts reference, global parameters",
                  "WPGraphQL introduction (wpgraphql.com/docs)",
                  "Next.js Incremental Static Regeneration guide (as one example front end)",
                  "register_post_type reference (show_in_rest)"
                ]
              },
              "standard": "v1"
            }
          ],
          "standard": "v1"
        },
        {
          "type": "group",
          "id": "wp-c3",
          "title": "3. Beyond the front end: clients & full stack",
          "summary": "The non-UI knowledge that makes a WordPress project actually ship.",
          "children": [
            {
              "type": "lesson",
              "id": "wp-3.1",
              "title": "3.1 Plugins & the ecosystem",
              "pip": "#21759b",
              "blurb": "What a plugin is, where a feature belongs, the plugin categories on client sites, how to vet a plugin, find a conflict by bisection, and who owns the licence.",
              "tags": [
                "plugins",
                "woocommerce"
              ],
              "file": "sections/platforms/lessons/wordpress-3-1-plugins-and-the-ecosystem.html",
              "anchors": [
                {
                  "id": "wp31-1",
                  "title": "A plugin is a package of PHP",
                  "anchor": "sec1"
                },
                {
                  "id": "wp31-2",
                  "title": "Plugin, theme or must-use?",
                  "anchor": "sec2"
                },
                {
                  "id": "wp31-3",
                  "title": "The categories you meet in client work",
                  "anchor": "sec3"
                },
                {
                  "id": "wp31-4",
                  "title": "Vetting a plugin before you install it",
                  "anchor": "sec4"
                },
                {
                  "id": "wp31-5",
                  "title": "When the site breaks: plugin bisection",
                  "anchor": "sec5"
                },
                {
                  "id": "wp31-6",
                  "title": "Licences, renewals and the audit sheet",
                  "anchor": "sec6"
                },
                {
                  "id": "wp31-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built lesson 3.1 with six widgets: header explorer, placement picker, category explorer, vetting checklist, conflict-bisection simulator and plugin audit sheet."
                }
              ],
              "rebuild": {
                "brief": "Introductory code-first lesson on WordPress plugins for a front-end developer: plugin header and must-use plugins, a plugin/theme/must-use placement quiz, category explorer (SEO, forms, caching, backup, security, commerce), a scored vetting checklist, a ten-plugin bisection simulator and an audit sheet totalling cost and risk. Plain JavaScript widgets, v1 standard.",
                "basis": [
                  "developer.wordpress.org plugin handbook: what is a plugin, header requirements, best practices",
                  "developer.wordpress.org must-use plugins (advanced administration)",
                  "developer.wordpress.org detailed plugin directory guidelines",
                  "developer.woocommerce.com docs (high-level description)",
                  "developer.wordpress.org hardening WordPress"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "wp-3.2",
              "title": "3.2 Performance, accessibility & security",
              "pip": "#21759b",
              "blurb": "Where caching answers a request, which fixes move which Core Web Vitals metric, baseline accessibility in theme output, how sites get compromised, and a baseline audit worksheet.",
              "tags": [
                "performance",
                "security",
                "accessibility"
              ],
              "file": "sections/platforms/lessons/wordpress-3-2-performance-accessibility-and-security.html",
              "anchors": [
                {
                  "id": "wp32-1",
                  "title": "Caching layers: where a request is answered",
                  "anchor": "sec1"
                },
                {
                  "id": "wp32-2",
                  "title": "Core Web Vitals: what moves which metric",
                  "anchor": "sec2"
                },
                {
                  "id": "wp32-3",
                  "title": "Accessibility in theme output",
                  "anchor": "sec3"
                },
                {
                  "id": "wp32-4",
                  "title": "How a site gets compromised",
                  "anchor": "sec4"
                },
                {
                  "id": "wp32-5",
                  "title": "Three code habits: validate, escape, authorise",
                  "anchor": "sec5"
                },
                {
                  "id": "wp32-6",
                  "title": "A baseline audit worksheet",
                  "anchor": "sec6"
                },
                {
                  "id": "wp32-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built lesson 3.2 with six widgets: layered-caching explorer, Core Web Vitals matcher, accessibility lab, attack-route explorer, code-habit picker and a baseline audit worksheet."
                }
              ],
              "rebuild": {
                "brief": "Practical lesson on caching layers and Core Web Vitals, accessibility checks for theme output (labels, contrast, focus, landmarks), and defensive habits for site safety, built as six plain JavaScript widgets to the v1 standard.",
                "basis": [
                  "web.dev Core Web Vitals (vitals article)",
                  "developer.wordpress.org advanced administration: performance optimization",
                  "developer.wordpress.org advanced administration: hardening WordPress",
                  "developer.wordpress.org common APIs: security overview and nonces",
                  "W3C WCAG 2.2 quick reference"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "wp-3.3",
              "title": "3.3 Hosting, staging, deployment & updates",
              "pip": "#21759b",
              "blurb": "Getting changes safely from a laptop to a live WordPress site: hosting, staging, the code-versus-database problem, deployment, updates and DNS.",
              "tags": [
                "hosting",
                "deployment",
                "staging"
              ],
              "file": "sections/platforms/lessons/wordpress-3-3-hosting-staging-deployment-and-updates.html",
              "anchors": [
                {
                  "id": "wp33-1",
                  "title": "What WordPress needs to run",
                  "anchor": "sec1"
                },
                {
                  "id": "wp33-2",
                  "title": "Choosing a kind of hosting",
                  "anchor": "sec2"
                },
                {
                  "id": "wp33-3",
                  "title": "Code in git, content in the database",
                  "anchor": "sec3"
                },
                {
                  "id": "wp33-4",
                  "title": "A deployment path and where it fails",
                  "anchor": "sec4"
                },
                {
                  "id": "wp33-5",
                  "title": "Moving a database: URLs and search-replace",
                  "anchor": "sec5"
                },
                {
                  "id": "wp33-6",
                  "title": "Update day, in the right order",
                  "anchor": "sec6"
                },
                {
                  "id": "wp33-7",
                  "title": "Backups you have actually restored",
                  "anchor": "sec7"
                },
                {
                  "id": "wp33-8",
                  "title": "Domains, DNS and SSL at cut-over",
                  "anchor": "sec8"
                },
                {
                  "id": "wp33-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built: hosting picker, code-versus-content explorer, deployment pipeline with failure marking, search-replace simulator, update-day ordering, backup restore check and DNS cut-over timeline."
                }
              ],
              "rebuild": {
                "brief": "Code-first lesson on running WordPress in production for a front-end developer: requirements, managed versus general hosting as a trade-off, why code lives in git and content in the database, a local-to-production pipeline, WP-CLI db export and search-replace, update order and rollback, backups that have been restored, and DNS, TTL and SSL at cut-over. Seven small plain-JavaScript widgets; DNS, hosting heuristics and consequences are labelled as own synthesis or illustrative.",
                "basis": [
                  "https://wordpress.org/about/requirements/",
                  "https://developer.wordpress.org/advanced-administration/upgrade/migrating/",
                  "https://developer.wordpress.org/advanced-administration/upgrade/upgrading/",
                  "https://developer.wordpress.org/advanced-administration/security/backup/",
                  "https://developer.wordpress.org/cli/commands/search-replace/",
                  "https://developer.wordpress.org/cli/commands/db/export/"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "wp-3.4",
              "title": "3.4 Scoping, handoff & supporting a WordPress site",
              "pip": "#21759b",
              "blurb": "Scoping a WordPress build with honest assumptions, handing it over, and agreeing how it is supported afterwards.",
              "tags": [
                "scoping",
                "handoff",
                "maintenance"
              ],
              "file": "sections/platforms/lessons/wordpress-3-4-scoping-handoff-and-supporting-a-wordpress-site.html",
              "anchors": [
                {
                  "id": "wp34-1",
                  "title": "Why this is guidance, not documentation",
                  "anchor": "sec1"
                },
                {
                  "id": "wp34-2",
                  "title": "Discovery questions for WordPress",
                  "anchor": "sec2"
                },
                {
                  "id": "wp34-3",
                  "title": "Estimating with visible assumptions",
                  "anchor": "sec3"
                },
                {
                  "id": "wp34-4",
                  "title": "Change requests",
                  "anchor": "sec4"
                },
                {
                  "id": "wp34-5",
                  "title": "What clients assume WordPress includes",
                  "anchor": "sec5"
                },
                {
                  "id": "wp34-6",
                  "title": "Handoff and editor training",
                  "anchor": "sec6"
                },
                {
                  "id": "wp34-7",
                  "title": "Maintenance plans versus ad hoc fixes",
                  "anchor": "sec7"
                },
                {
                  "id": "wp34-8",
                  "title": "Access and offboarding",
                  "anchor": "sec8"
                },
                {
                  "id": "wp34-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-10-27",
                "updated": "2026-10-27",
                "verified": "2026-10-27"
              },
              "history": [
                {
                  "date": "2026-10-23",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built: discovery checklist with scope summary, estimate builder showing assumptions, change-request and client-assumption quizzes, handoff pack builder, role picker, maintenance plan picker and offboarding checklist."
                }
              ],
              "rebuild": {
                "brief": "Practice-guidance lesson (own synthesis, labelled as such) on WordPress-specific discovery questions, estimating with visible assumptions using invented illustrative hours, sorting change requests, what clients assume WordPress includes, handoff packs and editor roles, maintenance plans versus ad hoc support, and access and offboarding. Ties in what the WordPress documentation says about updates, backups, roles and hardening. Eight small plain-JavaScript widgets.",
                "basis": [
                  "https://developer.wordpress.org/advanced-administration/upgrade/upgrading/",
                  "https://developer.wordpress.org/advanced-administration/security/backup/",
                  "https://developer.wordpress.org/advanced-administration/security/hardening/",
                  "https://wordpress.org/documentation/article/manage-plugins/",
                  "https://wordpress.org/documentation/article/roles-and-capabilities/"
                ]
              },
              "standard": "v1"
            }
          ],
          "standard": "v1"
        }
      ],
      "standard": "v1"
    }
  ]
});
