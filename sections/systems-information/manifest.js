/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-11-05",
  "updated": "2026-11-05",
  "id": "systems-information",
  "order": 6,
  "title": "Systems & Information",
  "icon": "🧭",
  "summary": "Feedback, control, information and self-organisation: foundational texts on how systems steer themselves, taught chapter by chapter.",
  "scope": {
    "purpose": "Study of control, communication and systems thinking through primary texts.",
    "includes": [
      "Cybernetics and control theory in plain terms",
      "Information, noise and communication",
      "Self-organisation and learning in machines and organisms"
    ],
    "excludes": [
      "Engineering how-to for specific software or hardware",
      "Philosophy of self and free will (→ Mind & Philosophy)"
    ],
    "admission": [
      "Is it about how systems regulate, communicate or organise themselves?",
      "Can it be taught from a primary text with clearly labelled later developments?"
    ],
    "audience": "Curious readers who want the ideas behind modern control, information and AI.",
    "depth": "Source-backed: the book's claims paraphrased and separated from later science and from my own synthesis, with interactive models."
  },
  "related": [
    "mind-philosophy"
  ],
  "children": [
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
          "file": "sections/systems-information/readings/cybernetics-wiener.pdf",
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
              "file": "sections/systems-information/lessons/cybernetics-1-the-book.html",
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
                  "sections/systems-information/readings/cybernetics-wiener.pdf: Contents (printed vii-viii), Hill foreword ix-xx, Mitter foreword xxi-xxxiv, Preface to the Second Edition xxxv-xlvii, Introduction 3-42, Chapter I pp. 54-60",
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
              "file": "sections/systems-information/lessons/cybernetics-2-time-order-statistics.html",
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
              "blurb": "How to predict and filter a signal buried in noise, and how Wiener measured the amount of information in a message.",
              "tags": [
                "cybernetics",
                "wiener",
                "systems"
              ],
              "plan": {
                "goals": [
                  "Describe prediction and filtering of a time series",
                  "Explain information as a measure of how unexpected a message is",
                  "Relate Wiener's measure to Shannon's, as the book does"
                ],
                "concepts": [
                  "Time series as the object of communication engineering",
                  "Filtering and prediction of noisy signals",
                  "Amount of information and its link to entropy",
                  "Coding and channel capacity (as treated in the chapter)"
                ],
                "takeaways": [
                  "Information measures how much a message reduces uncertainty, and noise is what limits it"
                ],
                "connections": [
                  "Builds on 2"
                ],
                "build": "A signal-in-noise lab with a slider for noise and a simple filter; plus a bits-of-surprise calculator for sample messages",
                "notes": [
                  "Chapter III, printed pp. 85-128. Page numbers are the book's printed pages; in the attached PDF add 50 (printed page 43 is PDF page 93)."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=cy-3",
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
