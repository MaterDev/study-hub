/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-10-27",
  "updated": "2026-11-19",
  "id": "mind-philosophy",
  "order": 5,
  "title": "Philosophy",
  "icon": "🧠",
  "summary": "Philosophy, taught from primary texts on their own terms: minds, selves and choice, and how systems steer themselves, with the arguments around them and the sources they come from.",
  "scope": {
    "purpose": "Study of philosophy, including the philosophy of mind and cognition and systems thinking (control, information and feedback), through primary texts and thought experiments.",
    "includes": [
      "Self, consciousness and identity",
      "Free will and levels of explanation",
      "Thought experiments and the commentary around them",
      "Systems thinking: cybernetics, feedback, control and information, as ideas about how systems steer themselves"
    ],
    "excludes": [
      "Practical AI workflows (→ Artificial Intelligence)",
      "Neuroscience methods with no conceptual question attached"
    ],
    "admission": [
      "Is it mainly about what a mind, self or choice is?",
      "Or is it about how systems regulate, communicate or organise themselves, taught from a primary text?",
      "Can it be taught from a primary text, with later developments and outside commentary clearly labelled?"
    ],
    "audience": "Curious readers who like ideas for their own sake, and who want the ideas behind modern minds, control, information and AI.",
    "depth": "Source-backed: each author's claims separated from later science and from my own synthesis, with interactive models of the arguments."
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
          "pageMap": { "offset": -188 },
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
    },
    {
      "type": "group",
      "kind": "module",
      "label": "MODULE",
      "id": "cybernetics",
      "title": "Module: Wiener's Cybernetics",
      "home": "shared/outline.html?id=cybernetics",
      "pip": "#2f7f86",
      "summary": "Norbert Wiener's Cybernetics (2nd edition, 1961) broken into ten lessons that follow its chapters: feedback, information, time, computing machines, perception, language, learning and self-organisation.",
      "throughline": "One idea runs through the book: systems of every kind stay stable and purposeful by passing information about their own behaviour back into themselves.",
      "paths": [
        "\"Where do I start?\" → 1 → 4",
        "\"I want the information theory\" → 2 → 3",
        "\"I care about brains and minds\" → 4 → 5 → 6 → 10",
        "\"I care about society and AI\" → 8 → 9"
      ],
      "source": {
        "title": "Cybernetics, or Control and Communication in the Animal and the Machine",
        "author": "Norbert Wiener",
        "year": 1961,
        "url": "https://direct.mit.edu/books/oa-monograph/4581/Cybernetics-or-Control-and-Communication-in-the"
      },
      "readings": [
        {
          "id": "cybernetics-wiener",
          "kind": "pdf",
          "tab": "The book",
          "title": "Wiener: Cybernetics (MIT Press, 2nd ed. 1961, 2019 reissue)",
          "file": "sections/mind-philosophy/readings/cybernetics-wiener.pdf",
          "pageMap": { "offset": 50, "romanOffset": 2 },
          "url": "https://direct.mit.edu/books/oa-monograph/4581/Cybernetics-or-Control-and-Communication-in-the",
          "credit": "Norbert Wiener, Cybernetics (MIT Press). Open-access edition obtained from MIT Press Direct. Copyright remains with MIT Press; check the licence on the MIT Press page before redistributing. Printed page numbers are the PDF page minus 50."
        }
      ],
      "dates": {
        "created": "2026-11-05",
        "updated": "2026-11-05",
        "verified": "2026-11-05"
      },
      "history": [
        {
          "date": "2026-11-05",
          "note": "Module planned (stubs only)"
        },
        {
          "date": "2026-11-05",
          "note": "Plan merged to ten lessons: Introduction joined to lesson 1, time and statistics joined into lesson 2"
        }
      ],
      "rebuild": {
        "brief": "One lesson per chapter group of Wiener's Cybernetics, for a curious general reader. Paraphrase the book, flag superseded science, and keep outside commentary labelled.",
        "basis": [
          "Wiener, Cybernetics, 2nd ed.",
          "Outside sources checked at build time"
        ]
      },
      "children": [
        {
          "type": "group",
          "id": "cy-c1",
          "title": "A. The idea and the physics under it",
          "summary": "What the book is, where its idea came from, and the background of time, order and information.",
          "children": [
            {
              "type": "lesson",
              "id": "cy-1",
              "title": "1. The book and its central idea",
              "pip": "#2f7f86",
              "blurb": "What Wiener's Cybernetics claims, who said what about it, and his Introduction read as one argument map.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "file": "sections/mind-philosophy/lessons/cybernetics-1-the-book.html",
              "anchors": [
                {
                  "id": "cy1-1",
                  "title": "The idea in one sentence, and the word",
                  "anchor": "sec1"
                },
                {
                  "id": "cy1-2",
                  "title": "The book in time",
                  "anchor": "sec2"
                },
                {
                  "id": "cy1-3",
                  "title": "Three voices before page one",
                  "anchor": "sec3"
                },
                {
                  "id": "cy1-4",
                  "title": "The Introduction as an argument map",
                  "anchor": "sec4"
                },
                {
                  "id": "cy1-5",
                  "title": "Aiming at a moving target",
                  "anchor": "sec5"
                },
                {
                  "id": "cy1-6",
                  "title": "Machines through the ages, and what counts",
                  "anchor": "sec6"
                },
                {
                  "id": "cy1-7",
                  "title": "How to read the book, and the road ahead",
                  "anchor": "sec7"
                },
                {
                  "id": "cy1-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-11-05",
                "updated": "2026-11-05",
                "verified": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-11-05",
                  "note": "Built: the book's dates and layers on a timeline, Hill, Mitter and Wiener's 1961 Preface kept apart, the Introduction as a ten-node argument map, a moving-target prediction simulator, and a page guide with a ten-lesson road map."
                }
              ],
              "rebuild": {
                "brief": "Lesson 1 of the Wiener Cybernetics module, merging the old lessons 1 and 2. Cover the word and its origin (Introduction p. 18), a timeline of the 1948 original, 1961 supplement and 2019 reissue, the three front-matter voices kept separate (Hill, Mitter, Wiener's 1961 Preface), the whole Introduction (printed pp. 3-42) as a labelled argument map, a small predict-the-moving-target simulator, a what-counts-as-cybernetics sorter, the printed-to-PDF page offset (plus 50 in the main text) and a ten-lesson road map. Label Wiener, Foreword, My synthesis and Background throughout; quote at most one short phrase per source.",
                "basis": [
                  "sections/mind-philosophy/readings/cybernetics-wiener.pdf: Contents (printed vii-viii), Hill foreword ix-xx, Mitter foreword xxi-xxxiv, Preface to the Second Edition xxxv-xlvii, Introduction 3-42, Chapter I pp. 54-60",
                  "Wikipedia pages on the book, on Cybernetics and on Norbert Wiener (publication history, Ampere 1834, Wiener's life dates)",
                  "docs/LESSON-STANDARD.md and CLAUDE.md for the lesson structure"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "cy-2",
              "title": "2. Time, order and statistics",
              "pip": "#2f7f86",
              "blurb": "Wiener on reversible and one-way time, Gibbs's ensembles, the ergodic idea, shift invariance and Maxwell's demon, with simulations.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "file": "sections/mind-philosophy/lessons/cybernetics-2-time-order-statistics.html",
              "anchors": [
                {
                  "id": "cy2-1",
                  "title": "Two skies: astronomy and meteorology",
                  "anchor": "sec1"
                },
                {
                  "id": "cy2-2",
                  "title": "Which kind of time?",
                  "anchor": "sec2"
                },
                {
                  "id": "cy2-3",
                  "title": "A gas in a box: one path and a whole ensemble",
                  "anchor": "sec3"
                },
                {
                  "id": "cy2-4",
                  "title": "Gibbs, averages and the ergodic idea",
                  "anchor": "sec4"
                },
                {
                  "id": "cy2-5",
                  "title": "Groups and invariance: what a shift in time leaves alone",
                  "anchor": "sec5"
                },
                {
                  "id": "cy2-6",
                  "title": "Entropy, Maxwell's demon, and the road to information",
                  "anchor": "sec6"
                },
                {
                  "id": "cy2-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-11-05",
                "updated": "2026-11-05",
                "verified": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-11-05",
                  "note": "Built from Wiener's Chapters I and II (printed pp. 43-84): sorting exercise, gas-in-a-box single path versus ensemble, ergodic playground, shift and order demos, Maxwell's demon accounting."
                }
              ],
              "rebuild": {
                "brief": "Lesson 2 of the Wiener Cybernetics module. Contrast reversible Newtonian and one-way Bergsonian time, why an irreversible world needs statistical description, ensemble versus time average and the ergodic idea, groups and shift invariance, entropy and Maxwell's demon. Widgets: which-kind-of-time sorting, gas in a box (single path / ensemble, forward and backward, reverse velocities), ergodic path playground, shift-window and order-of-transformations demos, demon accounting. Label Wiener, later and own synthesis; flag dated physics.",
                "basis": [
                  "Wiener, Cybernetics (MIT Press 1948; 2nd ed. 1961), Chapters I and II, printed pp. 43-84 (PDF 93-134)",
                  "Stanford Encyclopedia of Philosophy: Philosophy of Statistical Mechanics (sections 4.3, 4.4, 6.1, 6.2)",
                  "Stanford Encyclopedia of Philosophy: Information Processing and Thermodynamic Entropy (Maxwell's demon sections)"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "cy-3",
              "title": "3. Information and communication",
              "pip": "#2f7f86",
              "blurb": "How Wiener measures information, separates a signal from noise, and where Shannon's parallel work fits, with six hands-on tools.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "file": "sections/mind-philosophy/lessons/cybernetics-3-information-communication.html",
              "anchors": [
                {
                  "id": "cy3-1",
                  "title": "A signal is a record in time",
                  "anchor": "sec1"
                },
                {
                  "id": "cy3-2",
                  "title": "Signal in noise: filtering and prediction",
                  "anchor": "sec2"
                },
                {
                  "id": "cy3-3",
                  "title": "Information as narrowing down",
                  "anchor": "sec3"
                },
                {
                  "id": "cy3-4",
                  "title": "Bits of surprise and entropy",
                  "anchor": "sec4"
                },
                {
                  "id": "cy3-5",
                  "title": "Which source is more informative?",
                  "anchor": "sec5"
                },
                {
                  "id": "cy3-6",
                  "title": "Noise, coding and frequency limit communication",
                  "anchor": "sec6"
                },
                {
                  "id": "cy3-7",
                  "title": "Information is not meaning",
                  "anchor": "sec7"
                },
                {
                  "id": "cy3-src",
                  "title": "Takeaways & sources",
                  "anchor": "sec-src"
                }
              ],
              "dates": {
                "created": "2026-11-05",
                "updated": "2026-11-05",
                "verified": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                },
                {
                  "date": "2026-11-05",
                  "note": "Built lesson 3 from Chapter III: a signal-in-noise filtering and prediction lab, interval narrowing, an entropy calculator, a source comparison, a noise and information curve, and an information-versus-meaning sort."
                }
              ],
              "rebuild": {
                "brief": "Rebuild lesson 3 of the Wiener Cybernetics module on Chapter III (printed pp. 85-128): time series as statistical objects, filtering and prediction of signal in noise, information as negative entropy (Eqs. 3.02-3.05, 3.091), Shannon's parallel work, coding and rate limits, and information versus meaning. Include a moving-average lab, a bits calculator, a source comparison, an SNR curve and a sorting exercise, with claims tagged Wiener, Later or Mine and printed page numbers.",
                "basis": [
                  "Wiener, Cybernetics (MIT Press), Chapter III printed pp. 85-128 and Introduction p. 17; PDF at sections/mind-philosophy/readings/cybernetics-wiener.pdf (printed page = PDF page minus 50)",
                  "Stanford Encyclopedia of Philosophy, Information: https://plato.stanford.edu/entries/information/",
                  "Wikipedia, A Mathematical Theory of Communication: https://en.wikipedia.org/wiki/A_Mathematical_Theory_of_Communication"
                ]
              },
              "standard": "v1"
            }
          ]
        },
        {
          "type": "group",
          "id": "cy-c2",
          "title": "B. Feedback, machines and minds",
          "summary": "Control, computation and perception.",
          "children": [
            {
              "type": "lesson",
              "id": "cy-4",
              "title": "4. Feedback and oscillation",
              "pip": "#2f7f86",
              "blurb": "How a system corrects itself from the effect of its own output, and what goes wrong when the correction overshoots.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "Explain negative feedback with a worked example",
                  "Tell stable behaviour from oscillation and hunting",
                  "Read the physiological examples (voluntary movement, tremor) as feedback failures"
                ],
                "concepts": [
                  "Servomechanisms and negative feedback",
                  "Delay, gain and oscillation",
                  "Purpose tremor and ataxia as control problems",
                  "Frequency-response thinking"
                ],
                "takeaways": [
                  "More correction is not always better: delay and gain decide whether feedback steadies or shakes"
                ],
                "connections": [
                  "Builds on 1 and 3"
                ],
                "build": "A thermostat-style loop simulator with gain and delay sliders showing steady, damped and runaway behaviour",
                "notes": [
                  "Chapter IV, printed pp. 129-158. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93)."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-4",
              "anchors": [],
              "dates": {
                "planned": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build from the plan: visual and interactive, introductory, aimed at a curious general reader. Read the chapter first and paraphrase it; separate Wiener's claims from later developments and from my own synthesis. Flag science that has been superseded.",
                "basis": [
                  "Wiener, Cybernetics, 2nd ed. (MIT Press, 1961), the chapter named in the plan",
                  "Outside sources named in the plan, checked at build time"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "cy-5",
              "title": "5. Computing machines and the nervous system",
              "pip": "#2f7f86",
              "blurb": "Why Wiener compared digital machines with neurons, what he proposed for computer design, and what the comparison gets right and wrong.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "Contrast digital and analogue machines",
                  "Explain the all-or-nothing neuron as a switch",
                  "Separate Wiener's 1948 proposals from what later computers did"
                ],
                "concepts": [
                  "Digital and analogue computation",
                  "Binary logic, memory and the stored program idea (as treated in the chapter)",
                  "The neuron as an on/off element and networks of them",
                  "Limits of the analogy between brain and machine"
                ],
                "takeaways": [
                  "Machines and nervous systems can be described with the same logic, but the analogy has limits"
                ],
                "connections": [
                  "Builds on 3 and 4"
                ],
                "build": "A build-a-network widget with on/off units and logic gates, plus a digital-versus-analogue sorting exercise",
                "notes": [
                  "Chapter V, printed pp. 159-182. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93).",
                  "Check later developments in neuroscience and computing at build time and label them as outside the book."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-5",
              "anchors": [],
              "dates": {
                "planned": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build from the plan: visual and interactive, introductory, aimed at a curious general reader. Read the chapter first and paraphrase it; separate Wiener's claims from later developments and from my own synthesis. Flag science that has been superseded.",
                "basis": [
                  "Wiener, Cybernetics, 2nd ed. (MIT Press, 1961), the chapter named in the plan",
                  "Outside sources named in the plan, checked at build time"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "cy-6",
              "title": "6. Pattern and perception: Gestalt and universals",
              "pip": "#2f7f86",
              "blurb": "How a system can recognise a shape as the same shape in different positions and sizes.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "Explain recognition as invariance under changes of position or size",
                  "Describe the scanning idea for visual perception",
                  "Relate Gestalt ideas to the group notions of earlier chapters"
                ],
                "concepts": [
                  "Gestalt perception and universals",
                  "Scanning and averaging as a way to normalise a pattern",
                  "Rhythms in the brain as a possible scanning mechanism (as proposed in the chapter)",
                  "Machines that read type"
                ],
                "takeaways": [
                  "Recognising 'the same thing' means ignoring the changes that should not matter"
                ],
                "connections": [
                  "Builds on 2 and 5"
                ],
                "build": "A shape-matching widget that normalises position and scale step by step, with a toggle that shows what the machine 'sees'",
                "notes": [
                  "Chapter VI, printed pp. 183-198. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93).",
                  "The brain-rhythm proposal is Wiener's hypothesis; check current evidence and label it."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-6",
              "anchors": [],
              "dates": {
                "planned": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build from the plan: visual and interactive, introductory, aimed at a curious general reader. Read the chapter first and paraphrase it; separate Wiener's claims from later developments and from my own synthesis. Flag science that has been superseded.",
                "basis": [
                  "Wiener, Cybernetics, 2nd ed. (MIT Press, 1961), the chapter named in the plan",
                  "Outside sources named in the plan, checked at build time"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "cy-7",
              "title": "7. When feedback goes wrong: cybernetics and psychopathology",
              "pip": "#2f7f86",
              "blurb": "Wiener's attempt to describe some mental disorders as failures of information handling, read with care for how far the science has moved.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "State the circulating-memory and overload analogies and what they claim",
                  "Read the chapter critically as a mid-century model",
                  "Separate the book's claims from current understanding"
                ],
                "concepts": [
                  "Memory as a circulating pattern that can become overloaded",
                  "Analogy between machine breakdowns and mental illness",
                  "Treatments discussed in the book and the historical context",
                  "Why a metaphor is not a mechanism"
                ],
                "takeaways": [
                  "A useful metaphor can still be a wrong explanation, and this chapter is best read as history of ideas"
                ],
                "connections": [
                  "Builds on 4 and 5"
                ],
                "build": "A loop-overload simulator that shows the analogy, paired with an explicit panel on what current science says",
                "notes": [
                  "Chapter VII, printed pp. 199-214. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93).",
                  "Handle sensitively; mark all medical claims as historical and do not present them as guidance."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-7",
              "anchors": [],
              "dates": {
                "planned": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build from the plan: visual and interactive, introductory, aimed at a curious general reader. Read the chapter first and paraphrase it; separate Wiener's claims from later developments and from my own synthesis. Flag science that has been superseded.",
                "basis": [
                  "Wiener, Cybernetics, 2nd ed. (MIT Press, 1961), the chapter named in the plan",
                  "Outside sources named in the plan, checked at build time"
                ]
              },
              "standard": "v1"
            }
          ]
        },
        {
          "type": "group",
          "id": "cy-c3",
          "title": "C. Language, learning and self-organisation",
          "summary": "From society to learning machines.",
          "children": [
            {
              "type": "lesson",
              "id": "cy-8",
              "title": "8. Information, language and society",
              "pip": "#2f7f86",
              "blurb": "How Wiener extends communication ideas to language, organisations and society, and why he warned about automatic machines.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "Describe language as a communication system with redundancy",
                  "Explain homeostasis in social groups as the book frames it",
                  "Summarise Wiener's early warnings about automation"
                ],
                "concepts": [
                  "Language, redundancy and the evolution of communication",
                  "Organisations and societies as communicating systems",
                  "Limits of applying statistical methods to society",
                  "Early concerns about automatic machines and labour"
                ],
                "takeaways": [
                  "Society depends on how information moves, and Wiener already saw both the promise and the danger of machines in it"
                ],
                "connections": [
                  "Builds on 3; draws on the whole of Part I"
                ],
                "build": "A message-passing network widget (rumour, delay, noise) and a redundancy test on text",
                "notes": [
                  "Chapter VIII, printed pp. 215-230. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93)."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-8",
              "anchors": [],
              "dates": {
                "planned": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build from the plan: visual and interactive, introductory, aimed at a curious general reader. Read the chapter first and paraphrase it; separate Wiener's claims from later developments and from my own synthesis. Flag science that has been superseded.",
                "basis": [
                  "Wiener, Cybernetics, 2nd ed. (MIT Press, 1961), the chapter named in the plan",
                  "Outside sources named in the plan, checked at build time"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "cy-9",
              "title": "9. Learning and self-reproducing machines",
              "pip": "#2f7f86",
              "blurb": "The 1961 additions: how a machine could improve with experience, and what it would mean for one to reproduce itself.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "Explain learning in a machine as feedback on its own performance",
                  "Describe the chapter's example of a game-playing machine",
                  "State the self-reproduction question and the nonlinear-system answer sketched here"
                ],
                "concepts": [
                  "Learning as adjustment from performance",
                  "Game-playing machines (checkers) as a test case",
                  "Self-reproduction, and a comparison with natural reproduction",
                  "Why Wiener thought these matter for society"
                ],
                "takeaways": [
                  "Learning is feedback on feedback, and the 1961 chapters anticipate machine learning questions"
                ],
                "connections": [
                  "Builds on 4 and 5"
                ],
                "build": "A tiny learning agent in a grid or game that adjusts its rule from outcomes, with a replay of its improvement",
                "notes": [
                  "Chapter IX, printed pp. 233-250. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93).",
                  "Connect to later machine learning only in clearly labelled outside notes."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-9",
              "anchors": [],
              "dates": {
                "planned": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build from the plan: visual and interactive, introductory, aimed at a curious general reader. Read the chapter first and paraphrase it; separate Wiener's claims from later developments and from my own synthesis. Flag science that has been superseded.",
                "basis": [
                  "Wiener, Cybernetics, 2nd ed. (MIT Press, 1961), the chapter named in the plan",
                  "Outside sources named in the plan, checked at build time"
                ]
              },
              "standard": "v1"
            },
            {
              "type": "lesson",
              "id": "cy-10",
              "title": "10. Brain waves and self-organizing systems",
              "pip": "#2f7f86",
              "blurb": "How oscillators can pull each other into step, and why Wiener thought brain rhythms show self-organisation.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "Explain frequency pulling and synchronisation of oscillators",
                  "Describe how brain-wave rhythms were analysed in the chapter",
                  "Relate self-organisation to the whole book's theme of order from feedback"
                ],
                "concepts": [
                  "Alpha rhythm and brain-wave analysis",
                  "Nonlinear oscillators that lock together",
                  "Autocorrelation and spectra (as used in the chapter)",
                  "Self-organisation of rhythms"
                ],
                "takeaways": [
                  "Order can appear without a conductor when many oscillators influence one another"
                ],
                "connections": [
                  "Builds on 4 and 6; closes the module"
                ],
                "build": "A set of coupled oscillators (metronomes) with a coupling slider that shows locking",
                "notes": [
                  "Chapter X, printed pp. 251-280. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93).",
                  "Check current research on synchronisation and brain rhythms at build time and label it as outside the book."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-10",
              "anchors": [],
              "dates": {
                "planned": "2026-11-05"
              },
              "history": [
                {
                  "date": "2026-11-05",
                  "note": "Planned (stub)"
                }
              ],
              "rebuild": {
                "brief": "Build from the plan: visual and interactive, introductory, aimed at a curious general reader. Read the chapter first and paraphrase it; separate Wiener's claims from later developments and from my own synthesis. Flag science that has been superseded.",
                "basis": [
                  "Wiener, Cybernetics, 2nd ed. (MIT Press, 1961), the chapter named in the plan",
                  "Outside sources named in the plan, checked at build time"
                ]
              },
              "standard": "v1"
            }
          ]
        }
      ],
      "standard": "v1"
    }
  ]
});
