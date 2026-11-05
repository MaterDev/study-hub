/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Declares what this section may contain so new content can be reasoned against it.
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-07-22",
  "updated": "2026-11-05",
  "id": "building-with-ai",
  "order": 2,
  "title": "Building & Learning with AI",
  "icon": "🛠️",
  "summary": "Engineering systems on top of models, and the human side: how AI changes the way we work, what it does to our skills, and how to use it so you get better, not just faster.",
  "scope": {
    "purpose": "Technical decisions when building software that uses LLMs and agents, together with evidence and practice on how individuals and teams work, learn and develop expertise alongside AI.",
    "includes": [
      "Agent and sub-agent orchestration patterns",
      "Tool interfaces for agents (CLI, MCP, code execution)",
      "Model selection, effort/thinking settings, cost vs. quality",
      "Model-specific guides and capability notes",
      "Prompt/context engineering as an engineering discipline",
      "Personal and small-team AI workflows and habits",
      "Research on AI's effects on productivity, skill and learning",
      "Cognitive offloading, calibration, deskilling and upskilling",
      "Training, onboarding and team policy for AI adoption",
      "Structured modules built around a single paper or report"
    ],
    "excludes": [
      "ML theory / training internals unless needed to make a build decision",
      "Vendor comparisons / product news without a human-performance angle"
    ],
    "admission": [
      "Is the reader building or configuring an AI-powered system?",
      "Would the lesson change an architectural, tooling or model choice?",
      "Is the main question about the person using AI rather than the system being built?",
      "Is it grounded in evidence (studies, data) or tested practice?"
    ],
    "audience": "Developers building with Claude and agent tooling.",
    "depth": "Practical and source-backed (official docs first); interactive decision tools where useful."
  },
  "related": [],
  "children": [
    {
      "type": "group",
      "id": "bai-orchestration",
      "title": "Agents & tools",
      "summary": "Coordinating agents and giving them the right tool surface.",
      "children": [
        {
          "type": "lesson",
          "id": "subagents",
          "title": "Sub-Agent Patterns",
          "file": "sections/building-with-ai/lessons/subagent-patterns.html",
          "pip": "#b35c5c",
          "blurb": "Coordinating multiple agents from one thread: patterns, tradeoffs, and when not to.",
          "anchors": [
            {
              "id": "sa-orch",
              "title": "What orchestration means",
              "anchor": "sec1"
            },
            {
              "id": "sa-tax",
              "title": "Pattern gallery",
              "anchor": "sec2"
            },
            {
              "id": "sa-anthropic",
              "title": "Anthropic's principles",
              "anchor": "sec3"
            },
            {
              "id": "sa-counter",
              "title": "The counter-case",
              "anchor": "sec4"
            },
            {
              "id": "sa-decide",
              "title": "Decision map",
              "anchor": "sec5"
            },
            {
              "id": "sa-recipes",
              "title": "Recipes",
              "anchor": "sec6"
            },
            {
              "id": "sa-sources",
              "title": "Sources",
              "anchor": "sec7"
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
              "note": "Filed under Building with AI › Agents & tools"
            }
          ],
          "rebuild": {
            "brief": "Sub-agent orchestration patterns, researched with visuals.",
            "basis": [
              "Anthropic engineering posts on multi-agent systems",
              "Agent framework docs (as of creation)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "clivsmcp",
          "title": "CLI vs MCP",
          "file": "sections/building-with-ai/lessons/cli-vs-mcp.html",
          "pip": "#c9a24a",
          "blurb": "Why 'just give the agent a terminal' often beats wiring up MCP servers — and when it doesn't.",
          "anchors": [
            {
              "id": "cm-claim",
              "title": "The claim in one picture",
              "anchor": "sec1"
            },
            {
              "id": "cm-why",
              "title": "Why models are good at CLIs",
              "anchor": "sec2"
            },
            {
              "id": "cm-tax",
              "title": "The token tax of MCP",
              "anchor": "sec3"
            },
            {
              "id": "cm-wrap",
              "title": "MCP mostly wraps the CLI",
              "anchor": "sec4"
            },
            {
              "id": "cm-mcpwins",
              "title": "Where MCP actually wins",
              "anchor": "sec5"
            },
            {
              "id": "cm-resolution",
              "title": "Write code to call tools",
              "anchor": "sec6"
            },
            {
              "id": "cm-guide",
              "title": "Decision guide + doing it safely",
              "anchor": "sec7"
            }
          ],
          "dates": {
            "created": "2026-08-26",
            "updated": "2026-08-26",
            "verified": "2026-08-26"
          },
          "history": [
            {
              "date": "2026-08-26",
              "note": "Created from a video's 'CLIs beat MCP for agents' diagram, validated against sources"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            }
          ],
          "rebuild": {
            "brief": "Developer-focused lesson explaining the CLI-vs-MCP argument, validated with credible sources.",
            "basis": [
              "MCP spec / Anthropic docs",
              "Anthropic 'code execution with MCP' post"
            ]
          }
        }
      ]
    },
    {
      "type": "group",
      "id": "bai-context",
      "title": "Context engineering",
      "summary": "Deciding what the model sees: memory files, session habits, and context that lives in the repo.",
      "children": [
        {
          "type": "lesson",
          "id": "ctxeng",
          "title": "Context Engineering: Claude Code & Conductor",
          "file": "sections/building-with-ai/lessons/context-engineering.html",
          "pip": "#4a6fa8",
          "blurb": "Managing what the model sees: Claude Code best practices, and Conductor's context-driven development.",
          "anchors": [
            {
              "id": "ce-what",
              "title": "What context engineering is",
              "anchor": "sec1"
            },
            {
              "id": "ce-budget",
              "title": "The window is a budget",
              "anchor": "sec2"
            },
            {
              "id": "ce-loads",
              "title": "What survives compaction",
              "anchor": "sec3"
            },
            {
              "id": "ce-claudemd",
              "title": "A CLAUDE.md that earns its lines",
              "anchor": "sec4"
            },
            {
              "id": "ce-habits",
              "title": "The working loop",
              "anchor": "sec5"
            },
            {
              "id": "ce-conductor",
              "title": "Conductor: memory that lives in the repo",
              "anchor": "sec6"
            },
            {
              "id": "ce-files",
              "title": "What Conductor writes",
              "anchor": "sec7"
            },
            {
              "id": "ce-together",
              "title": "Putting the two parts together",
              "anchor": "sec8"
            },
            {
              "id": "ce-decide",
              "title": "Which tool for which job",
              "anchor": "sec9"
            },
            {
              "id": "ce-sources",
              "title": "Takeaways & sources",
              "anchor": "sec-src"
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
              "note": "Created, researched"
            },
            {
              "date": "2026-10-23",
              "note": "Reworked as a visual lesson: budget grid, compaction machine, CLAUDE.md editor, loop diagram, chat-vs-repo sessions"
            }
          ],
          "rebuild": {
            "brief": "Context engineering in two parts: Claude Code best practices (context budget, CLAUDE.md, compaction, working habits) and Conductor's context-driven development (context/spec/plan in the repo), with how they connect and when to use which.",
            "basis": [
              "Anthropic: Best practices for Claude Code; Explore the context window; How Claude remembers your project",
              "Anthropic engineering: Effective context engineering for AI agents",
              "Google Developers Blog: Conductor launch post (17 Dec 2025)",
              "gemini-cli-extensions/conductor README"
            ]
          },
          "standard": "v1"
        }
      ],
      "standard": "v1"
    },
    {
      "type": "group",
      "id": "bai-models",
      "title": "Choosing models",
      "summary": "Which model, which effort, and how to get lasting value from each.",
      "children": [
        {
          "type": "lesson",
          "id": "modelstudio",
          "title": "Model & Effort Decision Studio",
          "file": "sections/building-with-ai/lessons/model-decision-studio.html",
          "pip": "#4a6fa8",
          "blurb": "Which Claude + which effort, decided fast — a living tool you refresh as the lineup changes.",
          "anchors": [
            {
              "id": "ms-axes",
              "title": "The three axes",
              "anchor": "sec1"
            },
            {
              "id": "ms-lineup",
              "title": "The lineup",
              "anchor": "sec2"
            },
            {
              "id": "ms-effort",
              "title": "The effort dial",
              "anchor": "sec3"
            },
            {
              "id": "ms-cost",
              "title": "Cost & effort visualizer",
              "anchor": "sec4"
            },
            {
              "id": "ms-picker",
              "title": "Decision picker",
              "anchor": "sec5"
            },
            {
              "id": "ms-subagent",
              "title": "Routing subagents",
              "anchor": "sec6"
            },
            {
              "id": "ms-benchmarks",
              "title": "Reading benchmarks",
              "anchor": "sec7"
            }
          ],
          "dates": {
            "created": "2026-07-28",
            "updated": "2026-07-28",
            "verified": "2026-07-28"
          },
          "history": [
            {
              "date": "2026-07-28",
              "note": "Created: Claude-only, data-driven MODELS config"
            },
            {
              "date": "2026-07-28",
              "note": "Added effort trajectories for all models; fact-checked online"
            },
            {
              "date": "2026-07-28",
              "note": "Corrected: Fable supports the effort dial"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            }
          ],
          "rebuild": {
            "brief": "Model & effort decision tool for Sonnet/Opus/Fable at current versions; refresh when lineup changes.",
            "basis": [
              "Anthropic pricing + Effort docs",
              "Artificial Analysis (as of creation)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "fable",
          "title": "Durable Value from Fable",
          "file": "sections/building-with-ai/lessons/fable-model-guide.html",
          "pip": "#7d68b3",
          "blurb": "Banking lasting value from a temporary window of a top-tier model.",
          "anchors": [
            {
              "id": "fa-what",
              "title": "What Fable 5 is",
              "anchor": "sec1"
            },
            {
              "id": "fa-saga",
              "title": "The access timeline",
              "anchor": "sec2"
            },
            {
              "id": "fa-route",
              "title": "Route hard problems",
              "anchor": "sec3"
            },
            {
              "id": "fa-artifacts",
              "title": "Distilling intelligence",
              "anchor": "sec4"
            },
            {
              "id": "fa-checklist",
              "title": "Limited-window checklist",
              "anchor": "sec5"
            },
            {
              "id": "fa-sources",
              "title": "Sources & gaps",
              "anchor": "sec6"
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
              "note": "Filed under Building with AI › Choosing models"
            }
          ],
          "rebuild": {
            "brief": "Getting durable value from Claude Fable during a limited access window.",
            "basis": [
              "Anthropic model docs and announcements (as of creation)"
            ]
          }
        }
      ]
    },
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
