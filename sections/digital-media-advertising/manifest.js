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
          "blurb": "How an AI assistant could compress discovery, research and purchase into one place, and what that means for brands and ad tech.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "plan": {
            "goals": [
              "Explain the compressed funnel and agentic commerce, including the debate over whether it is real",
              "Distinguish commerce media as a channel from commerce media as a layer",
              "State the deck's four implications and the human-versus-bot identity question, and test each"
            ],
            "concepts": [
              "Traditional versus AI-compressed purchase journey",
              "Agentic commerce: mirage or reality (the deck cites both views)",
              "Commerce media incentives and retail media spend",
              "Four implications: compress, influence the AI (GEO and AEO), ads move closer to purchase, ad tech and martech converge",
              "Who is advertising to whom: human and bot interactions"
            ],
            "takeaways": [
              "A shorter funnel moves influence upstream, into how a brand appears in AI answers",
              "Agentic commerce is early and contested",
              "The deck's implications are forecasts"
            ],
            "connections": [
              "Follows lesson 2's intent argument",
              "Page 41 (ad tech and martech convergence) is revisited in lesson 5"
            ],
            "build": "A funnel-compression diagram with a toggle for traditional versus AI journeys, a four-implications explorer, and a who-is-talking-to-whom matrix.",
            "notes": [
              "Source: LUMA Partners, State of Digital 2026, pages 17-28 and 41 of the attached trimmed PDF (printed page = PDF page). Every citation of the deck uses [[pp. N-M]] links. Keep the Deck / Checked / Unconfirmed / Mine labelling used in lesson 1, and research outside sources for any checkable claim at build time."
            ]
          },
          "status": "stub",
          "file": "shared/outline.html?id=sod-3",
          "anchors": [],
          "dates": {
            "planned": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            }
          ],
          "rebuild": {
            "brief": "Build from the plan: visual and interactive, introductory, for a curious general reader. Source pages: pages 17-28 and 41 of the deck. Paraphrase the deck, separate its claims from what can be checked, and flag where it is the point of view of a firm that advises on ad tech M&A. Build in order, after the previous lesson.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 17-28 and 41",
              "Outside sources checked at build time"
            ]
          },
          "overlaps": [],
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-4",
          "title": "4. Where Attention Is Going",
          "pip": "#c0642b",
          "blurb": "Streaming, creators, mobile apps, in-real-life media and the open web: where the deck says audiences and budgets are heading.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "plan": {
            "goals": [
              "Describe how streaming and digital video platforms are converging and what role creators play",
              "Weigh the deck's case for mobile apps and in-real-life media as growth channels",
              "Say what the deck leaves uncertain about the open web"
            ],
            "concepts": [
              "CTV as a performance channel and streaming overtaking linear",
              "Convergence of streaming and video platforms",
              "Creators as the backbone of platforms",
              "Mobile apps and their exposure to agentic commerce",
              "In-real-life media (out of home)",
              "The open web's uncertain role"
            ],
            "takeaways": [
              "Attention is spreading, and the deck names winners with some evidence and some advocacy",
              "Creators change who the walled gardens are for",
              "The open web's role is the deck's open question"
            ],
            "connections": [
              "Builds on the K-shape and deal slides in lesson 1",
              "Links to hedged gardens named in lesson 1's phase 4"
            ],
            "build": "A convergence map of streaming and video platforms, a creator-spend bar sketch, and a channel scorecard with the deck's claims and checks.",
            "notes": [
              "Source: LUMA Partners, State of Digital 2026, pages 29-40 of the attached trimmed PDF (printed page = PDF page). Every citation of the deck uses [[pp. N-M]] links. Keep the Deck / Checked / Unconfirmed / Mine labelling used in lesson 1, and research outside sources for any checkable claim at build time."
            ]
          },
          "status": "stub",
          "file": "shared/outline.html?id=sod-4",
          "anchors": [],
          "dates": {
            "planned": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            }
          ],
          "rebuild": {
            "brief": "Build from the plan: visual and interactive, introductory, for a curious general reader. Source pages: pages 29-40 of the deck. Paraphrase the deck, separate its claims from what can be checked, and flag where it is the point of view of a firm that advises on ad tech M&A. Build in order, after the previous lesson.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 29-40",
              "Outside sources checked at build time"
            ]
          },
          "overlaps": [],
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "sod-5",
          "title": "5. Decisioning: Where Value Moves",
          "pip": "#c0642b",
          "blurb": "Efficiency versus effectiveness, workflow versus decisioning, the decisioning stack, and the deck's case for consolidation.",
          "tags": [
            "advertising",
            "ad tech",
            "luma"
          ],
          "plan": {
            "goals": [
              "Contrast efficiency with effectiveness and workflow with decisioning",
              "Walk the decisioning stack: channel, measurement and allocation, input decisioning (creative and signal), supply-side decisioning",
              "Assess the consolidation thesis and its five attributes of a winner (scale, access, signal, intelligence, trust) as a point of view"
            ],
            "concepts": [
              "SPO versus outcomes",
              "Workflow moat erosion when agents own setup",
              "Channel decisioning and walled-garden strength",
              "Measurement and allocation, MMM and incrementality",
              "Input decisioning: creative and signal",
              "Supply-side decisioning",
              "Five attributes of a winner"
            ],
            "takeaways": [
              "Value shifts from running workflows to making decisions, according to the deck",
              "The consolidation thesis serves a firm that advises on deals, so separate it from the evidence",
              "The five attributes are a framework, not a finding"
            ],
            "connections": [
              "Completes the arc from lesson 1's phase 5 forecast",
              "Revisits convergence of ad tech and martech from lesson 3"
            ],
            "build": "A decisioning-stack diagram, a squash-versus-racquetball skill-advantage simulation, and a winner-attributes scorecard for example companies.",
            "notes": [
              "Source: LUMA Partners, State of Digital 2026, pages 42-70 of the attached trimmed PDF (printed page = PDF page). Every citation of the deck uses [[pp. N-M]] links. Keep the Deck / Checked / Unconfirmed / Mine labelling used in lesson 1, and research outside sources for any checkable claim at build time."
            ]
          },
          "status": "stub",
          "file": "shared/outline.html?id=sod-5",
          "anchors": [],
          "dates": {
            "planned": "2026-11-18"
          },
          "history": [
            {
              "date": "2026-11-18",
              "note": "Planned (stub)"
            }
          ],
          "rebuild": {
            "brief": "Build from the plan: visual and interactive, introductory, for a curious general reader. Source pages: pages 42-70 of the deck. Paraphrase the deck, separate its claims from what can be checked, and flag where it is the point of view of a firm that advises on ad tech M&A. Build in order, after the previous lesson.",
            "basis": [
              "LUMA Partners, State of Digital 2026 (attached reading), pages 42-70",
              "Outside sources checked at build time"
            ]
          },
          "overlaps": [],
          "standard": "v1"
        }
      ]
    }
  ]
});
