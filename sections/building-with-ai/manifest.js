/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Declares what this section may contain so new content can be reasoned against it.
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-07-22",
  "updated": "2026-10-23",
  "id": "building-with-ai",
  "order": 3,
  "title": "Building with AI",
  "icon": "🛠️",
  "summary": "Engineering systems on top of models: orchestrating agents, wiring tools, and choosing the right model and effort.",
  "scope": {
    "purpose": "Technical decisions you make when building software that uses LLMs and agents.",
    "includes": [
      "Agent and sub-agent orchestration patterns",
      "Tool interfaces for agents (CLI, MCP, code execution)",
      "Model selection, effort/thinking settings, cost vs. quality",
      "Model-specific guides and capability notes",
      "Prompt/context engineering as an engineering discipline"
    ],
    "excludes": [
      "How AI affects human skill, learning or productivity (→ Working & Learning with AI)",
      "Personal day-to-day AI workflow habits (→ Working & Learning with AI)",
      "ML theory / training internals unless needed to make a build decision"
    ],
    "admission": [
      "Is the reader building or configuring an AI-powered system?",
      "Would the lesson change an architectural, tooling or model choice?"
    ],
    "audience": "Developers building with Claude and agent tooling.",
    "depth": "Practical and source-backed (official docs first); interactive decision tools where useful."
  },
  "related": [
    "working-learning-with-ai"
  ],
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
    }
  ]
});
