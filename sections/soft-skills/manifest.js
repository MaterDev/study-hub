/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Declares what this section may contain so new content can be reasoned against it.
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-10-26",
  "updated": "2026-10-26",
  "id": "soft-skills",
  "order": 6,
  "title": "Soft Skills & Collaboration",
  "icon": "🤝",
  "summary": "The human skills behind good technical work: earning trust, listening, framing problems, setting expectations and working well with clients and colleagues.",
  "scope": {
    "purpose": "Skills for working with people, applied to a developer's day-to-day: clients, stakeholders, teammates.",
    "includes": [
      "Building trust and long-term client relationships",
      "Listening, questioning and framing problems",
      "Communication, expectation-setting and feedback",
      "Collaboration, influence and handling conflict",
      "Book and framework studies on professional relationships"
    ],
    "excludes": [
      "Platform-specific technical knowledge (→ Platforms & Client Work)",
      "How AI changes skills and learning (→ Working & Learning with AI)",
      "Management theory with no day-to-day application for a developer"
    ],
    "admission": [
      "Is it about how people work, communicate or build trust with each other?",
      "Would a developer use it in a client call, a review or a planning conversation?"
    ],
    "audience": "Developers and other technical people who work with clients and teams.",
    "depth": "Practical and source-backed: summarised or paraphrased frameworks with the author's claims separated from my own synthesis, plus interactive practice."
  },
  "related": [
    "platforms",
    "working-learning-with-ai"
  ],
  "children": [
    {
      "type": "group",
      "id": "ss-trust",
      "title": "Trust & client relationships",
      "summary": "Earning trust and building long-term relationships with clients.",
      "standard": "v1",
      "children": [
        {
          "type": "lesson",
          "id": "trusted-advisor",
          "title": "The Trusted Advisor: Earning Client Trust",
          "file": "sections/soft-skills/lessons/the-trusted-advisor.html",
          "pip": "#437a58",
          "blurb": "Maister, Green and Galford's model for building client trust: the trust equation, five stages, and what it means on a web project.",
          "anchors": [
            {
              "id": "ta-premise",
              "title": "The premise: from service provider to first call",
              "anchor": "sec1"
            },
            {
              "id": "ta-equation",
              "title": "The trust equation",
              "anchor": "sec2"
            },
            {
              "id": "ta-trust",
              "title": "Five things that are true about trust",
              "anchor": "sec3"
            },
            {
              "id": "ta-stages",
              "title": "The five stages",
              "anchor": "sec4"
            },
            {
              "id": "ta-practice",
              "title": "Practice: what would you say?",
              "anchor": "sec5"
            },
            {
              "id": "ta-columbo",
              "title": "The Columbo approach",
              "anchor": "sec6"
            },
            {
              "id": "ta-quick",
              "title": "The quick-impact list",
              "anchor": "sec7"
            },
            {
              "id": "ta-project",
              "title": "On a client project",
              "anchor": "sec8"
            },
            {
              "id": "ta-critical",
              "title": "How to read this book critically",
              "anchor": "sec9"
            },
            {
              "id": "ta-sources",
              "title": "Takeaways & sources",
              "anchor": "sec-src"
            }
          ],
          "dates": {
            "created": "2026-10-26",
            "updated": "2026-10-26",
            "verified": "2026-10-26"
          },
          "history": [
            {
              "date": "2026-10-26",
              "note": "Created from the Soundview summary, the Trusted Advisor Associates trust-equation page and other summaries"
            }
          ],
          "rebuild": {
            "brief": "A lesson on The Trusted Advisor (Maister, Green, Galford): premise and relationship levels, the Trust Equation, what trust is, the five stages (engage, listen, frame, envision, commit), the Columbo approach, the quick-impact list, a mapping onto a web project, and a critical reading. Paraphrased; practice scenarios and the project mapping are original.",
            "basis": [
              "Soundview Executive Book Summaries: The Trusted Advisor (March 2001), supplied by Key",
              "Trusted Advisor Associates: The Trust Equation page",
              "Commonwealth: Becoming the Trusted Advisor (relationship levels)",
              "The book itself, to verify details before quoting"
            ]
          },
          "standard": "v1"
        }
      ]
    }
  ]
});
