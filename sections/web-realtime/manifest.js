/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md).
   Declares what this section may contain so new content can be reasoned against it.
   Loaded with <script src>, so it works from file:// (no fetch). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "created": "2026-07-21",
  "updated": "2026-10-23",
  "id": "web-realtime",
  "order": 1,
  "title": "Web Realtime & Netcode",
  "icon": "🌐",
  "summary": "How browsers talk in real time, and how multiplayer games survive the network — grounded in a real feasibility spike.",
  "scope": {
    "purpose": "Protocols, transports and synchronization techniques for realtime, interactive web experiences.",
    "includes": [
      "Browser realtime APIs (WebSocket, WebRTC, WebTransport, SSE)",
      "Transport fundamentals (TCP/UDP, head-of-line blocking, jitter, loss)",
      "Game loops, ticks and simulation timing",
      "Netcode models: delay, rollback, host/server-authoritative",
      "State sync: snapshots, deltas, interpolation, prediction",
      "Case studies of real spikes or prototypes in this space"
    ],
    "excludes": [
      "General HTTP performance / caching (→ a future Web Performance section)",
      "AI or agent tooling (→ Building with AI)",
      "Game design or art pipelines unrelated to networking"
    ],
    "admission": [
      "Does it explain how data moves between clients/servers in (near) real time, or how a simulation stays in sync?",
      "Is the browser or a realtime game the primary context?"
    ],
    "audience": "Front-end / product engineers, beginner-but-technical in networking.",
    "depth": "Concept-first with interactive simulators; links to official specs and talks."
  },
  "related": [
    "rendering-performance-motion",
    "building-with-ai"
  ],
  "children": [
    {
      "type": "group",
      "id": "wr-foundations",
      "title": "Foundations",
      "summary": "The building blocks: connections, transports and the loop every game runs on.",
      "children": [
        {
          "type": "lesson",
          "id": "websockets",
          "title": "WebSockets",
          "file": "sections/web-realtime/lessons/websockets-for-dummies.html",
          "pip": "#4a6fa8",
          "blurb": "Persistent, full-duplex connections — handshake, frames, and a live simulator.",
          "anchors": [
            {
              "id": "ws-problem",
              "title": "The problem they solve",
              "anchor": "sec1"
            },
            {
              "id": "ws-vs",
              "title": "Polling vs WebSockets",
              "anchor": "sec2"
            },
            {
              "id": "ws-handshake",
              "title": "The handshake",
              "anchor": "sec3"
            },
            {
              "id": "ws-frame",
              "title": "Anatomy of a frame",
              "anchor": "sec4"
            },
            {
              "id": "ws-sim",
              "title": "Live simulator",
              "anchor": "sec5"
            },
            {
              "id": "ws-code",
              "title": "Client + server code",
              "anchor": "sec6"
            },
            {
              "id": "ws-choose",
              "title": "Choosing the right tool",
              "anchor": "sec7"
            },
            {
              "id": "ws-pitfalls",
              "title": "Pitfalls",
              "anchor": "sec8"
            }
          ],
          "dates": {
            "created": "2026-07-21",
            "updated": "2026-07-21",
            "verified": "2026-07-21"
          },
          "history": [
            {
              "date": "2026-07-21",
              "note": "Created"
            },
            {
              "date": "2026-07-23",
              "note": "Restyled to hub theme"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "WebSockets for dummies — beginner-but-technical, interactive, with animations.",
            "basis": [
              "RFC 6455",
              "MDN WebSocket API"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "transports",
          "title": "Realtime Transports",
          "file": "sections/web-realtime/lessons/realtime-transports.html",
          "pip": "#4a6fa8",
          "blurb": "TCP vs UDP, WebSocket vs WebRTC — and the lost packet that decides it.",
          "anchors": [
            {
              "id": "tp-models",
              "title": "TCP vs UDP",
              "anchor": "sec1"
            },
            {
              "id": "tp-browser",
              "title": "What the browser gives you",
              "anchor": "sec2"
            },
            {
              "id": "tp-hol",
              "title": "TCP head-of-line blocking",
              "anchor": "sec3"
            },
            {
              "id": "tp-p99",
              "title": "The p99 tail decides it",
              "anchor": "sec4"
            },
            {
              "id": "tp-loss",
              "title": "link-loss vs payload-drop",
              "anchor": "sec5"
            },
            {
              "id": "tp-spike",
              "title": "What your spike measures",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "webrtc",
          "title": "WebRTC & Signaling",
          "file": "sections/web-realtime/lessons/webrtc-signaling.html",
          "pip": "#437a58",
          "blurb": "How two browsers open a direct pipe, and why they still need a middleman.",
          "anchors": [
            {
              "id": "wr-egg",
              "title": "The chicken-and-egg problem",
              "anchor": "sec1"
            },
            {
              "id": "wr-handshake",
              "title": "Offer / answer handshake",
              "anchor": "sec2"
            },
            {
              "id": "wr-ice",
              "title": "ICE, STUN & TURN",
              "anchor": "sec3"
            },
            {
              "id": "wr-dc",
              "title": "DataChannels",
              "anchor": "sec4"
            },
            {
              "id": "wr-real",
              "title": "The awkward realities",
              "anchor": "sec5"
            },
            {
              "id": "wr-spike",
              "title": "Your spike's signaling server",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "gameloops",
          "title": "Game Loops & Fixed Timestep",
          "file": "sections/web-realtime/lessons/game-loops-ticks.html",
          "pip": "#c9a24a",
          "blurb": "The heartbeat every game runs on: sim vs render, ticks, fixed timestep.",
          "anchors": [
            {
              "id": "gl-why",
              "title": "Why this comes first",
              "anchor": "sec1"
            },
            {
              "id": "gl-loop",
              "title": "The loop",
              "anchor": "sec2"
            },
            {
              "id": "gl-tick",
              "title": "Ticks vs frames",
              "anchor": "sec3"
            },
            {
              "id": "gl-fixed",
              "title": "Variable vs fixed timestep",
              "anchor": "sec4"
            },
            {
              "id": "gl-simrender",
              "title": "Sim vs render",
              "anchor": "sec5"
            },
            {
              "id": "gl-spike",
              "title": "How your spike's game is built",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        }
      ]
    },
    {
      "type": "group",
      "id": "wr-spike",
      "title": "Case study: netcode-feasibility spike",
      "summary": "Netcode theory applied to a netcode-feasibility spike, ending in a hands-on capstone.",
      "children": [
        {
          "type": "lesson",
          "id": "netcodemodels",
          "title": "Netcode Models",
          "file": "sections/web-realtime/lessons/netcode-models.html",
          "pip": "#7d68b3",
          "blurb": "Delay vs rollback vs host-authoritative — and the fighting-game tradeoffs.",
          "anchors": [
            {
              "id": "nm-problem",
              "title": "Two clocks, one truth",
              "anchor": "sec1"
            },
            {
              "id": "nm-three",
              "title": "The three models",
              "anchor": "sec2"
            },
            {
              "id": "nm-compare",
              "title": "Side-by-side comparison",
              "anchor": "sec3"
            },
            {
              "id": "nm-loop",
              "title": "The host-authoritative loop",
              "anchor": "sec4"
            },
            {
              "id": "nm-fgc",
              "title": "Why fighting games are brutal",
              "anchor": "sec5"
            },
            {
              "id": "nm-spike",
              "title": "Which model your spike tests",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "snapshots",
          "title": "Snapshots & Interpolation",
          "file": "sections/web-realtime/lessons/snapshots-interpolation.html",
          "pip": "#b35c5c",
          "blurb": "Fitting a whole fight into a few dozen bytes, and the cost of smoothing it.",
          "anchors": [
            {
              "id": "sn-what",
              "title": "What a snapshot is",
              "anchor": "sec1"
            },
            {
              "id": "sn-schema",
              "title": "Your spike's schema",
              "anchor": "sec2"
            },
            {
              "id": "sn-ladder",
              "title": "JSON → binary → delta",
              "anchor": "sec3"
            },
            {
              "id": "sn-interp",
              "title": "The interpolation buffer",
              "anchor": "sec4"
            },
            {
              "id": "sn-stale",
              "title": "Hitting where they were",
              "anchor": "sec5"
            },
            {
              "id": "sn-fidelity",
              "title": "The fidelity gap",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "latency",
          "title": "Latency & the Feel Ceiling",
          "file": "sections/web-realtime/lessons/latency-feel-ceiling.html",
          "pip": "#4a6fa8",
          "blurb": "The one number that decides the spike's verdict — measured in frames.",
          "anchors": [
            {
              "id": "la-frames",
              "title": "Everything is frames",
              "anchor": "sec1"
            },
            {
              "id": "la-ceiling",
              "title": "The feel ceiling",
              "anchor": "sec2"
            },
            {
              "id": "la-rtt",
              "title": "RTT is not felt lag",
              "anchor": "sec3"
            },
            {
              "id": "la-jitter",
              "title": "Why jitter hurts more",
              "anchor": "sec4"
            },
            {
              "id": "la-buffer",
              "title": "Input-delay & symmetric delay",
              "anchor": "sec5"
            },
            {
              "id": "la-spike",
              "title": "What your spike measured",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "determinism",
          "title": "Determinism & Rollback Cost",
          "file": "sections/web-realtime/lessons/determinism-cost.html",
          "pip": "#c9a24a",
          "blurb": "Why the best-feeling netcode needs a reproducible sim, and why that's costly.",
          "anchors": [
            {
              "id": "de-what",
              "title": "What deterministic means",
              "anchor": "sec1"
            },
            {
              "id": "de-seed",
              "title": "Same seed, same fight",
              "anchor": "sec2"
            },
            {
              "id": "de-enemies",
              "title": "The three enemies",
              "anchor": "sec3"
            },
            {
              "id": "de-cheap",
              "title": "Cheap vs structural",
              "anchor": "sec4"
            },
            {
              "id": "de-mkx",
              "title": "The 8-man-year number",
              "anchor": "sec5"
            },
            {
              "id": "de-spike",
              "title": "What your spike found",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "scoring",
          "title": "Scoring Feasibility Honestly",
          "file": "sections/web-realtime/lessons/scoring-feasibility.html",
          "pip": "#437a58",
          "blurb": "Turning a pile of measurements into one verdict without lying with math.",
          "anchors": [
            {
              "id": "sc-problem",
              "title": "The problem with one number",
              "anchor": "sec1"
            },
            {
              "id": "sc-bands",
              "title": "Human-anchored bands",
              "anchor": "sec2"
            },
            {
              "id": "sc-additive",
              "title": "The additive trap",
              "anchor": "sec3"
            },
            {
              "id": "sc-geo",
              "title": "Geometric mean + min-gate",
              "anchor": "sec4"
            },
            {
              "id": "sc-axes",
              "title": "Don't average unlike questions",
              "anchor": "sec5"
            },
            {
              "id": "sc-spike",
              "title": "How your spike scores",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        },
        {
          "type": "lesson",
          "id": "usingspike",
          "title": "Using the Spike (capstone)",
          "file": "sections/web-realtime/lessons/using-the-spike.html",
          "pip": "#7d68b3",
          "blurb": "The capstone: every concept assembled into the tool you actually clicked.",
          "anchors": [
            {
              "id": "us-asking",
              "title": "What this spike is asking",
              "anchor": "sec1"
            },
            {
              "id": "us-arch",
              "title": "The architecture",
              "anchor": "sec2"
            },
            {
              "id": "us-pages",
              "title": "The five pages",
              "anchor": "sec3"
            },
            {
              "id": "us-run",
              "title": "Running host + guest",
              "anchor": "sec4"
            },
            {
              "id": "us-read",
              "title": "Reading a result",
              "anchor": "sec5"
            },
            {
              "id": "us-verdict",
              "title": "The verdict & what's needed",
              "anchor": "sec6"
            }
          ],
          "dates": {
            "created": "2026-07-24",
            "updated": "2026-07-24",
            "verified": "2026-07-24"
          },
          "history": [
            {
              "date": "2026-07-24",
              "note": "Created from the netcode-feasibility spike + official sources"
            },
            {
              "date": "2026-07-24",
              "note": "Updated for spike refactor notes and second review"
            },
            {
              "date": "2026-07-24",
              "note": "Verified against deployed spike (onrender)"
            },
            {
              "date": "2026-10-23",
              "note": "Restyled: SNES pastel theme (visual only)"
            },
            {
              "date": "2026-10-23",
              "note": "Filed under section Web Realtime & Netcode"
            }
          ],
          "rebuild": {
            "brief": "Netcode lesson series grounded in a netcode-feasibility spike plus official sources.",
            "basis": [
              "conductor/spikes/netcode-feasibility (repo)",
              "netcode-feasibility-spike.onrender.com",
              "Official specs/docs (W3C WebRTC, RFCs, MDN)"
            ]
          }
        }
      ]
    }
  ]
});
