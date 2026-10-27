/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Declares what this section may contain so new content can be reasoned against it.
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-10-23",
  "updated": "2026-10-23",
  "id": "working-learning-with-ai",
  "order": 4,
  "title": "Working & Learning with AI",
  "icon": "🧠",
  "summary": "The human side: how AI changes the way we work, what it does to our skills, and how to use it so you get better, not just faster.",
  "scope": {
    "purpose": "Evidence and practice on how individuals and teams work, learn and develop expertise alongside AI.",
    "includes": [
      "Personal and small-team AI workflows and habits",
      "Research on AI's effects on productivity, skill and learning",
      "Cognitive offloading, calibration, deskilling and upskilling",
      "Training, onboarding and team policy for AI adoption",
      "Structured modules built around a single paper or report"
    ],
    "excludes": [
      "How to architect agent systems or pick models (→ Building with AI)",
      "Vendor comparisons / product news without a human-performance angle"
    ],
    "admission": [
      "Is the main question about the person using AI rather than the system being built?",
      "Is it grounded in evidence (studies, data) or tested practice?"
    ],
    "audience": "Developers and leads who use AI daily and care about long-term skill.",
    "depth": "Evidence-graded: every claim tagged by study design; module format for paper deep-dives."
  },
  "related": [
    "building-with-ai"
  ],
  "children": [
    {
      "type": "lesson",
      "id": "devflows",
      "title": "Individual AI Workflows",
      "file": "sections/working-learning-with-ai/lessons/multi-agent-dev-workflows.html",
      "pip": "#437a58",
      "blurb": "Getting faster as one person without losing quality or a heavy process.",
      "anchors": [
        {
          "id": "df-bottleneck",
          "title": "Your real bottleneck",
          "anchor": "sec1"
        },
        {
          "id": "df-ladder",
          "title": "The maturity ladder",
          "anchor": "sec2"
        },
        {
          "id": "df-tech",
          "title": "Techniques by payoff",
          "anchor": "sec3"
        },
        {
          "id": "df-day",
          "title": "Day-in-the-life",
          "anchor": "sec4"
        },
        {
          "id": "df-plan",
          "title": "Plan-then-execute",
          "anchor": "sec5"
        },
        {
          "id": "df-quality",
          "title": "Keeping quality high",
          "anchor": "sec6"
        },
        {
          "id": "df-fail",
          "title": "Anti-patterns",
          "anchor": "sec7"
        },
        {
          "id": "df-start",
          "title": "Start next week",
          "anchor": "sec8"
        },
        {
          "id": "df-sources",
          "title": "Sources",
          "anchor": "sec9"
        }
      ],
      "dates": {
        "created": "2026-07-22",
        "updated": "2026-07-22",
        "verified": "2026-07-22"
      },
      "history": [
        {
          "date": "2026-07-22",
          "note": "Created, researched"
        },
        {
          "date": "2026-10-23",
          "note": "Restyled: SNES pastel theme (visual only)"
        },
        {
          "date": "2026-10-23",
          "note": "Moved to Working & Learning with AI"
        }
      ],
      "rebuild": {
        "brief": "How individual developers use multi-agent / AI workflows day to day.",
        "basis": [
          "Practitioner write-ups and vendor docs (as of creation)"
        ]
      }
    },
    {
      "type": "group",
      "kind": "module",
      "id": "aidiff",
      "title": "Module: Why AI Helps Some People and Hurts Others",
      "home": "sections/working-learning-with-ai/lessons/aidiff/aidiff-overview.html",
      "dates": {
        "created": "2026-10-23",
        "updated": "2026-10-23",
        "verified": "2026-10-23"
      },
      "history": [
        {
          "date": "2026-10-23",
          "note": "Created as 6-page module; all 21 references checked"
        }
      ],
      "rebuild": {
        "brief": "Structured learning module around Lovett (2026), with reference check and visuals.",
        "basis": [
          "Lovett 2026, doi:10.1177/19394225261472792",
          "21 cited studies (see lesson 5)"
        ]
      },
      "summary": "A six-part module on Lovett (2026) — individual differences in generative-AI effectiveness — with every reference checked.",
      "source": {
        "cite": "Lovett, N. (2026). Individual differences in generative AI effectiveness: An empirical puzzle for HRD research. New Horizons in Adult Education & HRD.",
        "doi": "10.1177/19394225261472792"
      },
      "children": [
        {
          "type": "lesson",
          "id": "aidiff-overview",
          "title": "Module overview",
          "file": "sections/working-learning-with-ai/lessons/aidiff/aidiff-overview.html",
          "pip": "#7d68b3",
          "blurb": "Objectives, the big picture, the module map and key terms.",
          "anchors": [
            {
              "id": "aidiff-overview-1",
              "title": "The big picture",
              "anchor": "sec1"
            },
            {
              "id": "aidiff-overview-2",
              "title": "The module map",
              "anchor": "sec2"
            },
            {
              "id": "aidiff-overview-3",
              "title": "Key terms",
              "anchor": "sec3"
            },
            {
              "id": "aidiff-overview-4",
              "title": "About the source",
              "anchor": "sec4"
            }
          ],
          "dates": {
            "created": "2026-10-23",
            "updated": "2026-10-23",
            "verified": "2026-10-23"
          },
          "history": [
            {
              "date": "2026-10-23",
              "note": "Created"
            }
          ],
          "rebuild": {
            "brief": "Part of the Lovett (2026) module.",
            "basis": [
              "Lovett 2026 + cited studies"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "aidiff-1",
          "title": "The Puzzle: Same Tools, Different Results",
          "file": "sections/working-learning-with-ai/lessons/aidiff/aidiff-1-puzzle.html",
          "pip": "#7d68b3",
          "blurb": "Why average gains hide huge spread — compression, six explanations, and why it's an interaction.",
          "anchors": [
            {
              "id": "aidiff-1-1",
              "title": "The variance is real",
              "anchor": "sec1"
            },
            {
              "id": "aidiff-1-2",
              "title": "The compression effect",
              "anchor": "sec2"
            },
            {
              "id": "aidiff-1-3",
              "title": "Six candidate explanations",
              "anchor": "sec3"
            },
            {
              "id": "aidiff-1-4",
              "title": "Why it's an interaction",
              "anchor": "sec4"
            },
            {
              "id": "aidiff-1-5",
              "title": "The typology trap",
              "anchor": "sec5"
            }
          ],
          "dates": {
            "created": "2026-10-23",
            "updated": "2026-10-23",
            "verified": "2026-10-23"
          },
          "history": [
            {
              "date": "2026-10-23",
              "note": "Created"
            }
          ],
          "rebuild": {
            "brief": "Part of the Lovett (2026) module.",
            "basis": [
              "Lovett 2026 + cited studies"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "aidiff-2",
          "title": "The Jagged Frontier & Calibration",
          "file": "sections/working-learning-with-ai/lessons/aidiff/aidiff-2-frontier.html",
          "pip": "#7d68b3",
          "blurb": "Where AI helps vs. hurts, why expertise doesn't predict it, and the dilettante problem.",
          "anchors": [
            {
              "id": "aidiff-2-1",
              "title": "The frontier is jagged",
              "anchor": "sec1"
            },
            {
              "id": "aidiff-2-2",
              "title": "Expertise isn't a reliable predictor",
              "anchor": "sec2"
            },
            {
              "id": "aidiff-2-3",
              "title": "Calibration: confidence vs. reality",
              "anchor": "sec3"
            },
            {
              "id": "aidiff-2-4",
              "title": "The dilettante problem",
              "anchor": "sec4"
            }
          ],
          "dates": {
            "created": "2026-10-23",
            "updated": "2026-10-23",
            "verified": "2026-10-23"
          },
          "history": [
            {
              "date": "2026-10-23",
              "note": "Created"
            }
          ],
          "rebuild": {
            "brief": "Part of the Lovett (2026) module.",
            "basis": [
              "Lovett 2026 + cited studies"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "aidiff-3",
          "title": "The Loop: Use Reshapes the User",
          "file": "sections/working-learning-with-ai/lessons/aidiff/aidiff-3-loop.html",
          "pip": "#7d68b3",
          "blurb": "Offloading, vicious and virtuous loops, performance vs. learning, deskilling vs. upskilling inhibition.",
          "anchors": [
            {
              "id": "aidiff-3-1",
              "title": "What gets offloaded",
              "anchor": "sec1"
            },
            {
              "id": "aidiff-3-2",
              "title": "Vicious and virtuous loops",
              "anchor": "sec2"
            },
            {
              "id": "aidiff-3-3",
              "title": "Performance is not learning",
              "anchor": "sec3"
            },
            {
              "id": "aidiff-3-4",
              "title": "Novices vs. experts",
              "anchor": "sec4"
            },
            {
              "id": "aidiff-3-5",
              "title": "Two more signals",
              "anchor": "sec5"
            }
          ],
          "dates": {
            "created": "2026-10-23",
            "updated": "2026-10-23",
            "verified": "2026-10-23"
          },
          "history": [
            {
              "date": "2026-10-23",
              "note": "Created"
            }
          ],
          "rebuild": {
            "brief": "Part of the Lovett (2026) module.",
            "basis": [
              "Lovett 2026 + cited studies"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "aidiff-4",
          "title": "Designing for Capability",
          "file": "sections/working-learning-with-ai/lessons/aidiff/aidiff-4-design.html",
          "pip": "#7d68b3",
          "blurb": "Two horizons, attempt-first, matched scaffolding — the levers translated for developers.",
          "anchors": [
            {
              "id": "aidiff-4-1",
              "title": "Two horizons of effective use",
              "anchor": "sec1"
            },
            {
              "id": "aidiff-4-2",
              "title": "Preserved generation",
              "anchor": "sec2"
            },
            {
              "id": "aidiff-4-3",
              "title": "Match the scaffolding",
              "anchor": "sec3"
            },
            {
              "id": "aidiff-4-4",
              "title": "The three levers",
              "anchor": "sec4"
            },
            {
              "id": "aidiff-4-5",
              "title": "For teams and leads",
              "anchor": "sec5"
            }
          ],
          "dates": {
            "created": "2026-10-23",
            "updated": "2026-10-23",
            "verified": "2026-10-23"
          },
          "history": [
            {
              "date": "2026-10-23",
              "note": "Created"
            }
          ],
          "rebuild": {
            "brief": "Part of the Lovett (2026) module.",
            "basis": [
              "Lovett 2026 + cited studies"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "aidiff-5",
          "title": "Checking the Evidence",
          "file": "sections/working-learning-with-ai/lessons/aidiff/aidiff-5-evidence.html",
          "pip": "#7d68b3",
          "blurb": "Every reference audited: design strength, verdicts, corrections, and the research agenda.",
          "anchors": [
            {
              "id": "aidiff-5-1",
              "title": "Not all evidence is equal",
              "anchor": "sec1"
            },
            {
              "id": "aidiff-5-2",
              "title": "The reference audit",
              "anchor": "sec2"
            },
            {
              "id": "aidiff-5-3",
              "title": "Corrections to carry",
              "anchor": "sec3"
            },
            {
              "id": "aidiff-5-4",
              "title": "What the field needs next",
              "anchor": "sec4"
            }
          ],
          "dates": {
            "created": "2026-10-23",
            "updated": "2026-10-23",
            "verified": "2026-10-23"
          },
          "history": [
            {
              "date": "2026-10-23",
              "note": "Created"
            }
          ],
          "rebuild": {
            "brief": "Part of the Lovett (2026) module.",
            "basis": [
              "Lovett 2026 + cited studies"
            ]
          },
          "standard": "v1"
        }
      ],
      "standard": "v1"
    }
  ]
});
