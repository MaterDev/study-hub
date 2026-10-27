/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-10-27",
  "updated": "2026-10-27",
  "id": "mind-philosophy",
  "order": 7,
  "title": "Mind & Philosophy",
  "icon": "🧠",
  "summary": "Ideas about minds, selves and choice, explained on their own terms: thought experiments, the arguments around them and the sources they come from.",
  "scope": {
    "purpose": "Study of philosophy of mind and cognition through primary texts and thought experiments.",
    "includes": [
      "Self, consciousness and identity",
      "Free will and levels of explanation",
      "Thought experiments and the commentary around them"
    ],
    "excludes": [
      "Practical AI workflows (→ Working & Learning with AI)",
      "Neuroscience methods with no conceptual question attached"
    ],
    "admission": [
      "Is it mainly about what a mind, self or choice is?",
      "Can it be taught from a primary text plus named commentators?"
    ],
    "audience": "Curious readers who like ideas for their own sake.",
    "depth": "Source-backed: each author's claims separated from my own synthesis, with interactive models of the arguments."
  },
  "related": [],
  "children": [
    {
      "type": "group",
      "kind": "module",
      "label": "MODULE",
      "id": "careenium",
      "standard": "v1",
      "title": "Module: Who Shoves Whom Around Inside a Mind?",
      "home": "shared/outline.html?id=careenium",
      "pip": "#7a5ea8",
      "summary": "Hofstadter's 1982 dialogue about a pinball-box 'careenium', taught on its own: levels of description, symbols and perception, free will as constraint, and the self as a loop.",
      "throughline": "One question runs through all four lessons: when a system is built of simple parts, in what sense can a high-level pattern such as 'I decided' push the parts around?",
      "paths": [
        "\"New to the question\" → 1 → 2 → 3 → 4",
        "\"Interested in free will\" → 1 → 3",
        "\"Interested in the self\" → 2 → 4"
      ],
      "readings": [
        {
          "id": "careenium-paper",
          "kind": "pdf",
          "tab": "The paper",
          "title": "Hofstadter (1982): Who Shoves Whom Around Inside the Careenium?",
          "file": "sections/mind-philosophy/readings/careenium.pdf",
          "url": "https://jsomers.net/careenium.pdf",
          "credit": "Douglas R. Hofstadter, Synthese 53 (1982), pp. 189-218. Copy obtained from jsomers.net; copyright remains with the author and publisher."
        }
      ],
      "source": {
        "title": "Who Shoves Whom Around Inside the Careenium? or What is the Meaning of the Word 'I'?",
        "author": "Douglas R. Hofstadter",
        "year": 1982,
        "url": "https://jsomers.net/careenium.pdf"
      },
      "dates": {
        "created": "2026-10-27",
        "updated": "2026-10-27",
        "verified": "2026-10-27"
      },
      "history": [
        {
          "date": "2026-10-27",
          "note": "Module planned (stubs only)"
        }
      ],
      "rebuild": {
        "brief": "Self-contained introduction to the paper's ideas for a curious general reader. Not tied to any other hub content. Visual and interactive; outside commentary (Dennett, Sperry, Schrodinger, Hofstadter's later books) clearly labelled.",
        "basis": [
          "Hofstadter 1982",
          "Outside sources checked at build time"
        ]
      },
      "children": [
        {
          "type": "lesson",
          "id": "ce-1",
          "title": "1. Levels: the pinball machine and its pucks",
          "pip": "#7a5ea8",
          "blurb": "A box of marbles and pucks that looks chaotic at one film speed and orderly at another, and why \"who shoves whom?\" is a question about levels.",
          "tags": [
            "mind",
            "philosophy",
            "hofstadter"
          ],
          "file": "sections/mind-philosophy/lessons/careenium-1-levels.html",
          "anchors": [
            {
              "id": "ce1-1",
              "title": "The question: who shoves whom?",
              "anchor": "sec1"
            },
            {
              "id": "ce1-2",
              "title": "A box of marbles and heavy pucks",
              "anchor": "sec2"
            },
            {
              "id": "ce1-3",
              "title": "Two film speeds, two stories",
              "anchor": "sec3"
            },
            {
              "id": "ce1-4",
              "title": "Pucks built from marbles: symmballs",
              "anchor": "sec4"
            },
            {
              "id": "ce1-5",
              "title": "One thing, two vocabularies",
              "anchor": "sec5"
            },
            {
              "id": "ce1-6",
              "title": "Which level answers the question?",
              "anchor": "sec6"
            },
            {
              "id": "ce1-src",
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
              "note": "Built: a marble-and-puck simulation with a film-speed control, an observer comparison, a freezing sticky-marble simulation with a coarse view, a levels-of-description explorer, and a six-question practice."
            }
          ],
          "rebuild": {
            "brief": "Teach the opening of Hofstadter's 1982 dialogue on its own merits: the careenium as pucks and marbles, the two film speeds and Brownian motion, symms and symmballs as composite structures, frozen versus unfrozen (when a high-level description exists), and who-shoves-whom as a question about levels. Widgets: a collision simulation with a film-speed slider and puck trails; an observer picker; a sticky-marble temperature simulation that counts clumps and a coarse view; a pairs explorer for two vocabularies; a which-level-answers practice. Non-game tone, sources labelled, illustrative numbers flagged.",
            "basis": [
              "Hofstadter, D. R. (1982). Who shoves whom around inside the careenium? or What is the meaning of the word \"I\"? Synthese 53, 189-218 (pp. 189-197, 206-208)",
              "Stanford Encyclopedia of Philosophy, Emergent Properties (dependence and autonomy)",
              "Brownian motion (Robert Brown 1827, Einstein 1905)",
              "Background, not fetched: Dennett, Real Patterns (1991); Hofstadter, Godel, Escher, Bach (1979) on levels and the ant colony"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "ce-2",
          "title": "2. Symbols, perception and the inner eye",
          "pip": "#7a5ea8",
          "blurb": "How a stimulus becomes an internal symbol pattern, why speech skips the perception layer (\"I hear a train\"), and how an inner eye lets one pattern watch another.",
          "tags": [
            "mind",
            "philosophy",
            "hofstadter"
          ],
          "file": "sections/mind-philosophy/lessons/careenium-2-symbols-perception-inner-eye.html",
          "anchors": [
            {
              "id": "ce2-1",
              "title": "A box that registers the world",
              "anchor": "sec1"
            },
            {
              "id": "ce2-2",
              "title": "Peeling the layers off \"I hear a train\"",
              "anchor": "sec2"
            },
            {
              "id": "ce2-3",
              "title": "Transducers, symbols and a mouth",
              "anchor": "sec3"
            },
            {
              "id": "ce2-4",
              "title": "Having a state versus knowing you have it",
              "anchor": "sec4"
            },
            {
              "id": "ce2-5",
              "title": "The inner eye and mindquakes",
              "anchor": "sec5"
            },
            {
              "id": "ce2-6",
              "title": "Reflex versus reflection",
              "anchor": "sec6"
            },
            {
              "id": "ce2-src",
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
              "note": "Built: a layer-peeling widget, a light-to-mouth pipeline, two use/mention and having/aware sorting quizzes, a stepped inner-eye diagram with selectable depth, and a reflex versus reflection comparison."
            }
          ],
          "rebuild": {
            "brief": "Teach the middle of Hofstadter's 1982 dialogue on its own merits: transducers turning outside events into inner patterns, representation, why ordinary speech omits the perception layer, use versus mention and having a state versus being aware of it, the inner eye and mindquakes, and reflex versus reflection. Widgets: peel-the-layers slider across three senses; a light, transducer, pattern and mouth pipeline with outward and inward voices; two quizzes; a stepped inner-eye loop with depth 0 to 2; a hunger scenario comparing a reflex animal with a reflective one. Non-game tone, sources labelled, invented weights flagged.",
            "basis": [
              "Hofstadter, D. R. (1982). Who shoves whom around inside the careenium? or What is the meaning of the word \"I\"? Synthese 53, 189-218 (pp. 193-203)",
              "Stanford Encyclopedia of Philosophy, Mental Representation",
              "Use-mention distinction (standard philosophy of language)",
              "Dennett, intentional stance; Hofstadter and Dennett, The Mind's I (1981)"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "ce-3",
          "title": "3. Free will as constraint",
          "pip": "#7a5ea8",
          "blurb": "Why \"I can do whatever I want\" is itself a constraint, and when a high-level decision can steer the parts below it.",
          "tags": [
            "mind",
            "philosophy",
            "hofstadter"
          ],
          "file": "sections/mind-philosophy/lessons/careenium-3-free-will-as-constraint.html",
          "anchors": [
            {
              "id": "ce3-1",
              "title": "The careenium and the claim",
              "anchor": "sec1"
            },
            {
              "id": "ce3-2",
              "title": "Why wanting is a limit",
              "anchor": "sec2"
            },
            {
              "id": "ce3-3",
              "title": "A general and unwilling troops",
              "anchor": "sec3"
            },
            {
              "id": "ce3-4",
              "title": "Snap decisions and phase transitions",
              "anchor": "sec4"
            },
            {
              "id": "ce3-5",
              "title": "The half-frozen state",
              "anchor": "sec5"
            },
            {
              "id": "ce3-6",
              "title": "Downward causation, without magic",
              "anchor": "sec6"
            },
            {
              "id": "ce3-7",
              "title": "Three positions on free will",
              "anchor": "sec7"
            },
            {
              "id": "ce3-src",
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
              "note": "Built lesson 3 of the Careenium module: free will as physical constraint, with a what-can-I-decide explorer, a general-and-troops model, a 20x20 Ising-style lattice with a temperature slider and a steering test, a half-frozen comparison, a downward-causation reading selector and a compatibilist/libertarian/hard-determinist card set."
            }
          ],
          "rebuild": {
            "brief": "Teach Hofstadter's 1982 careenium dialogue on free will on its own merits, for a curious general reader who may land cold: state the careenium view of free will in one sentence; show that doing whatever you want is limited by ability and then by wants; show a general (the soul) needing cooperation from unwilling troops (the parts); show with a lattice of agreeing/disagreeing cells that a weak top-level nudge steers only near the ordered/disordered transition (frozen: nothing moves; hot: noise; half-frozen: steerable); contrast the constraint and new-force readings of downward causation and Kim's exclusion objection; compare compatibilist, libertarian and hard-determinist positions, labelled as others' views. Paraphrase the paper, at most one short quote. Label illustrative models and numbers.",
            "basis": [
              "Hofstadter, D. R. (1982). Who Shoves Whom Around Inside the Careenium? or What is the Meaning of the Word 'I'? Synthese 53: 189-218 (esp. pp. 190-192, 203-211)",
              "Stanford Encyclopedia of Philosophy: Compatibilism",
              "Stanford Encyclopedia of Philosophy: Arguments for Incompatibilism",
              "Stanford Encyclopedia of Philosophy: Emergent Properties (downward causation, Kim's exclusion argument)",
              "Cited in the paper, not read: Sperry (1965), Mind, Brain, and Humanist Values; Dennett (1984) Elbow Room and (2003) Freedom Evolves"
            ]
          },
          "standard": "v1"
        },
        {
          "type": "lesson",
          "id": "ce-4",
          "title": "4. The self as a loop",
          "pip": "#7a5ea8",
          "blurb": "How an \"I\" can arise from a system that models itself, with no soul added on top, and the main objections.",
          "tags": [
            "mind",
            "philosophy",
            "hofstadter"
          ],
          "file": "sections/mind-philosophy/lessons/careenium-4-the-self-as-a-loop.html",
          "anchors": [
            {
              "id": "ce4-1",
              "title": "A self with nobody in it?",
              "anchor": "sec1"
            },
            {
              "id": "ce4-2",
              "title": "Flame and fire",
              "anchor": "sec2"
            },
            {
              "id": "ce4-3",
              "title": "The stance, turned inward",
              "anchor": "sec3"
            },
            {
              "id": "ce4-4",
              "title": "The loop that holds itself up",
              "anchor": "sec4"
            },
            {
              "id": "ce4-5",
              "title": "Building an I, layer by layer",
              "anchor": "sec5"
            },
            {
              "id": "ce4-6",
              "title": "Objections and replies",
              "anchor": "sec6"
            },
            {
              "id": "ce4-7",
              "title": "What the paper claims, and what it does not",
              "anchor": "sec7"
            },
            {
              "id": "ce4-src",
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
              "note": "Built lesson 4 of the Careenium module: the self as a loop, with a two-pictures-of-the-soul comparison, a fire demonstration, a three-stances explorer with an inward toggle, a self-model feedback-loop simulator, a layer-by-layer self-model builder with a styles-and-worlds panel, an objections-and-replies explorer and a claims ledger."
            }
          ],
          "rebuild": {
            "brief": "Teach the second half of Hofstadter's 1982 careenium dialogue on its own merits, for a curious general reader who may land cold: the soul as an outcome rather than an ingredient (flame and fire); Dennett's intentional stance and its inward version (auto-intentional stance); reification and the self-perpetuating loop (a toy dynamical model, labelled as my own); one mechanism with many I's (Schrodinger, as reported by the paper); and a fair weighing of objections (hard problem, who reads the self-model, zombies, continuity), with the paper's replies and other thinkers' positions clearly labelled. Paraphrase the paper, at most one short quote. Label illustrative numbers and the builder as an illustration, not a result.",
            "basis": [
              "Hofstadter, D. R. (1982). Who Shoves Whom Around Inside the Careenium? or What is the Meaning of the Word 'I'? Synthese 53: 189-218 (esp. pp. 202-203, 212-217)",
              "Stanford Encyclopedia of Philosophy: Consciousness (hard problem, zombies, eliminativism)",
              "Stanford Encyclopedia of Philosophy: Higher-Order Theories of Consciousness (regress and misrepresentation objections)",
              "Wikipedia: Intentional stance (three stances, criticisms)",
              "Wikipedia: I Am a Strange Loop (2007 book, Zizek's reported criticism)",
              "Cited in the paper, not read: Schrodinger (1967), Mind and Matter; Dennett on the intentional stance"
            ]
          },
          "standard": "v1"
        }
      ]
    }
  ]
});
