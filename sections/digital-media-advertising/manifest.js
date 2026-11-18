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
          "blurb": "The deck's five phases of ad tech, its open-web versus walled-garden deal prices and its K-shaped stock divergence, with each headline claim checked or flagged.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-1-how-ad-tech-got-here.html",
          "anchors": [
            {
              "id": "sod1-1",
              "title": "Four shifts at once",
              "anchor": "sec1"
            },
            {
              "id": "sod1-2",
              "title": "Five phases of ad tech",
              "anchor": "sec2"
            },
            {
              "id": "sod1-3",
              "title": "How far AI reaches",
              "anchor": "sec3"
            },
            {
              "id": "sod1-4",
              "title": "A tale of two deals",
              "anchor": "sec4"
            },
            {
              "id": "sod1-5",
              "title": "The Trade Desk and the K shape",
              "anchor": "sec5"
            },
            {
              "id": "sod1-6",
              "title": "What was confirmed and what was not",
              "anchor": "sec6"
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
            }
          ],
          "rebuild": {
            "brief": "Lesson 1 of the State of Digital 2026 module, from deck pages 2-7. Cover the four shifts (p. 2), the five phases and the market-size curve (p. 3), the AI-impact layers (p. 4), the Stagwell/Freestar versus Walmart/Vibe deal slide (p. 5), the Trade Desk 91% fall (p. 6) and the walled-garden versus open-web stock divergence with its FactSet/LUMA-index footnote (p. 7). Widgets: shifts explorer, phase slider over a schematic curve, AI-layer stack, deal-multiple calculators, Trade Desk timeline, K-shape construction toggle, claims ledger with filters. Label every claim Deck, Checked, Unconfirmed, Mine or Illustrative; do not copy the sales tone.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 2-7",
              "Stagwell Inc., Form 10-Q for the quarter ended 30 Sep 2026, Note 1 (Freestar: $50.0m, $30.0m stock and $20.0m cash, up to $60.0m contingent, closed 23 Oct 2026)",
              "Walmart's 23 Jun 2026 announcement of the Vibe.co deal and press reports of the $1.4bn price (WSJ via The Next Web); multiples.vc estimate of Vibe revenue",
              "Trefis, What Is Driving The Move In Trade Desk Stock (4 Nov 2026); Investing.com and Macrotrends for the Dec 2024 record high; trade and finance coverage of the Feb, May, Jun and Aug 2026 events",
              "LUMA's State of Digital 2026 page (lumapartners.com/presentations/state-of-digital-2026); public eMarketer notes (US digital ad spend $309.3bn in 2024); the 2030 $493bn figure and the K-shape index could not be confirmed"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-2",
          "title": "2. Consumers Move to AI: Attention, Money and Intent",
          "pip": "#c0642b",
          "blurb": "How fast consumers are moving to AI, how the assistants might earn money, and why the deck calls AI conversations intent data, with each claim checked or flagged.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-2-consumers-move-to-ai.html",
          "anchors": [
            {
              "id": "sod2-1",
              "title": "How fast consumers moved",
              "anchor": "sec1"
            },
            {
              "id": "sod2-2",
              "title": "Time spent",
              "anchor": "sec2"
            },
            {
              "id": "sod2-3",
              "title": "Who pays: subscriptions or ads",
              "anchor": "sec3"
            },
            {
              "id": "sod2-4",
              "title": "All roads lead to advertising?",
              "anchor": "sec4"
            },
            {
              "id": "sod2-5",
              "title": "Proxies and intent",
              "anchor": "sec5"
            },
            {
              "id": "sod2-6",
              "title": "Search versus AI answers",
              "anchor": "sec6"
            },
            {
              "id": "sod2-7",
              "title": "What was confirmed and what was not",
              "anchor": "sec7"
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
            }
          ],
          "rebuild": {
            "brief": "Lesson 2 of the State of Digital 2026 module, from deck pages 8-16. Cover the two paradigm shifts (pp. 8-9), consumer AI adoption (p. 10), time spent (p. 11), subscription versus advertising (p. 12), all roads lead to advertising (p. 13), the proxy ladder to intent (p. 14), and AI answers as richer intent than search (pp. 15-16). Widgets: source-lens bar chart, Muse claim explorer, hours-per-user calculator, per-assistant ad status, ad revenue sketch, pattern versus exceptions, proxy ladder, conversation signals model, claims ledger. Tag every claim Deck, Checked, Unconfirmed, Mine, Illustrative or Background; call out that the deck is an M&A adviser's point of view; disclose that Claude is made by Anthropic.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 8-16",
              "Sensor Tower, State of AI 2026 press release, 16 Jun 2026 (ChatGPT 1bn monthly users May 2026; 17.2bn to projected 36bn hours)",
              "Mixed (mixed-news.com), Meta's Muse tops Apple's US free iPhone chart, Sep 2026; other reports of the same",
              "OpenAI posts on ads in ChatGPT (16 Jan 2026 and later updates); Anthropic, Claude is a space to think (4 Feb 2026); eMarketer on Perplexity; Android Central on Google and Gemini ads",
              "Similarweb and Semrush coverage on prompt versus search length (the 7x claim could not be traced to one study)",
              "Brin and Page, 1998, appendix on advertising and search (background)"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-3",
          "title": "3. The AI Purchase Funnel",
          "pip": "#c0642b",
          "blurb": "How an AI assistant could squeeze the purchase funnel, the agentic commerce debate, retail media money, the deck's four implications and the GEO deal flow, with claims checked or flagged.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "file": "sections/digital-media-advertising/lessons/sod-3-the-ai-purchase-funnel.html",
          "anchors": [
            {
              "id": "sod3-1",
              "title": "The funnel squeezed into one place",
              "anchor": "sec1"
            },
            {
              "id": "sod3-2",
              "title": "Agentic commerce: mirage or reality",
              "anchor": "sec2"
            },
            {
              "id": "sod3-3",
              "title": "Commerce media, and AI as channel and layer",
              "anchor": "sec3"
            },
            {
              "id": "sod3-4",
              "title": "Four implications",
              "anchor": "sec4"
            },
            {
              "id": "sod3-5",
              "title": "Influence the AI: the money behind GEO and AEO",
              "anchor": "sec5"
            },
            {
              "id": "sod3-6",
              "title": "Who is advertising to whom",
              "anchor": "sec6"
            },
            {
              "id": "sod3-7",
              "title": "What was confirmed and what was not",
              "anchor": "sec7"
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
            }
          ],
          "rebuild": {
            "brief": "Lesson 3 of the State of Digital 2026 module, from deck pages 17-28 and 41. Cover the traditional versus AI-compressed funnel (pp. 17-19), the mirage-or-reality debate between Seufert and Finkelstein (p. 20), commerce media and the $75bn Amazon and Walmart figure plus aggregation (p. 21), AI as channel and layer (p. 22), the four implications (pp. 23-25, 28, 41), the GEO and AEO deal and funding list (p. 27) and the human and bot identity question (p. 26). Widgets: journey comparison, party explorer, retail-basis bars, aggregation reach model, channel and layer grid, implication tabs, deal explorer with log-scale bars, interaction matrix, claims ledger. Tag every claim Deck, Checked, Unconfirmed, Mine, Illustrative or Background; call out that the deck is an M&A adviser's point of view and that LUMA advised Senso on the Zeta deal.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 17-28 and 41",
              "Eric Seufert, Agentic commerce is a mirage, Mobile Dev Memo (mdm.co), 3 Sep 2025 (opened)",
              "TechCrunch, Shopify is preparing for AI shopping agents to change everything, exec says, 16 Mar 2026; Retail Brew, 16 Jan 2026 (Finkelstein)",
              "Deal announcements and coverage: Zeta/Senso (5 Oct 2026, LUMA advised Senso), Adobe/Semrush ($1.9bn, 19 Nov 2025), Sitecore/Scrunch (3 Jun 2026, ~$225m per Bloomberg), Profound ($180m Series D, 15 Sep 2026), Bluefish ($43m Series B, 14 Apr 2026), Evertune ($15m Series A, Aug 2025)",
              "Amazon Q4 2025 results and PPC Land ($68.6bn 2025 advertising); Walmart FY26 advertising ($6.4bn); eMarketer US retail media forecasts (search summaries only)",
              "Reports on OpenAI's Instant Checkout launch (Sep 2025) and discontinuation (4 Mar 2026); Imperva Bad Bot Report 2026; Sensor Tower State of AI 2026 (Rufus conversion)"
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
            }
          ],
          "rebuild": {
            "brief": "Lesson 5 of the State of Digital 2026 module, from deck pages 42-70, the most opinion-heavy part of the deck. Label every statement as Framework (workflow versus decisioning, the stack, squash versus racquetball, the five attributes), Deck, Checked, Unconfirmed, Mine, Illustrative or Background. Cover efficiency versus effectiveness and the illustrative 10% versus 10x (pp. 43-45), workflow versus decisioning (pp. 46-51), agency and retail media disputes and supply-side decisioning (pp. 52-54), the decisioning stack and measurement tooling (pp. 55-64), ad tech and martech convergence (p. 65), squash versus racquetball (p. 66), consolidation and the five attributes with the six-deal matrix (pp. 67-70). Check disputes, supply-side developments, MMM and incrementality tooling, and the consolidation thesis against 2025-2026 deal activity. Call out that the stack was built to show where M&A may emerge, that LUMA advised Affle on Perion, that Aperiam is a venture investor, and that the deck is an M&A adviser's point of view.",
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
