/* Section manifest — schema: hub-section/1 (see docs/HUB-STRUCTURE.md). */
(window.HUB_SECTIONS = window.HUB_SECTIONS || []).push({
  "schema": "hub-section/1",
  "id": "rendering-performance-motion",
  "order": 2,
  "title": "Rendering, Performance & Motion",
  "icon": "🎞️",
  "created": "2026-10-23",
  "updated": "2026-10-23",
  "summary": "How the browser turns code into pixels — and how to make that fast, smooth and measurable. Two imported courses: web animation and front-end performance.",
  "scope": {
    "purpose": "The browser rendering pipeline and everything that rides on it: loading, main-thread work, animation, graphics and measuring the result.",
    "includes": [
      "Rendering pipeline, layers, compositing, the GPU",
      "Core Web Vitals, loading strategies, caching, main-thread / JS performance",
      "React rendering performance",
      "CSS / JS / SVG / Canvas animation and motion libraries",
      "WebGL, WebGPU and shaders for UI and creative work",
      "Profiling (DevTools) and real-user measurement"
    ],
    "excludes": [
      "Realtime networking and netcode (→ Web Realtime & Netcode)",
      "AI / agent tooling (→ Building with AI)",
      "Visual or UX design theory without a rendering/performance angle"
    ],
    "admission": [
      "Does it change what the browser does between code and pixels, or how fast/smooth that feels?",
      "Can it be shown, profiled or measured in the browser?"
    ],
    "audience": "Experienced front-end / UI engineers; visual learners.",
    "depth": "Mechanism-first with interactive demos and DevTools workflows; research current browser support before building."
  },
  "related": [
    "web-realtime"
  ],
  "notes": [
    "Imported 2026-10-23 from two projects. Stubs keep their original plans so they can be built later.",
    "Overlapping topics are cross-linked on each stub (e.g. FE 6.x Motion ↔ Web Animation course). When building, prefer one lesson + cross-links over duplicates."
  ],
  "children": [
    {
      "type": "group",
      "kind": "module",
      "label": "COURSE",
      "id": "web-animation",
      "title": "Course: Web Animation & Motion Graphics",
      "home": "shared/outline.html?id=web-animation",
      "pip": "#7d68b3",
      "summary": "A 13-lesson path from the browser rendering pipeline to WebGPU compute — every lesson a deeper layer of the same system.",
      "throughline": "Browser renders pixels via pipeline → CSS/JS manipulate that pipeline → Canvas/WebGL give direct access → WebGPU exposes the full GPU. Every lesson is a deeper layer of the same system.",
      "principles": [
        "Performance-first: every technique asks what it costs and how you'd see it in DevTools",
        "Mental models over memorisation",
        "Every lesson ends with something to build; builds compound"
      ],
      "dates": {
        "created": "2026-06-02",
        "updated": "2026-08-25",
        "verified": "2026-08-25"
      },
      "history": [
        {
          "date": "2026-06-02",
          "note": "Curriculum planned; lessons 1–3 built (Jun 2–5)"
        },
        {
          "date": "2026-06-12",
          "note": "Lesson 4 built"
        },
        {
          "date": "2026-08-25",
          "note": "Lesson 5 built"
        },
        {
          "date": "2026-10-23",
          "note": "Imported into the hub from 'Web Animation and Motion Graphics Learning'; lessons 6–15 carried over as stubs"
        }
      ],
      "rebuild": {
        "brief": "Expert-track web animation curriculum: CSS → JS → SVG/Canvas → WebGL → WebGPU, performance and debugging in every lesson.",
        "basis": [
          "Original curriculum-notes.md (plans preserved on each stub)"
        ]
      },
      "children": [
        {
          "type": "group",
          "id": "anim-css",
          "title": "CSS foundations",
          "summary": "The pipeline and the CSS animation primitives — transitions, transforms, keyframes, and profiling them.",
          "children": [
            {
              "type": "lesson",
              "id": "anim-01",
              "title": "1. The Browser Rendering Pipeline",
              "pip": "#7d68b3",
              "blurb": "How browsers turn HTML and CSS into pixels — Style, Layout, Paint, Composite. The mental model every other lesson builds on.",
              "tags": [
                "fundamentals",
                "performance",
                "pipeline"
              ],
              "plan": {
                "goals": [
                  "Understand the full journey from a CSS property change to pixels on screen",
                  "Know the difference between layout, paint, and composite — and why it matters",
                  "Internalize which operations are \"expensive\" and which are \"free\" (GPU-composited)",
                  "Establish the mental model that all future lessons build on"
                ],
                "concepts": [
                  "The rendering pipeline stages: Style → Layout → Paint → Composite",
                  "What triggers each stage — changing `width` vs. `transform` vs. `opacity`",
                  "The concept of layers: when the browser promotes an element to its own compositor layer",
                  "The main thread vs. the compositor thread — why compositor-only animations don't block JS",
                  "Reflow vs. repaint vs. composite-only: the cost hierarchy",
                  "What \"60fps\" actually means: 16.67ms budget per frame"
                ],
                "takeaways": [
                  "`transform` and `opacity` are the two properties that can animate entirely on the compositor thread — this is why they're the foundation of performant animation",
                  "Changing `width`, `height`, `top`, `left`, `margin` etc. triggers layout — very expensive",
                  "Changing `background-color`, `box-shadow` etc. triggers paint — expensive",
                  "This lesson is the \"why\" behind every performance decision in the next 14 lessons"
                ],
                "connections": [
                  "Every subsequent lesson should be implicitly filtered through this model",
                  "Lesson 4 (CSS Performance & Debugging) is the direct follow-up with hands-on tools",
                  "Lesson 12 (DevTools Mastery) returns to this model with full profiling capability",
                  "Reference back to this lesson whenever a new technique is introduced: \"what pipeline stage does this touch?\""
                ],
                "build": "Walk through a simple CSS hover animation step by step through the pipeline Show csstriggers.com (or equivalent) as a reference tool"
              },
              "overlaps": [
                "fe-6.2",
                "fe-8.1"
              ],
              "status": "built",
              "file": "sections/rendering-performance-motion/courses/web-animation/lessons/lesson-01-browser-rendering-pipeline.html",
              "anchors": [
                {
                  "id": "anim01-1",
                  "title": "Why this matters",
                  "anchor": "sec-1"
                },
                {
                  "id": "anim01-2",
                  "title": "The mental model",
                  "anchor": "sec-2"
                },
                {
                  "id": "anim01-3",
                  "title": "How it works",
                  "anchor": "sec-3"
                },
                {
                  "id": "anim01-4",
                  "title": "Code in practice",
                  "anchor": "sec-4"
                },
                {
                  "id": "anim01-5",
                  "title": "Performance & debugging",
                  "anchor": "sec-5"
                },
                {
                  "id": "anim01-6",
                  "title": "Connections",
                  "anchor": "sec-6"
                },
                {
                  "id": "anim01-7",
                  "title": "Further reading",
                  "anchor": "sec-7"
                },
                {
                  "id": "anim01-8",
                  "title": "Practical anchor — Build it",
                  "anchor": "sec-8"
                }
              ],
              "examples": [
                {
                  "title": "Interactive examples",
                  "file": "sections/rendering-performance-motion/courses/web-animation/examples/lesson-01-browser-rendering-pipeline/index.html"
                }
              ],
              "dates": {
                "created": "2026-06-02",
                "updated": "2026-06-02",
                "verified": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Created in the Web Animation & Motion Graphics project"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported into the hub; restyled to Sky Cartridge theme"
                }
              ],
              "rebuild": {
                "brief": "Lesson 1 of the 15-lesson Web Animation & Motion Graphics curriculum. Build: Walk through a simple CSS hover animation step by step through the pipeline Show csstriggers.com (or equivalent) as a reference tool",
                "basis": [
                  "Curriculum plan (see Plan on the outline page)",
                  "MDN, web.dev, Chrome Developers, W3C specs cited in the lesson's Further reading"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-02",
              "title": "2. CSS Transitions & Transforms",
              "pip": "#7d68b3",
              "blurb": "The simplest animation primitive in CSS. Four interactive experiments: transition explorer, transform order, transform origin, and 3D card flip.",
              "tags": [
                "css",
                "transitions",
                "transforms",
                "3d"
              ],
              "plan": {
                "goals": [
                  "Understand `transition` as the simplest form of CSS animation",
                  "Master the `transform` property and all its functions",
                  "Understand 3D transforms and the concept of perspective",
                  "Know how transforms relate to the compositor (connecting back to Lesson 1)"
                ],
                "concepts": [
                  "`transition` syntax: property, duration, easing, delay",
                  "`transform` functions: `translate`, `scale`, `rotate`, `skew`, `matrix`",
                  "Transform origin — the pivot point of a transformation",
                  "3D transforms: `rotateX/Y/Z`, `translateZ`, `perspective`, `transform-style: preserve-3d`",
                  "The transform coordinate system — transforms compound in order",
                  "`backface-visibility` and when it matters"
                ],
                "takeaways": [
                  "Transforms don't affect layout — the element's box model stays put, only the visual representation moves",
                  "3D transforms force layer promotion — useful, but has memory costs",
                  "Transform order matters: `translateX(100px) rotate(45deg)` ≠ `rotate(45deg) translateX(100px)`",
                  "Transitions are stateless — they react to state changes, they don't describe a sequence"
                ],
                "connections": [
                  "Directly applies Lesson 1's cost hierarchy: transforms are safe, position properties are not",
                  "Lesson 3 extends this with `@keyframes` for multi-step sequences",
                  "Lesson 7 (GSAP) will abstract this but understanding the underlying CSS is essential for debugging",
                  "3D transform foundation reappears in Lesson 13 (WebGL coordinate spaces)"
                ],
                "build": "Build a card flip animation using `rotateY` and `preserve-3d` Demonstrate the transform order gotcha with a visual example"
              },
              "overlaps": [],
              "status": "built",
              "file": "sections/rendering-performance-motion/courses/web-animation/lessons/lesson-02-css-transitions-transforms.html",
              "anchors": [
                {
                  "id": "anim02-1",
                  "title": "Why this matters",
                  "anchor": "sec-1"
                },
                {
                  "id": "anim02-2",
                  "title": "The mental model",
                  "anchor": "sec-2"
                },
                {
                  "id": "anim02-3",
                  "title": "How it works",
                  "anchor": "sec-3"
                },
                {
                  "id": "anim02-4",
                  "title": "Performance & debugging",
                  "anchor": "sec-4"
                },
                {
                  "id": "anim02-5",
                  "title": "Connections",
                  "anchor": "sec-5"
                },
                {
                  "id": "anim02-6",
                  "title": "Further reading",
                  "anchor": "sec-6"
                },
                {
                  "id": "anim02-7",
                  "title": "Practical anchor — Build it",
                  "anchor": "sec-7"
                }
              ],
              "examples": [
                {
                  "title": "Interactive examples",
                  "file": "sections/rendering-performance-motion/courses/web-animation/examples/lesson-02-css-transitions-transforms/index.html"
                }
              ],
              "dates": {
                "created": "2026-06-03",
                "updated": "2026-06-03",
                "verified": "2026-06-03"
              },
              "history": [
                {
                  "date": "2026-06-03",
                  "note": "Created in the Web Animation & Motion Graphics project"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported into the hub; restyled to Sky Cartridge theme"
                }
              ],
              "rebuild": {
                "brief": "Lesson 2 of the 15-lesson Web Animation & Motion Graphics curriculum. Build: Build a card flip animation using `rotateY` and `preserve-3d` Demonstrate the transform order gotcha with a visual example",
                "basis": [
                  "Curriculum plan (see Plan on the outline page)",
                  "MDN, web.dev, Chrome Developers, W3C specs cited in the lesson's Further reading"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-03",
              "title": "3. CSS Keyframe Animations",
              "pip": "#7d68b3",
              "blurb": "@keyframes, fill-mode, direction, steps(), staggering, animation-composition, partial keyframes, and the new CSS scroll-driven animation API — all without JavaScript.",
              "tags": [
                "css",
                "keyframes",
                "animation",
                "scroll-driven"
              ],
              "plan": {
                "goals": [
                  "Understand `@keyframes` as a way to describe multi-step animation sequences",
                  "Master all `animation-*` properties and know when to use each",
                  "Deeply understand timing functions — including how to read and write cubic-bezier curves",
                  "Know the difference between `animation-fill-mode` options and why it trips people up"
                ],
                "concepts": [
                  "`@keyframes` syntax: named, `from/to`, percentage steps",
                  "`animation` shorthand and individual properties: name, duration, timing-function, delay, iteration-count, direction, fill-mode, play-state",
                  "Timing functions: `ease`, `linear`, `ease-in-out`, `cubic-bezier()`, `steps()`",
                  "`animation-fill-mode`: `none`, `forwards`, `backwards`, `both` — and the mental model for each",
                  "`animation-direction`: `normal`, `reverse`, `alternate`, `alternate-reverse`",
                  "Staggering multiple animations with delays",
                  "`animation-timeline` and scroll-driven animations (CSS scroll-linked)"
                ],
                "takeaways": [
                  "Cubic-bezier defines velocity over time, not position — the curve's y-axis is progress, not space",
                  "`steps()` is underused and very useful for sprite animation and mechanical motion",
                  "`fill-mode: forwards` is one of the most common sources of \"why isn't my animation staying?\"",
                  "CSS scroll-driven animation (`animation-timeline: scroll()`) is now well-supported and removes the need for JS scroll listeners in many cases"
                ],
                "connections": [
                  "Builds on Lesson 2's transition foundation — keyframes are the more powerful, explicit version",
                  "Timing functions reappear in Lesson 5 (JS easing math) — CSS and JS easing are the same underlying math",
                  "Scroll-driven animation connects forward to Lesson 8 (GSAP ScrollTrigger) — know both approaches",
                  "`steps()` connects to Lesson 10 (Canvas sprite animation)"
                ],
                "build": "Animate a loading spinner using `steps()` vs `linear` to see the difference viscerally Use a cubic-bezier visualizer to build a custom \"snap\" easing from scratch"
              },
              "overlaps": [],
              "status": "built",
              "file": "sections/rendering-performance-motion/courses/web-animation/lessons/lesson-03-css-keyframe-animations.html",
              "anchors": [
                {
                  "id": "anim03-1",
                  "title": "Why this matters",
                  "anchor": "sec-1"
                },
                {
                  "id": "anim03-2",
                  "title": "The mental model",
                  "anchor": "sec-2"
                },
                {
                  "id": "anim03-3",
                  "title": "How it works",
                  "anchor": "sec-3"
                },
                {
                  "id": "anim03-4",
                  "title": "Performance & debugging",
                  "anchor": "sec-4"
                },
                {
                  "id": "anim03-5",
                  "title": "Connections",
                  "anchor": "sec-5"
                },
                {
                  "id": "anim03-6",
                  "title": "Further reading",
                  "anchor": "sec-6"
                },
                {
                  "id": "anim03-7",
                  "title": "Practical anchor — Build it",
                  "anchor": "sec-7"
                }
              ],
              "examples": [
                {
                  "title": "Interactive examples",
                  "file": "sections/rendering-performance-motion/courses/web-animation/examples/lesson-03-css-keyframe-animations/index.html"
                }
              ],
              "dates": {
                "created": "2026-06-05",
                "updated": "2026-06-05",
                "verified": "2026-06-05"
              },
              "history": [
                {
                  "date": "2026-06-05",
                  "note": "Created in the Web Animation & Motion Graphics project"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported into the hub; restyled to Sky Cartridge theme"
                }
              ],
              "rebuild": {
                "brief": "Lesson 3 of the 15-lesson Web Animation & Motion Graphics curriculum. Build: Animate a loading spinner using `steps()` vs `linear` to see the difference viscerally Use a cubic-bezier visualizer to build a custom \"snap\" easing from scratch",
                "basis": [
                  "Curriculum plan (see Plan on the outline page)",
                  "MDN, web.dev, Chrome Developers, W3C specs cited in the lesson's Further reading"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-04",
              "title": "4. CSS Animation Performance & Debugging",
              "pip": "#7d68b3",
              "blurb": "Hands-on DevTools: Animations panel, Rendering tab, paint flashing, layer inspection. Build the instinct for spotting jank before users do.",
              "tags": [
                "performance",
                "devtools",
                "css"
              ],
              "plan": {
                "goals": [
                  "Learn to use DevTools to identify and fix CSS animation performance problems",
                  "Understand layer promotion: when it helps, when it hurts",
                  "Know what `will-change` does and how to use it responsibly",
                  "Establish a debugging workflow that will carry through the whole course"
                ],
                "concepts": [
                  "Chrome DevTools: Rendering tab (paint flashing, layer borders, FPS meter)",
                  "Layers panel: viewing the compositor layer tree",
                  "`will-change`: what it does (pre-promotes layers), the cost (memory), when to use/remove it",
                  "Paint flashing: identifying which elements are being repainted each frame",
                  "Forced synchronous layout (layout thrashing): what causes it, how to spot it",
                  "`contain` property as a layout isolation tool",
                  "GPU rasterization flags in Chrome"
                ],
                "takeaways": [
                  "`will-change: transform` is not a magic performance fix — it trades paint cost for memory cost",
                  "Too many promoted layers can be worse than not promoting at all (GPU memory limits)",
                  "The best debugging loop: render visually → check Layers panel → check Performance timeline → fix → repeat",
                  "Layout thrashing often happens in JS, not CSS — but knowing it here prepares for Lesson 5"
                ],
                "connections": [
                  "This is the practical application of Lesson 1's theory",
                  "Establishes the DevTools workflow that Lesson 12 will expand dramatically",
                  "`will-change` reappears in Lesson 7 (GSAP automatically sets it in some cases)",
                  "The concept of \"what triggers layout\" comes up again in Lesson 5 and 6"
                ],
                "build": "Take a janky animation (deliberately using `left`/`top` instead of `transform`) and profile it, then fix it and compare"
              },
              "overlaps": [
                "fe-2.4",
                "fe-6.2",
                "fe-6.3"
              ],
              "status": "built",
              "file": "sections/rendering-performance-motion/courses/web-animation/lessons/lesson-04-css-animation-performance.html",
              "anchors": [
                {
                  "id": "anim04-1",
                  "title": "The rendering pipeline",
                  "anchor": "pipeline"
                },
                {
                  "id": "anim04-2",
                  "title": "The 16ms frame budget",
                  "anchor": "budget"
                },
                {
                  "id": "anim04-3",
                  "title": "Property cost — at a glance",
                  "anchor": "cost"
                },
                {
                  "id": "anim04-4",
                  "title": "Main thread vs compositor thread",
                  "anchor": "threads"
                },
                {
                  "id": "anim04-5",
                  "title": "The will-change property",
                  "anchor": "will-change"
                },
                {
                  "id": "anim04-6",
                  "title": "The DevTools workflow",
                  "anchor": "devtools"
                },
                {
                  "id": "anim04-7",
                  "title": "Layout thrashing",
                  "anchor": "thrashing"
                },
                {
                  "id": "anim04-8",
                  "title": "The contain property",
                  "anchor": "contain"
                },
                {
                  "id": "anim04-9",
                  "title": "Ship checklist",
                  "anchor": "checklist"
                },
                {
                  "id": "anim04-10",
                  "title": "Further reading",
                  "anchor": "sec-10"
                },
                {
                  "id": "anim04-11",
                  "title": "Practical: profile and fix a janky animation",
                  "anchor": "sec-11"
                }
              ],
              "examples": [
                {
                  "title": "Interactive examples",
                  "file": "sections/rendering-performance-motion/courses/web-animation/examples/lesson-04-animation-performance/index.html"
                }
              ],
              "dates": {
                "created": "2026-06-12",
                "updated": "2026-06-12",
                "verified": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Created in the Web Animation & Motion Graphics project"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported into the hub; restyled to Sky Cartridge theme"
                }
              ],
              "rebuild": {
                "brief": "Lesson 4 of the 15-lesson Web Animation & Motion Graphics curriculum. Build: Take a janky animation (deliberately using `left`/`top` instead of `transform`) and profile it, then fix it and compare",
                "basis": [
                  "Curriculum plan (see Plan on the outline page)",
                  "MDN, web.dev, Chrome Developers, W3C specs cited in the lesson's Further reading"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "anim-js",
          "title": "JavaScript animation",
          "summary": "rAF from first principles and the Web Animations API.",
          "children": [
            {
              "type": "lesson",
              "id": "anim-05",
              "title": "5. JavaScript Animation Fundamentals",
              "pip": "#7d68b3",
              "blurb": "requestAnimationFrame from first principles — the game loop, delta time, easing functions by hand, and why rAF is the only right way to animate with JS.",
              "tags": [
                "javascript",
                "rAF",
                "animation-loop"
              ],
              "plan": {
                "goals": [
                  "Understand `requestAnimationFrame` as the foundation of all JS animation",
                  "Build a working animation loop from scratch without any libraries",
                  "Understand delta time and why it's essential for frame-rate-independent animation",
                  "Write easing functions from first principles"
                ],
                "concepts": [
                  "`requestAnimationFrame`: how it works, its callback argument (timestamp), the loop pattern",
                  "The game loop: update → render → repeat",
                  "Delta time: calculating time elapsed between frames, why fixed-speed animation breaks at different frame rates",
                  "Easing functions as math: linear, quadratic, cubic, `easeInOut` — the formulas and what they mean",
                  "Lerp (linear interpolation): the fundamental building block of smooth animation",
                  "Cancelling animation: `cancelAnimationFrame`",
                  "When JS animation is appropriate vs. CSS animation"
                ],
                "takeaways": [
                  "rAF syncs to the display refresh rate — it's not a timer, it's a render hook",
                  "Delta time is non-negotiable for correct animation: `position += speed * deltaTime`, not `position += speed`",
                  "All animation libraries (GSAP, etc.) are built on rAF — knowing this demystifies them",
                  "Lerp produces a natural \"exponential ease out\" feel and is everywhere in creative coding"
                ],
                "connections": [
                  "Direct continuation of the \"what is a frame\" model from Lesson 1",
                  "Easing math from this lesson is the same math CSS cubic-bezier uses (Lesson 3)",
                  "Lesson 6 (WAAPI) and Lesson 7 (GSAP) both build on this — WAAPI is browser-native rAF abstraction, GSAP is a higher-level one",
                  "The game loop pattern recurs in Lesson 10 (Canvas), Lesson 13 (WebGL), Lesson 14 (Three.js)"
                ],
                "build": "Build a ball that moves from A to B using raw rAF + delta time + a custom easing function — no libraries"
              },
              "overlaps": [
                "gameloops",
                "fe-6.4"
              ],
              "status": "built",
              "file": "sections/rendering-performance-motion/courses/web-animation/lessons/lesson-05-javascript-animation-fundamentals.html",
              "anchors": [
                {
                  "id": "anim05-1",
                  "title": "Why requestAnimationFrame exists",
                  "anchor": "hook"
                },
                {
                  "id": "anim05-2",
                  "title": "The mental model: frames and render loops",
                  "anchor": "mental-model"
                },
                {
                  "id": "anim05-3",
                  "title": "The problem with setInterval",
                  "anchor": "setinterval-problem"
                },
                {
                  "id": "anim05-4",
                  "title": "The requestAnimationFrame loop",
                  "anchor": "raf-loop"
                },
                {
                  "id": "anim05-5",
                  "title": "Delta time — frame-rate independence",
                  "anchor": "delta-time"
                },
                {
                  "id": "anim05-6",
                  "title": "Easing functions from scratch",
                  "anchor": "easing"
                },
                {
                  "id": "anim05-7",
                  "title": "The game loop: start, stop, pause, resume",
                  "anchor": "game-loop"
                },
                {
                  "id": "anim05-8",
                  "title": "Performance & debugging",
                  "anchor": "performance"
                },
                {
                  "id": "anim05-9",
                  "title": "Connections",
                  "anchor": "connections"
                },
                {
                  "id": "anim05-10",
                  "title": "Further reading",
                  "anchor": "sec-10"
                },
                {
                  "id": "anim05-11",
                  "title": "Practical: ball from A to B — raw rAF, delta time, custom ea",
                  "anchor": "sec-11"
                }
              ],
              "examples": [
                {
                  "title": "Interactive examples",
                  "file": "sections/rendering-performance-motion/courses/web-animation/examples/lesson-05-javascript-animation-fundamentals/index.html"
                }
              ],
              "dates": {
                "created": "2026-08-25",
                "updated": "2026-08-25",
                "verified": "2026-08-25"
              },
              "history": [
                {
                  "date": "2026-08-25",
                  "note": "Created in the Web Animation & Motion Graphics project"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported into the hub; restyled to Sky Cartridge theme"
                }
              ],
              "rebuild": {
                "brief": "Lesson 5 of the 15-lesson Web Animation & Motion Graphics curriculum. Build: Build a ball that moves from A to B using raw rAF + delta time + a custom easing function — no libraries",
                "basis": [
                  "Curriculum plan (see Plan on the outline page)",
                  "MDN, web.dev, Chrome Developers, W3C specs cited in the lesson's Further reading"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-06",
              "title": "6. The Web Animations API (WAAPI)",
              "pip": "#7d68b3",
              "blurb": "The browser-native JS animation API: keyframes and timing in code, a playhead you can control, promises, composite modes, and the off-main-thread story.",
              "tags": [
                "javascript",
                "waapi",
                "web-standard"
              ],
              "file": "sections/rendering-performance-motion/courses/web-animation/lessons/lesson-06-web-animations-api.html",
              "anchors": [
                {
                  "id": "a06-fit",
                  "title": "Where WAAPI fits",
                  "anchor": "sec1"
                },
                {
                  "id": "a06-animate",
                  "title": "Your first animate()",
                  "anchor": "sec2"
                },
                {
                  "id": "a06-object",
                  "title": "The Animation object",
                  "anchor": "sec3"
                },
                {
                  "id": "a06-timing",
                  "title": "Timing and fill",
                  "anchor": "sec4"
                },
                {
                  "id": "a06-promises",
                  "title": "Sequencing with promises",
                  "anchor": "sec5"
                },
                {
                  "id": "a06-composite",
                  "title": "Composite modes",
                  "anchor": "sec6"
                },
                {
                  "id": "a06-end",
                  "title": "Keeping the end state",
                  "anchor": "sec7"
                },
                {
                  "id": "a06-thread",
                  "title": "Off the main thread",
                  "anchor": "sec8"
                },
                {
                  "id": "a06-timelines",
                  "title": "Scroll timelines and global control",
                  "anchor": "sec9"
                },
                {
                  "id": "a06-choose",
                  "title": "Choosing the right tool",
                  "anchor": "sec10"
                },
                {
                  "id": "a06-sources",
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
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                },
                {
                  "date": "2026-10-27",
                  "note": "Built from MDN and web.dev: live animate() playground, transport controls, timing and fill, promises, composite modes, end states, compositor demo, scroll timeline"
                }
              ],
              "rebuild": {
                "brief": "Lesson 6 of the Web Animation course: the Web Animations API in practice. Live demos of Element.animate options, the Animation object (currentTime, playbackRate, play/pause/reverse/finish/cancel), timing and fill, finished-promise sequencing, composite modes, commitStyles/persist, the compositor vs main-thread behavior, scroll timelines, and a choose-the-tool quiz. GSAP comparisons intentionally omitted (course no longer covers GSAP).",
                "basis": [
                  "MDN: Using the Web Animations API; Element.animate(); Animation; KeyframeEffect() options",
                  "web.dev: Animations and performance",
                  "Verify scroll-timeline browser support at build time"
                ]
              },
              "standard": "v1"
            }
          ]
        },
        {
          "type": "group",
          "id": "anim-2d",
          "title": "SVG & Canvas",
          "summary": "Vector animation, then immediate-mode drawing and creative coding.",
          "children": [
            {
              "type": "lesson",
              "id": "anim-09",
              "title": "9. SVG Animation",
              "pip": "#7d68b3",
              "blurb": "SVG as an animation target — path morphing, stroke animation, SMIL vs CSS vs JS, and making scalable animated illustrations.",
              "tags": [
                "svg",
                "paths",
                "morphing"
              ],
              "plan": {
                "goals": [
                  "Understand SVG's coordinate system and how it differs from HTML",
                  "Animate SVG paths, strokes, and shapes with CSS and GSAP",
                  "Know the key techniques: stroke dasharray, morphing, path motion",
                  "Understand when SVG animation is the right tool"
                ],
                "concepts": [
                  "SVG viewport, viewBox, and coordinate system",
                  "SVG-specific CSS properties: `stroke-dasharray`, `stroke-dashoffset` (the drawing trick)",
                  "Path morphing: how it works (matching node counts), tools for preparing SVGs",
                  "`clip-path` animation in SVG and CSS",
                  "`<animateMotion>` — native SVG animation along a path",
                  "MotionPath plugin (GSAP) for path-following",
                  "SMIL vs CSS vs JS animation for SVG: what to use when",
                  "Optimizing SVGs for animation: SVGO, path simplification"
                ],
                "takeaways": [
                  "The `stroke-dashoffset` trick is one of the most-used techniques in production — understand it at the math level",
                  "Morphing requires matching path node counts — preparing SVGs correctly is half the work",
                  "SVG coordinate system is its own mental model: transforms behave differently than HTML",
                  "SVG is resolution-independent and ideal for UI illustration, icons, and data visualization animation"
                ],
                "connections": [
                  "Extends Lessons 7 & 8 (GSAP) with SVG-specific application",
                  "Stroke animation math connects to Lesson 5 (manual interpolation)",
                  "SVG clip-path connects to masking concepts that reappear in WebGL (Lesson 13)",
                  "Path data connects forward to geometry in Three.js (Lesson 14)"
                ],
                "build": "Animate a logo: stroke draw-on, then morph between two icon states, then follow a curved path across screen"
              },
              "overlaps": [
                "fe-7.6"
              ],
              "status": "stub",
              "file": "shared/outline.html?id=anim-09",
              "anchors": [],
              "dates": {
                "planned": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build lesson 9 of the Web Animation course from its plan; match the imported lessons' structure (hook → mental model → how it works → performance → connections → build).",
                "basis": [
                  "Plan on this page",
                  "Research current MDN / web.dev / spec status first"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-10",
              "title": "10. Canvas 2D Fundamentals",
              "pip": "#7d68b3",
              "blurb": "The 2D drawing API — the render loop, immediate vs retained mode, particle systems, and when Canvas beats DOM-based approaches.",
              "tags": [
                "canvas",
                "2d",
                "javascript"
              ],
              "plan": {
                "goals": [
                  "Understand the Canvas 2D rendering context and its API",
                  "Build a working animation loop on canvas from scratch",
                  "Understand how canvas rendering differs fundamentally from DOM rendering",
                  "Draw, transform, and composite shapes and images"
                ],
                "concepts": [
                  "The canvas element: width/height, devicePixelRatio, context setup",
                  "2D context API: `fillRect`, `arc`, `beginPath`, `moveTo`, `lineTo`, `bezierCurveTo`",
                  "The state stack: `save()` / `restore()`",
                  "Transforms on canvas: `translate`, `rotate`, `scale` — how they compound",
                  "`clearRect` and the render loop: why you must clear each frame",
                  "Image drawing: `drawImage`, sprite sheets",
                  "Compositing modes: `globalCompositeOperation`",
                  "OffscreenCanvas for worker-based rendering"
                ],
                "takeaways": [
                  "Canvas is an immediate-mode renderer — there are no DOM nodes, you draw pixels every frame",
                  "This is a fundamentally different mental model from CSS/HTML animation — nothing \"remembers\" where it is",
                  "devicePixelRatio is essential for sharp rendering on high-DPI screens — always account for it",
                  "The `save()`/`restore()` stack is how you isolate transforms — skipping it causes cumulative transform bugs"
                ],
                "connections": [
                  "The rAF game loop from Lesson 5 is used directly here",
                  "Immediate-mode rendering is the conceptual bridge to WebGL (Lesson 13) — both work this way",
                  "Canvas compositing modes connect to CSS `mix-blend-mode` and WebGL blending",
                  "OffscreenCanvas connects to WebWorkers and threading — performance relevance"
                ],
                "build": "Build a solar system: orbiting circles, each with its own rotation, using save/restore to manage transforms"
              },
              "overlaps": [
                "fe-8.2"
              ],
              "status": "stub",
              "file": "shared/outline.html?id=anim-10",
              "anchors": [],
              "dates": {
                "planned": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build lesson 10 of the Web Animation course from its plan; match the imported lessons' structure (hook → mental model → how it works → performance → connections → build).",
                "basis": [
                  "Plan on this page",
                  "Research current MDN / web.dev / spec status first"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-11",
              "title": "11. Creative Coding on Canvas",
              "pip": "#7d68b3",
              "blurb": "Generative art patterns: noise, forces, emergence. Building things that feel alive — the creative-coding mindset applied to the web.",
              "tags": [
                "creative-coding",
                "generative",
                "canvas"
              ],
              "plan": {
                "goals": [
                  "Apply Canvas 2D to generative and creative work",
                  "Understand noise, randomness, and how to use them for organic motion",
                  "Build a particle system from scratch",
                  "Develop an intuition for creative coding as a practice"
                ],
                "concepts": [
                  "Perlin/Simplex noise: what it is, why it's better than `Math.random()` for motion",
                  "Particle systems: emitter pattern, particle lifecycle (birth, update, death)",
                  "Forces: gravity, friction, repulsion, attraction — applied to particle velocity",
                  "Flow fields: using noise to direct particle movement",
                  "`Math.random()` seeding and reproducible randomness",
                  "Color systems: HSL for generative color, lerping between colors",
                  "Performance considerations: object pooling, typed arrays for large particle counts"
                ],
                "takeaways": [
                  "Noise is one of the most important tools in creative coding — it produces organic, non-repetitive motion",
                  "Particle systems are both a creative tool and a technical pattern that scales to WebGL (instanced rendering)",
                  "The \"force accumulator\" pattern (sum forces, apply to velocity, apply velocity to position) is a physics simulation building block",
                  "Creative coding is a practice of exploration — build something, break it, modify a parameter, see what happens"
                ],
                "connections": [
                  "Direct extension of Lesson 10's Canvas foundation",
                  "Particle system pattern scales to WebGL instanced rendering (Lesson 13) and GPU compute (Lesson 15)",
                  "Noise functions reappear in GLSL shaders (Lesson 14) — same concept, different implementation",
                  "This lesson establishes the creative coding mindset that makes WebGPU exploration in Lesson 15 exciting rather than dry"
                ],
                "build": "Build a flow field: a grid of vectors driven by Perlin noise, with particles following the field and leaving trails"
              },
              "overlaps": [],
              "status": "stub",
              "file": "shared/outline.html?id=anim-11",
              "anchors": [],
              "dates": {
                "planned": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build lesson 11 of the Web Animation course from its plan; match the imported lessons' structure (hook → mental model → how it works → performance → connections → build).",
                "basis": [
                  "Plan on this page",
                  "Research current MDN / web.dev / spec status first"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "anim-tools",
          "title": "Profiling",
          "summary": "DevTools mastery for animation work.",
          "children": [
            {
              "type": "lesson",
              "id": "anim-12",
              "title": "12. DevTools Mastery",
              "pip": "#7d68b3",
              "blurb": "Deep dive into the Performance panel, flame charts, frame timings, memory, and building the habit of profiling before optimising.",
              "tags": [
                "devtools",
                "performance",
                "profiling"
              ],
              "plan": {
                "goals": [
                  "Be able to profile and diagnose any animation performance problem",
                  "Understand the Performance panel at depth: flame chart, frames, main thread, compositor",
                  "Know the full DevTools toolkit for animation work",
                  "Build a repeatable debugging workflow"
                ],
                "concepts": [
                  "Performance panel: recording, flame chart, frame timing, long tasks",
                  "Frames view: dropped frames, frame duration, compositor thread activity",
                  "Layers panel: layer tree, layer reasons, paint counts",
                  "Rendering tab: paint flashing, layer borders, FPS overlay, scrolling performance issues",
                  "Memory: heap snapshots, detecting memory leaks in animation loops",
                  "Animations panel: inspecting and scrubbing CSS/WAAPI animations",
                  "Lighthouse: automated performance auditing",
                  "`performance.mark()` and `performance.measure()` for custom timing in JS"
                ],
                "takeaways": [
                  "Most animation jank comes from one of three things: layout thrashing, excessive paint, or long JS tasks blocking the main thread — DevTools tells you exactly which",
                  "Memory leaks in animation loops are insidious — always cancel rAF loops, remove event listeners, and null references",
                  "The Animations panel lets you slow down and scrub CSS animations — invaluable for timing debugging",
                  "`performance.mark()` is how you instrument your own code — don't guess, measure"
                ],
                "connections": [
                  "This is the full realization of the debugging workflow started in Lesson 4",
                  "Applied to everything: every technique from Lessons 1–11 can be profiled here",
                  "Performance knowledge here feeds directly into WebGL (Lesson 13) and Three.js (Lesson 14) — GPU profiling becomes relevant",
                  "The memory leak patterns are especially important for Lesson 10/11 Canvas loops"
                ],
                "build": "Take a real, complex animation (scroll-driven, canvas particles, GSAP timeline) and run a full profiling session — identify and fix at least two issues"
              },
              "overlaps": [
                "fe-2.1",
                "fe-2.4",
                "fe-2.5"
              ],
              "status": "stub",
              "file": "shared/outline.html?id=anim-12",
              "anchors": [],
              "dates": {
                "planned": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build lesson 12 of the Web Animation course from its plan; match the imported lessons' structure (hook → mental model → how it works → performance → connections → build).",
                "basis": [
                  "Plan on this page",
                  "Research current MDN / web.dev / spec status first"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "anim-gpu",
          "title": "The GPU: WebGL → WebGPU",
          "summary": "Shaders, Three.js, and the modern WebGPU/WGSL pipeline.",
          "children": [
            {
              "type": "lesson",
              "id": "anim-13",
              "title": "13. WebGL & the GPU Pipeline",
              "pip": "#7d68b3",
              "blurb": "How WebGL works under the hood — the vertex → rasterise → fragment pipeline, buffers, attributes, uniforms, and your first GLSL shaders.",
              "tags": [
                "webgl",
                "gpu",
                "shaders"
              ],
              "plan": {
                "goals": [
                  "Understand what the GPU does differently from the CPU",
                  "Know the WebGL pipeline: vertex shader → rasterization → fragment shader",
                  "Write a raw WebGL program (triangle) without any library",
                  "Understand buffers, attributes, uniforms, and varyings"
                ],
                "concepts": [
                  "The GPU programming model: massively parallel, many small programs running simultaneously",
                  "WebGL pipeline stages: vertex shader → primitive assembly → rasterization → fragment shader → output",
                  "Buffers: sending geometry data to the GPU (VBOs)",
                  "Vertex shaders: transforming positions, `gl_Position`",
                  "Fragment shaders: determining pixel color, `gl_FragColor`",
                  "Uniforms: passing data from CPU to GPU (time, mouse, resolution)",
                  "Varyings: passing data from vertex to fragment shader",
                  "GLSL basics: types (`vec2`, `vec3`, `vec4`, `mat4`), swizzling, built-in functions",
                  "The WebGL context setup boilerplate"
                ],
                "takeaways": [
                  "Shaders run on every vertex / every pixel simultaneously — this is why the GPU is so fast at visual work",
                  "You cannot iterate over pixels in a fragment shader the way you'd think — the shader *is* the loop",
                  "WebGL is verbose and low-level by design — the goal is to understand the model, not to build production apps in raw WebGL",
                  "Everything in Three.js (Lesson 14) is an abstraction of exactly what you write here"
                ],
                "connections": [
                  "The GPU pipeline is the next level of Lesson 1's rendering model — now you're inside the compositor",
                  "The game loop pattern from Lesson 5 and Lesson 10 applies here (rAF drives WebGL rendering too)",
                  "Uniforms (especially `u_time` and `u_resolution`) enable the generative shader work in Lesson 14",
                  "WebGL's explicit buffer management is replaced by WebGPU's more structured pipeline (Lesson 15)"
                ],
                "build": "Draw a triangle. Then pass a `u_time` uniform and make its color pulse. Small goal, massive conceptual step."
              },
              "overlaps": [
                "fe-8.1",
                "fe-8.3"
              ],
              "status": "stub",
              "file": "shared/outline.html?id=anim-13",
              "anchors": [],
              "dates": {
                "planned": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build lesson 13 of the Web Animation course from its plan; match the imported lessons' structure (hook → mental model → how it works → performance → connections → build).",
                "basis": [
                  "Plan on this page",
                  "Research current MDN / web.dev / spec status first"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-14",
              "title": "14. Three.js + GLSL Shaders",
              "pip": "#7d68b3",
              "blurb": "Three.js as a productive WebGL layer — scene, camera, geometry, materials — plus writing custom ShaderMaterial to go beyond the built-ins.",
              "tags": [
                "threejs",
                "glsl",
                "3d"
              ],
              "plan": {
                "goals": [
                  "Use Three.js as a productive WebGL abstraction",
                  "Understand the Three.js scene graph: scene, camera, renderer, mesh, geometry, material",
                  "Write custom shaders (ShaderMaterial) within Three.js",
                  "Combine GSAP and Three.js for production-quality 3D animation"
                ],
                "concepts": [
                  "Three.js scene graph: `Scene`, `PerspectiveCamera`, `WebGLRenderer`, `Mesh`, `BufferGeometry`, `Material`",
                  "Built-in geometries and materials; PBR materials (`MeshStandardMaterial`)",
                  "Lighting: `AmbientLight`, `DirectionalLight`, shadows",
                  "Custom `ShaderMaterial`: uniforms, `vertexShader`, `fragmentShader` strings",
                  "GLSL in practice: noise functions, displacement, color mixing, UV coordinates",
                  "Post-processing: `EffectComposer`, bloom, depth of field",
                  "Connecting GSAP to Three.js: animating `.position`, `.rotation`, material uniforms",
                  "Performance in Three.js: instancing, draw call reduction, LOD"
                ],
                "takeaways": [
                  "The scene graph is a coordinate space hierarchy — each child's transform is relative to its parent",
                  "`ShaderMaterial` is where Three.js and raw GLSL meet — this is the creative frontier",
                  "UV coordinates are how you map 2D texture space onto 3D geometry — fundamental to shader work",
                  "GSAP + Three.js is the industry-standard combo for interactive 3D web experiences"
                ],
                "connections": [
                  "Synthesizes Lessons 5, 7, 10, 11, 13 — rAF loop, GSAP, Canvas creative thinking, WebGL knowledge",
                  "Post-processing connects to compositing concepts from Lessons 1 and 6",
                  "Shader work here is the foundation for WGSL in Lesson 15",
                  "This is the lesson most directly aligned with creative developer job requirements"
                ],
                "build": "Build an interactive 3D sphere with a custom displacement shader driven by noise + mouse position, animated in with GSAP"
              },
              "overlaps": [
                "fe-8.5"
              ],
              "status": "stub",
              "file": "shared/outline.html?id=anim-14",
              "anchors": [],
              "dates": {
                "planned": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build lesson 14 of the Web Animation course from its plan; match the imported lessons' structure (hook → mental model → how it works → performance → connections → build).",
                "basis": [
                  "Plan on this page",
                  "Research current MDN / web.dev / spec status first"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "anim-15",
              "title": "15. WebGPU + WGSL",
              "pip": "#7d68b3",
              "blurb": "The modern GPU API — render pipelines, compute shaders, WGSL syntax, and why WebGPU unlocks workloads that WebGL can't touch.",
              "tags": [
                "webgpu",
                "wgsl",
                "compute"
              ],
              "plan": {
                "goals": [
                  "Understand what WebGPU is and why it supersedes WebGL",
                  "Set up a WebGPU render pipeline from scratch",
                  "Write basic WGSL shaders",
                  "Understand compute shaders as a capability unavailable in WebGL",
                  "Know where WebGPU is headed and how to follow its development"
                ],
                "concepts": [
                  "The WebGPU architecture: `GPUAdapter`, `GPUDevice`, `GPUCanvasContext`",
                  "Render pipelines vs. compute pipelines",
                  "WGSL (WebGPU Shading Language): syntax differences from GLSL, type system, attributes",
                  "Vertex and fragment shaders in WGSL",
                  "Compute shaders: running arbitrary GPU computation (particle simulation, image processing)",
                  "Bind groups and the binding model — more explicit than WebGL uniforms",
                  "WebGPU's multi-threaded design and `GPUBuffer` / `GPUTexture`",
                  "Current browser support and the polyfill landscape",
                  "Libraries built on WebGPU: Three.js WebGPU renderer (emerging)"
                ],
                "takeaways": [
                  "WebGPU's compute shaders are a genuine paradigm shift — particle simulations of millions of particles, entirely on the GPU",
                  "WGSL is stricter and more explicit than GLSL — this is a feature, not a bug",
                  "WebGPU is the future of GPU on the web; investing in it now is genuinely forward-looking",
                  "The binding model mirrors how modern native GPU APIs (Metal, Vulkan, DX12) work — this knowledge transfers"
                ],
                "connections": [
                  "Synthesizes the entire arc: rendering pipeline (Lesson 1), shader math (Lessons 13–14), creative coding ambition (Lesson 11)",
                  "Compute shaders make the particle system from Lesson 11 scale to millions — a satisfying full-circle moment",
                  "This lesson is explicitly a beginning, not an end — WebGPU is rapidly evolving",
                  "Point toward next steps: wgpu-rs, Dawn, Three.js WebGPU renderer, compute-heavy creative work"
                ],
                "build": "Render a triangle in WebGPU (the \"hello world\"), then write a compute shader that updates particle positions on the GPU each frame — visualize the output"
              },
              "overlaps": [
                "fe-8.4"
              ],
              "status": "stub",
              "file": "shared/outline.html?id=anim-15",
              "anchors": [],
              "dates": {
                "planned": "2026-06-02"
              },
              "history": [
                {
                  "date": "2026-06-02",
                  "note": "Planned in the Web Animation curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build lesson 15 of the Web Animation course from its plan; match the imported lessons' structure (hook → mental model → how it works → performance → connections → build).",
                "basis": [
                  "Plan on this page",
                  "Research current MDN / web.dev / spec status first"
                ]
              }
            }
          ]
        }
      ]
    },
    {
      "type": "group",
      "kind": "module",
      "label": "COURSE",
      "id": "fe-perf",
      "title": "Course: FE Web Performance Workshop",
      "home": "shared/outline.html?id=fe-perf",
      "pip": "#5458a8",
      "summary": "54 lessons in 9 independent clusters — performance through the lens of a UI/UX engineer: how fast it feels, how smoothly it moves, and how to prove it.",
      "throughline": "Clusters are independent; lessons within a cluster build on each other.",
      "paths": [
        "\"I want to fix a janky UI\" → Clusters 2 → 6 → 4",
        "\"My page loads too slowly\" → Clusters 1 → 3 → 7",
        "\"My React app is sluggish\" → Clusters 4 → 5 → 2",
        "\"I'm building a rich visual experience\" → Clusters 6 → 8 → 2",
        "\"I need to prove performance to stakeholders\" → Clusters 1 → 9",
        "\"Full workshop, start to finish\" → 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9"
      ],
      "dates": {
        "created": "2026-06-12",
        "updated": "2026-07-21",
        "verified": "2026-07-21"
      },
      "history": [
        {
          "date": "2026-06-12",
          "note": "Curriculum planned (9 clusters, 54 lessons — the original notes said 55)"
        },
        {
          "date": "2026-07-21",
          "note": "Lesson 1.1 built"
        },
        {
          "date": "2026-10-23",
          "note": "Imported into the hub from 'FE Web Performance Workshop'; 54 lessons carried over as stubs"
        }
      ],
      "rebuild": {
        "brief": "UI-engineer-centred web performance workshop, clusters 1–9.",
        "basis": [
          "Original curriculum.md (concepts preserved on each stub)"
        ]
      },
      "children": [
        {
          "type": "group",
          "id": "fe-c1",
          "title": "1. Measuring What Matters: Core Web Vitals",
          "summary": "Before optimizing anything, you need a shared language for what \"fast\" and \"good\" actually mean. These are the metrics Google uses, the industry tracks, and that directly affect user experience.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-1.1",
              "title": "1.1 The Three Vitals",
              "pip": "#5458a8",
              "blurb": "LCP, INP, CLS — what they measure, what \"good\" looks like, and why each one maps to a felt user experience",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "LCP, INP, CLS — what they measure, what \"good\" looks like, and why each one maps to a felt user experience"
                ],
                "notes": []
              },
              "status": "built",
              "file": "sections/rendering-performance-motion/courses/fe-perf/clusters/01-core-web-vitals/1.1-the-three-vitals/lesson.html",
              "anchors": [
                {
                  "id": "fe1-1-1",
                  "title": "Why This Matters",
                  "anchor": "sec-1"
                },
                {
                  "id": "fe1-1-2",
                  "title": "The Three Vitals at a Glance",
                  "anchor": "sec-2"
                },
                {
                  "id": "fe1-1-3",
                  "title": "LCP — Largest Contentful Paint",
                  "anchor": "sec-3"
                },
                {
                  "id": "fe1-1-4",
                  "title": "INP — Interaction to Next Paint",
                  "anchor": "sec-4"
                },
                {
                  "id": "fe1-1-5",
                  "title": "CLS — Cumulative Layout Shift",
                  "anchor": "sec-5"
                },
                {
                  "id": "fe1-1-6",
                  "title": "The 75th Percentile Rule",
                  "anchor": "sec-6"
                },
                {
                  "id": "fe1-1-7",
                  "title": "Measuring All Three in Code",
                  "anchor": "sec-7"
                },
                {
                  "id": "fe1-1-8",
                  "title": "Live Simulator",
                  "anchor": "sec-8"
                },
                {
                  "id": "fe1-1-9",
                  "title": "In the Wild",
                  "anchor": "sec-9"
                },
                {
                  "id": "fe1-1-10",
                  "title": "Key Takeaways",
                  "anchor": "sec-10"
                }
              ],
              "examples": [
                {
                  "title": "Examples hub",
                  "file": "sections/rendering-performance-motion/courses/fe-perf/clusters/01-core-web-vitals/1.1-the-three-vitals/examples/index.html",
                  "standalone": false
                },
                {
                  "title": "Diagnose the Page",
                  "file": "sections/rendering-performance-motion/courses/fe-perf/clusters/01-core-web-vitals/1.1-the-three-vitals/examples/diagnose-the-page.html",
                  "standalone": true
                },
                {
                  "title": "Field Data Simulator",
                  "file": "sections/rendering-performance-motion/courses/fe-perf/clusters/01-core-web-vitals/1.1-the-three-vitals/examples/vitals-field-simulator.html",
                  "standalone": true
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
                  "note": "Built in the FE Web Performance Workshop (lesson + examples hub + 2 scenarios)"
                },
                {
                  "date": "2026-07-28",
                  "note": "Re-themed in original project"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported into the hub; restyled; old workshop nav removed"
                }
              ],
              "rebuild": {
                "brief": "LCP/INP/CLS, the 75th-percentile rule, web-vitals.js, live simulator, experiments, and 2 standalone diagnosis scenarios.",
                "basis": [
                  "web.dev Core Web Vitals docs",
                  "web-vitals.js README",
                  "Chrome UX Report docs"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-1.2",
              "title": "1.2 Deconstructing LCP",
              "pip": "#5458a8",
              "blurb": "The 4-phase waterfall (TTFB → resource delay → load time → render delay); which phase is your bottleneck?",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "The 4-phase waterfall (TTFB → resource delay → load time → render delay); which phase is your bottleneck?"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-1.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 1.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-1.3",
              "title": "1.3 INP vs. Old FID",
              "pip": "#5458a8",
              "blurb": "Why FID was retired, what INP actually measures (full input latency, not just the first event), and why it's harder to fix",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Why FID was retired, what INP actually measures (full input latency, not just the first event), and why it's harder to fix"
                ],
                "notes": [
                  "FID officially deprecated Mar 2024 — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-1.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 1.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-1.4",
              "title": "1.4 CLS & Layout Instability",
              "pip": "#5458a8",
              "blurb": "What causes unexpected layout shifts, how to audit them, and the specific culprits in UI-heavy apps (font swaps, dynamic content, image aspect ratios)",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "What causes unexpected layout shifts, how to audit them, and the specific culprits in UI-heavy apps (font swaps, dynamic content, image aspect ratios)"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-1.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 1.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-1.5",
              "title": "1.5 Field vs. Lab Data",
              "pip": "#5458a8",
              "blurb": "RUM vs. synthetic testing — why your local Lighthouse score lies, and how to use both sources correctly",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "RUM vs. synthetic testing — why your local Lighthouse score lies, and how to use both sources correctly"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-1.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 1.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c2",
          "title": "2. Your Diagnostic Toolkit: DevTools & Profiling",
          "summary": "Every optimization hypothesis should be tested before code is written. DevTools is your lab.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-2.1",
              "title": "2.1 The Performance Panel",
              "pip": "#2f7fa8",
              "blurb": "Recording traces, reading the flame chart, identifying long tasks (>50ms), and understanding the call stack",
              "overlaps": [
                "anim-12"
              ],
              "plan": {
                "concepts": [
                  "Recording traces, reading the flame chart, identifying long tasks (>50ms), and understanding the call stack"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-2.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 2.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-2.2",
              "title": "2.2 Local Overrides",
              "pip": "#2f7fa8",
              "blurb": "Intercepting network requests to test hypotheses (swap images, delete scripts, modify CSS) without touching the codebase",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Intercepting network requests to test hypotheses (swap images, delete scripts, modify CSS) without touching the codebase"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-2.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 2.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-2.3",
              "title": "2.3 CPU & Network Throttling",
              "pip": "#2f7fa8",
              "blurb": "Simulating real-world conditions; why 6x CPU slowdown reveals bugs your M3 chip hides",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Simulating real-world conditions; why 6x CPU slowdown reveals bugs your M3 chip hides"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-2.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 2.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-2.4",
              "title": "2.4 Layers & Compositing Panel",
              "pip": "#2f7fa8",
              "blurb": "Inspecting GPU layers, understanding why \"paint storms\" happen, and how to promote elements to their own compositor layer",
              "overlaps": [
                "anim-04"
              ],
              "plan": {
                "concepts": [
                  "Inspecting GPU layers, understanding why \"paint storms\" happen, and how to promote elements to their own compositor layer"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-2.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 2.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-2.5",
              "title": "2.5 Memory & Heap Snapshots",
              "pip": "#2f7fa8",
              "blurb": "Finding JS memory leaks that degrade performance over time — critical for long-running SPAs",
              "overlaps": [
                "anim-12"
              ],
              "plan": {
                "concepts": [
                  "Finding JS memory leaks that degrade performance over time — critical for long-running SPAs"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-2.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 2.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-2.6",
              "title": "2.6 Lighthouse & CrUX",
              "pip": "#2f7fa8",
              "blurb": "Running audits, reading the opportunity/diagnostic split, and pulling real-user data from the Chrome UX Report",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Running audits, reading the opportunity/diagnostic split, and pulling real-user data from the Chrome UX Report"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-2.6",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 2.6 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c3",
          "title": "3. Network & Loading Strategies",
          "summary": "The fastest request is the one you never make. This cluster covers how to control what loads, when it loads, and how to make navigation feel instant.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-3.1",
              "title": "3.1 The Critical Path",
              "pip": "#2f7a5e",
              "blurb": "What blocks rendering, what doesn't, and how to map your page's critical rendering path",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "What blocks rendering, what doesn't, and how to map your page's critical rendering path"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-3.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 3.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-3.2",
              "title": "3.2 Preload, Prefetch, Preconnect",
              "pip": "#2f7a5e",
              "blurb": "When to use each hint, common mistakes (preload everything anti-pattern), and impact on LCP",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "When to use each hint, common mistakes (preload everything anti-pattern), and impact on LCP"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-3.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 3.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-3.3",
              "title": "3.3 Code Splitting & Chunking",
              "pip": "#2f7a5e",
              "blurb": "Route-based splitting, component-level lazy loading, dynamic import(), and how to analyze your bundle with tools like Bundle Analyzer",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Route-based splitting, component-level lazy loading, dynamic import(), and how to analyze your bundle with tools like Bundle Analyzer"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-3.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 3.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-3.4",
              "title": "3.4 The BFCache (Back/Forward Cache)",
              "pip": "#2f7a5e",
              "blurb": "How BFCache works, what disqualifies pages from it (the unload trap), and how to test eligibility",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "How BFCache works, what disqualifies pages from it (the unload trap), and how to test eligibility"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-3.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 3.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-3.5",
              "title": "3.5 Speculation Rules API",
              "pip": "#2f7a5e",
              "blurb": "Prefetch vs. prerender, high-intent triggers (hover delay patterns), and implementing zero-ms navigation",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Prefetch vs. prerender, high-intent triggers (hover delay patterns), and implementing zero-ms navigation"
                ],
                "notes": [
                  "Original note: 'Shipped in Chrome 109+, Safari TP' — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-3.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 3.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-3.6",
              "title": "3.6 Caching Strategies",
              "pip": "#2f7a5e",
              "blurb": "Cache-Control, immutable assets, stale-while-revalidate, and service worker caching for offline/resilience",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Cache-Control, immutable assets, stale-while-revalidate, and service worker caching for offline/resilience"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-3.6",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 3.6 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c4",
          "title": "4. JavaScript Performance & the Main Thread",
          "summary": "JS is the number-one cause of poor INP. Understanding the event loop, long tasks, and yielding strategies is core to building responsive UIs.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-4.1",
              "title": "4.1 The Event Loop & Main Thread",
              "pip": "#a8561c",
              "blurb": "Single-threaded execution model, task queue vs. microtask queue, why long tasks freeze the UI",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Single-threaded execution model, task queue vs. microtask queue, why long tasks freeze the UI"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-4.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 4.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-4.2",
              "title": "4.2 Identifying & Breaking Long Tasks",
              "pip": "#a8561c",
              "blurb": "Reading flame charts for long tasks, scheduler.yield(), requestIdleCallback, setTimeout(0) patterns",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Reading flame charts for long tasks, scheduler.yield(), requestIdleCallback, setTimeout(0) patterns"
                ],
                "notes": [
                  "Original note: 'scheduler.yield() now in Chrome 115+' — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-4.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 4.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-4.3",
              "title": "4.3 Web Workers",
              "pip": "#a8561c",
              "blurb": "Offloading heavy computation off the main thread; what can and can't go in a worker",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Offloading heavy computation off the main thread; what can and can't go in a worker"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-4.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 4.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-4.4",
              "title": "4.4 Virtual Windowing",
              "pip": "#a8561c",
              "blurb": "Rendering only what's visible; libraries (TanStack Virtual, react-window) and the DOM node count problem",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Rendering only what's visible; libraries (TanStack Virtual, react-window) and the DOM node count problem"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-4.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 4.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-4.5",
              "title": "4.5 Tree Shaking & Dead Code Elimination",
              "pip": "#a8561c",
              "blurb": "How bundlers eliminate unused code, what breaks tree-shaking, and common import pitfalls",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "How bundlers eliminate unused code, what breaks tree-shaking, and common import pitfalls"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-4.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 4.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-4.6",
              "title": "4.6 Script Loading Strategies",
              "pip": "#a8561c",
              "blurb": "defer vs. async vs. module scripts; third-party script impact and containment strategies",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "defer vs. async vs. module scripts; third-party script impact and containment strategies"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-4.6",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 4.6 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c5",
          "title": "5. React Performance",
          "summary": "React has its own rendering model layered on top of the browser's. Optimizing React means understanding both layers simultaneously.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-5.1",
              "title": "5.1 The React Render Cycle",
              "pip": "#6a55a3",
              "blurb": "When components re-render, what triggers reconciliation, and the cost of unnecessary renders",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "When components re-render, what triggers reconciliation, and the cost of unnecessary renders"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-5.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 5.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-5.2",
              "title": "5.2 memo, useMemo, useCallback",
              "pip": "#6a55a3",
              "blurb": "When these actually help, when they're wasted overhead, and how to profile before reaching for them",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "When these actually help, when they're wasted overhead, and how to profile before reaching for them"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-5.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 5.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-5.3",
              "title": "5.3 React Compiler",
              "pip": "#6a55a3",
              "blurb": "What the new React Compiler does, what it auto-memoizes, and what you still have to do manually",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "What the new React Compiler does, what it auto-memoizes, and what you still have to do manually"
                ],
                "notes": [
                  "Original note: 'RC as of React 19; verify current status' — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-5.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 5.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-5.4",
              "title": "5.4 Concurrent Features",
              "pip": "#6a55a3",
              "blurb": "useTransition, useDeferredValue, Suspense — tools for keeping the UI responsive during heavy state updates",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "useTransition, useDeferredValue, Suspense — tools for keeping the UI responsive during heavy state updates"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-5.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 5.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-5.5",
              "title": "5.5 Server Components & Streaming SSR",
              "pip": "#6a55a3",
              "blurb": "Moving work to the server, streaming HTML, and the perf implications of the RSC model",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Moving work to the server, streaming HTML, and the perf implications of the RSC model"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-5.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 5.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-5.6",
              "title": "5.6 Profiling React with DevTools",
              "pip": "#6a55a3",
              "blurb": "Using the React DevTools Profiler (flame chart, ranked chart, why-did-this-render) alongside the browser Performance panel",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Using the React DevTools Profiler (flame chart, ranked chart, why-did-this-render) alongside the browser Performance panel"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-5.6",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 5.6 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-5.7",
              "title": "5.7 List & Table Performance",
              "pip": "#6a55a3",
              "blurb": "Keying strategies, avoiding layout thrash from dynamic lists, and integrating virtual windowing in React",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Keying strategies, avoiding layout thrash from dynamic lists, and integrating virtual windowing in React"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-5.7",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 5.7 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c6",
          "title": "6. Motion, Animation & Visual Performance",
          "summary": "This is where UI engineering and performance intersect most visibly. Janky animations destroy perceived quality even when metrics look fine.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-6.1",
              "title": "6.1 60fps vs. 120fps",
              "pip": "#a64d7d",
              "blurb": "Frame budget arithmetic (16.7ms vs. 8.3ms), what happens when you miss a frame, and variable refresh rate displays",
              "overlaps": [
                "anim-01",
                "anim-04"
              ],
              "plan": {
                "concepts": [
                  "Frame budget arithmetic (16.7ms vs. 8.3ms), what happens when you miss a frame, and variable refresh rate displays"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-6.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 6.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-6.2",
              "title": "6.2 GPU-Accelerated Properties",
              "pip": "#a64d7d",
              "blurb": "transform and opacity as the \"free\" properties; why animating width, height, top, left causes layout thrash",
              "overlaps": [
                "anim-01",
                "anim-04"
              ],
              "plan": {
                "concepts": [
                  "transform and opacity as the \"free\" properties; why animating width, height, top, left causes layout thrash"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-6.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 6.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-6.3",
              "title": "6.3 will-change & Layer Promotion",
              "pip": "#a64d7d",
              "blurb": "When to promote elements to compositor layers, the memory cost of over-promotion, and will-change best practices",
              "overlaps": [
                "anim-04"
              ],
              "plan": {
                "concepts": [
                  "When to promote elements to compositor layers, the memory cost of over-promotion, and will-change best practices"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-6.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 6.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-6.4",
              "title": "6.4 requestAnimationFrame Patterns",
              "pip": "#a64d7d",
              "blurb": "Writing animation loops correctly, avoiding rAF anti-patterns, and synchronizing with the display refresh",
              "overlaps": [
                "anim-05",
                "gameloops"
              ],
              "plan": {
                "concepts": [
                  "Writing animation loops correctly, avoiding rAF anti-patterns, and synchronizing with the display refresh"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-6.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 6.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-6.5",
              "title": "6.5 CSS Animations vs. JS Animations",
              "pip": "#a64d7d",
              "blurb": "When CSS wins (compositor-thread animations), when JS wins (physics, sequencing), and the hybrid approach",
              "overlaps": [
                "anim-03",
                "anim-05",
                "anim-06"
              ],
              "plan": {
                "concepts": [
                  "When CSS wins (compositor-thread animations), when JS wins (physics, sequencing), and the hybrid approach"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-6.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 6.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-6.6",
              "title": "6.6 Motion with Framer Motion / Motion One",
              "pip": "#a64d7d",
              "blurb": "Performance characteristics of these libraries, useMotionValue, layout animations, and what they do under the hood",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Performance characteristics of these libraries, useMotionValue, layout animations, and what they do under the hood"
                ],
                "notes": [
                  "Motion One rebranded to motion.dev — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-6.6",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 6.6 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-6.7",
              "title": "6.7 Reducing Motion & Accessibility",
              "pip": "#a64d7d",
              "blurb": "prefers-reduced-motion, why this is a performance concern (not just accessibility), and designing animation budgets",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "prefers-reduced-motion, why this is a performance concern (not just accessibility), and designing animation budgets"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-6.7",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 6.7 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c7",
          "title": "7. Images, Assets & Media",
          "summary": "Images are still the largest single contributor to page weight in most UI-heavy apps. Modern formats and loading strategies are non-negotiable.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-7.1",
              "title": "7.1 Modern Image Formats",
              "pip": "#86620f",
              "blurb": "WebP vs. AVIF vs. JPEG XL — quality/compression tradeoffs and browser support landscape",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "WebP vs. AVIF vs. JPEG XL — quality/compression tradeoffs and browser support landscape"
                ],
                "notes": [
                  "JPEG XL support still limited — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-7.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 7.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-7.2",
              "title": "7.2 Responsive Images",
              "pip": "#86620f",
              "blurb": "srcset, sizes, <picture> — serving the right resolution to the right device",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "srcset, sizes, <picture> — serving the right resolution to the right device"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-7.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 7.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-7.3",
              "title": "7.3 Lazy Loading & Priority",
              "pip": "#86620f",
              "blurb": "loading=\"lazy\", fetchpriority=\"high\", and why your LCP image should never be lazy-loaded",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "loading=\"lazy\", fetchpriority=\"high\", and why your LCP image should never be lazy-loaded"
                ],
                "notes": [
                  "fetchpriority now Baseline — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-7.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 7.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-7.4",
              "title": "7.4 Image CDNs & Optimization Pipelines",
              "pip": "#86620f",
              "blurb": "On-the-fly transforms (Cloudinary, imgix, Next.js Image), format negotiation, and caching",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "On-the-fly transforms (Cloudinary, imgix, Next.js Image), format negotiation, and caching"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-7.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 7.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-7.5",
              "title": "7.5 Fonts & CLS",
              "pip": "#86620f",
              "blurb": "font-display strategies, preloading variable fonts, and preventing FOUT/FOIT-induced layout shifts",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "font-display strategies, preloading variable fonts, and preventing FOUT/FOIT-induced layout shifts"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-7.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 7.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-7.6",
              "title": "7.6 SVG Performance",
              "pip": "#86620f",
              "blurb": "Inline vs. external SVG, complex path count, SVG animation performance, and sprite strategies",
              "overlaps": [
                "anim-09"
              ],
              "plan": {
                "concepts": [
                  "Inline vs. external SVG, complex path count, SVG animation performance, and sprite strategies"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-7.6",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 7.6 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c8",
          "title": "8. GPU, WebGL & WebGPU",
          "summary": "As UI engineers push into rich visual experiences (3D, data viz, generative UI), the GPU becomes a first-class concern.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-8.1",
              "title": "8.1 How Browsers Use the GPU",
              "pip": "#2a7a72",
              "blurb": "The compositing pipeline: paint → composite → GPU upload; what happens on the GPU thread vs. main thread",
              "overlaps": [
                "anim-01",
                "anim-13"
              ],
              "plan": {
                "concepts": [
                  "The compositing pipeline: paint → composite → GPU upload; what happens on the GPU thread vs. main thread"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-8.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 8.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-8.2",
              "title": "8.2 Canvas 2D Performance",
              "pip": "#2a7a72",
              "blurb": "Offscreen canvas, dirty rect rendering, avoiding full-canvas redraws, and ImageBitmap",
              "overlaps": [
                "anim-10"
              ],
              "plan": {
                "concepts": [
                  "Offscreen canvas, dirty rect rendering, avoiding full-canvas redraws, and ImageBitmap"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-8.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 8.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-8.3",
              "title": "8.3 WebGL Fundamentals for UI Engineers",
              "pip": "#2a7a72",
              "blurb": "Shaders, draw calls, texture atlases — just enough to understand what makes WebGL fast or slow",
              "overlaps": [
                "anim-13"
              ],
              "plan": {
                "concepts": [
                  "Shaders, draw calls, texture atlases — just enough to understand what makes WebGL fast or slow"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-8.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 8.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-8.4",
              "title": "8.4 WebGPU: The New Model",
              "pip": "#2a7a72",
              "blurb": "Compute shaders, the pipeline model, when WebGPU outperforms WebGL, and current browser support",
              "overlaps": [
                "anim-15"
              ],
              "plan": {
                "concepts": [
                  "Compute shaders, the pipeline model, when WebGPU outperforms WebGL, and current browser support"
                ],
                "notes": [
                  "Original note: 'Baseline 2024; verify Firefox/Safari status' — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-8.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 8.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-8.5",
              "title": "8.5 Three.js / R3F Performance",
              "pip": "#2a7a72",
              "blurb": "Draw call batching, instancing, LOD, frustum culling, and profiling in the GPU panel",
              "overlaps": [
                "anim-14"
              ],
              "plan": {
                "concepts": [
                  "Draw call batching, instancing, LOD, frustum culling, and profiling in the GPU panel"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-8.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 8.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-8.6",
              "title": "8.6 GPU for Non-3D UI",
              "pip": "#2a7a72",
              "blurb": "Using WebGL/WebGPU for post-processing effects, particle systems, and image filters at 60fps",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Using WebGL/WebGPU for post-processing effects, particle systems, and image filters at 60fps"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-8.6",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 8.6 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        },
        {
          "type": "group",
          "id": "fe-c9",
          "title": "9. Measurement, RUM & Actionable Analytics",
          "summary": "Lab data tells you what's broken; field data tells you who's affected and how badly. Closing this loop is what separates guessing from engineering.",
          "children": [
            {
              "type": "lesson",
              "id": "fe-9.1",
              "title": "9.1 web-vitals.js",
              "pip": "#3d63a3",
              "blurb": "Installing, configuring attribution mode, and capturing element-level data (which selector triggered the slow INP?)",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Installing, configuring attribution mode, and capturing element-level data (which selector triggered the slow INP?)"
                ],
                "notes": [
                  "Original note: 'Currently v4.x — verify API' — carried over from the original project; verify before building."
                ]
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-9.1",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 9.1 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-9.2",
              "title": "9.2 Building Useful Dashboards",
              "pip": "#3d63a3",
              "blurb": "The \"mad-lib\" formula: [Device] + [percentile] + [interaction] + [selector] = an actionable bug report",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "The \"mad-lib\" formula: [Device] + [percentile] + [interaction] + [selector] = an actionable bug report"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-9.2",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 9.2 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-9.3",
              "title": "9.3 Segmentation Strategies",
              "pip": "#3d63a3",
              "blurb": "Splitting data by device class, connection type, geography, and user cohort",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Splitting data by device class, connection type, geography, and user cohort"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-9.3",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 9.3 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-9.4",
              "title": "9.4 Performance Budgets",
              "pip": "#3d63a3",
              "blurb": "Setting thresholds in CI (Lighthouse CI, bundlesize), failing builds on regressions",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "Setting thresholds in CI (Lighthouse CI, bundlesize), failing builds on regressions"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-9.4",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 9.4 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            },
            {
              "type": "lesson",
              "id": "fe-9.5",
              "title": "9.5 A/B Testing Performance Changes",
              "pip": "#3d63a3",
              "blurb": "How to measure whether your optimization actually helped in production, not just in the lab",
              "overlaps": [],
              "plan": {
                "concepts": [
                  "How to measure whether your optimization actually helped in production, not just in the lab"
                ],
                "notes": []
              },
              "status": "stub",
              "file": "shared/outline.html?id=fe-9.5",
              "anchors": [],
              "dates": {
                "planned": "2026-06-12"
              },
              "history": [
                {
                  "date": "2026-06-12",
                  "note": "Planned in the FE Web Performance Workshop curriculum"
                },
                {
                  "date": "2026-10-23",
                  "note": "Imported as a stub"
                }
              ],
              "rebuild": {
                "brief": "Build FE Perf lesson 9.5 through the lens of a UI/UX engineer: why it matters, a diagram, an interactive demo, annotated code, a deeper-dive tangent, and industry context; plus an examples hub.",
                "basis": [
                  "Plan on this page",
                  "MDN, web.dev, Chrome Developers; check browser support + deprecations from the last 12–18 months"
                ]
              }
            }
          ]
        }
      ]
    }
  ]
});
