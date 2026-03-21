/*!
 * Organic Chemistry Lab – Chapter 11
 * Standalone JavaScript version
 * Usage: <script src="chemistry_ch11.js"></script>  (in an otherwise empty HTML page)
 *        OR load directly in a browser via a minimal loader (see bottom of this file).
 */

(function () {
  'use strict';

  // ─────────────────────────────────────────────
  //  1. INJECT GOOGLE FONTS
  // ─────────────────────────────────────────────
  const fontLink = document.createElement('link');
  fontLink.rel  = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka+One&family=JetBrains+Mono:wght@400;700&display=swap';
  document.head.appendChild(fontLink);

  // ─────────────────────────────────────────────
  //  2. INJECT ALL CSS
  // ─────────────────────────────────────────────
  const css = `
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Nunito',sans-serif;background:#07071a;color:#e2e8f0;min-height:100vh;background-image:radial-gradient(ellipse 80% 50% at 20% 0%,rgba(99,102,241,.07),transparent),radial-gradient(ellipse 60% 60% at 80% 100%,rgba(192,132,252,.06),transparent)}
:root{--ka:#ff7043;--ke:#00e5a0;--ky:#c084fc;--al:#38bdf8;--ad:#fbbf24;--ac:#f472b6;--cy:#fb923c;--sf:#131328;--bd:#1e1e42}
header{text-align:center;padding:3rem 1rem 2rem;border-bottom:1px solid #1e1e42;position:relative}
.hl{font-size:.78rem;letter-spacing:.25em;color:#6366f1;text-transform:uppercase;font-weight:800;margin-bottom:.5rem}
h1{font-family:'Fredoka One',cursive;font-size:clamp(2.2rem,5vw,3.8rem);background:linear-gradient(135deg,#818cf8 0%,#c084fc 50%,#f472b6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1;margin-bottom:.4rem}
.hd{color:#6366f1;font-size:1rem;font-weight:700}
nav{display:flex;flex-wrap:wrap;gap:.8rem;justify-content:center;padding:1.8rem 1rem;max-width:1080px;margin:0 auto}
.btn{font-family:'Fredoka One',cursive;cursor:pointer;border:none;outline:none;display:inline-flex;flex-direction:column;align-items:center;gap:.18rem;padding:.8rem 1.5rem;border-radius:12px;font-size:1rem;transition:all .22s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden;min-width:108px}
.bs{font-family:'JetBrains Mono',monospace;font-size:.6rem;opacity:.7;font-weight:400;letter-spacing:.03em}
.btn:active{transform:scale(.96)!important}
.b-ka{color:#fff;background:linear-gradient(180deg,#ff8a65 0%,#d84315 100%);box-shadow:0 5px 0 #8d2309,0 8px 18px rgba(255,83,26,.35)}
.b-ka:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 8px 0 #8d2309,0 12px 24px rgba(255,83,26,.45)}
.b-ka.on{box-shadow:0 2px 0 #8d2309,0 3px 8px rgba(255,83,26,.3);transform:translateY(3px)}
.b-ke{color:#002a22;background:linear-gradient(180deg,#26dba8 0%,#00796b 100%);box-shadow:0 5px 0 #004d40,0 8px 18px rgba(0,200,130,.3)}
.b-ke:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 8px 0 #004d40,0 12px 24px rgba(0,200,130,.4)}
.b-ke.on{box-shadow:0 2px 0 #004d40,0 3px 8px rgba(0,200,130,.25);transform:translateY(3px)}
.b-ky{color:#fff;background:linear-gradient(180deg,#d8b4fe 0%,#6d28d9 100%);box-shadow:0 5px 0 #3b0764,0 8px 18px rgba(139,92,246,.35)}
.b-ky:hover{transform:translateY(-3px) scale(1.03);box-shadow:0 8px 0 #3b0764,0 12px 24px rgba(139,92,246,.5)}
.b-ky.on{box-shadow:0 2px 0 #3b0764,0 3px 8px rgba(139,92,246,.3);transform:translateY(3px)}
.b-al{color:var(--al);background:transparent;border:2px solid var(--al);box-shadow:0 0 0 transparent,inset 0 0 0 transparent}
.b-al:hover{background:rgba(56,189,248,.1);box-shadow:0 0 20px rgba(56,189,248,.4),inset 0 0 16px rgba(56,189,248,.08);transform:translateY(-3px) scale(1.03)}
.b-al.on{background:rgba(56,189,248,.14);box-shadow:0 0 28px rgba(56,189,248,.5),inset 0 0 16px rgba(56,189,248,.1)}
.b-ad{color:var(--ad);background:transparent;border:2px solid var(--ad);box-shadow:0 0 0 transparent}
.b-ad:hover{background:rgba(251,191,36,.1);box-shadow:0 0 20px rgba(251,191,36,.4),inset 0 0 16px rgba(251,191,36,.08);transform:translateY(-3px) scale(1.03)}
.b-ad.on{background:rgba(251,191,36,.14);box-shadow:0 0 28px rgba(251,191,36,.5)}
.b-ac{color:var(--ac);background:transparent;border:2px solid var(--ac);box-shadow:0 0 0 transparent}
.b-ac:hover{background:rgba(244,114,182,.1);box-shadow:0 0 20px rgba(244,114,182,.4);transform:translateY(-3px) scale(1.03)}
.b-ac.on{background:rgba(244,114,182,.14);box-shadow:0 0 28px rgba(244,114,182,.5)}
.b-ex{color:#fff;background:linear-gradient(270deg,#06b6d4,#8b5cf6,#ec4899,#06b6d4);background-size:300% 100%;animation:bgmove 5s ease infinite;border-radius:50px;box-shadow:0 4px 18px rgba(139,92,246,.4);border:none}
.b-ex:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(139,92,246,.55)}
.b-ex.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(139,92,246,.4)}
@keyframes bgmove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
.b-sy{color:#fff;background:linear-gradient(135deg,#f59e0b,#ef4444);border-radius:50px;box-shadow:0 4px 18px rgba(239,68,68,.35);border:none}
.b-sy:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(239,68,68,.5)}
.b-sy.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(239,68,68,.3)}
.b-mq{color:#fff;background:linear-gradient(135deg,#059669,#10b981);border-radius:50px;box-shadow:0 4px 18px rgba(16,185,129,.35);border:none}
.b-mq:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(16,185,129,.5)}
.b-mq.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(16,185,129,.3)}
.b-nm{color:#fff;background:linear-gradient(135deg,#0ea5e9,#7c3aed);border-radius:50px;box-shadow:0 4px 18px rgba(124,58,237,.4);border:none}
.b-nm:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(124,58,237,.55)}
.b-nm.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(124,58,237,.35)}
.b-fb{color:#fff;background:linear-gradient(135deg,#14b8a6,#0284c7);border-radius:50px;box-shadow:0 4px 18px rgba(20,184,166,.4);border:none}
.b-fb:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(20,184,166,.55)}
.b-fb.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(20,184,166,.35)}
.fb-wrap{max-width:640px;margin:0 auto}
.fb-screen{font-family:'JetBrains Mono',monospace;font-size:1.5rem;min-height:70px;background:linear-gradient(160deg,#070720,#0a0a2a);border:2px solid #1e3a5f;border-radius:14px;padding:1rem 1.4rem;color:#7dd3fc;margin-bottom:.3rem;word-break:break-all;letter-spacing:.06em;display:flex;align-items:center;flex-wrap:wrap;gap:.1rem}
.fb-screen .fb-atom{color:#fde68a}
.fb-screen .fb-bond-s{color:#4ade80;font-size:1.2rem;padding:0 .1rem}
.fb-screen .fb-bond-d{color:#f472b6;font-size:1.2rem;padding:0 .1rem}
.fb-screen .fb-bond-t{color:#c084fc;font-size:1.2rem;padding:0 .1rem}
.fb-screen .fb-br{color:#94a3b8}
.fb-formula{font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#6b7280;margin-bottom:1.1rem;padding:.35rem .9rem;background:rgba(255,255,255,.03);border-radius:8px;border:1px solid var(--bd);min-height:28px}
.fb-kbd{display:grid;grid-template-columns:repeat(5,1fr);gap:.55rem;margin-bottom:1rem}
.fb-key{font-family:'Fredoka One',cursive;font-size:1.1rem;padding:.7rem .4rem;border:none;border-radius:12px;cursor:pointer;transition:all .18s cubic-bezier(.34,1.56,.64,1);text-align:center;user-select:none}
.fb-key:active{transform:scale(.93)!important}
.fb-key-c{background:linear-gradient(180deg,#fde68a,#f59e0b);color:#1a0a00;box-shadow:0 4px 0 #92400e}
.fb-key-c:hover{transform:translateY(-2px);box-shadow:0 6px 0 #92400e}
.fb-key-h{background:linear-gradient(180deg,#93c5fd,#2563eb);color:#fff;box-shadow:0 4px 0 #1e3a8a}
.fb-key-h:hover{transform:translateY(-2px);box-shadow:0 6px 0 #1e3a8a}
.fb-key-o{background:linear-gradient(180deg,#fca5a5,#dc2626);color:#fff;box-shadow:0 4px 0 #7f1d1d}
.fb-key-o:hover{transform:translateY(-2px);box-shadow:0 6px 0 #7f1d1d}
.fb-key-n{background:linear-gradient(180deg,#86efac,#16a34a);color:#fff;box-shadow:0 4px 0 #14532d}
.fb-key-n:hover{transform:translateY(-2px);box-shadow:0 6px 0 #14532d}
.fb-key-cl{background:linear-gradient(180deg,#d8b4fe,#7c3aed);color:#fff;box-shadow:0 4px 0 #3b0764;font-size:.85rem}
.fb-key-cl:hover{transform:translateY(-2px);box-shadow:0 6px 0 #3b0764}
.fb-key-bond{background:rgba(74,222,128,.12);border:2px solid rgba(74,222,128,.35);color:#4ade80;font-size:1.3rem}
.fb-key-bond:hover{background:rgba(74,222,128,.22);transform:translateY(-2px)}
.fb-key-bondd{background:rgba(244,114,182,.12);border:2px solid rgba(244,114,182,.35);color:#f472b6;font-size:1.3rem}
.fb-key-bondd:hover{background:rgba(244,114,182,.22);transform:translateY(-2px)}
.fb-key-bondt{background:rgba(192,132,252,.12);border:2px solid rgba(192,132,252,.35);color:#c084fc;font-size:1.2rem}
.fb-key-bondt:hover{background:rgba(192,132,252,.22);transform:translateY(-2px)}
.fb-key-br{background:rgba(148,163,184,.1);border:2px solid rgba(148,163,184,.25);color:#94a3b8}
.fb-key-br:hover{background:rgba(148,163,184,.2);transform:translateY(-2px)}
.fb-key-back{background:rgba(239,68,68,.12);border:2px solid rgba(239,68,68,.3);color:#f87171}
.fb-key-back:hover{background:rgba(239,68,68,.22);transform:translateY(-2px)}
.fb-key-clear{background:rgba(239,68,68,.18);border:2px solid rgba(239,68,68,.4);color:#fca5a5;font-size:.88rem}
.fb-key-clear:hover{background:rgba(239,68,68,.3);transform:translateY(-2px)}
.fb-key-search{background:linear-gradient(135deg,#14b8a6,#0284c7);color:#fff;grid-column:span 5;font-size:1.05rem;padding:.85rem;border-radius:14px;box-shadow:0 4px 18px rgba(20,184,166,.35)}
.fb-key-search:hover{transform:translateY(-2px);box-shadow:0 7px 24px rgba(20,184,166,.5)}
.fb-legend{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:1.2rem;font-size:.72rem}
.fb-leg{display:flex;align-items:center;gap:.3rem;padding:.25rem .6rem;background:rgba(255,255,255,.04);border-radius:6px;border:1px solid var(--bd)}
.fb-result{animation:fadeUp .35s ease}
.fb-matches{display:flex;flex-direction:column;gap:.8rem}
.fb-match{background:var(--sf);border:2px solid;border-radius:14px;overflow:hidden;cursor:pointer;transition:box-shadow .2s}
.fb-match:hover{box-shadow:0 4px 22px rgba(0,0,0,.4)}
.fb-match-head{display:flex;align-items:center;gap:.8rem;padding:.8rem 1.2rem;background:rgba(0,0,0,.28)}
.fb-match-icon{font-size:1.8rem}
.fb-match-name{font-family:'Fredoka One',cursive;font-size:1.2rem}
.fb-match-class{font-size:.72rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;opacity:.65;margin-left:auto}
.fb-match-body{padding:.9rem 1.2rem;display:grid;grid-template-columns:1fr 1fr;gap:.6rem}
.fb-mf{font-family:'JetBrains Mono',monospace;font-size:.78rem}
.fb-mfl{font-size:.62rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:#6b7280;margin-bottom:.15rem}
.fb-mfv{color:#fde68a}
.fb-mfv2{color:#c4b5fd}
.fb-notfound{text-align:center;padding:2.5rem 1rem;color:#374151}
.fb-hint{font-size:.82rem;color:#4b5563;margin-top:.5rem;font-style:italic}
.nm-wrap{max-width:700px;margin:0 auto}
.nm-search{display:flex;gap:.7rem;margin-bottom:1.8rem;flex-wrap:wrap}
.nm-input{flex:1;min-width:200px;font-family:'Fredoka One',cursive;font-size:1.05rem;padding:.85rem 1.3rem;background:var(--sf);border:2px solid var(--bd);border-radius:13px;color:#e2e8f0;outline:none;transition:border-color .2s}
.nm-input:focus{border-color:#818cf8;box-shadow:0 0 0 3px rgba(129,140,248,.15)}
.nm-input::placeholder{color:#374151;font-family:'Nunito',sans-serif}
.nm-btn{font-family:'Fredoka One',cursive;font-size:1rem;padding:.85rem 1.8rem;border:none;border-radius:13px;cursor:pointer;background:linear-gradient(135deg,#7c3aed,#0ea5e9);color:#fff;box-shadow:0 4px 16px rgba(124,58,237,.35);transition:all .22s cubic-bezier(.34,1.56,.64,1)}
.nm-btn:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 7px 22px rgba(124,58,237,.5)}
.nm-result{animation:fadeUp .35s ease}
.nm-card{background:var(--sf);border:2px solid #818cf8;border-radius:18px;overflow:hidden;margin-bottom:1.2rem}
.nm-head{display:flex;align-items:center;gap:1rem;padding:1.2rem 1.5rem;background:linear-gradient(135deg,rgba(124,58,237,.18),rgba(14,165,233,.12));border-bottom:1px solid var(--bd)}
.nm-icon{font-size:2.5rem;filter:drop-shadow(0 0 10px #818cf8)}
.nm-title{font-family:'Fredoka One',cursive;font-size:1.6rem;color:#c4b5fd}
.nm-sub{font-size:.85rem;color:#6366f1;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-top:.1rem}
.nm-body{padding:1.4rem 1.5rem;display:flex;flex-direction:column;gap:1.1rem}
.nm-row{display:flex;flex-direction:column;gap:.4rem}
.nm-lbl{font-size:.72rem;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#6366f1}
.nm-val{font-family:'Times New Roman',Times,serif;font-size:1.25rem;font-weight:700;font-style:italic;color:#fde68a;background:linear-gradient(160deg,#070720,#0f0728);padding:.85rem 1.2rem;border-radius:11px;border:1.5px solid rgba(255,255,255,.09);letter-spacing:.04em}
.nm-struct{font-family:'JetBrains Mono',monospace;font-size:.95rem;font-style:normal;color:#6ee7b7;background:rgba(0,0,0,.35);padding:1rem 1.2rem;border-radius:11px;border:1.5px solid rgba(110,231,183,.18);white-space:pre;overflow-x:auto;line-height:1.7}
.nm-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.65rem}
.nm-fact{background:rgba(255,255,255,.03);border:1px solid var(--bd);border-radius:10px;padding:.65rem .9rem;text-align:center}
.nm-fv{font-family:'Fredoka One',cursive;font-size:1.1rem;color:#c4b5fd}
.nm-fl{font-size:.68rem;font-weight:800;letter-spacing:.08em;text-transform:uppercase;color:#6b7280;margin-top:.15rem}
.nm-aka{font-size:.88rem;color:#94a3b8;font-weight:600;background:rgba(255,255,255,.03);padding:.6rem 1rem;border-radius:9px;border:1px solid var(--bd)}
.nm-aka strong{color:#a5b4fc}
.nm-notfound{text-align:center;padding:3.5rem 1rem;color:#374151}
.nm-nfi{font-size:3rem;display:block;margin-bottom:.7rem;opacity:.4}
.nm-nft{font-family:'Fredoka One',cursive;font-size:1.4rem;color:#374151;margin-bottom:.35rem}
.nm-nfs{font-size:.93rem;color:#4b5563;font-weight:600}
.nm-suggest{display:flex;flex-wrap:wrap;gap:.45rem;justify-content:center;margin-top:1rem}
.nm-sug{font-family:'Fredoka One',cursive;font-size:.82rem;padding:.3rem .9rem;border:1.5px solid #4b5563;border-radius:50px;background:transparent;color:#9ca3af;cursor:pointer;transition:all .18s}
.nm-sug:hover{border-color:#818cf8;color:#c4b5fd;background:rgba(129,140,248,.08)}
main{max-width:1060px;margin:0 auto;padding:0 1rem 5rem}
.panel{display:none;animation:fadeUp .38s ease}.panel.on{display:block}
@keyframes fadeUp{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}
.ph{display:flex;align-items:flex-start;gap:1.2rem;padding:1.5rem 1.8rem;border-radius:18px;border:2px solid;background:var(--sf);margin-bottom:1.8rem;position:relative;overflow:hidden}
.ph::after{content:'';position:absolute;right:-24px;top:-24px;width:110px;height:110px;border-radius:50%;background:currentColor;opacity:.05;pointer-events:none}
.phi{font-size:2.8rem;flex-shrink:0;line-height:1;filter:drop-shadow(0 0 10px currentColor)}
.pht{font-family:'Fredoka One',cursive;font-size:1.8rem;margin-bottom:.3rem}
.phb{display:flex;gap:.45rem;flex-wrap:wrap;margin-bottom:.45rem}
.badge{font-family:'JetBrains Mono',monospace;font-size:.7rem;padding:.18rem .65rem;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:6px;font-weight:700}
.phd{font-size:.95rem;color:#94a3b8;font-weight:600;line-height:1.55}
.mc{background:var(--sf);border:2px solid var(--bd);border-left:4px solid;border-radius:16px;overflow:hidden;margin-bottom:1.4rem;transition:box-shadow .2s}
.mc:hover{box-shadow:0 4px 26px rgba(0,0,0,.45)}
.mct{display:flex;align-items:center;gap:.75rem;padding:.85rem 1.3rem;background:rgba(0,0,0,.3);border-bottom:1px solid var(--bd)}
.mn{font-family:'Fredoka One',cursive;font-size:.8rem;padding:.18rem .75rem;border-radius:8px;border:1.5px solid currentColor;background:rgba(255,255,255,.04)}
.mtt{font-family:'Fredoka One',cursive;font-size:1.15rem}
.mcb{padding:1.3rem}
.tabs{display:flex;gap:.4rem;margin-bottom:1.1rem;border-bottom:2px solid var(--bd)}
.tab{font-family:'Fredoka One',cursive;font-size:.92rem;padding:.5rem 1.1rem;background:transparent;border:none;color:#6366f1;cursor:pointer;border-bottom:3px solid transparent;position:relative;top:2px;border-radius:8px 8px 0 0;transition:all .18s}
.tab:hover{color:#a5b4fc;background:rgba(255,255,255,.04)}
.tab.on{color:#fff;border-bottom-color:currentColor;background:rgba(255,255,255,.05)}
.cbl{display:none}.cbl.on{display:block;animation:fadeUp .22s ease}
.rb{background:rgba(0,0,0,.3);border:1.5px solid rgba(255,255,255,.07);border-radius:13px;padding:1.2rem;margin-bottom:.9rem;position:relative;overflow:hidden}
.rb::before{content:'';position:absolute;top:0;left:10%;right:10%;height:1.5px;background:linear-gradient(90deg,transparent,currentColor,transparent);opacity:.3;pointer-events:none}
.rl{font-size:.74rem;font-weight:800;letter-spacing:.15em;color:#6366f1;text-transform:uppercase;margin-bottom:.5rem}
.rn{font-family:'Fredoka One',cursive;font-size:1.25rem;margin-bottom:.75rem}
.eq{font-family:'Times New Roman',Times,serif;font-size:1.05rem;font-style:italic;font-weight:700;display:flex;align-items:center;flex-wrap:wrap;gap:.5rem;padding:1rem 1.3rem;background:linear-gradient(160deg,#070720,#0f0728);border:1.5px solid rgba(255,255,255,.1);border-radius:12px;margin:.7rem 0;overflow-x:auto;box-shadow:inset 0 1px 0 rgba(255,255,255,.05)}
.r{color:#fde68a;white-space:nowrap;text-shadow:0 0 12px rgba(253,230,138,.45)}
.prod{color:#6ee7b7;white-space:nowrap;font-style:normal;font-weight:900;text-shadow:0 0 12px rgba(110,231,183,.45)}
.hi{color:#fff;font-style:normal;font-weight:900;font-size:1.1rem;text-shadow:0 0 16px currentColor,0 0 32px currentColor;filter:drop-shadow(0 0 7px currentColor)}
.plus{color:#c4b5fd;font-style:normal;font-weight:900;padding:0 .05rem}
.pplus{color:#86efac;font-style:normal;font-weight:900;padding:0 .05rem}
.ab{display:flex;flex-direction:column;align-items:center;gap:.1rem;padding:0 .6rem;flex-shrink:0}
.ct{font-family:'JetBrains Mono',monospace;font-size:.66rem;color:#7dd3fc;white-space:nowrap;background:rgba(125,211,252,.07);padding:.1rem .45rem;border-radius:5px;border:1px solid rgba(125,211,252,.18)}
.cb2{font-family:'JetBrains Mono',monospace;font-size:.66rem;color:#fbbf24;white-space:nowrap;background:rgba(251,191,36,.07);padding:.1rem .45rem;border-radius:5px;border:1px solid rgba(251,191,36,.18)}
.arr{font-size:1.8rem;color:#f1f5f9;line-height:1;text-shadow:0 0 8px rgba(241,245,249,.35)}
.wd{font-size:.88rem;color:#64748b;font-style:italic;margin-top:.4rem;padding-left:.2rem}
.note{font-size:.93rem;color:#94a3b8;background:rgba(255,255,255,.03);border-left:3px solid currentColor;padding:.75rem .95rem;margin-top:.9rem;line-height:1.6;border-radius:0 10px 10px 0}
.empty{text-align:center;padding:6rem 1rem;color:#374151}
.ei{font-size:4rem;margin-bottom:.8rem;animation:pulse 3s ease-in-out infinite;display:block}
.et{font-family:'Fredoka One',cursive;font-size:1.7rem;color:#374151;margin-bottom:.4rem}
.es{font-size:.95rem;font-weight:600}
@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.08)}}
.exsel{display:flex;align-items:center;gap:1.2rem;flex-wrap:wrap;justify-content:center;padding:1.2rem 0 2rem}
.sg{display:flex;flex-direction:column;align-items:center;gap:.55rem}
.slbl{font-family:'Fredoka One',cursive;font-size:1rem;color:#6366f1;letter-spacing:.05em}
.pills{display:flex;flex-wrap:wrap;gap:.45rem;justify-content:center;max-width:340px}
.pill{font-family:'Fredoka One',cursive;font-size:.85rem;padding:.4rem 1rem;border-radius:50px;border:2px solid;background:transparent;cursor:pointer;transition:all .18s cubic-bezier(.34,1.56,.64,1);opacity:.5;outline:none}
.pill:hover{opacity:.9;transform:scale(1.07)}
.pill.on{opacity:1;transform:scale(1.05)}
.pill.dis{opacity:.15;pointer-events:none}
.pk{color:var(--ka);border-color:var(--ka)}.pk.on{box-shadow:0 0 14px var(--ka)}
.pe{color:var(--ke);border-color:var(--ke)}.pe.on{box-shadow:0 0 14px var(--ke)}
.py{color:var(--ky);border-color:var(--ky)}.py.on{box-shadow:0 0 14px var(--ky)}
.pa{color:var(--al);border-color:var(--al)}.pa.on{box-shadow:0 0 14px var(--al)}
.pd{color:var(--ad);border-color:var(--ad)}.pd.on{box-shadow:0 0 14px var(--ad)}
.pf{color:var(--ac);border-color:var(--ac)}.pf.on{box-shadow:0 0 14px var(--ac)}
.exarr{font-size:2.8rem;background:linear-gradient(90deg,var(--ka),var(--ky),var(--ac));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:pulse 2.2s ease-in-out infinite}
.exhint{font-family:'Fredoka One',cursive;font-size:.78rem;color:#374151;margin-top:.25rem}
#exr{min-height:120px}
.exmt{text-align:center;padding:2.5rem 1rem;color:#374151}
.exi{font-size:2.2rem;opacity:.4;margin-bottom:.4rem}
.ext{font-family:'Fredoka One',cursive;font-size:1rem}
.phd2{display:flex;align-items:center;gap:.8rem;flex-wrap:wrap;padding:1.1rem 1.4rem;background:var(--sf);border:2px solid var(--bd);border-radius:14px;margin-bottom:1.4rem}
.pf2{font-family:'Fredoka One',cursive;font-size:1.35rem}
.pm{font-size:1.6rem;color:#374151}
.sbadge{font-family:'JetBrains Mono',monospace;font-size:.7rem;padding:.28rem .9rem;border:2px solid currentColor;border-radius:10px;margin-left:auto;background:rgba(255,255,255,.04)}
.pnote{font-family:'JetBrains Mono',monospace;font-size:.68rem;color:#f59e0b;width:100%;margin-top:.2rem}
.stcard{background:var(--sf);border:2px solid var(--bd);border-radius:13px;overflow:hidden;margin-bottom:.9rem}
.stt{display:flex;align-items:center;gap:.7rem;padding:.7rem 1.2rem;background:rgba(0,0,0,.28);border-bottom:1px solid var(--bd)}
.stn{font-family:'Fredoka One',cursive;font-size:.8rem;padding:.18rem .7rem;border-radius:8px;background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.12)}
.sttt{font-family:'Fredoka One',cursive;font-size:1.05rem}
.stb{padding:1.1rem 1.3rem}
.etabs{display:flex;gap:.4rem;margin-bottom:1rem;border-bottom:2px solid var(--bd)}
.etab{font-family:'Fredoka One',cursive;font-size:.88rem;padding:.45rem 1rem;background:transparent;border:none;border-bottom:3px solid transparent;color:#6366f1;cursor:pointer;position:relative;top:2px;border-radius:8px 8px 0 0;transition:all .18s}
.etab:hover{color:#a5b4fc;background:rgba(255,255,255,.04)}
.etab.on{color:#fff;border-bottom-color:#fff;background:rgba(255,255,255,.05)}
.ecbl{display:none}.ecbl.on{display:block;animation:fadeUp .22s ease}
.spicks{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;padding-bottom:1.8rem}
.spk{flex:1;min-width:130px;max-width:200px;border:2.5px solid;border-radius:18px;background:var(--sf);cursor:pointer;padding:1.3rem .9rem;text-align:center;transition:all .28s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden}
.spk::before{content:'';position:absolute;inset:0;border-radius:16px;background:currentColor;opacity:0;transition:opacity .28s}
.spk:hover{transform:translateY(-5px) scale(1.03)}.spk:hover::before{opacity:.07}
.spk.on{transform:translateY(-3px) scale(1.04);box-shadow:0 0 26px currentColor}.spk.on::before{opacity:.12}
.spki{font-size:2.6rem;display:block;margin-bottom:.45rem;filter:drop-shadow(0 0 8px currentColor);position:relative;z-index:1}
.spkn{font-family:'Fredoka One',cursive;font-size:1.35rem;display:block;position:relative;z-index:1}
.spkf{font-family:'JetBrains Mono',monospace;font-size:.72rem;opacity:.65;display:block;position:relative;z-index:1}
.ska{color:var(--ka);border-color:var(--ka)}.ske{color:var(--ke);border-color:var(--ke)}.sky{color:var(--ky);border-color:var(--ky)}
.spkc{font-size:.7rem;font-weight:800;letter-spacing:.07em;opacity:.5;display:block;margin-top:.3rem;text-transform:uppercase;position:relative;z-index:1}
.scon{display:none;animation:fadeUp .38s ease}.scon.on{display:block}
.schd{display:flex;align-items:center;gap:.9rem;flex-wrap:wrap;padding:1.3rem 1.5rem;border:2px solid;border-radius:17px;margin-bottom:1.7rem;background:var(--sf)}
.scic{font-size:2.6rem;flex-shrink:0;filter:drop-shadow(0 0 11px currentColor)}
.sct{font-family:'Fredoka One',cursive;font-size:1.7rem}
.scs{font-size:.88rem;color:#94a3b8;font-weight:600}
.scct{margin-left:auto;font-family:'Fredoka One',cursive;font-size:.85rem;padding:.3rem .95rem;border:2px solid currentColor;border-radius:50px;background:rgba(255,255,255,.04);flex-shrink:0}
.smw{background:var(--sf);border:2px solid var(--bd);border-radius:17px;overflow:hidden;margin-bottom:1.5rem}
.smto{display:flex;align-items:center;gap:.75rem;padding:.85rem 1.3rem;background:rgba(0,0,0,.3);border-bottom:1px solid var(--bd)}
.smb2{font-family:'Fredoka One',cursive;font-size:.8rem;padding:.18rem .85rem;border-radius:50px;border:2px solid currentColor;background:rgba(255,255,255,.04)}
.smn{font-family:'Fredoka One',cursive;font-size:1.15rem}
.smtg{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:.62rem;color:#6b7280;background:rgba(255,255,255,.04);padding:.12rem .55rem;border-radius:5px;border:1px solid var(--bd)}
.scene{display:flex;align-items:flex-end;gap:.65rem;flex-wrap:wrap;padding:1.6rem 1.3rem .9rem;overflow-x:auto}
.mol{display:flex;flex-direction:column;align-items:center;gap:.38rem;flex-shrink:0}
.moli{font-size:2.4rem;line-height:1;animation:mfl 3s ease-in-out infinite}
.moli.gw{animation:mgw 2.5s ease-in-out infinite}
@keyframes mfl{0%,100%{transform:translateY(0) rotate(-3deg)}50%{transform:translateY(-5px) rotate(3deg)}}
@keyframes mgw{0%,100%{filter:drop-shadow(0 0 5px currentColor);transform:scale(1)}50%{filter:drop-shadow(0 0 18px currentColor);transform:scale(1.09)}}
.molf{font-family:'Times New Roman',Times,serif;font-size:1.08rem;font-weight:700;font-style:italic;text-align:center;color:#fde68a}
.moln{font-size:.68rem;font-weight:800;letter-spacing:.05em;color:#6b7280;text-align:center;text-transform:uppercase}
.molf.mp{font-style:normal;font-weight:900;font-size:1.15rem;text-shadow:0 0 13px currentColor,0 0 4px currentColor}
.sop{font-size:1.7rem;font-weight:900;color:#4b5563;flex-shrink:0;align-self:center;font-family:'Times New Roman',Times,serif}
.sarr{display:flex;flex-direction:column;align-items:center;gap:.18rem;flex-shrink:0;padding:0 .45rem;align-self:center}
.sat{font-family:'JetBrains Mono',monospace;font-size:.66rem;color:#7dd3fc;white-space:nowrap;background:rgba(125,211,252,.07);padding:.1rem .45rem;border-radius:5px;border:1px solid rgba(125,211,252,.18)}
.sab{font-family:'JetBrains Mono',monospace;font-size:.66rem;color:#fbbf24;white-space:nowrap;background:rgba(251,191,36,.07);padding:.1rem .45rem;border-radius:5px;border:1px solid rgba(251,191,36,.18)}
.sarri{font-size:2rem;color:#f1f5f9;text-shadow:0 0 9px rgba(241,245,249,.4);animation:ap 2s ease-in-out infinite}
@keyframes ap{0%,100%{transform:scale(1)}50%{transform:scale(1.1)}}
.seq{display:flex;align-items:center;gap:.45rem;flex-wrap:wrap;margin:.2rem 1.3rem .4rem;padding:.75rem 1.1rem;background:linear-gradient(160deg,#070720,#0f0728);border:1.5px solid rgba(255,255,255,.09);border-radius:11px;font-family:'Times New Roman',Times,serif;font-size:1rem;font-style:italic;font-weight:700;color:#fde68a;overflow-x:auto}
.seq .sp{color:#6ee7b7;font-style:normal;font-weight:900}
.seq .sc{font-family:'JetBrains Mono',monospace;font-size:.64rem;color:#7dd3fc;background:rgba(125,211,252,.07);padding:.09rem .42rem;border-radius:5px;border:1px solid rgba(125,211,252,.18);font-style:normal;font-weight:400}
.seq .sa{font-style:normal;color:#f1f5f9;font-size:1.15rem}
.seq .sl{color:#c4b5fd;font-style:normal}
.sexpl{margin:.1rem 1.3rem 1.3rem;background:rgba(0,0,0,.22);border-left:4px solid currentColor;border-radius:0 11px 11px 0;padding:.85rem 1rem}
.sext{font-family:'Fredoka One',cursive;font-size:.88rem;margin-bottom:.35rem}
.sexd{font-size:.93rem;font-weight:600;color:#b0bec5;line-height:1.65}
.sexd strong{filter:brightness(1.6)}
.mcqs{text-align:center;padding:2.8rem 1rem}
.mcqsi{font-size:4rem;margin-bottom:.8rem;animation:pulse 3s ease-in-out infinite;display:block}
.mcqst{font-family:'Fredoka One',cursive;font-size:2rem;color:#4ade80;margin-bottom:.4rem}
.mcqss{color:#94a3b8;font-size:.98rem;font-weight:600;margin-bottom:1.8rem}
.irow{display:flex;gap:.9rem;justify-content:center;flex-wrap:wrap;margin-bottom:2rem}
.ic{background:var(--sf);border:2px solid var(--bd);border-radius:14px;padding:1rem 1.6rem;text-align:center;min-width:110px}
.ici{font-size:1.7rem;display:block;margin-bottom:.25rem}
.icv{font-family:'Fredoka One',cursive;font-size:1.7rem;color:#4ade80;display:block;line-height:1}
.icl{font-size:.7rem;color:#6b7280;font-weight:800;letter-spacing:.07em;text-transform:uppercase}
.stbtn{font-family:'Fredoka One',cursive;font-size:1.15rem;padding:.85rem 2.8rem;border:none;border-radius:50px;cursor:pointer;background:linear-gradient(135deg,#059669,#10b981);color:#fff;box-shadow:0 4px 22px rgba(16,185,129,.38);transition:all .28s cubic-bezier(.34,1.56,.64,1)}
.stbtn:hover{transform:scale(1.06) translateY(-2px);box-shadow:0 8px 30px rgba(16,185,129,.52)}
#mqexam{display:none}
.exbar{display:flex;align-items:center;gap:.75rem;flex-wrap:wrap;padding:.85rem 1.2rem;background:var(--sf);border:2px solid var(--bd);border-radius:13px;margin-bottom:1.5rem;position:sticky;top:.4rem;z-index:50;backdrop-filter:blur(10px)}
.epl{font-family:'Fredoka One',cursive;font-size:.9rem;color:#6b7280}
.epw{flex:1;height:7px;background:rgba(255,255,255,.08);border-radius:10px;overflow:hidden;min-width:70px}
.epf{height:100%;background:linear-gradient(90deg,#4ade80,#059669);border-radius:10px;transition:width .3s ease}
#timer{font-family:'JetBrains Mono',monospace;font-size:1.15rem;font-weight:700;color:#4ade80;padding:.32rem .85rem;background:rgba(74,222,128,.09);border:2px solid rgba(74,222,128,.28);border-radius:9px;flex-shrink:0;transition:all .3s}
#timer.warn{color:#fbbf24;background:rgba(251,191,36,.09);border-color:rgba(251,191,36,.28)}
#timer.danger{color:#f87171;background:rgba(248,113,113,.09);border-color:rgba(248,113,113,.35);animation:pulse 1s ease-in-out infinite}
.fnbtn{font-family:'Fredoka One',cursive;font-size:.88rem;padding:.48rem 1.25rem;border:none;border-radius:9px;cursor:pointer;background:linear-gradient(135deg,#f87171,#dc2626);color:#fff;flex-shrink:0;transition:all .2s}
.fnbtn:hover{transform:scale(1.04);box-shadow:0 4px 14px rgba(248,113,113,.38)}
.ql{display:flex;flex-direction:column;gap:1.2rem}
.qc{background:var(--sf);border:2px solid var(--bd);border-radius:15px;overflow:hidden;transition:border-color .2s}
.qc.answered{border-color:rgba(74,222,128,.32)}
.qc.uh{border-color:#f87171;animation:shake .32s ease}
@keyframes shake{0%,100%{transform:none}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}
.qh{display:flex;align-items:center;gap:.65rem;padding:.75rem 1.1rem;background:rgba(0,0,0,.28);border-bottom:1px solid var(--bd)}
.qnum{font-family:'Fredoka One',cursive;font-size:.78rem;padding:.18rem .7rem;background:rgba(74,222,128,.1);border:1.5px solid rgba(74,222,128,.35);border-radius:8px;color:#4ade80}
.qtop{font-size:.7rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#6b7280}
.qmk{margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:.7rem;color:#fbbf24;font-weight:700}
.qtxt{padding:1.1rem 1.1rem .75rem;font-size:1.02rem;font-weight:700;line-height:1.52}
.opts{padding:0 1.1rem 1.1rem;display:grid;gap:.45rem}
.opt{display:flex;align-items:center;gap:.7rem;padding:.6rem .9rem;border:2px solid var(--bd);border-radius:10px;background:rgba(255,255,255,.02);cursor:pointer;transition:all .17s;user-select:none}
.opt:hover{border-color:rgba(74,222,128,.38);background:rgba(74,222,128,.05);transform:translateX(3px)}
.opt.on{border-color:#4ade80;background:rgba(74,222,128,.09)}.opt.on .ol{background:#4ade80;color:#000}
.ol{font-family:'Fredoka One',cursive;font-size:.8rem;width:25px;height:25px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(255,255,255,.06);border:1.5px solid rgba(255,255,255,.14);flex-shrink:0;transition:all .17s}
.otx{font-size:.95rem;font-weight:600}
.opt.ca{border-color:#4ade80;background:rgba(74,222,128,.12)}.opt.ca .ol{background:#4ade80;color:#000}
.opt.wa{border-color:#f87171;background:rgba(248,113,113,.09)}.opt.wa .ol{background:#f87171;color:#fff}
.opt.rv{cursor:default;pointer-events:none}.opt.rv:hover{transform:none}
.expl{margin:.1rem 1.1rem 1.1rem;padding:.85rem 1rem;background:rgba(74,222,128,.06);border:1.5px solid rgba(74,222,128,.22);border-radius:10px;font-size:.92rem;font-weight:600;color:#bbf7d0;line-height:1.58;display:none}
.expl.on{display:block;animation:fadeUp .28s ease}
#mqres{display:none}
.rher{text-align:center;padding:2.3rem 1.2rem;background:var(--sf);border:2px solid var(--bd);border-radius:18px;margin-bottom:1.4rem}
.ri{font-size:4rem;margin-bottom:.7rem;display:block}
.sring{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;width:125px;height:125px;border-radius:50%;border:5px solid;margin:.7rem auto}
.sn{font-family:'Fredoka One',cursive;font-size:2.5rem;line-height:1}
.sof{font-size:.78rem;font-weight:700;opacity:.65}
.rg{font-family:'Fredoka One',cursive;font-size:1.8rem;margin:.45rem 0}
.rm{font-size:.97rem;color:#94a3b8;font-weight:600;margin-bottom:1.3rem}
.rchips{display:flex;gap:.65rem;justify-content:center;flex-wrap:wrap;margin-bottom:1.3rem}
.chip{padding:.35rem 1rem;border-radius:50px;font-family:'Fredoka One',cursive;font-size:.82rem;border:2px solid}
.c1{color:#4ade80;border-color:#4ade80;background:rgba(74,222,128,.08)}
.c2{color:#f87171;border-color:#f87171;background:rgba(248,113,113,.08)}
.c3{color:#fbbf24;border-color:#fbbf24;background:rgba(251,191,36,.08)}
.c4{color:#7dd3fc;border-color:#7dd3fc;background:rgba(125,211,252,.08)}
.ract{display:flex;gap:.7rem;justify-content:center;flex-wrap:wrap}
.ra{font-family:'Fredoka One',cursive;font-size:.92rem;padding:.7rem 1.7rem;border:none;border-radius:50px;cursor:pointer;transition:all .25s cubic-bezier(.34,1.56,.64,1)}
.ra:hover{transform:scale(1.06) translateY(-2px)}
.ra1{background:linear-gradient(135deg,#4ade80,#059669);color:#fff;box-shadow:0 4px 15px rgba(74,222,128,.32)}
.ra2{background:linear-gradient(135deg,#818cf8,#6366f1);color:#fff;box-shadow:0 4px 15px rgba(99,102,241,.32)}
footer{border-top:1px solid #1e1e42;padding:1.4rem;text-align:center;font-size:.75rem;font-weight:800;letter-spacing:.12em;color:#374151}
@media(max-width:600px){.ph{flex-direction:column;gap:.6rem;padding:1.1rem}nav{gap:.5rem;padding:1.2rem .7rem}.btn{padding:.65rem 1rem;font-size:.88rem;min-width:85px}}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ─────────────────────────────────────────────
  //  3. SET PAGE TITLE
  // ─────────────────────────────────────────────
  document.title = 'Organic Chemistry Hub \u2014 Class 9\u201310 · Chapter 11';

  // ─────────────────────────────────────────────
  //  4. BUILD HTML SKELETON
  // ─────────────────────────────────────────────
  document.body.innerHTML = `
<header>
  <div class="hl">⚗️ Organic Chemistry · Class 9–10 · Chapter 11</div>
  <h1>Organic Chemistry Hub</h1>
  <div class="hd">🔬 Reactions · Exchange · Synthesis · Formula Lookup · MCQ Exam</div>
</header>
<nav>
  <button class="btn b-ka" onclick="chShow('ka',this)">🔥 Alkane<span class="bs">CₙH₂ₙ₊₂</span></button>
  <button class="btn b-ke" onclick="chShow('ke',this)">🌿 Alkene<span class="bs">CₙH₂ₙ</span></button>
  <button class="btn b-ky" onclick="chShow('ky',this)">⚡ Alkyne<span class="bs">CₙH₂ₙ₋₂</span></button>
  <button class="btn b-al" onclick="chShow('al',this)">🧪 Alcohol<span class="bs">CₙH₂ₙ₊₁OH</span></button>
  <button class="btn b-ad" onclick="chShow('ad',this)">✨ Aldehyde<span class="bs">CₙH₂ₙ₊₁CHO</span></button>
  <button class="btn b-ac" onclick="chShow('ac',this)">🧬 Fatty Acid<span class="bs">CₙH₂ₙ₊₁COOH</span></button>
  <button class="btn b-ex" onclick="chShow('ex',this)">⇄ Exchange<span class="bs">Any → Any</span></button>
  <button class="btn b-sy" onclick="chShow('sy',this)">🔬 How Made<span class="bs">Synthesis</span></button>
  <button class="btn b-mq" onclick="chShow('mq',this)">📝 MCQ Exam<span class="bs">30 Qs · 20 Min</span></button>
  <button class="btn b-nm" onclick="chShow('nm',this)">🔍 Name Lookup<span class="bs">Formula Finder</span></button>
  <button class="btn b-fb" onclick="chShow('fb',this)">🧩 Formula Builder<span class="bs">Type Structure</span></button>
</nav>
<main id="main-content"></main>
<footer>⚗️ ORGANIC CHEMISTRY HUB · CLASS 9–10 · CHAPTER 11 · MINERAL RESOURCES: FOSSILS</footer>
`;

  // ─────────────────────────────────────────────
  //  5. PANEL CONTENT DATA
  // ─────────────────────────────────────────────

  // Helper to build a 3-tab method card
  function tabMethod(methodNum, title, prefix, tabs) {
    // tabs = [{label, html}]
    const tabButtons = tabs.map((t,i) =>
      `<button class="tab${i===0?' on':''}" onclick="chTab(this,'${prefix}',${i+2})">${t.label}</button>`
    ).join('');
    const tabPanes = tabs.map((t,i) =>
      `<div id="${prefix}-${i+2}" class="cbl${i===0?' on':''}">${t.html}</div>`
    ).join('');
    return `
<div class="mc" style="border-left-color:currentColor">
  <div class="mct"><span class="mn">METHOD ${String(methodNum).padStart(2,'0')}</span><span class="mtt">${title}</span></div>
  <div class="mcb">
    <div class="tabs">${tabButtons}</div>
    ${tabPanes}
  </div>
</div>`;
  }

  function rb(rn,eq,wd,note,rl) {
    return `<div class="rb">${rl?`<div class="rl">${rl}</div>`:''}${rn?`<div class="rn">${rn}</div>`:''}${eq}${wd?`<div class="wd">${wd}</div>`:''}${note?`<div class="note" style="border-color:currentColor">${note}</div>`:''}</div>`;
  }

  // ── PANELS HTML ──

  const panels = {};

  // HOME
  panels['home'] = `<div class="empty"><span class="ei">⚗️</span><div class="et">Choose a Section!</div><div class="es">Click any button above to explore reactions, exchange conversions, synthesis or MCQ exam 🚀</div></div>`;

  // ── ALKANE ──
  panels['ka'] = `
<div class="ph" style="border-color:var(--ka);color:var(--ka)"><div class="phi">🔥</div><div><div class="pht">Alkane — Saturated Hydrocarbon</div><div class="phb"><span class="badge">CₙH₂ₙ₊₂</span><span class="badge">C–C single bond only</span><span class="badge">Paraffin (low affinity)</span></div><div class="phd">Only C–C single bonds. Chemically very inactive. Found in natural gas (methane) and petroleum fractions.</div></div></div>
<div class="mc" style="border-left-color:var(--ka);color:var(--ka)">
  <div class="mct"><span class="mn">METHOD 01</span><span class="mtt">CO₂ + H₂ (Hydrogenation of CO₂)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'km1',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'km1',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'km1',4)">4-Carbon</button></div>
    <div id="km1-2" class="cbl on"><div class="rb"><div class="rl">1C special case</div><div class="rn">CO₂ + 4H₂ → Methane</div><div class="eq"><span class="r">CO₂</span><span class="plus">+</span><span class="r">4H₂</span><div class="ab"><span class="ct">Ni</span><span class="arr">⟶</span><span class="cb2">250°C</span></div><span class="hi" style="color:var(--ka)">CH₄</span><span class="pplus">+</span><span class="prod">2H₂O</span></div><div class="wd">Carbon dioxide + Hydrogen → Methane + Water</div><div class="note" style="border-color:var(--ka)">⚠️ CO₂ has only 1 carbon → always gives Methane (1C). For 2C/3C/4C alkanes use Methods 2–4.</div></div></div>
    <div id="km1-3" class="cbl"><div class="rb"><div class="note" style="border-color:var(--ka)">CO₂ method gives only Methane (1C). Use Method 2 (hydrogenation of propene) or Method 4 (decarboxylation of sodium butanoate) for Propane.</div></div></div>
    <div id="km1-4" class="cbl"><div class="rb"><div class="note" style="border-color:var(--ka)">CO₂ method gives only Methane (1C). Use Method 2 (hydrogenation of butene) or Method 4 (decarboxylation of sodium pentanoate) for Butane.</div></div></div>
  </div>
</div>
<div class="mc" style="border-left-color:var(--ka);color:var(--ka)">
  <div class="mct"><span class="mn">METHOD 02</span><span class="mtt">Hydrogenation of Alkene (Ni, 180–200°C)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'km2',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'km2',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'km2',4)">4-Carbon</button></div>
    <div id="km2-2" class="cbl on"><div class="rb"><div class="rn">Ethene + H₂ → Ethane</div><div class="eq"><span class="r">CH₂=CH₂</span><span class="plus">+</span><span class="r">H₂</span><div class="ab"><span class="ct">Ni</span><span class="arr">⟶</span><span class="cb2">180–200°C</span></div><span class="hi" style="color:var(--ka)">CH₃–CH₃</span></div><div class="wd">Ethene + Hydrogen → Ethane (C₂H₆)</div></div></div>
    <div id="km2-3" class="cbl"><div class="rb"><div class="rn">Propene + H₂ → Propane</div><div class="eq"><span class="r">CH₃–CH=CH₂</span><span class="plus">+</span><span class="r">H₂</span><div class="ab"><span class="ct">Ni</span><span class="arr">⟶</span><span class="cb2">180–200°C</span></div><span class="hi" style="color:var(--ka)">CH₃–CH₂–CH₃</span></div><div class="wd">Propene + Hydrogen → Propane (C₃H₈)</div></div></div>
    <div id="km2-4" class="cbl"><div class="rb"><div class="rn">But-1-ene + H₂ → Butane</div><div class="eq"><span class="r">CH₃CH₂CH=CH₂</span><span class="plus">+</span><span class="r">H₂</span><div class="ab"><span class="ct">Ni</span><span class="arr">⟶</span><span class="cb2">180–200°C</span></div><span class="hi" style="color:var(--ka)">CH₃CH₂CH₂CH₃</span></div><div class="wd">But-1-ene + Hydrogen → Butane (C₄H₁₀)</div></div></div>
  </div>
</div>
<div class="mc" style="border-left-color:var(--ka);color:var(--ka)">
  <div class="mct"><span class="mn">METHOD 03</span><span class="mtt">Hydrogenation of Alkyne (2 mol H₂, Ni)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'km3',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'km3',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'km3',4)">4-Carbon</button></div>
    <div id="km3-2" class="cbl on"><div class="rb"><div class="rn">Ethyne + 2H₂ → Ethane</div><div class="eq"><span class="r">CH≡CH</span><span class="plus">+</span><span class="r">2H₂</span><div class="ab"><span class="ct">Ni</span><span class="arr">⟶</span><span class="cb2">180–200°C</span></div><span class="hi" style="color:var(--ka)">CH₃–CH₃</span></div><div class="wd">Ethyne + 2 Hydrogen → Ethane</div><div class="note" style="border-color:var(--ka)">Alkyne triple bond has 2 weak π bonds → needs 2 mol H₂ to fully saturate.</div></div></div>
    <div id="km3-3" class="cbl"><div class="rb"><div class="rn">Propyne + 2H₂ → Propane</div><div class="eq"><span class="r">CH₃–C≡CH</span><span class="plus">+</span><span class="r">2H₂</span><div class="ab"><span class="ct">Ni</span><span class="arr">⟶</span><span class="cb2">180–200°C</span></div><span class="hi" style="color:var(--ka)">CH₃–CH₂–CH₃</span></div></div></div>
    <div id="km3-4" class="cbl"><div class="rb"><div class="rn">But-1-yne + 2H₂ → Butane</div><div class="eq"><span class="r">CH₃CH₂–C≡CH</span><span class="plus">+</span><span class="r">2H₂</span><div class="ab"><span class="ct">Ni</span><span class="arr">⟶</span><span class="cb2">180–200°C</span></div><span class="hi" style="color:var(--ka)">CH₃CH₂CH₂CH₃</span></div></div></div>
  </div>
</div>
<div class="mc" style="border-left-color:var(--ka);color:var(--ka)">
  <div class="mct"><span class="mn">METHOD 04</span><span class="mtt">Decarboxylation (Sodium Salt + NaOH + CaO)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'km4',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'km4',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'km4',4)">4-Carbon</button></div>
    <div id="km4-2" class="cbl on"><div class="rb"><div class="rl">2C Alkane – Ethane</div><div class="rn">Sodium Propanoate → Ethane</div><div class="eq"><span class="r">CH₃CH₂COONa</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">CaO, heat</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ka)">CH₃–CH₃</span><span class="pplus">+</span><span class="prod">Na₂CO₃</span></div><div class="wd">Sodium Propanoate (3C) → Ethane (2C) + Sodium Carbonate</div><div class="note" style="border-color:var(--ka)">⚠️ Rule: product alkane always has ONE FEWER carbon than the salt!</div></div></div>
    <div id="km4-3" class="cbl"><div class="rb"><div class="rl">3C Alkane – Propane</div><div class="rn">Sodium Butanoate → Propane</div><div class="eq"><span class="r">CH₃CH₂CH₂COONa</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">CaO, heat</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ka)">CH₃CH₂CH₃</span><span class="pplus">+</span><span class="prod">Na₂CO₃</span></div><div class="wd">Sodium Butanoate (4C) → Propane (3C)</div></div></div>
    <div id="km4-4" class="cbl"><div class="rb"><div class="rl">4C Alkane – Butane</div><div class="rn">Sodium Pentanoate → Butane</div><div class="eq"><span class="r">CH₃(CH₂)₃COONa</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">CaO, heat</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ka)">CH₃CH₂CH₂CH₃</span><span class="pplus">+</span><span class="prod">Na₂CO₃</span></div><div class="wd">Sodium Pentanoate (5C) → Butane (4C)</div></div></div>
  </div>
</div>`;

  // ── ALKENE ──
  panels['ke'] = `
<div class="ph" style="border-color:var(--ke);color:var(--ke)"><div class="phi">🌿</div><div><div class="pht">Alkene — Unsaturated (C=C)</div><div class="phb"><span class="badge">CₙH₂ₙ</span><span class="badge">C=C double bond</span><span class="badge">Olefin</span></div><div class="phd">Very reactive. Weaker π bond breaks in addition reactions. Called Olefin (oil-forming).</div></div></div>
<div class="mc" style="border-left-color:var(--ke);color:var(--ke)">
  <div class="mct"><span class="mn">METHOD 01</span><span class="mtt">Alkyl Chloride + NaOH (Elimination)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'em1',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'em1',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'em1',4)">4-Carbon</button></div>
    <div id="em1-2" class="cbl on"><div class="rb"><div class="rn">Ethyl Chloride + NaOH → Ethene</div><div class="eq"><span class="r">CH₃–CH₂Cl</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">aq.</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ke)">CH₂=CH₂</span><span class="pplus">+</span><span class="prod">NaCl</span><span class="pplus">+</span><span class="prod">H₂O</span></div><div class="wd">Ethyl Chloride + NaOH → Ethene + NaCl + Water</div></div></div>
    <div id="em1-3" class="cbl"><div class="rb"><div class="rn">1-Chloropropane + NaOH → Propene</div><div class="eq"><span class="r">CH₃CH₂CH₂Cl</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">aq.</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ke)">CH₃–CH=CH₂</span><span class="pplus">+</span><span class="prod">NaCl + H₂O</span></div></div></div>
    <div id="em1-4" class="cbl"><div class="rb"><div class="rn">1-Chlorobutane + NaOH → But-1-ene</div><div class="eq"><span class="r">CH₃CH₂CH₂CH₂Cl</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">aq.</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ke)">CH₃CH₂CH=CH₂</span><span class="pplus">+</span><span class="prod">NaCl + H₂O</span></div></div></div>
  </div>
</div>
<div class="mc" style="border-left-color:var(--ke);color:var(--ke)">
  <div class="mct"><span class="mn">METHOD 02</span><span class="mtt">Dehydration of Alcohol (conc. H₂SO₄)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'em2',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'em2',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'em2',4)">4-Carbon</button></div>
    <div id="em2-2" class="cbl on"><div class="rb"><div class="rn">Ethanol → Ethene + Water</div><div class="eq"><span class="r">CH₃–CH₂–OH</span><div class="ab"><span class="ct">conc. H₂SO₄</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ke)">CH₂=CH₂</span><span class="pplus">+</span><span class="prod">H₂O</span></div><div class="wd">Ethanol → Ethene + Water</div><div class="note" style="border-color:var(--ke)">H₂SO₄ acts as dehydrating agent — pulls H₂O out, leaving the C=C double bond.</div></div></div>
    <div id="em2-3" class="cbl"><div class="rb"><div class="rn">Propan-1-ol → Propene + Water</div><div class="eq"><span class="r">CH₃CH₂CH₂OH</span><div class="ab"><span class="ct">conc. H₂SO₄</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ke)">CH₃–CH=CH₂</span><span class="pplus">+</span><span class="prod">H₂O</span></div></div></div>
    <div id="em2-4" class="cbl"><div class="rb"><div class="rn">Butan-1-ol → But-1-ene + Water</div><div class="eq"><span class="r">CH₃CH₂CH₂CH₂OH</span><div class="ab"><span class="ct">conc. H₂SO₄</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ke)">CH₃CH₂CH=CH₂</span><span class="pplus">+</span><span class="prod">H₂O</span></div></div></div>
  </div>
</div>`;

  // ── ALKYNE ──
  panels['ky'] = `
<div class="ph" style="border-color:var(--ky);color:var(--ky)"><div class="phi">⚡</div><div><div class="pht">Alkyne — Unsaturated (C≡C)</div><div class="phb"><span class="badge">CₙH₂ₙ₋₂</span><span class="badge">C≡C triple bond</span><span class="badge">Smallest: Ethyne/Acetylene</span></div><div class="phd">1 strong σ + 2 weak π bonds. Ethyne (CH≡CH) is the simplest alkyne. Very reactive.</div></div></div>
<div class="mc" style="border-left-color:var(--ky);color:var(--ky)">
  <div class="mct"><span class="mn">METHOD 01</span><span class="mtt">CaC₂ + H₂O (Lab Method — Ethyne only)</span></div>
  <div class="mcb"><div class="rb"><div class="rn">Calcium Carbide + Water → Ethyne</div><div class="eq"><span class="r">CaC₂</span><span class="plus">+</span><span class="r">2H₂O</span><div class="ab"><span class="arr">⟶</span></div><span class="hi" style="color:var(--ky)">CH≡CH</span><span class="pplus">+</span><span class="prod">Ca(OH)₂</span></div><div class="wd">Calcium Carbide + Water → Ethyne + Calcium Hydroxide</div><div class="note" style="border-color:var(--ky)">Reacts vigorously at room temperature — no heat needed. Always gives only Ethyne (2C) because CaC₂ has 2 carbons. For 3C/4C alkynes use Method 2.</div></div></div>
</div>
<div class="mc" style="border-left-color:var(--ky);color:var(--ky)">
  <div class="mct"><span class="mn">METHOD 02</span><span class="mtt">Vicinal Dihalide + 2 NaOH (Double Elimination)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'ym2',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'ym2',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'ym2',4)">4-Carbon</button></div>
    <div id="ym2-2" class="cbl on"><div class="rb"><div class="rn">1,2-Dibromoethane + 2NaOH → Ethyne</div><div class="eq"><span class="r">CH₂Br–CH₂Br</span><span class="plus">+</span><span class="r">2NaOH</span><div class="ab"><span class="ct">alcoholic</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ky)">CH≡CH</span><span class="pplus">+</span><span class="prod">2NaBr + 2H₂O</span></div><div class="note" style="border-color:var(--ky)">Two HBr removed in 2 steps: 1st NaOH → alkene, 2nd NaOH → alkyne. Each step creates one more π bond.</div></div></div>
    <div id="ym2-3" class="cbl"><div class="rb"><div class="rn">1,2-Dibromopropane + 2NaOH → Propyne</div><div class="eq"><span class="r">CH₃–CHBr–CH₂Br</span><span class="plus">+</span><span class="r">2NaOH</span><div class="ab"><span class="ct">alcoholic</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ky)">CH₃–C≡CH</span><span class="pplus">+</span><span class="prod">2NaBr + 2H₂O</span></div></div></div>
    <div id="ym2-4" class="cbl"><div class="rb"><div class="rn">1,2-Dibromobutane + 2NaOH → But-1-yne</div><div class="eq"><span class="r">CH₃CH₂–CHBr–CH₂Br</span><span class="plus">+</span><span class="r">2NaOH</span><div class="ab"><span class="ct">alcoholic</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--ky)">CH₃CH₂–C≡CH</span><span class="pplus">+</span><span class="prod">2NaBr + 2H₂O</span></div></div></div>
  </div>
</div>`;

  // ── ALCOHOL ──
  panels['al'] = `
<div class="ph" style="border-color:var(--al);color:var(--al)"><div class="phi">🧪</div><div><div class="pht">Alcohol — Hydroxyl Group (–OH)</div><div class="phb"><span class="badge">CₙH₂ₙ₊₁OH</span><span class="badge">–OH functional group</span></div><div class="phd">Colourless liquids miscible with water. Ethanol (96%) = Rectified Spirit. Fermentation from starch/sugar.</div></div></div>
<div class="mc" style="border-left-color:var(--al);color:var(--al)">
  <div class="mct"><span class="mn">METHOD 01</span><span class="mtt">Alkyl Bromide + Aqueous NaOH</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'alm1',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'alm1',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'alm1',4)">4-Carbon</button></div>
    <div id="alm1-2" class="cbl on"><div class="rb"><div class="rn">Bromo Ethane + NaOH → Ethanol</div><div class="eq"><span class="r">CH₃–CH₂Br</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">aq.</span><span class="arr">⟶</span><span class="cb2">heat</span></div><span class="hi" style="color:var(--al)">CH₃–CH₂–OH</span><span class="pplus">+</span><span class="prod">NaBr</span></div><div class="wd">Bromo Ethane + Sodium Hydroxide → Ethanol + Sodium Bromide</div></div></div>
    <div id="alm1-3" class="cbl"><div class="rb"><div class="rn">1-Bromopropane + NaOH → Propan-1-ol</div><div class="eq"><span class="r">CH₃CH₂CH₂Br</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">aq.</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--al)">CH₃CH₂CH₂OH</span><span class="pplus">+</span><span class="prod">NaBr</span></div></div></div>
    <div id="alm1-4" class="cbl"><div class="rb"><div class="rn">1-Bromobutane + NaOH → Butan-1-ol</div><div class="eq"><span class="r">CH₃CH₂CH₂CH₂Br</span><span class="plus">+</span><span class="r">NaOH</span><div class="ab"><span class="ct">aq.</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--al)">CH₃CH₂CH₂CH₂OH</span><span class="pplus">+</span><span class="prod">NaBr</span></div></div></div>
  </div>
</div>
<div class="mc" style="border-left-color:var(--al);color:var(--al)">
  <div class="mct"><span class="mn">METHOD 02</span><span class="mtt">Hydration of Alkene (H₃PO₄, 300°C, 60 atm)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'alm2',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'alm2',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'alm2',4)">4-Carbon</button></div>
    <div id="alm2-2" class="cbl on"><div class="rb"><div class="rn">Ethene + H₂O → Ethanol</div><div class="eq"><span class="r">CH₂=CH₂</span><span class="plus">+</span><span class="r">H₂O</span><div class="ab"><span class="ct">H₃PO₄, 300°C</span><span class="arr">⟶</span><span class="cb2">60 atm</span></div><span class="hi" style="color:var(--al)">CH₃–CH₂–OH</span></div></div></div>
    <div id="alm2-3" class="cbl"><div class="rb"><div class="rn">Propene + H₂O → Propan-1-ol</div><div class="eq"><span class="r">CH₃–CH=CH₂</span><span class="plus">+</span><span class="r">H₂O</span><div class="ab"><span class="ct">H₃PO₄, 300°C, 60 atm</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--al)">CH₃CH₂CH₂OH</span></div></div></div>
    <div id="alm2-4" class="cbl"><div class="rb"><div class="rn">But-1-ene + H₂O → Butan-1-ol</div><div class="eq"><span class="r">CH₃CH₂CH=CH₂</span><span class="plus">+</span><span class="r">H₂O</span><div class="ab"><span class="ct">H₃PO₄, 300°C, 60 atm</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--al)">CH₃CH₂CH₂CH₂OH</span></div></div></div>
  </div>
</div>`;

  // ── ALDEHYDE ──
  panels['ad'] = `
<div class="ph" style="border-color:var(--ad);color:var(--ad)"><div class="phi">✨</div><div><div class="pht">Aldehyde — CHO Group</div><div class="phb"><span class="badge">CₙH₂ₙ₊₁CHO</span><span class="badge">–CHO group</span><span class="badge">Formalin = 40% HCHO aq.</span></div><div class="phd">Methanal (formaldehyde) is simplest. Formalin = 40% solution — used to preserve specimens.</div></div></div>
<div class="mc" style="border-left-color:var(--ad);color:var(--ad)">
  <div class="mct"><span class="mn">METHOD 01</span><span class="mtt">Hydration of Alkyne (20% H₂SO₄, 2% HgSO₄, 80°C)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'ldm1',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'ldm1',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'ldm1',4)">4-Carbon</button></div>
    <div id="ldm1-2" class="cbl on"><div class="rb"><div class="rn">Ethyne + H₂O → Ethanal</div><div class="eq"><span class="r">CH≡CH</span><span class="plus">+</span><span class="r">H₂O</span><div class="ab"><span class="ct">20% H₂SO₄, 2% HgSO₄</span><span class="arr">⟶</span><span class="cb2">80°C</span></div><span class="hi" style="color:var(--ad)">CH₃–CHO</span></div><div class="wd">Ethyne + Water → Ethanal (Acetaldehyde)</div></div></div>
    <div id="ldm1-3" class="cbl"><div class="rb"><div class="rn">Propyne + H₂O → Propanal</div><div class="eq"><span class="r">CH₃–C≡CH</span><span class="plus">+</span><span class="r">H₂O</span><div class="ab"><span class="ct">H₂SO₄, HgSO₄</span><span class="arr">⟶</span><span class="cb2">80°C</span></div><span class="hi" style="color:var(--ad)">CH₃CH₂CHO</span></div></div></div>
    <div id="ldm1-4" class="cbl"><div class="rb"><div class="rn">But-1-yne + H₂O → Butanal</div><div class="eq"><span class="r">CH₃CH₂–C≡CH</span><span class="plus">+</span><span class="r">H₂O</span><div class="ab"><span class="ct">H₂SO₄, HgSO₄</span><span class="arr">⟶</span><span class="cb2">80°C</span></div><span class="hi" style="color:var(--ad)">CH₃CH₂CH₂CHO</span></div></div></div>
  </div>
</div>
<div class="mc" style="border-left-color:var(--ad);color:var(--ad)">
  <div class="mct"><span class="mn">METHOD 02</span><span class="mtt">Mild Oxidation of Alcohol (K₂Cr₂O₇ + H₂SO₄, controlled)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'ldm2',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'ldm2',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'ldm2',4)">4-Carbon</button></div>
    <div id="ldm2-2" class="cbl on"><div class="rb"><div class="rn">Ethanol → Ethanal (mild oxidation)</div><div class="eq"><span class="r">CH₃–CH₂–OH</span><span class="plus">+</span><span class="r">[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄</span><span class="arr">⟶</span><span class="cb2">controlled</span></div><span class="hi" style="color:var(--ad)">CH₃–CHO</span><span class="pplus">+</span><span class="prod">H₂O</span></div><div class="note" style="border-color:var(--ad)">⚠️ Must stop here — excess oxidant converts aldehyde to fatty acid!</div></div></div>
    <div id="ldm2-3" class="cbl"><div class="rb"><div class="rn">Propanol → Propanal</div><div class="eq"><span class="r">CH₃CH₂CH₂OH</span><span class="plus">+</span><span class="r">[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄ controlled</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ad)">CH₃CH₂CHO</span><span class="pplus">+</span><span class="prod">H₂O</span></div></div></div>
    <div id="ldm2-4" class="cbl"><div class="rb"><div class="rn">Butanol → Butanal</div><div class="eq"><span class="r">CH₃CH₂CH₂CH₂OH</span><span class="plus">+</span><span class="r">[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄ controlled</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ad)">CH₃CH₂CH₂CHO</span><span class="pplus">+</span><span class="prod">H₂O</span></div></div></div>
  </div>
</div>`;

  // ── FATTY ACID ──
  panels['ac'] = `
<div class="ph" style="border-color:var(--ac);color:var(--ac)"><div class="phi">🧬</div><div><div class="pht">Fatty Acid — Carboxylic Group (–COOH)</div><div class="phb"><span class="badge">CₙH₂ₙ₊₁COOH</span><span class="badge">–COOH group</span><span class="badge">Vinegar = 4–10% CH₃COOH</span></div><div class="phd">Weak acids. Turns blue litmus red. Ethanoic acid (4–10% aq.) = Vinegar — used as food preservative.</div></div></div>
<div class="mc" style="border-left-color:var(--ac);color:var(--ac)">
  <div class="mct"><span class="mn">METHOD 01</span><span class="mtt">Oxidation of Aldehyde (K₂Cr₂O₇ + H₂SO₄)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'fm1',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'fm1',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'fm1',4)">4-Carbon</button></div>
    <div id="fm1-2" class="cbl on"><div class="rb"><div class="rn">Ethanal → Ethanoic Acid</div><div class="eq"><span class="r">CH₃–CHO</span><span class="plus">+</span><span class="r">[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇ + H₂SO₄</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ac)">CH₃–COOH</span></div><div class="wd">Ethanal + Oxygen → Ethanoic Acid (Acetic Acid / Vinegar source)</div></div></div>
    <div id="fm1-3" class="cbl"><div class="rb"><div class="rn">Propanal → Propanoic Acid</div><div class="eq"><span class="r">CH₃CH₂CHO</span><span class="plus">+</span><span class="r">[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ac)">CH₃CH₂COOH</span></div></div></div>
    <div id="fm1-4" class="cbl"><div class="rb"><div class="rn">Butanal → Butanoic Acid</div><div class="eq"><span class="r">CH₃CH₂CH₂CHO</span><span class="plus">+</span><span class="r">[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ac)">CH₃CH₂CH₂COOH</span></div></div></div>
  </div>
</div>
<div class="mc" style="border-left-color:var(--ac);color:var(--ac)">
  <div class="mct"><span class="mn">METHOD 02</span><span class="mtt">Strong Oxidation of Alcohol (excess K₂Cr₂O₇)</span></div>
  <div class="mcb">
    <div class="tabs"><button class="tab on" onclick="chTab(this,'fm2',2)">2-Carbon</button><button class="tab" onclick="chTab(this,'fm2',3)">3-Carbon</button><button class="tab" onclick="chTab(this,'fm2',4)">4-Carbon</button></div>
    <div id="fm2-2" class="cbl on"><div class="rb"><div class="rn">Ethanol → Ethanoic Acid (strong oxidation)</div><div class="eq"><span class="r">CH₃–CH₂–OH</span><span class="plus">+</span><span class="r">2[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄</span><span class="arr">⟶</span><span class="cb2">excess</span></div><span class="hi" style="color:var(--ac)">CH₃–COOH</span><span class="pplus">+</span><span class="prod">H₂O</span></div><div class="note" style="border-color:var(--ac)">With EXCESS oxidant the reaction goes all the way: Alcohol → Aldehyde → Acid.</div></div></div>
    <div id="fm2-3" class="cbl"><div class="rb"><div class="rn">Propanol → Propanoic Acid</div><div class="eq"><span class="r">CH₃CH₂CH₂OH</span><span class="plus">+</span><span class="r">2[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄ excess</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ac)">CH₃CH₂COOH</span><span class="pplus">+</span><span class="prod">H₂O</span></div></div></div>
    <div id="fm2-4" class="cbl"><div class="rb"><div class="rn">Butanol → Butanoic Acid</div><div class="eq"><span class="r">CH₃CH₂CH₂CH₂OH</span><span class="plus">+</span><span class="r">2[O]</span><div class="ab"><span class="ct">K₂Cr₂O₇/H₂SO₄ excess</span><span class="arr">⟶</span></div><span class="hi" style="color:var(--ac)">CH₃CH₂CH₂COOH</span><span class="pplus">+</span><span class="prod">H₂O</span></div></div></div>
  </div>
</div>`;

  // ── EXCHANGE ──
  panels['ex'] = `
<div class="ph" style="border-color:#818cf8;color:#818cf8"><div class="phi">⇄</div><div><div class="pht">Exchange — Any → Any</div><div class="phb"><span class="badge">30 cross-conversions</span><span class="badge">1–3 step pathways</span><span class="badge">2C · 3C · 4C</span></div><div class="phd">Select FROM and TO to see the full reaction pathway.</div></div></div>
<div class="exsel">
  <div class="sg"><div class="slbl">FROM</div><div class="pills" id="from-pills">
    <button class="pill pk" onclick="sf('ka',this)">Alkane</button>
    <button class="pill pe" onclick="sf('ke',this)">Alkene</button>
    <button class="pill py" onclick="sf('ky',this)">Alkyne</button>
    <button class="pill pa" onclick="sf('al',this)">Alcohol</button>
    <button class="pill pd" onclick="sf('ad',this)">Aldehyde</button>
    <button class="pill pf" onclick="sf('ac',this)">Fatty Acid</button>
  </div></div>
  <div style="display:flex;flex-direction:column;align-items:center;padding-top:1.2rem"><div class="exarr">⟶</div><div class="exhint">CONVERTS TO</div></div>
  <div class="sg"><div class="slbl">TO</div><div class="pills" id="to-pills">
    <button class="pill pk dis" onclick="st('ka',this)">Alkane</button>
    <button class="pill pe dis" onclick="st('ke',this)">Alkene</button>
    <button class="pill py dis" onclick="st('ky',this)">Alkyne</button>
    <button class="pill pa dis" onclick="st('al',this)">Alcohol</button>
    <button class="pill pd dis" onclick="st('ad',this)">Aldehyde</button>
    <button class="pill pf dis" onclick="st('ac',this)">Fatty Acid</button>
  </div></div>
</div>
<div id="exr"><div class="exmt"><div class="exi">🔬</div><div class="ext">Select FROM &amp; TO above</div></div></div>`;

  // ── SYNTHESIS ──
  panels['sy'] = `
<div class="ph" style="border-color:#fb923c;color:#fb923c"><div class="phi">🔬</div><div><div class="pht">How They're Made — Synthesis</div><div class="phb"><span class="badge">Alkane · Alkene · Alkyne</span><span class="badge">Visual diagrams</span><span class="badge">All prep methods</span></div><div class="phd">Click a compound card to see all preparation methods with visual molecule scenes and explanations.</div></div></div>
<div class="spicks">
  <div class="spk ska" onclick="showSy('sa',this)"><span class="spki">🔥</span><span class="spkn">Alkane</span><span class="spkf">CₙH₂ₙ₊₂</span><span class="spkc">4 Methods</span></div>
  <div class="spk ske" onclick="showSy('se',this)"><span class="spki">🌿</span><span class="spkn">Alkene</span><span class="spkf">CₙH₂ₙ</span><span class="spkc">2 Methods</span></div>
  <div class="spk sky" onclick="showSy('sy',this)"><span class="spki">⚡</span><span class="spkn">Alkyne</span><span class="spkf">CₙH₂ₙ₋₂</span><span class="spkc">2 Methods</span></div>
</div>
<!-- Alkane synth -->
<div id="sc-sa" class="scon">
<div class="schd" style="border-color:var(--ka);color:var(--ka)"><div class="scic">🔥</div><div><div class="sct">Alkane — CₙH₂ₙ₊₂</div><div class="scs">Saturated · Single bonds · Paraffin</div></div><div class="scct">4 Methods</div></div>
<div class="smw"><div class="smto" style="color:var(--ka)"><span class="smb2">Method 1</span><span class="smn">CO₂ + H₂ → Methane</span><span class="smtg">Ni, 250°C</span></div>
<div class="scene" style="color:var(--ka)"><div class="mol"><span class="moli">🧪</span><span class="molf">CO₂</span><span class="moln">Carbon dioxide</span></div><div class="sop">+</div><div class="mol"><span class="moli">🫙</span><span class="molf">4H₂</span><span class="moln">Hydrogen</span></div><div class="sarr"><span class="sat">Ni</span><span class="sarri">⟶</span><span class="sab">250°C</span></div><div class="mol" style="color:var(--ka)"><span class="moli gw">🔥</span><span class="molf mp">CH₄</span><span class="moln">Methane</span></div><div class="sop">+</div><div class="mol"><span class="moli">💧</span><span class="molf" style="color:#6ee7b7">2H₂O</span><span class="moln">Water</span></div></div>
<div class="seq"><span>CO₂</span><span class="sl">+</span><span>4H₂</span><span class="sc">Ni, 250°C</span><span class="sa">⟶</span><span class="sp">CH₄</span><span class="sl">+</span><span class="sp">2H₂O</span></div>
<div class="sexpl" style="border-color:var(--ka);color:var(--ka)"><div class="sext">🧠 How It Works</div><div class="sexd">CO₂ is reduced by <strong>4 mol H₂</strong> at <strong>250°C, Ni catalyst</strong>. Oxygen leaves as H₂O. Always gives <strong>Methane only</strong> — CO₂ has 1 carbon.</div></div></div>
<div class="smw"><div class="smto" style="color:var(--ka)"><span class="smb2">Method 2</span><span class="smn">Alkene + H₂ → Alkane</span><span class="smtg">Ni, 180–200°C</span></div>
<div class="scene" style="color:var(--ka)"><div class="mol"><span class="moli">🌿</span><span class="molf">CH₂=CH₂</span><span class="moln">Ethene</span></div><div class="sop">+</div><div class="mol"><span class="moli">🫙</span><span class="molf">H₂</span><span class="moln">Hydrogen</span></div><div class="sarr"><span class="sat">Ni</span><span class="sarri">⟶</span><span class="sab">180–200°C</span></div><div class="mol" style="color:var(--ka)"><span class="moli gw">🔥</span><span class="molf mp">CH₃–CH₃</span><span class="moln">Ethane</span></div></div>
<div class="seq"><span>CH₂=CH₂</span><span class="sl">+</span><span>H₂</span><span class="sc">Ni, 180–200°C</span><span class="sa">⟶</span><span class="sp">CH₃–CH₃</span></div>
<div class="sexpl" style="border-color:var(--ka);color:var(--ka)"><div class="sext">🧠 How It Works</div><div class="sexd">The <strong>weaker π bond</strong> of C=C breaks. H₂ adds across — one H to each carbon. <strong>Addition/Hydrogenation</strong> converts unsaturated alkene to saturated alkane.</div></div></div>
<div class="smw"><div class="smto" style="color:var(--ka)"><span class="smb2">Method 3</span><span class="smn">Alkyne + 2H₂ → Alkane</span><span class="smtg">Ni, 180–200°C</span></div>
<div class="scene" style="color:var(--ka)"><div class="mol"><span class="moli">⚡</span><span class="molf">CH≡CH</span><span class="moln">Ethyne</span></div><div class="sop">+</div><div class="mol"><span class="moli">🫙</span><span class="molf">2H₂</span><span class="moln">2 mol H₂</span></div><div class="sarr"><span class="sat">Ni</span><span class="sarri">⟶</span><span class="sab">180–200°C</span></div><div class="mol" style="color:var(--ka)"><span class="moli gw">🔥</span><span class="molf mp">CH₃–CH₃</span><span class="moln">Ethane</span></div></div>
<div class="seq"><span>CH≡CH</span><span class="sl">+</span><span>2H₂</span><span class="sc">Ni, 180–200°C</span><span class="sa">⟶</span><span class="sp">CH₃–CH₃</span></div>
<div class="sexpl" style="border-color:var(--ka);color:var(--ka)"><div class="sext">🧠 How It Works</div><div class="sexd">Triple bond = 1σ + <strong>2 weak π bonds</strong>. Needs <strong>2 mol H₂</strong>: first breaks one π (→ alkene), second breaks the other π (→ alkane). Two hydrogenation steps in sequence.</div></div></div>
<div class="smw"><div class="smto" style="color:var(--ka)"><span class="smb2">Method 4</span><span class="smn">Decarboxylation</span><span class="smtg">Salt + NaOH + CaO → Alkane (−1C)</span></div>
<div class="scene" style="color:var(--ka)"><div class="mol"><span class="moli">🧂</span><span class="molf">CH₃COONa</span><span class="moln">Sodium Ethanoate</span></div><div class="sop">+</div><div class="mol"><span class="moli">🫧</span><span class="molf">NaOH</span><span class="moln">Sodium Hydroxide</span></div><div class="sarr"><span class="sat">CaO</span><span class="sarri">⟶</span><span class="sab">Heat</span></div><div class="mol" style="color:var(--ka)"><span class="moli gw">🔥</span><span class="molf mp">CH₄</span><span class="moln">Methane (1C)</span></div><div class="sop">+</div><div class="mol"><span class="moli">🪨</span><span class="molf" style="color:#6ee7b7">Na₂CO₃</span><span class="moln">Sodium Carbonate</span></div></div>
<div class="seq"><span>CH₃COONa</span><span class="sl">+</span><span>NaOH</span><span class="sc">CaO, Heat</span><span class="sa">⟶</span><span class="sp">CH₄</span><span class="sl">+</span><span class="sp">Na₂CO₃</span></div>
<div class="sexpl" style="border-color:var(--ka);color:var(--ka)"><div class="sext">🧠 Rule: product alkane = salt carbons − 1</div><div class="sexd">–COO⁻ is removed as CO₃²⁻. <strong>Sodium Ethanoate (2C) → Methane (1C) · Sodium Propanoate (3C) → Ethane (2C) · Sodium Butanoate (4C) → Propane (3C).</strong></div></div></div>
</div>
<!-- Alkene synth -->
<div id="sc-se" class="scon">
<div class="schd" style="border-color:var(--ke);color:var(--ke)"><div class="scic">🌿</div><div><div class="sct">Alkene — CₙH₂ₙ</div><div class="scs">C=C double bond · Unsaturated · Olefin</div></div><div class="scct">2 Methods</div></div>
<div class="smw"><div class="smto" style="color:var(--ke)"><span class="smb2">Method 1</span><span class="smn">Alkyl Chloride + NaOH → Alkene</span><span class="smtg">aq., heat</span></div>
<div class="scene" style="color:var(--ke)"><div class="mol"><span class="moli">🧪</span><span class="molf">CH₃–CH₂Cl</span><span class="moln">Ethyl Chloride</span></div><div class="sop">+</div><div class="mol"><span class="moli">🫧</span><span class="molf">NaOH</span><span class="moln">NaOH</span></div><div class="sarr"><span class="sat">aq.</span><span class="sarri">⟶</span><span class="sab">heat</span></div><div class="mol" style="color:var(--ke)"><span class="moli gw">🌿</span><span class="molf mp">CH₂=CH₂</span><span class="moln">Ethene</span></div><div class="sop">+</div><div class="mol"><span class="moli">🧂</span><span class="molf" style="color:#6ee7b7">NaCl+H₂O</span><span class="moln">Byproducts</span></div></div>
<div class="seq"><span>CH₃–CH₂Cl</span><span class="sl">+</span><span>NaOH</span><span class="sc">aq., heat</span><span class="sa">⟶</span><span class="sp">CH₂=CH₂</span><span class="sl">+</span><span class="sp">NaCl+H₂O</span></div>
<div class="sexpl" style="border-color:var(--ke);color:var(--ke)"><div class="sext">🧠 Elimination</div><div class="sexd">OH⁻ removes H from β-carbon while C–Cl breaks → <strong>HCl eliminated</strong>, electrons form the <strong>C=C double bond</strong>.</div></div></div>
<div class="smw"><div class="smto" style="color:var(--ke)"><span class="smb2">Method 2</span><span class="smn">Alcohol Dehydration</span><span class="smtg">conc. H₂SO₄, heat</span></div>
<div class="scene" style="color:var(--ke)"><div class="mol"><span class="moli">🧪</span><span class="molf">CH₃CH₂OH</span><span class="moln">Ethanol</span></div><div class="sarr"><span class="sat">conc. H₂SO₄</span><span class="sarri">⟶</span><span class="sab">heat</span></div><div class="mol" style="color:var(--ke)"><span class="moli gw">🌿</span><span class="molf mp">CH₂=CH₂</span><span class="moln">Ethene</span></div><div class="sop">+</div><div class="mol"><span class="moli">💧</span><span class="molf" style="color:#6ee7b7">H₂O</span><span class="moln">Water removed</span></div></div>
<div class="seq"><span>CH₃CH₂OH</span><span class="sc">conc.H₂SO₄</span><span class="sa">⟶</span><span class="sp">CH₂=CH₂</span><span class="sl">+</span><span class="sp">H₂O</span></div>
<div class="sexpl" style="border-color:var(--ke);color:var(--ke)"><div class="sext">🧠 Dehydration</div><div class="sexd">H₂SO₄ is a <strong>dehydrating agent</strong> — pulls H₂O out. H from α-C + OH from β-C → H₂O. The electrons form the new <strong>C=C double bond</strong>.</div></div></div>
</div>
<!-- Alkyne synth -->
<div id="sc-sy" class="scon">
<div class="schd" style="border-color:var(--ky);color:var(--ky)"><div class="scic">⚡</div><div><div class="sct">Alkyne — CₙH₂ₙ₋₂</div><div class="scs">C≡C triple bond · Smallest: Ethyne (Acetylene)</div></div><div class="scct">2 Methods</div></div>
<div class="smw"><div class="smto" style="color:var(--ky)"><span class="smb2">Method 1</span><span class="smn">CaC₂ + H₂O → Ethyne</span><span class="smtg">Lab method, room temp</span></div>
<div class="scene" style="color:var(--ky)"><div class="mol"><span class="moli">🪨</span><span class="molf">CaC₂</span><span class="moln">Calcium Carbide</span></div><div class="sop">+</div><div class="mol"><span class="moli">💧</span><span class="molf">2H₂O</span><span class="moln">Water</span></div><div class="sarr"><span class="sarri">⟶</span></div><div class="mol" style="color:var(--ky)"><span class="moli gw">⚡</span><span class="molf mp">CH≡CH</span><span class="moln">Ethyne</span></div><div class="sop">+</div><div class="mol"><span class="moli">🪨</span><span class="molf" style="color:#6ee7b7">Ca(OH)₂</span><span class="moln">Calcium Hydroxide</span></div></div>
<div class="seq"><span>CaC₂</span><span class="sl">+</span><span>2H₂O</span><span class="sa">⟶</span><span class="sp">CH≡CH</span><span class="sl">+</span><span class="sp">Ca(OH)₂</span></div>
<div class="sexpl" style="border-color:var(--ky);color:var(--ky)"><div class="sext">🧠 Standard Lab Method</div><div class="sexd">CaC₂ reacts <strong>vigorously at room temperature</strong>. <strong>Always gives only Ethyne (2C)</strong> because CaC₂ has 2 carbons. For 3C/4C alkynes use Method 2.</div></div></div>
<div class="smw"><div class="smto" style="color:var(--ky)"><span class="smb2">Method 2</span><span class="smn">Dihalide + 2NaOH → Alkyne</span><span class="smtg">Alcoholic NaOH, heat</span></div>
<div class="scene" style="color:var(--ky)"><div class="mol"><span class="moli">🧪</span><span class="molf">CH₂Br–CH₂Br</span><span class="moln">1,2-Dibromoethane</span></div><div class="sop">+</div><div class="mol"><span class="moli">🫧</span><span class="molf">2NaOH</span><span class="moln">2 mol NaOH</span></div><div class="sarr"><span class="sat">alcoholic</span><span class="sarri">⟶</span><span class="sab">heat</span></div><div class="mol" style="color:var(--ky)"><span class="moli gw">⚡</span><span class="molf mp">CH≡CH</span><span class="moln">Ethyne</span></div><div class="sop">+</div><div class="mol"><span class="moli">💧</span><span class="molf" style="color:#6ee7b7">2NaBr+2H₂O</span><span class="moln">Byproducts</span></div></div>
<div class="seq"><span>CH₂Br–CH₂Br</span><span class="sl">+</span><span>2NaOH</span><span class="sc">alcoholic, heat</span><span class="sa">⟶</span><span class="sp">CH≡CH</span><span class="sl">+</span><span class="sp">2NaBr+2H₂O</span></div>
<div class="sexpl" style="border-color:var(--ky);color:var(--ky)"><div class="sext">🧠 Double Dehydrohalogenation</div><div class="sexd"><strong>1st NaOH removes one HBr</strong> → alkene. <strong>2nd NaOH removes another HBr</strong> → alkyne. Two eliminations, two new π bonds created.</div></div></div>
</div>`;

  // ── MCQ ──
  panels['mq'] = `
<div id="mq-start"><div class="mcqs"><span class="mcqsi">📝</span><div class="mcqst">Chemistry MCQ Exam</div><div class="mcqss">Chapter 11 · Class 9–10 · Mineral Resources: Fossils</div>
<div class="irow"><div class="ic"><span class="ici">❓</span><span class="icv">30</span><span class="icl">Questions</span></div><div class="ic"><span class="ici">⏱️</span><span class="icv">20</span><span class="icl">Minutes</span></div><div class="ic"><span class="ici">🏆</span><span class="icv">30</span><span class="icl">Marks</span></div><div class="ic"><span class="ici">📚</span><span class="icv">300+</span><span class="icl">Bank</span></div></div>
<button class="stbtn" onclick="startExam()">🚀 Start Exam</button></div></div>
<div id="mqexam">
  <div class="exbar"><span class="epl" id="epl">0 / 30</span><div class="epw"><div class="epf" id="epf" style="width:0%"></div></div><div id="timer">20:00</div><button class="fnbtn" onclick="finishExam()">✔ Finish</button></div>
  <div id="ql" class="ql"></div>
  <div style="text-align:center;padding:1.4rem 0"><button class="fnbtn" style="font-size:1rem;padding:.7rem 2rem" onclick="finishExam()">✔ Submit &amp; Finish</button></div>
</div>
<div id="mqres">
  <div class="rher"><span class="ri" id="ri">🎉</span><div class="sring" id="sr"><span class="sn" id="sn">0</span><span class="sof">/ 30</span></div><div class="rg" id="rg">—</div><div class="rm" id="rm">—</div>
  <div class="rchips"><span class="chip c1" id="ch1">✓ 0</span><span class="chip c2" id="ch2">✗ 0</span><span class="chip c3" id="ch3">— 0</span><span class="chip c4" id="ch4">⏱ 0:00</span></div>
  <div class="ract"><button class="ra ra1" onclick="showRev()">📖 See Answers &amp; Explanations</button><button class="ra ra2" onclick="retake()">🔄 Retake</button></div></div>
  <div id="revs"></div>
</div>`;

  // ── NAME LOOKUP ──
  panels['nm'] = `
<div class="ph" style="border-color:#818cf8;color:#818cf8"><div class="phi">🔍</div><div><div class="pht">Name ↔ Formula Lookup</div><div class="phb"><span class="badge">150+ Compounds</span><span class="badge">IUPAC Naming Tricks</span><span class="badge">Common & Trivial Names</span></div><div class="phd">Type any IUPAC, common or trivial name to see all formulas. Switch to <strong>Naming Rules</strong> to learn the SPWPS trick for naming any organic compound.</div></div></div>
<div class="nm-wrap">
  <div class="etabs" style="margin-bottom:1.4rem">
    <button class="etab on" onclick="nmTab(this,'nm-search-tab')">🔍 Search Compounds</button>
    <button class="etab" onclick="nmTab(this,'nm-rules-tab')">📖 Naming Rules (SPWPS)</button>
    <button class="etab" onclick="nmTab(this,'nm-trivial-tab')">📜 Common Names List</button>
  </div>
  <!-- SEARCH TAB -->
  <div id="nm-search-tab" class="ecbl on">
    <div class="nm-search">
      <input class="nm-input" id="nm-input" type="text" placeholder="e.g. acetone · chloroform · propan-2-ol · aniline · oxalic acid" autocomplete="off" onkeydown="if(event.key==='Enter')nmLookup()"/>
      <button class="nm-btn" onclick="nmLookup()">🔍 Search</button>
    </div>
    <div id="nm-result"></div>
  </div>
  <!-- NAMING RULES TAB -->
  <div id="nm-rules-tab" class="ecbl">
    <div class="nm-card">
      <div class="nm-head"><div class="nm-icon">🏷️</div><div><div class="nm-title">IUPAC Naming — SPWPS Rule</div><div class="nm-sub">The Golden Trick from Nomenclature Notes</div></div></div>
      <div class="nm-body">
        <div class="nm-row"><div class="nm-lbl">The SPWPS Formula</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:.5rem;margin-top:.4rem">
            <div style="text-align:center;background:rgba(99,102,241,.15);border:2px solid #6366f1;border-radius:10px;padding:.6rem .3rem"><div style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:#818cf8">S</div><div style="font-size:.62rem;color:#6366f1;font-weight:800;margin-top:.2rem">Secondary<br>Prefix</div><div style="font-size:.58rem;color:#94a3b8;margin-top:.3rem">substituents<br>(chloro, methyl…)</div></div>
            <div style="text-align:center;background:rgba(16,185,129,.12);border:2px solid #10b981;border-radius:10px;padding:.6rem .3rem"><div style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:#4ade80">P</div><div style="font-size:.62rem;color:#10b981;font-weight:800;margin-top:.2rem">Primary<br>Prefix</div><div style="font-size:.58rem;color:#94a3b8;margin-top:.3rem">cyclo / bicyclo<br>(open = blank)</div></div>
            <div style="text-align:center;background:rgba(251,191,36,.12);border:2px solid #fbbf24;border-radius:10px;padding:.6rem .3rem"><div style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:#fde68a">W</div><div style="font-size:.62rem;color:#fbbf24;font-weight:800;margin-top:.2rem">Word<br>Root</div><div style="font-size:.58rem;color:#94a3b8;margin-top:.3rem">carbon count<br>(meth/eth/prop…)</div></div>
            <div style="text-align:center;background:rgba(244,114,182,.12);border:2px solid #f472b6;border-radius:10px;padding:.6rem .3rem"><div style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:#f9a8d4">P</div><div style="font-size:.62rem;color:#f472b6;font-weight:800;margin-top:.2rem">Primary<br>Suffix</div><div style="font-size:.58rem;color:#94a3b8;margin-top:.3rem">-ane/-ene/-yne<br>(bond type)</div></div>
            <div style="text-align:center;background:rgba(56,189,248,.12);border:2px solid #38bdf8;border-radius:10px;padding:.6rem .3rem"><div style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:#7dd3fc">S</div><div style="font-size:.62rem;color:#38bdf8;font-weight:800;margin-top:.2rem">Secondary<br>Suffix</div><div style="font-size:.58rem;color:#94a3b8;margin-top:.3rem">-ol/-al/-one<br>/-oic acid…</div></div>
          </div>
        </div>
        <div class="nm-row"><div class="nm-lbl">📏 Word Roots — Carbon Count</div>
          <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:.4rem;margin-top:.4rem">
            ${[['C₁','meth'],['C₂','eth'],['C₃','prop'],['C₄','but'],['C₅','pent'],['C₆','hex'],['C₇','hept'],['C₈','oct'],['C₉','non'],['C₁₀','dec']].map(([c,r])=>`<div style="text-align:center;background:rgba(251,191,36,.07);border:1px solid rgba(251,191,36,.2);border-radius:8px;padding:.4rem .2rem"><div style="font-family:'JetBrains Mono',monospace;font-size:.75rem;color:#fbbf24">${c}</div><div style="font-family:'Fredoka One',cursive;font-size:.9rem;color:#fde68a">${r}</div></div>`).join('')}
          </div>
        </div>
        <div class="nm-row"><div class="nm-lbl">🔗 Primary Suffixes — Bond Type</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem;margin-top:.4rem">
            <div style="background:rgba(255,255,255,.04);border:1px solid var(--bd);border-radius:9px;padding:.6rem;text-align:center"><div style="font-family:'Fredoka One',cursive;color:#ff7043;font-size:1.1rem">-ane</div><div style="font-size:.72rem;color:#94a3b8;margin-top:.2rem">C–C single bond<br><em>Alkane (saturated)</em></div></div>
            <div style="background:rgba(255,255,255,.04);border:1px solid var(--bd);border-radius:9px;padding:.6rem;text-align:center"><div style="font-family:'Fredoka One',cursive;color:#00e5a0;font-size:1.1rem">-ene</div><div style="font-size:.72rem;color:#94a3b8;margin-top:.2rem">C=C double bond<br><em>Alkene</em></div></div>
            <div style="background:rgba(255,255,255,.04);border:1px solid var(--bd);border-radius:9px;padding:.6rem;text-align:center"><div style="font-family:'Fredoka One',cursive;color:#c084fc;font-size:1.1rem">-yne</div><div style="font-size:.72rem;color:#94a3b8;margin-top:.2rem">C≡C triple bond<br><em>Alkyne</em></div></div>
          </div>
        </div>
        <div class="nm-row"><div class="nm-lbl">🏷️ Secondary Suffixes — Functional Groups (Priority Order)</div>
          <div style="margin-top:.5rem;display:flex;flex-direction:column;gap:.3rem">
            ${[['1','–COOH','-oic acid','Carboxylic Acid','#f472b6'],['2','–SO₃H','-sulphonic acid','Sulphonic Acid','#fb923c'],['3','–COX','-oyl halide','Acid Halide','#ef4444'],['4','–CONH₂','-amide','Amide','#a78bfa'],['5','–CN','-nitrile','Nitrile/Cyanide','#818cf8'],['6','–CHO','-al','Aldehyde','#fbbf24'],['7','>C=O','-one','Ketone','#f59e0b'],['8','–OH','-ol','Alcohol','#38bdf8'],['9','–SH','-thiol','Thioalcohol','#4ade80'],['10','–NH₂','-amine','Amine','#c084fc']].map(([n,fg,sfx,name,clr])=>`<div style="display:flex;align-items:center;gap:.6rem;padding:.4rem .7rem;background:rgba(255,255,255,.03);border-radius:8px;border-left:3px solid ${clr}"><span style="font-family:'JetBrains Mono',monospace;font-size:.68rem;color:#6b7280;min-width:16px">${n}</span><span style="font-family:'JetBrains Mono',monospace;font-size:.78rem;color:${clr};min-width:70px">${fg}</span><span style="font-family:'Fredoka One',cursive;font-size:.82rem;color:#e2e8f0;min-width:90px">${sfx}</span><span style="font-size:.72rem;color:#94a3b8">${name}</span></div>`).join('')}
          </div>
        </div>
        <div class="nm-row"><div class="nm-lbl">💡 Example: Name "2-bromobut-2-en-1-ol" broken down</div>
          <div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-top:.5rem;align-items:center">
            <span style="background:rgba(99,102,241,.2);border:1.5px solid #6366f1;padding:.3rem .7rem;border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#818cf8">2-bromo</span>
            <span style="color:#374151;font-size:1rem">+</span>
            <span style="background:rgba(16,185,129,.15);border:1.5px solid #10b981;padding:.3rem .7rem;border-radius:8px;font-family:'Fredoka One',cursive;font-size:.85rem;color:#4ade80">(open chain)</span>
            <span style="color:#374151;font-size:1rem">+</span>
            <span style="background:rgba(251,191,36,.15);border:1.5px solid #fbbf24;padding:.3rem .7rem;border-radius:8px;font-family:'Fredoka One',cursive;font-size:.85rem;color:#fde68a">but</span>
            <span style="color:#374151;font-size:1rem">+</span>
            <span style="background:rgba(244,114,182,.15);border:1.5px solid #f472b6;padding:.3rem .7rem;border-radius:8px;font-family:'Fredoka One',cursive;font-size:.85rem;color:#f9a8d4">-2-en</span>
            <span style="color:#374151;font-size:1rem">+</span>
            <span style="background:rgba(56,189,248,.15);border:1.5px solid #38bdf8;padding:.3rem .7rem;border-radius:8px;font-family:'Fredoka One',cursive;font-size:.85rem;color:#7dd3fc">-1-ol</span>
            <span style="color:#374151;font-size:1rem">=</span>
            <span style="font-family:'Fredoka One',cursive;font-size:.95rem;color:#e2e8f0">2-Bromobut-2-en-1-ol</span>
          </div>
          <div style="font-size:.8rem;color:#6b7280;margin-top:.4rem;font-style:italic">4 carbons (but) + double bond at C2 (-2-en) + bromo at C2 + alcohol at C1 (-1-ol)</div>
        </div>
      </div>
    </div>
  </div>
  <!-- COMMON NAMES TAB -->
  <div id="nm-trivial-tab" class="ecbl">
    <div class="nm-card">
      <div class="nm-head"><div class="nm-icon">📜</div><div><div class="nm-title">Common / Trivial Names</div><div class="nm-sub">Search these names in the Search tab!</div></div></div>
      <div class="nm-body">
        ${[['Trivial Name','Common Name','IUPAC Name'],['Marsh gas / Fire damp','Methane','Methane (CH₄)'],['Wood spirit / Methyl alcohol','Methanol','Methanol'],['Grain alcohol / Drinking alcohol','Ethanol','Ethanol'],['Rectified spirit (96% aq.)','Ethanol','Ethanol'],['Acetaldehyde','Ethanal','Ethanal'],['Formaldehyde','Methanal','Methanal'],['Formalin (40% aq. solution)','Formaldehyde','Methanal'],['Vinegar (4–10% aq.)','Acetic acid','Ethanoic acid'],['Formic acid (ant sting)','Formic acid','Methanoic acid'],['Butyric acid (rancid butter)','Butanoic acid','Butanoic acid'],['Caproic acid (goats)','Hexanoic acid','Hexanoic acid'],['Acetone (nail polish remover)','Dimethyl ketone','Propan-2-one'],['Acetophenone','Methyl phenyl ketone','1-Phenylethanone'],['Acrolein / Acrylaldehyde','Propenal','Prop-2-enal'],['Chloroform','Trichloromethane','Trichloromethane'],['Bromoform','Tribromomethane','Tribromomethane'],['Carbon tetrachloride','Tetrachloromethane','Tetrachloromethane'],['Methylene chloride','Dichloromethane','Dichloromethane'],['Benzyl chloride','α-chlorotoluene','Chlorophenylmethane'],['Anisole','Methyl phenyl ether','Methoxybenzene'],['Phenetole','Ethyl phenyl ether','Ethoxybenzene'],['Acetylene','Ethyne','Ethyne'],['Ethylene','Ethene','Ethene'],['Glycerol / Glycerin','Propane-1,2,3-triol','Propane-1,2,3-triol'],['Catechol','Benzene-1,2-diol','Benzene-1,2-diol'],['Resorcinol','Benzene-1,3-diol','Benzene-1,3-diol'],['Oxalic acid','Ethanedioic acid','Ethane-1,2-dioic acid'],['Malonic acid','Propanedioic acid','Propane-1,3-dioic acid'],['Succinic acid','Butanedioic acid','Butane-1,4-dioic acid'],['Glutaric acid','Pentanedioic acid','Pentane-1,5-dioic acid'],['Adipic acid','Hexanedioic acid','Hexane-1,6-dioic acid'],['Lactic acid (curd)','2-Hydroxypropanoic acid','2-Hydroxypropanoic acid'],['Citric acid (lemon)','2-Hydroxypropane-1,2,3-tricarboxylic acid','Citric acid'],['o-cresol','2-Methylphenol','2-Methylphenol'],['m-cresol','3-Methylphenol','3-Methylphenol'],['p-cresol','4-Methylphenol','4-Methylphenol'],['Phthalic acid','Benzene-1,2-dicarboxylic acid','Benzene-1,2-dicarboxylic acid'],['Isophthalic acid','Benzene-1,3-dicarboxylic acid','Benzene-1,3-dicarboxylic acid'],['Terephthalic acid','Benzene-1,4-dicarboxylic acid','Benzene-1,4-dicarboxylic acid']].map((row,i)=>i===0?`<div style="display:grid;grid-template-columns:1.5fr 1.2fr 1.3fr;gap:.4rem;padding:.5rem .7rem;background:rgba(99,102,241,.1);border-radius:8px;margin-bottom:.3rem">${row.map(h=>`<span style="font-family:'Fredoka One',cursive;font-size:.78rem;color:#818cf8">${h}</span>`).join('')}</div>`:`<div style="display:grid;grid-template-columns:1.5fr 1.2fr 1.3fr;gap:.4rem;padding:.4rem .7rem;background:rgba(255,255,255,.02);border-radius:6px;border-left:2px solid rgba(129,140,248,.25);margin-bottom:.25rem">${[`<span style="font-size:.78rem;color:#fde68a;font-style:italic">${row[0]}</span>`,`<span style="font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#c4b5fd">${row[1]}</span>`,`<span style="font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#6ee7b7">${row[2]}</span>`].join('')}</div>`).join('')}
      </div>
    </div>
  </div>
</div>`;

  // ─────────────────────────────────────────────
  //  COMPOUND DATABASE (150+ compounds from PDF)
  // ─────────────────────────────────────────────
  const COMPOUNDS = [
    // ── ALKANES ──
    {names:['methane','ch4','marsh gas','fire damp','natural gas'],iupac:'Methane',class:'Alkane',formula:'CH₄',mol:'CH₄',struct:'H\n|\nH–C–H\n|\nH',line:'CH₄',mw:'16.04',bp:'−161.5°C',state:'Gas',aka:'Marsh gas / Natural gas main component',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'meth',ps:'-ane',ss:'—'}},
    {names:['ethane','c2h6'],iupac:'Ethane',class:'Alkane',formula:'C₂H₆',mol:'C₂H₆',struct:'CH₃–CH₃',line:'CH₃–CH₃',mw:'30.07',bp:'−88.6°C',state:'Gas',aka:'Second alkane',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'eth',ps:'-ane',ss:'—'}},
    {names:['propane','c3h8','lpg'],iupac:'Propane',class:'Alkane',formula:'C₃H₈',mol:'C₃H₈',struct:'CH₃–CH₂–CH₃',line:'CH₃–CH₂–CH₃',mw:'44.10',bp:'−42.1°C',state:'Gas',aka:'LPG component',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'prop',ps:'-ane',ss:'—'}},
    {names:['butane','n-butane','c4h10'],iupac:'Butane',class:'Alkane',formula:'C₄H₁₀',mol:'C₄H₁₀',struct:'CH₃–CH₂–CH₂–CH₃',line:'CH₃CH₂CH₂CH₃',mw:'58.12',bp:'−0.5°C',state:'Gas/Liquid',aka:'Lighter fuel gas',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'but',ps:'-ane',ss:'—'}},
    {names:['pentane','c5h12'],iupac:'Pentane',class:'Alkane',formula:'C₅H₁₂',mol:'C₅H₁₂',struct:'CH₃–(CH₂)₃–CH₃',line:'CH₃(CH₂)₃CH₃',mw:'72.15',bp:'36.1°C',state:'Liquid',aka:'5th alkane',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'pent',ps:'-ane',ss:'—'}},
    {names:['hexane','c6h14'],iupac:'Hexane',class:'Alkane',formula:'C₆H₁₄',mol:'C₆H₁₄',struct:'CH₃–(CH₂)₄–CH₃',line:'CH₃(CH₂)₄CH₃',mw:'86.18',bp:'68.7°C',state:'Liquid',aka:'Common solvent',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'hex',ps:'-ane',ss:'—'}},
    {names:['heptane','c7h16'],iupac:'Heptane',class:'Alkane',formula:'C₇H₁₆',mol:'C₇H₁₆',struct:'CH₃–(CH₂)₅–CH₃',line:'CH₃(CH₂)₅CH₃',mw:'100.20',bp:'98.4°C',state:'Liquid',aka:'Petrol component',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'hept',ps:'-ane',ss:'—'}},
    {names:['octane','c8h18'],iupac:'Octane',class:'Alkane',formula:'C₈H₁₈',mol:'C₈H₁₈',struct:'CH₃–(CH₂)₆–CH₃',line:'CH₃(CH₂)₆CH₃',mw:'114.23',bp:'125.7°C',state:'Liquid',aka:'Petrol / octane rating',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'oct',ps:'-ane',ss:'—'}},
    {names:['nonane','c9h20'],iupac:'Nonane',class:'Alkane',formula:'C₉H₂₀',mol:'C₉H₂₀',struct:'CH₃–(CH₂)₇–CH₃',line:'CH₃(CH₂)₇CH₃',mw:'128.26',bp:'150.8°C',state:'Liquid',aka:'9th alkane',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'non',ps:'-ane',ss:'—'}},
    {names:['decane','c10h22'],iupac:'Decane',class:'Alkane',formula:'C₁₀H₂₂',mol:'C₁₀H₂₂',struct:'CH₃–(CH₂)₈–CH₃',line:'CH₃(CH₂)₈CH₃',mw:'142.28',bp:'174.1°C',state:'Liquid',aka:'Kerosene/Diesel range',icon:'🔥',color:'var(--ka)',spwps:{s:'—',p:'—',w:'dec',ps:'-ane',ss:'—'}},
    {names:['2-methylpropane','isobutane','iso butane','methylpropane'],iupac:'2-Methylpropane',class:'Alkane',formula:'(CH₃)₃CH',mol:'C₄H₁₀',struct:'CH₃–CH(CH₃)–CH₃',line:'(CH₃)₃CH',mw:'58.12',bp:'−11.7°C',state:'Gas',aka:'Isobutane — LPG component',icon:'🔥',color:'var(--ka)',spwps:{s:'2-methyl',p:'—',w:'prop',ps:'-ane',ss:'—'}},
    {names:['2-methylbutane','isopentane','iso pentane'],iupac:'2-Methylbutane',class:'Alkane',formula:'(CH₃)₂CHCH₂CH₃',mol:'C₅H₁₂',struct:'CH₃–CH(CH₃)–CH₂–CH₃',line:'(CH₃)₂CHCH₂CH₃',mw:'72.15',bp:'27.8°C',state:'Liquid',aka:'Isopentane',icon:'🔥',color:'var(--ka)',spwps:{s:'2-methyl',p:'—',w:'but',ps:'-ane',ss:'—'}},
    {names:['trichloromethane','chloroform'],iupac:'Trichloromethane',class:'Alkane (Halide)',formula:'CHCl₃',mol:'CHCl₃',struct:'H–CCl₃',line:'CHCl₃',mw:'119.38',bp:'61.2°C',state:'Liquid',aka:'Chloroform — anaesthetic (historic)',icon:'🔥',color:'var(--ka)',spwps:{s:'trichloro',p:'—',w:'meth',ps:'-ane',ss:'—'}},
    {names:['tribromomethane','bromoform'],iupac:'Tribromomethane',class:'Alkane (Halide)',formula:'CHBr₃',mol:'CHBr₃',struct:'H–CBr₃',line:'CHBr₃',mw:'252.73',bp:'149.5°C',state:'Liquid',aka:'Bromoform',icon:'🔥',color:'var(--ka)',spwps:{s:'tribromo',p:'—',w:'meth',ps:'-ane',ss:'—'}},
    {names:['tetrachloromethane','carbon tetrachloride','ccl4'],iupac:'Tetrachloromethane',class:'Alkane (Halide)',formula:'CCl₄',mol:'CCl₄',struct:'CCl₄',line:'CCl₄',mw:'153.82',bp:'76.7°C',state:'Liquid',aka:'Carbon tetrachloride — fire extinguisher (historic)',icon:'🔥',color:'var(--ka)',spwps:{s:'tetrachloro',p:'—',w:'meth',ps:'-ane',ss:'—'}},
    {names:['dichloromethane','methylene chloride'],iupac:'Dichloromethane',class:'Alkane (Halide)',formula:'CH₂Cl₂',mol:'CH₂Cl₂',struct:'CH₂Cl₂',line:'CH₂Cl₂',mw:'84.93',bp:'39.6°C',state:'Liquid',aka:'Methylene chloride — paint stripper solvent',icon:'🔥',color:'var(--ka)',spwps:{s:'dichloro',p:'—',w:'meth',ps:'-ane',ss:'—'}},

    // ── ALKENES ──
    {names:['ethene','ethylene','c2h4'],iupac:'Ethene',class:'Alkene',formula:'C₂H₄',mol:'C₂H₄',struct:'CH₂=CH₂',line:'CH₂=CH₂',mw:'28.05',bp:'−103.7°C',state:'Gas',aka:'Ethylene — monomer of Polythene',icon:'🌿',color:'var(--ke)',spwps:{s:'—',p:'—',w:'eth',ps:'-ene',ss:'—'}},
    {names:['propene','propylene','c3h6','prop-1-ene'],iupac:'Propene',class:'Alkene',formula:'C₃H₆',mol:'C₃H₆',struct:'CH₂=CH–CH₃',line:'CH₂=CH–CH₃',mw:'42.08',bp:'−47.6°C',state:'Gas',aka:'Propylene — monomer of Polypropylene',icon:'🌿',color:'var(--ke)',spwps:{s:'—',p:'—',w:'prop',ps:'-ene',ss:'—'}},
    {names:['but-1-ene','1-butene','butene 1'],iupac:'But-1-ene',class:'Alkene',formula:'C₄H₈',mol:'C₄H₈',struct:'CH₂=CH–CH₂–CH₃',line:'CH₂=CH–CH₂–CH₃',mw:'56.11',bp:'−6.3°C',state:'Gas',aka:'1-Butylene',icon:'🌿',color:'var(--ke)',spwps:{s:'—',p:'—',w:'but',ps:'-1-ene',ss:'—'}},
    {names:['but-2-ene','2-butene','butene 2'],iupac:'But-2-ene',class:'Alkene',formula:'C₄H₈',mol:'C₄H₈',struct:'CH₃–CH=CH–CH₃',line:'CH₃–CH=CH–CH₃',mw:'56.11',bp:'3.7°C',state:'Gas',aka:'2-Butylene — has cis/trans isomers',icon:'🌿',color:'var(--ke)',spwps:{s:'—',p:'—',w:'but',ps:'-2-ene',ss:'—'}},
    {names:['pent-1-ene','1-pentene','pentene'],iupac:'Pent-1-ene',class:'Alkene',formula:'C₅H₁₀',mol:'C₅H₁₀',struct:'CH₂=CH–(CH₂)₂–CH₃',line:'CH₂=CH–(CH₂)₂–CH₃',mw:'70.13',bp:'30°C',state:'Liquid',aka:'1-Pentylene',icon:'🌿',color:'var(--ke)',spwps:{s:'—',p:'—',w:'pent',ps:'-1-ene',ss:'—'}},
    {names:['1-chloroethene','vinyl chloride','ch2=chcl'],iupac:'1-Chloroethene',class:'Alkene (Halide)',formula:'CH₂=CHCl',mol:'C₂H₃Cl',struct:'CH₂=CH–Cl',line:'CH₂=CHCl',mw:'62.50',bp:'−13.4°C',state:'Gas',aka:'Vinyl chloride — monomer of PVC',icon:'🌿',color:'var(--ke)',spwps:{s:'1-chloro',p:'—',w:'eth',ps:'-ene',ss:'—'}},

    // ── ALKYNES ──
    {names:['ethyne','acetylene','c2h2'],iupac:'Ethyne',class:'Alkyne',formula:'C₂H₂',mol:'C₂H₂',struct:'CH≡CH',line:'CH≡CH',mw:'26.04',bp:'−84°C',state:'Gas',aka:'Acetylene — welding gas, from CaC₂+H₂O',icon:'⚡',color:'var(--ky)',spwps:{s:'—',p:'—',w:'eth',ps:'-yne',ss:'—'}},
    {names:['propyne','prop-1-yne','methylacetylene','c3h4'],iupac:'Propyne',class:'Alkyne',formula:'C₃H₄',mol:'C₃H₄',struct:'CH≡C–CH₃',line:'CH≡C–CH₃',mw:'40.06',bp:'−23.2°C',state:'Gas',aka:'Methylacetylene',icon:'⚡',color:'var(--ky)',spwps:{s:'—',p:'—',w:'prop',ps:'-yne',ss:'—'}},
    {names:['but-1-yne','1-butyne','butyne 1'],iupac:'But-1-yne',class:'Alkyne',formula:'C₄H₆',mol:'C₄H₆',struct:'CH≡C–CH₂–CH₃',line:'CH≡C–CH₂–CH₃',mw:'54.09',bp:'8.1°C',state:'Liquid',aka:'Ethylacetylene',icon:'⚡',color:'var(--ky)',spwps:{s:'—',p:'—',w:'but',ps:'-1-yne',ss:'—'}},
    {names:['but-2-yne','2-butyne','butyne 2','dimethylacetylene','crotonylene'],iupac:'But-2-yne',class:'Alkyne',formula:'C₄H₆',mol:'C₄H₆',struct:'CH₃–C≡C–CH₃',line:'CH₃–C≡C–CH₃',mw:'54.09',bp:'27°C',state:'Liquid',aka:'Dimethylacetylene / Crotonylene',icon:'⚡',color:'var(--ky)',spwps:{s:'—',p:'—',w:'but',ps:'-2-yne',ss:'—'}},
    {names:['pent-1-yne','1-pentyne','pentyne'],iupac:'Pent-1-yne',class:'Alkyne',formula:'C₅H₈',mol:'C₅H₈',struct:'CH≡C–(CH₂)₂–CH₃',line:'CH≡C–(CH₂)₂–CH₃',mw:'68.12',bp:'40.2°C',state:'Liquid',aka:'n-Propylacetylene',icon:'⚡',color:'var(--ky)',spwps:{s:'—',p:'—',w:'pent',ps:'-1-yne',ss:'—'}},
    {names:['pent-2-yne','2-pentyne','pentyne 2'],iupac:'Pent-2-yne',class:'Alkyne',formula:'C₅H₈',mol:'C₅H₈',struct:'CH₃–C≡C–CH₂–CH₃',line:'CH₃–C≡C–CH₂–CH₃',mw:'68.12',bp:'56°C',state:'Liquid',aka:'Methylethylacetylene',icon:'⚡',color:'var(--ky)',spwps:{s:'—',p:'—',w:'pent',ps:'-2-yne',ss:'—'}},

    // ── ALCOHOLS ──
    {names:['methanol','methyl alcohol','wood alcohol','wood spirit'],iupac:'Methanol',class:'Alcohol',formula:'CH₃OH',mol:'CH₄O',struct:'CH₃–OH',line:'CH₃OH',mw:'32.04',bp:'64.7°C',state:'Liquid',aka:'Wood spirit — poisonous! Destructive distillation of wood',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'meth',ps:'-an',ss:'-ol'}},
    {names:['ethanol','ethyl alcohol','drinking alcohol','rectified spirit','c2h5oh','grain alcohol'],iupac:'Ethanol',class:'Alcohol',formula:'C₂H₅OH',mol:'C₂H₆O',struct:'CH₃–CH₂–OH',line:'CH₃–CH₂–OH',mw:'46.07',bp:'78.4°C',state:'Liquid',aka:'Rectified spirit (96%) — drinking alcohol, from fermentation',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'eth',ps:'-an',ss:'-ol'}},
    {names:['propan-1-ol','1-propanol','propanol','n-propanol','n-propyl alcohol'],iupac:'Propan-1-ol',class:'Alcohol',formula:'C₃H₇OH',mol:'C₃H₈O',struct:'CH₃–CH₂–CH₂–OH',line:'CH₃CH₂CH₂OH',mw:'60.10',bp:'97.2°C',state:'Liquid',aka:'n-Propanol / n-Propyl alcohol',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-1-ol'}},
    {names:['propan-2-ol','2-propanol','isopropanol','isopropyl alcohol','rubbing alcohol'],iupac:'Propan-2-ol',class:'Alcohol',formula:'(CH₃)₂CHOH',mol:'C₃H₈O',struct:'CH₃–CH(OH)–CH₃',line:'CH₃–CHOH–CH₃',mw:'60.10',bp:'82.6°C',state:'Liquid',aka:'Isopropanol / Rubbing alcohol — 2° alcohol',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-2-ol'}},
    {names:['butan-1-ol','1-butanol','n-butanol','n-butyl alcohol','butanol'],iupac:'Butan-1-ol',class:'Alcohol',formula:'C₄H₉OH',mol:'C₄H₁₀O',struct:'CH₃–(CH₂)₃–OH',line:'CH₃CH₂CH₂CH₂OH',mw:'74.12',bp:'117.7°C',state:'Liquid',aka:'n-Butyl alcohol',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'but',ps:'-an',ss:'-1-ol'}},
    {names:['butan-2-ol','2-butanol','sec-butanol','sec-butyl alcohol'],iupac:'Butan-2-ol',class:'Alcohol',formula:'C₄H₉OH',mol:'C₄H₁₀O',struct:'CH₃–CH(OH)–CH₂–CH₃',line:'CH₃–CHOH–CH₂–CH₃',mw:'74.12',bp:'99.5°C',state:'Liquid',aka:'sec-Butanol — 2° alcohol',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'but',ps:'-an',ss:'-2-ol'}},
    {names:['2-methylpropan-1-ol','isobutanol','isobutyl alcohol'],iupac:'2-Methylpropan-1-ol',class:'Alcohol',formula:'(CH₃)₂CHCH₂OH',mol:'C₄H₁₀O',struct:'CH₃–CH(CH₃)–CH₂–OH',line:'(CH₃)₂CHCH₂OH',mw:'74.12',bp:'108°C',state:'Liquid',aka:'Iso-butanol / Iso-butyl alcohol',icon:'🧪',color:'var(--al)',spwps:{s:'2-methyl',p:'—',w:'prop',ps:'-an',ss:'-1-ol'}},
    {names:['2-methylpropan-2-ol','tert-butanol','tert-butyl alcohol','t-butanol'],iupac:'2-Methylpropan-2-ol',class:'Alcohol',formula:'(CH₃)₃COH',mol:'C₄H₁₀O',struct:'(CH₃)₃C–OH',line:'(CH₃)₃COH',mw:'74.12',bp:'82.4°C',state:'Liquid',aka:'tert-Butanol — 3° alcohol',icon:'🧪',color:'var(--al)',spwps:{s:'2-methyl',p:'—',w:'prop',ps:'-an',ss:'-2-ol'}},
    {names:['propane-1,2,3-triol','glycerol','glycerin','glycerine'],iupac:'Propane-1,2,3-triol',class:'Alcohol',formula:'C₃H₅(OH)₃',mol:'C₃H₈O₃',struct:'CH₂(OH)–CH(OH)–CH₂(OH)',line:'HOCH₂–CHOH–CH₂OH',mw:'92.09',bp:'290°C',state:'Liquid',aka:'Glycerol / Glycerin — soap byproduct, sweet syrup',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-1,2,3-triol'}},
    {names:['ethane-1,2-diol','ethylene glycol'],iupac:'Ethane-1,2-diol',class:'Alcohol',formula:'C₂H₄(OH)₂',mol:'C₂H₆O₂',struct:'CH₂(OH)–CH₂(OH)',line:'HOCH₂–CH₂OH',mw:'62.07',bp:'197°C',state:'Liquid',aka:'Ethylene glycol — antifreeze',icon:'🧪',color:'var(--al)',spwps:{s:'—',p:'—',w:'eth',ps:'-an',ss:'-1,2-diol'}},

    // ── ALDEHYDES ──
    {names:['methanal','formaldehyde','hcho','formalin'],iupac:'Methanal',class:'Aldehyde',formula:'HCHO',mol:'CH₂O',struct:'H–CHO',line:'HCHO',mw:'30.03',bp:'−19°C',state:'Gas',aka:'Formaldehyde — Formalin = 40% aq. solution, preserves specimens',icon:'✨',color:'var(--ad)',spwps:{s:'—',p:'—',w:'meth',ps:'-an',ss:'-al'}},
    {names:['ethanal','acetaldehyde','ch3cho'],iupac:'Ethanal',class:'Aldehyde',formula:'CH₃CHO',mol:'C₂H₄O',struct:'CH₃–CHO',line:'CH₃–CHO',mw:'44.05',bp:'20.2°C',state:'Liquid',aka:'Acetaldehyde — from alkyne hydration',icon:'✨',color:'var(--ad)',spwps:{s:'—',p:'—',w:'eth',ps:'-an',ss:'-al'}},
    {names:['propanal','propionaldehyde','ch3ch2cho'],iupac:'Propanal',class:'Aldehyde',formula:'CH₃CH₂CHO',mol:'C₃H₆O',struct:'CH₃–CH₂–CHO',line:'CH₃–CH₂–CHO',mw:'58.08',bp:'48.8°C',state:'Liquid',aka:'Propionaldehyde',icon:'✨',color:'var(--ad)',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-al'}},
    {names:['butanal','butyraldehyde'],iupac:'Butanal',class:'Aldehyde',formula:'CH₃CH₂CH₂CHO',mol:'C₄H₈O',struct:'CH₃–CH₂–CH₂–CHO',line:'CH₃(CH₂)₂CHO',mw:'72.11',bp:'74.8°C',state:'Liquid',aka:'Butyraldehyde',icon:'✨',color:'var(--ad)',spwps:{s:'—',p:'—',w:'but',ps:'-an',ss:'-al'}},
    {names:['pentanal','valeraldehyde'],iupac:'Pentanal',class:'Aldehyde',formula:'CH₃(CH₂)₃CHO',mol:'C₅H₁₀O',struct:'CH₃–(CH₂)₃–CHO',line:'CH₃(CH₂)₃CHO',mw:'86.13',bp:'103°C',state:'Liquid',aka:'Valeraldehyde',icon:'✨',color:'var(--ad)',spwps:{s:'—',p:'—',w:'pent',ps:'-an',ss:'-al'}},
    {names:['prop-2-enal','acrolein','acrylaldehyde'],iupac:'Prop-2-enal',class:'Aldehyde',formula:'CH₂=CH–CHO',mol:'C₃H₄O',struct:'CH₂=CH–CHO',line:'CH₂=CH–CHO',mw:'56.06',bp:'53°C',state:'Liquid',aka:'Acrolein / Acrylaldehyde — pungent smell',icon:'✨',color:'var(--ad)',spwps:{s:'—',p:'—',w:'prop',ps:'-2-en',ss:'-al'}},

    // ── KETONES ──
    {names:['propan-2-one','acetone','dimethyl ketone','propanone'],iupac:'Propan-2-one',class:'Ketone',formula:'CH₃COCH₃',mol:'C₃H₆O',struct:'CH₃–C(=O)–CH₃',line:'CH₃–CO–CH₃',mw:'58.08',bp:'56.1°C',state:'Liquid',aka:'Acetone — nail polish remover solvent',icon:'🫧',color:'#f59e0b',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-2-one'}},
    {names:['butan-2-one','methyl ethyl ketone','butanone','mek'],iupac:'Butan-2-one',class:'Ketone',formula:'CH₃COCH₂CH₃',mol:'C₄H₈O',struct:'CH₃–C(=O)–CH₂–CH₃',line:'CH₃–CO–CH₂CH₃',mw:'72.11',bp:'79.6°C',state:'Liquid',aka:'MEK — methyl ethyl ketone, solvent',icon:'🫧',color:'#f59e0b',spwps:{s:'—',p:'—',w:'but',ps:'-an',ss:'-2-one'}},
    {names:['pentan-2-one','methyl n-propyl ketone'],iupac:'Pentan-2-one',class:'Ketone',formula:'CH₃CO(CH₂)₂CH₃',mol:'C₅H₁₀O',struct:'CH₃–C(=O)–CH₂–CH₂–CH₃',line:'CH₃–CO–CH₂CH₂CH₃',mw:'86.13',bp:'102.3°C',state:'Liquid',aka:'Methyl n-propyl ketone',icon:'🫧',color:'#f59e0b',spwps:{s:'—',p:'—',w:'pent',ps:'-an',ss:'-2-one'}},
    {names:['pentan-3-one','diethyl ketone'],iupac:'Pentan-3-one',class:'Ketone',formula:'(CH₃CH₂)₂CO',mol:'C₅H₁₀O',struct:'CH₃CH₂–C(=O)–CH₂CH₃',line:'C₂H₅–CO–C₂H₅',mw:'86.13',bp:'101.7°C',state:'Liquid',aka:'Diethyl ketone',icon:'🫧',color:'#f59e0b',spwps:{s:'—',p:'—',w:'pent',ps:'-an',ss:'-3-one'}},
    {names:['2,4-dimethylpentan-3-one','diisopropyl ketone'],iupac:'2,4-Dimethylpentan-3-one',class:'Ketone',formula:'((CH₃)₂CH)₂CO',mol:'C₇H₁₄O',struct:'(CH₃)₂CH–CO–CH(CH₃)₂',line:'(iPr)₂CO',mw:'114.19',bp:'124°C',state:'Liquid',aka:'Diisopropyl ketone',icon:'🫧',color:'#f59e0b',spwps:{s:'2,4-dimethyl',p:'—',w:'pent',ps:'-an',ss:'-3-one'}},
    {names:['cyclohexanone'],iupac:'Cyclohexanone',class:'Ketone',formula:'C₆H₁₀O',mol:'C₆H₁₀O',struct:'Cyclohexane ring with C=O',line:'C₅H₁₀–C=O (ring)',mw:'98.14',bp:'155.7°C',state:'Liquid',aka:'Industrial solvent',icon:'🫧',color:'#f59e0b',spwps:{s:'—',p:'cyclo',w:'hex',ps:'-an',ss:'-one'}},
    {names:['1-phenylethanone','acetophenone','methyl phenyl ketone'],iupac:'1-Phenylethanone',class:'Ketone',formula:'C₆H₅COCH₃',mol:'C₈H₈O',struct:'C₆H₅–C(=O)–CH₃',line:'Ph–CO–CH₃',mw:'120.15',bp:'202°C',state:'Liquid',aka:'Acetophenone — sweet orange-blossom odour',icon:'🫧',color:'#f59e0b',spwps:{s:'1-phenyl',p:'—',w:'eth',ps:'-an',ss:'-one'}},
    {names:['4-methylpent-3-en-2-one','mesityl oxide'],iupac:'4-Methylpent-3-en-2-one',class:'Ketone',formula:'(CH₃)₂C=CHCOCH₃',mol:'C₆H₁₀O',struct:'CH₃–CO–CH=C(CH₃)₂',line:'(CH₃)₂C=CH–CO–CH₃',mw:'98.14',bp:'130°C',state:'Liquid',aka:'Mesityl oxide — from acetone condensation',icon:'🫧',color:'#f59e0b',spwps:{s:'4-methyl',p:'—',w:'pent',ps:'-3-en',ss:'-2-one'}},

    // ── FATTY ACIDS (CARBOXYLIC ACIDS) ──
    {names:['methanoic acid','formic acid','hcooh'],iupac:'Methanoic Acid',class:'Fatty Acid',formula:'HCOOH',mol:'CH₂O₂',struct:'H–COOH',line:'HCOOH',mw:'46.03',bp:'100.8°C',state:'Liquid',aka:'Formic acid — from red ant sting (formicus)',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'meth',ps:'-an',ss:'-oic acid'}},
    {names:['ethanoic acid','acetic acid','ch3cooh','vinegar'],iupac:'Ethanoic Acid',class:'Fatty Acid',formula:'CH₃COOH',mol:'C₂H₄O₂',struct:'CH₃–COOH',line:'CH₃–COOH',mw:'60.05',bp:'118.1°C',state:'Liquid',aka:'Acetic acid — Vinegar = 4–10% aq. solution',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'eth',ps:'-an',ss:'-oic acid'}},
    {names:['propanoic acid','propionic acid'],iupac:'Propanoic Acid',class:'Fatty Acid',formula:'CH₃CH₂COOH',mol:'C₃H₆O₂',struct:'CH₃–CH₂–COOH',line:'CH₃–CH₂–COOH',mw:'74.08',bp:'141.2°C',state:'Liquid',aka:'Propionic acid — food preservative E280',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-oic acid'}},
    {names:['butanoic acid','butyric acid'],iupac:'Butanoic Acid',class:'Fatty Acid',formula:'CH₃CH₂CH₂COOH',mol:'C₄H₈O₂',struct:'CH₃–CH₂–CH₂–COOH',line:'CH₃(CH₂)₂COOH',mw:'88.11',bp:'163.8°C',state:'Liquid',aka:'Butyric acid — rancid butter smell',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'but',ps:'-an',ss:'-oic acid'}},
    {names:['pentanoic acid','valeric acid'],iupac:'Pentanoic Acid',class:'Fatty Acid',formula:'CH₃(CH₂)₃COOH',mol:'C₅H₁₀O₂',struct:'CH₃–(CH₂)₃–COOH',line:'CH₃(CH₂)₃COOH',mw:'102.13',bp:'186.1°C',state:'Liquid',aka:'Valeric acid',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'pent',ps:'-an',ss:'-oic acid'}},
    {names:['hexanoic acid','caproic acid'],iupac:'Hexanoic Acid',class:'Fatty Acid',formula:'CH₃(CH₂)₄COOH',mol:'C₆H₁₂O₂',struct:'CH₃–(CH₂)₄–COOH',line:'CH₃(CH₂)₄COOH',mw:'116.16',bp:'205°C',state:'Liquid',aka:'Caproic acid — from goats (caper = goat)',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'hex',ps:'-an',ss:'-oic acid'}},
    {names:['2-methylpropanoic acid','isobutyric acid'],iupac:'2-Methylpropanoic Acid',class:'Fatty Acid',formula:'(CH₃)₂CHCOOH',mol:'C₄H₈O₂',struct:'(CH₃)₂CH–COOH',line:'(CH₃)₂CHCOOH',mw:'88.11',bp:'154.4°C',state:'Liquid',aka:'Isobutyric acid — rancid butter odour',icon:'🧬',color:'var(--ac)',spwps:{s:'2-methyl',p:'—',w:'prop',ps:'-an',ss:'-oic acid'}},
    {names:['ethane-1,2-dioic acid','oxalic acid'],iupac:'Ethane-1,2-dioic Acid',class:'Dicarboxylic Acid',formula:'HOOC–COOH',mol:'C₂H₂O₄',struct:'HOOC–COOH',line:'HOOCCOOH',mw:'90.03',bp:'189°C (dec.)',state:'Solid',aka:'Oxalic acid — from oxalis plant, toxic',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'eth',ps:'-an',ss:'-1,2-dioic acid'}},
    {names:['propane-1,3-dioic acid','malonic acid'],iupac:'Propane-1,3-dioic Acid',class:'Dicarboxylic Acid',formula:'HOOC–CH₂–COOH',mol:'C₃H₄O₄',struct:'HOOC–CH₂–COOH',line:'HOOCCH₂COOH',mw:'104.06',bp:'135°C (dec.)',state:'Solid',aka:'Malonic acid',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-1,3-dioic acid'}},
    {names:['butane-1,4-dioic acid','succinic acid'],iupac:'Butane-1,4-dioic Acid',class:'Dicarboxylic Acid',formula:'HOOC–(CH₂)₂–COOH',mol:'C₄H₆O₄',struct:'HOOC–CH₂–CH₂–COOH',line:'HOOC(CH₂)₂COOH',mw:'118.09',bp:'235°C',state:'Solid',aka:'Succinic acid — in amber (succinum)',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'but',ps:'-an',ss:'-1,4-dioic acid'}},
    {names:['pentane-1,5-dioic acid','glutaric acid'],iupac:'Pentane-1,5-dioic Acid',class:'Dicarboxylic Acid',formula:'HOOC–(CH₂)₃–COOH',mol:'C₅H₈O₄',struct:'HOOC–(CH₂)₃–COOH',line:'HOOC(CH₂)₃COOH',mw:'132.12',bp:'302°C',state:'Solid',aka:'Glutaric acid',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'pent',ps:'-an',ss:'-1,5-dioic acid'}},
    {names:['hexane-1,6-dioic acid','adipic acid'],iupac:'Hexane-1,6-dioic Acid',class:'Dicarboxylic Acid',formula:'HOOC–(CH₂)₄–COOH',mol:'C₆H₁₀O₄',struct:'HOOC–(CH₂)₄–COOH',line:'HOOC(CH₂)₄COOH',mw:'146.14',bp:'337.5°C',state:'Solid',aka:'Adipic acid — used to make Nylon 6:6',icon:'🧬',color:'var(--ac)',spwps:{s:'—',p:'—',w:'hex',ps:'-an',ss:'-1,6-dioic acid'}},
    {names:['2-hydroxypropanoic acid','lactic acid'],iupac:'2-Hydroxypropanoic Acid',class:'Fatty Acid',formula:'CH₃CH(OH)COOH',mol:'C₃H₆O₃',struct:'CH₃–CH(OH)–COOH',line:'CH₃–CHOH–COOH',mw:'90.08',bp:'122°C',state:'Liquid',aka:'Lactic acid — found in curd/yoghurt',icon:'🧬',color:'var(--ac)',spwps:{s:'2-hydroxy',p:'—',w:'prop',ps:'-an',ss:'-oic acid'}},

    // ── CYCLOALKANES ──
    {names:['cyclopropane'],iupac:'Cyclopropane',class:'Cycloalkane',formula:'C₃H₆',mol:'C₃H₆',struct:'Triangle ring:\n  CH₂\n /    \\\nCH₂–CH₂',line:'(CH₂)₃',mw:'42.08',bp:'−33°C',state:'Gas',aka:'Trimethylene — smallest cycloalkane, used as anaesthetic',icon:'🔄',color:'#fb923c',spwps:{s:'—',p:'cyclo',w:'prop',ps:'-ane',ss:'—'}},
    {names:['cyclobutane'],iupac:'Cyclobutane',class:'Cycloalkane',formula:'C₄H₈',mol:'C₄H₈',struct:'Square ring:\nCH₂–CH₂\n|         |\nCH₂–CH₂',line:'(CH₂)₄',mw:'56.11',bp:'12°C',state:'Gas',aka:'Tetramethylene',icon:'🔄',color:'#fb923c',spwps:{s:'—',p:'cyclo',w:'but',ps:'-ane',ss:'—'}},
    {names:['cyclopentane'],iupac:'Cyclopentane',class:'Cycloalkane',formula:'C₅H₁₀',mol:'C₅H₁₀',struct:'5-membered ring:\n(CH₂)₅',line:'(CH₂)₅',mw:'70.13',bp:'49.3°C',state:'Liquid',aka:'Pentamethylene — petroleum fraction',icon:'🔄',color:'#fb923c',spwps:{s:'—',p:'cyclo',w:'pent',ps:'-ane',ss:'—'}},
    {names:['cyclohexane'],iupac:'Cyclohexane',class:'Cycloalkane',formula:'C₆H₁₂',mol:'C₆H₁₂',struct:'6-membered ring:\n(CH₂)₆ (chair form)',line:'(CH₂)₆',mw:'84.16',bp:'80.7°C',state:'Liquid',aka:'Hexamethylene — common solvent',icon:'🔄',color:'#fb923c',spwps:{s:'—',p:'cyclo',w:'hex',ps:'-ane',ss:'—'}},
    {names:['cycloheptane'],iupac:'Cycloheptane',class:'Cycloalkane',formula:'C₇H₁₄',mol:'C₇H₁₄',struct:'7-membered ring:\n(CH₂)₇',line:'(CH₂)₇',mw:'98.19',bp:'118.5°C',state:'Liquid',aka:'Suberane',icon:'🔄',color:'#fb923c',spwps:{s:'—',p:'cyclo',w:'hept',ps:'-ane',ss:'—'}},
    {names:['cyclooctane'],iupac:'Cyclooctane',class:'Cycloalkane',formula:'C₈H₁₆',mol:'C₈H₁₆',struct:'8-membered ring:\n(CH₂)₈',line:'(CH₂)₈',mw:'112.21',bp:'149°C',state:'Liquid',aka:'8-membered cycloalkane',icon:'🔄',color:'#fb923c',spwps:{s:'—',p:'cyclo',w:'oct',ps:'-ane',ss:'—'}},
    {names:['methylcyclohexane','methyl cyclohexane'],iupac:'Methylcyclohexane',class:'Cycloalkane',formula:'C₇H₁₄',mol:'C₇H₁₄',struct:'Cyclohexane ring\nwith –CH₃ at C1',line:'C₆H₁₁–CH₃',mw:'98.19',bp:'100.9°C',state:'Liquid',aka:'1-Methylcyclohexane',icon:'🔄',color:'#fb923c',spwps:{s:'methyl',p:'cyclo',w:'hex',ps:'-ane',ss:'—'}},
    {names:['methylcyclopentane','methyl cyclopentane'],iupac:'Methylcyclopentane',class:'Cycloalkane',formula:'C₆H₁₂',mol:'C₆H₁₂',struct:'Cyclopentane ring\nwith –CH₃ at C1',line:'C₅H₉–CH₃',mw:'84.16',bp:'71.8°C',state:'Liquid',aka:'1-Methylcyclopentane',icon:'🔄',color:'#fb923c',spwps:{s:'methyl',p:'cyclo',w:'pent',ps:'-ane',ss:'—'}},
    {names:['1,2-dimethylcyclohexane','dimethylcyclohexane'],iupac:'1,2-Dimethylcyclohexane',class:'Cycloalkane',formula:'C₈H₁₆',mol:'C₈H₁₆',struct:'Cyclohexane ring\nwith –CH₃ at C1 & C2',line:'C₆H₁₀(CH₃)₂',mw:'112.21',bp:'129.7°C',state:'Liquid',aka:'Has cis and trans isomers (stereochemistry)',icon:'🔄',color:'#fb923c',spwps:{s:'1,2-dimethyl',p:'cyclo',w:'hex',ps:'-ane',ss:'—'}},

    // ── ETHERS ──
    {names:['methoxymethane','dimethyl ether','dme'],iupac:'Methoxymethane',class:'Ether',formula:'CH₃–O–CH₃',mol:'C₂H₆O',struct:'CH₃–O–CH₃',line:'CH₃OCH₃',mw:'46.07',bp:'−24.8°C',state:'Gas',aka:'Dimethyl ether — refrigerant, propellant',icon:'💨',color:'#a78bfa',spwps:{s:'methoxy',p:'—',w:'meth',ps:'-ane',ss:'—'}},
    {names:['ethoxyethane','diethyl ether','ether'],iupac:'Ethoxyethane',class:'Ether',formula:'C₂H₅–O–C₂H₅',mol:'C₄H₁₀O',struct:'CH₃CH₂–O–CH₂CH₃',line:'C₂H₅OC₂H₅',mw:'74.12',bp:'34.6°C',state:'Liquid',aka:'Diethyl ether — common lab solvent, anaesthetic (historic)',icon:'💨',color:'#a78bfa',spwps:{s:'ethoxy',p:'—',w:'eth',ps:'-ane',ss:'—'}},
    {names:['methoxybenzene','anisole'],iupac:'Methoxybenzene',class:'Ether',formula:'C₆H₅–O–CH₃',mol:'C₇H₈O',struct:'C₆H₅–O–CH₃',line:'PhOCH₃',mw:'108.14',bp:'154°C',state:'Liquid',aka:'Anisole / Methyl phenyl ether — anise-like smell',icon:'💨',color:'#a78bfa',spwps:{s:'methoxy',p:'—',w:'benz',ps:'-ene',ss:'—'}},
    {names:['ethoxybenzene','phenetole','ethyl phenyl ether'],iupac:'Ethoxybenzene',class:'Ether',formula:'C₆H₅–O–C₂H₅',mol:'C₈H₁₀O',struct:'C₆H₅–O–CH₂CH₃',line:'PhOC₂H₅',mw:'122.17',bp:'170°C',state:'Liquid',aka:'Phenetole / Ethyl phenyl ether',icon:'💨',color:'#a78bfa',spwps:{s:'ethoxy',p:'—',w:'benz',ps:'-ene',ss:'—'}},

    // ── AMINES ──
    {names:['methanamine','methylamine'],iupac:'Methanamine',class:'Amine',formula:'CH₃NH₂',mol:'CH₅N',struct:'CH₃–NH₂',line:'CH₃NH₂',mw:'31.06',bp:'−6.3°C',state:'Gas',aka:'Methylamine — 1° amine, fishy smell',icon:'🟣',color:'#c084fc',spwps:{s:'—',p:'—',w:'meth',ps:'-an',ss:'-amine'}},
    {names:['ethanamine','ethylamine'],iupac:'Ethanamine',class:'Amine',formula:'C₂H₅NH₂',mol:'C₂H₇N',struct:'CH₃–CH₂–NH₂',line:'C₂H₅NH₂',mw:'45.08',bp:'16.6°C',state:'Gas/Liquid',aka:'Ethylamine — 1° amine',icon:'🟣',color:'#c084fc',spwps:{s:'—',p:'—',w:'eth',ps:'-an',ss:'-amine'}},
    {names:['propan-1-amine','n-propylamine','propylamine'],iupac:'Propan-1-amine',class:'Amine',formula:'C₃H₇NH₂',mol:'C₃H₉N',struct:'CH₃–CH₂–CH₂–NH₂',line:'C₃H₇NH₂',mw:'59.11',bp:'48°C',state:'Liquid',aka:'n-Propylamine — 1° amine',icon:'🟣',color:'#c084fc',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-1-amine'}},
    {names:['propan-2-amine','isopropylamine','isopropyl amine'],iupac:'Propan-2-amine',class:'Amine',formula:'(CH₃)₂CHNH₂',mol:'C₃H₉N',struct:'CH₃–CH(NH₂)–CH₃',line:'(CH₃)₂CHNH₂',mw:'59.11',bp:'32.4°C',state:'Liquid',aka:'Isopropylamine — 1° amine',icon:'🟣',color:'#c084fc',spwps:{s:'—',p:'—',w:'prop',ps:'-an',ss:'-2-amine'}},
    {names:['n-methylethanamine','ethyl methyl amine','methylethanamine'],iupac:'N-Methylethanamine',class:'Amine',formula:'CH₃NHCH₂CH₃',mol:'C₃H₉N',struct:'CH₃–NH–CH₂CH₃',line:'CH₃–NH–C₂H₅',mw:'59.11',bp:'36.7°C',state:'Liquid',aka:'Methyl ethyl amine — 2° amine',icon:'🟣',color:'#c084fc',spwps:{s:'N-methyl',p:'—',w:'eth',ps:'-an',ss:'-amine'}},
    {names:['n,n-dimethylmethanamine','trimethylamine'],iupac:'N,N-Dimethylmethanamine',class:'Amine',formula:'(CH₃)₃N',mol:'C₃H₉N',struct:'(CH₃)₃N',line:'N(CH₃)₃',mw:'59.11',bp:'2.9°C',state:'Gas/Liquid',aka:'Trimethylamine — 3° amine, fishy body odour',icon:'🟣',color:'#c084fc',spwps:{s:'N,N-dimethyl',p:'—',w:'meth',ps:'-an',ss:'-amine'}},
    {names:['benzenamine','aniline'],iupac:'Benzenamine (Aniline)',class:'Amine',formula:'C₆H₅NH₂',mol:'C₆H₇N',struct:'C₆H₅–NH₂',line:'Ph–NH₂',mw:'93.13',bp:'184°C',state:'Liquid',aka:'Aniline — primary aromatic amine, dye industry',icon:'🟣',color:'#c084fc',spwps:{s:'amino',p:'—',w:'benz',ps:'-ene',ss:'—'}},

    // ── NITRILES ──
    {names:['ethanenitrile','acetonitrile','methyl cyanide'],iupac:'Ethanenitrile',class:'Nitrile',formula:'CH₃CN',mol:'C₂H₃N',struct:'CH₃–C≡N',line:'CH₃CN',mw:'41.05',bp:'81.6°C',state:'Liquid',aka:'Acetonitrile — polar aprotic solvent',icon:'🔵',color:'#60a5fa',spwps:{s:'—',p:'—',w:'eth',ps:'-ane',ss:'-nitrile'}},
    {names:['propanenitrile','propionitrile','ethyl cyanide'],iupac:'Propanenitrile',class:'Nitrile',formula:'CH₃CH₂CN',mol:'C₃H₅N',struct:'CH₃–CH₂–C≡N',line:'CH₃CH₂CN',mw:'55.08',bp:'97.2°C',state:'Liquid',aka:'Propionitrile',icon:'🔵',color:'#60a5fa',spwps:{s:'—',p:'—',w:'prop',ps:'-ane',ss:'-nitrile'}},
    {names:['butanenitrile','butyronitrile'],iupac:'Butanenitrile',class:'Nitrile',formula:'CH₃(CH₂)₂CN',mol:'C₄H₇N',struct:'CH₃–CH₂–CH₂–C≡N',line:'CH₃(CH₂)₂CN',mw:'69.10',bp:'117.6°C',state:'Liquid',aka:'Butyronitrile',icon:'🔵',color:'#60a5fa',spwps:{s:'—',p:'—',w:'but',ps:'-ane',ss:'-nitrile'}},

    // ── AROMATIC COMPOUNDS ──
    {names:['benzene','c6h6'],iupac:'Benzene',class:'Aromatic',formula:'C₆H₆',mol:'C₆H₆',struct:'Planar hexagonal ring\n(6 CH, delocalized π)',line:'C₆H₆',mw:'78.11',bp:'80.1°C',state:'Liquid',aka:'Parent aromatic — carcinogenic',icon:'💎',color:'#818cf8',spwps:{s:'—',p:'—',w:'benz',ps:'-ene',ss:'—'}},
    {names:['methylbenzene','toluene'],iupac:'Methylbenzene',class:'Aromatic',formula:'C₆H₅CH₃',mol:'C₇H₈',struct:'C₆H₅–CH₃',line:'Ph–CH₃',mw:'92.14',bp:'110.6°C',state:'Liquid',aka:'Toluene — common solvent, in TNT (2,4,6-trinitrotoluene)',icon:'💎',color:'#818cf8',spwps:{s:'methyl',p:'—',w:'benz',ps:'-ene',ss:'—'}},
    {names:['phenol','hydroxybenzene'],iupac:'Phenol',class:'Aromatic',formula:'C₆H₅OH',mol:'C₆H₆O',struct:'C₆H₅–OH',line:'Ph–OH',mw:'94.11',bp:'181.7°C',state:'Solid/Liquid',aka:'Phenol (carbolic acid) — antiseptic, weak acid',icon:'💎',color:'#818cf8',spwps:{s:'hydroxy',p:'—',w:'benz',ps:'-ene',ss:'—'}},
    {names:['benzene carboxylic acid','benzoic acid'],iupac:'Benzenecarboxylic Acid',class:'Aromatic',formula:'C₆H₅COOH',mol:'C₇H₆O₂',struct:'C₆H₅–COOH',line:'Ph–COOH',mw:'122.12',bp:'249°C',state:'Solid',aka:'Benzoic acid — food preservative E210',icon:'💎',color:'#818cf8',spwps:{s:'—',p:'—',w:'benz',ps:'-ene',ss:'carboxy acid'}},
    {names:['benzaldehyde','benzene carbaldehyde'],iupac:'Benzaldehyde',class:'Aromatic',formula:'C₆H₅CHO',mol:'C₇H₆O',struct:'C₆H₅–CHO',line:'Ph–CHO',mw:'106.12',bp:'178.1°C',state:'Liquid',aka:'Benzaldehyde — almond/cherry flavour',icon:'💎',color:'#818cf8',spwps:{s:'—',p:'—',w:'benz',ps:'-ene',ss:'carbaldehyde'}},
    {names:['benzonitrile','benzene carbonitrile'],iupac:'Benzonitrile',class:'Aromatic',formula:'C₆H₅CN',mol:'C₇H₅N',struct:'C₆H₅–C≡N',line:'Ph–CN',mw:'103.12',bp:'191°C',state:'Liquid',aka:'Benzonitrile / Benzene carbonitrile',icon:'💎',color:'#818cf8',spwps:{s:'—',p:'—',w:'benz',ps:'-ene',ss:'carbonitrile'}},
    {names:['nitrobenzene','1-nitrobenzene'],iupac:'Nitrobenzene',class:'Aromatic',formula:'C₆H₅NO₂',mol:'C₆H₅NO₂',struct:'C₆H₅–NO₂',line:'Ph–NO₂',mw:'123.11',bp:'210.8°C',state:'Liquid',aka:'Nitrobenzene — almond-like smell, toxic',icon:'💎',color:'#818cf8',spwps:{s:'nitro',p:'—',w:'benz',ps:'-ene',ss:'—'}},
    {names:['benzene-1,2-diol','catechol'],iupac:'Benzene-1,2-diol',class:'Aromatic',formula:'C₆H₄(OH)₂',mol:'C₆H₆O₂',struct:'C₆H₄ with –OH at C1 & C2',line:'1,2-(HO)₂C₆H₄',mw:'110.11',bp:'245°C',state:'Solid',aka:'Catechol — ortho-dihydroxybenzene',icon:'💎',color:'#818cf8',spwps:{s:'1,2-dihydroxy',p:'—',w:'benz',ps:'-ene',ss:'—'}},
    {names:['benzene-1,3-diol','resorcinol'],iupac:'Benzene-1,3-diol',class:'Aromatic',formula:'C₆H₄(OH)₂',mol:'C₆H₆O₂',struct:'C₆H₄ with –OH at C1 & C3',line:'1,3-(HO)₂C₆H₄',mw:'110.11',bp:'277°C',state:'Solid',aka:'Resorcinol — antiseptic',icon:'💎',color:'#818cf8',spwps:{s:'1,3-dihydroxy',p:'—',w:'benz',ps:'-ene',ss:'—'}},
    {names:['benzene-1,2-dicarboxylic acid','phthalic acid'],iupac:'Benzene-1,2-dicarboxylic Acid',class:'Aromatic',formula:'C₆H₄(COOH)₂',mol:'C₈H₆O₄',struct:'C₆H₄ with –COOH at C1 & C2',line:'1,2-(HOOC)₂C₆H₄',mw:'166.13',bp:'191°C (dec.)',state:'Solid',aka:'Phthalic acid — used in plasticisers',icon:'💎',color:'#818cf8',spwps:{s:'—',p:'—',w:'benz',ps:'-ene',ss:'-1,2-dicarboxylic acid'}},
    {names:['2-methylphenol','o-cresol'],iupac:'2-Methylphenol',class:'Aromatic',formula:'CH₃C₆H₄OH',mol:'C₇H₈O',struct:'C₆H₄(CH₃)(OH) — ortho',line:'2-CH₃C₆H₄OH',mw:'108.14',bp:'191.1°C',state:'Liquid',aka:'o-Cresol (ortho-cresol)',icon:'💎',color:'#818cf8',spwps:{s:'2-methyl',p:'—',w:'phen',ps:'-ol',ss:'—'}},
    {names:['2-hydroxybenzoic acid','salicylic acid'],iupac:'2-Hydroxybenzoic Acid',class:'Aromatic',formula:'HOC₆H₄COOH',mol:'C₇H₆O₃',struct:'C₆H₄(OH)(COOH) — ortho',line:'2-HOC₆H₄COOH',mw:'138.12',bp:'211°C',state:'Solid',aka:'Salicylic acid — aspirin precursor',icon:'💎',color:'#818cf8',spwps:{s:'2-hydroxy',p:'—',w:'benz',ps:'-ene',ss:'carboxylic acid'}},
    {names:['1,2,4,6-tetranitromethylbenzene','tnt','2,4,6-trinitrotoluene','trinitrotoluene'],iupac:'1-Methyl-2,4,6-trinitrobenzene',class:'Aromatic',formula:'C₇H₅N₃O₆',mol:'C₇H₅N₃O₆',struct:'Toluene with –NO₂ at positions 2, 4, 6',line:'2,4,6-(NO₂)₃C₆H₂CH₃',mw:'227.13',bp:'300°C (detonates)',state:'Solid',aka:'TNT — explosive! 2,4,6-trinitrotoluene',icon:'💎',color:'#818cf8',spwps:{s:'2,4,6-trinitro',p:'—',w:'tolu',ps:'-ene',ss:'—'}},
  ];

  function nmLookup() {
    const raw2 = (document.getElementById('nm-input').value || '').trim().toLowerCase();
    const raw  = raw2.replace(/\s+/g,'-');
    const r = document.getElementById('nm-result');

    const match = COMPOUNDS.find(c =>
      c.names.some(n => n === raw2 || n === raw || n.replace(/-/g,' ') === raw2 || n.replace(/\s/g,'-') === raw)
    );

    if (match) {
      const spwpsHTML = match.spwps ? `
      <div class="nm-row">
        <div class="nm-lbl">🏷️ IUPAC Name Breakdown (SPWPS)</div>
        <div style="display:flex;flex-wrap:wrap;gap:.35rem;margin-top:.5rem;align-items:center">
          <div style="text-align:center;background:rgba(99,102,241,.15);border:1.5px solid #6366f1;border-radius:8px;padding:.35rem .6rem;min-width:52px"><div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:#818cf8">${match.spwps.s}</div><div style="font-size:.55rem;color:#6366f1;font-weight:800;text-transform:uppercase">2° Prefix</div></div>
          <div style="color:#374151;font-size:1.1rem">+</div>
          <div style="text-align:center;background:rgba(16,185,129,.12);border:1.5px solid #10b981;border-radius:8px;padding:.35rem .6rem;min-width:52px"><div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:#4ade80">${match.spwps.p}</div><div style="font-size:.55rem;color:#10b981;font-weight:800;text-transform:uppercase">1° Prefix</div></div>
          <div style="color:#374151;font-size:1.1rem">+</div>
          <div style="text-align:center;background:rgba(251,191,36,.15);border:1.5px solid #fbbf24;border-radius:8px;padding:.35rem .6rem;min-width:52px"><div style="font-family:'JetBrains Mono',monospace;font-size:.8rem;color:#fde68a">${match.spwps.w}</div><div style="font-size:.55rem;color:#fbbf24;font-weight:800;text-transform:uppercase">Word Root</div></div>
          <div style="color:#374151;font-size:1.1rem">+</div>
          <div style="text-align:center;background:rgba(244,114,182,.12);border:1.5px solid #f472b6;border-radius:8px;padding:.35rem .6rem;min-width:52px"><div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:#f9a8d4">${match.spwps.ps}</div><div style="font-size:.55rem;color:#f472b6;font-weight:800;text-transform:uppercase">1° Suffix</div></div>
          <div style="color:#374151;font-size:1.1rem">+</div>
          <div style="text-align:center;background:rgba(56,189,248,.12);border:1.5px solid #38bdf8;border-radius:8px;padding:.35rem .6rem;min-width:52px"><div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:#7dd3fc">${match.spwps.ss}</div><div style="font-size:.55rem;color:#38bdf8;font-weight:800;text-transform:uppercase">2° Suffix</div></div>
          <div style="color:#374151;font-size:1.1rem">=</div>
          <div style="font-family:'Fredoka One',cursive;font-size:1rem;color:#e2e8f0">${match.iupac}</div>
        </div>
      </div>` : '';

      r.innerHTML = `
<div class="nm-result">
  <div class="nm-card">
    <div class="nm-head" style="border-color:${match.color}">
      <div class="nm-icon">${match.icon}</div>
      <div><div class="nm-title" style="color:${match.color}">${match.iupac}</div><div class="nm-sub">${match.class}</div></div>
    </div>
    <div class="nm-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem">
        <div class="nm-row">
          <div class="nm-lbl">📐 Molecular Formula</div>
          <div class="nm-val">${match.formula}</div>
        </div>
        <div class="nm-row">
          <div class="nm-lbl">⚗️ Empirical Formula</div>
          <div class="nm-val" style="color:#94a3b8">${match.mol}</div>
        </div>
      </div>
      <div class="nm-row">
        <div class="nm-lbl">🔗 Structural / Line Formula</div>
        <div class="nm-val" style="color:#c4b5fd">${match.line}</div>
      </div>
      <div class="nm-row">
        <div class="nm-lbl">🧱 Condensed Structural Formula</div>
        <div class="nm-struct">${match.struct}</div>
      </div>
      ${spwpsHTML}
      <div class="nm-facts">
        <div class="nm-fact"><div class="nm-fv">${match.mw}</div><div class="nm-fl">Mol. Wt.</div></div>
        <div class="nm-fact"><div class="nm-fv">${match.bp}</div><div class="nm-fl">Boiling Pt</div></div>
        <div class="nm-fact"><div class="nm-fv">${match.state}</div><div class="nm-fl">State (RT)</div></div>
        <div class="nm-fact"><div class="nm-fv" style="font-size:.9rem">${match.class}</div><div class="nm-fl">Class</div></div>
      </div>
      <div class="nm-aka"><strong>Also known as:</strong> ${match.aka}</div>
    </div>
  </div>
</div>`;
    } else {
      const sugs = ['methane','ethane','propane','butane','ethene','propene','but-1-ene','but-2-yne','ethanol','propanol','acetone','ethanal','ethanoic acid','butanoic acid','chloroform','aniline','benzene','toluene','phenol','cyclohexane','glycerol','oxalic acid','succinic acid','dimethyl ether','lactic acid'];
      r.innerHTML = `<div class="nm-notfound"><span class="nm-nfi">🔬</span><div class="nm-nft">Compound not found</div><div class="nm-nfs">Try IUPAC name, common name, or trivial name — e.g. "acetone", "chloroform", "lactic acid":</div><div class="nm-suggest">${sugs.map(s=>`<button class="nm-sug" onclick="document.getElementById('nm-input').value='${s}';nmLookup()">${s}</button>`).join('')}</div></div>`;
    }
  }
  window.nmLookup = nmLookup;

  window.nmTab = function(btn, tabId) {
    const wrap = btn.closest('.nm-wrap');
    wrap.querySelectorAll('.etab').forEach(t => t.classList.remove('on'));
    wrap.querySelectorAll('.ecbl').forEach(c => c.classList.remove('on'));
    btn.classList.add('on');
    document.getElementById(tabId).classList.add('on');
  };

  // ── FORMULA BUILDER ──
  panels['fb'] = `
<div class="ph" style="border-color:#14b8a6;color:#14b8a6"><div class="phi">🧩</div><div><div class="pht">Formula Builder</div><div class="phb"><span class="badge">Click atoms + bonds</span><span class="badge">Builds structural formula</span><span class="badge">Auto-identifies compound</span></div><div class="phd">Click the atom and bond buttons below to build any structural formula. Then press <strong>Search</strong> to find the compound name!</div></div></div>
<div class="fb-wrap">
  <!-- Legend -->
  <div class="fb-legend">
    <span class="fb-leg"><span style="color:#fde68a;font-family:'JetBrains Mono',monospace">CH₃</span> Atom</span>
    <span class="fb-leg"><span style="color:#4ade80">─</span> Single bond</span>
    <span class="fb-leg"><span style="color:#f472b6">=</span> Double bond</span>
    <span class="fb-leg"><span style="color:#c084fc">≡</span> Triple bond</span>
    <span class="fb-leg"><span style="color:#94a3b8">( )</span> Branch</span>
    <span class="fb-leg">Click same atom to increase count</span>
  </div>
  <!-- Screen -->
  <div class="fb-screen" id="fb-screen"><span style="color:#374151;font-family:'Nunito',sans-serif;font-size:1rem">Press buttons below to build formula…</span></div>
  <div class="fb-formula" id="fb-mol">Molecular formula will appear here</div>
  <!-- Keyboard -->
  <div class="fb-kbd">
    <button class="fb-key fb-key-c" onclick="fbPress('atom','C')" title="Carbon">C</button>
    <button class="fb-key fb-key-h" onclick="fbPress('atom','H')" title="Hydrogen">H</button>
    <button class="fb-key fb-key-o" onclick="fbPress('atom','O')" title="Oxygen">O</button>
    <button class="fb-key fb-key-n" onclick="fbPress('atom','N')" title="Nitrogen">N</button>
    <button class="fb-key fb-key-cl" onclick="fbPress('atom','Cl')" title="Chlorine">Cl</button>
    <button class="fb-key fb-key-bond" onclick="fbPress('bond','-')" title="Single bond">─</button>
    <button class="fb-key fb-key-bondd" onclick="fbPress('bond','=')" title="Double bond">=</button>
    <button class="fb-key fb-key-bondt" onclick="fbPress('bond','≡')" title="Triple bond">≡</button>
    <button class="fb-key fb-key-br" onclick="fbPress('open','(')" title="Open bracket">(</button>
    <button class="fb-key fb-key-br" onclick="fbPress('close',')')" title="Close bracket">)</button>
    <button class="fb-key fb-key-back" onclick="fbPress('back','')" title="Backspace" style="grid-column:span 2">⌫ Back</button>
    <button class="fb-key fb-key-clear" onclick="fbPress('clear','')" title="Clear all" style="grid-column:span 3">🗑 Clear All</button>
    <button class="fb-key fb-key-search" onclick="fbSearch()">🔍 Find Compound Name</button>
  </div>
  <!-- Example hints -->
  <div style="display:flex;flex-wrap:wrap;gap:.45rem;margin-bottom:1.4rem">
    <span style="font-size:.72rem;color:#6b7280;font-weight:800;letter-spacing:.05em;align-self:center">TRY:</span>
    ${[['CH₃─CH₃','Ethane','[C,H3,-,C,H3]'],['CH₂=CH₂','Ethene','[C,H2,=,C,H2]'],['CH≡CH','Ethyne','[C,H,≡,C,H]'],['CH₃─CH₂─OH','Ethanol','[C,H3,-,C,H2,-,O,H]'],['CH₄','Methane','[C,H4]']].map(([label,name,seq])=>`<button onclick="fbExample(${JSON.stringify(seq)})" style="font-family:'JetBrains Mono',monospace;font-size:.75rem;padding:.3rem .75rem;background:rgba(20,184,166,.1);border:1.5px solid rgba(20,184,166,.35);border-radius:8px;color:#2dd4bf;cursor:pointer">${label} <span style="color:#6b7280">(${name})</span></button>`).join('')}
  </div>
  <div id="fb-result"></div>
</div>`;

  // ─────────────────────────────────────────────
  //  FORMULA BUILDER ENGINE
  // ─────────────────────────────────────────────
  const FB = { tokens: [] };

  const SUB = {'0':'₀','1':'₁','2':'₂','3':'₃','4':'₄','5':'₅','6':'₆','7':'₇','8':'₈','9':'₉'};
  function toSub(n) { return String(n).split('').map(d=>SUB[d]).join(''); }

  window.fbPress = function(type, val) {
    const tk = FB.tokens;
    if (type === 'atom') {
      const last = tk[tk.length - 1];
      if (last && last.type === 'atom' && last.val === val) {
        last.count++;
      } else {
        tk.push({ type: 'atom', val: val, count: 1 });
      }
    } else if (type === 'bond') {
      const last = tk[tk.length - 1];
      if (last && last.type === 'bond') {
        last.val = val; // replace last bond
      } else if (tk.length > 0) {
        tk.push({ type: 'bond', val: val });
      }
    } else if (type === 'open' || type === 'close') {
      tk.push({ type: type, val: val });
    } else if (type === 'back') {
      if (tk.length > 0) {
        const last = tk[tk.length - 1];
        if (last.type === 'atom' && last.count > 1) { last.count--; }
        else { tk.pop(); }
      }
    } else if (type === 'clear') {
      FB.tokens = [];
    }
    fbRenderScreen();
  };

  window.fbExample = function(seqStr) {
    FB.tokens = [];
    // seqStr is like "[C,H3,-,C,H3]" — parse it
    const seq = seqStr.replace(/[\[\]]/g,'').split(',');
    seq.forEach(s => {
      if (s === '-') fbPress('bond', '-');
      else if (s === '=') fbPress('bond', '=');
      else if (s === '≡') fbPress('bond', '≡');
      else if (s === '(') fbPress('open', '(');
      else if (s === ')') fbPress('close', ')');
      else {
        // atom like C, H3, O, Cl
        const match = s.match(/^([A-Za-z]+)(\d*)$/);
        if (match) {
          const atom = match[1];
          const count = match[2] ? parseInt(match[2]) : 1;
          for (let i = 0; i < count; i++) fbPress('atom', atom);
        }
      }
    });
  };

  function fbRenderScreen() {
    const screen = document.getElementById('fb-screen');
    const molEl  = document.getElementById('fb-mol');
    if (!screen) return;

    if (FB.tokens.length === 0) {
      screen.innerHTML = '<span style="color:#374151;font-family:\'Nunito\',sans-serif;font-size:1rem">Press buttons below to build formula…</span>';
      molEl.textContent = 'Molecular formula will appear here';
      return;
    }

    // Build display HTML
    let html = '';
    FB.tokens.forEach(t => {
      if (t.type === 'atom') {
        const sub = t.count > 1 ? `<sub>${t.count}</sub>` : '';
        html += `<span class="fb-atom">${t.val}${sub}</span>`;
      } else if (t.type === 'bond') {
        const cls = t.val === '=' ? 'fb-bond-d' : t.val === '≡' ? 'fb-bond-t' : 'fb-bond-s';
        const disp = t.val === '-' ? '─' : t.val;
        html += `<span class="${cls}">${disp}</span>`;
      } else {
        html += `<span class="fb-br">${t.val}</span>`;
      }
    });
    screen.innerHTML = html;

    // Compute molecular formula
    const counts = {};
    FB.tokens.forEach(t => {
      if (t.type === 'atom') counts[t.val] = (counts[t.val] || 0) + t.count;
    });
    const order = ['C','H','O','N','Cl','Br','F','I'];
    let molStr = '';
    order.forEach(a => { if (counts[a]) molStr += a + (counts[a] > 1 ? counts[a] : ''); });
    Object.keys(counts).forEach(a => { if (!order.includes(a)) molStr += a + (counts[a] > 1 ? counts[a] : ''); });
    molEl.textContent = molStr ? 'Molecular formula: ' + molStr : '';
  }

  window.fbSearch = function() {
    const r = document.getElementById('fb-result');
    if (!r) return;
    if (FB.tokens.length === 0) {
      r.innerHTML = '<div class="fb-notfound"><span class="nm-nfi">🧩</span><div class="nm-nft">Nothing built yet!</div><div class="fb-hint">Use the buttons above to build a structural formula first.</div></div>';
      return;
    }

    // Count atoms
    const counts = {};
    let hasDbl = false, hasTpl = false;
    FB.tokens.forEach(t => {
      if (t.type === 'atom') counts[t.val] = (counts[t.val] || 0) + t.count;
      if (t.type === 'bond' && t.val === '=') hasDbl = true;
      if (t.type === 'bond' && t.val === '≡') hasTpl = true;
    });

    const cCount = counts['C'] || 0;
    const hCount = counts['H'] || 0;
    const oCount = counts['O'] || 0;
    const nCount = counts['N'] || 0;
    const clCount = counts['Cl'] || 0;

    if (cCount === 0) {
      r.innerHTML = '<div class="fb-notfound"><span class="nm-nfi">🔬</span><div class="nm-nft">No Carbon found</div><div class="fb-hint">Organic compounds need at least one Carbon (C) atom.</div></div>';
      return;
    }

    // Helper: extract atom count from formula string
    function getAtomCount(formula, atom) {
      const norm = formula.replace(/₀/g,'0').replace(/₁/g,'1').replace(/₂/g,'2').replace(/₃/g,'3').replace(/₄/g,'4').replace(/₅/g,'5').replace(/₆/g,'6').replace(/₇/g,'7').replace(/₈/g,'8').replace(/₉/g,'9').replace(/[()]/g,'');
      const esc = atom.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(esc + '(\\d*)', 'g');
      let total = 0, m;
      while ((m = re.exec(norm)) !== null) {
        total += m[1] ? parseInt(m[1]) : 1;
      }
      return total;
    }

    // Score and collect matches
    const results = [];
    COMPOUNDS.forEach(c => {
      const fc = c.formula || c.mol || '';
      const cc = getAtomCount(fc, 'C');
      const hc = getAtomCount(fc, 'H');
      const oc = getAtomCount(fc, 'O');
      const nc = getAtomCount(fc, 'N');
      const clc = getAtomCount(fc, 'Cl');

      if (cc !== cCount || hc !== hCount) return;
      if (oCount > 0 && oc !== oCount) return;
      if (oCount === 0 && oc !== 0 && !['Alkane','Alkene','Alkyne','Cycloalkane'].includes(c.class)) return;
      if (nCount > 0 && nc !== nCount) return;
      if (clCount > 0 && clc !== clCount) return;

      // Bond type scoring
      let score = 100;
      const isUnsat = hasDbl || hasTpl;
      if (hasTpl && c.class === 'Alkyne') score += 50;
      else if (hasDbl && c.class === 'Alkene') score += 50;
      else if (!isUnsat && (c.class === 'Alkane' || c.class === 'Cycloalkane')) score += 50;
      else if (hasDbl && c.class !== 'Alkyne' && c.class !== 'Alkane') score += 30;
      else if (!isUnsat && c.class !== 'Alkene' && c.class !== 'Alkyne') score += 30;

      results.push({ compound: c, score });
    });

    results.sort((a, b) => b.score - a.score);

    if (results.length === 0) {
      const molStr = 'C' + cCount + 'H' + hCount + (oCount?'O'+oCount:'') + (nCount?'N'+nCount:'') + (clCount?'Cl'+clCount:'');
      r.innerHTML = `<div class="fb-notfound"><span class="nm-nfi">🔬</span><div class="nm-nft">No compound found for ${molStr}</div><div class="fb-hint">Check your formula — count the atoms again. Try building CH₄ (methane) or CH₃─CH₃ (ethane) as a test.</div></div>`;
      return;
    }

    const bondType = hasTpl ? '≡ Triple bond detected' : hasDbl ? '= Double bond detected' : '─ Single bond only';
    const bondColor = hasTpl ? '#c084fc' : hasDbl ? '#f472b6' : '#4ade80';

    let html = `<div class="fb-result">
<div style="display:flex;align-items:center;gap:.6rem;margin-bottom:1rem;padding:.6rem 1rem;background:rgba(255,255,255,.04);border-radius:10px;border:1px solid var(--bd)">
  <span style="font-size:.78rem;font-weight:800;letter-spacing:.05em;color:#6b7280">BOND TYPE:</span>
  <span style="font-family:'JetBrains Mono',monospace;font-size:.82rem;color:${bondColor}">${bondType}</span>
  <span style="margin-left:auto;font-size:.75rem;color:#6b7280">${results.length} match${results.length>1?'es':''} found</span>
</div>
<div class="fb-matches">`;

    results.slice(0, 5).forEach(({ compound: c }) => {
      html += `<div class="fb-match" style="border-color:${c.color}" onclick="">
  <div class="fb-match-head" style="background:rgba(0,0,0,.3)">
    <div class="fb-match-icon">${c.icon}</div>
    <div>
      <div class="fb-match-name" style="color:${c.color}">${c.iupac}</div>
      <div style="font-size:.7rem;color:#94a3b8;margin-top:.1rem">${c.aka}</div>
    </div>
    <div class="fb-match-class" style="color:${c.color}">${c.class}</div>
  </div>
  <div class="fb-match-body">
    <div><div class="fb-mfl">Molecular Formula</div><div class="fb-mf fb-mfv">${c.formula}</div></div>
    <div><div class="fb-mfl">Structural Formula</div><div class="fb-mf fb-mfv2">${c.line}</div></div>
    <div><div class="fb-mfl">Boiling Point</div><div class="fb-mf" style="color:#94a3b8">${c.bp}</div></div>
    <div><div class="fb-mfl">State (Room Temp)</div><div class="fb-mf" style="color:#94a3b8">${c.state}</div></div>
  </div>
</div>`;
    });

    html += '</div></div>';
    r.innerHTML = html;
  };
  // ─────────────────────────────────────────────
  //  6. RENDER ALL PANELS INTO DOM
  // ─────────────────────────────────────────────
  const panelOrder = ['home','ka','ke','ky','al','ad','ac','ex','sy','mq','nm','fb'];
  const mainEl = document.getElementById('main-content');
  panelOrder.forEach(id => {
    const div = document.createElement('div');
    div.id = 'panel-' + id;
    div.className = 'panel' + (id === 'home' ? ' on' : '');
    div.innerHTML = panels[id];
    mainEl.appendChild(div);
  });

  // ─────────────────────────────────────────────
  //  7. INTERACTIVE FUNCTIONS (exposed globally)
  // ─────────────────────────────────────────────

  // Panel show
  window.chShow = function(id, btn) {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('on'));
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('on'));
    document.getElementById('panel-' + id).classList.add('on');
    btn.classList.add('on');
  };

  // Carbon tabs
  window.chTab = function(btn, g, n) {
    const mb = btn.closest('.mcb');
    mb.querySelectorAll('.tab').forEach(t => { t.classList.remove('on'); t.style.borderBottomColor = ''; t.style.color = ''; });
    mb.querySelectorAll('.cbl').forEach(c => c.classList.remove('on'));
    btn.classList.add('on');
    const ph = btn.closest('.panel').querySelector('.ph');
    if (ph) { const c = getComputedStyle(ph).color; btn.style.borderBottomColor = c; btn.style.color = c; }
    const el = document.getElementById(g + '-' + n);
    if (el) el.classList.add('on');
  };

  // Synthesis card toggle
  window.showSy = function(id, card) {
    document.querySelectorAll('.spk').forEach(c => c.classList.remove('on'));
    document.querySelectorAll('.scon').forEach(c => c.classList.remove('on'));
    card.classList.add('on');
    const el = document.getElementById('sc-' + id);
    if (el) { el.classList.add('on'); setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50); }
  };

  // ── Exchange ──
  const NM = { ka:'Alkane', ke:'Alkene', ky:'Alkyne', al:'Alcohol', ad:'Aldehyde', ac:'Fatty Acid' };
  const CL = { ka:'var(--ka)', ke:'var(--ke)', ky:'var(--ky)', al:'var(--al)', ad:'var(--ad)', ac:'var(--ac)' };
  let FC = null, TC = null;

  const EX = {
    'ka→ke':{s:1,c:{2:[{m:'Dehydrogenation',e:'CH₃–CH₃',c:'Ni/Al₂O₃, 400–600°C',p:'CH₂=CH₂ + H₂'}],3:[{m:'Dehydrogenation',e:'CH₃CH₂CH₃',c:'Ni, 400–600°C',p:'CH₃CH=CH₂ + H₂'}],4:[{m:'Dehydrogenation',e:'CH₃CH₂CH₂CH₃',c:'Ni, 400–600°C',p:'CH₃CH₂CH=CH₂ + H₂'}]}},
    'ka→ky':{s:2,c:{2:[{m:'Step 1: Dehydrogenation',e:'CH₃–CH₃',c:'Ni,400–600°C',p:'CH₂=CH₂+H₂'},{m:'Step 2: 2nd Dehydrogenation',e:'CH₂=CH₂',c:'Pd,600°C',p:'CH≡CH+H₂'}],3:[{m:'Step 1',e:'Propane',c:'Ni,400–600°C',p:'Propene+H₂'},{m:'Step 2',e:'Propene',c:'Pd,600°C',p:'Propyne+H₂'}],4:[{m:'Step 1',e:'Butane',c:'Ni,400–600°C',p:'But-1-ene+H₂'},{m:'Step 2',e:'But-1-ene',c:'Pd,600°C',p:'But-1-yne+H₂'}]}},
    'ka→al':{s:2,c:{2:[{m:'Step 1: Halogenation',e:'CH₃CH₃ + Cl₂',c:'UV light',p:'CH₃CH₂Cl + HCl'},{m:'Step 2: Hydrolysis',e:'CH₃CH₂Cl + NaOH',c:'aq., heat',p:'CH₃CH₂OH + NaCl'}],3:[{m:'Step 1',e:'Propane+Cl₂',c:'UV',p:'1-Chloropropane+HCl'},{m:'Step 2',e:'1-Chloropropane+NaOH',c:'aq.',p:'Propanol+NaCl'}],4:[{m:'Step 1',e:'Butane+Cl₂',c:'UV',p:'1-Chlorobutane+HCl'},{m:'Step 2',e:'1-Chlorobutane+NaOH',c:'aq.',p:'Butanol+NaCl'}]}},
    'ka→ad':{s:3,c:{2:[{m:'Step 1: Halogenation',e:'CH₃CH₃+Cl₂',c:'UV',p:'CH₃CH₂Cl+HCl'},{m:'Step 2: Hydrolysis',e:'CH₃CH₂Cl+NaOH',c:'aq.',p:'CH₃CH₂OH+NaCl'},{m:'Step 3: Mild Oxidation',e:'CH₃CH₂OH+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'CH₃CHO+H₂O'}],3:[{m:'Step 1',e:'Propane+Cl₂',c:'UV',p:'1-Chloropropane'},{m:'Step 2',e:'1-Chloropropane+NaOH',c:'aq.',p:'Propanol'},{m:'Step 3',e:'Propanol+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'Propanal'}],4:[{m:'Step 1',e:'Butane+Cl₂',c:'UV',p:'1-Chlorobutane'},{m:'Step 2',e:'1-Chlorobutane+NaOH',c:'aq.',p:'Butanol'},{m:'Step 3',e:'Butanol+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'Butanal'}]}},
    'ka→ac':{s:3,c:{2:[{m:'Step 1: Halogenation',e:'CH₃CH₃+Cl₂',c:'UV',p:'CH₃CH₂Cl'},{m:'Step 2: Hydrolysis',e:'CH₃CH₂Cl+NaOH',c:'aq.',p:'CH₃CH₂OH'},{m:'Step 3: Strong Oxidation',e:'CH₃CH₂OH+2[O]',c:'K₂Cr₂O₇/H₂SO₄ excess',p:'CH₃COOH+H₂O'}],3:[{m:'Step 1',e:'Propane+Cl₂',c:'UV',p:'1-Chloropropane'},{m:'Step 2',e:'+NaOH',c:'aq.',p:'Propanol'},{m:'Step 3',e:'Propanol+2[O]',c:'K₂Cr₂O₇ excess',p:'Propanoic Acid'}],4:[{m:'Step 1',e:'Butane+Cl₂',c:'UV',p:'1-Chlorobutane'},{m:'Step 2',e:'+NaOH',c:'aq.',p:'Butanol'},{m:'Step 3',e:'Butanol+2[O]',c:'K₂Cr₂O₇ excess',p:'Butanoic Acid'}]}},
    'ke→ka':{s:1,c:{2:[{m:'Hydrogenation (Ni,180–200°C)',e:'CH₂=CH₂+H₂',c:'Ni, 180–200°C',p:'CH₃–CH₃'}],3:[{m:'Hydrogenation',e:'Propene+H₂',c:'Ni,180–200°C',p:'Propane'}],4:[{m:'Hydrogenation',e:'But-1-ene+H₂',c:'Ni,180–200°C',p:'Butane'}]}},
    'ke→ky':{s:1,c:{2:[{m:'Dehydrogenation (Pd,600°C)',e:'CH₂=CH₂',c:'Pd, 600°C',p:'CH≡CH + H₂'}],3:[{m:'Dehydrogenation',e:'Propene',c:'Pd,600°C',p:'Propyne+H₂'}],4:[{m:'Dehydrogenation',e:'But-1-ene',c:'Pd,600°C',p:'But-1-yne+H₂'}]}},
    'ke→al':{s:1,c:{2:[{m:'Hydration (H₃PO₄,300°C,60atm)',e:'CH₂=CH₂+H₂O',c:'H₃PO₄,300°C,60atm',p:'CH₃–CH₂–OH'}],3:[{m:'Hydration',e:'Propene+H₂O',c:'H₃PO₄,300°C,60atm',p:'Propanol'}],4:[{m:'Hydration',e:'But-1-ene+H₂O',c:'H₃PO₄,300°C,60atm',p:'Butanol'}]}},
    'ke→ad':{s:2,c:{2:[{m:'Step 1: Hydration',e:'CH₂=CH₂+H₂O',c:'H₃PO₄,300°C,60atm',p:'CH₃CH₂OH'},{m:'Step 2: Mild Oxidation',e:'CH₃CH₂OH+[O]',c:'K₂Cr₂O₇/H₂SO₄ controlled',p:'CH₃CHO+H₂O'}],3:[{m:'Step 1',e:'Propene+H₂O',c:'H₃PO₄,300°C',p:'Propanol'},{m:'Step 2',e:'Propanol+[O]',c:'controlled oxidation',p:'Propanal'}],4:[{m:'Step 1',e:'But-1-ene+H₂O',c:'H₃PO₄,300°C',p:'Butanol'},{m:'Step 2',e:'Butanol+[O]',c:'controlled oxidation',p:'Butanal'}]}},
    'ke→ac':{s:2,c:{2:[{m:'Step 1: Hydration',e:'CH₂=CH₂+H₂O',c:'H₃PO₄,300°C',p:'Ethanol'},{m:'Step 2: Strong Oxidation',e:'CH₃CH₂OH+2[O]',c:'K₂Cr₂O₇/H₂SO₄ excess',p:'CH₃COOH+H₂O'}],3:[{m:'Step 1',e:'Propene+H₂O',c:'H₃PO₄',p:'Propanol'},{m:'Step 2',e:'Propanol+2[O]',c:'K₂Cr₂O₇ excess',p:'Propanoic Acid'}],4:[{m:'Step 1',e:'But-1-ene+H₂O',c:'H₃PO₄',p:'Butanol'},{m:'Step 2',e:'Butanol+2[O]',c:'K₂Cr₂O₇ excess',p:'Butanoic Acid'}]}},
    'ky→ka':{s:1,c:{2:[{m:'Double Hydrogenation (2 mol H₂)',e:'CH≡CH+2H₂',c:'Ni,180–200°C',p:'CH₃–CH₃'}],3:[{m:'Double Hydrogenation',e:'Propyne+2H₂',c:'Ni,180–200°C',p:'Propane'}],4:[{m:'Double Hydrogenation',e:'But-1-yne+2H₂',c:'Ni,180–200°C',p:'Butane'}]}},
    'ky→ke':{s:1,c:{2:[{m:'Selective Hydrogenation (Lindlar catalyst)',e:'CH≡CH+H₂',c:'Lindlar catalyst',p:'CH₂=CH₂'}],3:[{m:'Selective Hydrogenation',e:'Propyne+H₂',c:'Lindlar catalyst',p:'Propene'}],4:[{m:'Selective Hydrogenation',e:'But-1-yne+H₂',c:'Lindlar catalyst',p:'But-1-ene'}]}},
    'ky→al':{s:2,c:{2:[{m:'Step 1: Hydration',e:'CH≡CH+H₂O',c:'H₂SO₄,HgSO₄,80°C',p:'CH₃CHO'},{m:'Step 2: Reduction',e:'CH₃CHO+H₂',c:'Ni,180–200°C',p:'CH₃CH₂OH'}],3:[{m:'Step 1',e:'Propyne+H₂O',c:'H₂SO₄,HgSO₄,80°C',p:'Propanal'},{m:'Step 2',e:'Propanal+H₂',c:'Ni',p:'Propanol'}],4:[{m:'Step 1',e:'But-1-yne+H₂O',c:'H₂SO₄,HgSO₄,80°C',p:'Butanal'},{m:'Step 2',e:'Butanal+H₂',c:'Ni',p:'Butanol'}]}},
    'ky→ad':{s:1,c:{2:[{m:'Hydration (Wacker, HgSO₄)',e:'CH≡CH+H₂O',c:'20% H₂SO₄, 2% HgSO₄, 80°C',p:'CH₃–CHO'}],3:[{m:'Hydration',e:'Propyne+H₂O',c:'H₂SO₄,HgSO₄,80°C',p:'Propanal'}],4:[{m:'Hydration',e:'But-1-yne+H₂O',c:'H₂SO₄,HgSO₄,80°C',p:'Butanal'}]}},
    'ky→ac':{s:2,c:{2:[{m:'Step 1: Hydration',e:'CH≡CH+H₂O',c:'H₂SO₄,HgSO₄,80°C',p:'CH₃CHO'},{m:'Step 2: Oxidation',e:'CH₃CHO+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'CH₃COOH'}],3:[{m:'Step 1',e:'Propyne+H₂O',c:'H₂SO₄,HgSO₄',p:'Propanal'},{m:'Step 2',e:'Propanal+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'Propanoic Acid'}],4:[{m:'Step 1',e:'But-1-yne+H₂O',c:'H₂SO₄,HgSO₄',p:'Butanal'},{m:'Step 2',e:'Butanal+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'Butanoic Acid'}]}},
    'al→ka':{s:2,c:{2:[{m:'Step 1: Dehydration',e:'CH₃CH₂OH',c:'conc.H₂SO₄',p:'CH₂=CH₂+H₂O'},{m:'Step 2: Hydrogenation',e:'CH₂=CH₂+H₂',c:'Ni,180–200°C',p:'CH₃–CH₃'}],3:[{m:'Step 1',e:'Propanol',c:'conc.H₂SO₄',p:'Propene+H₂O'},{m:'Step 2',e:'Propene+H₂',c:'Ni',p:'Propane'}],4:[{m:'Step 1',e:'Butanol',c:'conc.H₂SO₄',p:'But-1-ene+H₂O'},{m:'Step 2',e:'But-1-ene+H₂',c:'Ni',p:'Butane'}]}},
    'al→ke':{s:1,c:{2:[{m:'Dehydration (conc.H₂SO₄)',e:'CH₃CH₂OH',c:'conc. H₂SO₄, heat',p:'CH₂=CH₂ + H₂O'}],3:[{m:'Dehydration',e:'Propanol',c:'conc.H₂SO₄,heat',p:'Propene+H₂O'}],4:[{m:'Dehydration',e:'Butanol',c:'conc.H₂SO₄,heat',p:'But-1-ene+H₂O'}]}},
    'al→ky':{s:3,c:{2:[{m:'Step 1: Dehydration',e:'CH₃CH₂OH',c:'H₂SO₄',p:'CH₂=CH₂+H₂O'},{m:'Step 2: Bromination',e:'CH₂=CH₂+Br₂',c:'',p:'CH₂Br–CH₂Br'},{m:'Step 3: Double Elimination',e:'CH₂BrCH₂Br+2NaOH',c:'alcoholic,heat',p:'CH≡CH+2NaBr+2H₂O'}],3:[{m:'Step 1',e:'Propanol→Propene',c:'H₂SO₄',p:''},{m:'Step 2',e:'Propene+Br₂',c:'',p:'1,2-Dibromopropane'},{m:'Step 3',e:'+2NaOH',c:'alcoholic',p:'Propyne+2NaBr+2H₂O'}],4:[{m:'Step 1',e:'Butanol→But-1-ene',c:'H₂SO₄',p:''},{m:'Step 2',e:'But-1-ene+Br₂',c:'',p:'1,2-Dibromobutane'},{m:'Step 3',e:'+2NaOH',c:'alcoholic',p:'But-1-yne+2NaBr+2H₂O'}]}},
    'al→ad':{s:1,c:{2:[{m:'Mild Oxidation',e:'CH₃CH₂OH+[O]',c:'K₂Cr₂O₇/H₂SO₄ controlled',p:'CH₃CHO + H₂O ⚠️ stop here!'}],3:[{m:'Mild Oxidation',e:'Propanol+[O]',c:'K₂Cr₂O₇/H₂SO₄ controlled',p:'Propanal+H₂O'}],4:[{m:'Mild Oxidation',e:'Butanol+[O]',c:'K₂Cr₂O₇/H₂SO₄ controlled',p:'Butanal+H₂O'}]}},
    'al→ac':{s:1,c:{2:[{m:'Strong Oxidation (excess)',e:'CH₃CH₂OH+2[O]',c:'K₂Cr₂O₇/H₂SO₄ excess',p:'CH₃COOH + H₂O'}],3:[{m:'Strong Oxidation',e:'Propanol+2[O]',c:'K₂Cr₂O₇ excess',p:'Propanoic Acid'}],4:[{m:'Strong Oxidation',e:'Butanol+2[O]',c:'K₂Cr₂O₇ excess',p:'Butanoic Acid'}]}},
    'ad→ka':{s:2,nt:'⚠️ Product alkane has one fewer carbon (decarboxylation).',c:{2:[{m:'Step 1: Oxidation',e:'CH₃CHO+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'CH₃COOH'},{m:'Step 2: Decarboxylation (−1C)',e:'CH₃COONa+NaOH',c:'CaO,heat',p:'CH₄+Na₂CO₃ (2C→1C!)'}],3:[{m:'Step 1',e:'CH₃CH₂CHO+[O]',c:'K₂Cr₂O₇',p:'CH₃CH₂COOH'},{m:'Step 2 (−1C)',e:'CH₃CH₂COONa+NaOH',c:'CaO,heat',p:'CH₃CH₃+Na₂CO₃'}],4:[{m:'Step 1',e:'Butanal+[O]',c:'K₂Cr₂O₇',p:'Butanoic Acid'},{m:'Step 2 (−1C)',e:'CH₃CH₂CH₂COONa+NaOH',c:'CaO,heat',p:'CH₃CH₂CH₃+Na₂CO₃'}]}},
    'ad→ke':{s:2,c:{2:[{m:'Step 1: Reduction',e:'CH₃CHO+H₂',c:'Ni,180–200°C',p:'CH₃CH₂OH'},{m:'Step 2: Dehydration',e:'CH₃CH₂OH',c:'conc.H₂SO₄',p:'CH₂=CH₂+H₂O'}],3:[{m:'Step 1',e:'Propanal+H₂',c:'Ni',p:'Propanol'},{m:'Step 2',e:'Propanol',c:'H₂SO₄',p:'Propene+H₂O'}],4:[{m:'Step 1',e:'Butanal+H₂',c:'Ni',p:'Butanol'},{m:'Step 2',e:'Butanol',c:'H₂SO₄',p:'But-1-ene+H₂O'}]}},
    'ad→ky':{s:3,c:{2:[{m:'Step 1: Reduction',e:'CH₃CHO+H₂',c:'Ni',p:'CH₃CH₂OH'},{m:'Step 2: Dehydration+Bromination',e:'Ethanol→Ethene+Br₂',c:'',p:'CH₂BrCH₂Br'},{m:'Step 3: Double Elimination',e:'CH₂BrCH₂Br+2NaOH',c:'alcoholic',p:'CH≡CH+2NaBr+2H₂O'}],3:[{m:'Step 1',e:'Propanal+H₂',c:'Ni',p:'Propanol'},{m:'Step 2',e:'Propanol→Propene+Br₂',c:'',p:'1,2-Dibromopropane'},{m:'Step 3',e:'+2NaOH',c:'alcoholic',p:'Propyne'}],4:[{m:'Step 1',e:'Butanal+H₂',c:'Ni',p:'Butanol'},{m:'Step 2',e:'Butanol→But-1-ene+Br₂',c:'',p:'1,2-Dibromobutane'},{m:'Step 3',e:'+2NaOH',c:'alcoholic',p:'But-1-yne'}]}},
    'ad→al':{s:1,c:{2:[{m:'Reduction (Ni,180–200°C)',e:'CH₃CHO+H₂',c:'Ni, 180–200°C',p:'CH₃–CH₂–OH'}],3:[{m:'Reduction',e:'CH₃CH₂CHO+H₂',c:'Ni,180–200°C',p:'CH₃CH₂CH₂OH'}],4:[{m:'Reduction',e:'Butanal+H₂',c:'Ni,180–200°C',p:'Butanol'}]}},
    'ad→ac':{s:1,c:{2:[{m:'Oxidation (K₂Cr₂O₇+H₂SO₄)',e:'CH₃CHO+[O]',c:'K₂Cr₂O₇+H₂SO₄',p:'CH₃–COOH'}],3:[{m:'Oxidation',e:'CH₃CH₂CHO+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'CH₃CH₂COOH'}],4:[{m:'Oxidation',e:'Butanal+[O]',c:'K₂Cr₂O₇/H₂SO₄',p:'Butanoic Acid'}]}},
    'ac→ka':{s:1,nt:'⚠️ Product alkane has one fewer carbon!',c:{2:[{m:'Decarboxylation',e:'CH₃COONa+NaOH',c:'CaO, heat',p:'CH₄+Na₂CO₃  (2C→1C)'}],3:[{m:'Decarboxylation',e:'CH₃CH₂COONa+NaOH',c:'CaO,heat',p:'CH₃CH₃+Na₂CO₃'}],4:[{m:'Decarboxylation',e:'CH₃CH₂CH₂COONa+NaOH',c:'CaO,heat',p:'CH₃CH₂CH₃+Na₂CO₃'}]}},
    'ac→ke':{s:2,nt:'⚠️ Carbon drops by 1 via decarboxylation.',c:{3:[{m:'Step 1: Decarboxylation',e:'CH₃CH₂COONa+NaOH',c:'CaO,heat',p:'CH₃CH₃+Na₂CO₃ (3C→2C)'},{m:'Step 2: Dehydrogenation',e:'CH₃CH₃',c:'Ni,400–600°C',p:'CH₂=CH₂+H₂'}],4:[{m:'Step 1',e:'CH₃CH₂CH₂COONa+NaOH',c:'CaO,heat',p:'Propane+Na₂CO₃ (4C→3C)'},{m:'Step 2',e:'Propane',c:'Ni,400–600°C',p:'Propene+H₂'}],2:[{m:'Note',e:'',c:'',p:'2C acid→1C Methane; Methane cannot form alkene. Use 3C or 4C fatty acid.'}]}},
    'ac→ky':{s:3,nt:'⚠️ Carbon drops by 1.',c:{3:[{m:'Step 1',e:'CH₃CH₂COONa+NaOH',c:'CaO,heat',p:'Ethane+Na₂CO₃'},{m:'Step 2',e:'Ethane',c:'Ni,400–600°C',p:'Ethene+H₂'},{m:'Step 3',e:'Ethene',c:'Pd,600°C',p:'Ethyne+H₂ (3C acid→2C alkyne)'}],4:[{m:'Step 1',e:'Butanoate+NaOH',c:'CaO,heat',p:'Propane'},{m:'Step 2',e:'Propane',c:'Ni,400–600°C',p:'Propene+H₂'},{m:'Step 3',e:'Propene',c:'Pd,600°C',p:'Propyne+H₂'}],2:[{m:'Note',e:'',c:'',p:'2C acid→1C methane; cannot become alkyne. Use 3C or 4C.'}]}},
    'ac→al':{s:1,c:{2:[{m:'Strong Reduction (LiAlH₄)',e:'CH₃COOH+4[H]',c:'LiAlH₄',p:'CH₃CH₂OH+H₂O'}],3:[{m:'Strong Reduction',e:'CH₃CH₂COOH+4[H]',c:'LiAlH₄',p:'CH₃CH₂CH₂OH+H₂O'}],4:[{m:'Strong Reduction',e:'Butanoic Acid+4[H]',c:'LiAlH₄',p:'Butanol+H₂O'}]}},
    'ac→ad':{s:1,c:{2:[{m:'Partial Reduction (DIBAL-H, −78°C)',e:'CH₃COOH+2[H]',c:'DIBAL-H, −78°C',p:'CH₃CHO+H₂O ⚠️ stop at aldehyde!'}],3:[{m:'Partial Reduction',e:'CH₃CH₂COOH+2[H]',c:'DIBAL-H,−78°C',p:'CH₃CH₂CHO+H₂O'}],4:[{m:'Partial Reduction',e:'Butanoic Acid+2[H]',c:'DIBAL-H,−78°C',p:'Butanal+H₂O'}]}}
  };

  window.sf = function(id, btn) {
    FC = id; TC = null;
    document.querySelectorAll('#from-pills .pill').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    document.querySelectorAll('#to-pills .pill').forEach(p => {
      p.classList.remove('on', 'dis');
      if (p.getAttribute('onclick').includes("'" + id + "'")) p.classList.add('dis');
    });
    renderEx();
  };

  window.st = function(id, btn) {
    if (!FC) return; TC = id;
    document.querySelectorAll('#to-pills .pill').forEach(p => p.classList.remove('on'));
    btn.classList.add('on');
    renderEx();
  };

  function renderEx() {
    const r = document.getElementById('exr');
    if (!FC || !TC) { r.innerHTML = '<div class="exmt"><div class="exi">🔬</div><div class="ext">' + (FC ? 'Select a TO compound' : 'Select FROM and TO') + '</div></div>'; return; }
    const k = FC + '→' + TC, d = EX[k];
    if (!d) { r.innerHTML = '<div class="exmt"><div class="exi">⚠️</div><div class="ext">Pathway not available</div></div>'; return; }
    const fc = CL[FC], tc = CL[TC], fn = NM[FC], tn = NM[TC];
    let h = `<div class="phd2" style="color:${fc}"><span class="pf2">${fn}</span><span class="pm">⟶</span><span class="pf2" style="color:${tc}">${tn}</span><span class="sbadge" style="color:${fc};border-color:${fc}">${d.s} STEP${d.s > 1 ? 'S' : ''}</span>${d.nt ? `<span class="pnote">⚠️ ${d.nt}</span>` : ''}</div>`;
    const cns = Object.keys(d.c);
    const gid = 'ex_' + k.replace(/[^a-z0-9]/g, '_');
    h += `<div style="background:var(--sf);border:2px solid var(--bd);border-radius:14px;overflow:hidden">`;
    h += `<div class="etabs">`;
    cns.forEach((cn, i) => h += `<button class="etab${i === 0 ? ' on' : ''}" onclick="etab(this,'${gid}',${cn})">${cn}C</button>`);
    h += `</div>`;
    cns.forEach((cn, i) => {
      const steps = d.c[cn];
      h += `<div id="${gid}_${cn}" class="ecbl${i === 0 ? ' on' : ''}">`;
      steps.forEach((st2, si) => {
        const sc = si === 0 ? fc : tc;
        h += `<div class="stcard" style="margin:.7rem 1rem;border-color:${sc}33"><div class="stt"><span class="stn" style="color:${sc}">${st2.m}</span></div><div class="stb" style="color:${sc}">`;
        if (st2.e) {
          h += `<div class="eq" style="color:${fc}"><span class="r">${st2.e}</span>`;
          if (st2.c) h += `<div class="ab"><span class="ct">${st2.c}</span><span class="arr">⟶</span></div>`;
          else h += `<div class="ab"><span class="arr">⟶</span></div>`;
          h += `<span class="hi" style="color:${tc}">${st2.p}</span></div>`;
        } else { h += `<div class="note" style="border-color:${sc}">${st2.p}</div>`; }
        h += `</div></div>`;
      });
      h += `</div>`;
    });
    h += `</div>`;
    r.innerHTML = h;
  }

  window.etab = function(btn, g, n) {
    const box = btn.closest('[style*="border-radius:14px"]');
    if (!box) return;
    box.querySelectorAll('.etab').forEach(t => t.classList.remove('on'));
    box.querySelectorAll('.ecbl').forEach(c => c.classList.remove('on'));
    btn.classList.add('on');
    const el = document.getElementById(g + '_' + n);
    if (el) el.classList.add('on');
  };

  // ─────────────────────────────────────────────
  //  8. MCQ ENGINE
  // ─────────────────────────────────────────────
  const QB = [
    {t:"Fossil Fuels",q:"What are fossil fuels made from?",o:["Sea water","Remains of ancient plants and animals","Volcanic rocks","Sand"],a:1,e:"Fossil fuels form from buried remains of ancient organisms transformed over millions of years by heat and pressure."},
    {t:"Fossil Fuels",q:"Which is NOT a fossil fuel?",o:["Coal","Petroleum","Natural gas","Wood"],a:3,e:"Wood is biomass, not a fossil fuel. Coal, petroleum and natural gas are the three fossil fuels."},
    {t:"Fossil Fuels",q:"Coal is formed from?",o:["Aquatic creatures","Gigantic land plants","Marine fish","Fungi"],a:1,e:"Coal forms from gigantic land plants buried under heat and pressure over millions of years."},
    {t:"Natural Gas",q:"Major component of natural gas in Bangladesh?",o:["Ethane","Butane","Methane (93–98%)","Propane"],a:2,e:"Bangladesh natural gas is 93–98% methane (CH₄)."},
    {t:"Natural Gas",q:"Chemical formula of Methane?",o:["C₂H₆","CH₄","C₃H₈","C₂H₂"],a:1,e:"Methane = CH₄, the simplest alkane."},
    {t:"Petroleum",q:"Crude oil is separated by?",o:["Filtration","Centrifugation","Fractional Distillation","Evaporation"],a:2,e:"Fractional distillation separates crude oil based on differences in boiling points."},
    {t:"Petroleum",q:"LPG stands for?",o:["Liquefied Petroleum Gas","Low Pressure Gas","Light Petroleum Gas","Large Propane Gas"],a:0,e:"LPG = Liquefied Petroleum Gas, used for cooking."},
    {t:"Petroleum",q:"Kerosene is used mainly for?",o:["Cooking","Vehicle fuel","Jet engine fuel","Road construction"],a:2,e:"Kerosene (121–170°C, 11–16 carbons) is jet engine fuel."},
    {t:"Petroleum",q:"Bitumen (pitch) is used for?",o:["Cooking","Road construction","Medicine","Lubricant"],a:1,e:"Bitumen (>340°C, >30 carbons) is used in road construction."},
    {t:"Petroleum",q:"LPG boiling point range?",o:["21–70°C","71–120°C","0–20°C","-50 to 0°C"],a:2,e:"LPG boils at 0–20°C and has 1–4 carbon atoms."},
    {t:"Hydrocarbons",q:"A hydrocarbon contains only?",o:["C only","H only","C and H only","C, H and O"],a:2,e:"Hydrocarbons contain ONLY carbon and hydrogen."},
    {t:"Hydrocarbons",q:"Benzene (C₆H₆) is which type?",o:["Aliphatic","Aromatic","Alicyclic","Saturated open chain"],a:1,e:"Benzene is an aromatic hydrocarbon with a planar ring structure."},
    {t:"Hydrocarbons",q:"'Aliphatic' means?",o:["Ring-shaped","Something fatty","Colourless","Aromatic"],a:1,e:"Aliphatic comes from 'fat' — these hydrocarbons were originally obtained from animal fat."},
    {t:"Alkane",q:"General formula of Alkane?",o:["CₙH₂ₙ","CₙH₂ₙ₊₂","CₙH₂ₙ₋₂","CₙH₂ₙ₊₁OH"],a:1,e:"Alkane general formula = CₙH₂ₙ₊₂."},
    {t:"Alkane",q:"Alkanes are called?",o:["Olefin","Paraffin","Acetylene","Benzol"],a:1,e:"Alkanes = Paraffin (low affinity) — chemically very inactive."},
    {t:"Alkane",q:"Alkane bond type?",o:["C=C double","C≡C triple","C–C single only","C–O"],a:2,e:"Alkanes have ONLY C–C single bonds (saturated)."},
    {t:"Alkane",q:"Formula of Methane?",o:["C₂H₆","CH₄","C₃H₈","C₄H₁₀"],a:1,e:"Methane = CH₄, 1st member of alkane series."},
    {t:"Alkane",q:"Formula of Propane?",o:["C₂H₄","C₃H₆","C₃H₈","C₄H₁₀"],a:2,e:"Propane = C₃H₈ (CH₃–CH₂–CH₃)."},
    {t:"Alkane",q:"CO₂ + 4H₂ with Ni at 250°C gives?",o:["Ethane+H₂O","Methane+H₂O","Propane+H₂O","Butane+H₂O"],a:1,e:"CO₂ + 4H₂ → (Ni, 250°C) → CH₄ + 2H₂O."},
    {t:"Alkane",q:"Decarboxylation product alkane has?",o:["Same carbons","One more","One less carbon","Two less"],a:2,e:"Decarboxylation: alkane = salt carbons − 1. Sodium ethanoate(2C) → methane(1C)."},
    {t:"Alkane",q:"Methane combustion products?",o:["CO+H₂","CO₂+H₂O+heat","CH₂O+H₂","CO₂+N₂"],a:1,e:"CH₄ + 2O₂ → CO₂ + H₂O + heat."},
    {t:"Alkane",q:"6-carbon alkane is?",o:["Pentane","Hexane","Heptane","Octane"],a:1,e:"6-carbon alkane = Hexane (C₆H₁₄)."},
    {t:"Alkene",q:"General formula of Alkene?",o:["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙH₂ₙ₊₁OH"],a:1,e:"Alkene general formula = CₙH₂ₙ."},
    {t:"Alkene",q:"Alkenes are called?",o:["Paraffin","Olefin","Acetylene","Benzol"],a:1,e:"Alkenes = Olefin (oil-forming)."},
    {t:"Alkene",q:"Formula of Ethene?",o:["C₂H₆","C₂H₄","C₂H₂","C₃H₆"],a:1,e:"Ethene = C₂H₄ (CH₂=CH₂)."},
    {t:"Alkene",q:"Ethanol + conc.H₂SO₄ gives?",o:["Ethane","Ethene+H₂O","Ethyne","Methanol"],a:1,e:"Dehydration: CH₃CH₂OH → CH₂=CH₂ + H₂O."},
    {t:"Alkene",q:"Bromine test: decolourisation proves?",o:["Saturated","Unsaturated compound","Nitrogen","Sulphur"],a:1,e:"Bromine decolourises with unsaturated (alkene/alkyne) compounds."},
    {t:"Alkene",q:"Polythene from ethene needs?",o:["100°C,10atm,Fe","1000 atm,200°C,trace O₂","250°C,Ni","Room temp"],a:1,e:"Polythene: n(CH₂=CH₂) → (1000atm, 200°C, trace O₂) → (–CH₂–CH₂–)ₙ."},
    {t:"Alkyne",q:"General formula of Alkyne?",o:["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙH₂ₙ₊₁OH"],a:2,e:"Alkyne general formula = CₙH₂ₙ₋₂."},
    {t:"Alkyne",q:"CaC₂ + 2H₂O gives?",o:["Ethene+Ca(OH)₂","Ethyne+Ca(OH)₂","Methane+CaO","Propyne+H₂O"],a:1,e:"CaC₂ + 2H₂O → CH≡CH + Ca(OH)₂."},
    {t:"Alkyne",q:"Ethyne + H₂O with HgSO₄ at 80°C gives?",o:["Ethanol","Ethene","Ethanal","Ethanoic acid"],a:2,e:"CH≡CH + H₂O → (HgSO₄, H₂SO₄, 80°C) → CH₃CHO (Ethanal)."},
    {t:"Alkyne",q:"Alkyne needs how many mol H₂ to become alkane?",o:["0.5","1","2","3"],a:2,e:"Triple bond has 2 weak π bonds → 2 mol H₂ needed for full hydrogenation."},
    {t:"Alkyne",q:"Formula of Ethyne?",o:["C₂H₄","C₂H₂","C₂H₆","C₃H₄"],a:1,e:"Ethyne (acetylene) = C₂H₂ (CH≡CH)."},
    {t:"Alcohol",q:"Functional group of alcohol?",o:["–CHO","–COOH","–OH","–NH₂"],a:2,e:"Alcohols contain the hydroxyl (–OH) functional group."},
    {t:"Alcohol",q:"General formula of Alcohol?",o:["CₙH₂ₙ₊₁COOH","CₙH₂ₙ₊₁OH","CₙH₂ₙ₊₁CHO","CₙH₂ₙ₊₂"],a:1,e:"Alcohol general formula = CₙH₂ₙ₊₁OH."},
    {t:"Alcohol",q:"Rectified spirit is?",o:["Pure methanol","96% ethanol solution","100% ethanol","40% formaldehyde"],a:1,e:"Rectified spirit = 96% aqueous ethanol solution."},
    {t:"Alcohol",q:"Ethanol is prepared industrially from starch by?",o:["Distillation","Fermentation","Oxidation","Combustion"],a:1,e:"Ethanol is made from starch/sugar by fermentation."},
    {t:"Aldehyde",q:"Functional group of aldehyde?",o:["–OH","–COOH","–CHO","–NH₂"],a:2,e:"Aldehydes have the –CHO (aldehyde) functional group."},
    {t:"Aldehyde",q:"Formalin is?",o:["100% formaldehyde","40% formaldehyde solution","4% ethanoic acid","96% ethanol"],a:1,e:"Formalin = 40% aqueous solution of formaldehyde. Used to preserve specimens."},
    {t:"Aldehyde",q:"General formula of Aldehyde?",o:["CₙH₂ₙ₊₁COOH","CₙH₂ₙ₊₁CHO","CₙH₂ₙ₊₁OH","CₙH₂ₙ₊₂"],a:1,e:"Aldehyde general formula = CₙH₂ₙ₊₁CHO."},
    {t:"Fatty Acid",q:"Functional group of fatty acid?",o:["–OH","–CHO","–COOH","–NH₂"],a:2,e:"Fatty acids (carboxylic acids) have the –COOH functional group."},
    {t:"Fatty Acid",q:"Vinegar is?",o:["Pure ethanoic acid","4–10% aqueous ethanoic acid","40% formaldehyde","Rectified spirit"],a:1,e:"Vinegar = 4–10% aqueous solution of ethanoic acid. Used as food preservative."},
    {t:"Fatty Acid",q:"Fatty acids are?",o:["Strong acids","Weak acids","Neutral","Strong bases"],a:1,e:"All fatty acids are weak acids."},
    {t:"Fatty Acid",q:"General formula of Fatty Acid?",o:["CₙH₂ₙ₊₁OH","CₙH₂ₙ₊₁CHO","CₙH₂ₙ₊₁COOH","CₙH₂ₙ₊₂"],a:2,e:"Fatty Acid general formula = CₙH₂ₙ₊₁COOH."},
    {t:"Polymer",q:"Polymerisation is?",o:["Breaking large molecule","Joining many small molecules to form large one","Oxidation","Distillation"],a:1,e:"Polymerisation = many small monomers joining to form a large polymer."},
    {t:"Polymer",q:"Polythene monomer is?",o:["Propene","Ethene","Vinyl chloride","Styrene"],a:1,e:"Ethene (CH₂=CH₂) is the monomer of Polythene."},
    {t:"Polymer",q:"Nylon 6:6 is made by?",o:["Addition","Condensation polymerisation","Free radical","Ionic"],a:1,e:"Nylon 6:6 is made by condensation polymerisation of adipic acid and hexamethylene diamine."},
    {t:"Polymer",q:"PVC monomer is?",o:["Ethene","Propene","Vinyl chloride (CH₂=CHCl)","Styrene"],a:2,e:"Vinyl chloride (CH₂=CHCl) is the monomer of PVC."},
    {t:"Polymer",q:"Polypropene catalyst?",o:["Nickel","Iron","Titanium chloride","Platinum"],a:2,e:"Polypropene uses titanium chloride (Ziegler-Natta catalyst) at 140 atm, 120°C."},
    {t:"Mixed",q:"CH₂=CH₂ is?",o:["Ethane","Ethyne","Ethene","Methane"],a:2,e:"CH₂=CH₂ = Ethene (C₂H₄), an alkene."},
    {t:"Mixed",q:"CH≡CH is?",o:["Ethane","Ethene","Ethyne","Methane"],a:2,e:"CH≡CH = Ethyne (C₂H₂), an alkyne."},
    {t:"Mixed",q:"Alcohol → Aldehyde requires?",o:["Reduction","Strong oxidation","Mild controlled oxidation","Combustion"],a:2,e:"Mild/controlled oxidation (K₂Cr₂O₇+H₂SO₄) converts alcohol to aldehyde."},
    {t:"Mixed",q:"Aldehyde → Fatty Acid requires?",o:["Reduction","Oxidation","Dehydration","Polymerisation"],a:1,e:"Oxidation of aldehyde (K₂Cr₂O₇+H₂SO₄) gives fatty acid."},
    {t:"Mixed",q:"Acetylene = ?",o:["Ethene","Ethane","Ethyne","Propyne"],a:2,e:"Acetylene is the common name for Ethyne (CH≡CH)."},
    {t:"Mixed",q:"Acetic acid = ?",o:["Methanoic acid","Ethanoic acid","Propanoic acid","Butanoic acid"],a:1,e:"Acetic acid = Ethanoic acid (CH₃COOH). Vinegar = 4–10% solution."},
    {t:"Mixed",q:"Which decolourises bromine?",o:["Saturated only","Unsaturated (alkene/alkyne)","Aromatic only","All hydrocarbons"],a:1,e:"Unsaturated compounds (alkene, alkyne) decolourise bromine solution."},
    {t:"Mixed",q:"Citric acid found in?",o:["Tamarind","Curd","Lemon juice","Vinegar"],a:2,e:"Citric acid is in lemon juice."},
    {t:"Mixed",q:"Lactic acid found in?",o:["Lemon","Tamarind","Vinegar","Curd"],a:3,e:"Lactic acid is in curd (yoghurt)."},
    {t:"Mixed",q:"Alcohol → Alkene requires?",o:["Hydrogenation","Strong oxidation","Dehydration (remove H₂O)","Halogenation"],a:2,e:"Dehydration with conc.H₂SO₄: CH₃CH₂OH → CH₂=CH₂ + H₂O."},
    {t:"Mixed",q:"CH₃–CHO is?",o:["Methanol","Ethanol","Ethanal","Ethanoic acid"],a:2,e:"CH₃–CHO = Ethanal (Acetaldehyde), 2nd aldehyde."},
    {t:"Mixed",q:"CH₃–COOH is?",o:["Methanol","Ethanol","Ethanal","Ethanoic acid"],a:3,e:"CH₃–COOH = Ethanoic acid (Acetic acid). 4–10% solution = Vinegar."},
    {t:"Mixed",q:"Protein is a polymer of?",o:["Glucose","Amino acid","Fatty acid","Nucleotide"],a:1,e:"Protein is a natural polymer of amino acids."},
    {t:"Mixed",q:"10-carbon alkane is?",o:["Octane","Nonane","Decane","Undecane"],a:2,e:"10-carbon alkane = Decane (C₁₀H₂₂)."},
    {t:"Alkyne",q:"CaC₂ method gives only?",o:["Propyne","Ethyne (2C always)","Butyne","Methane"],a:1,e:"CaC₂ always gives only Ethyne because CaC₂ has 2 carbons."},
    {t:"Alkene",q:"CH₂=CH₂ + Br₂ →?",o:["CH₃–CH₃","CH₂Br–CH₂Br","CHBr₂–CHBr₂","CCl₄"],a:1,e:"Ethene + Br₂ → CH₂Br–CH₂Br (1,2-dibromoethane). Red colour disappears."},
    {t:"Mixed",q:"Decarboxylation reagent?",o:["HCl+heat","NaOH+CaO (soda lime)+heat","H₂SO₄+heat","UV light+Cl₂"],a:1,e:"Decarboxylation uses NaOH + CaO (soda lime) with heat."},
    {t:"Petroleum",q:"Diesel carbon range?",o:["5–10","11–16","17–20","20–30"],a:2,e:"Diesel has 17–20 carbons, boiling point 171–270°C."},
    {t:"Mixed",q:"What converts Alkene → Alcohol?",o:["Dehydration","Halogenation","Hydration (add H₂O)","Combustion"],a:2,e:"Hydration (H₃PO₄, 300°C, 60 atm): CH₂=CH₂ + H₂O → CH₃CH₂OH."},
    {t:"Mixed",q:"Aromatic = Greek word meaning?",o:["Chain","Low boiling","Scent/fragrance","High reactivity"],a:2,e:"Aromatic = from Greek 'Aroma' (scent). First aromatic compounds were sweet-smelling."},
    {t:"Polymer",q:"When 2 monomers join it is called?",o:["Monomer","Dimer","Trimer","Polymer"],a:1,e:"2 monomers = dimer. 3 = trimer. Many = polymer."},
    {t:"Mixed",q:"Formula of Ethanol?",o:["CH₃–OH","CH₃–CH₂–OH","CH₃CH₂CH₂OH","HCOOH"],a:1,e:"Ethanol = CH₃–CH₂–OH (C₂H₅OH)."},
    {t:"Alkane",q:"8-carbon alkane is?",o:["Heptane","Octane","Nonane","Decane"],a:1,e:"8-carbon alkane = Octane (C₈H₁₈)."},
    {t:"Alkene",q:"KMnO₄ test: pink colour disappears means?",o:["Saturated","Unsaturated compound","Nitrogen present","Sulphur present"],a:1,e:"KMnO₄ (pink) decolourises with unsaturated compounds, proving C=C or C≡C bonds."}
  ];

  let EQ2 = [], EA = {}, ET = null, ES = 0, EE = 0, ED = false;

  function shuffle(a) { const b = [...a]; for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; }

  window.startExam = function() {
    EQ2 = shuffle(QB).slice(0, 30); EA = {}; ED = false; ES = Date.now();
    const ql = document.getElementById('ql'); ql.innerHTML = '';
    EQ2.forEach((q, i) => {
      const lt = ['A', 'B', 'C', 'D'];
      const opts = q.o.map((o, oi) => `<div class="opt" onclick="selOpt(${i},${oi},this)"><span class="ol">${lt[oi]}</span><span class="otx">${o}</span></div>`).join('');
      ql.innerHTML += `<div class="qc" id="qc${i}"><div class="qh"><span class="qnum">Q ${i + 1}</span><span class="qtop">${q.t}</span><span class="qmk">1 Mark</span></div><div class="qtxt">${q.q}</div><div class="opts">${opts}</div></div>`;
    });
    document.getElementById('mq-start').style.display = 'none';
    document.getElementById('mqres').style.display = 'none';
    document.getElementById('mqexam').style.display = 'block';
    updProg(); startTimer();
  };

  window.selOpt = function(qi, oi, el) {
    if (ED) return;
    const c = document.getElementById('qc' + qi);
    c.querySelectorAll('.opt').forEach(o => o.classList.remove('on'));
    el.classList.add('on'); EA[qi] = oi;
    c.classList.add('answered'); c.classList.remove('uh'); updProg();
  };

  function updProg() {
    const n = Object.keys(EA).length;
    document.getElementById('epl').textContent = n + ' / 30';
    document.getElementById('epf').style.width = (n / 30 * 100) + '%';
  }

  function startTimer() {
    let r = 1200; const el = document.getElementById('timer');
    ET = setInterval(() => {
      r--; const m = String(Math.floor(r / 60)).padStart(2, '0'), s = String(r % 60).padStart(2, '0');
      el.textContent = m + ':' + s; el.classList.remove('warn', 'danger');
      if (r <= 300) el.classList.add('warn'); if (r <= 60) el.classList.add('danger');
      if (r <= 0) { clearInterval(ET); finishExam(true); }
    }, 1000);
  }

  window.finishExam = function(auto = false) {
    if (ED) return;
    const sk = EQ2.map((_, i) => i).filter(i => EA[i] === undefined);
    if (!auto && sk.length > 0) { if (!confirm('You have ' + sk.length + ' unanswered question(s). Submit anyway?')) return; }
    ED = true; EE = Date.now(); clearInterval(ET); showResults();
  };

  function showResults() {
    let co = 0, wr = 0, sk = 0;
    EQ2.forEach((q, i) => { const a = EA[i]; if (a === undefined) sk++; else if (a === q.a) co++; else wr++; });
    const tu = Math.round((EE - ES) / 1000), tm = String(Math.floor(tu / 60)).padStart(2, '0'), ts = String(tu % 60).padStart(2, '0');
    const pct = co / 30 * 100;
    let g, ms, ic, cl;
    if (pct >= 90) { g = 'A+'; ms = 'Outstanding! Perfect chemistry!'; ic = '🏆'; cl = '#fbbf24'; }
    else if (pct >= 80) { g = 'A'; ms = 'Excellent! Keep it up!'; ic = '🎉'; cl = '#4ade80'; }
    else if (pct >= 70) { g = 'B'; ms = 'Good job! A bit more practice!'; ic = '👍'; cl = '#60a5fa'; }
    else if (pct >= 60) { g = 'C'; ms = 'Not bad. Review weak topics.'; ic = '📚'; cl = '#a78bfa'; }
    else if (pct >= 50) { g = 'D'; ms = 'Keep studying! You can do better.'; ic = '💪'; cl = '#fb923c'; }
    else { g = 'F'; ms = "Don't give up — try again!"; ic = '🔄'; cl = '#f87171'; }
    document.getElementById('mqexam').style.display = 'none';
    document.getElementById('mqres').style.display = 'block';
    document.getElementById('ri').textContent = ic;
    document.getElementById('sn').textContent = co;
    document.getElementById('rg').textContent = g; document.getElementById('rg').style.color = cl;
    document.getElementById('rm').textContent = ms;
    const sr = document.getElementById('sr'); sr.style.borderColor = cl; sr.style.color = cl;
    document.getElementById('ch1').textContent = '✓ ' + co + ' Correct';
    document.getElementById('ch2').textContent = '✗ ' + wr + ' Wrong';
    document.getElementById('ch3').textContent = '— ' + sk + ' Skipped';
    document.getElementById('ch4').textContent = '⏱ ' + tm + ':' + ts;
    document.getElementById('revs').innerHTML = '';
    document.getElementById('mqres').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  window.showRev = function() {
    const sec = document.getElementById('revs'), lt = ['A', 'B', 'C', 'D'];
    let h = '<div style="font-family:Fredoka One,cursive;font-size:1.2rem;color:#4ade80;margin:1rem 0;text-align:center">📖 Full Answer Review</div>';
    EQ2.forEach((q, i) => {
      const ua = EA[i], ca = q.a, ok = ua === ca, skipped = ua === undefined;
      const bc = skipped ? '#fbbf24' : ok ? '#4ade80' : '#f87171';
      const stx = skipped ? '⬜ Skipped' : ok ? '✅ Correct' : '❌ Wrong';
      const opts = q.o.map((o, oi) => {
        let cl = 'opt rv'; if (oi === ca) cl += ' ca'; if (oi === ua && oi !== ca) cl += ' wa';
        return `<div class="${cl}"><span class="ol">${lt[oi]}</span><span class="otx">${o}</span></div>`;
      }).join('');
      h += `<div class="qc" style="border-color:${bc};margin-bottom:1rem"><div class="qh"><span class="qnum" style="color:${bc};border-color:${bc};background:${bc}1a">Q ${i + 1}</span><span class="qtop">${q.t}</span><span class="qmk" style="color:${bc}">${stx}</span></div><div class="qtxt">${q.q}</div><div class="opts">${opts}</div><div class="expl on">💡 <strong>Explanation:</strong> ${q.e}</div></div>`;
    });
    sec.innerHTML = h; sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  window.retake = function() {
    document.getElementById('mqres').style.display = 'none';
    document.getElementById('revs').innerHTML = '';
    document.getElementById('mq-start').style.display = 'block';
  };

})();
