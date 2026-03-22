/*!
 * Organic Chemistry Hub
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
.bkash-top-btn{position:absolute;top:1rem;right:1rem;font-family:'Fredoka One',cursive;font-size:.8rem;padding:.45rem 1rem;background:linear-gradient(135deg,#e2136e,#c0006e);color:#fff;border:none;border-radius:50px;cursor:pointer;box-shadow:0 3px 12px rgba(226,19,110,.4);transition:all .22s cubic-bezier(.34,1.56,.64,1);display:flex;align-items:center;gap:.35rem;z-index:10}
.bkash-top-btn:hover{transform:translateY(-2px) scale(1.06);box-shadow:0 6px 18px rgba(226,19,110,.55)}
.hl{font-size:.78rem;letter-spacing:.25em;color:#6366f1;text-transform:uppercase;font-weight:800;margin-bottom:.5rem}
h1{font-family:'Fredoka One',cursive;font-size:clamp(2.2rem,5vw,3.8rem);background:linear-gradient(135deg,#818cf8 0%,#c084fc 50%,#f472b6 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.1;margin-bottom:.4rem}
.hd{color:#6366f1;font-size:1rem;font-weight:700}
nav{padding:1rem 0;max-width:1200px;margin:0 auto;border-bottom:1px solid #1e1e42}
.nav-group{display:flex;flex-wrap:wrap;gap:.55rem;justify-content:center;padding:.5rem 1rem}
.nav-divider{text-align:center;font-family:'Fredoka One',cursive;font-size:.62rem;letter-spacing:.18em;color:#374151;text-transform:uppercase;padding:.15rem 0}
.btn{font-family:'Fredoka One',cursive;cursor:pointer;border:none;outline:none;display:inline-flex;flex-direction:column;align-items:center;gap:.15rem;padding:.65rem 1.1rem;border-radius:12px;font-size:.88rem;transition:all .22s cubic-bezier(.34,1.56,.64,1);position:relative;overflow:hidden;min-width:88px;max-width:120px}
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
.b-fc{color:#fff;background:linear-gradient(135deg,#f59e0b,#d97706);border-radius:50px;box-shadow:0 4px 18px rgba(245,158,11,.4);border:none}
.b-fc:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(245,158,11,.55)}
.b-fc.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(245,158,11,.35)}
.b-mw{color:#fff;background:linear-gradient(135deg,#8b5cf6,#6d28d9);border-radius:50px;box-shadow:0 4px 18px rgba(139,92,246,.4);border:none}
.b-mw:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(139,92,246,.55)}
.b-mw.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(139,92,246,.35)}
.b-nt{color:#fff;background:linear-gradient(135deg,#0891b2,#0e7490);border-radius:50px;box-shadow:0 4px 18px rgba(8,145,178,.4);border:none}
.b-nt:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(8,145,178,.55)}
.b-nt.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(8,145,178,.35)}
.b-rc{color:#fff;background:linear-gradient(135deg,#be185d,#9f1239);border-radius:50px;box-shadow:0 4px 18px rgba(190,24,93,.4);border:none}
.b-rc:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(190,24,93,.55)}
.b-rc.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(190,24,93,.35)}
.b-tq{color:#fff;background:linear-gradient(135deg,#059669,#065f46);border-radius:50px;box-shadow:0 4px 18px rgba(5,150,105,.4);border:none}
.b-tq:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(5,150,105,.55)}
.b-tq.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(5,150,105,.35)}
.b-th{color:#fff;background:linear-gradient(135deg,#1d4ed8,#1e40af);border-radius:50px;box-shadow:0 4px 18px rgba(29,78,216,.4);border:none}
.b-th:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(29,78,216,.55)}
.b-th.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(29,78,216,.35)}
.b-fg{color:#fff;background:linear-gradient(135deg,#b45309,#92400e);border-radius:50px;box-shadow:0 4px 18px rgba(180,83,9,.4);border:none}
.b-fg:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(180,83,9,.55)}
.b-fg.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(180,83,9,.35)}
.b-is{color:#fff;background:linear-gradient(135deg,#0f766e,#115e59);border-radius:50px;box-shadow:0 4px 18px rgba(15,118,110,.4);border:none}
.b-is:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(15,118,110,.55)}
.b-is.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(15,118,110,.35)}
.b-ar{color:#fff;background:linear-gradient(135deg,#7e22ce,#581c87);border-radius:50px;box-shadow:0 4px 18px rgba(126,34,206,.4);border:none}
.b-ar:hover{transform:translateY(-3px) scale(1.04);box-shadow:0 7px 28px rgba(126,34,206,.55)}
.b-ar.on{transform:translateY(1px);box-shadow:0 2px 14px rgba(126,34,206,.35)}
/* FLASHCARD */
.fc-wrap{max-width:700px;margin:0 auto}
.fc-progress{display:flex;align-items:center;gap:.8rem;margin-bottom:1.2rem}
.fc-bar{flex:1;height:8px;background:rgba(255,255,255,.07);border-radius:10px;overflow:hidden}
.fc-fill{height:100%;background:linear-gradient(90deg,#f59e0b,#d97706);border-radius:10px;transition:width .4s ease}
.fc-count{font-family:'Fredoka One',cursive;font-size:.9rem;color:#fbbf24}
.fc-filters{display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:1.2rem}
.fc-filter{font-family:'Fredoka One',cursive;font-size:.78rem;padding:.3rem .9rem;border:2px solid rgba(255,255,255,.12);border-radius:50px;background:transparent;color:#94a3b8;cursor:pointer;transition:all .18s}
.fc-filter.on{background:rgba(245,158,11,.15);border-color:#f59e0b;color:#fbbf24}
.fc-card{perspective:1000px;height:240px;cursor:pointer;margin-bottom:1.2rem}
.fc-inner{position:relative;width:100%;height:100%;transition:transform .55s cubic-bezier(.4,0,.2,1);transform-style:preserve-3d}
.fc-card.flipped .fc-inner{transform:rotateY(180deg)}
.fc-front,.fc-back{position:absolute;inset:0;border-radius:20px;backface-visibility:hidden;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.8rem;text-align:center}
.fc-front{background:linear-gradient(135deg,#1e1e42,#131328);border:2px solid #fbbf24;box-shadow:0 8px 32px rgba(251,191,36,.2)}
.fc-back{background:linear-gradient(135deg,#1a0a2e,#0a1628);border:2px solid #818cf8;box-shadow:0 8px 32px rgba(129,140,248,.2);transform:rotateY(180deg)}
.fc-label{font-size:.7rem;font-weight:800;letter-spacing:.2em;text-transform:uppercase;margin-bottom:.6rem;opacity:.6}
.fc-question{font-family:'Fredoka One',cursive;font-size:1.5rem;color:#fde68a;line-height:1.3}
.fc-answer{font-family:'JetBrains Mono',monospace;font-size:1.3rem;color:#6ee7b7;line-height:1.4}
.fc-hint{font-size:.8rem;color:#6b7280;margin-top:.5rem;font-style:italic}
.fc-actions{display:flex;gap:.7rem;justify-content:center}
.fc-btn{font-family:'Fredoka One',cursive;font-size:1rem;padding:.65rem 1.5rem;border:none;border-radius:50px;cursor:pointer;transition:all .22s cubic-bezier(.34,1.56,.64,1)}
.fc-btn:hover{transform:scale(1.06) translateY(-2px)}
.fc-prev{background:rgba(255,255,255,.07);border:2px solid rgba(255,255,255,.15);color:#94a3b8}
.fc-flip{background:linear-gradient(135deg,#f59e0b,#d97706);color:#fff;box-shadow:0 4px 14px rgba(245,158,11,.35)}
.fc-next{background:linear-gradient(135deg,#818cf8,#6366f1);color:#fff;box-shadow:0 4px 14px rgba(99,102,241,.35)}
.fc-shuffle{background:rgba(74,222,128,.1);border:2px solid rgba(74,222,128,.3);color:#4ade80;font-size:.85rem}
.fc-done{text-align:center;padding:3rem 1rem;animation:fadeUp .4s ease}
/* MOLECULAR WEIGHT CALC */
.mw-wrap{max-width:580px;margin:0 auto}
.mw-input-row{display:flex;gap:.7rem;margin-bottom:.8rem;flex-wrap:wrap}
.mw-input{flex:1;min-width:200px;font-family:'JetBrains Mono',monospace;font-size:1.15rem;padding:.9rem 1.3rem;background:var(--sf);border:2px solid var(--bd);border-radius:13px;color:#e2e8f0;outline:none;transition:border-color .2s;letter-spacing:.04em}
.mw-input:focus{border-color:#8b5cf6;box-shadow:0 0 0 3px rgba(139,92,246,.15)}
.mw-btn{font-family:'Fredoka One',cursive;font-size:1rem;padding:.9rem 1.8rem;border:none;border-radius:13px;cursor:pointer;background:linear-gradient(135deg,#8b5cf6,#6d28d9);color:#fff;box-shadow:0 4px 16px rgba(139,92,246,.35);transition:all .22s cubic-bezier(.34,1.56,.64,1)}
.mw-btn:hover{transform:translateY(-2px) scale(1.04);box-shadow:0 7px 22px rgba(139,92,246,.5)}
.mw-result{background:var(--sf);border:2px solid #8b5cf6;border-radius:16px;padding:1.5rem;margin-bottom:1rem;animation:fadeUp .35s ease}
.mw-big{font-family:'Fredoka One',cursive;font-size:3rem;color:#c4b5fd;text-align:center;line-height:1}
.mw-unit{font-size:1rem;color:#6b7280;margin-top:.2rem;text-align:center}
.mw-breakdown{margin-top:1rem;display:flex;flex-direction:column;gap:.3rem}
.mw-row{display:flex;justify-content:space-between;align-items:center;padding:.4rem .7rem;background:rgba(255,255,255,.03);border-radius:8px;font-family:'JetBrains Mono',monospace;font-size:.85rem}
.mw-atom{color:#fde68a}.mw-mass{color:#6ee7b7}.mw-sub{color:#c4b5fd}
.mw-presets{display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.2rem}
.mw-preset{font-family:'JetBrains Mono',monospace;font-size:.78rem;padding:.3rem .8rem;background:rgba(139,92,246,.1);border:1.5px solid rgba(139,92,246,.3);border-radius:8px;color:#a78bfa;cursor:pointer;transition:all .18s}
.mw-preset:hover{background:rgba(139,92,246,.2);transform:scale(1.05)}
/* NOTES */
.nt-wrap{max-width:900px;margin:0 auto}
.nt-tabs{display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:1.4rem;border-bottom:2px solid var(--bd)}
.nt-tab{font-family:'Fredoka One',cursive;font-size:.9rem;padding:.5rem 1.1rem;background:transparent;border:none;color:#6366f1;cursor:pointer;border-bottom:3px solid transparent;position:relative;top:2px;border-radius:8px 8px 0 0;transition:all .18s}
.nt-tab:hover{color:#a5b4fc;background:rgba(255,255,255,.04)}
.nt-tab.on{color:#fff;border-bottom-color:currentColor;background:rgba(255,255,255,.05)}
.nt-pane{display:none}.nt-pane.on{display:block;animation:fadeUp .3s ease}
.note-card{background:var(--sf);border:2px solid var(--bd);border-radius:16px;overflow:hidden;margin-bottom:1.1rem}
.note-card-head{display:flex;align-items:center;gap:.8rem;padding:.85rem 1.2rem;background:rgba(0,0,0,.3);border-bottom:1px solid var(--bd)}
.note-card-icon{font-size:1.6rem}
.note-card-title{font-family:'Fredoka One',cursive;font-size:1.15rem}
.note-card-body{padding:1.1rem 1.3rem;font-size:.93rem;color:#94a3b8;font-weight:600;line-height:1.7}
.note-card-body strong{color:#e2e8f0;filter:brightness(1.3)}
.note-table{width:100%;border-collapse:collapse;font-size:.85rem;margin:.6rem 0}
.note-table th{background:rgba(255,255,255,.06);color:#c4b5fd;padding:.5rem .8rem;text-align:left;font-family:'Fredoka One',cursive;font-size:.82rem}
.note-table td{padding:.45rem .8rem;border-bottom:1px solid var(--bd);color:#94a3b8}
.note-table tr:last-child td{border-bottom:none}
.note-table td:first-child{color:#fde68a;font-family:'JetBrains Mono',monospace}
.note-formula{font-family:'JetBrains Mono',monospace;font-size:.88rem;background:rgba(0,0,0,.3);padding:.6rem 1rem;border-radius:9px;border:1px solid rgba(255,255,255,.07);margin:.4rem 0;color:#6ee7b7}
/* REACTION CHART */
.rc-wrap{max-width:1000px;margin:0 auto}
.rc-grid{display:grid;gap:1rem}
.rc-row{display:grid;grid-template-columns:1fr auto 1fr;gap:.5rem;align-items:center;background:var(--sf);border:1.5px solid var(--bd);border-radius:14px;padding:.9rem 1.1rem}
.rc-compound{text-align:center}
.rc-name{font-family:'Fredoka One',cursive;font-size:1rem}
.rc-form{font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#94a3b8;margin-top:.15rem}
.rc-arrow-box{display:flex;flex-direction:column;align-items:center;gap:.2rem;padding:0 .5rem;min-width:130px}
.rc-reagent{font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#7dd3fc;background:rgba(125,211,252,.07);padding:.1rem .45rem;border-radius:5px;border:1px solid rgba(125,211,252,.18);white-space:nowrap}
.rc-arrow{font-size:1.6rem;color:#f1f5f9;text-shadow:0 0 8px rgba(241,245,249,.4)}
.rc-product{font-family:'JetBrains Mono',monospace;font-size:.6rem;color:#fbbf24;background:rgba(251,191,36,.07);padding:.1rem .45rem;border-radius:5px;border:1px solid rgba(251,191,36,.18);white-space:nowrap}
.rc-section-title{font-family:'Fredoka One',cursive;font-size:1.1rem;padding:.5rem 1rem;border-radius:10px;margin-bottom:.7rem;margin-top:1.2rem;display:inline-block}
/* TOPIC QUIZ */
.tq-wrap{max-width:700px;margin:0 auto}
.tq-picks{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:.7rem;margin-bottom:1.4rem}
.tq-pick{border:2px solid;border-radius:14px;background:var(--sf);cursor:pointer;padding:.9rem .7rem;text-align:center;transition:all .25s cubic-bezier(.34,1.56,.64,1)}
.tq-pick:hover{transform:translateY(-4px) scale(1.04)}
.tq-pick.on{box-shadow:0 0 22px currentColor}
.tq-pick-icon{font-size:2rem;display:block;margin-bottom:.3rem}
.tq-pick-name{font-family:'Fredoka One',cursive;font-size:.95rem;display:block}
.tq-pick-count{font-family:'JetBrains Mono',monospace;font-size:.62rem;opacity:.55;display:block;margin-top:.15rem}
.tq-start-btn{font-family:'Fredoka One',cursive;font-size:1.1rem;padding:.85rem 2.8rem;border:none;border-radius:50px;cursor:pointer;background:linear-gradient(135deg,#059669,#065f46);color:#fff;box-shadow:0 4px 22px rgba(5,150,105,.38);transition:all .28s cubic-bezier(.34,1.56,.64,1);display:block;margin:0 auto}
.tq-start-btn:hover{transform:scale(1.06) translateY(-2px)}
.tq-exam{display:none}
.tq-result{display:none;text-align:center;padding:2rem 1rem;animation:fadeUp .4s ease}
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
.stcard{border:2px solid;border-radius:14px;overflow:hidden;margin-bottom:1rem}
.stt{display:flex;align-items:center;gap:.7rem;padding:.65rem 1.1rem;border-bottom:1px solid rgba(255,255,255,.1)}
.stn{font-family:'Fredoka One',cursive;font-size:.82rem;padding:.2rem .75rem;border-radius:8px;background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.22);color:#fff}
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
footer{border-top:1px solid #1e1e42;padding:1.4rem 1rem 1rem;text-align:center;font-size:.75rem;font-weight:800;letter-spacing:.12em;color:#374151}
.bmc-btn{display:inline-flex;align-items:center;gap:.5rem;margin-top:.8rem;padding:.55rem 1.3rem;background:linear-gradient(135deg,#e2136e,#c0006e);color:#fff;border:none;border-radius:50px;font-family:'Fredoka One',cursive;font-size:.92rem;cursor:pointer;text-decoration:none;box-shadow:0 4px 14px rgba(226,19,110,.4);transition:all .22s cubic-bezier(.34,1.56,.64,1)}
.bmc-btn:hover{transform:translateY(-2px) scale(1.05);box-shadow:0 7px 22px rgba(226,19,110,.55)}
.bkash-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:9999;align-items:center;justify-content:center;padding:1rem;backdrop-filter:blur(6px)}
.bkash-overlay.open{display:flex;animation:fadeUp .3s ease}
.bkash-modal{background:#131328;border:2px solid #e2136e;border-radius:22px;max-width:400px;width:100%;overflow:hidden;box-shadow:0 25px 60px rgba(226,19,110,.4)}
.bkash-top{background:linear-gradient(135deg,#e2136e,#8b0047);padding:1.8rem 1.5rem 1.4rem;text-align:center}
.bkash-logo{font-family:'Fredoka One',cursive;font-size:2.2rem;color:#fff;margin-bottom:.3rem}
.bkash-sub{font-size:.82rem;color:rgba(255,255,255,.8);font-weight:600}
.bkash-body{padding:1.4rem 1.5rem 1.2rem}
.bkash-label{font-size:.68rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:#6b7280;margin-bottom:.45rem}
.bkash-num{display:flex;align-items:center;justify-content:space-between;background:rgba(226,19,110,.08);border:2px solid rgba(226,19,110,.3);border-radius:14px;padding:.85rem 1.2rem;margin-bottom:1rem}
.bkash-number{font-family:'Fredoka One',cursive;font-size:1.75rem;color:#fce7f3;letter-spacing:.05em}
.bkash-copy{font-family:'Fredoka One',cursive;font-size:.78rem;padding:.4rem .9rem;background:linear-gradient(135deg,#e2136e,#c0006e);color:#fff;border:none;border-radius:50px;cursor:pointer;transition:all .2s;box-shadow:0 3px 10px rgba(226,19,110,.35)}
.bkash-copy:hover{transform:scale(1.08)}
.bkash-steps{display:flex;flex-direction:column;gap:.5rem;margin-bottom:1.2rem}
.bkash-step{display:flex;align-items:flex-start;gap:.65rem;background:rgba(255,255,255,.03);border-radius:10px;padding:.6rem .85rem;border:1px solid rgba(255,255,255,.06)}
.bkash-step-num{font-family:'Fredoka One',cursive;font-size:.95rem;color:#e2136e;min-width:20px}
.bkash-step-txt{font-size:.82rem;color:#94a3b8;font-weight:600;line-height:1.45}
.bkash-step-txt strong{color:#e2e8f0}
.bkash-thank{text-align:center;font-size:.75rem;color:#6b7280;margin-bottom:1rem;font-style:italic}
.bkash-close{width:100%;font-family:'Fredoka One',cursive;font-size:.92rem;padding:.7rem;background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);color:#94a3b8;border-radius:12px;cursor:pointer;transition:all .2s}
.bkash-close:hover{background:rgba(255,255,255,.1);color:#e2e8f0}
.lang-wrap{position:absolute;top:1rem;left:1rem;z-index:200}
.lang-toggle{font-family:'Fredoka One',cursive;font-size:.8rem;padding:.42rem .95rem;background:rgba(255,255,255,.07);color:#e2e8f0;border:1.5px solid rgba(255,255,255,.15);border-radius:50px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:.35rem;white-space:nowrap}
.lang-toggle:hover{background:rgba(255,255,255,.13);border-color:rgba(255,255,255,.3)}
.lang-dd{position:absolute;top:calc(100% + .55rem);left:0;background:#1a1a3e;border:2px solid rgba(255,255,255,.13);border-radius:14px;overflow:hidden;display:none;flex-direction:column;min-width:140px;box-shadow:0 10px 32px rgba(0,0,0,.6);z-index:300}
.lang-dd.open{display:flex;animation:fadeUp .2s ease}
.lang-opt{font-family:'Fredoka One',cursive;font-size:.88rem;padding:.62rem 1.1rem;background:transparent;color:#94a3b8;border:none;cursor:pointer;text-align:left;transition:all .18s;display:flex;align-items:center;gap:.5rem}
.lang-opt:hover{background:rgba(255,255,255,.07);color:#e2e8f0}
.lang-opt.on{color:#818cf8;background:rgba(129,140,248,.1);font-weight:700}
@media(max-width:640px){.nav-group{gap:.38rem;padding:.4rem .5rem}.btn{padding:.55rem .7rem;font-size:.78rem;min-width:72px;max-width:100px}.bs{font-size:.52rem}}
`;

  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ─────────────────────────────────────────────
  //  3. SET PAGE TITLE
  // ─────────────────────────────────────────────
  document.title = 'Organic Chemistry Hub — For Class 9–12 Students';

  // ─────────────────────────────────────────────
  //  4. BUILD HTML SKELETON
  // ─────────────────────────────────────────────
  document.body.innerHTML = `
<header>
  <button class="bkash-top-btn" onclick="openBkash()">💳 bKash Support</button>
  <div class="lang-wrap">
    <button class="lang-toggle" id="lang-toggle-btn" onclick="toggleLangDD()">🌐 EN ▾</button>
    <div class="lang-dd" id="lang-dd">
      <button class="lang-opt on" data-lang="en" onclick="setLang('en')">🇬🇧 English</button>
      <button class="lang-opt" data-lang="bn" onclick="setLang('bn')">🇧🇩 বাংলা</button>
      <button class="lang-opt" data-lang="hi" onclick="setLang('hi')">🇮🇳 हिंदी</button>
    </div>
  </div>
  <div class="hl" data-i18n="hl">⚗️ Organic Chemistry · For Class 9–12 Students</div>
  <h1 onclick="goHome()" style="cursor:pointer" title="Go to Home">Organic Chemistry Hub</h1>
  <div class="hd" data-i18n="hd">🔬 Reactions · Isomerism · Synthesis · Formula Lookup · MCQ Exam</div>
</header>
<nav>
  <div class="nav-divider" data-i18n="div1">📚 Organic Compounds</div>
  <div class="nav-group">
    <button class="btn b-ka" onclick="chShow('ka',this)"><span data-i18n="nav_ka">🔥 Alkane</span><span class="bs">CₙH₂ₙ₊₂</span></button>
    <button class="btn b-ke" onclick="chShow('ke',this)"><span data-i18n="nav_ke">🌿 Alkene</span><span class="bs">CₙH₂ₙ</span></button>
    <button class="btn b-ky" onclick="chShow('ky',this)"><span data-i18n="nav_ky">⚡ Alkyne</span><span class="bs">CₙH₂ₙ₋₂</span></button>
    <button class="btn b-al" onclick="chShow('al',this)"><span data-i18n="nav_al">🧪 Alcohol</span><span class="bs" data-i18n="sub_al">–OH group</span></button>
    <button class="btn b-ad" onclick="chShow('ad',this)"><span data-i18n="nav_ad">✨ Aldehyde</span><span class="bs" data-i18n="sub_ad">–CHO group</span></button>
    <button class="btn b-ac" onclick="chShow('ac',this)"><span data-i18n="nav_ac">🧬 Fatty Acid</span><span class="bs" data-i18n="sub_ac">–COOH group</span></button>
    <button class="btn b-ex" onclick="chShow('ex',this)"><span data-i18n="nav_ex">⇄ Exchange</span><span class="bs" data-i18n="sub_ex">Any → Any</span></button>
    <button class="btn b-sy" onclick="chShow('sy',this)"><span data-i18n="nav_sy">🔬 How Made</span><span class="bs" data-i18n="sub_sy">Synthesis</span></button>
  </div>
  <div class="nav-divider" data-i18n="div2">📖 Theory & Reference</div>
  <div class="nav-group">
    <button class="btn b-th" onclick="chShow('th',this)"><span data-i18n="nav_th">📖 Theory</span><span class="bs" data-i18n="sub_th">EV Textbook</span></button>
    <button class="btn b-fg" onclick="chShow('fg',this)"><span data-i18n="nav_fg">🏷️ Func. Groups</span><span class="bs">11 Types</span></button>
    <button class="btn b-is" onclick="chShow('is',this)"><span data-i18n="nav_is">🔄 Isomerism</span><span class="bs" data-i18n="sub_is">Structural/Geo</span></button>
    <button class="btn b-ar" onclick="chShow('ar',this)"><span data-i18n="nav_ar">💎 Arenes</span><span class="bs" data-i18n="sub_ar">Benzene Ring</span></button>
  </div>
  <div class="nav-divider" data-i18n="div3">🧪 Study Tools</div>
  <div class="nav-group">
    <button class="btn b-mq" onclick="chShow('mq',this)"><span data-i18n="nav_mq">📝 MCQ Exam</span><span class="bs" data-i18n="sub_mq">300+ Qs · 20 Min</span></button>
    <button class="btn b-tq" onclick="chShow('tq',this)"><span data-i18n="nav_tq">🎯 Topic Quiz</span><span class="bs" data-i18n="sub_tq">5 Qs / Topic</span></button>
    <button class="btn b-fc" onclick="chShow('fc',this)"><span data-i18n="nav_fc">⏱️ Flashcards</span><span class="bs" data-i18n="sub_fc">Flip & Revise</span></button>
    <button class="btn b-nm" onclick="chShow('nm',this)"><span data-i18n="nav_nm">🔍 Name Lookup</span><span class="bs" data-i18n="sub_nm">150+ Compounds</span></button>
    <button class="btn b-fb" onclick="chShow('fb',this)"><span data-i18n="nav_fb">🧩 Formula Builder</span><span class="bs" data-i18n="sub_fb">Type Structure</span></button>
    <button class="btn b-mw" onclick="chShow('mw',this)"><span data-i18n="nav_mw">🧮 Mol. Weight</span><span class="bs" data-i18n="sub_mw">Calculator</span></button>
    <button class="btn b-nt" onclick="chShow('nt',this)"><span data-i18n="nav_nt">📝 Notes</span><span class="bs" data-i18n="sub_nt">Summary Cards</span></button>
    <button class="btn b-rc" onclick="chShow('rc',this)"><span data-i18n="nav_rc">📊 Reaction Chart</span><span class="bs" data-i18n="sub_rc">Visual Map</span></button>
  </div>
</nav>
<main id="main-content"></main>
<footer>
  <span data-i18n="footer_main">⚗️ ORGANIC CHEMISTRY HUB · FOR CLASS 9–12 STUDENTS</span>
  <div style="margin-top:.5rem;font-size:.68rem;color:#374151" data-i18n="footer_tag">Made with ❤️ for Class 9–12 Chemistry Students</div>
</footer>

<!-- bKash Payment Modal -->
<div class="bkash-overlay" id="bkash-overlay" onclick="closeBkashOutside(event)">
  <div class="bkash-modal">
    <div class="bkash-top">
      <div class="bkash-logo">🩷 bKash</div>
      <div class="bkash-sub">Send Money · পাঠান টাকা</div>
    </div>
    <div class="bkash-body">
      <div class="bkash-label">📱 bKash Personal Number</div>
      <div class="bkash-num">
        <div class="bkash-number" id="bkash-num-display">01882-808528</div>
        <button class="bkash-copy" id="bkash-copy-btn" onclick="copyBkash()">📋 Copy</button>
      </div>
      <div class="bkash-label">📋 How to Send Money</div>
      <div class="bkash-steps">
        <div class="bkash-step"><span class="bkash-step-num">1</span><div class="bkash-step-txt">Open your <strong>bKash app</strong> on your phone</div></div>
        <div class="bkash-step"><span class="bkash-step-num">2</span><div class="bkash-step-txt">Tap <strong>"Send Money"</strong> (পাঠান)</div></div>
        <div class="bkash-step"><span class="bkash-step-num">3</span><div class="bkash-step-txt">Enter number: <strong>01882808528</strong></div></div>
        <div class="bkash-step"><span class="bkash-step-num">4</span><div class="bkash-step-txt">Enter your amount and complete the payment</div></div>
        <div class="bkash-step"><span class="bkash-step-num">5</span><div class="bkash-step-txt">Add reference: <strong>"Organic Chemistry Hub"</strong> 🙏</div></div>
      </div>
      <div class="bkash-thank">আপনার সাপোর্টের জন্য অনেক ধন্যবাদ! 💕<br>Thank you so much for your support!</div>
      <button class="bkash-close" onclick="closeBkash()">✕ Close</button>
    </div>
  </div>
</div>`;

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
  panels['home'] = `<div class="empty"><span class="ei">⚗️</span><div class="et" data-i18n="home_title">Choose a Section!</div><div class="es" data-i18n="home_desc">Click any button above to explore reactions, exchange conversions, synthesis or MCQ exam 🚀</div></div>`;

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
<div id="mq-start"><div class="mcqs"><span class="mcqsi">📝</span><div class="mcqst" data-i18n="mq_title">Chemistry MCQ Exam</div><div class="mcqss" data-i18n="mq_sub">Organic Chemistry · Class 9–12</div>
<div class="irow"><div class="ic"><span class="ici">❓</span><span class="icv">30</span><span class="icl">Questions</span></div><div class="ic"><span class="ici">⏱️</span><span class="icv">20</span><span class="icl">Minutes</span></div><div class="ic"><span class="ici">🏆</span><span class="icv">30</span><span class="icl">Marks</span></div><div class="ic"><span class="ici">📚</span><span class="icv">268</span><span class="icl">Bank</span></div></div>
<button class="stbtn" data-i18n="mq_start" onclick="startExam()">🚀 Start Exam</button></div></div>
<div id="mqexam">
  <div class="exbar"><span class="epl" id="epl">0 / 30</span><div class="epw"><div class="epf" id="epf" style="width:0%"></div></div><div id="timer">20:00</div><button class="fnbtn" onclick="finishExam()">✔ Finish</button></div>
  <div id="ql" class="ql"></div>
  <div style="text-align:center;padding:1.4rem 0"><button class="fnbtn" style="font-size:1rem;padding:.7rem 2rem" onclick="finishExam()">✔ Submit &amp; Finish</button></div>
</div>
<div id="mqres">
  <div class="rher"><span class="ri" id="ri">🎉</span><div class="sring" id="sr"><span class="sn" id="sn">0</span><span class="sof">/ 30</span></div><div class="rg" id="rg">—</div><div class="rm" id="rm">—</div>
  <div class="rchips"><span class="chip c1" id="ch1">✓ 0</span><span class="chip c2" id="ch2">✗ 0</span><span class="chip c3" id="ch3">— 0</span><span class="chip c4" id="ch4">⏱ 0:00</span></div>
  <div class="ract"><button class="ra ra1" data-i18n="mq_review" onclick="showRev()">📖 See Answers &amp; Explanations</button><button class="ra ra2" data-i18n="mq_retake" onclick="retake()">🔄 Retake</button></div></div>
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
  // ══════════════════════════════════════════════
  //  ⏱️  FLASHCARD PANEL
  // ══════════════════════════════════════════════
  const FC_CARDS = [
    {topic:'Alkane',q:'General formula of Alkane?',a:'CₙH₂ₙ₊₂',hint:'Saturated — only C–C single bonds'},
    {topic:'Alkane',q:'What is Methane?',a:'CH₄ — 1-carbon alkane, main component of natural gas',hint:'Simplest organic compound'},
    {topic:'Alkane',q:'What is Ethane?',a:'C₂H₆ — CH₃–CH₃',hint:'2 carbons, all single bonds'},
    {topic:'Alkane',q:'What is Propane?',a:'C₃H₈ — CH₃–CH₂–CH₃',hint:'LPG component'},
    {topic:'Alkane',q:'What is Butane?',a:'C₄H₁₀ — CH₃CH₂CH₂CH₃',hint:'Lighter fuel gas'},
    {topic:'Alkane',q:'What is Octane?',a:'C₈H₁₈ — CH₃(CH₂)₆CH₃',hint:'Petrol — octane rating'},
    {topic:'Alkane',q:'Decarboxylation rule?',a:'Product alkane = salt carbons − 1',hint:'NaOH + CaO + heat'},
    {topic:'Alkane',q:'Catalyst for CO₂ + H₂ → Methane?',a:'Ni at 250°C',hint:'CO₂ always gives 1C = Methane only'},
    {topic:'Alkene',q:'General formula of Alkene?',a:'CₙH₂ₙ',hint:'One C=C double bond — unsaturated'},
    {topic:'Alkene',q:'What is Ethene?',a:'C₂H₄ — CH₂=CH₂',hint:'Ethylene — monomer of Polythene'},
    {topic:'Alkene',q:'What is Propene?',a:'C₃H₆ — CH₂=CH–CH₃',hint:'Propylene — 3 carbons with C=C'},
    {topic:'Alkene',q:'Dehydration of Ethanol gives?',a:'CH₂=CH₂ (Ethene) + H₂O',hint:'Conc. H₂SO₄, heat'},
    {topic:'Alkene',q:'Bromine water + Alkene gives?',a:'Decolourisation — red-brown → colourless',hint:'Addition across C=C'},
    {topic:'Alkene',q:'Polythene conditions?',a:'1000 atm, 200°C, trace O₂',hint:'Addition polymerisation of ethene'},
    {topic:'Alkyne',q:'General formula of Alkyne?',a:'CₙH₂ₙ₋₂',hint:'One C≡C triple bond'},
    {topic:'Alkyne',q:'What is Ethyne?',a:'C₂H₂ — CH≡CH',hint:'Acetylene — welding gas'},
    {topic:'Alkyne',q:'CaC₂ + 2H₂O gives?',a:'CH≡CH (Ethyne) + Ca(OH)₂',hint:'Room temperature — no heat needed'},
    {topic:'Alkyne',q:'Ethyne + H₂O (HgSO₄, 80°C) gives?',a:'CH₃–CHO (Ethanal)',hint:'Hydration of alkyne → aldehyde'},
    {topic:'Alkyne',q:'How many mol H₂ to convert alkyne → alkane?',a:'2 mol H₂ (Ni, 180–200°C)',hint:'Triple bond has 2 weak π bonds'},
    {topic:'Alkyne',q:'What is But-2-yne?',a:'CH₃–C≡C–CH₃',hint:'Triple bond between C2 and C3'},
    {topic:'Alcohol',q:'Functional group of Alcohol?',a:'–OH (hydroxyl group)',hint:'CₙH₂ₙ₊₁OH'},
    {topic:'Alcohol',q:'What is Ethanol?',a:'CH₃–CH₂–OH (C₂H₅OH)',hint:'Rectified spirit = 96% aqueous ethanol'},
    {topic:'Alcohol',q:'Alcohol + mild oxidation gives?',a:'Aldehyde (K₂Cr₂O₇/H₂SO₄ controlled)',hint:'Must stop here — excess gives acid!'},
    {topic:'Alcohol',q:'Alcohol + strong oxidation (excess) gives?',a:'Fatty acid (carboxylic acid)',hint:'Goes all the way: Alcohol → Aldehyde → Acid'},
    {topic:'Alcohol',q:'Alkene + H₂O (H₃PO₄, 300°C, 60 atm) gives?',a:'Alcohol (hydration)',hint:'Adding water across C=C'},
    {topic:'Aldehyde',q:'Functional group of Aldehyde?',a:'–CHO (terminal carbonyl group)',hint:'CₙH₂ₙ₊₁CHO'},
    {topic:'Aldehyde',q:'What is Methanal?',a:'HCHO — Formaldehyde',hint:'Formalin = 40% aqueous solution'},
    {topic:'Aldehyde',q:'What is Ethanal?',a:'CH₃CHO — Acetaldehyde',hint:'2-carbon aldehyde'},
    {topic:'Aldehyde',q:'Aldehyde + H₂ (Ni, 180°C) gives?',a:'Alcohol (reduction)',hint:'Adding H₂ across C=O'},
    {topic:'Aldehyde',q:'Aldehyde + [O] gives?',a:'Fatty acid (oxidation)',hint:'K₂Cr₂O₇/H₂SO₄'},
    {topic:'Fatty Acid',q:'Functional group of Fatty Acid?',a:'–COOH (carboxyl group)',hint:'CₙH₂ₙ₊₁COOH'},
    {topic:'Fatty Acid',q:'What is Ethanoic acid?',a:'CH₃COOH — Acetic acid',hint:'Vinegar = 4–10% aqueous solution'},
    {topic:'Fatty Acid',q:'Fatty acids are strong or weak acids?',a:'Weak acids — partially dissociate',hint:'Turns blue litmus red'},
    {topic:'Fatty Acid',q:'What is Methanoic acid?',a:'HCOOH — Formic acid',hint:'Found in red ant sting (formicus)'},
    {topic:'Fatty Acid',q:'Strong reduction of fatty acid with LiAlH₄ gives?',a:'Alcohol',hint:'CH₃COOH + 4[H] → CH₃CH₂OH + H₂O'},
    {topic:'Polymer',q:'What is polymerisation?',a:'Joining many monomers to form a large polymer',hint:'Mono = one, poly = many'},
    {topic:'Polymer',q:'Monomer of Polythene?',a:'Ethene (CH₂=CH₂)',hint:'Addition polymerisation'},
    {topic:'Polymer',q:'Monomer of PVC?',a:'Vinyl chloride (CH₂=CHCl)',hint:'1-chloroethene'},
    {topic:'Polymer',q:'Nylon 6:6 monomers?',a:'Adipic acid + Hexamethylenediamine',hint:'Condensation polymerisation'},
    {topic:'Polymer',q:'Monomer of natural rubber?',a:'Isoprene (2-methylbuta-1,3-diene)',hint:'Natural addition polymer from latex'},
    {topic:'Polymer',q:'Protein is a polymer of?',a:'Amino acids (condensation polymer)',hint:'Peptide bonds join the amino acids'},
    {topic:'Mixed',q:'What is Vinegar?',a:'4–10% aqueous solution of Ethanoic acid',hint:'Used as food preservative'},
    {topic:'Mixed',q:'What is Formalin?',a:'40% aqueous solution of Methanal',hint:'Used to preserve biological specimens'},
    {topic:'Mixed',q:'What is Rectified Spirit?',a:'96% aqueous Ethanol solution',hint:'From fermentation of starch/sugar'},
    {topic:'Mixed',q:'Catenation means?',a:'Carbon bonding with other carbon atoms',hint:'Allows chains, rings and branches — millions of compounds'},
    {topic:'Mixed',q:'Homologous series members differ by?',a:'–CH₂– unit (mass difference = 14)',hint:'Same functional group, same chemical properties'},
    {topic:'Mixed',q:'What is Acetylene?',a:'Common name for Ethyne (CH≡CH)',hint:'Used in welding — burns at ~3000°C'},
    {topic:'Mixed',q:'Lactic acid is found in?',a:'Curd (yoghurt)',hint:'2-hydroxypropanoic acid'},
    {topic:'Mixed',q:'Citric acid is found in?',a:'Lemon juice',hint:'Gives lemons their sour taste'},
    {topic:'Mixed',q:'KMnO₄ decolourises when added to?',a:'Unsaturated compounds (alkene/alkyne)',hint:'Pink → colourless proves C=C or C≡C'},
    // ── NEW CARDS FROM EV CHEMISTRY CH.2 ──
    {topic:'Theory',q:'Who is the Father of Organic Chemistry?',a:'Friedrich Wöhler — synthesised urea (1828) from inorganic ammonium cyanate',hint:'Disproving vital force theory'},
    {topic:'Theory',q:'What is Vital Force Theory?',a:'Berzelius (1815) — organic compounds can ONLY be made by living organisms. Disproved by Wöhler.',hint:'NH₄CNO → Urea proved it wrong'},
    {topic:'Theory',q:'What is Catenation?',a:'Carbon\'s ability to bond with other carbons to form chains and rings. Latin "catena" = chain',hint:'Main reason for 80 lakh+ organic compounds'},
    {topic:'Theory',q:'What are Fullerenes?',a:'3D polymeric allotropes of carbon with 30–70 C atoms. C₆₀ = Buckminsterfullerene ("Bucky Ball")',hint:'Discovered 1985 by Kroto, Smalley, Walton'},
    {topic:'Theory',q:'C₆₀ structure consists of?',a:'12 pentagons + 20 hexagons — looks like a football. All C atoms are sp² hybridised',hint:'Named after architect Buckminster Fuller'},
    {topic:'Theory',q:'3 reasons carbon forms millions of compounds?',a:'1. Catenation  2. Isomerism  3. Polymerisation',hint:'From EV Chemistry Ch.2'},
    {topic:'Theory',q:'What is the first organic compound made in lab?',a:'Urea CO(NH₂)₂ — by Wöhler in 1828 from NH₄CNO',hint:'Found naturally in human urine'},
    {topic:'Theory',q:'Pyridine is which type of compound?',a:'Hetero aromatic — ring contains nitrogen (N) as heteroatom',hint:'NOT benzene — benzene has only C'},
    {topic:'Bonds',q:'Difference between σ and π bond strength?',a:'σ bond is STRONG (head-on overlap). π bond is WEAK (sideways overlap). π breaks easily in addition reactions.',hint:'C=C has 1σ + 1π'},
    {topic:'Bonds',q:'Why can\'t atoms rotate around C=C?',a:'Because the π bond prevents free rotation — atoms are fixed. This causes cis/trans isomerism.',hint:'σ allows rotation, π does NOT'},
    {topic:'Bonds',q:'Bond angles: sp³, sp², sp hybridisation?',a:'sp³ = 109.5° (tetrahedral) | sp² = 120° (trigonal planar) | sp = 180° (linear)',hint:'Methane, ethene, ethyne respectively'},
    {topic:'Bonds',q:'σ and π bonds in ethyne CH≡CH?',a:'3 σ bonds (2 C–H + 1 C–C) + 2 π bonds. Total = 3σ + 2π',hint:'Triple bond = 1σ + 2π'},
    {topic:'Isomers',q:'Definition of isomerism?',a:'Same molecular formula but different structural formulae. Compounds are called isomers.',hint:'e.g. C₂H₆O = ethanol OR dimethyl ether'},
    {topic:'Isomers',q:'2 isomers of C₂H₆O?',a:'Ethanol CH₃CH₂OH (alcohol) and Dimethyl ether CH₃OCH₃',hint:'Same formula — different functional groups'},
    {topic:'Isomers',q:'Number of optical isomers formula?',a:'2ⁿ where n = number of asymmetric (chiral) carbon atoms',hint:'1 asymmetric C → 2 optical isomers'},
    {topic:'Isomers',q:'ortho, meta, para positions in benzene?',a:'ortho = position 2/6 (nearer) | meta = position 3/5 (alternate) | para = position 4 (far away)',hint:'Disubstituted benzene has 3 isomers'},
    {topic:'Arenes',q:'What are arenes?',a:'Aromatic hydrocarbons with one or more six-membered benzenoid rings. Also called arenes.',hint:'Benzene, toluene, naphthalene, anthracene'},
    {topic:'Arenes',q:'Source of aromatic compounds?',a:'Coal tar (destructive distillation of bituminous coal at 900–1100°C in absence of air) and petroleum',hint:'Coal → coal-tar → fractional distillation'},
    {topic:'Arenes',q:'Bromine solution test result?',a:'Red/brown Br₂ solution turns COLOURLESS with unsaturated compounds (alkene/alkyne)',hint:'CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (colourless)'},
    {topic:'Arenes',q:'Bayer\'s KMnO₄ test result?',a:'Pink KMnO₄+KOH solution turns COLOURLESS with alkene/alkyne. Alkanes give NO reaction.',hint:'Both tests confirm unsaturation'},
    // ── ISOMERISM FLASHCARDS (Pages 31–60) ──
    {topic:'Isomers',q:'What is isomerism? (Greek origin)',a:'Same molecular formula, different structural formulae → different properties. Greek: isos=equal, meros=parts',hint:'2 types: Structural + Stereoisomerism'},
    {topic:'Isomers',q:'5 types of structural isomerism?',a:'1. Chain  2. Position  3. Functional group  4. Metamerism  5. Tautomerism',hint:'Chain/Position = same series. Func group/Meta/Tauto = different series possible'},
    {topic:'Isomers',q:'Chain isomerism example?',a:'C₄H₁₀ → n-Butane (CH₃CH₂CH₂CH₃, bp −0.5°C) vs Isobutane ((CH₃)₃CH, bp −10.2°C)',hint:'Branched isomers always have LOWER boiling point'},
    {topic:'Isomers',q:'Position isomerism example?',a:'But-1-ene (CH₂=CHCH₂CH₃, bp −6.5°C) vs But-2-ene (CH₃CH=CHCH₃, bp 1.4°C)',hint:'Same chain, double bond at different position'},
    {topic:'Isomers',q:'Functional group isomerism — C₂H₆O examples?',a:'Ethanol CH₃CH₂OH (liquid, bp 78.3°C, reacts with Na) vs Dimethyl ether CH₃OCH₃ (gas, bp −25°C, no reaction with Na)',hint:'Different homologous series → different physical AND chemical properties'},
    {topic:'Isomers',q:'Metamerism is seen in which compound types?',a:'Ethers, ketones and secondary amines — compounds with DIVALENT functional groups',hint:'Different alkyl groups on the SAME functional group'},
    {topic:'Isomers',q:'What is tautomerism?',a:'Spontaneous interconversion between two forms in dynamic equilibrium. e.g. Propanone (keto) ⇌ Prop-2-en-1-ol (enol)',hint:'Keto-enol tautomerism — a special functional group isomerism'},
    {topic:'Isomers',q:'2 conditions for geometric (cis-trans) isomerism?',a:'1. Substituted alkene: abC=Cab or abC=Cad  2. Substituted cyclic alkane',hint:'Must have DIFFERENT groups on both carbons of C=C'},
    {topic:'Isomers',q:'cis vs trans — which is more stable?',a:'trans isomer is MORE stable (lower internal energy, higher mp). cis has more internal energy → more heat of combustion.',hint:'trans is symmetric → molecules pack better'},
    {topic:'Isomers',q:'Why does maleic acid form anhydride but fumaric acid does not?',a:'Maleic acid is cis — both –COOH groups on SAME side, close enough to react. Fumaric acid is trans — groups too far apart.',hint:'cis-butene-dioic acid (mp 135°C) → anhydride at 160°C'},
    {topic:'Isomers',q:'Vision and geometric isomerism?',a:'Light converts cis-retinal → trans-retinal (breaks C11-C12 π bond), causing protein shape change → electrical signal to brain → vision!',hint:'Retinal is a 20-C aldehyde from Vitamin A'},
    {topic:'Isomers',q:'3 conditions for optical isomerism?',a:'1. Asymmetric/chiral carbon (4 different groups, marked *)  2. Configurations are mirror images  3. Mirror images are non-superimposable',hint:'Like left and right hands — mirror images but cannot superimpose'},
    {topic:'Isomers',q:'What are enantiomers?',a:'Non-superimposable mirror image optical isomers that rotate polarised light equally but in opposite directions. Also called enantiomorphs/antipodes.',hint:'d-lactic acid +2.24° and l-lactic acid −2.24° at 25°C'},
    {topic:'Isomers',q:'What is a racemic mixture?',a:'Equimolar mixture of d and l isomers → optically INACTIVE (mutual cancellation). Also called racemates or dl-mixture or (±) mixture.',hint:'Process of forming racemic mixture = racemisation'},
    {topic:'Isomers',q:'What are diastereoisomers?',a:'Two optical isomers with DISSIMILAR chiral centres — NOT mirror images. Differ in physical properties (mp, bp, solubility, density).',hint:'2-bromo-3-chloro butane has 4 optical isomers, 2 are diastereoisomers'},
    {topic:'Isomers',q:'What is a meso isomer?',a:'Compound with TWO SIMILAR chiral centres that has a plane of symmetry → internally compensated → optically INACTIVE despite having chiral carbons',hint:'Tartaric acid: d-tartaric, l-tartaric, and meso-tartaric (3 forms)'},
    {topic:'Isomers',q:'Formula: n dissimilar chiral centres → optical isomers?',a:'Total optical isomers = 2ⁿ. e.g. Lactic acid n=1 → 2¹=2; 2-bromo-3-chlorobutane n=2 → 2²=4',hint:'n = number of DISSIMILAR asymmetric carbon atoms'},
    {topic:'Isomers',q:'Formula: n SIMILAR chiral centres?',a:'Optical isomers = 2ⁿ⁻¹ ; Meso isomers = 2^((n−2)/2) where n is even',hint:'Tartaric acid n=2: optical = 2¹=2; meso = 2⁰=1'},
    {topic:'Naming',q:'Priority order: top 6 functional groups in IUPAC naming?',a:'1.–COOH  2.–SO₃H  3.–COX  4.–CONH₂  5.–CN  6.–CHO  (then: >C=O, –OH, –NH₂, C=C, C≡C, C–C)',hint:'IUPAC Table 2.8 — highest priority gets lowest locant and suffix'},
    {topic:'Naming',q:'IUPAC naming strategy — what is the first step?',a:'Step 1: Select the LONGEST carbon chain. Step 2: Number from end nearest the principal functional group. Step 3: Name substituents alphabetically.',hint:'Lowest locant rule always applies'},
    // ── ARENES FLASHCARDS (Pages 48–60) ──
    {topic:'Arenes',q:'What does "aromatic" mean and where does the word come from?',a:'Greek "aroma" = sweet smell. Early chemists found sweet-smelling compounds had different properties from aliphatic ones. Benzene is the prime aromatic compound.',hint:'Benzene derivatives and (4n+2) π electron cyclic compounds'},
    {topic:'Arenes',q:'Benzene C–C bond length = 0.139 nm. Why is it unique?',a:'It is between single bond (0.154 nm) and double bond (0.134 nm). Due to resonance — 6 delocalised π electrons spread equally over all 6 C–C bonds.',hint:'sp² hybridised, flat hexagonal ring'},
    {topic:'Arenes',q:'How many π electrons does benzene have and what is n in Hückel rule?',a:'Benzene has 6 π electrons. In (4n+2): n=1, so (4×1)+2=6 ✅. This satisfies Hückel aromaticity rule.',hint:'3 double bonds × 2e each = 6 π electrons'},
    {topic:'Arenes',q:'3 Hückel rules for aromaticity?',a:'1. Flat (coplanar) cyclic structure (5 or 6 membered)\n2. Every ring atom has p-orbital, must have (4n+2) π electrons\n3. In 5-membered heterocycles, lone pair of N/O/S counts toward π electrons',hint:'Eric Hückel proposed this in 1931'},
    {topic:'Arenes',q:'Why does benzene NOT decolourise Br₂/CCl₄ or KMnO₄?',a:'Benzene\'s delocalised π electrons are too stable (resonance energy) to be attacked by ordinary reagents. Benzene undergoes substitution, not addition like alkenes.',hint:'Benzene unsaturation ≠ alkene/alkyne unsaturation'},
    {topic:'Arenes',q:'4 electrophilic substitution reactions of benzene?',a:'1. Halogenation (AlCl₃, no light) → chlorobenzene\n2. Nitration (conc. HNO₃ + conc. H₂SO₄, 60°C) → nitrobenzene\n3. Sulphonation (fuming H₂SO₄, 100°C) → benzene sulphonic acid\n4. Friedel-Craft (anhydrous AlCl₃) → toluene/acetophenone',hint:'All are electrophilic substitution — electrophile attacks π cloud'},
    {topic:'Arenes',q:'Friedel-Craft alkylation vs acylation?',a:'Alkylation: C₆H₆ + CH₃Cl + AlCl₃ → toluene + HCl (electrophile = ⁺CH₃)\nAcylation: C₆H₆ + CH₃COCl + AlCl₃ → acetophenone + HCl (electrophile = CH₃C⁺=O)',hint:'Why DRY AlCl₃? Moisture destroys it: AlCl₃+3H₂O→Al(OH)₃+3HCl'},
    {topic:'Arenes',q:'5 methods to prepare benzene?',a:'1. Sodium benzoate + sodalime (decarboxylation)\n2. Phenol + Zn (reduction)\n3. 3 HC≡CH, Fe, 450°C (trimerisation — benzene is polymer of ethyne!)\n4. Grignard reagent + H₂O\n5. Benzene diazonium chloride + H₃PO₂ (Cu⁺)',hint:'Method 3 is most important: 3HC≡CH→C₆H₆'},
    {topic:'Arenes',q:'Wurtz-Fitting reaction for toluene?',a:'C₆H₅Cl + 2Na + CH₃Cl → dry ether, Δ → C₆H₅CH₃ (toluene) + 2NaCl\nAryl halide + alkyl halide + Na metal in dry ether → alkyl arene',hint:'Extends Wurtz reaction to aryl halides'},
    {topic:'Arenes',q:'Coal tar distillates — 5 fractions with temperature?',a:'1. Light oil (≤170°C, 5%) — benzene, toluene\n2. Middle oil (171–230°C, 7.5%) — phenol, naphthalene\n3. Heavy oil (231–270°C, 10%) — cresols, naphthalene\n4. Anthracene oil (271–400°C, 20%) — anthracene\n5. Pitch (residue, 57.5%) — coke carbons',hint:'Destructive distillation at 900–1100°C, no air'},
    {topic:'Arenes',q:'How is chemically pure benzene obtained from light oil?',a:'1. Remove basic compounds (conc. H₂SO₄)\n2. Remove acidic phenols (10% NaOH)\n3. Distil 70–110°C → 90% benzol\n4. Distil 80–82°C → 99% pure benzene\n5. Cool at 5.4°C + cold conc. H₂SO₄ (removes thiophene) → distil 80.4°C → pure benzene',hint:'90% benzol = 84% benzene + 13% toluene + 3% xylene'},
    {topic:'Isomers',q:'C₃H₈O isomers (alcohol/ether types)?',a:'3 isomers: propan-1-ol (CH₃CH₂CH₂OH), propan-2-ol (CH₃CHOHCH₃), methoxy ethane (CH₃OCH₂CH₃)',hint:'CₙH₂ₙ₊₂O formula = alcohol or ether'},
    {topic:'Isomers',q:'C₃H₆O isomers (aldehyde/ketone/alkenol)?',a:'3 isomers: propanal CH₃CH₂CHO (bp 48.8°C), propanone CH₃COCH₃ (bp 56°C), allyl alcohol CH₂=CHCH₂OH (bp 97°C)',hint:'CₙH₂ₙO formula = aldehyde, ketone, or alken-ol'},
    // ── REACTIONS FLASHCARDS (Pages 61–90) ──
    {topic:'Reactions',q:'3 classes of attacking reagents?',a:'1. Free radical (•R) — homolysis, unpaired electron, heat/hν\n2. Electrophile (E⁺ or E) — electron-poor, attacks π electrons\n3. Nucleophile (:Nu⁻ or :Nu) — electron-rich, attacks δ+ carbon',hint:'Homolysis → radical; Heterolysis → electrophile + nucleophile'},
    {topic:'Reactions',q:'Carbocation vs Carbanion stability?',a:'Carbocation: 3° > 2° > 1° > ⁺CH₃ (more alkyl = more stable)\nCarbanion: :CH₃ > 1° > 2° > 3° (OPPOSITE — more alkyl = less stable)',hint:'Carbocations are electrophiles; carbanions are nucleophiles'},
    {topic:'Reactions',q:'Markovnikov\'s Rule — state it clearly?',a:'In unsymmetrical alkene + unsymmetrical reagent:\nH⁺ (positive part) adds to C with MORE H atoms\nNegative part adds to C with LESS H atoms\nReason: more stable 2°/3° carbocation forms preferentially',hint:'Propene + HBr → 90% 2-bromopropane (Markovnikov product)'},
    {topic:'Reactions',q:'Anti-Markovnikov (Kharasch) effect?',a:'In presence of organic peroxide (R-O-O-R), HBr adds OPPOSITE to Markovnikov:\nBr adds to C with MORE H (free radical mechanism)\nOnly works with HBr — NOT HCl or HI!\nPropene + HBr + peroxide → 99.1% 1-bromopropane',hint:'Kharasch discovered this in 1933'},
    {topic:'Reactions',q:'Ozonolysis — purpose and what Zn dust does?',a:'Purpose: determine POSITION of C=C or C≡C in carbon chain\nWith Zn dust → aldehyde/ketone products\nWithout Zn dust → aldehydes oxidised further to carboxylic acids\nButene-1 → propanal + methanal | Butene-2 → 2 ethanal',hint:'O₃ in CCl₄ → ozonide → H₂O/Zn → carbonyl products'},
    {topic:'Reactions',q:'Nucleophilic addition to C=O — why nucleophilic?',a:'O is more electronegative (3.5) than C (2.5). π electrons shift to O → C becomes δ+. Nucleophile (:CN⁻, :OH⁻, :NH₃, RMgX) attacks the δ+ carbon.',hint:'Aldehyde and ketone both undergo nucleophilic addition'},
    {topic:'Reactions',q:'Grignard reagent rule for alcohols?',a:'Methanal (HCHO) + RMgX → 1° alcohol\nOther aldehydes (RCHO) + RMgX → 2° alcohol\nKetone (RCOR) + RMgX → 3° alcohol\nHydrolysis with H₂O needed to get final product',hint:'RMgX = alkyl magnesium halide = Grignard reagent'},
    {topic:'Reactions',q:'Aldol condensation vs Cannizzaro — when does each occur?',a:'Aldol: aldehyde/ketone WITH α-H + dil. NaOH (20-30°C) → β-hydroxy carbonyl (aldol)\nCannizzaro: aldehyde WITHOUT α-H + 50% conc. NaOH → disproportionation (one oxidised, one reduced)',hint:'HCHO and C₆H₅CHO → Cannizzaro (no α-H). CH₃CHO → Aldol (has α-H)'},
    {topic:'Reactions',q:'SN1 vs SN2 — key differences?',a:'SN1: 2 steps, 3° alkyl halide, weak nucleophile, polar solvent, 1st order, no transition complex\nSN2: 1 step, 1° alkyl halide, strong nucleophile, non-polar solvent, 2nd order, transition complex forms',hint:'S = substitution, N = nucleophilic, 1 = uni, 2 = bi'},
    {topic:'Reactions',q:'KOH(aq) vs KOH(alc.) with propyl chloride?',a:'KOH(aq) → weak nucleophile (solvated OH⁻) → SUBSTITUTION → propanol\nKOH(alc.) → strong nucleophile (unsolvated OH⁻) → ELIMINATION → propene + KCl + H₂O',hint:'Same RX, different conditions → different products!'},
    {topic:'Reactions',q:'Saytzeff\'s rule?',a:'When elimination can give more than one alkene, the MORE substituted/branched alkene is the MAJOR product.\n2-butanol → 80% but-2-ene (more substituted) + 20% but-1-ene',hint:'Applies to E2 elimination from secondary/tertiary alkyl halides'},
    {topic:'Reactions',q:'Inductive effect (+I and −I)?',a:'+I (positive): alkyl groups (–CH₃, –C₂H₅) donate electrons toward ring → activating\n−I (negative): electronegative groups (F, Cl, Br, NO₂) withdraw electrons → deactivating\nExample: toluene has +I from –CH₃ → more reactive than benzene',hint:'Sigma bond polarisation along C chain'},
    {topic:'Reactions',q:'Ortho-para directing vs meta directing groups?',a:'Ortho-para (activating): groups with +I or +M effect: –CH₃, –NH₂, –OH, –OCH₃, –Cl\nMeta (deactivating): groups with –M effect: –NO₂, –CHO, –COOH, –CN, –SO₃H\nKey: lone pair donors = ortho-para; C=O or C≡N attached = meta',hint:'Activating groups increase electron density at ortho+para positions'},
    {topic:'Reactions',q:'Toluene reactions — ring vs side chain?',a:'Ring (no light, AlCl₃): Cl₂ → ortho+para chlorotoluene\nRing (30°C): HNO₃+H₂SO₄ → ortho+para nitrotoluene\nSide chain (sunlight/111°C): Cl₂ → benzyl chloride → benzal chloride → benzo chloride\nSide chain (KMnO₄): oxidation → benzoic acid',hint:'AlCl₃/no light = ring. Sunlight/UV = side chain'},
    {topic:'Reactions',q:'Reactivity order of aldehydes and ketones?',a:'Methanal > Ethanal > Propanone\nMore alkyl groups on C=O carbon → more electron density donated → C less δ+ → LESS reactive\nAldehydes more reactive than ketones',hint:'Steric effect also reduces reactivity of ketones'},
    {topic:'Reactions',q:'Aliphatic vs Aromatic — 3 key differences?',a:'1. Br₂/KMnO₄: Aliphatic unsaturated ✅ decolourises; Benzene ❌ does not\n2. Halide: R–X easily hydrolysed; Ar–X needs 300°C, 200 atm\n3. Hydroxy: R–OH neutral (alcohol); Ar–OH acidic (phenol, turns litmus red)',hint:'Sections 2.9 of EV textbook — 7 total differences'},
  ];

  panels['fc'] = `
<div class="ph" style="border-color:#f59e0b;color:#f59e0b"><div class="phi">⏱️</div><div><div class="pht">Flashcard Revision</div><div class="phb"><span class="badge">${FC_CARDS.length} Cards</span><span class="badge">Flip to reveal</span><span class="badge">Filter by topic</span></div><div class="phd">Click a card to flip and reveal the answer. Use the topic filters to focus your revision!</div></div></div>
<div class="fc-wrap">
  <div class="fc-filters" id="fc-filters">
    <button class="fc-filter on" onclick="fcFilter('All',this)">All Topics</button>
    <button class="fc-filter" onclick="fcFilter('Alkane',this)" style="color:var(--ka)">🔥 Alkane</button>
    <button class="fc-filter" onclick="fcFilter('Alkene',this)" style="color:var(--ke)">🌿 Alkene</button>
    <button class="fc-filter" onclick="fcFilter('Alkyne',this)" style="color:var(--ky)">⚡ Alkyne</button>
    <button class="fc-filter" onclick="fcFilter('Alcohol',this)" style="color:var(--al)">🧪 Alcohol</button>
    <button class="fc-filter" onclick="fcFilter('Aldehyde',this)" style="color:var(--ad)">✨ Aldehyde</button>
    <button class="fc-filter" onclick="fcFilter('Fatty Acid',this)" style="color:var(--ac)">🧬 Fatty Acid</button>
    <button class="fc-filter" onclick="fcFilter('Polymer',this)" style="color:#a78bfa">🔗 Polymer</button>
    <button class="fc-filter" onclick="fcFilter('Theory',this)" style="color:#60a5fa">📖 Theory</button>
    <button class="fc-filter" onclick="fcFilter('Bonds',this)" style="color:#c084fc">🔗 Bonds</button>
    <button class="fc-filter" onclick="fcFilter('Isomers',this)" style="color:#2dd4bf">🔄 Isomers</button>
    <button class="fc-filter" onclick="fcFilter('Arenes',this)" style="color:#a78bfa">💎 Arenes</button>
    <button class="fc-filter" onclick="fcFilter('Reactions',this)" style="color:#22d3ee">⚗️ Reactions</button>
    <button class="fc-filter" onclick="fcFilter('Mixed',this)" style="color:#94a3b8">🔬 Mixed</button>
  </div>
  <div class="fc-progress"><div class="fc-bar"><div class="fc-fill" id="fc-fill" style="width:0%"></div></div><div class="fc-count" id="fc-count">1 / ${FC_CARDS.length}</div></div>
  <div class="fc-card" id="fc-card" onclick="fcFlip()">
    <div class="fc-inner" id="fc-inner">
      <div class="fc-front"><div class="fc-label" style="color:#f59e0b" data-i18n="fc_front">Question — click to flip</div><div class="fc-question" id="fc-q">Loading...</div><div class="fc-hint" id="fc-hint"></div></div>
      <div class="fc-back"><div class="fc-label" style="color:#818cf8" data-i18n="fc_back">Answer</div><div class="fc-answer" id="fc-a">Loading...</div></div>
    </div>
  </div>
  <div class="fc-actions">
    <button class="fc-btn fc-prev" data-i18n="fc_prev" onclick="fcNav(-1)">◀ Prev</button>
    <button class="fc-btn fc-flip" data-i18n="fc_flip" onclick="fcFlip()">🔄 Flip</button>
    <button class="fc-btn fc-next" data-i18n="fc_next" onclick="fcNav(1)">Next ▶</button>
    <button class="fc-btn fc-shuffle" data-i18n="fc_shuffle" onclick="fcShuffle()">🔀 Shuffle</button>
  </div>
</div>`;

  // ══════════════════════════════════════════════
  //  🧮  MOLECULAR WEIGHT CALCULATOR PANEL
  // ══════════════════════════════════════════════
  panels['mw'] = `
<div class="ph" style="border-color:#8b5cf6;color:#8b5cf6"><div class="phi">🧮</div><div><div class="pht">Molecular Weight Calculator</div><div class="phb"><span class="badge">Type any formula</span><span class="badge">Instant result</span><span class="badge">Full breakdown</span></div><div class="phd">Type a chemical formula like <strong>C₂H₅OH</strong> or <strong>CH3COOH</strong> to instantly calculate the molecular weight with a full atom-by-atom breakdown.</div></div></div>
<div class="mw-wrap">
  <div style="font-size:.78rem;color:#6b7280;margin-bottom:.6rem;font-weight:700">QUICK EXAMPLES:</div>
  <div class="mw-presets">
    ${['CH4','C2H6','C3H8','C2H4','C2H2','CH3OH','C2H5OH','CH3COOH','C6H6','C6H12O6'].map(f=>`<button class="mw-preset" onclick="mwSetFormula('${f}')">${f}</button>`).join('')}
  </div>
  <div class="mw-input-row">
    <input class="mw-input" id="mw-input" type="text" placeholder="e.g. C2H5OH or CH3COOH or C6H12O6" autocomplete="off" onkeydown="if(event.key==='Enter')mwCalc()"/>
    <button class="mw-btn" onclick="mwCalc()">Calculate</button>
  </div>
  <div id="mw-result"></div>
</div>`;

  // ══════════════════════════════════════════════
  //  📝  CHAPTER NOTES PANEL
  // ══════════════════════════════════════════════
  panels['nt'] = `
<div class="ph" style="border-color:#0891b2;color:#0891b2"><div class="phi">📝</div><div><div class="pht">Chapter Notes & Summary Cards</div><div class="phb"><span class="badge">Key Definitions</span><span class="badge">All Formulas</span><span class="badge">Exam Tips</span></div><div class="phd">Complete chapter summary — everything you need to know for your exam in one place.</div></div></div>
<div class="nt-wrap">
  <div class="nt-tabs">
    <button class="nt-tab on" style="color:var(--ka)" onclick="ntTab(this,'nt-general')">📌 Key Facts</button>
    <button class="nt-tab" style="color:var(--ke)" onclick="ntTab(this,'nt-formulas')">📐 Formulas</button>
    <button class="nt-tab" style="color:var(--ky)" onclick="ntTab(this,'nt-reactions')">⚗️ Reactions</button>
    <button class="nt-tab" style="color:#fb923c" onclick="ntTab(this,'nt-petroleum')">⛽ Petroleum</button>
    <button class="nt-tab" style="color:#a78bfa" onclick="ntTab(this,'nt-polymers')">🔗 Polymers</button>
    <button class="nt-tab" style="color:#f87171" onclick="ntTab(this,'nt-tips')">🏆 Exam Tips</button>
  </div>

  <!-- KEY FACTS -->
  <div id="nt-general" class="nt-pane on">
    <div class="note-card"><div class="note-card-head" style="border-color:var(--ka)"><span class="note-card-icon">🔬</span><span class="note-card-title" style="color:var(--ka)">What is Organic Chemistry?</span></div><div class="note-card-body">Organic chemistry studies <strong>hydrocarbons and their derivatives</strong>. A hydrocarbon contains <strong>only C and H</strong>. Carbon has valency 4 and shows <strong>catenation</strong> — bonding with other carbons to form chains, rings and branches.</div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🔗</span><span class="note-card-title" style="color:#818cf8">Types of Hydrocarbons</span></div><div class="note-card-body"><table class="note-table"><tr><th>Type</th><th>Bond</th><th>Formula</th><th>Example</th></tr><tr><td>Alkane</td><td>C–C only</td><td>CₙH₂ₙ₊₂</td><td>Methane CH₄</td></tr><tr><td>Alkene</td><td>C=C</td><td>CₙH₂ₙ</td><td>Ethene C₂H₄</td></tr><tr><td>Alkyne</td><td>C≡C</td><td>CₙH₂ₙ₋₂</td><td>Ethyne C₂H₂</td></tr><tr><td>Cycloalkane</td><td>C–C ring</td><td>CₙH₂ₙ</td><td>Cyclohexane</td></tr></table></div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🏷️</span><span class="note-card-title" style="color:#fbbf24">Functional Groups</span></div><div class="note-card-body"><table class="note-table"><tr><th>Compound</th><th>Group</th><th>Formula</th></tr><tr><td>Alcohol</td><td>–OH</td><td>CₙH₂ₙ₊₁OH</td></tr><tr><td>Aldehyde</td><td>–CHO</td><td>CₙH₂ₙ₊₁CHO</td></tr><tr><td>Fatty Acid</td><td>–COOH</td><td>CₙH₂ₙ₊₁COOH</td></tr></table></div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">⭐</span><span class="note-card-title" style="color:#f472b6">Important Concentrations</span></div><div class="note-card-body"><strong>Formalin</strong> = 40% aqueous Methanal (formaldehyde) — preserves specimens<br><strong>Vinegar</strong> = 4–10% aqueous Ethanoic acid — food preservative<br><strong>Rectified Spirit</strong> = 96% aqueous Ethanol — from fermentation<br><strong>Acetylene</strong> = Common name for Ethyne — welding gas</div></div>
  </div>

  <!-- FORMULAS -->
  <div id="nt-formulas" class="nt-pane">
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">📐</span><span class="note-card-title" style="color:#818cf8">IUPAC Naming — SPWPS Rule</span></div><div class="note-card-body"><strong>S</strong>econdary Prefix + <strong>P</strong>rimary Prefix (cyclo) + <strong>W</strong>ord Root + <strong>P</strong>rimary Suffix (-ane/-ene/-yne) + <strong>S</strong>econdary Suffix (-ol/-al/-oic acid)<br><br><strong>Word Roots:</strong> meth(1), eth(2), prop(3), but(4), pent(5), hex(6), hept(7), oct(8), non(9), dec(10)</div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🔢</span><span class="note-card-title" style="color:#fde68a">Alkane Names & Formulas</span></div><div class="note-card-body"><table class="note-table"><tr><th>Name</th><th>Formula</th><th>Carbons</th></tr><tr><td>Methane</td><td>CH₄</td><td>1</td></tr><tr><td>Ethane</td><td>C₂H₆</td><td>2</td></tr><tr><td>Propane</td><td>C₃H₈</td><td>3</td></tr><tr><td>Butane</td><td>C₄H₁₀</td><td>4</td></tr><tr><td>Pentane</td><td>C₅H₁₂</td><td>5</td></tr><tr><td>Hexane</td><td>C₆H₁₄</td><td>6</td></tr><tr><td>Heptane</td><td>C₇H₁₆</td><td>7</td></tr><tr><td>Octane</td><td>C₈H₁₈</td><td>8</td></tr><tr><td>Nonane</td><td>C₉H₂₀</td><td>9</td></tr><tr><td>Decane</td><td>C₁₀H₂₂</td><td>10</td></tr></table></div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">⚗️</span><span class="note-card-title" style="color:#6ee7b7">Common Acids Found in Nature</span></div><div class="note-card-body"><table class="note-table"><tr><th>Acid</th><th>Source</th><th>IUPAC Name</th></tr><tr><td>Formic acid</td><td>Red ant</td><td>Methanoic acid</td></tr><tr><td>Acetic acid</td><td>Vinegar</td><td>Ethanoic acid</td></tr><tr><td>Lactic acid</td><td>Curd</td><td>2-Hydroxypropanoic acid</td></tr><tr><td>Citric acid</td><td>Lemon</td><td>2-Hydroxypropane-1,2,3-tricarboxylic acid</td></tr><tr><td>Tartaric acid</td><td>Tamarind</td><td>2,3-Dihydroxybutanedioic acid</td></tr><tr><td>Malic acid</td><td>Apple</td><td>2-Hydroxybutanedioic acid</td></tr><tr><td>Butyric acid</td><td>Rancid butter</td><td>Butanoic acid</td></tr></table></div></div>
  </div>

  <!-- REACTIONS -->
  <div id="nt-reactions" class="nt-pane">
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">⚡</span><span class="note-card-title" style="color:#c084fc">Making Alkyne — 2 Methods</span></div><div class="note-card-body"><strong>Method 1 (Lab):</strong> CaC₂ + 2H₂O → CH≡CH + Ca(OH)₂ — room temperature, always gives Ethyne only<br><strong>Method 2:</strong> Vicinal dihalide + 2NaOH (alcoholic, heat) → Alkyne + 2NaBr + 2H₂O</div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🌿</span><span class="note-card-title" style="color:var(--ke)">Making Alkene — 2 Methods</span></div><div class="note-card-body"><strong>Method 1:</strong> Alkyl chloride + NaOH (aq., heat) → Alkene + NaCl + H₂O<br><strong>Method 2 (Dehydration):</strong> Alcohol + conc. H₂SO₄ + heat → Alkene + H₂O</div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🧪</span><span class="note-card-title" style="color:var(--al)">Making Alcohol — 2 Methods</span></div><div class="note-card-body"><strong>Method 1:</strong> Alkyl bromide + NaOH (aq., heat) → Alcohol + NaBr<br><strong>Method 2 (Hydration):</strong> Alkene + H₂O → Alcohol (H₃PO₄, 300°C, 60 atm)</div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">✨</span><span class="note-card-title" style="color:var(--ad)">Making Aldehyde — 2 Methods</span></div><div class="note-card-body"><strong>Method 1:</strong> Alkyne + H₂O → Aldehyde (20% H₂SO₄, 2% HgSO₄, 80°C)<br><strong>Method 2 (Mild oxidation):</strong> Alcohol + [O] → Aldehyde (K₂Cr₂O₇/H₂SO₄, controlled) ⚠️ Stop here!</div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🧬</span><span class="note-card-title" style="color:var(--ac)">Making Fatty Acid — 2 Methods</span></div><div class="note-card-body"><strong>Method 1:</strong> Aldehyde + [O] → Fatty acid (K₂Cr₂O₇ + H₂SO₄)<br><strong>Method 2 (Strong oxidation):</strong> Alcohol + 2[O] → Fatty acid (K₂Cr₂O₇/H₂SO₄ excess) — goes all the way</div></div>
  </div>

  <!-- PETROLEUM -->
  <div id="nt-petroleum" class="nt-pane">
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">⛽</span><span class="note-card-title" style="color:#fb923c">Petroleum Fractions</span></div><div class="note-card-body"><table class="note-table"><tr><th>Fraction</th><th>Carbons</th><th>Boiling Pt</th><th>Use</th></tr><tr><td>Refinery gas / LPG</td><td>1–4</td><td>0–20°C</td><td>Cooking fuel</td></tr><tr><td>Petrol (gasoline)</td><td>5–10</td><td>21–70°C</td><td>Car fuel</td></tr><tr><td>Naphtha</td><td>5–10</td><td>71–120°C</td><td>Solvents</td></tr><tr><td>Kerosene</td><td>11–16</td><td>121–170°C</td><td>Jet fuel</td></tr><tr><td>Diesel</td><td>17–20</td><td>171–270°C</td><td>Diesel engines</td></tr><tr><td>Lubricating oil</td><td>20–30</td><td>270–340°C</td><td>Engine lubricant</td></tr><tr><td>Bitumen (pitch)</td><td>>30</td><td>>340°C</td><td>Road construction</td></tr></table></div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🌍</span><span class="note-card-title" style="color:#fbbf24">Fossil Fuels</span></div><div class="note-card-body"><strong>Three fossil fuels:</strong> Coal (from land plants), Petroleum (from marine organisms), Natural Gas (mainly methane 93–98%)<br><br><strong>Bangladesh natural gas:</strong> 93–98% Methane (CH₄)<br><strong>Combustion products:</strong> CO₂ + H₂O + heat (complete) or CO + H₂O (incomplete)</div></div>
  </div>

  <!-- POLYMERS -->
  <div id="nt-polymers" class="nt-pane">
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🔗</span><span class="note-card-title" style="color:#a78bfa">Types of Polymerisation</span></div><div class="note-card-body"><strong>Addition polymerisation:</strong> Monomers with C=C join — no atoms lost. e.g. Polythene, PVC, Polypropene<br><strong>Condensation polymerisation:</strong> Monomers join + small molecule (H₂O) released. e.g. Nylon 6:6, Proteins, Starch</div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">📋</span><span class="note-card-title" style="color:#6ee7b7">Important Polymers</span></div><div class="note-card-body"><table class="note-table"><tr><th>Polymer</th><th>Monomer</th><th>Type</th><th>Use</th></tr><tr><td>Polythene</td><td>Ethene</td><td>Addition</td><td>Plastic bags, bottles</td></tr><tr><td>PVC</td><td>Vinyl chloride</td><td>Addition</td><td>Pipes, flooring</td></tr><tr><td>Polypropene</td><td>Propene</td><td>Addition</td><td>Ropes, containers</td></tr><tr><td>Nylon 6:6</td><td>Adipic acid + Diamine</td><td>Condensation</td><td>Fibres, clothing</td></tr><tr><td>Natural rubber</td><td>Isoprene</td><td>Natural addition</td><td>Tyres, gloves</td></tr><tr><td>Starch</td><td>Glucose</td><td>Natural condensation</td><td>Food energy</td></tr><tr><td>Protein</td><td>Amino acids</td><td>Natural condensation</td><td>Body structure</td></tr></table></div></div>
  </div>

  <!-- EXAM TIPS -->
  <div id="nt-tips" class="nt-pane">
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">🏆</span><span class="note-card-title" style="color:#f87171">Top 10 Exam Tips</span></div><div class="note-card-body">
      <strong>1.</strong> CaC₂ + H₂O always gives <strong>Ethyne only</strong> (2C) — never propyne or butyne<br>
      <strong>2.</strong> Decarboxylation: product alkane = salt carbons <strong>minus 1</strong><br>
      <strong>3.</strong> Bromine water decolourises with <strong>unsaturated</strong> (alkene/alkyne) — not alkanes<br>
      <strong>4.</strong> KMnO₄ (pink) decolourises with <strong>unsaturated</strong> compounds<br>
      <strong>5.</strong> <strong>Mild</strong> oxidation: Alcohol → Aldehyde. <strong>Strong/excess</strong>: Alcohol → Fatty acid<br>
      <strong>6.</strong> Alkyne needs <strong>2 mol H₂</strong> to become alkane (triple bond has 2 π bonds)<br>
      <strong>7.</strong> Vinegar = <strong>4–10%</strong> ethanoic acid. Formalin = <strong>40%</strong> methanal<br>
      <strong>8.</strong> Polythene conditions: <strong>1000 atm, 200°C, trace O₂</strong><br>
      <strong>9.</strong> Nylon 6:6 = <strong>condensation</strong> polymerisation (releases H₂O)<br>
      <strong>10.</strong> General formulas: Alkane CₙH₂ₙ₊₂ | Alkene CₙH₂ₙ | Alkyne CₙH₂ₙ₋₂
    </div></div>
    <div class="note-card"><div class="note-card-head"><span class="note-card-icon">⚠️</span><span class="note-card-title" style="color:#fbbf24">Common Mistakes to Avoid</span></div><div class="note-card-body">
      ❌ Confusing <strong>Aldehyde (–CHO)</strong> with <strong>Ketone (>C=O)</strong> — aldehyde is terminal!<br>
      ❌ Thinking CaC₂ can give propyne — it <strong>only gives Ethyne</strong><br>
      ❌ Forgetting that fatty acids are <strong>weak</strong> (not strong) acids<br>
      ❌ Mixing up <strong>Formalin (40% methanal)</strong> and <strong>Rectified spirit (96% ethanol)</strong><br>
      ❌ Forgetting that <strong>Polythene = addition</strong> but <strong>Nylon = condensation</strong>
    </div></div>
  </div>
</div>`;

  // ══════════════════════════════════════════════
  //  📊  REACTION CHART PANEL
  // ══════════════════════════════════════════════
  panels['rc'] = `
<div class="ph" style="border-color:#be185d;color:#be185d"><div class="phi">📊</div><div><div class="pht">Organic Reaction Chart</div><div class="phb"><span class="badge">All key reactions</span><span class="badge">Conditions shown</span><span class="badge">Visual pathway</span></div><div class="phd">A complete visual map of all organic reactions — compounds, reagents and conditions at a glance.</div></div></div>
<div class="rc-wrap">
  <div style="background:var(--sf);border:2px solid #be185d;border-radius:16px;padding:1.3rem;margin-bottom:1.4rem;text-align:center">
    <div style="font-family:'Fredoka One',cursive;font-size:1rem;color:#f9a8d4;margin-bottom:.8rem">🗺️ MASTER REACTION PATHWAY</div>
    <div style="display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:.4rem;font-family:'Fredoka One',cursive;font-size:.95rem">
      <span style="padding:.4rem .9rem;background:rgba(255,112,67,.15);border:2px solid var(--ka);border-radius:10px;color:var(--ka)">🔥 Alkane</span>
      <span style="color:#374151">⟷</span>
      <span style="padding:.4rem .9rem;background:rgba(0,229,160,.1);border:2px solid var(--ke);border-radius:10px;color:var(--ke)">🌿 Alkene</span>
      <span style="color:#374151">⟷</span>
      <span style="padding:.4rem .9rem;background:rgba(192,132,252,.1);border:2px solid var(--ky);border-radius:10px;color:var(--ky)">⚡ Alkyne</span>
      <span style="color:#374151">⟷</span>
      <span style="padding:.4rem .9rem;background:rgba(56,189,248,.1);border:2px solid var(--al);border-radius:10px;color:var(--al)">🧪 Alcohol</span>
      <span style="color:#374151">→</span>
      <span style="padding:.4rem .9rem;background:rgba(251,191,36,.1);border:2px solid var(--ad);border-radius:10px;color:var(--ad)">✨ Aldehyde</span>
      <span style="color:#374151">→</span>
      <span style="padding:.4rem .9rem;background:rgba(244,114,182,.1);border:2px solid var(--ac);border-radius:10px;color:var(--ac)">🧬 Fatty Acid</span>
    </div>
  </div>

  <div class="rc-section-title" style="background:rgba(255,112,67,.1);color:var(--ka);border:1.5px solid var(--ka)">🔥 Alkane Reactions</div>
  <div class="rc-grid">
    <div class="rc-row" style="border-color:rgba(255,112,67,.3)"><div class="rc-compound"><div class="rc-name" style="color:var(--ka)">Alkene</div><div class="rc-form">CₙH₂ₙ</div></div><div class="rc-arrow-box"><span class="rc-reagent">Ni, 180–200°C</span><span class="rc-arrow">→</span><span class="rc-product">+ H₂</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ka)">Alkane</div><div class="rc-form">CₙH₂ₙ₊₂</div></div></div>
    <div class="rc-row" style="border-color:rgba(255,112,67,.3)"><div class="rc-compound"><div class="rc-name" style="color:var(--ka)">Alkyne</div><div class="rc-form">CₙH₂ₙ₋₂</div></div><div class="rc-arrow-box"><span class="rc-reagent">Ni, 180–200°C</span><span class="rc-arrow">→</span><span class="rc-product">+ 2H₂</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ka)">Alkane</div><div class="rc-form">CₙH₂ₙ₊₂</div></div></div>
    <div class="rc-row" style="border-color:rgba(255,112,67,.3)"><div class="rc-compound"><div class="rc-name" style="color:var(--ka)">Na Salt + NaOH</div><div class="rc-form">RCOONa</div></div><div class="rc-arrow-box"><span class="rc-reagent">CaO (soda lime)</span><span class="rc-arrow">→</span><span class="rc-product">heat</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ka)">Alkane (−1C)</div><div class="rc-form">Decarboxylation</div></div></div>
  </div>

  <div class="rc-section-title" style="background:rgba(0,229,160,.08);color:var(--ke);border:1.5px solid var(--ke)">🌿 Alkene Reactions</div>
  <div class="rc-grid">
    <div class="rc-row" style="border-color:rgba(0,229,160,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--ke)">Alkyl Chloride</div><div class="rc-form">R–Cl</div></div><div class="rc-arrow-box"><span class="rc-reagent">NaOH (aq.)</span><span class="rc-arrow">→</span><span class="rc-product">heat</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ke)">Alkene + NaCl</div><div class="rc-form">Elimination</div></div></div>
    <div class="rc-row" style="border-color:rgba(0,229,160,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--ke)">Alcohol</div><div class="rc-form">R–OH</div></div><div class="rc-arrow-box"><span class="rc-reagent">conc. H₂SO₄</span><span class="rc-arrow">→</span><span class="rc-product">heat</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ke)">Alkene + H₂O</div><div class="rc-form">Dehydration</div></div></div>
  </div>

  <div class="rc-section-title" style="background:rgba(192,132,252,.08);color:var(--ky);border:1.5px solid var(--ky)">⚡ Alkyne Reactions</div>
  <div class="rc-grid">
    <div class="rc-row" style="border-color:rgba(192,132,252,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--ky)">CaC₂ + 2H₂O</div><div class="rc-form">Room temp</div></div><div class="rc-arrow-box"><span class="rc-reagent">No heat needed</span><span class="rc-arrow">→</span><span class="rc-product">Lab method</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ky)">Ethyne only</div><div class="rc-form">CH≡CH + Ca(OH)₂</div></div></div>
    <div class="rc-row" style="border-color:rgba(192,132,252,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--ky)">Dihalide</div><div class="rc-form">R–CHBr–CHBr–R</div></div><div class="rc-arrow-box"><span class="rc-reagent">2NaOH alcoholic</span><span class="rc-arrow">→</span><span class="rc-product">heat</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ky)">Alkyne + 2NaBr</div><div class="rc-form">Double elimination</div></div></div>
  </div>

  <div class="rc-section-title" style="background:rgba(56,189,248,.08);color:var(--al);border:1.5px solid var(--al)">🧪 Alcohol → Aldehyde → Fatty Acid</div>
  <div class="rc-grid">
    <div class="rc-row" style="border-color:rgba(56,189,248,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--al)">Alcohol</div><div class="rc-form">R–CH₂–OH</div></div><div class="rc-arrow-box"><span class="rc-reagent">K₂Cr₂O₇/H₂SO₄</span><span class="rc-arrow">→</span><span class="rc-product">controlled (mild)</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ad)">Aldehyde ⚠️ stop!</div><div class="rc-form">R–CHO</div></div></div>
    <div class="rc-row" style="border-color:rgba(244,114,182,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--ad)">Aldehyde</div><div class="rc-form">R–CHO</div></div><div class="rc-arrow-box"><span class="rc-reagent">K₂Cr₂O₇/H₂SO₄</span><span class="rc-arrow">→</span><span class="rc-product">oxidation</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ac)">Fatty Acid</div><div class="rc-form">R–COOH</div></div></div>
    <div class="rc-row" style="border-color:rgba(56,189,248,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--al)">Alcohol</div><div class="rc-form">R–CH₂–OH</div></div><div class="rc-arrow-box"><span class="rc-reagent">K₂Cr₂O₇/H₂SO₄</span><span class="rc-arrow">→</span><span class="rc-product">EXCESS oxidant</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ac)">Fatty Acid direct</div><div class="rc-form">Strong oxidation</div></div></div>
    <div class="rc-row" style="border-color:rgba(56,189,248,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--al)">Alkene + H₂O</div><div class="rc-form">C=C + H₂O</div></div><div class="rc-arrow-box"><span class="rc-reagent">H₃PO₄, 300°C</span><span class="rc-arrow">→</span><span class="rc-product">60 atm</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--al)">Alcohol</div><div class="rc-form">Hydration</div></div></div>
    <div class="rc-row" style="border-color:rgba(251,191,36,.25)"><div class="rc-compound"><div class="rc-name" style="color:var(--ky)">Alkyne + H₂O</div><div class="rc-form">C≡C + H₂O</div></div><div class="rc-arrow-box"><span class="rc-reagent">H₂SO₄, HgSO₄</span><span class="rc-arrow">→</span><span class="rc-product">80°C</span></div><div class="rc-compound"><div class="rc-name" style="color:var(--ad)">Aldehyde</div><div class="rc-form">Hydration of alkyne</div></div></div>
  </div>
</div>`;

  // ══════════════════════════════════════════════
  //  🎯  TOPIC QUIZ PANEL
  // ══════════════════════════════════════════════
  panels['tq'] = `
<div class="ph" style="border-color:#059669;color:#059669"><div class="phi">🎯</div><div><div class="pht">Topic-wise Mini Quiz</div><div class="phb"><span class="badge">5 Qs per topic</span><span class="badge">Instant feedback</span><span class="badge">All topics covered</span></div><div class="phd">Pick a topic and get 5 focused questions. Perfect for targeted revision before exams!</div></div></div>
<div class="tq-wrap">
  <div id="tq-home">
    <div style="font-family:'Fredoka One',cursive;font-size:1rem;color:#94a3b8;margin-bottom:.9rem">Choose a topic to quiz yourself:</div>
    <div class="tq-picks">
      ${[['ka','🔥','Alkane','CₙH₂ₙ₊₂'],['ke','🌿','Alkene','CₙH₂ₙ'],['ky','⚡','Alkyne','CₙH₂ₙ₋₂'],['al','🧪','Alcohol','–OH group'],['ad','✨','Aldehyde','–CHO group'],['ac','🧬','Fatty Acid','–COOH group'],['Petroleum','⛽','Petroleum','Fossil fuels'],['Polymer','🔗','Polymer','Polymerisation'],['Bonds','🔗','Bonds','σ and π'],['Naming','🏷️','IUPAC Naming','SPWPS rule'],['Isomers','🔄','Isomers','Cis/Trans'],['Theory','📖','Theory','EV Textbook'],['Arenes','💎','Arenes','Benzene ring'],['Reactions','⚗️','Reactions','Mechanisms'],['Mixed','🔬','Mixed','General']].map(([id,icon,name,sub])=>`<div class="tq-pick" style="color:var(--${['ka','ke','ky','al','ad','ac'].includes(id)?id:'al'});border-color:var(--${['ka','ke','ky','al','ad','ac'].includes(id)?id:'al'})" onclick="tqStart('${id}','${name}')"><span class="tq-pick-icon">${icon}</span><span class="tq-pick-name">${name}</span><span class="tq-pick-count">${sub}</span></div>`).join('')}
    </div>
  </div>
  <div class="tq-exam" id="tq-exam">
    <div style="display:flex;align-items:center;gap:.8rem;margin-bottom:1.2rem;flex-wrap:wrap">
      <div style="font-family:'Fredoka One',cursive;font-size:1.1rem;color:#4ade80" id="tq-title"></div>
      <div style="margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:.85rem;color:#6b7280" id="tq-progress"></div>
    </div>
    <div id="tq-questions" class="ql"></div>
    <div style="text-align:center;margin-top:1.2rem">
      <button class="stbtn" style="font-size:1rem;padding:.7rem 2rem" onclick="tqSubmit()">✔ Submit Quiz</button>
    </div>
  </div>
  <div class="tq-result" id="tq-result"></div>
</div>`;

  // ─────────────────────────────────────────────
  //  FLASHCARD ENGINE
  // ─────────────────────────────────────────────
  let fcDeck = [...FC_CARDS], fcIdx = 0;
  function fcRender() {
    const c = fcDeck[fcIdx];
    if (!c) return;
    const card = document.getElementById('fc-card');
    const inner = document.getElementById('fc-inner');
    if (card) card.classList.remove('flipped');
    document.getElementById('fc-q').textContent = c.q;
    document.getElementById('fc-a').textContent = c.a;
    document.getElementById('fc-hint').textContent = c.hint ? '💡 ' + c.hint : '';
    document.getElementById('fc-count').textContent = (fcIdx+1) + ' / ' + fcDeck.length;
    const pct = ((fcIdx+1)/fcDeck.length*100).toFixed(0);
    const fill = document.getElementById('fc-fill');
    if (fill) fill.style.width = pct + '%';
  }
  window.fcFlip = function() { const c = document.getElementById('fc-card'); if(c) c.classList.toggle('flipped'); };
  window.fcNav = function(d) { fcIdx = (fcIdx + d + fcDeck.length) % fcDeck.length; fcRender(); };
  window.fcShuffle = function() { for(let i=fcDeck.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[fcDeck[i],fcDeck[j]]=[fcDeck[j],fcDeck[i]];} fcIdx=0; fcRender(); };
  window.fcFilter = function(topic, btn) {
    document.querySelectorAll('.fc-filter').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    fcDeck = topic === 'All' ? [...FC_CARDS] : FC_CARDS.filter(c=>c.topic===topic);
    fcIdx = 0; fcRender();
  };
  setTimeout(fcRender, 100);

  // ─────────────────────────────────────────────
  //  MOLECULAR WEIGHT ENGINE
  // ─────────────────────────────────────────────
  const ATOMIC_MASS = {H:1.008,C:12.011,O:15.999,N:14.007,Cl:35.45,Br:79.904,F:18.998,I:126.90,S:32.06,P:30.974,Na:22.990,K:39.098,Ca:40.078,Mg:24.305};
  window.mwSetFormula = function(f) { const el=document.getElementById('mw-input'); if(el){el.value=f; mwCalc();} };
  window.mwCalc = function() {
    const raw = (document.getElementById('mw-input').value||'').trim();
    const r = document.getElementById('mw-result');
    if (!raw) { r.innerHTML=''; return; }
    // Normalise subscript digits
    const norm = raw.replace(/₀/g,'0').replace(/₁/g,'1').replace(/₂/g,'2').replace(/₃/g,'3').replace(/₄/g,'4').replace(/₅/g,'5').replace(/₆/g,'6').replace(/₇/g,'7').replace(/₈/g,'8').replace(/₉/g,'9');
    const counts = {};
    const re = /([A-Z][a-z]?)(\d*)/g;
    let m, total = 0, valid = true, breakdown = [];
    while ((m = re.exec(norm)) !== null) {
      if (!m[1]) continue;
      const atom = m[1], cnt = m[2] ? parseInt(m[2]) : 1;
      if (!ATOMIC_MASS[atom]) { valid = false; break; }
      counts[atom] = (counts[atom]||0) + cnt;
    }
    if (!valid) { r.innerHTML=`<div class="fb-notfound"><span class="nm-nfi">⚠️</span><div class="nm-nft">Unknown element in formula</div><div class="fb-hint">Use standard symbols: C, H, O, N, Cl, Br, Na, etc.</div></div>`; return; }
    Object.entries(counts).forEach(([atom,cnt])=>{ const mass=ATOMIC_MASS[atom]*cnt; total+=mass; breakdown.push({atom,cnt,mass:mass.toFixed(3)}); });
    r.innerHTML = `<div class="mw-result">
      <div class="mw-big">${total.toFixed(3)}</div>
      <div class="mw-unit">g/mol — Molecular Weight of ${raw}</div>
      <div class="mw-breakdown">
        ${breakdown.map(b=>`<div class="mw-row"><span class="mw-atom">${b.atom}</span><span>×</span><span class="mw-sub">${b.cnt}</span><span>=</span><span class="mw-mass">${b.mass} g/mol</span></div>`).join('')}
        <div class="mw-row" style="border-top:1px solid var(--bd);margin-top:.2rem;padding-top:.4rem"><span style="color:#e2e8f0;font-weight:700">Total</span><span></span><span></span><span>=</span><span style="color:#c4b5fd;font-weight:700">${total.toFixed(3)} g/mol</span></div>
      </div>
    </div>`;
  };

  // ─────────────────────────────────────────────
  //  NOTES ENGINE
  // ─────────────────────────────────────────────
  window.ntTab = function(btn, paneId) {
    const wrap = btn.closest('.nt-wrap');
    wrap.querySelectorAll('.nt-tab').forEach(t=>t.classList.remove('on'));
    wrap.querySelectorAll('.nt-pane').forEach(p=>p.classList.remove('on'));
    btn.classList.add('on');
    const pane = document.getElementById(paneId);
    if (pane) pane.classList.add('on');
  };

  // ─────────────────────────────────────────────
  //  TOPIC QUIZ ENGINE
  // ─────────────────────────────────────────────
  let TQ = { topic:'', questions:[], answers:{} };
  window.tqStart = function(topicId, topicName) {
    const topicKey = ['ka','ke','ky','al','ad','ac'].includes(topicId) ? {'ka':'Alkane','ke':'Alkene','ky':'Alkyne','al':'Alcohol','ad':'Aldehyde','ac':'Fatty Acid'}[topicId] : topicId;
    const pool = QB.filter(q => q.t === topicKey || q.t === topicName);
    if (pool.length < 3) { alert('Not enough questions for this topic yet!'); return; }
    const shuffled = [...pool].sort(()=>Math.random()-.5).slice(0,5);
    TQ = { topic: topicName, questions: shuffled, answers: {} };
    document.getElementById('tq-home').style.display = 'none';
    document.getElementById('tq-result').style.display = 'none';
    const exam = document.getElementById('tq-exam');
    exam.style.display = 'block';
    document.getElementById('tq-title').textContent = '🎯 ' + topicName + ' Quiz — 5 Questions';
    document.getElementById('tq-progress').textContent = '0 / ' + shuffled.length + ' answered';
    const ql = document.getElementById('tq-questions');
    const lt = ['A','B','C','D'];
    ql.innerHTML = shuffled.map((q,i)=>`<div class="qc" id="tqc${i}"><div class="qh"><span class="qnum">Q ${i+1}</span><span class="qtop">${q.t}</span><span class="qmk">1 Mark</span></div><div class="qtxt">${q.q}</div><div class="opts">${q.o.map((o,oi)=>`<div class="opt" onclick="tqSel(${i},${oi},this)"><span class="ol">${lt[oi]}</span><span class="otx">${o}</span></div>`).join('')}</div></div>`).join('');
  };
  window.tqSel = function(qi,oi,el) {
    const c = document.getElementById('tqc'+qi);
    c.querySelectorAll('.opt').forEach(o=>o.classList.remove('on'));
    el.classList.add('on'); TQ.answers[qi]=oi; c.classList.add('answered');
    const n = Object.keys(TQ.answers).length;
    const prog = document.getElementById('tq-progress');
    if (prog) prog.textContent = n + ' / ' + TQ.questions.length + ' answered';
  };
  window.tqSubmit = function() {
    let co=0,wr=0,sk=0;
    TQ.questions.forEach((q,i)=>{ const a=TQ.answers[i]; if(a===undefined)sk++; else if(a===q.a)co++; else wr++; });
    const pct = Math.round(co/TQ.questions.length*100);
    const grade = pct===100?'Perfect! 🏆':pct>=80?'Excellent! 🎉':pct>=60?'Good job! 👍':'Keep practising! 💪';
    document.getElementById('tq-exam').style.display='none';
    const res = document.getElementById('tq-result');
    res.style.display='block';
    let revHtml = '';
    const lt=['A','B','C','D'];
    TQ.questions.forEach((q,i)=>{
      const ua=TQ.answers[i],ca=q.a,ok=ua===ca,sk2=ua===undefined;
      const bc=sk2?'#fbbf24':ok?'#4ade80':'#f87171';
      const st=sk2?'⬜ Skipped':ok?'✅ Correct':'❌ Wrong';
      const opts=q.o.map((o,oi)=>{let cl='opt rv';if(oi===ca)cl+=' ca';if(oi===ua&&oi!==ca)cl+=' wa';return`<div class="${cl}"><span class="ol">${lt[oi]}</span><span class="otx">${o}</span></div>`;}).join('');
      revHtml+=`<div class="qc" style="border-color:${bc};margin-bottom:.9rem"><div class="qh"><span class="qnum" style="color:${bc};border-color:${bc}">Q ${i+1}</span><span class="qtop">${q.t}</span><span class="qmk" style="color:${bc}">${st}</span></div><div class="qtxt">${q.q}</div><div class="opts">${opts}</div><div class="expl on">💡 ${q.e}</div></div>`;
    });
    res.innerHTML = `<div style="background:var(--sf);border:2px solid #059669;border-radius:18px;padding:1.5rem;margin-bottom:1.2rem;text-align:center"><div style="font-size:3rem;margin-bottom:.5rem">${pct===100?'🏆':pct>=80?'🎉':pct>=60?'👍':'📚'}</div><div style="font-family:'Fredoka One',cursive;font-size:2rem;color:#4ade80">${co} / ${TQ.questions.length}</div><div style="font-family:'Fredoka One',cursive;font-size:1.2rem;color:#94a3b8;margin:.3rem 0">${TQ.topic} Quiz — ${pct}%</div><div style="font-size:1rem;color:#6b7280">${grade}</div><div style="display:flex;gap:.7rem;justify-content:center;margin-top:1rem"><button class="ra ra1" onclick="tqBack()">🎯 Try Another Topic</button></div></div><div style="font-family:'Fredoka One',cursive;font-size:1rem;color:#4ade80;margin:.8rem 0">📖 Review Answers</div>${revHtml}`;
  };
  window.tqBack = function() {
    document.getElementById('tq-result').style.display='none';
    document.getElementById('tq-home').style.display='block';
  };

  // ══════════════════════════════════════════════
  //  📖  THEORY PANEL (from EV Chemistry Textbook)
  // ══════════════════════════════════════════════
  panels['th'] = `
<div class="ph" style="border-color:#1d4ed8;color:#1d4ed8"><div class="phi">📖</div><div><div class="pht">Theory — Organic Chemistry</div><div class="phb"><span class="badge">EV Chemistry Ch.2</span><span class="badge">Vital Force Theory</span><span class="badge">Catenation</span><span class="badge">Fullerenes</span></div><div class="phd">Complete theory from your EV Chemistry 2nd Paper textbook — Chapter 2. Everything explained with examples.</div></div></div>
<div class="nt-wrap">
  <div class="nt-tabs">
    <button class="nt-tab on" style="color:#60a5fa" onclick="ntTab(this,'th-intro')">🔬 Introduction</button>
    <button class="nt-tab" style="color:#34d399" onclick="ntTab(this,'th-carbon')">⚛️ Carbon's Specialty</button>
    <button class="nt-tab" style="color:#f59e0b" onclick="ntTab(this,'th-class')">🗂️ Classification</button>
    <button class="nt-tab" style="color:#c084fc" onclick="ntTab(this,'th-bond')">🔗 σ & π Bonds</button>
    <button class="nt-tab" style="color:#f472b6" onclick="ntTab(this,'th-hybrid')">🔭 Hybridisation</button>
    <button class="nt-tab" style="color:#fb923c" onclick="ntTab(this,'th-homo')">📊 Homologous Series</button>
    <button class="nt-tab" style="color:#f43f5e" onclick="ntTab(this,'th-aliaro')">⚖️ Ali vs Aro</button>
    <button class="nt-tab" style="color:#22d3ee" onclick="ntTab(this,'th-react')">⚗️ Reactions</button>
    <button class="nt-tab" style="color:#a3e635" onclick="ntTab(this,'th-mech')">🔧 Mechanisms</button>
  </div>

  <div id="th-intro" class="nt-pane on">
    <div class="note-card"><div class="note-card-head" style="border-color:#60a5fa"><span class="note-card-icon">📖</span><span class="note-card-title" style="color:#60a5fa">What is Organic Chemistry?</span></div>
    <div class="note-card-body">Organic chemistry is the branch of chemistry dealing with compounds formed by <strong>carbon chains and carbo-cyclic structures</strong>. In modern terms, it is the chemistry of <strong>hydrocarbons and their derivatives</strong>.<br><br>Organic compounds must contain carbon, with which <strong>H, O, N, S, P, halogens</strong> etc. may remain combined.<br><br><strong>Examples:</strong> Methane (CH₄), Methanol (CH₃OH), Ethane (C₂H₆), Ethylamine (C₂H₅NH₂)</div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#ef4444"><span class="note-card-icon">⚗️</span><span class="note-card-title" style="color:#ef4444">Vital Force Theory & Its Failure</span></div>
    <div class="note-card-body">
      <strong>Berzelius (1808)</strong> — Named compounds from living organisms as <em>organic</em> and from non-living sources as <em>inorganic</em>.<br><br>
      <strong>Vital Force Theory (1815)</strong> — Berzelius proposed that organic compounds can only be formed in plants/animals by the influence of a mysterious "vital force." So organic compounds could NOT be prepared in a laboratory.<br><br>
      <strong>Friedrich Wöhler (1828)</strong> — A German chemist accidentally <strong>disproved</strong> the vital force theory by preparing <strong>urea</strong> (found in human urine) from ammonium cyanate — an inorganic compound:
      <div class="note-formula">NH₄CNO → Heat → CO(NH₂)₂ (Urea)</div>
      Wöhler is called the <strong>"Father of Organic Chemistry"</strong><br><br>
      <strong>Scale of organic compounds:</strong> Over <strong>80 lakh (8 million)</strong> organic compounds are known, compared to only ~1 lakh inorganic compounds.
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">🔑</span><span class="note-card-title" style="color:#fbbf24">Key Words from This Chapter</span></div>
    <div class="note-card-body">
      <div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-top:.3rem">
        ${['Homologous series','Functional groups','Isomerism','Chiral compound','Arenes','Friedel-Craft reaction','Aromaticity','Alkane','Alkene','Alkyne','Alcohol','Amine','Carbonyl compounds','Carboxylic acid','Ester','Amide','IR-spectroscope','Polymer','Addition polymer','Condensation polymer','Glycoside-bond','Peptide-bond'].map(k=>`<span style="padding:.25rem .65rem;background:rgba(251,191,36,.08);border:1.5px solid rgba(251,191,36,.25);border-radius:20px;font-size:.75rem;color:#fde68a">${k}</span>`).join('')}
      </div>
    </div></div>
  </div>

  <div id="th-carbon" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#34d399"><span class="note-card-icon">⚛️</span><span class="note-card-title" style="color:#34d399">3 Reasons Carbon Forms So Many Compounds</span></div>
    <div class="note-card-body">
      <div style="display:flex;flex-direction:column;gap:.9rem">
        <div style="background:rgba(52,211,153,.07);border:1.5px solid rgba(52,211,153,.25);border-radius:12px;padding:.9rem 1.1rem">
          <div style="font-family:'Fredoka One',cursive;font-size:1rem;color:#34d399;margin-bottom:.4rem">1️⃣ Catenation</div>
          <div style="font-size:.9rem;color:#94a3b8">The capacity of carbon to form carbon–carbon chains or rings by covalent bonds. Latin <em>"catena"</em> = chain.<br><br>Carbon forms: <strong>sp³ hybridisation</strong> (single bond, chain), <strong>sp² hybridisation</strong> (double bond), <strong>sp hybridisation</strong> (triple bond)<br>→ straight chain, branched chain, ring structures</div>
        </div>
        <div style="background:rgba(96,165,250,.07);border:1.5px solid rgba(96,165,250,.25);border-radius:12px;padding:.9rem 1.1rem">
          <div style="font-family:'Fredoka One',cursive;font-size:1rem;color:#60a5fa;margin-bottom:.4rem">2️⃣ Isomerism</div>
          <div style="font-size:.9rem;color:#94a3b8">Same molecular formula but different structural formulae. The larger the molecule, the more isomers are possible.<br><br>Example: C₂H₆O has 2 isomers — ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃)</div>
        </div>
        <div style="background:rgba(251,146,60,.07);border:1.5px solid rgba(251,146,60,.25);border-radius:12px;padding:.9rem 1.1rem">
          <div style="font-family:'Fredoka One',cursive;font-size:1rem;color:#fb923c;margin-bottom:.4rem">3️⃣ Polymerisation</div>
          <div style="font-size:.9rem;color:#94a3b8">Joining many small monomer units into large polymer molecules. Gives enormous variety — plastics, proteins, DNA, rubber etc.</div>
        </div>
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#a78bfa"><span class="note-card-icon">⚽</span><span class="note-card-title" style="color:#a78bfa">Fullerenes — Special Carbon Allotropes</span></div>
    <div class="note-card-body">
      <strong>Discovered in 1985</strong> by <strong>Kroto, Smalley and Walton</strong><br><br>
      Fullerenes are 3-dimensional polymeric allotropic structures of carbon — different from graphite and diamond. They contain <strong>30–70 carbon atoms</strong> bonded by covalent bonds.<br><br>
      <table class="note-table"><tr><th>Allotrope</th><th>C atoms</th><th>Special Name</th></tr>
      <tr><td>C₆₀</td><td>60</td><td><strong>Buckminsterfullerene / "Bucky Ball"</strong></td></tr>
      <tr><td>C₇₀</td><td>70</td><td>Fullerene-70</td></tr>
      <tr><td>C₅₀, C₃₂</td><td>50, 32</td><td>Other fullerenes</td></tr></table><br>
      <strong>C₆₀ structure:</strong> 12 pentagons + 20 hexagons — looks like a <strong>football</strong>. All carbons are <strong>sp² hybridised</strong>.<br>
      Named after architect <strong>Buckminster Fuller</strong> who designed geodesic domes.<br><br>
      <strong>Uses:</strong> Semiconductors · Superconductors · Catalysts · Batteries
    </div></div>
  </div>

  <div id="th-class" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#f59e0b"><span class="note-card-icon">🗂️</span><span class="note-card-title" style="color:#f59e0b">Complete Classification of Organic Compounds</span></div>
    <div class="note-card-body">
      <div style="background:rgba(251,191,36,.07);border:1.5px solid rgba(251,191,36,.2);border-radius:12px;padding:1rem;font-family:'JetBrains Mono',monospace;font-size:.78rem;line-height:2;color:#e2e8f0">
        <div style="color:#fbbf24;font-family:'Fredoka One',cursive;font-size:.95rem;margin-bottom:.5rem">Organic Compounds</div>
        <div style="margin-left:1rem">├── <span style="color:#60a5fa">Aliphatic (open chain)</span><br>
        <div style="margin-left:2rem">├── Saturated → CH₃–CH₃ (Alkane)<br>
        └── Unsaturated → CH₂=CH₂ (Alkene)</div><br>
        └── <span style="color:#34d399">Cyclic (closed chain)</span><br>
        <div style="margin-left:2rem">├── <span style="color:#f59e0b">Carbocyclic (Homocyclic)</span><br>
        <div style="margin-left:2rem">├── Alicyclic → cyclopropane △<br>
        └── Aromatic → benzene ⬡</div><br>
        └── <span style="color:#f472b6">Heterocyclic</span><br>
        <div style="margin-left:2rem">├── Hetero-alicyclic → ethylene oxide<br>
        └── Hetero-aromatic → thiophene, pyridine, furan</div></div></div>
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#34d399"><span class="note-card-icon">💡</span><span class="note-card-title" style="color:#34d399">Key Definitions</span></div>
    <div class="note-card-body">
      <strong>Aliphatic compounds:</strong> Open chain organic compounds. Saturated (only C–C) or unsaturated (C=C or C≡C).<br><br>
      <strong>Alicyclic compounds:</strong> Cyclic compounds with ring structure but WITHOUT benzene ring. e.g. cyclopropane.<br><br>
      <strong>Aromatic compounds:</strong> Cyclic compounds with benzene ring and delocalised π electrons. e.g. benzene, toluene.<br><br>
      <strong>Heterocyclic compounds:</strong> Cyclic compounds with ring containing atoms other than carbon (O, N, S). e.g. pyridine (N), furan (O), thiophene (S).<br><br>
      <strong>MCQ tip:</strong> Which is heterocyclic aromatic? → <strong>Pyridine</strong> ✅ (not benzene — benzene has only C atoms)
    </div></div>
  </div>

  <div id="th-bond" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#c084fc"><span class="note-card-icon">🔗</span><span class="note-card-title" style="color:#c084fc">Sigma (σ) vs Pi (π) Bond — Full Comparison</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Feature</th><th style="color:#4ade80">σ (Sigma) Bond</th><th style="color:#f472b6">π (Pi) Bond</th></tr>
        <tr><td>Definition</td><td>Head-on (axial) overlap of two orbitals</td><td>Sideways (lateral) overlap of two p-orbitals after σ formation</td></tr>
        <tr><td>Orbital axis</td><td>Two orbitals lie on same axis</td><td>Two p-orbitals lie on parallel axis</td></tr>
        <tr><td>Orbital type</td><td>Forms with hybrid and pure orbitals</td><td>Only p-orbitals (not s or hybrid)</td></tr>
        <tr><td>Primary/Secondary</td><td><strong>Primary</strong> — forms first</td><td>Secondary — forms after σ bond</td></tr>
        <tr><td>Strength</td><td><strong>Strong</strong></td><td><strong>Weak</strong></td></tr>
        <tr><td>Free rotation</td><td>✅ Atoms rotate freely along axis</td><td>❌ Cannot rotate → causes cis/trans isomers</td></tr>
        <tr><td>All single bonds</td><td>All single bonds are σ bonds</td><td>Only in double or triple bonds</td></tr>
      </table><br>
      <div style="background:rgba(192,132,252,.08);border:1.5px solid rgba(192,132,252,.25);border-radius:10px;padding:.8rem 1rem;font-size:.88rem;color:#94a3b8">
        💡 <strong>Remember:</strong> C–C = 1σ | C=C = 1σ + 1π | C≡C = 1σ + 2π<br>
        The π bond BREAKS in addition reactions. σ bond stays intact.
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#60a5fa"><span class="note-card-icon">⚗️</span><span class="note-card-title" style="color:#60a5fa">Bond Lengths — Increasing Order</span></div>
    <div class="note-card-body">
      <div style="display:flex;justify-content:space-around;flex-wrap:wrap;gap:.8rem;margin:.5rem 0">
        <div style="text-align:center;background:rgba(196,181,253,.1);border:2px solid #c084fc;border-radius:12px;padding:.8rem 1.2rem"><div style="font-family:'JetBrains Mono',monospace;font-size:1rem;color:#c084fc">C≡C</div><div style="font-size:.72rem;color:#6b7280;margin-top:.3rem">1.20 Å<br>SHORTEST</div></div>
        <div style="text-align:center;font-size:1.5rem;color:#374151;align-self:center">&lt;</div>
        <div style="text-align:center;background:rgba(244,114,182,.1);border:2px solid #f472b6;border-radius:12px;padding:.8rem 1.2rem"><div style="font-family:'JetBrains Mono',monospace;font-size:1rem;color:#f472b6">C=C</div><div style="font-size:.72rem;color:#6b7280;margin-top:.3rem">1.34 Å<br>Middle</div></div>
        <div style="text-align:center;font-size:1.5rem;color:#374151;align-self:center">&lt;</div>
        <div style="text-align:center;background:rgba(74,222,128,.1);border:2px solid #4ade80;border-radius:12px;padding:.8rem 1.2rem"><div style="font-family:'JetBrains Mono',monospace;font-size:1rem;color:#4ade80">C–C</div><div style="font-size:.72rem;color:#6b7280;margin-top:.3rem">1.54 Å<br>LONGEST</div></div>
      </div>
      <div style="font-size:.82rem;color:#6b7280;margin-top:.5rem;font-style:italic">More bonds = shorter length AND stronger bond. Triple bond is shortest and strongest.</div>
    </div></div>
  </div>

  <div id="th-hybrid" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#f472b6"><span class="note-card-icon">🔭</span><span class="note-card-title" style="color:#f472b6">Hybridisation of Carbon Orbitals</span></div>
    <div class="note-card-body">
      <strong>Definition:</strong> Hybridisation is the process of mixing orbitals of different energy and equalising their energy to form equal number of equivalent hybrid orbitals.<br><br>
      <strong>Carbon ground state:</strong> C(6) → 1s² 2s² 2p¹ₓ 2p¹ᵧ 2p⁰_z<br>
      <strong>Carbon excited state:</strong> C*(6) → 1s² 2s¹ 2p¹ₓ 2p¹ᵧ 2p¹_z (4 unpaired electrons → forms 4 bonds)<br><br>
      <table class="note-table">
        <tr><th>Type</th><th>Shape</th><th>Bond Angle</th><th>Bond Type</th><th>Example</th></tr>
        <tr><td style="color:#fde68a">sp³</td><td>Tetrahedral</td><td><strong>109.5°</strong></td><td>C–C single bond</td><td>CH₄, C₂H₆, cycloalkanes</td></tr>
        <tr><td style="color:#6ee7b7">sp²</td><td>Trigonal planar</td><td><strong>120°</strong></td><td>C=C double bond</td><td>CH₂=CH₂, benzene</td></tr>
        <tr><td style="color:#c4b5fd">sp</td><td>Linear</td><td><strong>180°</strong></td><td>C≡C triple bond</td><td>CH≡CH</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">🧮</span><span class="note-card-title" style="color:#fbbf24">Counting Bonds in Molecules</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Molecule</th><th>σ bonds</th><th>π bonds</th><th>Formula</th></tr>
        <tr><td>Ethane</td><td>7</td><td>0</td><td>CH₃–CH₃</td></tr>
        <tr><td>Ethene</td><td>5</td><td>1</td><td>CH₂=CH₂</td></tr>
        <tr><td>Ethyne</td><td>3</td><td>2</td><td>CH≡CH</td></tr>
        <tr><td>Propene</td><td>8</td><td>1</td><td>CH₃–CH=CH₂</td></tr>
        <tr><td>Propyne</td><td>6</td><td>2</td><td>CH₃–C≡CH</td></tr>
        <tr><td>Benzene (C₆H₆)</td><td>12</td><td>3</td><td>Aromatic ring</td></tr>
      </table>
    </div></div>
  </div>

  <div id="th-homo" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#fb923c"><span class="note-card-icon">📊</span><span class="note-card-title" style="color:#fb923c">Homologous Series — 6 Characteristics</span></div>
    <div class="note-card-body">
      ${['All members can be represented by a general formula. e.g. Alcohols = CₙH₂ₙ₊₁OH (n=1 gives methanol, n=2 gives ethanol)','All members have a common functional group. e.g. all alcohols have –OH','All members contain same elements. e.g. alcohols all contain C, H, O','Adjacent members differ by –CH₂– group (mass difference = 14). e.g. CH₃OH → C₂H₅OH differs by –CH₂–','Members of same series prepared by same general methods. e.g. CH₃I + NaOH → CH₃OH, C₂H₅I + NaOH → C₂H₅OH','With increasing molecular mass, physical properties change gradually. Boiling point of CH₃OH = 65°C, C₂H₅OH = 78.3°C'].map((c,i)=>`<div style="display:flex;gap:.7rem;padding:.5rem .7rem;background:rgba(251,146,60,.05);border-radius:9px;border-left:3px solid #fb923c;margin-bottom:.4rem"><span style="font-family:'Fredoka One',cursive;font-size:1rem;color:#fb923c;min-width:24px">${i+1}.</span><span style="font-size:.87rem;color:#94a3b8">${c}</span></div>`).join('')}
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fde68a"><span class="note-card-icon">📋</span><span class="note-card-title" style="color:#fde68a">Table 2.4 — Homologous Series Summary</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>#</th><th>Series</th><th>General Formula</th><th>Examples</th></tr>
        <tr><td>1</td><td style="color:#ff7043">Alkane</td><td>CₙH₂ₙ₊₂</td><td>CH₄ (methane), C₂H₆ (ethane)</td></tr>
        <tr><td>2</td><td style="color:#00e5a0">Alkene</td><td>CₙH₂ₙ</td><td>C₂H₄ (ethene), C₃H₆ (propene)</td></tr>
        <tr><td>3</td><td style="color:#c084fc">Alkyne</td><td>CₙH₂ₙ₋₂</td><td>C₂H₂ (ethyne), C₃H₄ (propyne)</td></tr>
        <tr><td>4</td><td style="color:#38bdf8">Alcohol</td><td>CₙH₂ₙ₊₁–OH</td><td>CH₃OH, C₂H₅OH</td></tr>
        <tr><td>5</td><td style="color:#fbbf24">Aldehyde</td><td>CₙH₂ₙ₊₁–CHO</td><td>CH₃CHO, C₂H₅CHO</td></tr>
        <tr><td>6</td><td style="color:#f472b6">Carboxylic acid</td><td>CₙH₂ₙ₊₁–COOH</td><td>CH₃COOH, C₂H₅COOH</td></tr>
        <tr><td>7</td><td style="color:#a78bfa">Amine</td><td>CₙH₂ₙ₊₁–NH₂</td><td>CH₃NH₂, C₂H₅NH₂</td></tr>
      </table>
    </div></div>
  </div>
</div>`;

  // ══════════════════════════════════════════════
  //  🏷️  FUNCTIONAL GROUPS PANEL
  // ══════════════════════════════════════════════
  panels['fg'] = `
<div class="ph" style="border-color:#b45309;color:#b45309"><div class="phi">🏷️</div><div><div class="pht">Functional Groups — All 11 Types</div><div class="phb"><span class="badge">11 functional groups</span><span class="badge">Structures shown</span><span class="badge">Examples from textbook</span></div><div class="phd">All functional groups from EV Chemistry Chapter 2 — with formula, structure and reaction type.</div></div></div>
<div class="nt-wrap">
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:1rem;margin-bottom:1rem">
    ${[
      {n:1,name:'Alkene',class:'–',group:'C=C',type:'Carbon–Carbon double bond',fg:'C=C',hyb:'sp²',react:'Addition reactions',example:'Ethene CH₂=CH₂',col:'#00e5a0',icon:'🌿'},
      {n:2,name:'Alkyne',class:'–',group:'C≡C',type:'Carbon–Carbon triple bond',fg:'C≡C',hyb:'sp',react:'Addition reactions',example:'Ethyne CH≡CH',col:'#c084fc',icon:'⚡'},
      {n:3,name:'Alcohol',class:'R–OH',group:'–OH',type:'Hydroxyl group',fg:'–OH',hyb:'sp³',react:'Substitution & Elimination',example:'Ethanol C₂H₅OH',col:'#38bdf8',icon:'🧪'},
      {n:4,name:'Amine',class:'R–NH₂',group:'–NH₂',type:'Amino group',fg:'–NH₂',hyb:'sp³',react:'Substitution',example:'Methylamine CH₃NH₂',col:'#a78bfa',icon:'🟣'},
      {n:5,name:'Ether',class:'R–O–R',group:'–O–',type:'Ether linkage',fg:'–O–',hyb:'sp³',react:'Substitution',example:'Dimethyl ether CH₃OCH₃',col:'#67e8f9',icon:'💨'},
      {n:6,name:'Aldehyde',class:'R–CHO',group:'–CHO',type:'Aldehyde group (terminal C=O)',fg:'–CHO',hyb:'sp²',react:'Addition & Oxidation',example:'Ethanal CH₃CHO',col:'#fbbf24',icon:'✨'},
      {n:7,name:'Ketone',class:'R–CO–R',group:'>C=O',type:'Carbonyl / keto group',fg:'>C=O',hyb:'sp²',react:'Addition',example:'Acetone CH₃COCH₃',col:'#f59e0b',icon:'🫧'},
      {n:8,name:'Carboxylic Acid',class:'R–COOH',group:'–COOH',type:'Carboxyl group',fg:'–COOH',hyb:'sp²',react:'Substitution + single & double bond',example:'Ethanoic acid CH₃COOH',col:'#f472b6',icon:'🧬'},
      {n:9,name:'Ester',class:'R–COO–R',group:'–COO–',type:'Ester group',fg:'–COO–',hyb:'sp²',react:'Hydrolysis',example:'Methyl ethanoate CH₃COOCH₃',col:'#4ade80',icon:'🌺'},
      {n:10,name:'Amide',class:'R–CONH₂',group:'–CONH₂',type:'Amide group',fg:'–CONH₂',hyb:'sp²',react:'Hydrolysis',example:'Ethanamide CH₃CONH₂',col:'#818cf8',icon:'🔵'},
      {n:11,name:'Nitrile',class:'R–CN',group:'–C≡N',type:'Nitrile / Cyanide group',fg:'–C≡N:',hyb:'sp',react:'Addition / Hydrolysis',example:'Ethanenitrile CH₃CN',col:'#60a5fa',icon:'🔵'}
    ].map(f=>`<div style="background:var(--sf);border:2px solid ${f.col};border-radius:14px;overflow:hidden">
      <div style="background:rgba(0,0,0,.3);padding:.7rem 1rem;display:flex;align-items:center;gap:.7rem;border-bottom:1px solid var(--bd)">
        <span style="font-size:1.4rem">${f.icon}</span>
        <div>
          <div style="font-family:'Fredoka One',cursive;font-size:1rem;color:${f.col}">${f.n}. ${f.name}</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.7rem;color:#6b7280">${f.class}</div>
        </div>
        <div style="margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:1.1rem;color:${f.col};font-weight:800">${f.fg}</div>
      </div>
      <div style="padding:.8rem 1rem;font-size:.82rem;color:#94a3b8;display:flex;flex-direction:column;gap:.3rem">
        <div><span style="color:#6b7280;font-weight:800;font-size:.68rem;text-transform:uppercase;letter-spacing:.06em">Type · </span>${f.type}</div>
        <div><span style="color:#6b7280;font-weight:800;font-size:.68rem;text-transform:uppercase;letter-spacing:.06em">Hybridisation · </span><span style="color:#fde68a">${f.hyb}</span></div>
        <div><span style="color:#6b7280;font-weight:800;font-size:.68rem;text-transform:uppercase;letter-spacing:.06em">Reaction type · </span><span style="color:#6ee7b7">${f.react}</span></div>
        <div><span style="color:#6b7280;font-weight:800;font-size:.68rem;text-transform:uppercase;letter-spacing:.06em">Example · </span>${f.example}</div>
      </div>
    </div>`).join('')}
  </div>
  <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">💡</span><span class="note-card-title" style="color:#fbbf24">Reaction Type Rule (from PDF)</span></div>
  <div class="note-card-body">
    <strong>Single bond only (–OH, –NH₂):</strong> Undergo <span style="color:#4ade80">substitution</span> and <span style="color:#4ade80">elimination</span> reactions<br><br>
    <strong>Double or triple bond (C=C, C≡C):</strong> Undergo <span style="color:#fbbf24">addition</span> reactions<br><br>
    <strong>Both single + double bond (–COOH, –COO–):</strong> Undergo <span style="color:#f472b6">substitution</span> reactions
  </div></div>
</div>

  <!-- ALIPHATIC vs AROMATIC -->
  <div id="th-aliaro" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#f43f5e"><span class="note-card-icon">⚖️</span><span class="note-card-title" style="color:#f43f5e">Aliphatic vs Aromatic — 7 Differences (Section 2.9)</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>#</th><th>Point</th><th style="color:#60a5fa">Aliphatic</th><th style="color:#a78bfa">Aromatic</th></tr>
        <tr><td>1</td><td>Structure</td><td>Open chain (some closed like cyclohexane)</td><td>Closed, planar, stable ring with (4n+2) π electrons</td></tr>
        <tr><td>2</td><td>Carbon %</td><td>CH₄: C=75%, H=25%</td><td>C₆H₆: C=92.3%, H=7.7% (more carbon!)</td></tr>
        <tr><td>3</td><td>Unsaturation</td><td>May be saturated or unsaturated</td><td>Special stable unsaturation — (4n+2) π electrons only</td></tr>
        <tr><td>4</td><td>Br₂/KMnO₄ test</td><td>✅ Unsaturated aliphatic decolourises both</td><td>❌ Benzene does NOT decolourise either test</td></tr>
        <tr><td>5</td><td>Halide reactivity</td><td>R–X easily hydrolysed by aq. KOH → alcohol</td><td>Ar–X barely hydrolysed — needs 300°C, 200 atm with KOH!</td></tr>
        <tr><td>6</td><td>Hydroxy compound</td><td>Alcohol (–OH) — litmus neutral, reacts with Na → H₂</td><td>Phenol (C₆H₅OH) — turns litmus RED (acidic), reacts with NaOH → phenate</td></tr>
        <tr><td>7</td><td>Reactions</td><td>Electrophilic addition + nucleophilic substitution + elimination</td><td>Mainly electrophilic substitution (halogenation, nitration, Friedel-Craft) + some addition (H₂, Cl₂, O₃)</td></tr>
      </table>
      <div style="margin-top:.7rem;font-size:.82rem;color:#6b7280">💡 Key memory: Aromatic = MORE stable, MORE carbon %, LESS reactive halide, ACIDIC hydroxy compound, SUBSTITUTION reactions</div>
    </div></div>
  </div>

  <!-- REACTIONS OVERVIEW -->
  <div id="th-react" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#22d3ee"><span class="note-card-icon">⚗️</span><span class="note-card-title" style="color:#22d3ee">Types of Organic Reactions (Section 2.10)</span></div>
    <div class="note-card-body">
      5 types of organic reactions:
      <div style="display:flex;flex-direction:column;gap:.5rem;margin-top:.6rem">
        ${[
          {n:'1',col:'#22d3ee',t:'Addition',d:'Two molecules combine to form one product. Occurs in π-bond compounds (C=C, C≡C, C=O). π-bond breaks and two new σ-bonds form.'},
          {n:'2',col:'#f472b6',t:'Substitution',d:'One atom/group replaced by another. Occurs in saturated C (alkane, alkyl halide) and benzene ring.'},
          {n:'3',col:'#fb923c',t:'Elimination',d:'Two atoms/groups removed from adjacent C atoms forming new π-bond (alkene). Opposite of addition.'},
          {n:'4',col:'#a3e635',t:'Rearrangement (Isomerisation)',d:'Atoms reorganise to form isomer. e.g. Butane → 2-methylpropane with AlCl₃/HCl at 300°C.'},
          {n:'5',col:'#fbbf24',t:'Multiple Substitution (Orientation)',d:'Multiple H atoms of benzene replaced. Direction controlled by existing substituent (ortho-para or meta directing).'}
        ].map(r=>`<div style="background:rgba(0,0,0,.2);border-left:4px solid ${r.col};border-radius:0 10px 10px 0;padding:.6rem 1rem">
          <span style="font-family:'Fredoka One',cursive;color:${r.col}">${r.n}. ${r.t}: </span><span style="font-size:.85rem;color:#94a3b8">${r.d}</span>
        </div>`).join('')}
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#f472b6"><span class="note-card-icon">⚡</span><span class="note-card-title" style="color:#f472b6">Attacking Reagents — 3 Types</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Type</th><th>How formed</th><th>Examples</th><th>Attacks</th></tr>
        <tr><td style="color:#fbbf24">Free Radical (R•)</td><td>Homolysis — bond breaks symmetrically (hν or heat)</td><td>•Cl, •Br, •CH₃, •CH₂CH₃</td><td>π-bonds of alkene</td></tr>
        <tr><td style="color:#f87171">Electrophile (E⁺ or E)</td><td>Heterolysis — electron-POOR species</td><td>H⁺, H₃O⁺, NO₂⁺, Cl⁺, Br⁺, SO₃, AlCl₃, FeCl₃</td><td>π electrons / electron-rich sites</td></tr>
        <tr><td style="color:#60a5fa">Nucleophile (:Nu⁻ or :Nu)</td><td>Heterolysis — electron-RICH species</td><td>HO⁻, CN⁻, Cl⁻, Br⁻, I⁻, NH₃, H₂O, ROH</td><td>Electron-deficient C (δ+)</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">🏆</span><span class="note-card-title" style="color:#fbbf24">Markovnikov's Rule (1869)</span></div>
    <div class="note-card-body">
      <strong>Rule:</strong> When an unsymmetrical alkene reacts with an unsymmetrical reagent (HBr, HCl, HOBr), the <strong>negative part adds to the carbon with LESS hydrogen atoms</strong>.<br><br>
      Alternatively: <strong>positive part (H⁺) adds to carbon with MORE H atoms</strong>.<br><br>
      <strong>Why?</strong> H⁺ attacks to form more stable <strong>secondary (2°) carbocation</strong> preferentially over less stable primary (1°) carbocation.<br><br>
      <div class="note-formula">Propene + HBr → 90% 2-bromopropane (Markovnikov) + 10% 1-bromopropane</div>
      <strong>Carbocation stability order: 3° &gt; 2° &gt; 1° &gt; ⁺CH₃</strong><br><br>
      <div style="background:rgba(248,113,113,.08);border-left:3px solid #f87171;padding:.5rem .8rem;border-radius:0 8px 8px 0;font-size:.85rem;margin-top:.5rem">
        ⚠️ <strong>Anti-Markovnikov / Kharasch Effect (1933):</strong> In presence of <strong>organic peroxide (R–O–O–R)</strong>, HBr adds OPPOSITE to Markovnikov. Negative part (Br⁻) adds to C with MORE H. Free radical mechanism. <strong>Only works with HBr — NOT HCl or HI!</strong><br>
        Propene + HBr + peroxide → 99.1% 1-bromopropane (anti-Markovnikov)
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#a3e635"><span class="note-card-icon">🔬</span><span class="note-card-title" style="color:#a3e635">Aldol Condensation & Cannizzaro's Reaction</span></div>
    <div class="note-card-body">
      <strong>Aldol Condensation:</strong> Aldehydes/ketones WITH α-H + dil. NaOH (20–30°C) → β-hydroxy aldehyde/ketone (aldol)<br>
      <div class="note-formula">CH₃CHO + CH₃CHO → dil. NaOH → CH₃CH(OH)CH₂CHO (3-hydroxybutanal / aldol)</div>
      "Aldol" = aldehyde (ald) + alcohol (ol). Mechanism: α-H acidic → carbanion → attacks another C=O → C–C bond forms.<br><br>
      <strong>Cannizzaro's Reaction:</strong> Aldehydes WITHOUT α-H (HCHO, C₆H₅CHO) + 50% conc. NaOH → disproportionation (one oxidised → acid, one reduced → alcohol)<br>
      <div class="note-formula">2 HCHO + 50%NaOH → CH₃OH (methanol) + HCOONa (sodium formate)</div>
      <div class="note-formula">2 C₆H₅CHO + 50%NaOH → C₆H₅CH₂OH (benzyl alcohol) + C₆H₅COONa (sodium benzoate)</div>
      <strong>Reactivity order:</strong> Methanal &gt; Ethanal &gt; Propanone (more alkyl groups = less reactive)
    </div></div>
  </div>

  <!-- MECHANISMS -->
  <div id="th-mech" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#a3e635"><span class="note-card-icon">🔧</span><span class="note-card-title" style="color:#a3e635">SN1 vs SN2 Nucleophilic Substitution</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Characteristics</th><th style="color:#60a5fa">S_N1 (Unimolecular)</th><th style="color:#f472b6">S_N2 (Bimolecular)</th></tr>
        <tr><td>Steps</td><td>2 steps — carbonium ion forms first, then nucleophile attacks</td><td>1 step — transition complex forms</td></tr>
        <tr><td>Best alkyl halide</td><td>3° alkyl halide (most stable carbocation)</td><td>1° alkyl halide (least steric hindrance)</td></tr>
        <tr><td>Nucleophile needed</td><td>Weak nucleophile</td><td>Strong nucleophile</td></tr>
        <tr><td>Reactivity of RX</td><td>3° &gt; 2° &gt; 1°</td><td>1° &gt; 2° &gt; 3°</td></tr>
        <tr><td>Rate depends on</td><td>[RX] only — 1st order reaction</td><td>[RX] and [Nu] both — 2nd order</td></tr>
        <tr><td>Solvent</td><td>Polar solvent (favours carbocation)</td><td>Non-polar solvent</td></tr>
        <tr><td>Molecularity</td><td>Unimolecular</td><td>Bimolecular</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fb923c"><span class="note-card-icon">🚪</span><span class="note-card-title" style="color:#fb923c">Elimination Reactions (E1 and E2)</span></div>
    <div class="note-card-body">
      Removal of two atoms/groups from adjacent C atoms forming new C=C (π-bond). Opposite of addition.<br><br>
      <strong>Electrophilic elimination (E1):</strong> Like S_N1 — 2 steps. R–CH₂CH₂OH + conc. H₂SO₄ → alkene (via carbonium ion)<br>
      <strong>Nucleophilic elimination (E2):</strong> Like S_N2 — 1 step. R–CH₂CH₂X + KOH(alc.) → alkene + HX + KX<br><br>
      <div class="note-formula">Propyl chloride + KOH(aq) → propanol [substitution]</div>
      <div class="note-formula">Propyl chloride + KOH(alc.) → propene + KCl + H₂O [elimination]</div>
      <strong>Saytzeff's Rule:</strong> When more than one alkene can form from elimination, the <strong>more branched (more substituted) alkene is the major product</strong>.<br>
      Example: 2-butanol → 80% but-2-ene (more branched) + 20% but-1-ene<br><br>
      <table class="note-table">
        <tr><th>Condition</th><th>Reaction favoured</th></tr>
        <tr><td>Aq. KOH (weak nucleophile)</td><td>S_N2 substitution</td></tr>
        <tr><td>Alc. KOH (strong nucleophile)</td><td>E2 elimination</td></tr>
        <tr><td>3° alkyl halide</td><td>E1 elimination</td></tr>
        <tr><td>1° alkyl halide</td><td>S_N2 substitution</td></tr>
        <tr><td>Polar solvent</td><td>S_N1</td></tr>
        <tr><td>Non-polar solvent + strong alkali</td><td>E2</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#c084fc"><span class="note-card-icon">🧲</span><span class="note-card-title" style="color:#c084fc">Inductive Effect & Mesomeric Effect — Orientation</span></div>
    <div class="note-card-body">
      <strong>Inductive Effect (I):</strong> Polarisation of C–X sigma bond<br>
      <span style="color:#f87171">Negative –I</span>: X more electronegative than C (F, Cl, Br, NO₂) → withdraws electrons<br>
      <span style="color:#4ade80">Positive +I</span>: Alkyl groups (–CH₃, –C₂H₅) → donate electrons<br><br>
      <strong>Mesomeric Effect (M):</strong> Delocalisation of π electrons<br>
      <span style="color:#4ade80">Positive +M</span>: Lone pair donated to ring (–OH, –NH₂, –Cl) → activates ring<br>
      <span style="color:#f87171">Negative –M</span>: π electrons withdrawn from ring (–NO₂, –CHO, –COOH, –CN) → deactivates ring<br><br>
      <table class="note-table">
        <tr><th>Group type</th><th>Effect</th><th>Directs to</th><th>Examples</th></tr>
        <tr><td style="color:#4ade80">Activating</td><td>+I or +M</td><td><strong>ortho + para</strong></td><td>–CH₃, –C₂H₅, –NH₂, –OH, –OCH₃, –Cl</td></tr>
        <tr><td style="color:#f87171">Deactivating</td><td>–M</td><td><strong>meta</strong></td><td>–NO₂, –CHO, –COOH, –CN, –SO₃H</td></tr>
      </table>
      <div style="margin-top:.6rem;font-size:.82rem;color:#94a3b8">
        💡 <strong>Toluene reacts faster than benzene</strong> because –CH₃ group has +I effect.<br>
        Nitration: benzene at 60°C vs toluene at 30°C. Sulphonation of toluene at 5°C (below room temp!)
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">⚠️</span><span class="note-card-title" style="color:#fbbf24">Toluene Reactions — Side Chain vs Ring</span></div>
    <div class="note-card-body">
      <strong>–CH₃ group in toluene:</strong> Can react at RING (electrophilic substitution) or SIDE CHAIN depending on conditions.<br><br>
      <table class="note-table">
        <tr><th>Condition</th><th>Where reaction occurs</th><th>Product</th></tr>
        <tr><td>Cl₂ + AlCl₃, 20°C, no light</td><td>Ring</td><td>ortho + para-chlorotoluene</td></tr>
        <tr><td>Cl₂ + sunlight / 111°C</td><td>Side chain (–CH₃)</td><td>Benzyl chloride → Benzal chloride → Benzo chloride</td></tr>
        <tr><td>+ 3[O] (KMnO₄/KOH)</td><td>Side chain oxidation</td><td>Benzoic acid (C₆H₅COOH)</td></tr>
        <tr><td>+ CH₃COCl + AlCl₃, 40–50°C</td><td>Ring (acylation)</td><td>4-methyl phenyl ethanone (mainly para)</td></tr>
        <tr><td>Fuming H₂SO₄, 5°C</td><td>Ring (sulphonation)</td><td>ortho + para-toluene sulphonic acid</td></tr>
      </table>
    </div></div>
  </div>
</div>`;

  // ══════════════════════════════════════════════
  //  🔄  ISOMERISM PANEL
  // ══════════════════════════════════════════════
  panels['is'] = `
<div class="ph" style="border-color:#0f766e;color:#0f766e"><div class="phi">🔄</div><div><div class="pht">Isomerism — Complete Guide</div><div class="phb"><span class="badge">5 types structural</span><span class="badge">Cis/Trans</span><span class="badge">Optical isomers</span><span class="badge">Meso compounds</span></div><div class="phd">Full isomerism from EV Chemistry Chapter 2 (Sections 2.6–2.6.6). The most important exam topic!</div></div></div>
<div class="nt-wrap">
  <div class="nt-tabs">
    <button class="nt-tab on" style="color:#2dd4bf" onclick="ntTab(this,'is-def')">📌 Definition</button>
    <button class="nt-tab" style="color:#34d399" onclick="ntTab(this,'is-struct')">🔗 Structural</button>
    <button class="nt-tab" style="color:#60a5fa" onclick="ntTab(this,'is-geo')">📐 Geometric</button>
    <button class="nt-tab" style="color:#a78bfa" onclick="ntTab(this,'is-opt')">💡 Optical</button>
    <button class="nt-tab" style="color:#fbbf24" onclick="ntTab(this,'is-count')">🔢 Count</button>
  </div>

  <!-- DEFINITION TAB -->
  <div id="is-def" class="nt-pane on">
    <div class="note-card"><div class="note-card-head" style="border-color:#2dd4bf"><span class="note-card-icon">🔄</span><span class="note-card-title" style="color:#2dd4bf">What is Isomerism? (Section 2.6)</span></div>
    <div class="note-card-body">
      Organic compounds having the <strong>same molecular formula but different structural formulae</strong> that differ in physical and chemical properties are called <strong>isomers</strong> and this phenomenon is called <strong>isomerism</strong>.<br><br>
      <strong>Word origin:</strong> Greek — isos = equal; meros = parts<br><br>
      <strong>Example:</strong> C₂H₆O has 2 isomers with completely different properties:
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin:.7rem 0">
        <div style="background:rgba(56,189,248,.07);border:1.5px solid rgba(56,189,248,.25);border-radius:10px;padding:.8rem;text-align:center">
          <div style="font-family:'Fredoka One',cursive;color:#38bdf8;font-size:.95rem">Ethanol</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.78rem;color:#fde68a;margin:.3rem 0">CH₃–CH₂–OH</div>
          <div style="font-size:.72rem;color:#6b7280">Liquid · bp 78.3°C<br>Reacts with Na → H₂</div>
        </div>
        <div style="background:rgba(192,132,252,.07);border:1.5px solid rgba(192,132,252,.25);border-radius:10px;padding:.8rem;text-align:center">
          <div style="font-family:'Fredoka One',cursive;color:#c084fc;font-size:.95rem">Dimethyl Ether</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.78rem;color:#fde68a;margin:.3rem 0">CH₃–O–CH₃</div>
          <div style="font-size:.72rem;color:#6b7280">Gas · bp −25°C<br>Does NOT react with Na</div>
        </div>
      </div>
      <strong>Broad classification of isomerism:</strong>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.6rem;margin-top:.6rem">
        <div style="background:rgba(52,211,153,.07);border:1.5px solid rgba(52,211,153,.25);border-radius:10px;padding:.7rem;text-align:center">
          <div style="font-family:'Fredoka One',cursive;color:#34d399">A. Structural Isomerism</div>
          <div style="font-size:.72rem;color:#6b7280;margin-top:.3rem">Chain · Position · Functional Group · Metamerism · Tautomerism</div>
        </div>
        <div style="background:rgba(167,139,250,.07);border:1.5px solid rgba(167,139,250,.25);border-radius:10px;padding:.7rem;text-align:center">
          <div style="font-family:'Fredoka One',cursive;color:#a78bfa">B. Stereoisomerism</div>
          <div style="font-size:.72rem;color:#6b7280;margin-top:.3rem">Geometric (cis/trans) · Optical isomerism</div>
        </div>
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">📊</span><span class="note-card-title" style="color:#fbbf24">Chain Isomers Count (from EV Textbook)</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Carbon atoms</th><th>Chain isomers (alkane)</th></tr>
        <tr><td>4C</td><td>2 (n-butane, isobutane)</td></tr>
        <tr><td>5C</td><td>3</td></tr>
        <tr><td>6C</td><td>5</td></tr>
        <tr><td>7C</td><td>9</td></tr>
        <tr><td>8C</td><td>18</td></tr>
        <tr><td>10C</td><td>75</td></tr>
      </table>
    </div></div>
  </div>

  <!-- STRUCTURAL TAB -->
  <div id="is-struct" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#34d399"><span class="note-card-icon">🔗</span><span class="note-card-title" style="color:#34d399">Structural Isomerism — 5 Types</span></div>
    <div class="note-card-body">Arises due to different arrangement of atoms/groups <strong>without referring to spatial positions</strong>. Members are usually from the same homologous series.</div></div>

    ${[
      {n:'1',col:'#ff7043',title:'Chain Isomerism',def:'Same molecular formula, different carbon chain structure.',ex:'C₄H₁₀ → n-Butane (CH₃CH₂CH₂CH₃, bp −0.5°C) vs Isobutane / 2-Methylpropane ((CH₃)₃CH, bp −10.2°C)',note:'Chain isomerism is seen mainly in alkanes. Branched isomers always have lower boiling points than straight-chain isomers.'},
      {n:'2',col:'#60a5fa',title:'Position Isomerism',def:'Same molecular formula and chain, but functional group/double bond/substituent at different position.',ex:'But-1-ene (CH₂=CHCH₂CH₃, bp −6.5°C) vs But-2-ene (CH₃CH=CHCH₃, bp 1.4°C) — double bond at C1 vs C2',note:'Also: ortho-xylene (bp 142°C), meta-xylene (bp 139°C), para-xylene (bp 137°C) are position isomers.'},
      {n:'3',col:'#f472b6',title:'Functional Group Isomerism',def:'Same molecular formula but different functional groups. Isomers belong to different homologous series — different physical AND chemical properties.',ex:'C₂H₆O → Ethanol CH₃CH₂OH (alcohol, liquid, bp 78.3°C) vs Dimethyl ether CH₃OCH₃ (gas, bp −25°C) | C₃H₆O → Propanal CH₃CH₂CHO (bp 48.8°C) vs Propanone CH₃COCH₃ (bp 56°C) vs Allyl alcohol CH₂=CHCH₂OH (bp 97°C)',note:'3 functional group isomers of C₃H₆O: propanal, propanone, and prop-2-en-1-ol'},
      {n:'4',col:'#a78bfa',title:'Metamerism',def:'Same molecular formula, different alkyl groups on SAME functional group. Seen in ethers, ketones and secondary amines.',ex:'C₄H₁₀O → Diethyl ether C₂H₅OC₂H₅ (bp 34.5°C) vs Methyl propyl ether CH₃OC₃H₇ (bp 39°C) vs Methyl isopropyl ether (bp 32.5°C)',note:'Also: C₅H₁₀O → 2-pentanone (pentan-2-one), 3-pentanone (pentan-3-one), 3-methyl butan-2-one are metamers.'},
      {n:'5',col:'#fbbf24',title:'Tautomerism',def:'A compound spontaneously converts between two forms with different functional groups and remains in dynamic equilibrium. The two forms are called tautomers.',ex:'Propanone (keto form: CH₃–CO–CH₃) ⇌ Prop-2-en-1-ol (enol form: CH₃–C=CH₂ + OH shift)',note:'This is keto-enol tautomerism. It is a special type of functional group isomerism. Compounds containing keto group (>C=O) in carbon chain show tautomerism.'}
    ].map(t=>`<div class="note-card"><div class="note-card-head" style="border-color:${t.col}"><span class="note-card-icon">${t.n}️⃣</span><span class="note-card-title" style="color:${t.col}">${t.title}</span></div>
    <div class="note-card-body">
      <strong>Definition:</strong> ${t.def}<br><br>
      <strong>Example:</strong><br><div class="note-formula">${t.ex}</div>
      <div style="background:rgba(251,191,36,.07);border-left:3px solid #fbbf24;padding:.5rem .8rem;border-radius:0 8px 8px 0;font-size:.8rem;color:#94a3b8;margin-top:.5rem">💡 ${t.note}</div>
    </div></div>`).join('')}
  </div>

  <!-- GEOMETRIC TAB -->
  <div id="is-geo" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#60a5fa"><span class="note-card-icon">📐</span><span class="note-card-title" style="color:#60a5fa">Geometrical (Cis-Trans) Isomerism — Section 2.6.1</span></div>
    <div class="note-card-body">
      Compounds with the <strong>same structural formula but different relative arrangement of atoms or groups in space around C=C</strong> are called geometrical isomers.<br><br>
      <strong>2 CONDITIONS for geometrical isomerism:</strong><br>
      <div style="display:flex;flex-direction:column;gap:.4rem;margin:.5rem 0">
        <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;padding:.5rem .8rem;border-radius:0 8px 8px 0;font-size:.85rem;color:#94a3b8">1️⃣ Substituted alkene with formula abC=Cab or abC=Cad</div>
        <div style="background:rgba(96,165,250,.08);border-left:3px solid #60a5fa;padding:.5rem .8rem;border-radius:0 8px 8px 0;font-size:.85rem;color:#94a3b8">2️⃣ Substituted cyclic alkane (e.g. 1,2-dimethylcyclopropane)</div>
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#34d399"><span class="note-card-icon">⚖️</span><span class="note-card-title" style="color:#34d399">cis vs trans — Properties Compared</span></div>
    <div class="note-card-body">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.8rem;margin-bottom:.8rem">
        <div style="background:rgba(96,165,250,.07);border:2px solid #60a5fa;border-radius:12px;padding:.9rem;text-align:center">
          <div style="font-family:'Fredoka One',cursive;color:#60a5fa;font-size:1rem;margin-bottom:.3rem">cis isomer</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#fde68a">Similar groups SAME side</div>
        </div>
        <div style="background:rgba(244,114,182,.07);border:2px solid #f472b6;border-radius:12px;padding:.9rem;text-align:center">
          <div style="font-family:'Fredoka One',cursive;color:#f472b6;font-size:1rem;margin-bottom:.3rem">trans isomer</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:.72rem;color:#fde68a">Similar groups OPPOSITE sides</div>
        </div>
      </div>
      <table class="note-table">
        <tr><th>Property</th><th style="color:#60a5fa">cis</th><th style="color:#f472b6">trans</th></tr>
        <tr><td>Stability</td><td>Less stable (more internal energy)</td><td><strong>More stable</strong></td></tr>
        <tr><td>Melting point</td><td>Lower mp</td><td><strong>Higher mp</strong></td></tr>
        <tr><td>Heat of combustion</td><td>More (less stable)</td><td>Less</td></tr>
        <tr><td>Solubility</td><td><strong>More soluble</strong></td><td>Less soluble</td></tr>
        <tr><td>Refractive index</td><td><strong>Higher</strong></td><td>Lower</td></tr>
        <tr><td>Anhydride formation</td><td>✅ Yes (heating)</td><td>❌ No</td></tr>
      </table>
      <div class="note-formula">Example: cis-but-2-ene (bp 4°C) vs trans-but-2-ene (bp 1°C)</div>
      <div class="note-formula">Maleic acid (cis, mp 135°C) → anhydride at 160°C | Fumaric acid (trans, mp 287°C) → no anhydride</div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#f59e0b"><span class="note-card-icon">👁️</span><span class="note-card-title" style="color:#f59e0b">Fascinating Fact — Vision and Geometric Isomers!</span></div>
    <div class="note-card-body">
      Retinal (a 20-carbon aldehyde from Vitamin A) exists as two geometric isomers in the human eye:<br><br>
      <strong>How we see:</strong> Light → breaks π bond at C11–C12 of cis-retinal → converts to trans-retinal → protein shape change → ion flow → electrical impulse to brain → we see!<br><br>
      The photon energy (~250 kJ/mol) breaks the C=C π bond in a few trillionths of a second. This is how <strong>light energy converts to mechanical then electrical energy</strong> for vision.<br><br>
      <div style="font-size:.75rem;color:#6b7280;font-style:italic">d-glucose produces energy in metabolic function, but l-glucose does not. l-alanine (amino acid) is used in protein synthesis, but d-alanine is not. Enzymes have chiral binding sites.</div>
    </div></div>
  </div>

  <!-- OPTICAL TAB -->
  <div id="is-opt" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#a78bfa"><span class="note-card-icon">💡</span><span class="note-card-title" style="color:#a78bfa">Optical Isomerism — Section 2.6.3</span></div>
    <div class="note-card-body">
      Isomers with the <strong>same molecular formula, same structural formula, same physical/chemical properties but differ by their action on plane-polarised light</strong> are called optical isomers.<br><br>
      <strong>3 CONDITIONS for optical activity:</strong>
      <div style="display:flex;flex-direction:column;gap:.35rem;margin:.5rem 0">
        <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;padding:.45rem .8rem;border-radius:0 8px 8px 0;font-size:.85rem;color:#94a3b8">✳️ Must contain <strong>asymmetric carbon (chiral centre)</strong> — C with 4 DIFFERENT groups</div>
        <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;padding:.45rem .8rem;border-radius:0 8px 8px 0;font-size:.85rem;color:#94a3b8">✳️ Two isomers must be <strong>mirror images</strong> of each other</div>
        <div style="background:rgba(167,139,250,.08);border-left:3px solid #a78bfa;padding:.45rem .8rem;border-radius:0 8px 8px 0;font-size:.85rem;color:#94a3b8">✳️ Mirror images must be <strong>non-superimposable</strong></div>
      </div>
      <strong>Chiral centre</strong> is denoted by asterisk (*). Example: Lactic acid CH₃–*C(OH)H–COOH
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#f472b6"><span class="note-card-icon">🔃</span><span class="note-card-title" style="color:#f472b6">Key Optical Isomer Types</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Term</th><th>Definition</th><th>Example</th></tr>
        <tr><td style="color:#fde68a">Dextrorotatory (d or +)</td><td>Rotates polarised light CLOCKWISE</td><td>d-lactic acid: +2.24°</td></tr>
        <tr><td style="color:#6ee7b7">Levorotatory (l or −)</td><td>Rotates polarised light ANTICLOCKWISE</td><td>l-lactic acid: −2.24°</td></tr>
        <tr><td style="color:#60a5fa">Enantiomers</td><td>Non-superimposable mirror images — rotate light equally but in opposite directions. Also called enantiomorphs, antimers, antipodes</td><td>d-lactic &amp; l-lactic acid</td></tr>
        <tr><td style="color:#f472b6">Racemic mixture (dl or ±)</td><td>Equimolar mix of d+l isomers → optically INACTIVE (mutual cancellation). Also called racemates. Process = racemisation</td><td>dl-lactic acid</td></tr>
        <tr><td style="color:#fb923c">Diastereoisomers</td><td>Two optical isomers with DISSIMILAR chiral centres — NOT mirror images. Differ in physical properties (mp, bp, solubility)</td><td>2-bromo-3-chloro butane (4 isomers)</td></tr>
        <tr><td style="color:#c084fc">Meso isomer</td><td>TWO SIMILAR chiral centres with plane of symmetry — internally compensated → optically INACTIVE despite having chiral carbons</td><td>meso-tartaric acid</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#34d399"><span class="note-card-icon">🍇</span><span class="note-card-title" style="color:#34d399">Tartaric Acid — Classic Meso Example</span></div>
    <div class="note-card-body">
      Tartaric acid (2,3-dihydroxybutanedioic acid) with <strong>2 similar chiral centres</strong> has THREE forms:
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.6rem;margin:.6rem 0;text-align:center">
        <div style="background:rgba(251,191,36,.08);border:1.5px solid #fbbf24;border-radius:10px;padding:.7rem"><div style="font-family:'Fredoka One',cursive;color:#fbbf24;font-size:.85rem">d(+) tartaric acid</div><div style="font-size:.7rem;color:#6b7280;margin-top:.2rem">Optically active<br>Dextrorotatory</div></div>
        <div style="background:rgba(74,222,128,.08);border:1.5px solid #4ade80;border-radius:10px;padding:.7rem"><div style="font-family:'Fredoka One',cursive;color:#4ade80;font-size:.85rem">l(−) tartaric acid</div><div style="font-size:.7rem;color:#6b7280;margin-top:.2rem">Optically active<br>Levorotatory</div></div>
        <div style="background:rgba(192,132,252,.08);border:1.5px solid #c084fc;border-radius:10px;padding:.7rem"><div style="font-family:'Fredoka One',cursive;color:#c084fc;font-size:.85rem">meso-tartaric acid</div><div style="font-size:.7rem;color:#6b7280;margin-top:.2rem">Optically INACTIVE<br>Has plane of symmetry</div></div>
      </div>
      <div style="font-size:.8rem;color:#94a3b8">💡 <strong>Biological note:</strong> Almost all carbohydrates and amino acids are optically active. d-glucose gives energy in metabolic function; l-alanine is used for protein synthesis. Only one isomer participates in biological reactions — enzymes have chiral binding sites!</div>
    </div></div>
  </div>

  <!-- COUNT TAB -->
  <div id="is-count" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">🔢</span><span class="note-card-title" style="color:#fbbf24">Formulae for Counting Optical Isomers</span></div>
    <div class="note-card-body">
      <div style="display:flex;flex-direction:column;gap:.7rem">
        <div style="background:rgba(251,191,36,.08);border:2px solid rgba(251,191,36,.4);border-radius:12px;padding:.9rem 1.1rem">
          <div style="font-family:'Fredoka One',cursive;color:#fbbf24;font-size:1rem;margin-bottom:.4rem">n DISSIMILAR chiral centres:</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:1.1rem;color:#fde68a">Total optical isomers = 2ⁿ</div>
          <div style="font-size:.78rem;color:#94a3b8;margin-top:.3rem">Example: Lactic acid (n=1) → 2¹ = 2 optical isomers</div>
          <div style="font-size:.78rem;color:#94a3b8">2-bromo-3-chloro butane (n=2) → 2² = 4 optical isomers, diastereoisomers = 2</div>
        </div>
        <div style="background:rgba(192,132,252,.08);border:2px solid rgba(192,132,252,.4);border-radius:12px;padding:.9rem 1.1rem">
          <div style="font-family:'Fredoka One',cursive;color:#c084fc;font-size:1rem;margin-bottom:.4rem">n SIMILAR chiral centres (n = even number):</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:1rem;color:#fde68a">Optical isomers = 2ⁿ⁻¹</div>
          <div style="font-family:'JetBrains Mono',monospace;font-size:1rem;color:#6ee7b7;margin-top:.3rem">Meso isomers = 2^((n−2)/2)</div>
          <div style="font-size:.78rem;color:#94a3b8;margin-top:.3rem">Example: Tartaric acid (n=2) → optical isomers = 2²⁻¹ = 2 (d and l) | meso = 2⁰ = 1</div>
        </div>
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#34d399"><span class="note-card-icon">📊</span><span class="note-card-title" style="color:#34d399">Optical Isomers Summary Table</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Compound</th><th>Chiral centres</th><th>Optical isomers (2ⁿ)</th><th>Type</th></tr>
        <tr><td>Lactic acid CH₃CHOHCOOH</td><td>1</td><td>2 (d and l)</td><td>Dissimilar → enantiomers</td></tr>
        <tr><td>2-bromo-3-chloro butane</td><td>2 dissimilar</td><td>4 (2 pairs)</td><td>Diastereoisomers possible</td></tr>
        <tr><td>2,3-dibromo butane</td><td>2 similar</td><td>2 (d, l) + 1 meso</td><td>Meso possible</td></tr>
        <tr><td>Tartaric acid</td><td>2 similar</td><td>2 (d, l) + 1 meso</td><td>Classic meso example</td></tr>
        <tr><td>Glucose (aldopentose type)</td><td>4</td><td>2⁴ = 16</td><td>Many diastereoisomers</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#60a5fa"><span class="note-card-icon">📋</span><span class="note-card-title" style="color:#60a5fa">Priority List of Functional Groups (Table 2.8)</span></div>
    <div class="note-card-body">
      When naming compounds with multiple functional groups, the <strong>highest priority group gets the lowest locant</strong> and is expressed as the secondary suffix. Lower priority groups become prefixes.
      <table class="note-table">
        <tr><th>Priority</th><th>Class</th><th>Group</th><th>Suffix</th><th>Prefix</th></tr>
        <tr><td style="color:#ef4444">1 (Highest)</td><td>Carboxylic Acid</td><td>–COOH</td><td>–oic acid</td><td>–</td></tr>
        <tr><td style="color:#f97316">2</td><td>Sulphonic Acid</td><td>–SO₃H</td><td>sulphonic acid</td><td>–</td></tr>
        <tr><td style="color:#f97316">3</td><td>Acid Halide</td><td>–COX</td><td>–oyl halide</td><td>–</td></tr>
        <tr><td style="color:#eab308">4</td><td>Amide</td><td>–CONH₂</td><td>–amide</td><td>Amido–</td></tr>
        <tr><td style="color:#eab308">5</td><td>Nitrile</td><td>–CN</td><td>–nitrile</td><td>Cyano–</td></tr>
        <tr><td style="color:#fbbf24">6 ⭐</td><td>Aldehyde</td><td>–CHO</td><td>–al</td><td>Alkanoyl–</td></tr>
        <tr><td style="color:#fbbf24">7 ⭐</td><td>Ketone</td><td>–CO–</td><td>–one</td><td>Oxo–</td></tr>
        <tr><td style="color:#4ade80">8 ⭐</td><td>Alcohol</td><td>–OH</td><td>–ol</td><td>Hydroxy–</td></tr>
        <tr><td style="color:#34d399">9</td><td>Amine</td><td>–NH₂</td><td>–amine</td><td>Amino–</td></tr>
        <tr><td style="color:#60a5fa">10 ⭐</td><td>Alkene</td><td>–C=C–</td><td>–ene</td><td>–</td></tr>
        <tr><td style="color:#60a5fa">11 ⭐</td><td>Alkyne</td><td>–C≡C–</td><td>–yne</td><td>–</td></tr>
        <tr><td style="color:#94a3b8">12 (Lowest)</td><td>Alkane</td><td>–C–C–</td><td>–ane</td><td>–</td></tr>
      </table>
      <div style="font-size:.78rem;color:#6b7280;margin-top:.5rem">⭐ = the 6 most important groups to memorise for exam (as noted in textbook)</div>
    </div></div>
  </div>
</div>`;

  // ══════════════════════════════════════════════
  //  💎  ARENES PANEL
  // ══════════════════════════════════════════════
  panels['ar'] = `
<div class="ph" style="border-color:#7e22ce;color:#7e22ce"><div class="phi">💎</div><div><div class="pht">Arenes — Aromatic Compounds</div><div class="phb"><span class="badge">Benzene structure</span><span class="badge">4 substitution reactions</span><span class="badge">Hückel rules</span><span class="badge">5 prep methods</span></div><div class="phd">Complete aromatic chemistry from EV Chemistry Ch.2 — benzene structure, reactions, Friedel-Craft, aromaticity.</div></div></div>
<div class="nt-wrap">
  <div class="nt-tabs">
    <button class="nt-tab on" style="color:#a78bfa" onclick="ntTab(this,'ar-def')">💎 Definition</button>
    <button class="nt-tab" style="color:#c084fc" onclick="ntTab(this,'ar-struct')">⬡ Structure</button>
    <button class="nt-tab" style="color:#818cf8" onclick="ntTab(this,'ar-prep')">⚗️ Preparation</button>
    <button class="nt-tab" style="color:#60a5fa" onclick="ntTab(this,'ar-react')">🔬 Reactions</button>
    <button class="nt-tab" style="color:#fbbf24" onclick="ntTab(this,'ar-huckel')">📐 Hückel Rules</button>
    <button class="nt-tab" style="color:#fb923c" onclick="ntTab(this,'ar-coaltab')">⛽ Coal Tar</button>
  </div>

  <!-- DEFINITION -->
  <div id="ar-def" class="nt-pane on">
    <div class="note-card"><div class="note-card-head" style="border-color:#a78bfa"><span class="note-card-icon">💎</span><span class="note-card-title" style="color:#a78bfa">What are Aromatic Compounds?</span></div>
    <div class="note-card-body">
      The word <strong>'aromatic'</strong> comes from the Greek word <em>'aroma'</em> meaning <strong>sweet smell</strong>. Early chemists found that sweet-smelling compounds had different properties from aliphatic ones — they were called aromatic.<br><br>
      <strong>Definition:</strong> Benzene, benzene derivatives and benzene-like unsaturated cyclic organic compounds which contain <strong>Hückel rule based (4n+2) resonating π-electrons</strong> are called aromatic compounds.<br><br>
      <strong>Benzene is the prime compound</strong> of the aromatic class. Aromatic hydrocarbons are also called <strong>arenes</strong>.<br><br>
      <table class="note-table">
        <tr><th>Compound</th><th>Formula</th><th>π electrons</th><th>n value</th><th>Aromatic?</th></tr>
        <tr><td>Benzene</td><td>C₆H₆</td><td>6</td><td>n=1</td><td>✅ Yes</td></tr>
        <tr><td>Naphthalene</td><td>C₁₀H₈</td><td>10</td><td>n=2</td><td>✅ Yes</td></tr>
        <tr><td>Anthracene</td><td>C₁₄H₁₀</td><td>14</td><td>n=3</td><td>✅ Yes</td></tr>
        <tr><td>Cyclobutadiene</td><td>C₄H₄</td><td>4</td><td>—</td><td>❌ Anti-aromatic</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#60a5fa"><span class="note-card-icon">📍</span><span class="note-card-title" style="color:#60a5fa">ortho / meta / para Positions</span></div>
    <div class="note-card-body">
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.7rem;text-align:center;margin:.5rem 0">
        <div style="background:rgba(239,68,68,.08);border:2px solid #ef4444;border-radius:12px;padding:.8rem"><div style="font-family:'Fredoka One',cursive;color:#ef4444">ortho (o)</div><div style="font-size:.72rem;color:#94a3b8;margin-top:.3rem">Position <strong>2 or 6</strong><br><em>"nearer"</em></div></div>
        <div style="background:rgba(234,179,8,.08);border:2px solid #eab308;border-radius:12px;padding:.8rem"><div style="font-family:'Fredoka One',cursive;color:#eab308">meta (m)</div><div style="font-size:.72rem;color:#94a3b8;margin-top:.3rem">Position <strong>3 or 5</strong><br><em>"alternate"</em></div></div>
        <div style="background:rgba(34,197,94,.08);border:2px solid #22c55e;border-radius:12px;padding:.8rem"><div style="font-family:'Fredoka One',cursive;color:#22c55e">para (p)</div><div style="font-size:.72rem;color:#94a3b8;margin-top:.3rem">Position <strong>4</strong><br><em>"far away"</em></div></div>
      </div>
      Disubstituted benzene has <strong>3 positional isomers</strong>: ortho, meta and para.<br>
      Example — Xylene (dimethylbenzene): ortho-xylene (bp 142°C), meta-xylene (bp 139°C), para-xylene (bp 137°C)
    </div></div>
  </div>

  <!-- STRUCTURE -->
  <div id="ar-struct" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#c084fc"><span class="note-card-icon">⬡</span><span class="note-card-title" style="color:#c084fc">Molecular Orbital Structure of Benzene (Section 2.8.3)</span></div>
    <div class="note-card-body">
      <strong>Key structural facts from X-ray diffraction:</strong><br><br>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:.7rem;margin:.5rem 0">
        <div style="background:rgba(192,132,252,.07);border:1.5px solid rgba(192,132,252,.25);border-radius:10px;padding:.75rem">
          <div style="font-family:'Fredoka One',cursive;color:#c084fc;font-size:.9rem;margin-bottom:.3rem">Hybridisation</div>
          <div style="font-size:.82rem;color:#94a3b8">All 6 C atoms are <strong>sp² hybridised</strong></div>
        </div>
        <div style="background:rgba(192,132,252,.07);border:1.5px solid rgba(192,132,252,.25);border-radius:10px;padding:.75rem">
          <div style="font-family:'Fredoka One',cursive;color:#c084fc;font-size:.9rem;margin-bottom:.3rem">Shape</div>
          <div style="font-size:.82rem;color:#94a3b8"><strong>Flat, hexagonal, symmetrical</strong> planar molecule</div>
        </div>
      </div>
      <strong>Bond length in benzene = 0.139 nm</strong> — in between:<br>
      <div style="display:flex;justify-content:space-around;flex-wrap:wrap;gap:.5rem;margin:.6rem 0">
        <div style="text-align:center;background:rgba(74,222,128,.07);border:1.5px solid #4ade80;border-radius:10px;padding:.6rem 1rem"><div style="font-family:'JetBrains Mono',monospace;color:#4ade80">C–C</div><div style="font-size:.7rem;color:#6b7280">0.154 nm</div></div>
        <div style="align-self:center;font-size:1.2rem;color:#374151">&lt;</div>
        <div style="text-align:center;background:rgba(192,132,252,.1);border:2px solid #c084fc;border-radius:10px;padding:.6rem 1rem"><div style="font-family:'JetBrains Mono',monospace;color:#c084fc">benzene C–C</div><div style="font-size:.7rem;color:#fbbf24">0.139 nm ← unique!</div></div>
        <div style="align-self:center;font-size:1.2rem;color:#374151">&lt;</div>
        <div style="text-align:center;background:rgba(244,114,182,.07);border:1.5px solid #f472b6;border-radius:10px;padding:.6rem 1rem"><div style="font-family:'JetBrains Mono',monospace;color:#f472b6">C=C</div><div style="font-size:.7rem;color:#6b7280">0.134 nm</div></div>
      </div>
      <strong>Why this unique bond length?</strong> Each C atom has one unhybridised <strong>2p_z orbital</strong> perpendicular to the ring. Six 2p_z orbitals overlap sideways to form a <strong>symmetrical molecular π-orbital — delocalised cloud of 6 π-electrons</strong> above and below the ring.<br><br>
      <strong>Resonance (Kekulé, 1865):</strong> C–C and C=C bonds constantly interchange positions → benzene is a <strong>resonance hybrid</strong> of structures with 6 resonating π electrons. This gives benzene extra stability.
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">⚠️</span><span class="note-card-title" style="color:#fbbf24">Benzene Unsaturation ≠ Alkene/Alkyne Unsaturation</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>Property</th><th>Alkene/Alkyne</th><th>Benzene</th></tr>
        <tr><td>Bromine test (Br₂/CCl₄)</td><td>✅ Decolourises</td><td>❌ No reaction</td></tr>
        <tr><td>Bayer's KMnO₄ test</td><td>✅ Decolourises</td><td>❌ No reaction</td></tr>
        <tr><td>Addition of HX, HOX</td><td>✅ Yes</td><td>❌ No</td></tr>
        <tr><td>Main reaction type</td><td>Addition</td><td><strong>Electrophilic substitution</strong></td></tr>
      </table>
      <div style="margin-top:.6rem;font-size:.82rem;color:#94a3b8">💡 Benzene is stable because delocalised π electrons resist addition. Strong oxidising agent (acidic K₂Cr₂O₇ on heating) breaks benzene structure.</div>
    </div></div>
  </div>

  <!-- PREPARATION -->
  <div id="ar-prep" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#818cf8"><span class="note-card-icon">⚗️</span><span class="note-card-title" style="color:#818cf8">5 Methods to Prepare Benzene (Section 2.8.2)</span></div>
    <div class="note-card-body">
      ${[
        {n:'1',col:'#ff7043',title:'From Sodium Benzoate + Sodalime (Decarboxylation)',eq:'C₆H₅COONa + NaOH (CaO) → Δ → C₆H₆ + Na₂CO₃',note:'Sodium benzoate (salt of benzoic acid) + sodalime on heating → benzene vapour (bp 80.4°C)'},
        {n:'2',col:'#34d399',title:'From Phenol + Zinc Powder',eq:'C₆H₅OH + Zn → Δ → C₆H₆ + ZnO',note:'Phenol is reduced by zinc powder on heating → benzene vapour → cool → liquid benzene'},
        {n:'3',col:'#c084fc',title:'From Ethyne — Trimerisation (Benzene is polymer of ethyne!)',eq:'3 HC≡CH → Fe, 450°C → C₆H₆',note:'When ethyne gas is passed through an iron tube at 450°C, 3 molecules polymerise to form one molecule of benzene'},
        {n:'4',col:'#60a5fa',title:'From Grignard Reagent',eq:'C₆H₅MgCl + H–OH → C₆H₆ + Mg(OH)Cl',note:'Phenyl magnesium chloride (Grignard reagent) hydrolyses with water to form benzene'},
        {n:'5',col:'#fbbf24',title:'From Benzene Diazonium Chloride',eq:'C₆H₅N₂Cl + H₃PO₂ + H₂O → Cu⁺ → C₆H₆ + H₃PO₃ + N₂ + HCl',note:'Diazonium chloride reduced with phosphinic acid (H₃PO₂) in presence of cuprous ion catalyst'}
      ].map(m=>`<div style="background:rgba(0,0,0,.18);border-left:4px solid ${m.col};border-radius:0 10px 10px 0;padding:.75rem 1rem;margin-bottom:.7rem">
        <div style="font-family:'Fredoka One',cursive;font-size:.9rem;color:${m.col};margin-bottom:.3rem">${m.n}. ${m.title}</div>
        <div class="note-formula" style="margin:.3rem 0">${m.eq}</div>
        <div style="font-size:.78rem;color:#6b7280">${m.note}</div>
      </div>`).join('')}
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fb923c"><span class="note-card-icon">🔶</span><span class="note-card-title" style="color:#fb923c">Toluene Preparation (2 Methods)</span></div>
    <div class="note-card-body">
      <strong>1. Wurtz-Fitting Reaction:</strong><br>
      <div class="note-formula">C₆H₅Cl + 2Na + CH₃Cl → dry ether, Δ → C₆H₅CH₃ (toluene) + 2NaCl</div>
      Aryl halide + alkyl halide + Na metal in dry ether → alkyl arene. Can prepare any alkyl benzene this way.<br><br>
      <strong>2. Friedel-Craft Alkylation:</strong><br>
      <div class="note-formula">C₆H₆ + CH₃Cl → dry AlCl₃ → C₆H₅CH₃ (toluene) + HCl</div>
    </div></div>
  </div>

  <!-- REACTIONS -->
  <div id="ar-react" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#60a5fa"><span class="note-card-icon">A</span><span class="note-card-title" style="color:#60a5fa">A. Electrophilic Addition Reactions</span></div>
    <div class="note-card-body">
      <strong>1. Addition of H₂ (Hydrogenation):</strong>
      <div class="note-formula">C₆H₆ + 3H₂ → Ni, 200°C → C₆H₁₂ (cyclohexane)</div>
      Free-radical type. One mole benzene adds 3 moles H₂ (three C=C bonds).<br><br>
      <strong>2. Addition of Cl₂ (Halogenation — UV/sunlight):</strong>
      <div class="note-formula">C₆H₆ + 3Cl₂ → UV/sunlight → C₆H₆Cl₆ (benzene hexachloride / gammexane)</div>
      Free-radical type. Used as insecticide (BHC/gammexane).<br><br>
      <strong>3. Addition of O₃ (Ozonolysis):</strong>
      <div class="note-formula">C₆H₆ + 3O₃ → CCl₄ → benzene triozonide → H₂O/Zn, Δ → 3 glyoxal + 3ZnO</div>
      Proves benzene has 3 double bonds (takes 3 moles of O₃).
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#f472b6"><span class="note-card-icon">B</span><span class="note-card-title" style="color:#f472b6">B. Electrophilic Substitution Reactions</span></div>
    <div class="note-card-body">
      ${[
        {n:'1',col:'#ef4444',title:'Halogenation (AlCl₃/FeCl₃/FeBr₃ — no light!)',eq:'C₆H₆ + Cl₂ → anhydrous AlCl₃ → C₆H₅Cl (chlorobenzene) + HCl',mech:'AlCl₃ + Cl₂ → AlCl₄⁻ (nucleophile) + Cl⁺ (electrophile) → σ-complex → chlorobenzene + HCl + AlCl₃ (regenerated)',note:'⚠️ Halogen carrier (AlCl₃) needed. Without it (in sunlight) addition occurs instead giving C₆H₆Cl₆'},
        {n:'2',col:'#f59e0b',title:'Nitration (conc. HNO₃ + conc. H₂SO₄, 60°C)',eq:'C₆H₆ + HO–NO₂ → conc. H₂SO₄, 60°C → C₆H₅NO₂ (nitrobenzene) + H₂O',mech:'H₂SO₄ donates H⁺ to HNO₃ → NO₂⁺ (nitronium ion, electrophile) → attacks π electrons → σ-complex → nitrobenzene',note:'NO₂⁺ is the electrophile. Used to make explosives like TNT.'},
        {n:'3',col:'#06b6d4',title:'Sulphonation (fuming H₂SO₄ or H₂SO₄+SO₃, 100°C)',eq:'C₆H₆ + HO–SO₃H → SO₃, Δ → C₆H₅SO₃H (benzene sulphonic acid) + H₂O',mech:'SO₃ acts as electrophile → attacks π electrons → σ-complex → bisulphate ion (HSO₄⁻) removes H⁺ → benzene sulphonic acid',note:'Water formed is absorbed by SO₃ → forms H₂SO₄ → favours forward reaction.'},
        {n:'4',col:'#a78bfa',title:'Friedel-Craft\'s Reaction (anhydrous AlCl₃)',eq:'Alkylation: C₆H₆ + CH₃Cl → dry AlCl₃ → C₆H₅CH₃ (toluene) + HCl\nAcylation: C₆H₆ + CH₃COCl → dry AlCl₃ → C₆H₅COCH₃ (acetophenone) + HCl',mech:'Alkylation: CH₃Cl + AlCl₃ → ⁺CH₃ (electrophile) + AlCl₄⁻ → toluene\nAcylation: CH₃COCl + AlCl₃ → CH₃C⁺=O (acetyl carbonium) → acetophenone',note:'⚠️ WHY DRY AlCl₃? If water present: AlCl₃ + 3H₂O → Al(OH)₃ + 3HCl → AlCl₃ destroyed → cannot form electrophile!'}
      ].map(r=>`<div style="background:rgba(0,0,0,.18);border-left:4px solid ${r.col};border-radius:0 10px 10px 0;padding:.8rem 1rem;margin-bottom:.8rem">
        <div style="font-family:'Fredoka One',cursive;font-size:.9rem;color:${r.col};margin-bottom:.35rem">${r.n}. ${r.title}</div>
        <div class="note-formula" style="margin:.3rem 0;white-space:pre-line">${r.eq}</div>
        <div style="font-size:.78rem;color:#7dd3fc;margin:.25rem 0;white-space:pre-line">⚙️ Mechanism: ${r.mech}</div>
        <div style="font-size:.76rem;color:#6b7280">${r.note}</div>
      </div>`).join('')}
    </div></div>
  </div>

  <!-- HÜCKEL -->
  <div id="ar-huckel" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#fbbf24"><span class="note-card-icon">📐</span><span class="note-card-title" style="color:#fbbf24">Hückel Rules for Aromaticity (Section 2.8.5)</span></div>
    <div class="note-card-body">
      <strong>Eric Hückel (1931)</strong> extended aromaticity to cyclic ions and heterocyclic compounds.<br>
      The concept: <strong>cyclic compounds with (4n+2) delocalised π-electrons have special stability = aromaticity</strong><br><br>
      <div style="display:flex;flex-direction:column;gap:.6rem">
        ${[
          {n:'Rule 1',col:'#ff7043',text:'Structure must be <strong>flat (coplanar) cyclic</strong> with 5 or 6 atoms in the ring. Bonding orbitals in the conjugated ring system must be completely filled.'},
          {n:'Rule 2',col:'#fbbf24',text:'Every ring atom must have a <strong>p-orbital</strong>. The p-orbitals must overlap sideways. Must contain <strong>(4n+2) π-electrons</strong> where n = 0, 1, 2, 3...'},
          {n:'Rule 3',col:'#a78bfa',text:'In 5-membered heterocyclic compounds (furan, pyrrole, thiophene), the <strong>lone pair of the heteroatom (N, O, S)</strong> participates in the π-electron count to satisfy (4n+2).'}
        ].map(r=>`<div style="background:rgba(0,0,0,.18);border-left:4px solid ${r.col};border-radius:0 10px 10px 0;padding:.65rem 1rem">
          <span style="font-family:'Fredoka One',cursive;color:${r.col}">${r.n}:</span> <span style="font-size:.87rem;color:#94a3b8">${r.text}</span>
        </div>`).join('')}
      </div>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#34d399"><span class="note-card-icon">🔢</span><span class="note-card-title" style="color:#34d399">(4n+2) π-electrons — Values of n</span></div>
    <div class="note-card-body">
      <table class="note-table">
        <tr><th>n value</th><th>(4n+2) π-electrons</th><th>Aromatic compounds</th></tr>
        <tr><td style="color:#fde68a">n = 0</td><td>2</td><td>Cyclopropenyl cation (3-membered ring)</td></tr>
        <tr><td style="color:#4ade80">n = 1 ⭐</td><td><strong>6</strong></td><td><strong>Benzene, furan, thiophene, pyridine</strong></td></tr>
        <tr><td style="color:#60a5fa">n = 2</td><td>10</td><td>Naphthalene (2 rings)</td></tr>
        <tr><td style="color:#c084fc">n = 3</td><td>14</td><td>Anthracene (3 rings)</td></tr>
      </table>
      <div style="margin-top:.5rem;font-size:.78rem;color:#6b7280">⭐ n=1 (6 π electrons) is the most important — covers benzene and all common 5/6-membered heteroaromatics</div>
    </div></div>
  </div>

  <!-- COAL TAR -->
  <div id="ar-coaltab" class="nt-pane">
    <div class="note-card"><div class="note-card-head" style="border-color:#fb923c"><span class="note-card-icon">⛽</span><span class="note-card-title" style="color:#fb923c">Coal Tar Distillates — Table 2.9</span></div>
    <div class="note-card-body">
      <strong>Source:</strong> Destructive distillation of bituminous coal (10–12% moisture) in absence of air at <strong>900–1100°C</strong> → volatile products → coal-tar<br><br>
      <table class="note-table">
        <tr><th>#</th><th>Distillate</th><th>Temp. Range</th><th>% by vol</th><th>Main Compounds</th></tr>
        <tr><td>1</td><td style="color:#fde68a">Light oil (sp.gr. 0.97)</td><td>up to 170°C</td><td>5%</td><td>Benzene, toluene, xylene, phenol, pyridine, thiophene</td></tr>
        <tr><td>2</td><td style="color:#6ee7b7">Middle oil (sp.gr. 1.005)</td><td>171–230°C</td><td>7.5%</td><td>Phenol, cresols, naphthalene</td></tr>
        <tr><td>3</td><td style="color:#60a5fa">Heavy oil/Creosote (sp.gr. 1.03)</td><td>231–270°C</td><td>10%</td><td>Cresols, naphthalene, quinoline</td></tr>
        <tr><td>4</td><td style="color:#c084fc">Anthracene/green oil (sp.gr. 1.09)</td><td>271–400°C</td><td>20%</td><td>Anthracene, phenanthrene</td></tr>
        <tr><td>5</td><td style="color:#94a3b8">Pitch (residue)</td><td>residue</td><td>57.5%</td><td>Mainly coke carbons</td></tr>
      </table>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#fde68a"><span class="note-card-icon">🧪</span><span class="note-card-title" style="color:#fde68a">Purification of Benzene from Light Oil</span></div>
    <div class="note-card-body">
      Light oil contains: (a) neutral benzene/toluene/xylene (b) basic aniline/pyridine (c) acidic phenols<br><br>
      <strong>Step 1 — Remove basic compounds:</strong>
      <div class="note-formula">2C₆H₅NH₂ + H₂SO₄ → (C₆H₅NH₃)₂SO₄ (washed out)</div>
      <strong>Step 2 — Remove acidic phenols:</strong>
      <div class="note-formula">C₆H₅OH + NaOH → C₆H₅ONa (sodium phenate) + H₂O (washed out)</div>
      <strong>Step 3 — Fractional distillation:</strong><br>
      70–110°C → <strong>90% benzol</strong> (84% benzene + 13% toluene + 3% xylene)<br>
      80–82°C → <strong>99% pure benzene</strong><br>
      108–110°C → <strong>almost pure toluene</strong><br><br>
      <strong>Step 4 — Further purification:</strong><br>
      Cool at 5.4°C with freezing mixture → crystals → treat with cold conc. H₂SO₄ (removes thiophene) → distil at 80.4°C → <strong>chemically pure benzene</strong>
    </div></div>

    <div class="note-card"><div class="note-card-head" style="border-color:#4ade80"><span class="note-card-icon">🧪</span><span class="note-card-title" style="color:#4ade80">Identification Tests for Unsaturation</span></div>
    <div class="note-card-body">
      <strong>1. Bromine Solution Test (Br₂/CCl₄):</strong><br>
      <div class="note-formula">CH₂=CH₂ + Br₂ → CH₂Br–CH₂Br (colourless)</div>
      Red-brown → colourless = unsaturated (alkene/alkyne). <strong>Benzene gives NO reaction.</strong><br><br>
      <strong>2. Bayer's KMnO₄ Test:</strong><br>
      Pink KMnO₄+KOH → colourless with alkene/alkyne. <strong>Benzene gives NO reaction.</strong><br><br>
      ⚠️ <strong>Benzene's unsaturation is DIFFERENT</strong> from alkene/alkyne — it does not give these tests because delocalised π electrons are too stable to be attacked by ordinary reagents.
    </div></div>
  </div>
</div>`;


  // ─────────────────────────────────────────────
  //  6. RENDER ALL PANELS INTO DOM
  // ─────────────────────────────────────────────
  const panelOrder = ['home','ka','ke','ky','al','ad','ac','ex','sy','mq','nm','fb','fc','mw','nt','rc','tq','th','fg','is','ar'];
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

  // Hash → Panel ID map
  const HASH_MAP = {
    '':         'home',
    'home':     'home',
    'alkane':   'ka', 'alkene': 'ke', 'alkyne': 'ky',
    'alcohol':  'al', 'aldehyde': 'ad', 'fatty-acid': 'ac',
    'exchange': 'ex', 'synthesis': 'sy',
    'mcq':      'mq', 'name-lookup': 'nm', 'formula-builder': 'fb',
    'flashcards':'fc', 'mol-weight': 'mw', 'notes': 'nt',
    'reaction-chart':'rc', 'topic-quiz': 'tq',
    'theory':   'th', 'functional-groups': 'fg',
    'isomerism':'is', 'arenes': 'ar',
  };

  // Panel ID → hash slug
  const ID_TO_HASH = {
    home:'', ka:'alkane', ke:'alkene', ky:'alkyne',
    al:'alcohol', ad:'aldehyde', ac:'fatty-acid',
    ex:'exchange', sy:'synthesis',
    mq:'mcq', nm:'name-lookup', fb:'formula-builder',
    fc:'flashcards', mw:'mol-weight', nt:'notes',
    rc:'reaction-chart', tq:'topic-quiz',
    th:'theory', fg:'functional-groups',
    is:'isomerism', ar:'arenes',
  };

  // Panel ID → human-readable page title
  const PAGE_TITLES = {
    home:'Home',
    ka:'🔥 Alkane', ke:'🌿 Alkene', ky:'⚡ Alkyne',
    al:'🧪 Alcohol', ad:'✨ Aldehyde', ac:'🧬 Fatty Acid',
    ex:'⇄ Exchange Pathways', sy:'🔬 Synthesis — How Made',
    mq:'📝 MCQ Exam', nm:'🔍 Name Lookup', fb:'🧩 Formula Builder',
    fc:'⏱️ Flashcards', mw:'🧮 Molecular Weight', nt:'📝 Chapter Notes',
    rc:'📊 Reaction Chart', tq:'🎯 Topic Quiz',
    th:'📖 Theory', fg:'🏷️ Functional Groups',
    is:'🔄 Isomerism', ar:'💎 Arenes',
  };

  // Breadcrumb bar
  const bcBar = document.createElement('div');
  bcBar.id = 'bc-bar';
  bcBar.style.cssText = 'display:none;align-items:center;gap:.4rem;padding:.5rem 1.2rem;background:rgba(0,0,0,.25);border-bottom:1px solid rgba(255,255,255,.06);font-size:.78rem;font-weight:700;color:#6b7280;font-family:Nunito,sans-serif;position:sticky;top:0;z-index:100;backdrop-filter:blur(12px)';
  const mainContent = document.getElementById('main-content');
  mainContent.parentNode.insertBefore(bcBar, mainContent);

  function updateBreadcrumb(id) {
    if (id === 'home') { bcBar.style.display = 'none'; return; }
    bcBar.style.display = 'flex';
    bcBar.innerHTML = `<span style="cursor:pointer;color:#818cf8" onclick="goHome()">⚗️ Home</span>
      <span style="color:#374151">›</span>
      <span style="color:#e2e8f0">${PAGE_TITLES[id] || id}</span>`;
  }

  function updateDocTitle(id) {
    const titles = {
      en: 'Organic Chemistry Hub',
      bn: 'অর্গানিক কেমিস্ট্রি হাব',
      hi: 'ऑर्गेनिक केमिस्ट्री हब'
    };
    const base = titles[CLANG] || titles.en;
    const page = PAGE_TITLES[id];
    document.title = id === 'home' ? base + ' — For Class 9–12' : base + ' · ' + page;
  }

  // Core navigate function — updates DOM + URL + breadcrumb + title
  function navigateTo(id, pushState) {
    if (!panelOrder.includes(id)) id = 'home';

    // Panel transition
    const current = document.querySelector('.panel.on');
    const next = document.getElementById('panel-' + id);
    if (!next || next === current) return;

    if (current) {
      current.style.opacity = '0';
      current.style.transform = 'translateY(8px)';
      current.style.transition = 'opacity .18s ease, transform .18s ease';
      setTimeout(() => {
        current.classList.remove('on');
        current.style.opacity = '';
        current.style.transform = '';
        current.style.transition = '';
        next.classList.add('on');
        next.style.opacity = '0';
        next.style.transform = 'translateY(8px)';
        next.style.transition = 'opacity .22s ease, transform .22s ease';
        setTimeout(() => {
          next.style.opacity = '1';
          next.style.transform = 'translateY(0)';
          setTimeout(() => {
            next.style.opacity = '';
            next.style.transform = '';
            next.style.transition = '';
          }, 240);
        }, 10);
      }, 160);
    } else {
      next.classList.add('on');
    }

    // Highlight active nav button
    document.querySelectorAll('.btn').forEach(b => b.classList.remove('on'));
    const slug = ID_TO_HASH[id];
    document.querySelectorAll('.btn').forEach(b => {
      if (b.getAttribute('onclick') && b.getAttribute('onclick').includes("'" + id + "'")) {
        b.classList.add('on');
      }
    });

    // Update URL hash
    if (pushState !== false) {
      const hash = slug ? '#' + slug : window.location.pathname;
      window.history.pushState({ panelId: id }, '', slug ? '#' + slug : window.location.pathname.split('#')[0]);
    }

    // Update breadcrumb + title
    updateBreadcrumb(id);
    updateDocTitle(id);

    // Scroll to top of main
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Panel show — called by nav buttons
  window.chShow = function(id, btn) {
    navigateTo(id, true);
  };

  // Handle browser back/forward
  window.addEventListener('popstate', function(e) {
    const id = e.state?.panelId || HASH_MAP[location.hash.replace('#','')] || 'home';
    navigateTo(id, false);
  });

  // Handle direct URL with hash on load
  (function handleInitialHash() {
    const hash = location.hash.replace('#', '');
    const id = HASH_MAP[hash] || 'home';
    if (id !== 'home') {
      // Small delay to let DOM settle
      setTimeout(() => navigateTo(id, false), 80);
    }
  })();

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

    // Name → structural formula lookup
    const STRUCT = {
      'Ethane':'CH₃–CH₃','Ethene':'CH₂=CH₂','Ethyne':'CH≡CH',
      'Ethanol':'CH₃–CH₂–OH','Ethanal':'CH₃–CHO','Ethanoic acid':'CH₃–COOH',
      'Propane':'CH₃–CH₂–CH₃','Propene':'CH₃–CH=CH₂','Propyne':'CH₃–C≡CH',
      'Propanol':'CH₃–CH₂–CH₂OH','Propan-1-ol':'CH₃CH₂CH₂OH',
      'Propanal':'CH₃–CH₂–CHO','Propanoic Acid':'CH₃–CH₂–COOH',
      'Propanoic acid':'CH₃–CH₂–COOH',
      'Butane':'CH₃–(CH₂)₂–CH₃','But-1-ene':'CH₃–CH₂–CH=CH₂',
      'But-1-yne':'CH₃–CH₂–C≡CH',
      'Butanol':'CH₃–CH₂–CH₂–CH₂OH','Butan-1-ol':'CH₃CH₂CH₂CH₂OH',
      'Butanal':'CH₃–CH₂–CH₂–CHO','Butanoic Acid':'CH₃–CH₂–CH₂–COOH',
      'Butanoic acid':'CH₃–CH₂–CH₂–COOH',
      'Methane':'CH₄','Methanol':'CH₃–OH','Methanal':'H–CHO',
      '1-Chloropropane':'CH₃CH₂CH₂Cl','1-Chlorobutane':'CH₃CH₂CH₂CH₂Cl',
      '1,2-Dibromopropane':'CH₃CHBr–CH₂Br','1,2-Dibromobutane':'CH₃CH₂CHBr–CH₂Br',
      'Propene+H₂O':'CH₃CH=CH₂ + H₂O','But-1-ene+H₂O':'CH₂=CHCH₂CH₃ + H₂O',
    };

    // Resolve a formula string — replace known names with structures
    function resolve(s) {
      if (!s) return '';
      // Already has structural chars — return as is
      if (/[=≡–]/.test(s)) return s;
      // Try direct lookup
      const trimmed = s.trim();
      if (STRUCT[trimmed]) return STRUCT[trimmed];
      // Try to resolve parts separated by + or spaces
      return s.replace(/([A-Za-z][A-Za-z0-9\s\-]*?)(?=\s*[\+]|$)/g, part => {
        const p = part.trim();
        return STRUCT[p] || p;
      });
    }

    let h = `<div class="phd2" style="color:${fc}"><span class="pf2">${fn}</span><span class="pm">⟶</span><span class="pf2" style="color:${tc}">${tn}</span><span class="sbadge" style="color:${fc};border-color:${fc}">${d.s} STEP${d.s > 1 ? 'S' : ''}</span>${d.nt ? `<span class="pnote">⚠️ ${d.nt}</span>` : ''}</div>`;
    const cns = Object.keys(d.c);
    const gid = 'ex_' + k.replace(/[^a-z0-9]/g, '_');

    // Tab strip wrapper
    h += `<div style="border:2px solid ${fc}40;border-radius:14px;overflow:hidden">`;
    h += `<div class="etabs" style="border-bottom-color:${fc}30">`;
    cns.forEach((cn, i) => h += `<button class="etab${i === 0 ? ' on' : ''}" onclick="etab(this,'${gid}',${cn})" style="color:${fc}">${cn}C</button>`);
    h += `</div>`;

    cns.forEach((cn, i) => {
      const steps = d.c[cn];
      const totalSteps = steps.length;
      h += `<div id="${gid}_${cn}" class="ecbl${i === 0 ? ' on' : ''}" style="padding:.8rem">`;
      steps.forEach((st2, si) => {
        // Each step gets its own accent color — first step = from color, last step = to color, middle = blend
        const ratio = totalSteps === 1 ? 1 : si / (totalSteps - 1);
        const stepCol = si === totalSteps - 1 ? tc : si === 0 ? fc : '#818cf8';
        const bgAlpha = '18'; // ~10% opacity hex

        h += `<div class="stcard" style="border-color:${stepCol};background:${stepCol}${bgAlpha}">`;
        // Header bar with step name
        h += `<div class="stt" style="background:${stepCol}25">`;
        h += `<span class="stn">${si + 1 === totalSteps && totalSteps > 1 ? '✅ ' : si === 0 && totalSteps > 1 ? '▶ ' : ''}${st2.m}</span>`;
        h += `</div>`;
        // Body with equation
        h += `<div class="stb">`;
        if (st2.e) {
          const reactant = resolve(st2.e);
          const product  = resolve(st2.p);
          h += `<div class="eq">`;
          h += `<span class="r" style="color:${si === 0 ? fc : '#e2e8f0'};font-size:.95rem">${reactant}</span>`;
          if (st2.c) h += `<div class="ab"><span class="ct" style="color:#7dd3fc">${st2.c}</span><span class="arr">⟶</span></div>`;
          else h += `<div class="ab"><span class="arr">⟶</span></div>`;
          h += `<span class="hi" style="color:${tc};font-size:1rem;font-weight:900;text-shadow:0 0 12px ${tc}88">${product}</span>`;
          h += `</div>`;
        } else {
          h += `<div class="note" style="border-color:${stepCol};color:#e2e8f0">${resolve(st2.p)}</div>`;
        }
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
    {t:"Mixed",q:"KMnO₄ test: pink colour disappears means?",o:["Saturated","Unsaturated compound","Nitrogen present","Sulphur present"],a:1,e:"KMnO₄ (pink) decolourises with unsaturated compounds, proving C=C or C≡C bonds."},

    // ── 100 NEW ORIGINAL QUESTIONS ──

    // ALKANE / ALKENE / ALKYNE
    {t:"Alkane",q:"Which gas is produced when CaC₂ is treated with water?",o:["Methane","Ethane","Ethyne","Propyne"],a:2,e:"CaC₂ + 2H₂O → CH≡CH (Ethyne) + Ca(OH)₂. This is the standard lab preparation."},
    {t:"Alkane",q:"Alkanes are also called paraffins because they are?",o:["Very reactive","Low in affinity (chemically inactive)","High boiling","Unsaturated"],a:1,e:"Paraffin comes from Latin 'parum affinis' meaning low affinity — alkanes are chemically very inactive."},
    {t:"Alkane",q:"What is the general formula of alkanes?",o:["CₙH₂ₙ","CₙH₂ₙ₋₂","CₙH₂ₙ₊₂","CₙH₂ₙ₊₁OH"],a:2,e:"Alkane general formula = CₙH₂ₙ₊₂ (saturated, only single bonds)."},
    {t:"Alkane",q:"In decarboxylation, sodium ethanoate gives which alkane?",o:["Ethane","Methane","Propane","Butane"],a:1,e:"Sodium ethanoate (2C) → Methane (1C). Product alkane = salt carbons − 1."},
    {t:"Alkane",q:"Catalyst used in hydrogenation of alkene to alkane?",o:["HgSO₄","H₃PO₄","Ni","KMnO₄"],a:2,e:"Nickel (Ni) at 180–200°C is the catalyst for hydrogenation: alkene + H₂ → alkane."},
    {t:"Alkane",q:"How many mol H₂ are needed to convert alkyne to alkane?",o:["0","1","2","3"],a:2,e:"Alkyne has 2 weak π bonds. Needs 2 mol H₂: alkyne → alkene → alkane."},
    {t:"Alkane",q:"Which alkane is the main component of natural gas?",o:["Ethane","Propane","Methane","Butane"],a:2,e:"Methane (CH₄) makes up 93–98% of natural gas in Bangladesh."},
    {t:"Alkane",q:"UV light is used in which reaction of alkanes?",o:["Hydrogenation","Halogenation","Hydration","Dehydration"],a:1,e:"UV light initiates halogenation of alkanes: CH₄ + Cl₂ → CH₃Cl + HCl (UV)."},
    {t:"Alkane",q:"7-carbon alkane is named?",o:["Hexane","Heptane","Octane","Pentane"],a:1,e:"7-carbon alkane = Heptane (C₇H₁₆)."},
    {t:"Alkane",q:"Complete combustion of methane produces?",o:["CO only","CO₂ + H₂O + heat","CH₂O + H₂","C + H₂O"],a:1,e:"CH₄ + 2O₂ → CO₂ + 2H₂O + heat. Complete combustion gives CO₂ and H₂O."},
    {t:"Alkene",q:"The π bond in alkene is which type of bond?",o:["Strong σ bond","Weak π bond","Ionic bond","Coordinate bond"],a:1,e:"The C=C in alkene has 1 strong σ bond + 1 weak π bond. The π bond breaks easily in addition reactions."},
    {t:"Alkene",q:"Ethene + HBr gives?",o:["CH₃–CH₂Br","CH₂Br–CH₂Br","CH₃–CHBr₂","CH₂=CHBr"],a:0,e:"CH₂=CH₂ + HBr → CH₃–CH₂Br (bromoethane). Addition of HBr across double bond."},
    {t:"Alkene",q:"Conditions for polythene manufacture from ethene?",o:["Ni, 180°C","H₂SO₄, 300°C","1000 atm, 200°C, trace O₂","KMnO₄, room temp"],a:2,e:"Polythene: n(CH₂=CH₂) → (–CH₂–CH₂–)ₙ at 1000 atm, 200°C with trace O₂."},
    {t:"Alkene",q:"Dehydrogenation of ethane gives?",o:["Ethyne","Methane","Ethene","Propene"],a:2,e:"CH₃–CH₃ → CH₂=CH₂ + H₂ (dehydrogenation with Ni/Al₂O₃ at 400–600°C)."},
    {t:"Alkene",q:"Alkenes are called olefins because they form?",o:["Oily products with HCl","Oily products with halogens","Salts with acids","Polymers"],a:1,e:"Alkenes are called olefins (oil-forming) because they form oily products when reacted with halogens like Cl₂."},
    {t:"Alkene",q:"Propene has how many carbons?",o:["2","3","4","5"],a:1,e:"Propene = CH₃–CH=CH₂ = prop (3C) + ene. 3 carbon atoms."},
    {t:"Alkene",q:"What is the product when propene reacts with H₂O (H₃PO₄, 300°C)?",o:["Propane","Propanal","Propan-1-ol","Propanoic acid"],a:2,e:"Propene + H₂O → Propan-1-ol (CH₃CH₂CH₂OH) by hydration with H₃PO₄."},
    {t:"Alkene",q:"The double bond C=C consists of how many bonds total?",o:["1 only","2 (1σ + 1π)","3 (1σ + 2π)","2 ionic bonds"],a:1,e:"C=C = 1 strong σ bond + 1 weak π bond = 2 bonds total."},
    {t:"Alkyne",q:"Ethyne is produced in the lab from?",o:["Ethane + Cl₂","CaC₂ + H₂O","CH₄ + UV","NaOH + C"],a:1,e:"CaC₂ + 2H₂O → CH≡CH + Ca(OH)₂. Standard lab method for ethyne."},
    {t:"Alkyne",q:"Triple bond C≡C consists of?",o:["3σ bonds","1σ + 2π bonds","2σ + 1π bonds","3π bonds"],a:1,e:"C≡C = 1 strong σ bond + 2 weak π bonds = 3 bonds total."},
    {t:"Alkyne",q:"Ethyne + H₂O (HgSO₄, 80°C) gives?",o:["Ethanol","Ethene","Ethanal","Ethanoic acid"],a:2,e:"CH≡CH + H₂O → CH₃CHO (Ethanal/Acetaldehyde). Hydration of alkyne with HgSO₄ catalyst."},
    {t:"Alkyne",q:"Which reagent converts dibromoalkane to alkyne?",o:["NaOH (aq.)","2NaOH (alcoholic)","H₂SO₄","KMnO₄"],a:1,e:"Vicinal dihalide + 2NaOH (alcoholic) → alkyne. Two HBr molecules are removed (double elimination)."},
    {t:"Alkyne",q:"But-2-yne structural formula is?",o:["CH≡C–CH₂–CH₃","CH₃–C≡C–CH₃","CH₂=CH–CH₂–CH₃","CH₃–CH=CH–CH₃"],a:1,e:"But-2-yne = CH₃–C≡C–CH₃. Triple bond between C2 and C3."},
    {t:"Alkyne",q:"Selective hydrogenation of alkyne to alkene uses which catalyst?",o:["Ni","Pd/C","Lindlar catalyst","H₃PO₄"],a:2,e:"Lindlar catalyst (Pd/CaCO₃/quinoline) converts alkyne → alkene by selective hydrogenation, stopping at the alkene stage."},
    {t:"Alkyne",q:"General formula of alkynes is?",o:["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙH₂ₙ₊₁OH"],a:2,e:"Alkynes: CₙH₂ₙ₋₂ (two fewer H than alkane, due to triple bond)."},

    // ALCOHOL / ALDEHYDE / FATTY ACID
    {t:"Alcohol",q:"Alcohol is oxidised mildly to give?",o:["Alkane","Alkene","Aldehyde","Fatty acid"],a:2,e:"Mild/controlled oxidation (K₂Cr₂O₇/H₂SO₄): Alcohol → Aldehyde. Must stop here or it goes to acid."},
    {t:"Alcohol",q:"Alcohol is oxidised strongly (excess oxidant) to give?",o:["Alkane","Alkene","Aldehyde","Fatty acid (carboxylic acid)"],a:3,e:"Strong oxidation (excess K₂Cr₂O₇/H₂SO₄): Alcohol → Aldehyde → Fatty acid in one step."},
    {t:"Alcohol",q:"Ethanol is produced industrially by fermentation of?",o:["Fats","Starch/sugar","Proteins","Coal"],a:1,e:"Ethanol is produced by fermentation of starch or sugar by yeast enzymes."},
    {t:"Alcohol",q:"Functional group of alcohol is?",o:["–COOH","–CHO",">C=O","–OH"],a:3,e:"Alcohols contain the hydroxyl (–OH) functional group attached to a carbon."},
    {t:"Alcohol",q:"Dehydration of alcohol with conc. H₂SO₄ produces?",o:["Alkane","Alkene","Aldehyde","Ester"],a:1,e:"Alcohol + conc. H₂SO₄ (heat) → Alkene + H₂O. H₂SO₄ acts as a dehydrating agent."},
    {t:"Alcohol",q:"Ethanol + NaOH (aq.) gives what?",o:["Ethene","Ethanal","No reaction (NaOH acts differently)","Ethanoic acid"],a:2,e:"Ethanol does not react with NaOH directly in this way. NaOH(aq.) is used for substitution reactions of halides, not alcohols."},
    {t:"Alcohol",q:"Primary alcohol has –OH attached to a carbon bonded to how many other carbons?",o:["0 or 1","2","3","4"],a:0,e:"Primary (1°) alcohol: –OH is on a carbon attached to 0 or 1 other carbon. e.g. CH₃–CH₂–OH."},
    {t:"Alcohol",q:"Methanol is toxic because it is converted in the body to?",o:["CO₂","Ethanol","Methanal (formaldehyde)","Methane"],a:2,e:"Methanol → Methanal (formaldehyde) in the body, which damages the optic nerve causing blindness and death."},
    {t:"Alcohol",q:"Propan-2-ol is a type of?",o:["Primary alcohol","Secondary alcohol","Tertiary alcohol","Ether"],a:1,e:"Propan-2-ol: –OH at C2 which is bonded to 2 other carbons → secondary (2°) alcohol."},
    {t:"Alcohol",q:"Which alcohol is called rectified spirit?",o:["100% methanol","96% ethanol","100% ethanol","40% formaldehyde"],a:1,e:"Rectified spirit = 96% aqueous ethanol solution obtained by distillation of fermented liquid."},
    {t:"Aldehyde",q:"Aldehyde functional group is?",o:["–OH","–COOH","–CHO",">C=O (internal)"],a:2,e:"Aldehydes have –CHO group (terminal carbonyl with H). Formula: R–CHO."},
    {t:"Aldehyde",q:"Formalin is used to?",o:["Preserve biological specimens","Make vinegar","Produce alcohol","Flavour food"],a:0,e:"Formalin (40% aqueous formaldehyde/methanal) is used to preserve biological specimens."},
    {t:"Aldehyde",q:"Ethanal is produced from ethyne by?",o:["Hydrogenation","Hydration (H₂SO₄, HgSO₄, 80°C)","Dehydration","Halogenation"],a:1,e:"CH≡CH + H₂O → CH₃CHO (Ethanal). Hydration of ethyne with HgSO₄ catalyst at 80°C."},
    {t:"Aldehyde",q:"Reduction of aldehyde gives?",o:["Alkene","Alcohol","Fatty acid","Ether"],a:1,e:"Aldehyde + H₂ (Ni, 180–200°C) → Alcohol. Reduction adds H₂ across the C=O bond."},
    {t:"Aldehyde",q:"Oxidation of aldehyde gives?",o:["Alkene","Alcohol","Fatty acid (carboxylic acid)","Ester"],a:2,e:"Aldehyde + [O] (K₂Cr₂O₇/H₂SO₄) → Carboxylic (fatty) acid."},
    {t:"Aldehyde",q:"What is the simplest aldehyde?",o:["Ethanal","Propanal","Methanal","Butanal"],a:2,e:"Methanal (HCHO) = formaldehyde is the simplest aldehyde (1 carbon)."},
    {t:"Aldehyde",q:"Aldehyde → Alkene requires how many steps?",o:["1 step","2 steps (reduce then dehydrate)","3 steps","Direct conversion"],a:1,e:"Aldehyde → Alcohol (reduction) → Alkene (dehydration). Two steps minimum."},
    {t:"Fatty Acid",q:"Fatty acids are chemically classified as?",o:["Strong acids","Weak acids","Neutral compounds","Bases"],a:1,e:"All fatty acids (carboxylic acids) are weak acids — they partially dissociate in water."},
    {t:"Fatty Acid",q:"Vinegar is a dilute solution of?",o:["Methanoic acid","Propanoic acid","Ethanoic acid","Butanoic acid"],a:2,e:"Vinegar = 4–10% aqueous solution of ethanoic acid (CH₃COOH). Used as food preservative."},
    {t:"Fatty Acid",q:"Functional group of carboxylic acid is?",o:["–OH","–CHO","–COOH",">C=O"],a:2,e:"Carboxylic (fatty) acids contain the –COOH group (carboxyl group)."},
    {t:"Fatty Acid",q:"Strong reduction of ethanoic acid with LiAlH₄ gives?",o:["Ethanal","Ethene","Ethanol","Methane"],a:2,e:"CH₃COOH + 4[H] (LiAlH₄) → CH₃CH₂OH (Ethanol) + H₂O. Strong reduction."},
    {t:"Fatty Acid",q:"Ethanoic acid turns blue litmus?",o:["Blue","Red","Green","No change"],a:1,e:"Fatty acids are acids — they turn blue litmus red, showing acidic nature."},
    {t:"Fatty Acid",q:"Butanoic acid smells like?",o:["Fresh apples","Rancid butter","Vinegar","Roses"],a:1,e:"Butanoic acid (butyric acid) has the characteristic smell of rancid butter."},
    {t:"Fatty Acid",q:"General formula of fatty acids is?",o:["CₙH₂ₙ₊₁OH","CₙH₂ₙ₊₁CHO","CₙH₂ₙ₊₁COOH","CₙH₂ₙ₊₂"],a:2,e:"Fatty acid general formula = CₙH₂ₙ₊₁COOH (carboxylic acid group)."},
    {t:"Fatty Acid",q:"Decarboxylation of sodium propanoate gives?",o:["Propane","Ethane","Methane","Butane"],a:1,e:"Sodium propanoate (3C) + NaOH + CaO → Ethane (2C) + Na₂CO₃. Product = salt C − 1."},
    {t:"Fatty Acid",q:"Partial reduction of fatty acid to aldehyde uses which reagent?",o:["Ni, 180°C","LiAlH₄","DIBAL-H at −78°C","K₂Cr₂O₇"],a:2,e:"DIBAL-H (diisobutylaluminium hydride) at −78°C reduces fatty acid → aldehyde and stops there."},

    // PETROLEUM & FOSSIL FUELS
    {t:"Petroleum",q:"Crude oil is separated into fractions based on differences in?",o:["Colour","Density","Boiling point","Solubility"],a:2,e:"Fractional distillation separates crude oil fractions by their different boiling points."},
    {t:"Petroleum",q:"LPG carbon atom range is?",o:["1–4","5–10","11–16","17–20"],a:0,e:"LPG = Liquefied Petroleum Gas, contains 1–4 carbon atoms, boiling point 0–20°C."},
    {t:"Petroleum",q:"Petrol (gasoline) boiling point range is approximately?",o:["0–20°C","21–70°C","71–120°C","121–170°C"],a:2,e:"Petrol boils at 71–120°C and contains 5–10 carbon atoms."},
    {t:"Petroleum",q:"Kerosene carbon number range is?",o:["1–4","5–10","11–16","17–20"],a:2,e:"Kerosene has 11–16 carbons, boiling point 121–170°C. Used as jet fuel."},
    {t:"Petroleum",q:"Bitumen is used mainly for?",o:["Cooking fuel","Jet fuel","Road construction","Lubrication"],a:2,e:"Bitumen (pitch) has >30 carbons, boiling >340°C. Used for road construction (tarmac)."},
    {t:"Petroleum",q:"Which fraction of petroleum is used as lubricating oil?",o:["LPG","Petrol","Kerosene","Lubricating oil (20–30 carbons)"],a:3,e:"Lubricating oil fraction has 20–30 carbons, boiling 270–340°C. Used to lubricate engines."},
    {t:"Petroleum",q:"Coal is formed from ancient?",o:["Marine animals","Gigantic land plants","Sea water","Volcanic ash"],a:1,e:"Coal forms from gigantic land plants buried under heat and pressure over millions of years."},
    {t:"Petroleum",q:"Petroleum is separated by which method?",o:["Simple distillation","Fractional distillation","Filtration","Crystallisation"],a:1,e:"Fractional distillation separates petroleum into fractions in a fractionating column."},
    {t:"Petroleum",q:"Natural gas is mainly used for?",o:["Road construction","Cooking and electricity generation","Making plastic","Lubricating engines"],a:1,e:"Natural gas (mainly methane) is used for cooking, heating and electricity generation."},
    {t:"Petroleum",q:"Fossil fuels are called 'fossil' because they formed from?",o:["Rocks","Ancient buried organisms (fossils)","Chemical reactions in sea","Volcanic lava"],a:1,e:"Fossil fuels formed from remains of ancient plants and animals buried and transformed over millions of years."},
    {t:"Petroleum",q:"Which is NOT a fossil fuel?",o:["Coal","Petroleum","Natural gas","Wood (biomass)"],a:3,e:"Wood is biomass/renewable energy, not a fossil fuel. The three fossil fuels are coal, petroleum and natural gas."},
    {t:"Petroleum",q:"Burning fossil fuels releases which harmful gas causing global warming?",o:["O₂","N₂","CO₂","H₂"],a:2,e:"Combustion of fossil fuels releases CO₂ (carbon dioxide), a greenhouse gas that causes global warming."},
    {t:"Petroleum",q:"LPG full form is?",o:["Light Petroleum Gas","Liquefied Petroleum Gas","Low Pressure Gas","Liquid Propane Gas"],a:1,e:"LPG = Liquefied Petroleum Gas — used for cooking in homes."},
    {t:"Petroleum",q:"Petrochemicals are chemicals derived from?",o:["Plants","Animals","Petroleum/natural gas","Seawater"],a:2,e:"Petrochemicals are chemical products derived from petroleum and natural gas, used to make plastics, fertilisers, medicines."},
    {t:"Petroleum",q:"The fraction with the highest boiling point in fractional distillation is?",o:["LPG","Petrol","Kerosene","Bitumen/Residue"],a:3,e:"Bitumen (residue) has the highest boiling point (>340°C) and does not vaporise in the fractionating column."},
    {t:"Petroleum",q:"Refinery gas from petroleum contains mainly?",o:["Methane and ethane","Petrol vapour","Kerosene","Diesel"],a:0,e:"Refinery gas (1–4 carbons, bp <20°C) contains mainly methane, ethane, propane and butane."},
    {t:"Petroleum",q:"Crude oil was formed over how many years?",o:["Hundreds","Thousands","Millions","Billions of trillions"],a:2,e:"Crude oil formed over millions of years from marine organisms buried under heat and pressure."},
    {t:"Petroleum",q:"Incomplete combustion of fossil fuels produces?",o:["CO₂ only","CO (carbon monoxide) — toxic","O₂","N₂"],a:1,e:"Incomplete combustion (limited O₂) produces CO (carbon monoxide), a colourless odourless toxic gas."},

    // POLYMERS & POLYMERISATION
    {t:"Polymer",q:"The process of joining many monomers to form a polymer is called?",o:["Distillation","Fermentation","Polymerisation","Halogenation"],a:2,e:"Polymerisation = process of joining many small monomer units into a large polymer chain."},
    {t:"Polymer",q:"Addition polymerisation involves?",o:["Loss of small molecules","Monomers joining without losing any atoms","Acid–base reactions","Oxidation only"],a:1,e:"In addition polymerisation, monomers (with C=C) simply add together — no atoms are lost."},
    {t:"Polymer",q:"Condensation polymerisation involves?",o:["No loss of atoms","Loss of small molecules like H₂O","Addition only","UV light"],a:1,e:"In condensation polymerisation, monomers join and a small molecule (usually H₂O) is released each time."},
    {t:"Polymer",q:"Nylon 6:6 is made from which two monomers?",o:["Ethene + propene","Adipic acid + hexamethylenediamine","Vinyl chloride + styrene","Glucose + fructose"],a:1,e:"Nylon 6:6 is made by condensation polymerisation of adipic acid (6C diacid) and hexamethylenediamine (6C diamine)."},
    {t:"Polymer",q:"PVC monomer is?",o:["Ethene","Propene","Vinyl chloride (CH₂=CHCl)","Styrene"],a:2,e:"PVC = poly(vinyl chloride). Monomer = vinyl chloride (CH₂=CHCl = 1-chloroethene)."},
    {t:"Polymer",q:"Polypropene is made from which monomer?",o:["Ethene","Propene","Butene","Styrene"],a:1,e:"Polypropene monomer = propene (CH₂=CH–CH₃). Catalyst: titanium chloride (Ziegler-Natta)."},
    {t:"Polymer",q:"Natural rubber is a polymer of?",o:["Glucose","Isoprene (2-methylbuta-1,3-diene)","Styrene","Ethene"],a:1,e:"Natural rubber is a polymer of isoprene (2-methylbuta-1,3-diene). It is a natural addition polymer."},
    {t:"Polymer",q:"Starch is a natural polymer of?",o:["Amino acids","Fatty acids","Glucose","Nucleotides"],a:2,e:"Starch is a natural polymer (polysaccharide) made of many glucose monomer units joined together."},
    {t:"Polymer",q:"DNA is a polymer of?",o:["Amino acids","Glucose","Nucleotides","Fatty acids"],a:2,e:"DNA is a natural polymer made of nucleotide monomers — it stores genetic information."},
    {t:"Polymer",q:"Bakelite is an example of which type of polymer?",o:["Addition polymer","Natural polymer","Thermosetting polymer","Biodegradable polymer"],a:2,e:"Bakelite is a thermosetting polymer — once set, it cannot be re-melted or reshaped."},
    {t:"Polymer",q:"Polythene is an example of which type of polymerisation?",o:["Condensation","Addition","Ionic","Radical only"],a:1,e:"Polythene is made by addition polymerisation of ethene: n(CH₂=CH₂) → (–CH₂–CH₂–)ₙ."},
    {t:"Polymer",q:"Teflon (PTFE) is a polymer of?",o:["Ethene","Tetrafluoroethene (CF₂=CF₂)","Styrene","Vinyl chloride"],a:1,e:"Teflon = poly(tetrafluoroethene). Monomer = CF₂=CF₂. Non-stick coating on cookware."},
    {t:"Polymer",q:"A thermoplastic polymer can be?",o:["Never re-melted","Re-melted and reshaped","Only used as rubber","Dissolved in water"],a:1,e:"Thermoplastic polymers (like polythene, PVC) can be re-melted and reshaped. Contrast with thermosetting polymers."},
    {t:"Polymer",q:"Which polymer is used to make plastic bottles and packaging?",o:["Bakelite","Polythene (HDPE/LDPE)","Nylon","Teflon"],a:1,e:"Polythene (polyethylene) — HDPE and LDPE — is widely used for plastic bottles, bags and packaging."},
    {t:"Polymer",q:"Polypropene catalyst conditions are?",o:["Ni, 250°C","Titanium chloride, 140 atm, 120°C","H₃PO₄, 300°C","UV, room temp"],a:1,e:"Polypropene uses titanium chloride (Ziegler-Natta catalyst) at 140 atm and 120°C."},
    {t:"Polymer",q:"The unit that repeats in a polymer chain is called the?",o:["Monomer","Repeat unit","Polymer chain","Cross-link"],a:1,e:"The repeat unit is the smallest structural unit that repeats throughout the polymer chain."},
    {t:"Polymer",q:"Silk and wool are examples of which natural polymer?",o:["Polysaccharide","Protein","Nucleic acid","Rubber"],a:1,e:"Silk and wool are natural proteins — polymers of amino acids joined by peptide bonds."},

    // MIXED / GENERAL
    {t:"Mixed",q:"Which acid is found in tamarind?",o:["Citric acid","Lactic acid","Tartaric acid","Ethanoic acid"],a:2,e:"Tartaric acid is found in tamarind. Citric acid is in lemon, lactic acid in curd."},
    {t:"Mixed",q:"Oxalic acid is found in which plant?",o:["Lemon","Sugarcane","Oxalis (wood sorrel)","Apple"],a:2,e:"Oxalic acid (ethanedioic acid) is found in the oxalis plant and also in spinach."},
    {t:"Mixed",q:"Malic acid is found in?",o:["Lemon","Apples","Curd","Tamarind"],a:1,e:"Malic acid is found in apples (and other fruits). It gives the slightly tart taste."},
    {t:"Mixed",q:"Which reaction is used to test for unsaturation?",o:["Add NaOH","Add bromine water — decolourisation","Add HCl","Add water"],a:1,e:"Bromine water (red-brown) decolourises when added to unsaturated compounds (alkene/alkyne). Saturated compounds show no change."},
    {t:"Mixed",q:"Hydrocarbons contain which elements only?",o:["C and O","C and N","C and H only","C, H and O"],a:2,e:"Hydrocarbons contain ONLY Carbon and Hydrogen atoms — no other elements."},
    {t:"Mixed",q:"Aliphatic compounds are?",o:["Ring-shaped aromatic","Open-chain (or non-aromatic cyclic)","Only inorganic","Only ionic"],a:1,e:"Aliphatic = open-chain or non-aromatic cyclic organic compounds. From Greek 'aleiphar' meaning fat."},
    {t:"Mixed",q:"Aromatic compounds contain?",o:["Only double bonds","Only single bonds","Benzene ring (delocalized π electrons)","Triple bonds only"],a:2,e:"Aromatic compounds contain a benzene ring with delocalized π electrons following Hückel's rule."},
    {t:"Mixed",q:"Urea was the first organic compound synthesised in the lab by?",o:["Lavoisier","Berzelius","Friedrich Wöhler","Dalton"],a:2,e:"Friedrich Wöhler synthesised urea in 1828 by heating ammonium cyanate, disproving the vital force theory."},
    {t:"Mixed",q:"Vital force theory stated that organic compounds could only be made by?",o:["Chemists","Living organisms","Heating inorganic salts","UV radiation"],a:1,e:"Vital force theory (Berzelius) wrongly stated that only living organisms could produce organic compounds."},
    {t:"Mixed",q:"Carbon shows which property that allows very long chain molecules?",o:["Ionisation","Catenation","Resonance","Hybridisation only"],a:1,e:"Catenation = carbon's unique ability to bond with other carbon atoms to form long chains, rings and branched structures."},
    {t:"Mixed",q:"Valency of carbon in organic compounds is usually?",o:["2","3","4","6"],a:2,e:"Carbon shows valency 4 in organic compounds — it forms 4 covalent bonds."},
    {t:"Mixed",q:"Which compound is used as a welding gas?",o:["Methane","Ethane","Ethyne (acetylene)","Propane"],a:2,e:"Ethyne (acetylene) burns at very high temperature (~3000°C) and is used in oxy-acetylene welding torches."},
    {t:"Mixed",q:"Homologous series members differ by which unit?",o:["CH₄","CH₂","C₂H₄","CH₃"],a:1,e:"Consecutive members of a homologous series differ by –CH₂– (molecular mass difference = 14)."},
    {t:"Mixed",q:"Isomers have the same?",o:["Structure but different formula","Molecular formula but different structure","Boiling point","Physical properties"],a:1,e:"Isomers have the same molecular formula but different structural arrangements, giving different properties."},
    {t:"Mixed",q:"CH₄ molecular weight is approximately?",o:["12","16","14","18"],a:1,e:"CH₄: C=12, H×4=4. Molecular weight = 12 + 4 = 16 g/mol."},
    {t:"Mixed",q:"Ethanoic acid + NaOH gives?",o:["Ethanol + NaCl","Sodium ethanoate + H₂O","Ethene + NaCl","Ethanal + NaOH"],a:1,e:"CH₃COOH + NaOH → CH₃COONa (sodium ethanoate) + H₂O. Acid–base neutralisation."},
    {t:"Mixed",q:"Which functional group makes a compound an ester?",o:["–OH","–COOH","–COO– (–C(=O)–O–)","–CHO"],a:2,e:"Esters contain the –COO– group (ester linkage). Formed by alcohol + carboxylic acid."},
    {t:"Mixed",q:"Ethanol + ethanoic acid gives?",o:["Ethanal","Ethyl ethanoate (ester) + H₂O","Ethene + water","Diethyl ether"],a:1,e:"CH₃CH₂OH + CH₃COOH → CH₃COOC₂H₅ (ethyl ethanoate) + H₂O. Esterification reaction."},
    {t:"Mixed",q:"The process by which large hydrocarbon molecules are broken into smaller ones is?",o:["Polymerisation","Cracking","Fermentation","Distillation"],a:1,e:"Cracking breaks large hydrocarbon molecules (from petroleum) into smaller, more useful ones like petrol and alkenes."},
    {t:"Mixed",q:"Which organic compound is used as an antifreeze in car radiators?",o:["Methanol","Glycerol","Ethylene glycol (ethane-1,2-diol)","Ethanol"],a:2,e:"Ethylene glycol (ethane-1,2-diol) is mixed with water in car radiators to lower the freezing point (antifreeze)."},
    {t:"Mixed",q:"Saponification is the process of making?",o:["Plastic","Soap from fats + NaOH","Nylon","Alcohol"],a:1,e:"Saponification = hydrolysis of fats/oils with NaOH to produce soap (sodium salt of fatty acid) + glycerol."},
    {t:"Mixed",q:"Which gas is responsible for the smell of rotten eggs?",o:["CO₂","H₂S (hydrogen sulphide)","CH₄","NH₃"],a:1,e:"H₂S (hydrogen sulphide) has the characteristic smell of rotten eggs. It is a toxic gas."},
    {t:"Mixed",q:"Aspirin is chemically known as?",o:["Ethyl ethanoate","Acetylsalicylic acid","Methyl salicylate","Ethanoic acid"],a:1,e:"Aspirin = acetylsalicylic acid. It is made from salicylic acid (2-hydroxybenzoic acid) and ethanoic anhydride."},
    {t:"Mixed",q:"The monomer of natural rubber is?",o:["Styrene","Isoprene","Ethene","Propene"],a:1,e:"Natural rubber = poly(isoprene). Monomer = isoprene (2-methylbuta-1,3-diene). Found in latex from rubber trees."},
    {t:"Mixed",q:"Which compound gives the smell of fruits and perfumes?",o:["Alcohols","Carboxylic acids","Esters","Aldehydes"],a:2,e:"Esters have pleasant fruity and flowery smells — they are used as food flavourings and in perfumes."},

    // ── NEW QUESTIONS: BONDS, HYBRIDISATION, ISOMERS, REACTIONS, NAMING ──
    {t:"Bonds",q:"A C–C single bond is which type of bond?",o:["π bond only","σ bond only","Both σ and π","Ionic bond"],a:1,e:"A C–C single bond is purely a σ (sigma) bond, formed by axial (head-on) overlap of orbitals."},
    {t:"Bonds",q:"A C=C double bond consists of?",o:["2 σ bonds","1 σ + 1 π bond","2 π bonds","1 ionic + 1 covalent"],a:1,e:"C=C = 1 strong σ bond + 1 weak π bond. The weak π bond breaks easily in addition reactions."},
    {t:"Bonds",q:"A C≡C triple bond consists of?",o:["3 σ bonds","1 σ + 2 π bonds","3 π bonds","2 σ + 1 π bond"],a:1,e:"C≡C = 1 σ bond + 2 π bonds. Alkynes are very reactive because π bonds break readily."},
    {t:"Bonds",q:"The first bond between any two atoms is always?",o:["π bond","Ionic bond","σ bond","Coordinate bond"],a:2,e:"The first bond is always a σ (sigma) bond — formed by axial/head-on orbital overlap."},
    {t:"Bonds",q:"π bonds are formed by which type of orbital overlap?",o:["Head-on (axial) overlap","Sideways (lateral) overlap","No overlap","Random collision"],a:1,e:"π bonds form by sideways (lateral) overlap of p orbitals. They are weaker than σ bonds."},
    {t:"Bonds",q:"Which bond is stronger — σ or π?",o:["π bond","σ bond","Both equal","Depends on temperature"],a:1,e:"σ bonds are stronger than π bonds. π bonds break more easily, making alkenes/alkynes reactive."},
    {t:"Bonds",q:"In ethyne CH≡CH, how many σ bonds are present?",o:["2","3","4","5"],a:1,e:"CH≡CH: C–H (σ) + C–H (σ) + C≡C has 1σ + 2π = total 3 σ bonds in ethyne."},
    {t:"Bonds",q:"In ethene CH₂=CH₂, how many π bonds are present?",o:["0","1","2","3"],a:1,e:"CH₂=CH₂ has one C=C double bond containing exactly 1 π bond."},
    {t:"Bonds",q:"The bond angle in methane CH₄ is?",o:["90°","109.5°","120°","180°"],a:1,e:"CH₄ is tetrahedral with sp³ hybridisation. All H–C–H bond angles = 109.5°."},
    {t:"Bonds",q:"The H–C–H bond angle in ethene is?",o:["90°","109.5°","120°","180°"],a:2,e:"Ethene is planar with sp² hybridisation on each carbon. Bond angle = 120°."},
    {t:"Bonds",q:"The bond angle in ethyne HC≡CH is?",o:["90°","109.5°","120°","180°"],a:3,e:"Ethyne is linear with sp hybridisation. Bond angle = 180°."},
    {t:"Bonds",q:"Which C–C bond is the shortest?",o:["C–C single bond","C=C double bond","C≡C triple bond","All equal"],a:2,e:"C≡C (1.20 Å) < C=C (1.34 Å) < C–C (1.54 Å). More bonds = shorter and stronger."},
    {t:"Bonds",q:"Which C–C bond is the longest?",o:["C–C single bond","C=C double bond","C≡C triple bond","All equal"],a:0,e:"C–C single bond (1.54 Å) is the longest. Fewer bonds = longer and weaker."},
    {t:"Bonds",q:"Carbon in CH₄ uses which hybridisation?",o:["sp","sp²","sp³","p only"],a:2,e:"Carbon in CH₄ is sp³ hybridised — 4 equivalent hybrid orbitals pointing to corners of a tetrahedron."},
    {t:"Bonds",q:"Carbon in ethene CH₂=CH₂ uses which hybridisation?",o:["sp","sp²","sp³","dsp²"],a:1,e:"Carbons in ethene are sp² hybridised — 3 planar orbitals (120° apart) plus one p orbital for the π bond."},
    {t:"Bonds",q:"Carbon in ethyne CH≡CH uses which hybridisation?",o:["sp","sp²","sp³","d²sp³"],a:0,e:"Carbons in ethyne are sp hybridised — 2 linear orbitals (180° apart) plus two p orbitals for 2 π bonds."},

    // ISOMERISM
    {t:"Isomers",q:"Compounds with the same molecular formula but different structural formulas are?",o:["Allotropes","Isotopes","Isomers","Polymers"],a:2,e:"Isomers share the same molecular formula but have different structural arrangements — giving different properties."},
    {t:"Isomers",q:"How many structural isomers does butane C₄H₁₀ have?",o:["1","2","3","4"],a:1,e:"C₄H₁₀ has 2 structural isomers: n-butane (straight chain) and 2-methylpropane (isobutane, branched)."},
    {t:"Isomers",q:"Geometrical (cis-trans) isomerism occurs in alkenes because of?",o:["Free rotation around C=C","Restricted rotation around C=C","Ionic bonding","Triple bonds"],a:1,e:"C=C double bond prevents free rotation, so groups are fixed in space — giving cis and trans arrangements."},
    {t:"Isomers",q:"Which compound can show cis-trans isomerism?",o:["Ethene CH₂=CH₂","But-1-ene","But-2-ene CH₃CH=CHCH₃","Propene CH₂=CHCH₃"],a:2,e:"But-2-ene has different groups on BOTH carbons of C=C, so cis and trans forms exist. But-1-ene has CH₂= at one end (no cis/trans)."},
    {t:"Isomers",q:"In cis isomer, identical groups are on which side?",o:["Opposite sides","Same side","Alternate sides","Above and below"],a:1,e:"Cis isomer: identical (or similar priority) groups are on the SAME side of the double bond."},
    {t:"Isomers",q:"In trans isomer, identical groups are on which side?",o:["Same side","Opposite sides","No fixed position","Diagonal"],a:1,e:"Trans isomer: identical groups are on OPPOSITE sides of the double bond."},
    {t:"Isomers",q:"Ethanol (CH₃CH₂OH) and dimethyl ether (CH₃OCH₃) are?",o:["Identical","Structural isomers","Enantiomers","Allotropes"],a:1,e:"Both have molecular formula C₂H₆O but different structural formulas — they are structural isomers."},
    {t:"Isomers",q:"Structural isomers have the same?",o:["Structural formula","Molecular formula","Boiling point","Melting point"],a:1,e:"Structural isomers share the same molecular formula but differ in how atoms are connected."},

    // ELECTROPHILES & NUCLEOPHILES
    {t:"Reactions",q:"An electrophile is a species that?",o:["Donates electrons","Accepts electrons (electron-loving)","Donates protons","Has no charge"],a:1,e:"Electrophile = electron-loving. It accepts electrons from electron-rich (nucleophilic) centres. Examples: H⁺, Br⁺."},
    {t:"Reactions",q:"A nucleophile is a species that?",o:["Accepts electrons","Donates electrons (has lone pair)","Has positive charge","Has no lone pairs"],a:1,e:"Nucleophile = nucleus-loving. It donates electrons to electrophilic centres. Examples: OH⁻, CN⁻, NH₃."},
    {t:"Reactions",q:"Which of these is an electrophile?",o:["NH₃","OH⁻","H⁺ (proton)","CN⁻"],a:2,e:"H⁺ is an electrophile — it has an empty orbital and accepts electrons from nucleophiles."},
    {t:"Reactions",q:"Which of these is a nucleophile?",o:["H⁺","AlCl₃","Br⁺","OH⁻"],a:3,e:"OH⁻ is a nucleophile — it has lone pairs of electrons and donates them to electrophilic centres."},
    {t:"Reactions",q:"Homolytic bond breaking produces?",o:["Two ions","Two free radicals","One cation + one anion","No products"],a:1,e:"Homolytic fission: each atom gets ONE electron → two free radicals with unpaired electrons."},
    {t:"Reactions",q:"Heterolytic bond breaking produces?",o:["Two free radicals","Two neutral atoms","A cation and an anion","Only electrons"],a:2,e:"Heterolytic fission: both electrons go to one atom → a cation (+) and an anion (−)."},
    {t:"Reactions",q:"Free radicals are produced by which bond breaking?",o:["Heterolytic","Homolytic","Ionic","Coordinate"],a:1,e:"Free radicals form from homolytic fission — each fragment gets one unpaired electron."},
    {t:"Reactions",q:"Stability order of carbocations is?",o:["Primary > Secondary > Tertiary","Tertiary > Secondary > Primary","Secondary > Primary > Tertiary","All equal"],a:1,e:"Tertiary > Secondary > Primary carbocation. More alkyl groups stabilise the positive charge by donating electrons."},
    {t:"Reactions",q:"Most stable alkyl free radical is?",o:["Methyl","Primary","Secondary","Tertiary"],a:3,e:"Tertiary free radicals are most stable due to hyperconjugation and electron-donating alkyl groups."},
    {t:"Reactions",q:"Addition reactions are characteristic of which compounds?",o:["Alkanes","Cycloalkanes","Unsaturated compounds (alkenes/alkynes)","Salts"],a:2,e:"Addition reactions occur across C=C or C≡C bonds in unsaturated compounds — the π bond breaks and new atoms add."},
    {t:"Reactions",q:"Substitution reactions are characteristic of which compounds?",o:["Alkenes","Alkynes","Alkanes","Alcohols only"],a:2,e:"Alkanes undergo free radical substitution (e.g. halogenation in UV light) — one H is replaced by another atom."},
    {t:"Reactions",q:"Elimination reactions produce?",o:["Alkane","Alkene (C=C double bond)","Alcohol","Ester"],a:1,e:"Elimination: atoms/groups are removed from adjacent carbons to form a C=C double bond (alkene)."},
    {t:"Reactions",q:"UV light initiates which reaction in alkanes?",o:["Combustion","Hydrogenation","Free radical halogenation","Decarboxylation"],a:2,e:"UV light provides energy to initiate free radical halogenation: CH₄ + Cl₂ → CH₃Cl + HCl."},

    // IUPAC NAMING
    {t:"Naming",q:"IUPAC stands for?",o:["International Union of Pure and Applied Chemistry","Indian Union of Pure and Applied Chemistry","International Union of Petroleum and Carbon","International University of Pure Analytical Chemistry"],a:0,e:"IUPAC = International Union of Pure and Applied Chemistry — the global authority for chemical nomenclature."},
    {t:"Naming",q:"Word root 'prop' indicates how many carbons?",o:["2","3","4","5"],a:1,e:"meth=1, eth=2, prop=3, but=4, pent=5. 'prop' = 3 carbons in the main chain."},
    {t:"Naming",q:"IUPAC suffix '-ane' indicates?",o:["A double bond","A triple bond","Only single bonds (saturated)","An aldehyde"],a:2,e:"'-ane' = saturated hydrocarbon with only C–C single bonds. e.g. propane, butane, hexane."},
    {t:"Naming",q:"IUPAC suffix '-ene' indicates?",o:["Only single bonds","A C=C double bond","A C≡C triple bond","An alcohol"],a:1,e:"'-ene' = hydrocarbon with a C=C double bond. e.g. ethene, propene, but-1-ene."},
    {t:"Naming",q:"IUPAC suffix '-yne' indicates?",o:["Only single bonds","A double bond","A C≡C triple bond","A ketone"],a:2,e:"'-yne' = hydrocarbon with a C≡C triple bond. e.g. ethyne, propyne, but-2-yne."},
    {t:"Naming",q:"IUPAC name for CH₃–CH₂–OH is?",o:["Methanol","Ethanol","Propanol","Ethanoic acid"],a:1,e:"CH₃–CH₂–OH: eth (2C) + an + ol = Ethanol. The –OH suffix is '-ol'."},
    {t:"Naming",q:"IUPAC name for CH₃–CHO is?",o:["Methanal","Propanal","Ethanal","Ethanoic acid"],a:2,e:"CH₃–CHO: eth (2C) + an + al = Ethanal. The –CHO suffix is '-al'."},
    {t:"Naming",q:"IUPAC name for CH₃–COOH is?",o:["Methanoic acid","Propanoic acid","Ethanoic acid","Butanoic acid"],a:2,e:"CH₃–COOH: eth (2C) + an + oic acid = Ethanoic acid. The –COOH suffix is '-oic acid'."},
    {t:"Naming",q:"IUPAC name for CH₃–CO–CH₃ (acetone) is?",o:["Propanal","Propan-2-one","Propan-1-ol","Butanone"],a:1,e:"CH₃–CO–CH₃: prop (3C) + an + 2-one = Propan-2-one. The ketone C=O suffix is '-one'."},
    {t:"Naming",q:"Primary prefix 'cyclo' in IUPAC naming indicates?",o:["A triple bond","An open chain","A closed ring structure","A branched chain"],a:2,e:"'Cyclo' prefix = closed ring structure. e.g. cyclopropane (3-membered ring), cyclohexane (6-membered ring)."},
    {t:"Naming",q:"Word root 'but' = how many carbons?",o:["2","3","4","5"],a:2,e:"but = 4 carbons. meth=1, eth=2, prop=3, but=4, pent=5, hex=6, hept=7, oct=8, non=9, dec=10."},
    {t:"Naming",q:"IUPAC name for CH₄ is?",o:["Ethane","Propane","Methane","Butane"],a:2,e:"CH₄: meth (1C) + ane = Methane. The simplest organic compound."},
    {t:"Naming",q:"IUPAC name for C₂H₂ is?",o:["Ethane","Ethene","Ethyne","Propyne"],a:2,e:"C₂H₂ = CH≡CH: eth (2C) + yne = Ethyne. Common name: Acetylene."},
    {t:"Naming",q:"Secondary suffix '-ol' indicates which functional group?",o:["–CHO","–COOH","–OH (alcohol)","–NH₂"],a:2,e:"'-ol' indicates the hydroxyl (–OH) group. e.g. methanol, ethanol, propan-2-ol."},
    {t:"Naming",q:"IUPAC numbering of the chain follows which rule?",o:["Highest locant rule","Lowest locant rule","Alphabetical rule","Random numbering"],a:1,e:"Lowest locant rule: number the chain so substituents/functional groups get the LOWEST possible position numbers."},
    {t:"Naming",q:"Word root 'hex' indicates how many carbons?",o:["4","5","6","7"],a:2,e:"hex = 6 carbons. pent=5, hex=6, hept=7, oct=8."},
    {t:"Naming",q:"IUPAC name for cyclopentane is?",o:["Pentane","Cyclopentane","Pent-1-ene","Methylbutane"],a:1,e:"cyclo + pent (5C) + ane = Cyclopentane. A 5-membered saturated ring."},

    // MORE REACTIONS & PROPERTIES
    {t:"Reactions",q:"Saponification produces soap from fats reacted with?",o:["HCl","H₂SO₄","NaOH","Na₂CO₃"],a:2,e:"Saponification = hydrolysis of fats with NaOH → soap (sodium salt of fatty acid) + glycerol."},
    {t:"Reactions",q:"Esterification is the reaction between?",o:["Two alcohols","Alcohol + carboxylic acid → ester + H₂O","Two acids","Aldehyde + acid"],a:1,e:"Esterification: alcohol + carboxylic acid → ester + water. e.g. ethanol + ethanoic acid → ethyl ethanoate + H₂O."},
    {t:"Reactions",q:"Fermentation of glucose gives?",o:["Methanol + CO₂","Ethanol + CO₂","Ethanoic acid + H₂O","Propanol + N₂"],a:1,e:"C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ (by yeast). Fermentation produces ethanol and carbon dioxide."},
    {t:"Reactions",q:"Cracking of large petroleum molecules produces?",o:["Longer alkanes only","Shorter alkanes + alkenes","Only hydrogen","Only CO₂"],a:1,e:"Cracking breaks large hydrocarbons into shorter, more useful alkanes and alkenes."},
    {t:"Reactions",q:"Dehydrogenation of ethane gives?",o:["Ethyne","Methane","Ethene + H₂","Ethanoic acid"],a:2,e:"CH₃–CH₃ → CH₂=CH₂ + H₂ (dehydrogenation, Ni, 400–600°C)."},
    {t:"Reactions",q:"Hydrogenation adds H₂ across which bond?",o:["C–C single bond","C=O bond","C=C or C≡C bond","O–H bond"],a:2,e:"Hydrogenation adds H₂ across double or triple bonds: alkene/alkyne + H₂ → alkane."},
    {t:"Reactions",q:"Oxidation of a primary alcohol first gives?",o:["Ketone","Fatty acid","Alkene","Aldehyde"],a:3,e:"Primary alcohol → Aldehyde (mild/controlled oxidation). Further oxidation gives carboxylic acid."},
    {t:"Reactions",q:"Oxidation of a secondary alcohol gives?",o:["Aldehyde","Ketone","Fatty acid","Ether"],a:1,e:"Secondary alcohol → Ketone. Cannot be oxidised further to an acid (no H on the carbonyl carbon)."},
    {t:"Reactions",q:"Complete combustion of hydrocarbons in excess O₂ gives?",o:["CO only","CO₂ + H₂O + heat","H₂O only","C + H₂"],a:1,e:"Complete combustion of any hydrocarbon: CₙHₘ + O₂ → CO₂ + H₂O + heat."},
    {t:"Reactions",q:"Bromine water is decolourised by which compounds?",o:["Alkanes only","Cycloalkanes only","Alkenes and alkynes","All hydrocarbons"],a:2,e:"Alkenes and alkynes (unsaturated) decolourise bromine water via addition. Alkanes do not."},

    // MIXED GENERAL
    {t:"Mixed",q:"Alkenes and cycloalkanes share which general formula?",o:["CₙH₂ₙ₊₂","CₙH₂ₙ","CₙH₂ₙ₋₂","CₙH₂ₙ₊₁OH"],a:1,e:"Both alkenes and cycloalkanes have the formula CₙH₂ₙ — they are structural isomers of each other."},
    {t:"Mixed",q:"Organic compounds generally have which type of bonds?",o:["Ionic bonds","Covalent bonds","Metallic bonds","Hydrogen bonds only"],a:1,e:"Organic compounds are held by covalent bonds — this makes them non-conductors with lower melting points than ionic compounds."},
    {t:"Mixed",q:"The boiling point of alkanes increases as carbon chain length?",o:["Decreases","Increases","Stays the same","Becomes zero"],a:1,e:"Longer chain = more surface area = stronger van der Waals forces = higher boiling point."},
    {t:"Mixed",q:"The first member of the alkyne series is?",o:["Propyne","Methyne","Ethyne","Butyne"],a:2,e:"Ethyne (CH≡CH, 2C) is the first stable alkyne. Methyne (1C) cannot form a triple bond."},
    {t:"Mixed",q:"Hydration of alkyne with HgSO₄ gives?",o:["Alkane","Alkene","Aldehyde","Fatty acid"],a:2,e:"Hydration of alkyne (HgSO₄/H₂SO₄, 80°C) → aldehyde. e.g. ethyne + H₂O → ethanal."},
    {t:"Mixed",q:"Systematic name for glycerol is?",o:["Propan-1-ol","Propane-1,2-diol","Propane-1,2,3-triol","Propanoic acid"],a:2,e:"Glycerol = propane-1,2,3-triol: three –OH groups at C1, C2 and C3 of propane."},
    {t:"Mixed",q:"Nylon is which type of polymer?",o:["Addition polymer","Condensation polymer","Natural polymer","Inorganic polymer"],a:1,e:"Nylon is a synthetic condensation polymer — monomers join by releasing small molecules (H₂O) each time."},
    {t:"Mixed",q:"The molecular formula of benzene is?",o:["C₆H₁₂","C₆H₁₄","C₆H₆","C₆H₁₀"],a:2,e:"Benzene = C₆H₆. Planar cyclic aromatic ring with 6 carbons and delocalised π electrons."},
    {t:"Mixed",q:"Phenol is benzene with which substituent?",o:["–NH₂","–CH₃","–COOH","–OH"],a:3,e:"Phenol = C₆H₅–OH. Benzene ring with a hydroxyl (–OH) group directly on the ring."},
    {t:"Mixed",q:"Calcium carbide reacts with water at which temperature?",o:["200°C","100°C","Room temperature","−100°C"],a:2,e:"CaC₂ + 2H₂O → CH≡CH + Ca(OH)₂ occurs vigorously at ROOM TEMPERATURE — no heating needed."},
    {t:"Mixed",q:"Ethylene glycol (ethane-1,2-diol) is used as?",o:["Perfume","Antifreeze in cars","Cooking fuel","Food flavour"],a:1,e:"Ethylene glycol (HOCH₂CH₂OH) is used as antifreeze in car radiators — lowers the freezing point of water."},
    {t:"Mixed",q:"Organic compounds are generally soluble in?",o:["Water only","Organic solvents (benzene, ether, alcohol)","Acids only","Bases only"],a:1,e:"Organic compounds are generally soluble in organic solvents (like-dissolves-like) but mostly insoluble or slightly soluble in water."},
    {t:"Mixed",q:"Which property of carbon allows it to form millions of compounds?",o:["It is a metal","Catenation — bonding with other carbons","It has 8 electrons","It forms ionic bonds"],a:1,e:"Catenation: carbon's ability to form stable bonds with other carbon atoms creates chains, rings and branched structures — giving millions of organic compounds."},
    {t:"Mixed",q:"Biodegradable polymers are broken down by?",o:["Heat only","UV light only","Microorganisms in the environment","Strong acids only"],a:2,e:"Biodegradable polymers are broken down by microorganisms (bacteria, fungi) into harmless natural substances."},
    {t:"Mixed",q:"Which organic reaction involves replacement of one atom by another?",o:["Addition","Elimination","Substitution","Polymerisation"],a:2,e:"Substitution: one atom/group replaces another. e.g. CH₄ + Cl₂ → CH₃Cl + HCl (UV light)."},
    {t:"Mixed",q:"Aspirin is made from which starting material?",o:["Ethanoic acid alone","Salicylic acid + ethanoic anhydride","Methanol + HCl","Benzene + H₂SO₄"],a:1,e:"Aspirin (acetylsalicylic acid) is synthesised by reacting salicylic acid with ethanoic anhydride."},
    {t:"Mixed",q:"Which hydrocarbon has the formula C₆H₁₄?",o:["Hexene","Cyclohexane","Hexane","Hexyne"],a:2,e:"C₆H₁₄ fits the alkane formula CₙH₂ₙ₊₂ (n=6). Hexane is the 6-carbon straight-chain alkane."},
    {t:"Mixed",q:"Addition of water (hydration) to ethene gives?",o:["Ethane","Ethanal","Ethanol","Ethanoic acid"],a:2,e:"CH₂=CH₂ + H₂O → CH₃CH₂OH (Ethanol). Hydration of ethene with H₃PO₄ at 300°C, 60 atm."},
    {t:"Mixed",q:"Which process converts vegetable oils (liquid) to margarine (solid)?",o:["Cracking","Hydrogenation (adding H₂)","Dehydration","Fermentation"],a:1,e:"Hydrogenation of unsaturated C=C bonds in vegetable oils (Ni catalyst) converts liquid oils to solid fats like margarine."},
    {t:"Mixed",q:"Cycloalkanes are?",o:["Open chain alkanes","Closed ring saturated hydrocarbons","Unsaturated ring compounds","Aromatic compounds"],a:1,e:"Cycloalkanes are CLOSED RING (cyclic) saturated hydrocarbons — single bonds only, formula CₙH₂ₙ."},

    // ── NEW QUESTIONS FROM EV CHEMISTRY CH.2 ──
    {t:"Theory",q:"Who is called the 'Father of Organic Chemistry'?",o:["Berzelius","Friedrich Wöhler","Dalton","Lavoisier"],a:1,e:"Friedrich Wöhler (1828) accidentally synthesised urea from ammonium cyanate — an inorganic compound — disproving vital force theory. He is called the Father of Organic Chemistry."},
    {t:"Theory",q:"What did Berzelius propose in 1815?",o:["Atomic theory","Periodic table","Vital Force Theory — only living organisms make organic compounds","Electron theory"],a:2,e:"Berzelius proposed the Vital Force Theory in 1815 — that organic compounds could only be formed by living organisms through a mysterious vital force."},
    {t:"Theory",q:"Wöhler prepared urea from which inorganic compound?",o:["NaCl","Ammonium cyanate (NH₄CNO)","CaCO₃","NH₄Cl only"],a:1,e:"Wöhler heated ammonium cyanate (NH₄CNO) and obtained urea CO(NH₂)₂ — an organic compound found in urine."},
    {t:"Theory",q:"How many organic compounds are known today?",o:["About 1000","About 1 lakh","Over 80 lakh (8 million)","Exactly 268"],a:2,e:"Over 80 lakh (8 million) organic compounds are known, compared to only about 1 lakh inorganic compounds. Carbon's catenation makes this possible."},
    {t:"Theory",q:"Catenation of carbon means?",o:["Carbon reacts with oxygen","Carbon forms bonds with itself to make chains and rings","Carbon has valency 2","Carbon dissolves in water"],a:1,e:"Catenation is the capacity of carbon to form carbon–carbon chains or rings by covalent bonds. Latin 'catena' = chain."},
    {t:"Theory",q:"Fullerenes were discovered in which year?",o:["1928","1953","1985","2001"],a:2,e:"Fullerenes were discovered in 1985 by Kroto, Smalley and Walton. The most important is C₆₀ called Buckminsterfullerene."},
    {t:"Theory",q:"C₆₀ fullerene is also called?",o:["Diamond ball","Bucky ball / Buckminsterfullerene","Carbon nanotube","Graphene"],a:1,e:"C₆₀ is called Buckminsterfullerene or 'Bucky Ball' — named after architect Buckminster Fuller who designed geodesic domes."},
    {t:"Theory",q:"C₆₀ fullerene structure consists of?",o:["20 pentagons + 12 hexagons","12 pentagons + 20 hexagons","6 hexagons only","30 pentagons"],a:1,e:"C₆₀ consists of 12 pentagons and 20 hexagons — exactly like a football. All C atoms are sp² hybridised."},
    {t:"Theory",q:"Fullerenes can be used as?",o:["Food additives","Semiconductors, superconductors and catalysts","Fuel gas","Fertilisers only"],a:1,e:"Fullerenes have commercial applications as semiconductors, superconductors, catalysts and in batteries."},
    {t:"Theory",q:"Which is a hetero aromatic compound?",o:["Benzene","Cyclopropane","Ethylene oxide","Pyridine"],a:3,e:"Pyridine is a hetero aromatic compound — it has a 6-membered ring containing nitrogen (a heteroatom). Benzene has only carbon atoms."},
    {t:"Theory",q:"Organic chemistry is the chemistry of?",o:["All compounds","Metals only","Carbon compounds (hydrocarbons and derivatives)","Noble gases"],a:2,e:"Organic chemistry deals with compounds formed by carbon chains and carbo-cyclic structures — hydrocarbons and their derivatives."},
    {t:"Theory",q:"The 3 causes for the large number of organic compounds are?",o:["Combustion, ionisation, resonance","Catenation, isomerism, polymerisation","Hybridisation, aromaticity, distillation","Oxidation, reduction, substitution"],a:1,e:"The 3 causes are: (1) Catenation — carbon bonds with carbon, (2) Isomerism — same formula different structures, (3) Polymerisation — small units join into large molecules."},
    {t:"Bonds",q:"According to EV Chemistry textbook, sigma bond is?",o:["Formed by sideways overlap","Formed by head-to-head axial overlap of two orbitals","Weaker than pi bond","Always in double bonds only"],a:1,e:"Sigma bond is formed by head-to-head (axial) overlap of two orbitals. It is the primary bond — all single bonds are sigma bonds."},
    {t:"Bonds",q:"Which statement is TRUE about pi bonds?",o:["Pi bond forms first","Pi bond is stronger than sigma","Pi bond forms by sideways overlap of p-orbitals","Pi bond allows free rotation"],a:2,e:"Pi bond forms by sideways (lateral) overlap of two p-orbitals. It forms AFTER sigma bond. It is WEAK and atoms CANNOT rotate around it."},
    {t:"Bonds",q:"Why do alkenes show cis-trans isomerism?",o:["Because of free rotation around C=C","Because of restricted rotation around C=C (no rotation in π bond)","Because of sp³ hybridisation","Because alkenes are cyclic"],a:1,e:"The π bond in C=C prevents free rotation. Groups are fixed in space — those on same side = cis, opposite sides = trans."},
    {t:"Bonds",q:"In propene CH₃–CH=CH₂, how many σ bonds and π bonds?",o:["8σ + 0π","8σ + 1π","7σ + 2π","6σ + 1π"],a:1,e:"Propene has 8 σ bonds (7 C–H and 1 C–C) + 1 π bond (in C=C). Total = 8σ + 1π."},
    {t:"Isomers",q:"Isomers are compounds with?",o:["Different molecular formula, same structure","Same molecular formula but different structural formulae","Same boiling point","Same physical properties"],a:1,e:"Isomers have the SAME molecular formula but DIFFERENT structural formulae — giving them different physical and/or chemical properties."},
    {t:"Isomers",q:"C₂H₆O has which 2 structural isomers?",o:["Ethane and propane","Ethanol and dimethyl ether","Methanol and ethanol","Ethene and ethyne"],a:1,e:"C₂H₆O → Ethanol (CH₃CH₂OH — alcohol) and Dimethyl ether (CH₃OCH₃ — ether). Same formula, different functional groups."},
    {t:"Isomers",q:"Number of optical isomers = ?",o:["n²","2n (where n = asymmetric carbons)","n+2","4n"],a:1,e:"Number of optical isomers = 2ⁿ where n is the number of asymmetric (chiral) carbon atoms. e.g. 1 asymmetric C → 2 optical isomers."},
    {t:"Isomers",q:"A compound with 1 asymmetric carbon has how many optical isomers?",o:["1","2","4","8"],a:1,e:"2ⁿ = 2¹ = 2 optical isomers. e.g. Lactic acid has 1 asymmetric C → 2 enantiomers (D-lactic and L-lactic acid)."},
    {t:"Isomers",q:"Disubstituted benzene has how many positional isomers?",o:["2","3","4","6"],a:1,e:"Disubstituted benzene has 3 isomers: ortho (position 1,2), meta (position 1,3) and para (position 1,4)."},
    {t:"Arenes",q:"'Para' position in benzene ring means?",o:["Position 2 — nearest","Position 3 — alternate","Position 4 — farthest","Position 6"],a:2,e:"Para (p) = position 4 — the farthest position from the first substituent. Ortho = 2/6 (nearer), meta = 3/5 (alternate), para = 4 (far away)."},
    {t:"Arenes",q:"'Ortho' position in benzene ring means?",o:["Position 4","Position 3 or 5","Position 2 or 6 — nearest","Position 1"],a:2,e:"Ortho (o) = positions 2 or 6 — nearest to the first substituent. 'Ortho' means nearer."},
    {t:"Arenes",q:"Aromatic compounds are obtained mainly by destructive distillation of?",o:["Petroleum only","Bituminous coal (coal tar) and petroleum","Seawater","Plant oils"],a:1,e:"Coal tar — obtained by destructive distillation of bituminous coal at 900–1100°C in absence of air — and petroleum are the main sources of aromatic compounds."},
    {t:"Arenes",q:"Destructive distillation of bituminous coal is carried out at?",o:["100°C","500°C","900–1100°C in absence of air","2000°C in presence of air"],a:2,e:"Destructive distillation of bituminous coal (10–12% moisture) in absence of air in a steel retort at 900–1100°C produces coal-tar and other volatile products."},
    {t:"Arenes",q:"The Bromine solution test proves?",o:["Compound is acidic","Compound is saturated","Compound is unsaturated (alkene or alkyne)","Compound contains nitrogen"],a:2,e:"Bromine solution (Br₂ in CCl₄, red colour) decolourises with unsaturated compounds. Red → colourless proves C=C or C≡C is present."},
    {t:"Arenes",q:"Bayer's KMnO₄ test — what colour change shows unsaturation?",o:["Blue to green","Colourless to pink","Pink to colourless","Yellow to red"],a:2,e:"Bayer's test: pink KMnO₄+KOH solution → turns COLOURLESS when mixed with unsaturated compound (alkene or alkyne). Alkanes give NO colour change."},
    {t:"Theory",q:"Cyclopropane has what ring shape in skeletal formula?",o:["Square","Triangle","Pentagon","Hexagon"],a:1,e:"Cyclopropane (3 carbons) is drawn as a triangle. Cyclobutane=square, cyclopentane=pentagon, cyclohexane=hexagon."},
    {t:"Theory",q:"Which first compound was prepared in the laboratory from an inorganic source?",o:["Methanol","Ethanol","Urea CO(NH₂)₂","Benzene"],a:2,e:"Urea — found in urine — was the first organic compound prepared in the lab by Wöhler (1828) from inorganic ammonium cyanate."},
    {t:"Theory",q:"How many periods (classes) does the organic chemistry chapter have in total?",o:["20","28","40","50"],a:2,e:"Chapter 2 (Organic Chemistry) has 40 total periods: 28 theoretical lectures + 12 class activities."},
    {t:"Theory",q:"Organic compound must always contain which element?",o:["Hydrogen","Oxygen","Carbon","Nitrogen"],a:2,e:"Organic compounds must always contain CARBON. Other elements like H, O, N, S, P, halogens may or may not be present."},

    // ── FROM PAGES 31–60 ──
    {t:"Isomers",q:"Isomerism is broadly classified into how many types?",o:["1","2","3","5"],a:1,e:"Isomerism is broadly of 2 types: (A) Structural isomerism and (B) Stereoisomerism."},
    {t:"Isomers",q:"Structural isomerism has how many subtypes?",o:["2","3","4","5"],a:3,e:"Structural isomerism has 5 subtypes: Chain, Position, Functional group, Metamerism, and Tautomerism."},
    {t:"Isomers",q:"Chain isomerism is seen mainly in which compounds?",o:["Alkenes","Alkynes","Alkanes","Alcohols only"],a:2,e:"Chain isomerism is seen mainly in alkanes. e.g. C₄H₁₀ → n-butane (straight) and isobutane (branched)."},
    {t:"Isomers",q:"Which has the higher boiling point — n-butane or isobutane?",o:["Isobutane (branched)","n-Butane (straight chain)","Both equal","Depends on pressure"],a:1,e:"n-Butane (bp −0.5°C) has higher bp than isobutane (bp −10.2°C). Branched isomers always have LOWER boiling points."},
    {t:"Isomers",q:"But-1-ene and But-2-ene are examples of which type of isomerism?",o:["Chain isomerism","Position isomerism","Functional group isomerism","Metamerism"],a:1,e:"But-1-ene (C=C at position 1, bp −6.5°C) and But-2-ene (C=C at position 2, bp 1.4°C) show position isomerism — same chain, different position of double bond."},
    {t:"Isomers",q:"Ethanol and dimethyl ether show which type of isomerism?",o:["Chain isomerism","Position isomerism","Functional group isomerism","Tautomerism"],a:2,e:"Both have formula C₂H₆O but different functional groups (–OH vs –O–). This is functional group isomerism. They belong to different homologous series."},
    {t:"Isomers",q:"Metamerism is shown by which compounds?",o:["Alkanes only","Ethers, ketones and secondary amines","Alkenes and alkynes","Only alcohols"],a:1,e:"Metamerism = different alkyl groups on same functional group. Found in ethers, ketones and secondary amines which have divalent functional groups."},
    {t:"Isomers",q:"Diethyl ether and methyl propyl ether have formula C₄H₁₀O — they are?",o:["Chain isomers","Position isomers","Metamers","Enantiomers"],a:2,e:"Same molecular formula C₄H₁₀O, same functional group (ether –O–), but different alkyl groups (ethyl-ethyl vs methyl-propyl). This is metamerism."},
    {t:"Isomers",q:"Tautomerism involves compounds in?",o:["Static equilibrium","Dynamic equilibrium","No equilibrium","Racemic mixture"],a:1,e:"Tautomers remain in dynamic equilibrium — they spontaneously interconvert between two forms (e.g. keto and enol forms)."},
    {t:"Isomers",q:"Propanone (keto) ⇌ Prop-2-en-1-ol (enol) is an example of?",o:["Chain isomerism","Geometrical isomerism","Keto-enol tautomerism","Optical isomerism"],a:2,e:"This is keto-enol tautomerism. A proton (H⁺) shifts from C to O of the keto group, forming the enol form with C=C bond."},
    {t:"Isomers",q:"Stereoisomerism is caused by different?",o:["Molecular formulae","Connectivity of atoms","Spatial arrangement of atoms (configurations)","Number of carbons"],a:2,e:"Stereoisomers have the same structural formula but differ in the spatial arrangement of atoms or groups in space — they differ in configurations."},
    {t:"Isomers",q:"Two conditions for geometric isomerism are: (1) substituted alkene and (2)?",o:["Chiral carbon present","Substituted cyclic alkane","Only ketone group","Triple bond present"],a:1,e:"Two conditions: (1) Substituted alkene with abC=Cab or abC=Cad formula (2) Substituted cyclic alkane (e.g. 1,2-dimethylcyclopropane)."},
    {t:"Isomers",q:"cis-but-2-ene has boiling point 4°C and trans-but-2-ene has 1°C. Which is more stable?",o:["cis isomer","trans isomer","Both equal stability","Depends on temperature"],a:1,e:"trans-but-2-ene is MORE stable (lower heat of combustion). cis-but-2-ene has more internal energy → less stable → higher heat of combustion."},
    {t:"Isomers",q:"Maleic acid (cis-butene-dioic acid) can form an anhydride. Fumaric acid (trans) cannot. Why?",o:["Different boiling points","cis has both COOH groups on same side so they can react together","trans has lower molecular mass","Different molecular formulae"],a:1,e:"In maleic acid (cis), both –COOH groups are on the SAME side of the double bond, so they are close enough to react and form maleic anhydride at 160°C. Trans (fumaric acid) cannot."},
    {t:"Isomers",q:"Which isomer has higher melting point — cis or trans?",o:["cis isomer","trans isomer","Both equal","Impossible to determine"],a:1,e:"trans isomer has higher mp due to its symmetry — molecules pack more closely in crystal lattice. cis isomer has lower mp."},
    {t:"Isomers",q:"Retinal is involved in human vision using which type of isomerism?",o:["Chain isomerism","Optical isomerism","cis-trans (geometric) isomerism","Tautomerism"],a:2,e:"Retinal (from Vitamin A) uses cis-trans isomerism for vision. Light converts cis-retinal → trans-retinal, generating electrical nerve impulses to the brain."},
    {t:"Isomers",q:"3 conditions for optical activity: asymmetric C, mirror images, and?",o:["Same boiling point","Non-superimposable","Same melting point","Must have –OH group"],a:1,e:"Three conditions: (i) must have asymmetric/chiral carbon (4 different groups) (ii) configurations must be mirror images (iii) mirror images must be NON-SUPERIMPOSABLE."},
    {t:"Isomers",q:"Chiral centre in a compound is denoted by which symbol?",o:["#","@","*","&"],a:2,e:"Chiral centre (asymmetric carbon) is denoted by an asterisk (*). It has 4 different atoms or groups attached."},
    {t:"Isomers",q:"d-lactic acid has specific rotation +2.24° and l-lactic acid has −2.24°. They are?",o:["Diastereoisomers","Metamers","Enantiomers","Position isomers"],a:2,e:"Enantiomers rotate polarised light equally but in OPPOSITE directions. d-lactic acid (+2.24°) and l-lactic acid (−2.24°) are enantiomers."},
    {t:"Isomers",q:"A racemic mixture (dl or ±) is optically?",o:["Active — dextrorotatory","Active — levorotatory","Inactive — mutual cancellation","Active in solid state only"],a:2,e:"Racemic mixture = equimolar d+l mixture → optically INACTIVE because the rotations of d and l forms cancel each other out mutually."},
    {t:"Isomers",q:"Diastereoisomers have which chiral centres?",o:["Two SIMILAR chiral centres","Two DISSIMILAR chiral centres","No chiral centres","One chiral centre only"],a:1,e:"Diastereoisomers have two DISSIMILAR chiral centres — they are NOT mirror images of each other and differ in physical properties (mp, bp, solubility)."},
    {t:"Isomers",q:"Meso isomer has two SIMILAR chiral centres but is optically?",o:["Active (dextrorotatory)","Active (levorotatory)","Inactive due to internal compensation","Active at high temperature"],a:2,e:"Meso isomer has a plane of symmetry — one half rotates light equal and opposite to the other half → internally compensated → optically INACTIVE despite having chiral carbons."},
    {t:"Isomers",q:"Formula for optical isomers with n DISSIMILAR chiral centres?",o:["n²","2ⁿ","n+2","2n"],a:1,e:"Total optical isomers = 2ⁿ where n = number of DISSIMILAR asymmetric carbon atoms."},
    {t:"Isomers",q:"Formula for optical isomers with n SIMILAR chiral centres?",o:["2ⁿ","2ⁿ⁻¹","n²","4n"],a:1,e:"For n SIMILAR chiral centres: optical isomers = 2ⁿ⁻¹ and meso isomers = 2^((n−2)/2), where n is even."},
    {t:"Isomers",q:"Tartaric acid has 2 SIMILAR chiral centres. How many optical isomers?",o:["4","3","2","1"],a:2,e:"2ⁿ⁻¹ = 2²⁻¹ = 2¹ = 2 optical isomers (d-tartaric and l-tartaric). Plus 1 meso-tartaric acid. Total 3 forms."},
    {t:"Isomers",q:"Which compound is the classic meso isomer example?",o:["Lactic acid","Ethanol","Tartaric acid","Glucose"],a:2,e:"Tartaric acid (2,3-dihydroxybutanedioic acid) has 2 similar chiral centres and exists as d-tartaric, l-tartaric, and meso-tartaric acid."},
    {t:"Isomers",q:"Glucose (2,3,4,5,6-pentahydroxyhexanal) has 4 asymmetric C atoms. Optical isomers?",o:["4","8","16","32"],a:2,e:"2ⁿ = 2⁴ = 16 optical isomers for glucose. All 4 chiral centres are dissimilar."},
    {t:"Isomers",q:"Almost all carbohydrates and amino acids are?",o:["Optically inactive","Optically active","Racemic mixtures","Meso compounds"],a:1,e:"Almost all carbohydrates and amino acids are optically active. Only ONE isomer participates in biological reactions — enzymes have chiral binding sites."},
    {t:"Isomers",q:"The word 'isomerism' comes from Greek — isos means?",o:["Different","Equal","Parts","Carbon"],a:1,e:"Isomerism comes from Greek: isos = equal; meros = parts. Isomers are 'equal parts' compounds — same formula, different structure."},
    {t:"Naming",q:"In IUPAC priority list, which functional group has highest priority?",o:["Aldehyde –CHO","Alcohol –OH","Carboxylic acid –COOH","Ketone >C=O"],a:2,e:"Carboxylic acid (–COOH) has the HIGHEST priority in naming. Priority order: –COOH > –SO₃H > –COX > –CONH₂ > –CN > –CHO > >C=O > –OH > –NH₂ > C=C > C≡C > C–C."},
    {t:"Naming",q:"In IUPAC priority, aldehyde has priority number?",o:["1st","3rd","6th","8th"],a:2,e:"Aldehyde (–CHO) has priority 6 in the list: COOH(1) > SO₃H(2) > COX(3) > CONH₂(4) > CN(5) > CHO(6)."},
    {t:"Naming",q:"IUPAC suffix for ketone group >C=O is?",o:["–al","–ol","–one","–oic acid"],a:2,e:"Ketone suffix = –one. The oxo– prefix is used when ketone is not the principal functional group."},
    {t:"Naming",q:"Strategy for naming a compound in IUPAC system: what is done FIRST?",o:["Name all substituents","Select the LONGEST carbon chain","Count total H atoms","Identify double bonds only"],a:1,e:"Step 1: Select the longest carbon chain (parent chain). Step 2: Number from the end closest to the principal functional group. Step 3: Name substituents alphabetically as prefixes. Then apply IUPAC suffix."},
    {t:"Naming",q:"Which compound is named 4,4-dimethyl pent-2-yne?",o:["5C chain, triple bond at C2, two methyls at C4","4C chain, single bonds only","5C chain, double bond at C2","3C chain with triple bond"],a:0,e:"4,4-dimethyl pent-2-yne: pent = 5C chain, -2-yne = triple bond between C2 and C3, 4,4-dimethyl = two –CH₃ groups at C4. Structure: CH₃–C≡C–C(CH₃)₂–CH₃."},

    // ── FROM PAGES 48–60 ──
    {t:"Arenes",q:"The word 'aromatic' comes from the Greek word meaning?",o:["Carbon","Sweet smell","Fire","Cyclic"],a:1,e:"The word 'aromatic' is derived from the Greek word 'aroma' meaning sweet smell. Early chemists found that sweet-smelling compounds had different properties from aliphatic compounds."},
    {t:"Arenes",q:"Benzene is considered as which compound of the aromatic class?",o:["Last compound","Simplest compound","Prime compound","Most complex compound"],a:2,e:"Benzene (C₆H₆) is considered as the prime compound of the aromatic class. All other aromatic compounds are derived from or related to benzene."},
    {t:"Arenes",q:"Aromatic hydrocarbons are also called?",o:["Alkanes","Arenes","Alkynes","Cycloalkanes"],a:1,e:"Aromatic hydrocarbons are also called arenes. They have one or more six-membered benzenoid rings with delocalised π electrons."},
    {t:"Arenes",q:"C–C bond length in benzene is 0.139 nm. This is in between which two values?",o:["0.120 nm and 0.130 nm","0.154 nm (single) and 0.134 nm (double)","0.100 nm and 0.120 nm","0.200 nm and 0.300 nm"],a:1,e:"Benzene C–C bond length 0.139 nm is between single bond (C–C = 0.154 nm) and double bond (C=C = 0.134 nm). This unique length is due to resonance/delocalisation."},
    {t:"Arenes",q:"All six carbon atoms in benzene are hybridised as?",o:["sp³","sp²","sp","sp³d"],a:1,e:"All six C atoms in benzene are sp² hybridised. Each C forms 2 sigma bonds with adjacent C atoms and 1 sigma bond with H. The remaining unhybridised 2p_z orbital forms the π system."},
    {t:"Arenes",q:"In benzene, six 2p_z orbitals overlap to form?",o:["Six separate π bonds","A symmetrical delocalised molecular π-orbital","Six sigma bonds","A single double bond"],a:1,e:"Six 2p_z orbitals of benzene C atoms overlap sideways to form a symmetrical molecular π-orbital with delocalised electron cloud above and below the plane of the hexagonal ring."},
    {t:"Arenes",q:"Kekule (1865) proposed that benzene structure is a?",o:["Fixed single bond structure","Resonance hybrid","Linear chain","Zigzag chain"],a:1,e:"Kekule proposed that C–C single and C=C double bonds in benzene are constantly changing positions. So benzene structure is a resonance hybrid of structures with 6 resonating π electrons."},
    {t:"Arenes",q:"Benzene does NOT give bromine solution test because?",o:["It has no carbon","Its delocalised π electrons are too stable to be attacked","It is a gas","It has no hydrogen"],a:1,e:"Benzene's delocalised π electrons are too stable (extra resonance energy) to be attacked by ordinary reagents like Br₂ in CCl₄. Unlike alkenes/alkynes, benzene does NOT decolourise bromine solution."},
    {t:"Arenes",q:"Benzene mainly undergoes which type of reactions?",o:["Addition only","Substitution only","Electrophilic substitution (mainly) and addition (some)","No reactions"],a:2,e:"Unlike alkenes (addition reactions), benzene mainly undergoes electrophilic substitution reactions — halogenation, nitration, sulphonation, Friedel-Craft. It also does some addition reactions (H₂, Cl₂, O₃)."},
    {t:"Arenes",q:"Benzene + 3H₂ with Ni catalyst at 200°C gives?",o:["Toluene","Cyclohexane","Benzene hexachloride","Nitrobenzene"],a:1,e:"C₆H₆ + 3H₂ → Ni, 200°C → C₆H₁₂ (cyclohexane). This is a free-radical type addition reaction. Each mole benzene adds 3 moles H₂."},
    {t:"Arenes",q:"Benzene + 3Cl₂ in direct sunlight gives?",o:["Chlorobenzene","Benzene hexachloride (gammexane) C₆H₆Cl₆","Toluene","Nitrobenzene"],a:1,e:"C₆H₆ + 3Cl₂ → UV/sunlight → C₆H₆Cl₆ (benzene hexachloride, also called gammexane or BHC). Free-radical type addition. Used as insecticide."},
    {t:"Arenes",q:"Benzene + Cl₂ with anhydrous AlCl₃ (no light) gives?",o:["Benzene hexachloride","Chlorobenzene C₆H₅Cl","Cyclohexane","Benzene sulphonic acid"],a:1,e:"C₆H₆ + Cl₂ → anhydrous AlCl₃ → C₆H₅Cl (chlorobenzene) + HCl. This is electrophilic substitution (halogenation). AlCl₃ acts as halogen carrier/Lewis acid."},
    {t:"Arenes",q:"In halogenation of benzene, AlCl₃ forms which electrophile from Cl₂?",o:["Cl⁻","Cl⁺ (chloronium ion)","AlCl₄⁻","HCl"],a:1,e:"AlCl₃ + Cl₂ → AlCl₄⁻ (nucleophile) + Cl⁺ (chloronium ion = electrophile). The Cl⁺ electrophile attacks benzene's π electrons → σ-complex → chlorobenzene + HCl + AlCl₃ (regenerated)."},
    {t:"Arenes",q:"Nitration of benzene uses which reagents?",o:["Conc. HNO₃ only","Conc. HNO₃ + conc. H₂SO₄ at 60°C","Dilute HNO₃ + water","HNO₃ + NaOH"],a:1,e:"Benzene + conc. HNO₃ + conc. H₂SO₄ (equal volumes) at 60°C → C₆H₅NO₂ (nitrobenzene) + H₂O. H₂SO₄ generates the NO₂⁺ (nitronium ion) electrophile."},
    {t:"Arenes",q:"In nitration, what is the electrophile that attacks benzene?",o:["HNO₃","NO₂⁻","NO₂⁺ (nitronium ion)","H₂SO₄"],a:2,e:"H₂SO₄ donates H⁺ to HNO₃ → forms NO₂⁺ (nitronium ion) which is the electrophile. NO₂⁺ attacks benzene π electrons → σ-complex → HSO₄⁻ removes H⁺ → nitrobenzene + H₂SO₄ regenerated."},
    {t:"Arenes",q:"Sulphonation of benzene with fuming H₂SO₄ at 100°C gives?",o:["Chlorobenzene","Nitrobenzene","Benzene sulphonic acid C₆H₅SO₃H","Phenol"],a:2,e:"C₆H₆ + HO–SO₃H → SO₃, 100°C → C₆H₅SO₃H (benzene sulphonic acid) + H₂O. SO₃ acts as electrophile. Water formed is absorbed by SO₃ → H₂SO₄ (favours forward reaction)."},
    {t:"Arenes",q:"Friedel-Craft's reaction definition: benzene + alkyl halide (RX) with anhydrous AlCl₃ gives?",o:["Phenol","Aromatic hydrocarbon by alkylation","Carboxylic acid","Alkene"],a:1,e:"In Friedel-Craft's alkylation: benzene + alkyl halide (RX) + anhydrous AlCl₃ → aromatic hydrocarbon + HCl. Example: C₆H₆ + CH₃Cl → AlCl₃ → C₆H₅CH₃ (toluene) + HCl."},
    {t:"Arenes",q:"Friedel-Craft acylation: benzene + CH₃COCl with AlCl₃ gives?",o:["Toluene","Acetophenone (methyl phenyl ketone) C₆H₅COCH₃","Chlorobenzene","Benzaldehyde"],a:1,e:"C₆H₆ + CH₃COCl → dry AlCl₃ → C₆H₅COCH₃ (acetophenone/methyl phenyl ketone) + HCl. The acyl carbonium ion (CH₃C⁺=O) is the electrophile."},
    {t:"Arenes",q:"Why is DRY AlCl₃ used in Friedel-Craft's reaction?",o:["Dry is cheaper","Moisture destroys AlCl₃: AlCl₃+3H₂O→Al(OH)₃+3HCl — can no longer form electrophile","Dry reacts faster","Water makes the reaction safer"],a:1,e:"If moisture is present: AlCl₃ + 3H₂O → Al(OH)₃ + 3HCl. Then AlCl₃ is destroyed and cannot act as Lewis acid to prepare the electrophile from the alkyl/acyl halide. So DRY AlCl₃ is essential."},
    {t:"Arenes",q:"Benzene is a polymer of ethyne. 3 HC≡CH at 450°C with Fe catalyst gives?",o:["Cyclohexane","Naphthalene","Benzene C₆H₆","Anthracene"],a:2,e:"3 HC≡CH → Fe, 450°C → C₆H₆ (benzene). When ethyne gas is passed through an iron tube at 450°C, three molecules of ethyne polymerise to form one molecule of benzene. This is a trimerisation reaction."},
    {t:"Arenes",q:"Benzene from sodium benzoate + sodalime reaction is called?",o:["Nitration","Halogenation","Decarboxylation","Sulphonation"],a:2,e:"C₆H₅COONa + NaOH(CaO) → Δ → C₆H₆ + Na₂CO₃. This reaction between sodium salt of carboxylic acid and sodalime to form hydrocarbon with elimination of CO₂ is called decarboxylation."},
    {t:"Arenes",q:"Toluene from chlorobenzene + methyl chloride + 2Na in dry ether is called?",o:["Friedel-Craft reaction","Wurtz reaction","Wurtz-Fitting reaction","Grignard reaction"],a:2,e:"C₆H₅Cl + 2Na + CH₃Cl → dry ether, Δ → C₆H₅CH₃ + 2NaCl. This is Wurtz-Fitting reaction. ArX + 2Na + RX → Ar-R + 2NaX. Any alkyl arene can be prepared this way."},
    {t:"Arenes",q:"In coal tar distillation, light oil (up to 170°C) contains mainly?",o:["Anthracene and phenanthrene","Phenol, cresols, naphthalene","Benzene, toluene, xylene, phenol, pyridine","Coke carbons"],a:2,e:"Light oil (sp.gr. 0.97, up to 170°C, 5% by volume) contains benzene, toluene, xylene, phenol, pyridine and thiophene. It is the most valuable fraction for obtaining pure benzene."},
    {t:"Arenes",q:"90% benzol from light oil contains approximately?",o:["90% benzene","84% benzene + 13% toluene + 3% xylene","50% benzene + 50% toluene","100% benzene"],a:1,e:"90% benzol (obtained by fractional distillation at 70–110°C) contains 84% benzene + 13% toluene + 3% xylene. Further distillation at 80–82°C gives 99% pure benzene."},
    {t:"Arenes",q:"To get chemically pure benzene, 99% benzene is cooled at 5.4°C to remove?",o:["Toluene","Xylene","Thiophene (using cold conc. H₂SO₄)","Naphthalene"],a:2,e:"99% benzene cooled at 5.4°C → crystals form still containing 0.5% thiophene. Treating with cold conc. H₂SO₄ removes thiophene. Finally distilled at 80.4°C → chemically pure benzene."},
    {t:"Arenes",q:"Hückel's aromaticity rule was proposed by Eric Hückel in?",o:["1865","1901","1931","1955"],a:2,e:"Eric Hückel proposed his aromaticity rules in 1931. He extended the concept to cyclic ions and heterocyclic compounds, not just benzene. His key condition: (4n+2) delocalised π electrons."},
    {t:"Arenes",q:"For aromaticity, Hückel rule requires the compound to have (4n+2) π electrons. For benzene n=1, so π electrons =?",o:["2","4","6","8"],a:2,e:"(4n+2) where n=1: (4×1)+2 = 6 π electrons. Benzene has exactly 6 π electrons (3 double bonds × 2 electrons each) — satisfies Hückel rule. ✅"},
    {t:"Arenes",q:"In 5-membered heterocyclic compounds like furan, which contributes to (4n+2) π electron count?",o:["The C–H bonds","Lone pair of the heteroatom (O, N, S)","The sigma bonds","The molecular weight"],a:1,e:"In 5-membered heterocyclic aromatics (furan, pyrrole, thiophene), the lone pair of the heteroatom (O, N, or S) participates in the delocalised π electron count to satisfy the (4n+2) Hückel rule."},
    {t:"Arenes",q:"Ozonolysis of benzene (+ 3O₃ in CCl₄, then H₂O/Zn) gives?",o:["3 glyoxal + 3ZnO","Cyclohexane","Nitrobenzene","Benzene sulphonic acid"],a:0,e:"C₆H₆ + 3O₃ → CCl₄ → benzene triozonide → H₂O/Zn, Δ → 3 glyoxal (OHC–CHO) + 3ZnO. This proves benzene has 3 double bonds (takes exactly 3 moles ozone)."},
    {t:"Arenes",q:"C₃H₆O has how many isomers including aldehyde, ketone and alkenol?",o:["2","3","4","5"],a:1,e:"C₃H₆O has 3 functional group isomers: propanal CH₃CH₂CHO (bp 48.8°C), propanone CH₃COCH₃ (bp 56°C), and 2-propen-1-ol/allyl alcohol CH₂=CHCH₂OH (bp 97°C)."},
    {t:"Arenes",q:"C₃H₈O has how many isomers (alcohol and ether types)?",o:["2","3","4","5"],a:1,e:"C₃H₈O (CₙH₂ₙ₊₂O) has 3 isomers: propan-1-ol (CH₃CH₂CH₂OH), propan-2-ol (CH₃CHOHCH₃), and methoxy ethane/methyl ethyl ether (CH₃OCH₂CH₃)."},

    // ── FROM PAGES 61–90 ──
    {t:"Reactions",q:"Carbon % in benzene C₆H₆ is approximately?",o:["75%","82%","92.3%","50%"],a:2,e:"Benzene C₆H₆: C = 72÷78 × 100 = 92.3%. Compare methane CH₄: C = 12÷16 × 100 = 75%. Aromatic compounds always have higher carbon % than aliphatic ones."},
    {t:"Reactions",q:"Aromatic halide (Ar–X) compared to aliphatic (R–X) is?",o:["More reactive","Less reactive — needs 300°C, 200 atm for hydrolysis","Same reactivity","Only reacts with acids"],a:1,e:"Aryl halide (Ar–X) is LESS reactive. Barely hydrolysed even at high temp/pressure. Needs 300°C and 200 atm KOH(aq) to form phenol. Aliphatic R–X is easily hydrolysed by aq. KOH at room temperature."},
    {t:"Reactions",q:"Phenol (C₆H₅OH) turns litmus?",o:["Blue (basic)","Red (acidic)","Neutral","Purple"],a:1,e:"Phenol is ACIDIC — turns blue litmus RED. Aliphatic alcohols are neutral (no effect on litmus). Phenol reacts with NaOH → sodium phenate (C₆H₅ONa) + H₂O."},
    {t:"Reactions",q:"How many classes of attacking reagents are there?",o:["2","3","4","5"],a:1,e:"3 classes: (1) Free radical (2) Electrophile (3) Nucleophile. All organic reactions involve one of these three types attacking a substrate."},
    {t:"Reactions",q:"Free radicals are formed by which bond-breaking process?",o:["Heterolysis (unequal break)","Homolysis (equal/symmetric break)","Ionic dissociation","No bond breaking"],a:1,e:"Free radicals form by HOMOLYSIS — covalent bond breaks symmetrically, each atom gets one electron. Requires heat or light (hν). Cl–Cl → hν → •Cl + •Cl. Bond dissociation energy of Cl₂ = 243 J/mol."},
    {t:"Reactions",q:"Electrophiles are electron-___ species?",o:["Rich (donate electrons)","Poor (accept electron pairs)","Neutral always","Radical"],a:1,e:"Electrophiles are ELECTRON-POOR (electron-loving) species that accept electron pairs. Examples: H⁺, H₃O⁺, NO₂⁺, Cl⁺, SO₃, AlCl₃, FeCl₃, BF₃. They attack electron-rich sites."},
    {t:"Reactions",q:"Nucleophiles are electron-___ species?",o:["Poor (accept electrons)","Rich (donate electron pairs)","Always positive","Free radicals"],a:1,e:"Nucleophiles are ELECTRON-RICH (nucleus-loving) species with lone pairs to donate. Examples: HO⁻, CN⁻, Cl⁻, Br⁻, I⁻, NH₃, H₂O, ROH. They attack electron-deficient (δ+) carbon atoms."},
    {t:"Reactions",q:"Carbocation (carbonium ion) stability order?",o:["1° > 2° > 3°","3° > 2° > 1° > ⁺CH₃","Methyl > 1° > 2° > 3°","All equal"],a:1,e:"3° > 2° > 1° > ⁺CH₃ (methyl). More alkyl groups = more electron donation to positive C = more stable carbocation. Stability controls Markovnikov's rule."},
    {t:"Reactions",q:"Carbanion (carban ion) stability order?",o:["3° > 2° > 1°","1° methyl most stable > 1° > 2° > 3°","All equal","Methyl least stable"],a:1,e:"Carbanion stability is OPPOSITE to carbocation: methyl (:CH₃) most stable, 3° least stable. More alkyl groups increase negative charge concentration = LESS stable. Carbanions act as nucleophiles."},
    {t:"Reactions",q:"Markovnikov's Rule: in HBr + propene, the H⁺ adds to?",o:["C2 (less H)","C1 (more H) → gives 2-bromopropane","C3","Equally to both"],a:1,e:"H⁺ adds to C1 (which has more H atoms = 2H). This forms more stable 2° carbocation at C2. Then Br⁻ adds to C2. Result: 2-bromopropane (90%) as major product. This is Markovnikov's rule."},
    {t:"Reactions",q:"Anti-Markovnikov/Kharasch effect: in presence of organic peroxide, HBr + propene gives mainly?",o:["2-bromopropane (Markovnikov)","1-bromopropane (99.1%) — anti-Markovnikov","Equal mixture","No reaction"],a:1,e:"Kharasch (1933): Organic peroxide (R-O-O-R) → free radical mechanism → Br• attacks C1 to form more stable 2° free radical → then H• adds → 1-bromopropane (99.1%) as major product."},
    {t:"Reactions",q:"Kharasch peroxide effect (Anti-Markovnikov) works with?",o:["HCl only","HI only","HBr ONLY — not HCl or HI","All hydrogen halides"],a:2,e:"Kharasch effect works ONLY with HBr. Not with HCl (too strong bond to break homolytically) or HI (less stable iodine radical). This is an important exam distinction."},
    {t:"Reactions",q:"Ozonolysis determines the position of which bond?",o:["C–C single bond","C=O carbonyl bond","C=C double bond or C≡C triple bond","C–H bond"],a:2,e:"Ozonolysis determines the POSITION of C=C (double bond) in alkene chain, or C≡C (triple bond) in alkyne chain. The aldehyde/ketone/acid products reveal exactly where the π-bond was."},
    {t:"Reactions",q:"Why is Zn dust used in ozonolysis?",o:["To speed up ozone addition","To prevent oxidation of aldehyde to carboxylic acid by [O]","To remove ozone","As catalyst"],a:1,e:"Without Zn: aldehyde + nascent [O] → carboxylic acid. Adding Zn dust converts H₂O₂ → ZnO, preventing oxidation. So with Zn → aldehyde product; without Zn → carboxylic acid product."},
    {t:"Reactions",q:"Why does carbonyl group (C=O) undergo nucleophilic addition?",o:["C is more electronegative than O","O is more electronegative than C (3.5 vs 2.5), making C δ+","No polarity in C=O","Free radical mechanism"],a:1,e:"O (EN=3.5) > C (EN=2.5). π electrons shift toward O → C becomes δ+. Nucleophile attacks the electron-deficient δ+ carbon. This is why aldehydes and ketones undergo nucleophilic addition."},
    {t:"Reactions",q:"Grignard reagent (CH₃MgBr) + methanal HCHO + H₂O gives?",o:["Methanol (1° alcohol)","Ethanol (1° alcohol)","Propanol-2 (2° alcohol)","Tertiary alcohol"],a:1,e:"Methanal (1C) + CH₃MgBr adds one CH₃ → 2C product → hydrolysis → ethanol (1° alcohol). Rule: Methanal → 1° alcohol, other aldehydes → 2° alcohol, ketones → 3° alcohol."},
    {t:"Reactions",q:"Aldol condensation condition: aldehyde MUST have?",o:["No α-hydrogen","α-hydrogen (acidic H on C adjacent to C=O)","Only ketone groups","Conc. NaOH"],a:1,e:"Aldol needs α-H. The α-H is acidic → dil. NaOH removes it → carbanion forms → attacks C=O of another molecule → β-hydroxy carbonyl compound (aldol). Word 'aldol' = aldehyde + alcohol."},
    {t:"Reactions",q:"Cannizzaro's reaction: methanal HCHO + 50% NaOH gives?",o:["Ethanol","CH₃OH (methanol) + HCOONa (sodium formate)","CO₂ + H₂O","Formaldehyde polymer"],a:1,e:"Cannizzaro's disproportionation: 2HCHO + 50%NaOH → CH₃OH (methanol, reduced) + HCOONa (sodium formate, oxidised). Occurs only with aldehydes having NO α-H."},
    {t:"Reactions",q:"SN1 nucleophilic substitution occurs in how many steps?",o:["1 step","2 steps (slow ionisation → fast nucleophile attack)","3 steps","4 steps"],a:1,e:"SN1 = 2 steps: Step 1 (SLOW) — RX → R⁺ (carbocation) + X⁻. Step 2 (FAST) — R⁺ + :Nu → R–Nu. Rate depends only on [RX]. Favoured by 3° alkyl halide and polar solvents."},
    {t:"Reactions",q:"SN2 nucleophilic substitution occurs in how many steps?",o:["2 steps","1 step — transition complex","3 steps","4 steps"],a:1,e:"SN2 = 1 step. Nucleophile attacks C from the back while halide leaves simultaneously — transition complex forms. Rate depends on both [RX] and [Nu]. Favoured by 1° alkyl halide, strong nucleophile, non-polar solvent."},
    {t:"Reactions",q:"Propyl chloride + KOH(aq) gives substitution product?",o:["Propene","Propanol","Propane","Isopropanol"],a:1,e:"Propyl chloride + KOH(aq) → propanol + KCl. Aqueous KOH → OH⁻ is WEAK nucleophile (solvated by water) → substitution (SN2). Compare: KOH(alc.) → strong nucleophile → elimination → propene."},
    {t:"Reactions",q:"Saytzeff's rule predicts which alkene is major product in elimination?",o:["Less substituted (terminal)","More substituted/branched alkene","Always but-1-ene","Depends on temperature only"],a:1,e:"Saytzeff's rule: MORE substituted/branched alkene is MAJOR product. Example: 2-butanol elimination → 80% but-2-ene (more substituted) + 20% but-1-ene."},
    {t:"Reactions",q:"–CH₃ group in benzene has which electronic effect?",o:["–I (negative inductive)","–M (negative mesomeric)","+ I (positive inductive) → ortho-para directing","No effect"],a:2,e:"–CH₃ has positive inductive (+I) effect — donates electrons toward the ring. Increases electron density at ortho and para positions. So toluene is more reactive than benzene and gives ortho+para products."},
    {t:"Reactions",q:"–NO₂ group in benzene ring is?",o:["Ortho-para directing (activating)","Meta directing (deactivating)","No directing effect","Positive inductive"],a:1,e:"–NO₂ group has negative mesomeric (–M) effect — withdraws electron density from ring. Deactivates ring, decreases electron density at ortho and para positions. Electrophile attacks remaining META positions. Nitrobenzene is less reactive than benzene."},
    {t:"Reactions",q:"Chlorination of toluene with Cl₂ + AlCl₃, no light, gives?",o:["Benzyl chloride (side chain)","Ortho + para chlorotoluene (ring substitution)","Benzene hexachloride","Only meta product"],a:1,e:"Cl₂ + AlCl₃ (no light) → electrophilic substitution at RING → ortho-chlorotoluene + para-chlorotoluene. But Cl₂ + sunlight/111°C → free radical → side chain attacked → benzyl chloride → benzal chloride → benzo chloride."},
    {t:"Reactions",q:"Side chain oxidation of toluene (–CH₃) with KMnO₄/KOH gives?",o:["Benzaldehyde","Phenol","Benzoic acid C₆H₅COOH","Cresol"],a:2,e:"Toluene + 3[O] → KMnO₄/KOH → benzoic acid (C₆H₅COOH) + H₂O. Strong oxidising agents oxidise the entire methyl side chain to –COOH. Benzene ring is not broken under these conditions."}
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

  // ─────────────────────────────────────────────
  //  bKash PAYMENT MODAL
  // ─────────────────────────────────────────────
  window.openBkash = function() {
    const overlay = document.getElementById('bkash-overlay');
    if (overlay) overlay.classList.add('open');
  };

  window.closeBkash = function() {
    const overlay = document.getElementById('bkash-overlay');
    if (overlay) overlay.classList.remove('open');
  };

  window.closeBkashOutside = function(e) {
    if (e.target.id === 'bkash-overlay') window.closeBkash();
  };

  window.copyBkash = function() {
    const num = '01882808528';
    if (navigator.clipboard) {
      navigator.clipboard.writeText(num).then(() => {
        const btn = document.getElementById('bkash-copy-btn');
        if (btn) {
          btn.textContent = '✅ Copied!';
          btn.style.background = 'linear-gradient(135deg,#059669,#047857)';
          setTimeout(() => { btn.textContent = '📋 Copy'; btn.style.background = ''; }, 2000);
        }
      });
    } else {
      const el = document.getElementById('bkash-num-display');
      if (el) {
        const range = document.createRange();
        range.selectNode(el);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
        document.execCommand('copy');
        window.getSelection().removeAllRanges();
        const btn = document.getElementById('bkash-copy-btn');
        if (btn) { btn.textContent = '✅ Copied!'; setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000); }
      }
    }
  };

  // ─────────────────────────────────────────────
  //  HOME BUTTON (click on site title)
  // ─────────────────────────────────────────────
  window.goHome = function() {
    navigateTo('home', true);
  };

  // ═══════════════════════════════════════════════
  //  🤖  AI ENGINE
  // ═══════════════════════════════════════════════

  const TRANS = {
    en: {
      div1:'📚 Organic Compounds', div2:'📖 Theory & Reference', div3:'🧪 Study Tools',
      nav_ka:'🔥 Alkane', nav_ke:'🌿 Alkene', nav_ky:'⚡ Alkyne',
      nav_al:'🧪 Alcohol', nav_ad:'✨ Aldehyde', nav_ac:'🧬 Fatty Acid',
      nav_ex:'⇄ Exchange', nav_sy:'🔬 How Made',
      nav_th:'📖 Theory', nav_fg:'🏷️ Func. Groups', nav_is:'🔄 Isomerism', nav_ar:'💎 Arenes',
      nav_mq:'📝 MCQ Exam', nav_tq:'🎯 Topic Quiz', nav_fc:'⏱️ Flashcards',
      nav_nm:'🔍 Name Lookup', nav_fb:'🧩 Formula Builder', nav_mw:'🧮 Mol. Weight',
      nav_nt:'📝 Notes', nav_rc:'📊 Reaction Chart',
      sub_al:'–OH group', sub_ad:'–CHO group', sub_ac:'–COOH group',
      sub_ex:'Any → Any', sub_sy:'Synthesis', sub_th:'EV Textbook',
      sub_is:'Structural/Geo', sub_ar:'Benzene Ring',
      sub_mq:'300+ Qs · 20 Min', sub_tq:'5 Qs / Topic', sub_fc:'Flip & Revise',
      sub_nm:'150+ Compounds', sub_fb:'Type Structure', sub_mw:'Calculator',
      sub_nt:'Summary Cards', sub_rc:'Visual Map',
      hl:'⚗️ Organic Chemistry · For Class 9–12 Students',
      hd:'🔬 Reactions · Isomerism · Synthesis · Formula Lookup · MCQ Exam',
      footer_main:'⚗️ ORGANIC CHEMISTRY HUB · FOR CLASS 9–12 STUDENTS',
      footer_tag:'Made with ❤️ for Class 9–12 Chemistry Students',
      home_title:'Choose a Section!',
      home_desc:'Click any button above to explore reactions, exchange conversions, synthesis or MCQ exam 🚀',
      mq_title:'Chemistry MCQ Exam', mq_sub:'Organic Chemistry · Class 9–12',
      mq_start:'🚀 Start Exam', mq_review:'📖 See Answers & Explanations', mq_retake:'🔄 Retake',
      fc_front:'Question — click to flip', fc_back:'Answer',
      fc_prev:'◀ Prev', fc_flip:'🔄 Flip', fc_next:'Next ▶', fc_shuffle:'🔀 Shuffle',
    },
    bn: {
      div1:'📚 জৈব যৌগ', div2:'📖 তত্ত্ব ও রেফারেন্স', div3:'🧪 অধ্যয়ন সরঞ্জাম',
      nav_ka:'🔥 অ্যালকেন', nav_ke:'🌿 অ্যালকিন', nav_ky:'⚡ অ্যালকাইন',
      nav_al:'🧪 অ্যালকোহল', nav_ad:'✨ অ্যালডিহাইড', nav_ac:'🧬 ফ্যাটি এসিড',
      nav_ex:'⇄ রূপান্তর', nav_sy:'🔬 প্রস্তুতি',
      nav_th:'📖 তত্ত্ব', nav_fg:'🏷️ কার্যকরী মূলক', nav_is:'🔄 সমাবয়বতা', nav_ar:'💎 অ্যারিন',
      nav_mq:'📝 MCQ পরীক্ষা', nav_tq:'🎯 বিষয় কুইজ', nav_fc:'⏱️ ফ্ল্যাশকার্ড',
      nav_nm:'🔍 নাম খোঁজ', nav_fb:'🧩 সূত্র নির্মাতা', nav_mw:'🧮 আণবিক ভর',
      nav_nt:'📝 নোট', nav_rc:'📊 বিক্রিয়া চার্ট',
      sub_al:'–OH মূলক', sub_ad:'–CHO মূলক', sub_ac:'–COOH মূলক',
      sub_ex:'যেকোনো → যেকোনো', sub_sy:'সংশ্লেষণ', sub_th:'EV পাঠ্যবই',
      sub_is:'কাঠামো/জ্যামিতিক', sub_ar:'বেনজিন বলয়',
      sub_mq:'৩০০+ প্রশ্ন · ২০ মিনিট', sub_tq:'বিষয়প্রতি ৫টি', sub_fc:'উল্টান ও পড়ুন',
      sub_nm:'১৫০+ যৌগ', sub_fb:'কাঠামো লিখুন', sub_mw:'ক্যালকুলেটর',
      sub_nt:'সারসংক্ষেপ', sub_rc:'ভিজ্যুয়াল ম্যাপ',
      hl:'⚗️ জৈব রসায়ন · শ্রেণী ৯–১২ শিক্ষার্থীদের জন্য',
      hd:'🔬 বিক্রিয়া · সমাবয়বতা · সংশ্লেষণ · সূত্র খোঁজ · MCQ পরীক্ষা',
      footer_main:'⚗️ অর্গানিক কেমিস্ট্রি হাব · শ্রেণী ৯–১২',
      footer_tag:'❤️ শ্রেণী ৯–১২ রসায়ন শিক্ষার্থীদের জন্য তৈরি',
      home_title:'একটি বিভাগ বেছে নিন!',
      home_desc:'বিক্রিয়া, রূপান্তর, সংশ্লেষণ বা MCQ পরীক্ষা দেখতে উপরের যেকোনো বোতামে ক্লিক করুন 🚀',
      mq_title:'রসায়ন MCQ পরীক্ষা', mq_sub:'জৈব রসায়ন · শ্রেণী ৯–১২',
      mq_start:'🚀 পরীক্ষা শুরু করুন', mq_review:'📖 উত্তর ও ব্যাখ্যা দেখুন', mq_retake:'🔄 আবার দিন',
      fc_front:'প্রশ্ন — উল্টাতে ক্লিক করুন', fc_back:'উত্তর',
      fc_prev:'◀ আগের', fc_flip:'🔄 উল্টান', fc_next:'পরের ▶', fc_shuffle:'🔀 মিশিয়ে দিন',
    },
    hi: {
      div1:'📚 कार्बनिक यौगिक', div2:'📖 सिद्धांत एवं संदर्भ', div3:'🧪 अध्ययन उपकरण',
      nav_ka:'🔥 ऐल्केन', nav_ke:'🌿 ऐल्कीन', nav_ky:'⚡ ऐल्काइन',
      nav_al:'🧪 अल्कोहल', nav_ad:'✨ एल्डिहाइड', nav_ac:'🧬 वसा अम्ल',
      nav_ex:'⇄ रूपांतरण', nav_sy:'🔬 बनाने की विधि',
      nav_th:'📖 सिद्धांत', nav_fg:'🏷️ क्रियात्मक समूह', nav_is:'🔄 समावयवता', nav_ar:'💎 ऐरीन',
      nav_mq:'📝 MCQ परीक्षा', nav_tq:'🎯 विषय प्रश्नोत्तरी', nav_fc:'⏱️ फ्लैशकार्ड',
      nav_nm:'🔍 नाम खोज', nav_fb:'🧩 सूत्र निर्माता', nav_mw:'🧮 आणविक भार',
      nav_nt:'📝 नोट्स', nav_rc:'📊 अभिक्रिया चार्ट',
      sub_al:'–OH समूह', sub_ad:'–CHO समूह', sub_ac:'–COOH समूह',
      sub_ex:'कोई भी → कोई भी', sub_sy:'संश्लेषण', sub_th:'EV पाठ्यपुस्तक',
      sub_is:'संरचनात्मक/ज्यामितीय', sub_ar:'बेंजीन वलय',
      sub_mq:'३०० से अधिक · २० मिनट', sub_tq:'प्रति विषय ५ प्रश्न', sub_fc:'पलटें और पढ़ें',
      sub_nm:'१५०+ यौगिक', sub_fb:'संरचना टाइप करें', sub_mw:'कैलकुलेटर',
      sub_nt:'सारांश कार्ड', sub_rc:'विजुअल मैप',
      hl:'⚗️ कार्बनिक रसायन · कक्षा 9–12 छात्रों के लिए',
      hd:'🔬 अभिक्रियाएं · समावयवता · संश्लेषण · सूत्र खोज · MCQ परीक्षा',
      footer_main:'⚗️ ऑर्गेनिक केमिस्ट्री हब · कक्षा 9–12',
      footer_tag:'❤️ कक्षा 9–12 रसायन छात्रों के लिए बनाया गया',
      home_title:'एक अनुभाग चुनें!',
      home_desc:'प्रतिक्रियाओं, रूपांतरण, संश्लेषण या MCQ परीक्षा देखने के लिए ऊपर कोई बटन क्लिक करें 🚀',
      mq_title:'रसायन MCQ परीक्षा', mq_sub:'कार्बनिक रसायन · कक्षा 9–12',
      mq_start:'🚀 परीक्षा शुरू करें', mq_review:'📖 उत्तर और व्याख्या देखें', mq_retake:'🔄 दोबारा दें',
      fc_front:'प्रश्न — पलटने के लिए क्लिक करें', fc_back:'उत्तर',
      fc_prev:'◀ पिछला', fc_flip:'🔄 पलटें', fc_next:'अगला ▶', fc_shuffle:'🔀 फेरबदल',
    }
  };

  let CLANG = 'en';

  window.setLang = function(code) {
    CLANG = code;
    const T = TRANS[code];
    if (!T) return;
    // Update every data-i18n element
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (T[k] !== undefined) el.textContent = T[k];
    });
    // Update toggle button label
    const tb = document.getElementById('lang-toggle-btn');
    if (tb) tb.textContent = code==='bn' ? '🌐 বাং ▾' : code==='hi' ? '🌐 हिं ▾' : '🌐 EN ▾';
    // Highlight active option
    document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('on', b.getAttribute('data-lang')===code));
    // Close dropdown
    const dd = document.getElementById('lang-dd');
    if (dd) dd.classList.remove('open');
    // Update page title
    document.title = code==='bn' ? 'অর্গানিক কেমিস্ট্রি হাব — শ্রেণী ৯–১২' : code==='hi' ? 'ऑर्गेनिक केमिस्ट्री हब — कक्षा 9–12' : 'Organic Chemistry Hub — For Class 9–12 Students';
  };

  window.toggleLangDD = function() {
    const dd = document.getElementById('lang-dd');
    if (dd) dd.classList.toggle('open');
  };

  // Close lang dropdown on outside click
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.lang-wrap')) {
      const dd = document.getElementById('lang-dd');
      if (dd) dd.classList.remove('open');
    }
  });

})();
