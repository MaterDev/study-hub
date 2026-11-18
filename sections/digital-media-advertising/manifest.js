/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-11-18",
  "updated": "2026-11-18",
  "id": "digital-media-advertising",
  "order": 7,
  "title": "Digital Media & Advertising",
  "icon": "📡",
  "summary": "How advertising, ad tech and media work and are changing, read from industry sources with their claims separated from the evidence.",
  "scope": {
    "purpose": "Understand the business of digital media: advertising markets, ad tech, attention and measurement, and how AI is changing them.",
    "includes": [
      "Ad tech and the advertising ecosystem",
      "Consumer attention and the media channels that capture it",
      "AI's effect on search, commerce and advertising",
      "Reading industry reports and conference decks critically"
    ],
    "excludes": [
      "Building storefronts or sites on a platform (→ Platforms)",
      "General AI tooling and workflows (→ Building & Learning with AI)",
      "Front-end performance of ad scripts (→ Web Realtime, Performance & Motion)"
    ],
    "admission": [
      "Is it about how advertising or digital media is bought, sold, measured or consumed?",
      "Can it be taught from a named source with its claims checked against outside evidence?"
    ],
    "audience": "Curious readers, including developers, who work near advertising and media and want the business logic behind it.",
    "depth": "Source-backed: the report's claims paraphrased, each marked as confirmed, unconfirmed or the author's framing, with small interactive models."
  },
  "related": [
    "building-with-ai",
    "platforms"
  ],
  "children": [
    {
      "type": "group",
      "kind": "module",
      "label": "MODULE",
      "id": "state-of-digital",
      "title": "Module: State of Digital 2026",
      "home": "shared/outline.html?id=state-of-digital",
      "pip": "#c0642b",
      "summary": "A close reading of LUMA Partners' State of Digital 2026 conference deck in five lessons: how ad tech got here, consumers moving to AI, the AI purchase funnel, where attention is going, and where value moves.",
      "throughline": "AI is changing both where people spend attention and how advertising is bought, and the deck argues that value will move from running workflows to making decisions. Every lesson separates what the deck claims from what can be checked.",
      "paths": [
        "\"Where do I start?\" → 1",
        "\"I care about AI and consumers\" → 2 → 3",
        "\"I care about media and channels\" → 4",
        "\"I care about ad tech strategy and M&A\" → 1 → 5"
      ],
      "source": {
        "title": "State of Digital 2026",
        "author": "LUMA Partners (DMS by LUMA)",
        "year": 2026,
        "url": "https://lumapartners.com/presentations/state-of-digital-2026/"
      },
      "readings": [
        {
          "id": "state-of-digital-2026",
          "kind": "pdf",
          "tab": "The deck",
          "title": "LUMA Partners: State of Digital 2026 (trimmed)",
          "file": "sections/digital-media-advertising/readings/state-of-digital-2026.pdf",
          "url": "https://lumapartners.com/presentations/state-of-digital-2026/",
          "credit": "LUMA Partners, State of Digital 2026 (DMS by LUMA, November 2026), delivered at a public conference. This copy is trimmed to 70 pages with the political-advertising and opening slides removed and the images compressed. Page numbers are the pages of this trimmed file. LUMA's own page for the presentation is linked here; its full download sits behind a sign-up form."
        }
      ],
      "dates": {
        "created": "2026-11-18",
        "updated": "2026-11-18",
        "verified": "2026-11-18"
      },
      "history": [
        {
          "date": "2026-11-18",
          "note": "Module planned: five lessons from the deck; lesson 1 built, lessons 2-5 stubs"
        },
        {
          "date": "2026-11-18",
          "note": "Lesson 2 built: consumers moving to AI, with the deck's user, hours and ad claims cross-checked"
        },
        {
          "date": "2026-11-18",
          "note": "Lesson 3 built: the AI purchase funnel, with the agentic commerce debate, retail media figure and GEO deals cross-checked"
        },
        {
          "date": "2026-11-18",
          "note": "Lesson 4 built: where attention is going, with the deck's streaming, creator, mobile and out-of-home claims cross-checked"
        },
        {
          "date": "2026-11-18",
          "note": "Lesson 5 built: decisioning, with the deck's framework separated from checkable claims and the consolidation thesis tested against 2026 deals"
        },
        {
          "date": "2026-11-18",
          "note": "All five lessons built; the module now covers the whole deck, pages 2-70"
        },
        {
          "date": "2026-11-18",
          "note": "Accuracy review of all five lessons against the deck's page text and slide images"
        },
        {
          "date": "2026-11-18",
          "note": "Lesson 2 remade as a short lesson that teaches the deck's contents first"
        },
        {
          "date": "2026-11-18",
          "note": "Lesson 3 remade as a short lesson that teaches the deck's contents first"
        }
      ],
      "rebuild": {
        "brief": "Five lessons that follow the State of Digital 2026 deck in order (pages 2-7, 8-16, 17-28 and 41, 29-40, 42-70), for a curious general reader. Paraphrase the deck, separate its claims from what can be checked, and flag that it is the point of view of a firm that advises on ad tech M&A.",
        "basis": [
          "LUMA Partners, State of Digital 2026 (attached reading)",
          "Outside sources checked at build time"
        ]
      },
      "standard": "v1",
      "children": [
        {
          "type": "lesson",
          "id": "sod-1",
          "title": "1. How Ad Tech Got Here: Five Phases and a Split Market",
          "pip": "#c0642b",
          "blurb": "A short walk through ad tech's five phases, the walled-garden versus open-web split, and what two deals and a stock slide say about it.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-1-how-ad-tech-got-here.html",
          "anchors": [
            {
              "id": "sod1-1",
              "title": "Four shifts, and the words you need",
              "anchor": "sec1"
            },
            {
              "id": "sod1-2",
              "title": "Five phases of ad tech",
              "anchor": "sec2"
            },
            {
              "id": "sod1-3",
              "title": "Where AI lands, and two worlds of advertising",
              "anchor": "sec3"
            },
            {
              "id": "sod1-4",
              "title": "What the market believes",
              "anchor": "sec4"
            },
            {
              "id": "sod1-src",
              "title": "Takeaways & sources",
              "anchor": "sec-src"
            }
          ],
          "dates": {
            "created": "2026-11-18",
            "updated": "2026-11-18",
            "verified": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            },
            {
              "date": "2026-11-18",
              "note": "Built from deck pages 2-7: a four-shifts explorer, a five-phase year slider over a schematic of the market curves, an AI-layers stack, a deal-multiple calculator for Freestar and Vibe, a Trade Desk timeline and K-shape construction panel, and a claims ledger marking what was checked and what was not."
            },
            {
              "date": "2026-11-18",
              "note": "Accuracy review: Checked now only where the outside source was opened in full (others tagged Reported), page citations and wording corrected to match the slides, ledgers completed, and two calculators fixed"
            },
            {
              "date": "2026-11-18",
              "note": "Remade from scratch as a short teaching lesson: the four shifts, terms defined in plain words, the five phases as a story, walled gardens versus the open web, the two deals and the Trade Desk and K-shape slides, with one short 'How solid is this?' note instead of verification tables."
            }
          ],
          "rebuild": {
            "brief": "Lesson 1 of the State of Digital 2026 module, from deck pages 2-7, about 1,500 words and three widgets. Define each term the first time it appears (ad tech, programmatic, DSP, SSP, ad network, M&A, consolidation, venture capital, private equity, walled garden, open web, EBITDA versus revenue multiple, bellwether, K-shape). Tell the five phases as a story: what each was, who it helped, why it led on. Explain the four shifts, the AI-layers pyramid, the Stagwell/Freestar versus Walmart/Vibe deals, The Trade Desk and the K-shape. Widgets: phase explorer, walled-garden versus open-web hop chain, margin slider showing why a profit multiple and a revenue multiple cannot be compared. One short collapsed 'How solid is this?' note; no ledgers or status chips.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 2-7",
              "Stagwell Inc., Form 10-Q for the quarter ended 30 Sep 2026, Note 1 (Freestar terms)",
              "Walmart's 23 Jun 2026 announcement of Vibe; Trefis, What Is Driving The Move In Trade Desk Stock (4 Nov 2026)",
              "LUMA's page for the deck (lumapartners.com/presentations/state-of-digital-2026)"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-2",
          "title": "2. Consumers Move to AI: Attention, Money and Intent",
          "pip": "#c0642b",
          "blurb": "Why people are moving to AI assistants, how those apps may earn money, and why the deck thinks a conversation reveals more intent than a search.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-2-consumers-move-to-ai.html",
          "anchors": [
            {
              "id": "sod2-1",
              "title": "How fast people moved",
              "anchor": "sec1"
            },
            {
              "id": "sod2-2",
              "title": "How AI apps make money",
              "anchor": "sec2"
            },
            {
              "id": "sod2-3",
              "title": "Proxies, and the thing advertisers really want",
              "anchor": "sec3"
            },
            {
              "id": "sod2-4",
              "title": "Why a conversation beats a search",
              "anchor": "sec4"
            },
            {
              "id": "sod2-src",
              "title": "Takeaways & sources",
              "anchor": "sec-src"
            }
          ],
          "dates": {
            "created": "2026-11-18",
            "updated": "2026-11-18",
            "verified": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            },
            {
              "date": "2026-11-18",
              "note": "Built from deck pages 8-16: a source-lens toggle on the ChatGPT and Muse growth charts, an hours-per-user calculator, an assistant-by-assistant ad status explorer with an ad revenue sketch, pattern-versus-exceptions on advertising, a proxy ladder, a conversation signals model with memory and sharing switches, and a claims ledger."
            },
            {
              "date": "2026-11-18",
              "note": "Accuracy review: Checked now only where the outside source was opened in full (others tagged Reported), page citations and wording corrected to match the slides, ledgers completed, and two calculators fixed"
            },
            {
              "date": "2026-11-18",
              "note": "Remade from scratch as a short teaching lesson: adoption and time spent, subscription versus advertising and why the deck says all roads lead to advertising, proxies and intent, and why a conversation shows more intent than a search; one short 'How solid is this?' note replaces the ledger and chips."
            }
          ],
          "rebuild": {
            "brief": "Lesson 2 of the State of Digital 2026 module, from deck pages 8-16, about 1,500 words and three widgets. Define AI assistant, subscription, advertising, CPM, proxy and intent when first used. Cover the two paradigm shifts (pp. 8-9), adoption and time spent (pp. 10-11), subscription versus ads and 'all roads lead to advertising' (pp. 12-13), the proxy ladder to intent (p. 14) and search versus AI conversation intent (pp. 15-16). Widgets: hours-per-user sketch, per-assistant ad status, proxy ladder. One short collapsed 'How solid is this?' note; no ledgers or status chips.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 8-16",
              "Sensor Tower, State of AI 2026 press release, 16 Jun 2026",
              "Mixed, Meta's Muse tops Apple's US free iPhone chart (Sep 2026)",
              "OpenAI, Our approach to advertising and expanding access (Jan 2026) and later updates; Anthropic, Claude is a space to think (4 Feb 2026); reports on Google's Gemini app and ads"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-3",
          "title": "3. The AI Purchase Funnel",
          "pip": "#c0642b",
          "blurb": "How an AI assistant can shorten the shopping funnel, the debate over agents that buy for you, retail media, and the deck's four implications for advertisers.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-3-the-ai-purchase-funnel.html",
          "anchors": [
            {
              "id": "sod3-1",
              "title": "The old funnel and the AI funnel",
              "anchor": "sec1"
            },
            {
              "id": "sod3-2",
              "title": "Agents that buy: mirage or reality?",
              "anchor": "sec2"
            },
            {
              "id": "sod3-3",
              "title": "Retail media, and AI as channel and layer",
              "anchor": "sec3"
            },
            {
              "id": "sod3-4",
              "title": "Four implications, and a question about bots",
              "anchor": "sec4"
            },
            {
              "id": "sod3-src",
              "title": "Takeaways & sources",
              "anchor": "sec-src"
            }
          ],
          "dates": {
            "created": "2026-11-18",
            "updated": "2026-11-18",
            "verified": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            },
            {
              "date": "2026-11-18",
              "note": "Built from deck pages 17-28 and 41: a three-journey funnel comparison, a party-by-party view of the agentic commerce debate with Seufert's primary post, a retail media figure traced to company-reported revenue, an aggregation reach model, a channel-and-layer grid, the four implications, a GEO and AEO deal explorer (noting LUMA advised Senso), a human and bot matrix, and a claims ledger."
            },
            {
              "date": "2026-11-18",
              "note": "Accuracy review: Checked now only where the outside source was opened in full (others tagged Reported), page citations and wording corrected to match the slides, ledgers completed, and two calculators fixed"
            },
            {
              "date": "2026-11-18",
              "note": "Remade from scratch as a short teaching lesson: the old and AI purchase funnels, the Seufert and Finkelstein agentic commerce debate, retail media and AI as channel and layer, the four implications (including GEO and AEO) and the humans-and-bots question; one short 'How solid is this?' note replaces the ledger and chips."
            }
          ],
          "rebuild": {
            "brief": "Lesson 3 of the State of Digital 2026 module, from deck pages 17-28 and 41, about 1,500 words and three widgets. Define purchase funnel, first-party and third-party, agentic commerce, retail media network, commerce media, channel versus layer, GEO, AEO, martech when first used. Widgets: three-journey funnel comparison, player-by-player agentic commerce view, channel-and-layer grid. One short collapsed 'How solid is this?' note; no ledgers or status chips.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 17-28 and 41",
              "Eric Seufert, Agentic commerce is a mirage (3 Sep 2025); TechCrunch on Shopify and AI shopping agents (16 Mar 2026)",
              "Coverage of Adobe/Semrush, Sitecore/Scrunch, Profound's Series D and Zeta/Senso",
              "Imperva Bad Bot Report 2026; reports on Amazon's and Walmart's advertising revenue"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-4",
          "title": "4. Where Attention Is Going",
          "pip": "#c0642b",
          "blurb": "Where the deck says attention is heading, from streaming TV and creators to mobile apps and out-of-home, with each headline number checked and the deck's advisory ties flagged.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-4-where-attention-is-going.html",
          "anchors": [
            {
              "id": "sod4-1",
              "title": "Streaming and linear TV",
              "anchor": "sec1"
            },
            {
              "id": "sod4-2",
              "title": "Consolidation and sports rights",
              "anchor": "sec2"
            },
            {
              "id": "sod4-3",
              "title": "Creators",
              "anchor": "sec3"
            },
            {
              "id": "sod4-4",
              "title": "Mobile apps",
              "anchor": "sec4"
            },
            {
              "id": "sod4-5",
              "title": "Out-of-home, called IRL",
              "anchor": "sec5"
            },
            {
              "id": "sod4-6",
              "title": "A channel scorecard, with the open web",
              "anchor": "sec6"
            },
            {
              "id": "sod4-7",
              "title": "What was confirmed and what was not",
              "anchor": "sec7"
            },
            {
              "id": "sod4-src",
              "title": "Takeaways & sources",
              "anchor": "sec-src"
            }
          ],
          "dates": {
            "created": "2026-11-18",
            "updated": "2026-11-18",
            "verified": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            },
            {
              "date": "2026-11-18",
              "note": "Built from deck pages 29-40: a measure-by-measure view of streaming's share with a crossover timeline, a CTV deal and sports-rights explorer, creator spend and growth views with a 27 million breakdown, a mobile spend-per-hour model, an out-of-home attribute test, a channel scorecard including the open web, and a claims ledger."
            },
            {
              "date": "2026-11-18",
              "note": "Accuracy review: Checked now only where the outside source was opened in full (others tagged Reported), page citations and wording corrected to match the slides, ledgers completed, and two calculators fixed"
            }
          ],
          "rebuild": {
            "brief": "Lesson 4 of the State of Digital 2026 module, from deck pages 29-40. Cover the five-channel framing (p. 29), streaming versus linear and the Nielsen 47% (p. 30), the CTV and live-sports deals (p. 31), streaming and social video convergence (p. 32), creators (pp. 33-36), mobile apps and the Liftoff per-hour chart (pp. 37-38) and out-of-home with the OUTFRONT message (pp. 39-40). Widgets: Nielsen measure picker with donut, crossover timeline, deal explorer, creator spend and growth bars, 27 million breakdown, mobile spend-per-hour model, IRL attribute test, channel scorecard, claims ledger. Tag every claim Deck, Checked, Unconfirmed, Mine, Illustrative or Background; call out that LUMA co-managed Liftoff's IPO, presented to OUTFRONT's board, and that the deck is an M&A adviser's point of view.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 29-40",
              "Nielsen Ad Supported Gauge Q1 2026 via TV Technology (opened); Nielsen monthly Gauge for May and August 2026 via MediaPost and Tubefilter",
              "eMarketer chart titles and notes on CTV versus linear time spent and ad spend (login-gated)",
              "Deal coverage: Paramount Skydance and Warner Bros. Discovery (Feb 2026), Fox and Roku (15 Jun 2026), Disney and fubo (completed 29 Oct 2025), Pinterest and tvScientific (11 Dec 2025); Ampere Analysis via TheWrap on streamers' sports rights spend",
              "Keller Advisory Group 2023 creator study via MediaPost; IAB creator advertising figures via Marketing Dive; reports on Unilever's 300,000 creators and Pepsi; Digiday on PepsiCo",
              "Coverage of Liftoff's S-1 and the Altman Solon study it commissioned; OUTFRONT Media Q2 2026 results"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-5",
          "title": "5. Decisioning: Where Value Moves",
          "pip": "#c0642b",
          "blurb": "The deck's theory that value moves from workflow to decisioning, with its framework kept apart from the checkable facts and the consolidation thesis tested against 2026 deals.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-5-decisioning-where-value-moves.html",
          "anchors": [
            {
              "id": "sod5-1",
              "title": "Efficiency or effectiveness",
              "anchor": "sec1"
            },
            {
              "id": "sod5-2",
              "title": "Workflow or decisioning",
              "anchor": "sec2"
            },
            {
              "id": "sod5-3",
              "title": "The fight to own decisioning",
              "anchor": "sec3"
            },
            {
              "id": "sod5-4",
              "title": "The decisioning stack",
              "anchor": "sec4"
            },
            {
              "id": "sod5-5",
              "title": "Squash or racquetball",
              "anchor": "sec5"
            },
            {
              "id": "sod5-6",
              "title": "Consolidation and the five attributes",
              "anchor": "sec6"
            },
            {
              "id": "sod5-7",
              "title": "What was confirmed and what was not",
              "anchor": "sec7"
            },
            {
              "id": "sod5-src",
              "title": "Takeaways & sources",
              "anchor": "sec-src"
            }
          ],
          "dates": {
            "created": "2026-11-18",
            "updated": "2026-11-18",
            "verified": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            },
            {
              "date": "2026-11-18",
              "note": "Built from deck pages 42-70: an efficiency versus effectiveness calculator exposing the 100x arithmetic, a workflow-moat model, a Trade Desk dispute and supply-side decisioning evidence list, a clickable decisioning stack, a squash versus racquetball simulation, a five-attribute deal matrix with a consolidation check against 2026 deal activity, and a ledger separating framework from checkable claims."
            },
            {
              "date": "2026-11-18",
              "note": "Accuracy review: Checked now only where the outside source was opened in full (others tagged Reported), page citations and wording corrected to match the slides, ledgers completed, and two calculators fixed"
            }
          ],
          "rebuild": {
            "brief": "Lesson 5 of the State of Digital 2026 module, from deck pages 42-70, the most opinion-heavy part of the deck. Label every statement as Framework (workflow versus decisioning, the stack, squash versus racquetball, the five attributes), Deck, Checked, Unconfirmed, Mine, Illustrative or Background. Cover efficiency versus effectiveness and the illustrative 10% versus 10x (pp. 43-45), workflow versus decisioning (pp. 46-51), agency and retail media disputes and supply-side decisioning (pp. 52-54), the decisioning stack and measurement tooling (pp. 55-64), ad tech and martech convergence (p. 65), squash versus racquetball (p. 66), consolidation and the five attributes with the six-deal matrix (pp. 67-70). Check disputes, supply-side developments, MMM and incrementality tooling, and the consolidation thesis against 2025-2026 deal activity. Call out that the stack's stated purpose includes showing where M&A activity may emerge, that LUMA advised Affle on Perion, that Aperiam is a venture investor, and that the deck is an M&A adviser's point of view.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 42-70",
              "Adweek (leaked Publicis memo), ExchangeWire digest of 19 Mar 2026, Digiday on the Publicis and The Trade Desk settlement, eMarketer on Walmart's DSP partnerships",
              "Index Exchange on agentic sell-side decisioning (12 Feb 2026), PPC Land on Magnite and Cognitiv, Prebid on seller agents (AdCP), IAB Tech Lab Agentic RTB Framework (Nov 2025)",
              "PPC Land on Google Meridian; Silverback Strategies on Meridian and Robyn; AdExchanger on Aperiam",
              "Deal coverage: Publicis and LiveRamp (about $2.2bn), Nielsen and DoubleVerify ($2.15bn, Aug 2026), Affle and Perion (about $420m, 1 Nov 2026), plus Fox and Roku, Pinterest and tvScientific, Walmart and Vibe from earlier lessons",
              "LUMA's Q1 and Q2 2026 market reports and Digiday's Q1 2026 coverage of ad tech and martech deal counts (search summaries; definitions differ)"
            ]
          },
          "standard": "v1"
        }
      ]
    }
  ]
});
