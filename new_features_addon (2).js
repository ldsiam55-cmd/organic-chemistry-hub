/**
 * new_features_addon.js
 * Organic Chemistry Hub — New Features Addon
 * Adds: Dark/Light Mode · Fossil Fuels · Polymers · Chemical Tests (Br₂ & KMnO₄)
 * 
 * HOW TO USE:
 * 1. Upload this file to your GitHub repo
 * 2. In index.html add AFTER your existing scripts:
 *    <script src="new_features_addon.js"></script>
 */

(function() {
  'use strict';

  // Wait for the existing site to fully render, then inject
  function init() {

    // ─── 1. INJECT CSS ──────────────────────────────────────────
    const css = `
      /* ── DARK / LIGHT MODE ── */
      body.light-mode {
        background: #eef2ff !important;
        color: #1e1b4b !important;
      }
      body.light-mode nav .btn,
      body.light-mode .compound-btn,
      body.light-mode .nav-btn {
        border-color: rgba(99,102,241,0.4) !important;
      }
      body.light-mode .method-card,
      body.light-mode .compound-panel,
      body.light-mode [class*="panel"] {
        background: #fff !important;
        border-color: #c7d2fe !important;
      }
      body.light-mode .reaction-block,
      body.light-mode .rxn,
      body.light-mode .rb {
        background: #f5f3ff !important;
        border-color: #ddd6fe !important;
      }
      body.light-mode footer { border-top-color: #c7d2fe !important; }

      /* ── THEME TOGGLE BUTTON — bottom-LEFT corner ── */
      #nf-theme-btn {
        position: fixed;
        bottom: 1.4rem;
        left: 1.4rem;
        z-index: 9999;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        cursor: pointer;
        font-size: 1.4rem;
        background: linear-gradient(135deg, #6366f1, #8b5cf6);
        box-shadow: 0 4px 20px rgba(99,102,241,0.5);
        transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
      }
      #nf-theme-btn:hover { transform: scale(1.15) rotate(15deg); }

      /* ── NEW NAV BUTTONS ── */
      .nf-btn-ff {
        color: #f97316 !important;
        border: 2px solid #f97316 !important;
        background: transparent !important;
      }
      .nf-btn-ff:hover, .nf-btn-ff.active {
        background: rgba(249,115,22,.12) !important;
        box-shadow: 0 0 22px rgba(249,115,22,.5) !important;
        transform: translateY(-3px) scale(1.03) !important;
      }
      .nf-btn-po {
        color: #a78bfa !important;
        border: 2px solid #a78bfa !important;
        background: transparent !important;
      }
      .nf-btn-po:hover, .nf-btn-po.active {
        background: rgba(167,139,250,.12) !important;
        box-shadow: 0 0 22px rgba(167,139,250,.5) !important;
        transform: translateY(-3px) scale(1.03) !important;
      }
      .nf-btn-br {
        color: #fff !important;
        background: linear-gradient(180deg, #fde68a, #d97706) !important;
        border: none !important;
        box-shadow: 0 5px 0 #92400e, 0 8px 18px rgba(245,158,11,.35) !important;
      }
      .nf-btn-br:hover { transform: translateY(-3px) scale(1.03) !important; }
      .nf-btn-br.active { transform: translateY(3px) !important; box-shadow: 0 2px 0 #92400e !important; }

      /* ── SHARED PANEL STYLES ── */
      .nf-panel { display: none; animation: nfFadeUp .4s ease; }
      .nf-panel.on { display: block; }
      @keyframes nfFadeUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }

      .nf-ph {
        display: flex; align-items: flex-start; gap: 1.2rem;
        padding: 1.5rem 1.8rem; border-radius: 18px;
        border: 2px solid; background: rgba(19,19,40,0.9);
        margin-bottom: 1.8rem; position: relative; overflow: hidden;
      }
      .nf-ph::after {
        content: ''; position: absolute; right: -20px; top: -20px;
        width: 100px; height: 100px; border-radius: 50%;
        background: currentColor; opacity: .05; pointer-events: none;
      }
      .nf-ph-icon { font-size: 2.8rem; flex-shrink: 0; line-height: 1; filter: drop-shadow(0 0 10px currentColor); }
      .nf-ph-title { font-family: 'Fredoka One', cursive; font-size: 1.8rem; margin-bottom: .3rem; }
      .nf-ph-badges { display: flex; gap: .45rem; flex-wrap: wrap; margin-bottom: .45rem; }
      .nf-badge { font-size: .7rem; padding: .18rem .65rem; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.13); border-radius: 6px; font-weight: 700; }
      .nf-ph-desc { font-size: .95rem; color: #94a3b8; font-weight: 600; line-height: 1.55; }

      .nf-section-title {
        font-family: 'Fredoka One', cursive;
        font-size: 1.35rem;
        margin: 1.4rem 0 .9rem;
      }

      .nf-card-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(250px,1fr)); gap: 1.1rem; margin-bottom: 1.4rem; }

      .nf-card {
        background: rgba(19,19,40,0.9);
        border: 2px solid rgba(255,255,255,.1);
        border-radius: 14px; overflow: hidden;
        transition: box-shadow .2s, transform .2s;
      }
      .nf-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,.5); transform: translateY(-2px); }
      .nf-card-head {
        padding: 1rem 1.2rem .75rem;
        border-bottom: 1px solid rgba(255,255,255,.07);
        display: flex; align-items: center; gap: .75rem;
      }
      .nf-card-icon { font-size: 2rem; line-height: 1; }
      .nf-card-title { font-family: 'Fredoka One', cursive; font-size: 1.2rem; }
      .nf-card-type { font-size: .7rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; opacity: .6; }
      .nf-card-body { padding: .9rem 1.2rem; font-size: .9rem; font-weight: 600; color: #94a3b8; line-height: 1.65; }
      .nf-card-body strong { filter: brightness(1.7); }
      .nf-code { font-family: 'JetBrains Mono', monospace; font-size: .75rem; display: block; overflow-x: auto; white-space: nowrap; padding: .4rem .65rem; background: rgba(0,0,0,.3); border-radius: 7px; margin: .5rem 0; color: #fde68a; }
      .nf-tags { display: flex; flex-wrap: wrap; gap: .3rem; margin-top: .55rem; }
      .nf-tag { font-size: .7rem; font-weight: 800; padding: .18rem .6rem; border-radius: 50px; background: rgba(255,255,255,.07); border: 1px solid rgba(255,255,255,.12); }

      /* Petroleum table */
      .nf-table { width: 100%; border-collapse: collapse; font-size: .88rem; }
      .nf-table th { font-family: 'Fredoka One', cursive; font-size: .8rem; padding: .6rem 1rem; text-align: left; border-bottom: 2px solid rgba(255,255,255,.1); color: #94a3b8; }
      .nf-table td { padding: .55rem 1rem; border-bottom: 1px solid rgba(255,255,255,.05); font-weight: 600; }
      .nf-table tr:hover td { background: rgba(255,255,255,.03); }
      .nf-dot { display: inline-block; width: 10px; height: 10px; border-radius: 50%; margin-right: .4rem; }

      .nf-note {
        font-size: .93rem; color: #94a3b8;
        background: rgba(255,255,255,.04);
        border-left: 3px solid currentColor;
        padding: .75rem .95rem; margin-top: 1rem;
        line-height: 1.6; border-radius: 0 10px 10px 0;
      }
      .nf-box {
        background: rgba(19,19,40,0.9);
        border: 2px solid rgba(255,255,255,.1);
        border-radius: 14px; overflow: hidden;
        margin-bottom: 1.4rem;
      }
      .nf-box-head {
        display: flex; align-items: center; gap: .75rem;
        padding: .85rem 1.3rem;
        background: rgba(0,0,0,.3);
        border-bottom: 1px solid rgba(255,255,255,.07);
      }
      .nf-box-label {
        font-family: 'Fredoka One', cursive;
        font-size: .82rem;
        padding: .18rem .8rem;
        border-radius: 8px;
        border: 1.5px solid currentColor;
        background: rgba(255,255,255,.04);
      }
      .nf-box-title { font-family: 'Fredoka One', cursive; font-size: 1.15rem; }
      .nf-box-body { padding: 1.2rem 1.3rem; }

      /* Chemical test styles */
      .nf-test-section { margin-bottom: 2rem; }
      .nf-test-inner {
        background: rgba(19,19,40,0.9);
        border: 2px solid;
        border-radius: 16px;
        overflow: hidden;
      }
      .nf-test-head {
        padding: 1rem 1.3rem;
        border-bottom: 1px solid rgba(255,255,255,.07);
        display: flex; align-items: center; gap: .8rem;
      }
      .nf-test-icon { font-size: 2.2rem; line-height: 1; }
      .nf-test-name { font-family: 'Fredoka One', cursive; font-size: 1.3rem; }
      .nf-test-reagent { font-size: .72rem; font-weight: 700; opacity: .6; }
      .nf-test-body { padding: 1.3rem; }

      .nf-cpd-sel { display: flex; gap: .45rem; flex-wrap: wrap; justify-content: center; margin-bottom: 1rem; }
      .nf-cpd-pill {
        font-family: 'Fredoka One', cursive;
        font-size: .82rem;
        padding: .38rem .9rem;
        border-radius: 50px;
        border: 2px solid;
        background: transparent;
        cursor: pointer;
        opacity: .5;
        transition: all .2s;
      }
      .nf-cpd-pill:hover { opacity: .85; transform: scale(1.05); }
      .nf-cpd-pill.on { opacity: 1; }

      .nf-tube-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 1.1rem; align-items: flex-end; }
      .nf-tube-wrap { display: flex; flex-direction: column; align-items: center; gap: .45rem; }
      .nf-tube {
        width: 46px; height: 88px;
        border-radius: 0 0 23px 23px;
        border: 2.5px solid rgba(255,255,255,.18);
        position: relative; overflow: hidden;
        background: rgba(255,255,255,.04);
      }
      .nf-tube-liq {
        position: absolute; bottom: 0; left: 0; right: 0;
        border-radius: 0 0 21px 21px;
        transition: background 1.4s ease, opacity 1.2s ease;
      }
      .nf-tube-lbl { font-family: 'Fredoka One', cursive; font-size: .75rem; text-align: center; line-height: 1.3; max-width: 64px; }
      .nf-tube-res { font-size: .68rem; font-weight: 800; letter-spacing: .05em; text-transform: uppercase; text-align: center; max-width: 70px; opacity: .75; }
      .nf-op { font-size: 1.7rem; font-weight: 900; color: #374151; align-self: center; margin-bottom: 2.4rem; }

      .nf-run-btn {
        display: none;
        width: 100%;
        font-family: 'Fredoka One', cursive;
        font-size: 1rem;
        padding: .65rem;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        margin-bottom: .9rem;
        transition: all .25s cubic-bezier(.34,1.56,.64,1);
      }
      .nf-run-btn:hover { transform: scale(1.03); }

      .nf-test-result {
        padding: .85rem 1rem;
        border-radius: 10px;
        border: 1.5px solid rgba(255,255,255,.1);
        font-size: .9rem;
        font-weight: 700;
        text-align: center;
        color: #6b7280;
        transition: all .5s ease;
      }
      .nf-test-explain {
        margin-top: .9rem;
        font-size: .87rem;
        font-weight: 600;
        color: #94a3b8;
        line-height: 1.6;
        display: none;
      }

      /* Summary table */
      .nf-sum-row { display: flex; align-items: center; gap: .8rem; padding: .7rem 0; border-bottom: 1px solid rgba(255,255,255,.06); flex-wrap: wrap; }
      .nf-sum-row:last-child { border-bottom: none; }
      .nf-sum-cpd { font-family: 'Fredoka One', cursive; font-size: .95rem; min-width: 90px; }
      .nf-sum-res { font-size: .82rem; font-weight: 700; padding: .22rem .75rem; border-radius: 50px; border: 1.5px solid; }
    `;

    const styleEl = document.createElement('style');
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    // ─── 2. INJECT THEME TOGGLE BUTTON ──────────────────────────
    const themeBtn = document.createElement('button');
    themeBtn.id = 'nf-theme-btn';
    themeBtn.title = 'Toggle Dark/Light Mode';
    themeBtn.textContent = '☀️';
    themeBtn.onclick = toggleTheme;
    document.body.appendChild(themeBtn);

    if (localStorage.getItem('nf-theme') === 'light') {
      document.body.classList.add('light-mode');
      themeBtn.textContent = '🌙';
    }

    // ─── 3. INJECT NEW NAV BUTTONS ──────────────────────────────
    // Find the nav element
    const nav = document.querySelector('nav');
    if (nav) {
      const buttons = [
        { id: 'ff', icon: '🛢️', label: 'Fossil Fuels', sub: 'Coal · Petroleum', cls: 'nf-btn-ff' },
        { id: 'po', icon: '🔗', label: 'Polymers', sub: 'Plastics · Nylon', cls: 'nf-btn-po' },
        { id: 'br', icon: '🧫', label: 'Chem Tests', sub: 'Br₂ · KMnO₄', cls: 'nf-btn-br' },
      ];
      buttons.forEach(b => {
        const btn = document.createElement('button');
        // Try to copy classes from an existing button for base styling
        const existingBtn = nav.querySelector('button');
        if (existingBtn) {
          btn.className = existingBtn.className;
          btn.classList.remove(...[...existingBtn.classList].filter(c => c.startsWith('b-') || c.startsWith('btn-') || c === 'active' || c === 'on'));
        }
        btn.classList.add(b.cls);
        btn.setAttribute('data-nf-panel', b.id);
        btn.innerHTML = `${b.icon} ${b.label}<span style="display:block;font-family:'JetBrains Mono',monospace;font-size:.6rem;opacity:.7">${b.sub}</span>`;
        btn.onclick = function() { showNFPanel(b.id, this); };
        nav.appendChild(btn);
      });
    }

    // ─── 4. INJECT PANEL HTML ───────────────────────────────────
    const main = document.querySelector('main') || document.body;

    // Fossil Fuels Panel
    const ffPanel = document.createElement('div');
    ffPanel.id = 'nf-panel-ff';
    ffPanel.className = 'nf-panel';
    ffPanel.innerHTML = `
      <div class="nf-ph" style="border-color:#f97316;color:#f97316">
        <div class="nf-ph-icon">🛢️</div>
        <div>
          <div class="nf-ph-title">Fossil Fuels &amp; Petroleum</div>
          <div class="nf-ph-badges">
            <span class="nf-badge">Coal · Petroleum · Natural Gas</span>
            <span class="nf-badge">Fractional Distillation</span>
            <span class="nf-badge">Hydrocarbons</span>
          </div>
          <div class="nf-ph-desc">Fossil fuels form from buried organisms over millions of years. Petroleum is separated by fractional distillation into useful fractions based on boiling points.</div>
        </div>
      </div>

      <div class="nf-section-title" style="color:#f97316">⚙️ How Fossil Fuels Form</div>
      <div class="nf-card-grid">
        <div class="nf-card" style="border-color:#f97316">
          <div class="nf-card-head" style="color:#f97316"><div class="nf-card-icon">🪨</div><div><div class="nf-card-title">Coal</div><div class="nf-card-type">Solid fossil fuel</div></div></div>
          <div class="nf-card-body">
            Source: <strong style="color:#fde68a">Gigantic land plants</strong><br>
            Major element: <strong style="color:#f97316">Carbon (C)</strong><br>
            Conditions: <strong>High temperature, high pressure, no air</strong><br>
            Time: <strong>Millions of years</strong>
          </div>
        </div>
        <div class="nf-card" style="border-color:#38bdf8">
          <div class="nf-card-head" style="color:#38bdf8"><div class="nf-card-icon">🛢️</div><div><div class="nf-card-title">Petroleum</div><div class="nf-card-type">Liquid fossil fuel</div></div></div>
          <div class="nf-card-body">
            Source: <strong style="color:#fde68a">Phytoplankton + Zooplankton</strong><br>
            Major element: <strong style="color:#38bdf8">Hydrocarbon (C + H)</strong><br>
            Depth: <strong>5000+ feet underground</strong><br>
            Bangladesh: <strong>Haripur Gas Field</strong>
          </div>
        </div>
        <div class="nf-card" style="border-color:#4ade80">
          <div class="nf-card-head" style="color:#4ade80"><div class="nf-card-icon">🔥</div><div><div class="nf-card-title">Natural Gas</div><div class="nf-card-type">Gaseous fossil fuel</div></div></div>
          <div class="nf-card-body">
            Source: <strong style="color:#fde68a">Petroleum (continued change)</strong><br>
            Bangladesh composition: <strong style="color:#4ade80">93–98% Methane (CH₄)</strong><br>
            Other components: <strong>Ethane, Propane, Butane</strong><br>
            Use: <strong>Cooking, electricity generation</strong>
          </div>
        </div>
      </div>

      <div class="nf-section-title" style="color:#f97316">🏭 Fractional Distillation of Petroleum</div>
      <div class="nf-box">
        <div class="nf-box-head" style="color:#f97316">
          <span class="nf-box-label">PROCESS</span>
          <span class="nf-box-title">Column hottest at bottom · cooler at top</span>
        </div>
        <div class="nf-box-body" style="overflow-x:auto">
          <table class="nf-table">
            <tr><th>Fraction</th><th>Boiling Point</th><th>Carbons</th><th>% yield</th><th>Main Use</th></tr>
            <tr><td><span class="nf-dot" style="background:#a78bfa"></span>Petroleum Gas (LPG)</td><td style="color:#7dd3fc">0°C – 20°C</td><td style="color:#fde68a">1–4 C</td><td style="color:#4ade80">2%</td><td>Cooking fuel (cylinders)</td></tr>
            <tr><td><span class="nf-dot" style="background:#f97316"></span>Petrol (Gasoline)</td><td style="color:#7dd3fc">21°C – 70°C</td><td style="color:#fde68a">5–10 C</td><td style="color:#4ade80">5%</td><td>Vehicle engine fuel</td></tr>
            <tr><td><span class="nf-dot" style="background:#fbbf24"></span>Naphtha</td><td style="color:#7dd3fc">71°C – 120°C</td><td style="color:#fde68a">7–14 C</td><td style="color:#4ade80">10%</td><td>Petrochemical industry</td></tr>
            <tr><td><span class="nf-dot" style="background:#60a5fa"></span>Kerosene</td><td style="color:#7dd3fc">121°C – 170°C</td><td style="color:#fde68a">11–16 C</td><td style="color:#4ade80">13%</td><td>Jet engine fuel</td></tr>
            <tr><td><span class="nf-dot" style="background:#34d399"></span>Diesel</td><td style="color:#7dd3fc">171°C – 270°C</td><td style="color:#fde68a">17–20 C</td><td style="color:#4ade80">—</td><td>Vehicle fuel, lubricant</td></tr>
            <tr><td><span class="nf-dot" style="background:#f472b6"></span>Paraffin Wax</td><td style="color:#7dd3fc">271°C – 340°C</td><td style="color:#fde68a">20–30 C</td><td style="color:#4ade80">—</td><td>Toiletries, Vaseline</td></tr>
            <tr><td><span class="nf-dot" style="background:#6b7280"></span>Pitch / Bitumen</td><td style="color:#7dd3fc">&gt;340°C</td><td style="color:#fde68a">&gt;30 C</td><td style="color:#4ade80">—</td><td>Road construction</td></tr>
          </table>
          <div class="nf-note" style="border-color:#f97316">💡 <strong>Key principle:</strong> The fractionating column is <strong>hottest at the bottom</strong> — heavier fractions (more carbons) condense lower down. Lighter fractions (fewer carbons, lower boiling points) rise to the top before condensing.</div>
        </div>
      </div>

      <div class="nf-section-title" style="color:#a78bfa">🌳 Types of Hydrocarbons</div>
      <div class="nf-card-grid">
        <div class="nf-card" style="border-color:#a78bfa">
          <div class="nf-card-head" style="color:#a78bfa"><div class="nf-card-icon">〰️</div><div><div class="nf-card-title">Open Chain (Aliphatic)</div><div class="nf-card-type">Free terminal carbons</div></div></div>
          <div class="nf-card-body">Includes Alkane, Alkene, Alkyne, Alcohol, Aldehyde, Fatty Acid. Terminal carbons are FREE — chain has open ends.<br><code class="nf-code">CH₃–CH₂–CH₃ (Propane)</code></div>
        </div>
        <div class="nf-card" style="border-color:#a78bfa">
          <div class="nf-card-head" style="color:#a78bfa"><div class="nf-card-icon">⭕</div><div><div class="nf-card-title">Closed Chain (Alicyclic)</div><div class="nf-card-type">Carbons form a ring</div></div></div>
          <div class="nf-card-body">Terminal carbons JOIN together forming a ring. Saturated — only C–C single bonds. No benzene ring.<br><code class="nf-code">Cyclohexane (C₆H₁₂)</code></div>
        </div>
        <div class="nf-card" style="border-color:#a78bfa">
          <div class="nf-card-head" style="color:#a78bfa"><div class="nf-card-icon">🌸</div><div><div class="nf-card-title">Aromatic</div><div class="nf-card-type">Alternating double bonds in ring</div></div></div>
          <div class="nf-card-body">'Aromatic' = Greek 'Aroma' (scent). Co-planar cyclic ring with alternating double bonds. Very stable.<br><code class="nf-code">Benzene (C₆H₆), Naphthalene (C₁₀H₈)</code></div>
        </div>
      </div>
    `;
    main.appendChild(ffPanel);

    // Polymer Panel
    const poPanel = document.createElement('div');
    poPanel.id = 'nf-panel-po';
    poPanel.className = 'nf-panel';
    poPanel.innerHTML = `
      <div class="nf-ph" style="border-color:#a78bfa;color:#a78bfa">
        <div class="nf-ph-icon">🔗</div>
        <div>
          <div class="nf-ph-title">Polymers &amp; Plastics</div>
          <div class="nf-ph-badges">
            <span class="nf-badge">Addition polymers</span>
            <span class="nf-badge">Condensation polymers</span>
            <span class="nf-badge">Natural &amp; Synthetic</span>
          </div>
          <div class="nf-ph-desc">Polymers are giant molecules formed by joining many small monomer units. Includes everyday plastics, fibres, rubber and even proteins.</div>
        </div>
      </div>

      <div style="background:rgba(167,139,250,.06);border:1.5px solid rgba(167,139,250,.25);border-radius:12px;padding:1rem 1.3rem;margin-bottom:1.4rem;display:flex;gap:1rem;flex-wrap:wrap;align-items:center;justify-content:space-around;text-align:center">
        <div><div style="font-size:1.8rem">🔗</div><div style="font-family:'Fredoka One',cursive;color:#a78bfa">Monomer</div><div style="font-size:.82rem;color:#94a3b8;font-weight:600">Small repeating unit</div></div>
        <div style="font-size:2rem;color:#6366f1">⟶</div>
        <div><div style="font-size:1.8rem">⛓️</div><div style="font-family:'Fredoka One',cursive;color:#a78bfa">Polymer</div><div style="font-size:.82rem;color:#94a3b8;font-weight:600">Large chain molecule</div></div>
        <div class="nf-note" style="border-color:#a78bfa;margin-top:0;width:100%">2 monomers = <strong>Dimer</strong> · 3 = <strong>Trimer</strong> · Many = <strong>Polymer</strong>. The process is called <strong>Polymerisation</strong>.</div>
      </div>

      <div class="nf-section-title" style="color:#38bdf8">⚗️ Synthetic Addition Polymers</div>
      <div class="nf-card-grid">
        <div class="nf-card" style="border-color:#38bdf8">
          <div class="nf-card-head" style="color:#38bdf8"><div class="nf-card-icon">🛍️</div><div><div class="nf-card-title">Polythene</div><div class="nf-card-type">Addition polymer</div></div></div>
          <div class="nf-card-body">
            Monomer: <strong style="color:#fde68a">Ethene (CH₂=CH₂)</strong><br>
            <code class="nf-code">n(CH₂=CH₂) → (–CH₂–CH₂–)ₙ</code>
            Conditions: <strong>1000 atm, 200°C, trace O₂</strong><br>
            Properties: Durable, cannot be cut easily, flexible<br>
            <div class="nf-tags"><span class="nf-tag" style="color:#38bdf8">Plastic bags</span><span class="nf-tag" style="color:#38bdf8">Bottles</span><span class="nf-tag" style="color:#38bdf8">Plastic sheets</span></div>
          </div>
        </div>
        <div class="nf-card" style="border-color:#f97316">
          <div class="nf-card-head" style="color:#f97316"><div class="nf-card-icon">⚡</div><div><div class="nf-card-title">Polypropene</div><div class="nf-card-type">Addition polymer</div></div></div>
          <div class="nf-card-body">
            Monomer: <strong style="color:#fde68a">Propene (CH₂=CH–CH₃)</strong><br>
            <code class="nf-code">n(CH₂=CHCH₃) → (–CH₂–CH(CH₃)–)ₙ</code>
            Conditions: <strong>140 atm, 120°C, TiCl₃ catalyst</strong><br>
            Properties: Stronger than polythene, heat resistant<br>
            <div class="nf-tags"><span class="nf-tag" style="color:#f97316">Ropes</span><span class="nf-tag" style="color:#f97316">Pipes</span><span class="nf-tag" style="color:#f97316">Carpets</span></div>
          </div>
        </div>
        <div class="nf-card" style="border-color:#f472b6">
          <div class="nf-card-head" style="color:#f472b6"><div class="nf-card-icon">🔌</div><div><div class="nf-card-title">PVC</div><div class="nf-card-type">Addition polymer</div></div></div>
          <div class="nf-card-body">
            Full name: <strong style="color:#f472b6">Polyvinyl Chloride</strong><br>
            Monomer: <strong style="color:#fde68a">Vinyl Chloride (CH₂=CHCl)</strong><br>
            <code class="nf-code">n(CH₂=CHCl) → (–CH₂–CHCl–)ₙ</code>
            <div class="nf-tags"><span class="nf-tag" style="color:#f472b6">Pipes</span><span class="nf-tag" style="color:#f472b6">Wires</span><span class="nf-tag" style="color:#f472b6">Medical devices</span></div>
          </div>
        </div>
      </div>

      <div class="nf-section-title" style="color:#fbbf24">🧵 Condensation Polymer</div>
      <div class="nf-card" style="border-color:#fbbf24;margin-bottom:1.4rem">
        <div class="nf-card-head" style="color:#fbbf24"><div class="nf-card-icon">🪡</div><div><div class="nf-card-title">Nylon 6:6</div><div class="nf-card-type">Condensation — H₂O released at each join</div></div></div>
        <div class="nf-card-body">
          Monomers: <strong style="color:#fde68a">Adipic acid + Hexamethylene diamine</strong><br>
          <code class="nf-code">[–OC–(CH₂)₄–CO–NH–(CH₂)₆–NH–]ₙ + nH₂O</code>
          Catalyst: TiO₂ · Properties: Glittering, durable, flexible, strong<br>
          <div class="nf-tags"><span class="nf-tag" style="color:#fbbf24">Artificial cloth</span><span class="nf-tag" style="color:#fbbf24">Ropes</span><span class="nf-tag" style="color:#fbbf24">Toothbrushes</span><span class="nf-tag" style="color:#fbbf24">Parachutes</span></div>
        </div>
      </div>

      <div class="nf-section-title" style="color:#4ade80">🌿 Natural Polymers</div>
      <div class="nf-card-grid">
        <div class="nf-card" style="border-color:#4ade80">
          <div class="nf-card-head" style="color:#4ade80"><div class="nf-card-icon">🌾</div><div><div class="nf-card-title">Cellulose &amp; Starch</div><div class="nf-card-type">From plants · monomer = Glucose</div></div></div>
          <div class="nf-card-body">Monomer: <strong style="color:#fde68a">Glucose (C₆H₁₂O₆)</strong>. Found in plant cell walls and food stores. Cotton and wood fibres are cellulose.<div class="nf-tags"><span class="nf-tag" style="color:#4ade80">Cotton</span><span class="nf-tag" style="color:#4ade80">Wood</span><span class="nf-tag" style="color:#4ade80">Paper</span><span class="nf-tag" style="color:#4ade80">Starch (food)</span></div></div>
        </div>
        <div class="nf-card" style="border-color:#f97316">
          <div class="nf-card-head" style="color:#f97316"><div class="nf-card-icon">🧬</div><div><div class="nf-card-title">Protein</div><div class="nf-card-type">In all living things · monomer = Amino acid</div></div></div>
          <div class="nf-card-body">Monomer: <strong style="color:#fde68a">Amino acids</strong>. Main element of food. Makes enzymes, muscles, hormones. Condensation polymer.<div class="nf-tags"><span class="nf-tag" style="color:#f97316">Muscle</span><span class="nf-tag" style="color:#f97316">Enzymes</span><span class="nf-tag" style="color:#f97316">Hair</span><span class="nf-tag" style="color:#f97316">Silk</span></div></div>
        </div>
        <div class="nf-card" style="border-color:#34d399">
          <div class="nf-card-head" style="color:#34d399"><div class="nf-card-icon">🌳</div><div><div class="nf-card-title">Natural Rubber</div><div class="nf-card-type">From rubber trees · monomer = Isoprene</div></div></div>
          <div class="nf-card-body">Monomer: <strong style="color:#fde68a">Isoprene (C₅H₈)</strong>. Cultivated in Bangladesh: Cox's Bazar, Habiganj, Sylhet, Tangail.<div class="nf-tags"><span class="nf-tag" style="color:#34d399">Tyres</span><span class="nf-tag" style="color:#34d399">Gloves</span><span class="nf-tag" style="color:#34d399">Erasers</span></div></div>
        </div>
      </div>

      <div class="nf-box" style="border-color:#f87171">
        <div class="nf-box-head" style="color:#f87171"><span class="nf-box-label">⚠️ WARNING</span><span class="nf-box-title">Burning Plastic = Toxic Gases</span></div>
        <div class="nf-box-body"><div class="nf-note" style="border-color:#f87171">Burning or melting plastic products produces many <strong>toxic gases</strong> harmful to health and the environment. Plastics are <strong>non-biodegradable</strong> — they remain in the environment for hundreds of years. Always recycle — never burn!</div></div>
      </div>
    `;
    main.appendChild(poPanel);

    // Chemical Tests Panel
    const brPanel = document.createElement('div');
    brPanel.id = 'nf-panel-br';
    brPanel.className = 'nf-panel';
    brPanel.innerHTML = `
      <div class="nf-ph" style="border-color:#fbbf24;color:#fbbf24">
        <div class="nf-ph-icon">🧫</div>
        <div>
          <div class="nf-ph-title">Chemical Tests — Br₂ &amp; KMnO₄</div>
          <div class="nf-ph-badges">
            <span class="nf-badge">Bromine Water Test</span>
            <span class="nf-badge">KMnO₄ Test</span>
            <span class="nf-badge">Detect Unsaturation</span>
          </div>
          <div class="nf-ph-desc">Both tests detect unsaturated compounds (alkenes and alkynes). Select a compound, then press the test button to see the animated colour change!</div>
        </div>
      </div>

      <!-- BROMINE TEST -->
      <div class="nf-test-section">
        <div class="nf-section-title" style="color:#c2410c">🟤 Bromine Water Test (Br₂ in water)</div>
        <div class="nf-test-inner" style="border-color:#c2410c">
          <div class="nf-test-head" style="color:#c2410c">
            <div class="nf-test-icon">🫙</div>
            <div>
              <div class="nf-test-name">Bromine Water Test</div>
              <div class="nf-test-reagent">Reagent: Br₂ (aq) — red/orange colour</div>
            </div>
          </div>
          <div class="nf-test-body">
            <div style="text-align:center;font-family:'Fredoka One',cursive;font-size:.88rem;color:#94a3b8;margin-bottom:.8rem">Select a compound:</div>
            <div class="nf-cpd-sel">
              <button class="nf-cpd-pill" style="color:#ff7043;border-color:#ff7043" onclick="nfBrTest('alkane',this)">🔥 Alkane</button>
              <button class="nf-cpd-pill" style="color:#00e5a0;border-color:#00e5a0" onclick="nfBrTest('alkene',this)">🌿 Alkene</button>
              <button class="nf-cpd-pill" style="color:#c084fc;border-color:#c084fc" onclick="nfBrTest('alkyne',this)">⚡ Alkyne</button>
            </div>
            <div class="nf-tube-row">
              <div class="nf-tube-wrap">
                <div class="nf-tube"><div class="nf-tube-liq" id="nf-br-liq1" style="height:70%;background:#c2410c;opacity:.85"></div></div>
                <div class="nf-tube-lbl">Bromine<br>solution</div>
                <div class="nf-tube-res" style="color:#c2410c">Red/orange<br>Br₂</div>
              </div>
              <div class="nf-op">+</div>
              <div class="nf-tube-wrap">
                <div class="nf-tube"><div class="nf-tube-liq" id="nf-br-cpd-liq" style="height:60%;background:rgba(255,255,255,.05)"></div></div>
                <div class="nf-tube-lbl" id="nf-br-cpd-lbl">Select<br>compound</div>
                <div class="nf-tube-res" id="nf-br-cpd-sub" style="color:#6b7280">—</div>
              </div>
              <div class="nf-op">⟶</div>
              <div class="nf-tube-wrap">
                <div class="nf-tube"><div class="nf-tube-liq" id="nf-br-result-liq" style="height:70%;background:rgba(255,255,255,.05)"></div></div>
                <div class="nf-tube-lbl">After<br>mixing</div>
                <div class="nf-tube-res" id="nf-br-after-lbl" style="color:#6b7280">—</div>
              </div>
            </div>
            <button class="nf-run-btn" id="nf-br-btn" style="background:linear-gradient(135deg,#c2410c,#f97316);color:#fff" onclick="nfRunBr()">🧪 Run Bromine Test!</button>
            <div class="nf-test-result" id="nf-br-result">Select a compound above to begin</div>
            <div class="nf-test-explain" id="nf-br-explain"></div>
          </div>
        </div>
      </div>

      <!-- KMnO4 TEST -->
      <div class="nf-test-section">
        <div class="nf-section-title" style="color:#7c3aed">🟣 KMnO₄ Test (Potassium Permanganate)</div>
        <div class="nf-test-inner" style="border-color:#7c3aed">
          <div class="nf-test-head" style="color:#7c3aed">
            <div class="nf-test-icon">🫗</div>
            <div>
              <div class="nf-test-name">KMnO₄ + KOH Test</div>
              <div class="nf-test-reagent">Reagent: KMnO₄ (aq) — pink/purple colour</div>
            </div>
          </div>
          <div class="nf-test-body">
            <div style="text-align:center;font-family:'Fredoka One',cursive;font-size:.88rem;color:#94a3b8;margin-bottom:.8rem">Select a compound:</div>
            <div class="nf-cpd-sel">
              <button class="nf-cpd-pill" style="color:#ff7043;border-color:#ff7043" onclick="nfKmTest('alkane',this)">🔥 Alkane</button>
              <button class="nf-cpd-pill" style="color:#00e5a0;border-color:#00e5a0" onclick="nfKmTest('alkene',this)">🌿 Alkene</button>
              <button class="nf-cpd-pill" style="color:#c084fc;border-color:#c084fc" onclick="nfKmTest('alkyne',this)">⚡ Alkyne</button>
            </div>
            <div class="nf-tube-row">
              <div class="nf-tube-wrap">
                <div class="nf-tube"><div class="nf-tube-liq" style="height:70%;background:#7c3aed;opacity:.85"></div></div>
                <div class="nf-tube-lbl">KMnO₄<br>solution</div>
                <div class="nf-tube-res" style="color:#a78bfa">Pink/purple<br>KMnO₄</div>
              </div>
              <div class="nf-op">+</div>
              <div class="nf-tube-wrap">
                <div class="nf-tube"><div class="nf-tube-liq" id="nf-km-cpd-liq" style="height:60%;background:rgba(255,255,255,.05)"></div></div>
                <div class="nf-tube-lbl" id="nf-km-cpd-lbl">Select<br>compound</div>
                <div class="nf-tube-res" id="nf-km-cpd-sub" style="color:#6b7280">—</div>
              </div>
              <div class="nf-op">⟶</div>
              <div class="nf-tube-wrap">
                <div class="nf-tube"><div class="nf-tube-liq" id="nf-km-result-liq" style="height:70%;background:rgba(255,255,255,.05)"></div></div>
                <div class="nf-tube-lbl">After<br>mixing</div>
                <div class="nf-tube-res" id="nf-km-after-lbl" style="color:#6b7280">—</div>
              </div>
            </div>
            <button class="nf-run-btn" id="nf-km-btn" style="background:linear-gradient(135deg,#4c1d95,#7c3aed);color:#fff" onclick="nfRunKm()">🧫 Run KMnO₄ Test!</button>
            <div class="nf-test-result" id="nf-km-result">Select a compound above to begin</div>
            <div class="nf-test-explain" id="nf-km-explain"></div>
          </div>
        </div>
      </div>

      <!-- SUMMARY -->
      <div class="nf-box">
        <div class="nf-box-head" style="color:#fbbf24"><span class="nf-box-label">SUMMARY</span><span class="nf-box-title">Both Tests at a Glance</span></div>
        <div class="nf-box-body">
          <div class="nf-sum-row">
            <div class="nf-sum-cpd" style="color:#ff7043">🔥 Alkane</div>
            <div class="nf-sum-res" style="color:#f87171;border-color:#f87171">Br₂: No change ❌</div>
            <div class="nf-sum-res" style="color:#f87171;border-color:#f87171">KMnO₄: No change ❌</div>
            <div style="font-size:.82rem;font-weight:700;color:#f87171">Saturated — no double bond</div>
          </div>
          <div class="nf-sum-row">
            <div class="nf-sum-cpd" style="color:#00e5a0">🌿 Alkene</div>
            <div class="nf-sum-res" style="color:#4ade80;border-color:#4ade80">Br₂: Decolourises ✅</div>
            <div class="nf-sum-res" style="color:#4ade80;border-color:#4ade80">KMnO₄: Decolourises ✅</div>
            <div style="font-size:.82rem;font-weight:700;color:#4ade80">Unsaturated — C=C double bond</div>
          </div>
          <div class="nf-sum-row">
            <div class="nf-sum-cpd" style="color:#c084fc">⚡ Alkyne</div>
            <div class="nf-sum-res" style="color:#4ade80;border-color:#4ade80">Br₂: Decolourises ✅</div>
            <div class="nf-sum-res" style="color:#4ade80;border-color:#4ade80">KMnO₄: Decolourises ✅</div>
            <div style="font-size:.82rem;font-weight:700;color:#4ade80">Unsaturated — C≡C triple bond</div>
          </div>
          <div class="nf-note" style="border-color:#fbbf24;margin-top:.5rem">💡 Both tests detect C=C or C≡C bonds. The reagent adds across the bond and is consumed, removing the colour. Saturated alkanes have no such bonds — no reaction, colour stays.</div>
        </div>
      </div>
    `;
    main.appendChild(brPanel);

    // ─── 5. HOOK INTO EXISTING show() FUNCTION ──────────────────
    // Override the show function to also hide our panels
    const _origShow = window.show;
    window.show = function(id, btn) {
      // Hide all NF panels when existing panels are shown
      document.querySelectorAll('.nf-panel').forEach(p => p.classList.remove('on'));
      document.querySelectorAll('[data-nf-panel]').forEach(b => b.classList.remove('active', 'on'));
      if (_origShow) _origShow(id, btn);
    };
  }

  // ─── PANEL SWITCHER FOR NEW PANELS ──────────────────────────
  window.showNFPanel = function(id, btn) {
    // Hide all existing panels
    document.querySelectorAll('.panel, [class*="panel-"]').forEach(p => p.classList.remove('on', 'active'));
    // Hide all NF panels
    document.querySelectorAll('.nf-panel').forEach(p => p.classList.remove('on'));
    // Deactivate all nav buttons
    document.querySelectorAll('nav button, nav .btn, nav [class*="btn"]').forEach(b => b.classList.remove('active', 'on'));
    // Show target NF panel
    const panel = document.getElementById('nf-panel-' + id);
    if (panel) panel.classList.add('on');
    btn.classList.add('on');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // ─── THEME TOGGLE ────────────────────────────────────────────
  window.toggleTheme = function() {
    document.body.classList.toggle('light-mode');
    const btn = document.getElementById('nf-theme-btn');
    if (btn) btn.textContent = document.body.classList.contains('light-mode') ? '🌙' : '☀️';
    localStorage.setItem('nf-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
  };

  // ─── CHEMICAL TESTS JS ───────────────────────────────────────
  const NF_CPD = {
    alkane: { lbl: 'Alkane', col: '#ff7043', unsaturated: false },
    alkene: { lbl: 'Alkene', col: '#00e5a0', unsaturated: true },
    alkyne: { lbl: 'Alkyne', col: '#c084fc', unsaturated: true },
  };
  let nfBrCpd = null, nfKmCpd = null, nfBrRunning = false, nfKmRunning = false;

  window.nfBrTest = function(id, btn) {
    nfBrCpd = id; nfBrRunning = false;
    btn.closest('.nf-cpd-sel').querySelectorAll('.nf-cpd-pill').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    const d = NF_CPD[id];
    document.getElementById('nf-br-cpd-liq').style.background = d.col + '55';
    document.getElementById('nf-br-cpd-lbl').innerHTML = d.lbl + '<br>&nbsp;';
    document.getElementById('nf-br-cpd-sub').textContent = d.unsaturated ? 'Unsaturated' : 'Saturated';
    document.getElementById('nf-br-result-liq').style.background = '#c2410c';
    document.getElementById('nf-br-result-liq').style.opacity = '.85';
    document.getElementById('nf-br-after-lbl').textContent = '?';
    document.getElementById('nf-br-result').style.cssText = 'border-color:rgba(255,255,255,.1);color:#6b7280;background:transparent';
    document.getElementById('nf-br-result').textContent = 'Press the button to run the test';
    document.getElementById('nf-br-explain').style.display = 'none';
    document.getElementById('nf-br-btn').style.display = 'block';
  };

  window.nfRunBr = function() {
    if (!nfBrCpd || nfBrRunning) return;
    nfBrRunning = true;
    const d = NF_CPD[nfBrCpd];
    const liq = document.getElementById('nf-br-result-liq');
    const lbl = document.getElementById('nf-br-after-lbl');
    const res = document.getElementById('nf-br-result');
    const exp = document.getElementById('nf-br-explain');
    liq.style.transition = 'background 1.5s ease, opacity 1.2s ease';
    if (d.unsaturated) {
      liq.style.background = 'rgba(226,232,240,0.12)';
      liq.style.opacity = '0.15';
      lbl.textContent = 'Colourless!';
      lbl.style.color = '#4ade80';
      setTimeout(() => {
        res.style.cssText = 'background:rgba(74,222,128,.1);border-color:#4ade80;color:#4ade80';
        res.textContent = '✅ DECOLOURISED — Compound is UNSATURATED!';
        exp.innerHTML = 'The red/orange Br₂ added across the <strong>' + (nfBrCpd === 'alkyne' ? 'C≡C triple' : 'C=C double') + ' bond</strong>. The product (dibromo compound) is colourless. This proves the compound is <strong>unsaturated</strong>.';
        exp.style.display = 'block';
        nfBrRunning = false;
      }, 1600);
    } else {
      liq.style.background = '#c2410c';
      liq.style.opacity = '.85';
      lbl.textContent = 'Still red!';
      lbl.style.color = '#f87171';
      setTimeout(() => {
        res.style.cssText = 'background:rgba(248,113,113,.09);border-color:#f87171;color:#f87171';
        res.textContent = '❌ NO CHANGE — Compound is SATURATED!';
        exp.innerHTML = 'Alkane has only <strong>C–C single bonds</strong>. Bromine cannot add across single bonds under normal conditions — the red colour remains. This proves the compound is <strong>saturated</strong>.';
        exp.style.display = 'block';
        nfBrRunning = false;
      }, 900);
    }
  };

  window.nfKmTest = function(id, btn) {
    nfKmCpd = id; nfKmRunning = false;
    btn.closest('.nf-cpd-sel').querySelectorAll('.nf-cpd-pill').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    const d = NF_CPD[id];
    document.getElementById('nf-km-cpd-liq').style.background = d.col + '55';
    document.getElementById('nf-km-cpd-lbl').innerHTML = d.lbl + '<br>&nbsp;';
    document.getElementById('nf-km-cpd-sub').textContent = d.unsaturated ? 'Unsaturated' : 'Saturated';
    document.getElementById('nf-km-result-liq').style.background = '#7c3aed';
    document.getElementById('nf-km-result-liq').style.opacity = '.85';
    document.getElementById('nf-km-after-lbl').textContent = '?';
    document.getElementById('nf-km-result').style.cssText = 'border-color:rgba(255,255,255,.1);color:#6b7280;background:transparent';
    document.getElementById('nf-km-result').textContent = 'Press the button to run the test';
    document.getElementById('nf-km-explain').style.display = 'none';
    document.getElementById('nf-km-btn').style.display = 'block';
  };

  window.nfRunKm = function() {
    if (!nfKmCpd || nfKmRunning) return;
    nfKmRunning = true;
    const d = NF_CPD[nfKmCpd];
    const liq = document.getElementById('nf-km-result-liq');
    const lbl = document.getElementById('nf-km-after-lbl');
    const res = document.getElementById('nf-km-result');
    const exp = document.getElementById('nf-km-explain');
    liq.style.transition = 'background 1.5s ease, opacity 1.2s ease';
    if (d.unsaturated) {
      liq.style.background = 'rgba(226,232,240,0.12)';
      liq.style.opacity = '0.15';
      lbl.textContent = 'Colourless!';
      lbl.style.color = '#4ade80';
      setTimeout(() => {
        res.style.cssText = 'background:rgba(74,222,128,.1);border-color:#4ade80;color:#4ade80';
        res.textContent = '✅ DECOLOURISED — Compound is UNSATURATED!';
        exp.innerHTML = 'KMnO₄ acts as an <strong>oxidising agent</strong>. It oxidises the ' + d.lbl + ' across the <strong>' + (nfKmCpd === 'alkyne' ? 'C≡C triple' : 'C=C double') + ' bond</strong>, forming a diol. As KMnO₄ is consumed, the <strong>pink/purple colour disappears</strong>.';
        exp.style.display = 'block';
        nfKmRunning = false;
      }, 1600);
    } else {
      liq.style.background = '#7c3aed';
      liq.style.opacity = '.85';
      lbl.textContent = 'Still pink!';
      lbl.style.color = '#f87171';
      setTimeout(() => {
        res.style.cssText = 'background:rgba(248,113,113,.09);border-color:#f87171;color:#f87171';
        res.textContent = '❌ NO CHANGE — Compound is SATURATED!';
        exp.innerHTML = 'Alkane has no <strong>double or triple bonds</strong> for KMnO₄ to oxidise. The pink/purple colour remains unchanged. This proves the compound is <strong>saturated</strong>.';
        exp.style.display = 'block';
        nfKmRunning = false;
      }, 900);
    }
  };

  // ─── BOOT ────────────────────────────────────────────────────
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(init, 200); });
  } else {
    setTimeout(init, 200);
  }

})();
