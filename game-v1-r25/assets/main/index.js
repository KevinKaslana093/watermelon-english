window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  ActionMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e7338TgEnxAH5/b0mhpvBKG", "ActionMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../FrameLog");
    var easeInOut = cc.easeInOut;
    var ActionMgr = function() {
      function ActionMgr() {}
      ActionMgr.scaleNode = function(node, scale, time) {
        void 0 === time && (time = .5);
        try {
          cc.tween(node).to(0, {
            scale: scale,
            y: -node.height * (1 - scale)
          }).to(time, {
            scale: 1,
            y: 0
          }).start();
        } catch (e) {
          node.scale = 1;
          node.y = 0;
          FrameLog_1.default.log("shake\u52a8\u753b\u5f02\u5e38", e);
        }
      };
      ActionMgr.moveUpDownForever = function(node, runTime, diff) {
        void 0 === runTime && (runTime = .2);
        void 0 === diff && (diff = 10);
        cc.tween(node).repeatForever(cc.sequence(cc.moveBy(runTime, new cc.Vec2(0, diff)), cc.moveBy(runTime, new cc.Vec2(0, -diff)))).start();
      };
      ActionMgr.rotate = function(node, duration) {
        void 0 === duration && (duration = 3);
        try {
          cc.tween(node).repeatForever(cc.sequence(cc.rotateTo(duration, 180), cc.rotateTo(duration, 360))).start();
        } catch (e) {
          FrameLog_1.default.error("shakeNode\u5f02\u5e38", e, node);
        }
      };
      ActionMgr.scaleStop = function(node, timeRun, timeStop, scale, count, endScale) {
        void 0 === timeRun && (timeRun = .1);
        void 0 === timeStop && (timeStop = 10);
        void 0 === scale && (scale = .3);
        void 0 === count && (count = 1);
        void 0 === endScale && (endScale = 1);
        try {
          if (!node) return;
          node.scale = endScale;
          cc.tween(node).repeatForever(cc.tween().repeat(count, cc.tween().to(timeRun, {
            scale: 1 + scale
          }, {
            easing: "smooth"
          }).to(timeRun, {
            scale: endScale
          }, {
            easing: "smooth"
          })).to(timeRun, {
            angle: 0
          }).delay(timeStop)).start();
        } catch (e) {
          FrameLog_1.default.error("shakeNode\u5f02\u5e38", e, node);
        }
      };
      ActionMgr.shakeNode = function(node, timeRun, dstAngle, count) {
        void 0 === timeRun && (timeRun = .3);
        void 0 === dstAngle && (dstAngle = 10);
        void 0 === count && (count = 5);
        cc.tween(node).repeat(count, cc.tween().to(timeRun, {
          angle: -dstAngle
        }).to(timeRun, {
          angle: dstAngle
        })).to(timeRun, {
          angle: 0
        }).start();
      };
      ActionMgr.shakeNodeForever = function(node, duration, dstAngle) {
        void 0 === duration && (duration = 4);
        void 0 === dstAngle && (dstAngle = 10);
        try {
          cc.tween(node).repeatForever(cc.sequence(cc.rotateTo(duration, -dstAngle), cc.rotateTo(duration, dstAngle))).start();
        } catch (e) {
          FrameLog_1.default.error("shakeNode\u5f02\u5e38", e, node);
        }
      };
      ActionMgr.shakeStop = function(node, timeRun, timeStop, dstAngle, shakeCount) {
        void 0 === timeRun && (timeRun = .1);
        void 0 === timeStop && (timeStop = 10);
        void 0 === dstAngle && (dstAngle = 10);
        void 0 === shakeCount && (shakeCount = 5);
        try {
          cc.tween(node).repeatForever(cc.tween().delay(timeStop).repeat(shakeCount, cc.tween().to(timeRun, {
            angle: -dstAngle
          }).to(timeRun, {
            angle: dstAngle
          })).to(timeRun, {
            angle: 0
          })).start();
        } catch (e) {
          FrameLog_1.default.error("shakeStop\u5f02\u5e38", e, node);
        }
      };
      ActionMgr.moveBigIn = function(node, duration) {
        void 0 === duration && (duration = .3);
        if (!node) return false;
        try {
          node.scale = 2;
          cc.tween(node).to(duration, {
            scale: 1
          }, easeInOut(1)).start();
        } catch (e) {
          node.scale = 1;
          FrameLog_1.default.error("moveIn \u5f02\u5e38", e, node);
        }
      };
      ActionMgr.moveIn = function(node, duration, beginSale) {
        void 0 === duration && (duration = .4);
        void 0 === beginSale && (beginSale = .5);
        if (!node) return false;
        try {
          node.scale = beginSale;
          cc.tween(node).to(duration, {
            scale: 1
          }, {
            easing: "backOut"
          }).start();
        } catch (e) {
          node.scale = 1;
          FrameLog_1.default.error("moveIn \u5f02\u5e38", e, node);
        }
      };
      ActionMgr.moveOut = function(node, duration, endScale) {
        void 0 === duration && (duration = .4);
        void 0 === endScale && (endScale = 0);
        if (!node) return false;
        try {
          node.scale = 1;
          cc.tween(node).to(duration, {
            scale: endScale
          }).start();
        } catch (e) {
          node.scale = 0;
          FrameLog_1.default.error("moveOut \u5f02\u5e38", e, node);
        }
      };
      ActionMgr.moveInSide = function(node, beginSide, time, delay) {
        void 0 === beginSide && (beginSide = this.TWEEN_FROM_SIDE.TOP);
        void 0 === time && (time = .5);
        void 0 === delay && (delay = 0);
        if (!node) return false;
        this._moveSideNodePosition.hasOwnProperty(node.uuid) || (this._moveSideNodePosition[node.uuid] = node.position.clone());
        try {
          var resultPos = this._getSideResultPos(node, beginSide);
          node.position = resultPos;
          FrameLog_1.default.log("\u8282\u70b9", node.name, "\u754c\u9762\u5916\u5750\u6807\u4e3a\uff1a", resultPos);
          cc.tween(node).delay(delay).to(time, {
            position: this._moveSideNodePosition[node.uuid].clone()
          }, {
            easing: "quartIn"
          }).start();
        } catch (e) {
          node.position = this._moveSideNodePosition[node.uuid].clone();
          FrameLog_1.default.log("move In Side \u5f02\u5e38", e, node);
        }
      };
      ActionMgr.moveOutSide = function(node, endSide, time) {
        var _this = this;
        void 0 === endSide && (endSide = this.TWEEN_FROM_SIDE.TOP);
        void 0 === time && (time = .5);
        if (!node) return false;
        this._moveSideNodePosition.hasOwnProperty(node.uuid) || (this._moveSideNodePosition[node.uuid] = node.position);
        try {
          var resultPos = this._getSideResultPos(node, endSide);
          cc.tween(node).to(time, {
            position: resultPos
          }, {
            easing: "quartIn"
          }).call(function() {
            node.position = _this._moveSideNodePosition[node.uuid].clone();
            FrameLog_1.default.log("end move out side", node.position);
          }).start();
        } catch (e) {
          node.position = this._moveSideNodePosition[node.uuid].clone();
          FrameLog_1.default.log("move Out Side \u5f02\u5e38", e, node);
        }
      };
      ActionMgr._getSideResultPos = function(node, side) {
        var winSize = cc.winSize;
        var windowHeight = winSize.height;
        var windowWidth = winSize.width;
        FrameLog_1.default.log("\u5c4f\u5e55\u5c3a\u5bf8\u5927\u5c0f\u4e3a\uff1a", windowHeight, windowWidth);
        var pos;
        switch (side) {
         case ActionMgr.TWEEN_FROM_SIDE.TOP:
          pos = new cc.Vec2(node.x, windowHeight + node.height);
          break;

         case ActionMgr.TWEEN_FROM_SIDE.DOWN:
          pos = new cc.Vec2(node.x, -windowHeight - node.height);
          break;

         case ActionMgr.TWEEN_FROM_SIDE.LEFT:
          pos = new cc.Vec2(-windowWidth - node.width, node.y);
          break;

         case ActionMgr.TWEEN_FROM_SIDE.RIGHT:
          pos = new cc.Vec2(windowWidth + node.width, node.y);
        }
        return pos;
      };
      ActionMgr.moveLeftRight = function(node, direction, disMove, timeMove) {
        try {
          var lessPos = void 0;
          var morePos = void 0;
          switch (direction) {
           case ActionMgr.TWEEN_FROM_SIDE.LEFT:
           case ActionMgr.TWEEN_FROM_SIDE.RIGHT:
            lessPos = new cc.Vec2(node.x - disMove, node.y);
            morePos = new cc.Vec2(node.x + disMove, node.y);
            break;

           case ActionMgr.TWEEN_FROM_SIDE.TOP:
           case ActionMgr.TWEEN_FROM_SIDE.DOWN:
            lessPos = new cc.Vec2(node.x, node.y - disMove);
            morePos = new cc.Vec2(node.x, node.y + disMove);
          }
          cc.tween(node).repeatForever(cc.sequence(cc.moveTo(timeMove, lessPos), cc.moveTo(timeMove, morePos))).start();
        } catch (e) {
          FrameLog_1.default.error("moveLeftRight\u5f02\u5e38", e, node);
        }
      };
      ActionMgr.showGradually = function(node, duration, delay, endOpacity, starOpacity) {
        void 0 === duration && (duration = 1);
        void 0 === delay && (delay = 0);
        void 0 === endOpacity && (endOpacity = 255);
        void 0 === starOpacity && (starOpacity = 0);
        try {
          cc.tween(node).call(function() {
            node.opacity = starOpacity;
            node.active = true;
          }).delay(delay).to(duration, {
            opacity: endOpacity
          }).start();
        } catch (e) {
          node.opacity = endOpacity;
          FrameLog_1.default.error("showGradually\u5f02\u5e38", e, node);
        }
      };
      ActionMgr.hideGradually = function(node, duration, delay, endOpacity) {
        void 0 === duration && (duration = 1);
        void 0 === delay && (delay = 0);
        void 0 === endOpacity && (endOpacity = 50);
        try {
          node.active = true;
          cc.tween(node).delay(delay).to(duration, {
            opacity: endOpacity
          }, {
            easing: "quartIn"
          }).call(function() {
            node.active = false;
            node.opacity = 255;
          }).start();
        } catch (e) {
          node.opacity = endOpacity;
          FrameLog_1.default.error("showGradually\u5f02\u5e38", e, node);
        }
      };
      ActionMgr.EmitCut = function(node) {
        cc.tween(node).by(.5, {
          y: 1500,
          angle: 960
        }, {
          easing: "smooth"
        }).start();
      };
      ActionMgr.TWEEN_FROM_SIDE = {
        TOP: 1,
        DOWN: 2,
        LEFT: 3,
        RIGHT: 4
      };
      ActionMgr._moveSideNodePosition = {};
      return ActionMgr;
    }();
    exports.default = ActionMgr;
    cc._RF.pop();
  }, {
    "../FrameLog": "FrameLog"
  } ],
  AdBoostKit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "026083yvm1MWre0AZuAouog", "AdBoostKit");
    "use strict";
    function createAdBoostKit(E) {
      var Kit = {
        version: "1.3.4"
      };
      var cfg = {
        tapGuardMs: 500,
        closeMinSize: 104,
        maskColor: [ 24, 22, 32 ],
        maskOpacity: 130,
        fadeMs: 160,
        toastMs: 2200,
        toastTop: .22,
        toastFontSize: 30,
        toastTextColor: [ 255, 255, 255 ],
        toastOutlineColor: [ 70, 52, 40 ],
        toastBgColor: [ 48, 40, 52 ],
        toastBgOpacity: 210,
        spinnerFrame: null,
        closeFrame: null,
        toastFrame: null,
        allowStretch: false,
        sfx: null,
        audio: null,
        digitFrames: null,
        stackPopups: true,
        gameUIKit: null,
        pauseGame: null,
        resumeGame: null
      };
      var BUSY_TINT = [ 150, 150, 150 ];
      var OFF_TINT = [ 110, 110, 110 ];
      var WHITE = [ 255, 255, 255 ];
      var navEpoch = 1;
      function bumpNavEpoch() {
        navEpoch += 1;
        var g = "function" === typeof gameUI ? gameUI() : null;
        if (g && "function" === typeof g.bumpNavEpoch) try {
          g.bumpNavEpoch();
        } catch (e) {}
        return navEpoch;
      }
      function currentNavEpoch() {
        var g = "function" === typeof gameUI ? gameUI() : null;
        if (g && "function" === typeof g.navEpoch) try {
          return navEpoch + g.navEpoch();
        } catch (e) {}
        return navEpoch;
      }
      Kit.navEpoch = currentNavEpoch;
      Kit.bumpNavEpoch = bumpNavEpoch;
      var FRAME_KEYS = {
        closeFrame: 1,
        toastFrame: 1,
        spinnerFrame: 1,
        digitFrames: 1
      };
      var frameStore = {
        closeFrame: null,
        toastFrame: null,
        spinnerFrame: null,
        digitFrames: null
      };
      var bootClose = null;
      var frameIssueList = [];
      function eachFrame(v, fn) {
        if (!v || "object" !== typeof v) return;
        if ("function" === typeof v.getRect || "rect" in v || "texture" in v || "_texture" in v) {
          fn(v);
          return;
        }
        for (var k in v) Object.prototype.hasOwnProperty.call(v, k) && eachFrame(v[k], fn);
      }
      function holdFrame(f) {
        try {
          f && "function" === typeof f.addRef && f.addRef();
        } catch (e) {}
      }
      function dropFrame(f) {
        try {
          f && "function" === typeof f.decRef && f.decRef(false);
        } catch (e) {}
      }
      function usable(f) {
        if (!f) return false;
        if ("function" === typeof E.frameUsable) try {
          return !!E.frameUsable(f);
        } catch (e) {
          return false;
        }
        return true;
      }
      function frameIssue(where, f) {
        for (var i = 0; i < frameIssueList.length; i++) if (frameIssueList[i].frame === f) return;
        var name = "frame";
        try {
          name = f && (f.name || f._name) || "frame";
        } catch (e) {}
        frameIssueList.push({
          where: where,
          name: name,
          frame: f
        });
        E.warn("AdBoostKit: " + where + ' picture "' + name + '" was released (a page changed config() and its prefab was freed); using the fallback');
      }
      function liveFrame(where, f) {
        if (!f) return null;
        if (usable(f)) return f;
        frameIssue(where, f);
        return null;
      }
      Object.keys(FRAME_KEYS).forEach(function(k) {
        Object.defineProperty(cfg, k, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return frameStore[k];
          },
          set: function set(v) {
            var old = frameStore[k];
            if (old === v) return;
            eachFrame(v, holdFrame);
            frameStore[k] = v;
            eachFrame(old, dropFrame);
            if ("closeFrame" === k && !bootClose && usable(v)) {
              bootClose = v;
              holdFrame(v);
            }
          }
        });
      });
      function closePicture(o, where) {
        if (false === o.closeFrame) return {
          frame: null,
          drawn: false
        };
        var want = o.closeFrame || cfg.closeFrame;
        if (!want) return {
          frame: null,
          drawn: false
        };
        if (usable(want)) return {
          frame: want,
          drawn: false
        };
        frameIssue(where || "close", want);
        var back = bootClose && bootClose !== want && usable(bootClose) ? bootClose : null;
        if (want === cfg.closeFrame && back) {
          holdFrame(back);
          frameStore.closeFrame = back;
        }
        if (back) return {
          frame: back,
          drawn: false
        };
        return {
          frame: null,
          drawn: true
        };
      }
      function drawnClose(parent, size) {
        var icon = E.node("Icon", parent);
        E.size(icon, size, size);
        var plate = E.node("Plate", icon);
        E.roundRect(plate, size, size, size / 2, [ 70, 52, 40 ], 235);
        for (var i = 0; i < 2; i++) {
          var bar = E.node("Bar" + i, icon);
          E.roundRect(bar, Math.round(.56 * size), Math.max(6, Math.round(.13 * size)), Math.max(3, Math.round(.065 * size)), WHITE, 255);
          "function" === typeof E.setAngle && E.setAngle(bar, i ? -45 : 45);
        }
        return icon;
      }
      Kit.frameIssues = function() {
        return frameIssueList.map(function(x) {
          return {
            where: x.where,
            name: x.name
          };
        });
      };
      Kit.setup = function(o) {
        o = o || {};
        for (var k in o) Object.prototype.hasOwnProperty.call(o, k) && (cfg[k] = o[k]);
        return Kit;
      };
      Kit.config = function(o) {
        o && "object" === typeof o && Kit.setup(o);
        return cfg;
      };
      function safeCall(fn, a, b) {
        if ("function" !== typeof fn) return;
        try {
          return fn(a, b);
        } catch (e) {
          E.warn("AdBoostKit callback failed: " + (e && e.message));
        }
        return;
      }
      function sfx(id) {
        var a = cfg.audio;
        var play = "function" === typeof cfg.sfx ? cfg.sfx : a && "function" === typeof a.playSfx ? function(x) {
          return a.playSfx(x);
        } : null;
        if (!play) return;
        try {
          play(id);
        } catch (e) {
          E.warn('AdBoostKit sfx "' + id + '" failed: ' + (e && e.message));
        }
      }
      Kit._sfx = sfx;
      function gameUI() {
        if (false === cfg.gameUIKit) return null;
        if (cfg.gameUIKit && "object" === typeof cfg.gameUIKit) return cfg.gameUIKit;
        return "function" === typeof E.gameUIKit ? E.gameUIKit() : null;
      }
      Kit._gameUIKit = gameUI;
      var POPUP_PAGES = {
        AdBoostBattlePassPopup: "battle-pass",
        BonusIntroPopup: "bonus-level",
        BonusResultPopup: "bonus-level",
        AdBoostCheckinPopup: "checkin",
        AdBoostCoinAdPopup: "coin-ad",
        EnergyAdPopup: "energy",
        AdBoostExtraSlotPopup: "extra-slot",
        AdBoostGiftPopup: "gift",
        AdBoostUpgradePick: "gift",
        HintAskPopup: "hint",
        AdBoostKeyChestPopup: "key-chest",
        AdBoostMomentPopup: "moment-boost",
        AdBoostOfflinePopup: "offline",
        AdBoostQuickCollectPopup: "offline",
        AdBoostOnlineLadderPopup: "online-ladder",
        AdBoostTimeGiftClaim: "online-ladder",
        MidRunBoostPopup: "prestart-boost",
        PrestartBoostPopup: "prestart-boost",
        AdBoostQuestClaim: "quest-x2",
        AdBoostQuestList: "quest-x2",
        SkinKeepPopup: "skin-ad",
        SkinTrialPopup: "skin-ad",
        AdBoostTimerChestPopup: "timer-chest",
        WheelPopup: "wheel",
        WheelResult: "wheel"
      };
      Kit._popupPages = POPUP_PAGES;
      function pageHook(info, node, closeNode) {
        var g = gameUI(), c = null;
        if (g && "function" === typeof g.recordPage) {
          try {
            g.recordPage(info, node || null, closeNode || null);
          } catch (e) {
            E.warn("AdBoostKit recordPage failed: " + (e && e.message));
          }
          return;
        }
        try {
          c = g && "function" === typeof g.config ? g.config() : null;
        } catch (e) {
          c = null;
        }
        if (!c || "function" !== typeof c.onPageOpen) return;
        try {
          c.onPageOpen(info);
        } catch (e) {
          E.warn("AdBoostKit onPageOpen failed: " + (e && e.message));
        }
      }
      function adList(ads) {
        var out = [];
        (ads || []).forEach(function(a) {
          var k = "string" === typeof a ? a : a && a.placementKey;
          k && out.push({
            placementKey: String(k)
          });
        });
        return out;
      }
      function adopt(h, o, setCovered) {
        if (!cfg.stackPopups || false === o.stack) return null;
        var g = gameUI();
        if (!g || "function" !== typeof g.adoptPopup) return null;
        try {
          var gc = "function" === typeof g.config ? g.config() : null;
          if (gc && false === gc.stackPopups) return null;
        } catch (e) {}
        try {
          var r = g.adoptPopup({
            isOpen: h.isOpen,
            setCovered: setCovered
          });
          return "function" === typeof r ? r : null;
        } catch (e) {
          E.warn("AdBoostKit: GameUIKit adoptPopup failed, using the kit stack: " + (e && e.message));
        }
        return null;
      }
      function isThenable(v) {
        return !!v && "function" === typeof v.then;
      }
      function guard(ms, fn) {
        var last = -Infinity;
        return function(ev) {
          var t = E.now();
          if (t - last < ms) return;
          last = t;
          fn(ev);
        };
      }
      Kit._guard = guard;
      function frameSize(frame, w, h) {
        var s = {
          width: 0,
          height: 0
        };
        if (frame) try {
          s = E.frameSize(frame) || s;
        } catch (e) {}
        if (w && !h && s.width > 0) return {
          width: w,
          height: Math.round(s.height * w / s.width)
        };
        if (h && !w && s.height > 0) return {
          width: Math.round(s.width * h / s.height),
          height: h
        };
        return {
          width: w || s.width,
          height: h || s.height
        };
      }
      Kit.fitTrim = function(root) {
        if (!root || "function" !== typeof E.fitTrim || !E.isValid(root)) return 0;
        var changed = 0;
        (function visit(n) {
          E.fitTrim(n) && changed++;
          var c = E.children(n);
          for (var i = 0; i < c.length; i++) visit(c[i]);
        })(root);
        return changed;
      };
      function fitTrimSoon(root) {
        "function" === typeof E.beforeDraw && E.beforeDraw(function() {
          Kit.fitTrim(root);
        });
      }
      function pictureSize(frame, w, h) {
        var s = frameSize(frame, w, h);
        if (frame && w && h && !cfg.allowStretch) {
          var fs = frameSize(frame);
          if (fs.width > 0 && fs.height > 0) {
            var k = Math.min(w / fs.width, h / fs.height);
            Math.abs(fs.width / fs.height / (w / h) - 1) > .02 && (s = {
              width: Math.round(fs.width * k),
              height: Math.round(fs.height * k)
            });
          }
        }
        return s;
      }
      function pictureChild(parent, name, frame, w, h) {
        if (frame && !usable(frame)) {
          frameIssue(name, frame);
          frame = null;
        }
        var n = E.node(name, parent), s = pictureSize(frame, w, h);
        frame && E.sprite(n, frame);
        E.size(n, s.width, s.height);
        return n;
      }
      function pressFeedback(target) {
        E.tweenScale(target, .94, 60, function() {
          E.tweenScale(target, 1, 80);
        });
      }
      Kit.popup = function(parent, o) {
        o = o || {};
        if (o.panelFrame && !usable(o.panelFrame) || o.titleFrame && !usable(o.titleFrame)) {
          var o2 = {};
          for (var ok in o) Object.prototype.hasOwnProperty.call(o, ok) && (o2[ok] = o[ok]);
          if (o2.panelFrame && !usable(o2.panelFrame)) {
            frameIssue("panel", o2.panelFrame);
            if (!o2.width && !o2.height) {
              var dps = frameSize(o2.panelFrame);
              o2.width = dps.width || 600;
              o2.height = dps.height || 480;
            }
            o2.panelFrame = null;
            o2.panelSliced = false;
            o2.panelInsets = null;
          }
          if (o2.titleFrame && !usable(o2.titleFrame)) {
            frameIssue("title", o2.titleFrame);
            o2.titleFrame = null;
          }
          o = o2;
        }
        var closePic = closePicture(o, "close");
        parent = parent || E.sceneRoot();
        var win = E.winSize();
        var state = "open";
        var listeners = [];
        var root = E.node(o.name || "AdBoostPopup", parent);
        E.size(root, win.width, win.height);
        E.toTop(root);
        var mask = E.node("Mask", root);
        var maskAlpha = "number" === typeof o.maskOpacity ? o.maskOpacity : cfg.maskOpacity;
        E.rect(mask, 3 * win.width, 3 * win.height, o.maskColor || cfg.maskColor, maskAlpha);
        E.blockInput(mask);
        var maskTarget = 255;
        var panel;
        if (o.panelFrame && (o.panelSliced || o.panelInsets)) {
          var pf = E.frameSize(o.panelFrame);
          var ins = o.panelInsets || E.getInsets(o.panelFrame);
          ins && (ins[0] || ins[1] || ins[2] || ins[3]) || (ins = [ Math.round(.3 * pf.width), Math.round(.3 * pf.height), Math.round(.3 * pf.width), Math.round(.3 * pf.height) ]);
          E.setInsets(o.panelFrame, ins);
          panel = E.node("Panel", root);
          E.sprite(panel, o.panelFrame, true);
          E.size(panel, o.width || pf.width, o.height || pf.height);
        } else panel = pictureChild(root, "Panel", o.panelFrame, o.width, o.height);
        var ps = E.getSize(panel);
        var body = E.node("Body", panel);
        E.size(body, ps.width, ps.height);
        var titleNode = null;
        var closeFrameT = closePic.frame;
        if (o.titleFrame) {
          var tw0 = o.titleWidth, th0 = o.titleHeight;
          if (!tw0 && !th0 && (closeFrameT || closePic.drawn) && false !== o.titleFit) {
            var tfs = E.frameSize(o.titleFrame), cfs = closeFrameT ? E.frameSize(closeFrameT) : {
              width: o.closeSize || 72,
              height: o.closeSize || 72
            };
            var cHit = Math.max(cfg.closeMinSize, o.closeSize || cfs.width, o.closeSize || cfs.height);
            var ci0 = "number" === typeof o.closeInset ? o.closeInset : 6;
            var maxTW = ps.width - 2 * (cHit + ci0) - 8;
            if (maxTW > 0 && tfs.width > maxTW) {
              tw0 = Math.round(maxTW);
              th0 = Math.round(tfs.height * maxTW / tfs.width);
            }
          }
          titleNode = pictureChild(panel, "Title", o.titleFrame, tw0, th0);
          var ts = E.getSize(titleNode);
          var inset = "number" === typeof o.titleInset ? o.titleInset : Math.round(.05 * ps.height);
          E.pos(titleNode, 0, ps.height / 2 - ts.height / 2 - inset + (o.titleOffsetY || 0));
        }
        var closeNode = null;
        var closeFrame = closePic.frame;
        if (closeFrame || closePic.drawn) {
          var cs = closeFrame ? frameSize(closeFrame, o.closeSize, o.closeSize) : {
            width: o.closeSize || 72,
            height: o.closeSize || 72
          };
          var hit = Math.max(cfg.closeMinSize, cs.width, cs.height);
          closeNode = E.node("Close", panel);
          E.size(closeNode, hit, hit);
          closeFrame ? pictureChild(closeNode, "Icon", closeFrame, cs.width, cs.height) : drawnClose(closeNode, cs.width);
          var ci = "number" === typeof o.closeInset ? o.closeInset : 6;
          E.pos(closeNode, ps.width / 2 - hit / 2 - ci, ps.height / 2 - hit / 2 - ci);
          E.onTap(closeNode, guard(cfg.tapGuardMs, function() {
            if ("open" !== state) return;
            pressFeedback(closeNode);
            tapClose();
          }), currentNavEpoch);
        }
        var closeHandler = "function" === typeof o.onCloseTap ? o.onCloseTap : null;
        function tapClose() {
          closeHandler ? safeCall(closeHandler, handle) : handle.close();
        }
        o.closeOnMask && E.onTap(mask, guard(cfg.tapGuardMs, function() {
          "open" === state && tapClose();
        }), currentNavEpoch);
        function playIn() {
          sfx("adb_popup_open");
          E.setOpacity(mask, 0);
          E.tweenOpacity(mask, maskTarget, cfg.fadeMs);
          E.setScale(panel, .92);
          E.setOpacity(panel, 0);
          E.tweenOpacity(panel, 255, cfg.fadeMs);
          E.tweenScale(panel, 1, cfg.fadeMs);
        }
        var handle = {
          root: root,
          body: body,
          panel: panel,
          mask: mask,
          titleNode: titleNode,
          closeNode: closeNode,
          maskAlpha: maskAlpha,
          isOpen: function isOpen() {
            return "open" === state && E.isValid(root);
          },
          onClose: function onClose(fn) {
            "function" === typeof fn && listeners.push(fn);
            return handle;
          },
          close: function close(fn) {
            if ("function" === typeof fn) {
              closeHandler = fn;
              return handle;
            }
            if ("open" !== state) return false;
            state = "closing";
            bumpNavEpoch();
            "function" === typeof E.unblockInput && E.unblockInput(mask);
            leaveStack();
            sfx("adb_popup_close");
            var finalized = false;
            function finalizeClose() {
              if (finalized) return;
              finalized = true;
              state = "closed";
              o.keep ? E.setActive(root, false) : E.destroy(root);
              var list = listeners;
              listeners = [];
              for (var i = 0; i < list.length; i++) safeCall(list[i], handle);
            }
            try {
              E.tweenOpacity(mask, 0, cfg.fadeMs);
              E.tweenOpacity(panel, 0, cfg.fadeMs);
              E.tweenScale(panel, .92, cfg.fadeMs, finalizeClose);
              E.later(cfg.fadeMs + 50, finalizeClose);
            } catch (e) {
              finalizeClose();
            }
            return true;
          },
          open: function open() {
            if (!o.keep || "open" === state || !E.isValid(root)) return false;
            state = "open";
            bumpNavEpoch();
            "function" === typeof E.blockInput && E.blockInput(mask);
            E.setActive(root, true);
            E.toTop(root);
            playIn();
            joinStack();
            fitTrimSoon(root);
            _openings++;
            false !== o.pageHook && pageHook(popupInfo(), root, closeNode);
            return true;
          },
          stackedBy: function stackedBy() {
            if (releaseGameUI) return "GameUIKit";
            return popupStack.indexOf(handle) >= 0 ? "AdBoostKit" : null;
          },
          openings: function openings() {
            return _openings;
          }
        };
        var releaseGameUI = null, hidByGameUI = {
          mask: false,
          close: false
        };
        function setCovered(covered) {
          [ [ "mask", mask ], [ "close", closeNode ] ].forEach(function(p) {
            var n = p[1];
            if (!n || !E.isValid(n)) return;
            if (covered && E.isActive(n)) {
              E.setActive(n, false);
              hidByGameUI[p[0]] = true;
            } else if (!covered && hidByGameUI[p[0]]) {
              E.setActive(n, true);
              hidByGameUI[p[0]] = false;
            }
          });
        }
        function joinStack() {
          releaseGameUI = adopt(handle, o, setCovered);
          releaseGameUI || stack(handle, o);
        }
        function leaveStack() {
          if (!releaseGameUI) {
            unstack(handle);
            return;
          }
          var r = releaseGameUI;
          releaseGameUI = null;
          try {
            r();
          } catch (e) {
            E.warn("AdBoostKit: GameUIKit release failed: " + (e && e.message));
          }
        }
        var _openings = 1;
        function popupInfo() {
          var page = o.page || POPUP_PAGES[o.name] || null, name = o.name || "AdBoostPopup";
          return {
            kind: "popup",
            id: o.pageId || "ad-boost:" + (page || name),
            page: page,
            name: name,
            buttons: (o.buttons || []).slice(),
            close: closeNode ? "Close" : null,
            ads: adList(o.ads),
            opening: _openings
          };
        }
        bumpNavEpoch();
        playIn();
        joinStack();
        fitTrimSoon(root);
        false !== o.pageHook && pageHook(popupInfo(), root, closeNode);
        return handle;
      };
      var popupStack = [];
      function stack(h, o) {
        if (!cfg.stackPopups || false === o.stack) return;
        popupStack.push(h);
        restack();
      }
      function unstack(h) {
        var i = popupStack.indexOf(h);
        if (i < 0) return;
        popupStack.splice(i, 1);
        restack();
      }
      function restack() {
        popupStack = popupStack.filter(function(h) {
          return h.isOpen();
        });
        for (var i = 0; i < popupStack.length; i++) {
          var h = popupStack[i], top = i === popupStack.length - 1;
          [ [ "mask", h.mask ], [ "close", h.closeNode ] ].forEach(function(pair) {
            var n = pair[1], key = "__abStackHid_" + pair[0];
            if (!n || !E.isValid(n)) return;
            if (!top && E.isActive(n)) {
              E.setActive(n, false);
              h[key] = true;
            } else if (top && h[key]) {
              E.setActive(n, true);
              h[key] = false;
            }
          });
        }
      }
      Kit.openPopups = function() {
        restack();
        return popupStack.slice();
      };
      function cellFrame(info, cx, cy, cw, ch) {
        var tl = (info.orig.width - info.rect.width) / 2 + info.offset.x;
        var tt = (info.orig.height - info.rect.height) / 2 - info.offset.y;
        var x0 = Math.max(cx, tl), x1 = Math.min(cx + cw, tl + info.rect.width);
        var y0 = Math.max(cy, tt), y1 = Math.min(cy + ch, tt + info.rect.height);
        if (x1 <= x0 || y1 <= y0) {
          x0 = tl;
          x1 = tl + 1;
          y0 = tt;
          y1 = tt + 1;
        }
        return E.makeFrame(info.texture, {
          x: info.rect.x + (x0 - tl),
          y: info.rect.y + (y0 - tt),
          width: x1 - x0,
          height: y1 - y0
        }, {
          x: (x0 + x1) / 2 - (cx + cw / 2),
          y: -((y0 + y1) / 2 - (cy + ch / 2))
        }, {
          width: cw,
          height: ch
        });
      }
      var NARROW = {
        ":": .5,
        "/": .72,
        ".": .45,
        ",": .45,
        "-": .7
      };
      Kit.stripFrames = function(frame, o) {
        o = o || {};
        var info = E.frameInfo(frame);
        if (!info) {
          E.warn("AdBoostKit.stripFrames: not a SpriteFrame");
          return o.chars ? {} : [];
        }
        info.rotated && E.warn("AdBoostKit.stripFrames: rotated atlas frames are not supported, export the strip as its own PNG");
        var chars = o.chars ? String(o.chars) : null;
        var rects = o.rects;
        if (!rects) {
          var n = chars ? chars.length : o.count || 1;
          var rows = o.rows || 1, perRow = Math.ceil(n / rows);
          var cw = info.orig.width / perRow, ch = info.orig.height / rows;
          rects = [];
          var narrow = chars && o.narrow ? o.narrow : null;
          for (var i = 0; i < n; i++) {
            var cx = i % perRow * cw, k = 1;
            if (narrow) {
              var c0 = chars.charAt(i);
              "string" === typeof narrow ? k = narrow.indexOf(c0) >= 0 ? NARROW[c0] || .6 : 1 : "number" === typeof narrow[c0] && (k = narrow[c0]);
              k > 0 && k <= 1 || (k = 1);
            }
            rects.push([ cx + cw * (1 - k) / 2, Math.floor(i / perRow) * ch, cw * k, ch ]);
          }
        }
        var out = chars ? {} : [];
        for (var k = 0; k < rects.length; k++) {
          var r = rects[k];
          var f = cellFrame(info, r[0], r[1], r[2], r[3]);
          chars ? out[chars.charAt(k)] = f : out.push(f);
        }
        return out;
      };
      Kit.fontFrames = function(font, chars) {
        var cfgF = font && (font._fntConfig || font.fntConfig);
        var frame = font && (font.spriteFrame || font._spriteFrame);
        if (!cfgF || !cfgF.fontDefDictionary || !frame) {
          E.warn("AdBoostKit.fontFrames: font has no parsed config or picture");
          return {};
        }
        var info = E.frameInfo(frame);
        var defs = cfgF.fontDefDictionary, out = {};
        for (var code in defs) {
          if (!Object.prototype.hasOwnProperty.call(defs, code)) continue;
          var ch = String.fromCharCode(+code);
          if (chars && String(chars).indexOf(ch) < 0) continue;
          var r = defs[code].rect;
          if (!r || !r.width || !r.height) continue;
          out[ch] = cellFrame(info, r.x, r.y, r.width, r.height);
        }
        return out;
      };
      Kit.toneFor = function(rgb) {
        var l = (.299 * rgb[0] + .587 * rgb[1] + .114 * rgb[2]) / 255;
        return l > .6 ? "dark" : "light";
      };
      function makeSpinner(parent, size) {
        var n = E.node("Spinner", parent);
        var sf = liveFrame("spinner", cfg.spinnerFrame);
        if (sf) {
          E.sprite(n, sf);
          E.size(n, size, size);
        } else E.ring(n, size / 2, Math.max(4, Math.round(.12 * size)), WHITE);
        E.setActive(n, false);
        return n;
      }
      Kit.adButton = function(parent, o) {
        o = o || {};
        var fs = frameSize(o.frame, o.width, o.height);
        var n = E.node(o.name || "AdButton", parent);
        E.size(n, fs.width, fs.height);
        var art = pictureChild(n, "Art", o.frame, fs.width, fs.height);
        var artSize = E.getSize(art), iconNode = null, spinPos = null;
        if (false === o.showIcon) {
          var isz = o.iconFrame ? pictureSize(o.iconFrame, o.iconWidth, o.iconHeight) : {
            width: Math.round(.5 * Math.min(artSize.width, artSize.height)),
            height: 0
          };
          spinPos = o.iconPos || [ -artSize.width / 2 + isz.width / 2 + Math.round(.07 * artSize.width), 0 ];
        } else if (o.iconFrame) {
          var is = frameSize(o.iconFrame, o.iconWidth, o.iconHeight);
          iconNode = pictureChild(art, "Icon", o.iconFrame, is.width, is.height);
          var iconSize = E.getSize(iconNode);
          var ip = o.iconPos || [ -artSize.width / 2 + iconSize.width / 2 + Math.round(.07 * artSize.width), 0 ];
          E.pos(iconNode, ip[0], ip[1]);
          spinPos = ip;
        }
        var spinSize = Math.round(Math.min(.5 * artSize.width, .5 * artSize.height, 64));
        spinPos && !o.iconPos && (spinSize = Math.min(spinSize, Math.max(1, Math.floor(2 * Math.min(artSize.width / 2 - Math.abs(spinPos[0]), artSize.height / 2 - Math.abs(spinPos[1]))))));
        var spinner = makeSpinner(n, spinSize);
        if (iconNode) {
          var p = E.getPos(iconNode);
          E.pos(spinner, p.x, p.y);
        } else spinPos && E.pos(spinner, spinPos[0], spinPos[1]);
        var busy = false, enabled = true;
        function paint() {
          E.tint(art, enabled ? busy ? BUSY_TINT : WHITE : OFF_TINT);
          E.setActive(spinner, busy);
          busy ? E.spin(spinner) : E.stopSpin(spinner);
        }
        var handle = {
          node: n,
          art: art,
          iconNode: iconNode,
          icon: iconNode,
          spinner: spinner,
          isBusy: function isBusy() {
            return busy;
          },
          isEnabled: function isEnabled() {
            return enabled;
          },
          setBusy: function setBusy(b) {
            busy = !!b;
            E.isValid(n) && paint();
            return handle;
          },
          setEnabled: function setEnabled(b) {
            enabled = !!b;
            E.isValid(n) && paint();
            return handle;
          },
          tap: function tap() {
            onTap();
          }
        };
        var onTap = guard(cfg.tapGuardMs, function() {
          if (busy || !enabled || !E.isValid(n)) return;
          pressFeedback(art);
          sfx("adb_ad_button_tap");
          var r = safeCall(o.onTap, handle);
          if (isThenable(r)) {
            handle.setBusy(true);
            var done = function done() {
              handle.setBusy(false);
            };
            r.then(done, done);
          }
        });
        E.onTap(n, onTap, currentNavEpoch);
        paint();
        return handle;
      };
      Kit.doubleCheckbox = function(parent, o) {
        o = o || {};
        var checked = false !== o.checked;
        var enabled = true;
        var n = E.node(o.name || "DoubleCheckbox", parent);
        var box = pictureChild(n, "Box", o.boxFrame, o.boxSize, o.boxSize);
        var tick = pictureChild(box, "Tick", o.tickFrame, o.tickWidth, o.tickHeight);
        var bs = E.getSize(box);
        var labelNode = null, ls = {
          width: 0,
          height: 0
        };
        var gap = "number" === typeof o.gap ? o.gap : 14;
        if (o.labelFrame) {
          labelNode = pictureChild(n, "Label", o.labelFrame, o.labelWidth, o.labelHeight);
          ls = E.getSize(labelNode);
        }
        var totalW = bs.width + (labelNode ? gap + ls.width : 0);
        var totalH = Math.max(bs.height, ls.height, 72);
        E.size(n, totalW, totalH);
        E.pos(box, -totalW / 2 + bs.width / 2, 0);
        labelNode && E.pos(labelNode, -totalW / 2 + bs.width + gap + ls.width / 2, 0);
        function paint() {
          E.setActive(tick, checked);
          E.tint(box, enabled ? WHITE : OFF_TINT);
          labelNode && E.tint(labelNode, enabled ? WHITE : OFF_TINT);
        }
        var handle = {
          node: n,
          box: box,
          tick: tick,
          labelNode: labelNode,
          isChecked: function isChecked() {
            return checked;
          },
          set: function set(b) {
            checked = !!b;
            E.isValid(n) && paint();
            return handle;
          },
          setEnabled: function setEnabled(b) {
            enabled = !!b;
            E.isValid(n) && paint();
            return handle;
          },
          tap: function tap() {
            onTap();
          }
        };
        var onTap = guard(250, function() {
          if (!enabled || !E.isValid(n)) return;
          checked = !checked;
          paint();
          sfx(checked ? "adb_checkbox_on" : "adb_checkbox_off");
          safeCall(o.onChange, checked, handle);
        });
        E.onTap(n, onTap, currentNavEpoch);
        paint();
        return handle;
      };
      var toastState = {
        node: null,
        bg: null,
        label: null,
        timer: null,
        text: ""
      };
      function ensureToast() {
        var t = toastState;
        if (t.node && E.isValid(t.node)) return t;
        var root = E.sceneRoot();
        t.node = E.node("AdBoostToast", root);
        t.bg = E.node("Bg", t.node);
        if (cfg.toastFrame && !usable(cfg.toastFrame)) {
          frameIssue("toast", cfg.toastFrame);
          frameStore.toastFrame = null;
        }
        cfg.toastFrame && E.sprite(t.bg, cfg.toastFrame, true);
        t.labelNode = E.node("Text", t.node);
        t.label = E.label(t.labelNode, cfg.toastFontSize, cfg.toastTextColor, cfg.toastOutlineColor);
        return t;
      }
      Kit.toast = function(text, o) {
        if (!text) return null;
        o = o || {};
        text = String(text);
        /[^\x00-\x7F]/.test(text) && E.warn("AdBoostKit.toast: non-ASCII text shown in game: " + text);
        var t = ensureToast();
        var win = E.winSize();
        var maxW = Math.min(.84 * win.width, 640);
        E.setActive(t.node, true);
        E.toTop(t.node);
        var sz = E.setLabel(t.labelNode, t.label, text, maxW);
        var bw = sz.width + 56, bh = sz.height + 30;
        E.size(t.node, bw, bh);
        cfg.toastFrame ? E.size(t.bg, bw, bh) : E.roundRect(t.bg, bw, bh, Math.min(bh / 2, 28), cfg.toastBgColor, cfg.toastBgOpacity);
        E.pos(t.node, 0, win.height * (.5 - cfg.toastTop));
        t.timer && t.timer();
        E.setOpacity(t.node, 0);
        E.tweenOpacity(t.node, 255, 120);
        t.text = text;
        var ms = "number" === typeof o.ms ? o.ms : cfg.toastMs;
        t.timer = E.later(ms, function() {
          t.timer = null;
          if (!E.isValid(t.node)) return;
          E.tweenOpacity(t.node, 0, 200, function() {
            E.isValid(t.node) && E.setActive(t.node, false);
            t.text = "";
          });
        });
        return t.node;
      };
      Kit.toastText = function() {
        return toastState.node && E.isValid(toastState.node) ? toastState.text : "";
      };
      Kit.digits = function(parent, o) {
        o = o || {};
        var sets = cfg.digitFrames || {};
        var frames = o.atlasFrames || sets[o.tone || "light"] || sets.light || sets.dark || {};
        var n = E.node(o.name || "Digits", parent);
        var glyphs = [];
        var _value = "";
        var spacing0 = o.spacing || 0, spacing = spacing0;
        var align = o.align || "center";
        function frameFor(ch) {
          if (Array.isArray(frames)) return /[0-9]/.test(ch) ? frames[+ch] : null;
          return frames[ch] || null;
        }
        function liveGlyph(ch) {
          return liveFrame("digit", frameFor(ch));
        }
        function set(v) {
          _value = String(v);
          spacing = spacing0;
          var x = 0, used = 0, maxH = 0, placed = [];
          for (var i = 0; i < _value.length; i++) {
            var f0 = frameFor(_value.charAt(i)), f = liveGlyph(_value.charAt(i));
            if (f0 && !f) continue;
            if (!f) {
              E.warn('AdBoostKit.digits: no picture for "' + _value.charAt(i) + '"');
              continue;
            }
            var g = glyphs[used];
            if (g) {
              E.setFrame(g, f);
              E.setActive(g, true);
            } else {
              g = E.node("G" + used, n);
              E.sprite(g, f);
              glyphs.push(g);
            }
            var fs = E.frameSize(f);
            var h = o.height || fs.height;
            var w = fs.width * (h / (fs.height || 1));
            E.size(g, w, h);
            placed.push({
              node: g,
              w: w,
              h: h
            });
            x += w + (placed.length > 1 ? spacing : 0);
            h > maxH && (maxH = h);
            used++;
          }
          for (var j = used; j < glyphs.length; j++) E.setActive(glyphs[j], false);
          var total = x;
          if (o.maxWidth && total > o.maxWidth) {
            var k = o.maxWidth / total, sp = spacing * k;
            total = 0;
            maxH = 0;
            for (var q = 0; q < placed.length; q++) {
              placed[q].w *= k;
              placed[q].h *= k;
              E.size(placed[q].node, placed[q].w, placed[q].h);
              total += placed[q].w + (q > 0 ? sp : 0);
              placed[q].h > maxH && (maxH = placed[q].h);
            }
            spacing = sp;
          }
          var start = "left" === align ? 0 : "right" === align ? -total : -total / 2;
          var cur = start;
          for (var k = 0; k < placed.length; k++) {
            E.pos(placed[k].node, cur + placed[k].w / 2, 0);
            cur += placed[k].w + spacing;
          }
          E.size(n, total, maxH);
          return handle;
        }
        var handle = {
          node: n,
          set: set,
          value: function value() {
            return _value;
          },
          glyphCount: function glyphCount() {
            return glyphs.length;
          }
        };
        set(void 0 === o.value ? 0 : o.value);
        return handle;
      };
      var inflight = null;
      var exitNode = null;
      function hideExit() {
        exitNode && E.isValid(exitNode) && E.destroy(exitNode);
        exitNode = null;
      }
      function showExit(ads) {
        hideExit();
        if (!cfg.closeFrame) {
          E.warn("AdBoostKit: set Kit.setup({closeFrame}) so the 30 s ad exit X can be shown");
          return;
        }
        var pic = closePicture({}, "exit");
        var root = E.sceneRoot();
        var win = E.winSize();
        var hit = Math.max(cfg.closeMinSize, 120);
        exitNode = E.node("AdBoostAdExit", root);
        E.size(exitNode, hit, hit);
        pic.frame ? pictureChild(exitNode, "Icon", pic.frame, Math.round(.8 * hit), Math.round(.8 * hit)) : drawnClose(exitNode, Math.round(.8 * hit));
        E.pos(exitNode, -win.width / 2 + hit / 2 + 24, win.height / 2 - hit / 2 - 150);
        E.blockInput(exitNode);
        E.toTop(exitNode);
        E.onTap(exitNode, guard(cfg.tapGuardMs, function() {
          "function" === typeof ads.exit && ads.exit();
          hideExit();
        }), currentNavEpoch);
      }
      function adHooks(o) {
        var p = void 0 !== o.pauseGame ? o.pauseGame : void 0 !== o.onAdStart ? o.onAdStart : cfg.pauseGame;
        var r = void 0 !== o.resumeGame ? o.resumeGame : void 0 !== o.onAdEnd ? o.onAdEnd : cfg.resumeGame;
        false === p && (p = null);
        false !== r && false !== o.pauseGame || (r = null);
        return {
          pause: "function" === typeof p ? p : null,
          resume: "function" === typeof r ? r : null
        };
      }
      function markFeedback(r, shown) {
        if (!r || "object" !== typeof r) return r;
        try {
          r.feedbackShown = shown;
        } catch (e) {}
        if (r.feedbackShown === shown) return r;
        var c = {};
        for (var k in r) Object.prototype.hasOwnProperty.call(r, k) && (c[k] = r[k]);
        c.feedbackShown = shown;
        return c;
      }
      Kit.runAd = function(ads, o, onResult) {
        if (!ads || "function" !== typeof ads.request) throw new Error("AdBoostKit.runAd needs the platform RewardedService instance");
        o = o || {};
        if (inflight) return inflight;
        if ("function" === typeof ads.refreshPolicy) try {
          var refresh = ads.refreshPolicy();
          refresh && "function" === typeof refresh["catch"] && refresh["catch"](function() {});
        } catch (e) {}
        var allowed = true;
        try {
          "function" === typeof ads.isEnabled && (allowed = true === ads.isEnabled());
        } catch (e) {
          allowed = false;
        }
        if (!allowed) {
          inflight = Promise.resolve({
            status: "disabled",
            rewarded: false,
            message: "Ads are currently unavailable.",
            placementKey: o.placementKey
          }).then(function(r) {
            try {
              var shown = false;
              if (false !== o.toast) {
                Kit.toast(r.message);
                shown = true;
              }
              r = markFeedback(r, shown);
              safeCall(onResult, r);
              return r;
            } finally {
              inflight = null;
            }
          });
          return inflight;
        }
        var hooks = adHooks(o), resumed = false;
        function resume(r) {
          if (resumed) return;
          resumed = true;
          hooks.resume && safeCall(hooks.resume, r);
        }
        var popup = o.popup || null;
        var isCurrent = o.isCurrent || (popup ? function() {
          return popup.isOpen();
        } : void 0);
        popup && o.ownerId && popup.onClose(function() {
          "function" === typeof ads.cancelOwner && ads.cancelOwner(o.ownerId);
        });
        var req = {
          placementKey: o.placementKey,
          ownerId: o.ownerId,
          isCurrent: isCurrent,
          onExitAvailable: function onExitAvailable() {
            showExit(ads);
            safeCall(o.onExitAvailable);
          }
        };
        if (o.button) try {
          o.button.setBusy(true);
        } catch (e) {}
        hooks.pause && safeCall(hooks.pause, {
          placementKey: o.placementKey,
          ownerId: o.ownerId
        });
        var p;
        try {
          p = ads.request(req);
        } catch (e) {
          p = Promise.reject(e);
        }
        inflight = Promise.resolve(p).then(function(r) {
          return r;
        }, function(e) {
          E.warn("AdBoostKit.runAd: request threw " + (e && e.message));
          return {
            status: "error",
            rewarded: false,
            message: "The video could not open. Please try again.",
            placementKey: o.placementKey
          };
        }).then(function(r) {
          try {
            inflight = null;
            bumpNavEpoch();
            hideExit();
            if (o.button) try {
              o.button.setBusy(false);
            } catch (e) {}
            resume(r);
            var ok = !!r && (true === r.rewarded || true === r.ok);
            var shown = false;
            if (!ok && r && r.message && false !== o.toast) {
              sfx("adb_ad_no_reward");
              try {
                Kit.toast(r.message);
                shown = true;
              } catch (e) {}
            }
            r = markFeedback(r, shown);
            safeCall(onResult, r);
            return r;
          } finally {
            inflight = null;
            hideExit();
            if (o.button) try {
              o.button.setBusy(false);
            } catch (e) {}
            resume(r);
          }
        });
        return inflight;
      };
      Kit.isAdRunning = function() {
        return !!inflight;
      };
      Kit._reset = function() {
        navEpoch = 1;
        popupStack = [];
        inflight = null;
        hideExit();
        toastState = {
          node: null,
          bg: null,
          label: null,
          timer: null,
          text: ""
        };
      };
      return Kit;
    }
    function makeAdBoostAdapter24(cc) {
      var zCounter = 2e4;
      function touchIdOf(ev) {
        if (!ev) return 0;
        if ("function" === typeof ev.getID) return ev.getID();
        if (ev.touch && "function" === typeof ev.touch.getID) return ev.touch.getID();
        return 0;
      }
      function touchObjOf(ev) {
        if (!ev || "object" !== typeof ev) return null;
        if ("function" === typeof ev.getTouch) return ev.getTouch() || ev;
        return ev.touch || ev;
      }
      function bindSafeTap(n, fn, getEpoch) {
        var ET = cc && cc.Node && cc.Node.EventType;
        var TE = ET && ET.TOUCH_END;
        var TS = ET && ET.TOUCH_START;
        var TC = ET && ET.TOUCH_CANCEL;
        if (!TS) {
          n.on(TE, fn);
          return;
        }
        var armed = false, armedId = 0, startEpoch = 0;
        n.on(TS, function(ev) {
          var ep = "function" === typeof getEpoch ? getEpoch() : 0;
          var tObj = touchObjOf(ev);
          if (tObj) if (void 0 === tObj.__uiEpochAtStart) tObj.__uiEpochAtStart = ep; else if (tObj.__uiEpochAtStart !== ep) {
            armed = false;
            return;
          }
          armed = true;
          armedId = touchIdOf(ev);
          startEpoch = ep;
        });
        TC && n.on(TC, function() {
          armed = false;
        });
        n.on(TE, function(ev) {
          if (!armed) return;
          var okId = touchIdOf(ev) === armedId;
          var ep = "function" === typeof getEpoch ? getEpoch() : 0;
          var okEpoch = startEpoch === ep;
          armed = false;
          if (!okId || !okEpoch) return;
          fn(ev);
        });
      }
      function rgb(c, a) {
        return new cc.Color(c[0], c[1], c[2], void 0 === a ? 255 : a);
      }
      function tw(n, key, t) {
        var bag = n.__abTw || (n.__abTw = {});
        if (bag[key]) try {
          bag[key].stop();
        } catch (_) {}
        bag[key] = t;
        return t;
      }
      function walk(n, fn) {
        fn(n);
        var c = n.children || [];
        for (var i = 0; i < c.length; i++) walk(c[i], fn);
      }
      function sizeOf(f) {
        var r = f.getRect ? f.getRect() : null, o = f.getOriginalSize ? f.getOriginalSize() : null;
        var tex = f.getTexture ? f.getTexture() : f._texture;
        if (!r || !r.width) return o ? {
          width: o.width,
          height: o.height,
          byRect: false
        } : {
          width: 0,
          height: 0,
          byRect: true
        };
        var whole = !!(tex && o && o.width >= tex.width && o.height >= tex.height && (r.width < o.width || r.height < o.height));
        var byRect = !o || whole;
        var s = byRect ? r : o;
        return {
          width: s.width,
          height: s.height,
          byRect: byRect
        };
      }
      function trimFor(f) {
        return !f || sizeOf(f).byRect;
      }
      function simple(s) {
        return !s.type || s.type === cc.Sprite.Type.SIMPLE;
      }
      function measure(n, label) {
        try {
          "function" === typeof label._forceUpdateRenderData ? label._forceUpdateRenderData(true) : "function" === typeof label._updateRenderData && label._updateRenderData(true);
        } catch (_) {}
        return {
          width: n.width,
          height: n.height
        };
      }
      var E = {
        now: function now() {
          return Date.now();
        },
        later: function later(ms, fn) {
          var id = setTimeout(fn, ms);
          return function() {
            clearTimeout(id);
          };
        },
        warn: function warn(m) {
          cc.warn ? cc.warn(m) : "undefined" !== typeof console && console.warn(m);
        },
        node: function node(name, parent) {
          var n = new cc.Node(name);
          parent && parent.addChild(n);
          return n;
        },
        size: function size(n, w, h) {
          n.setContentSize(w, h);
        },
        getSize: function getSize(n) {
          return {
            width: n.width,
            height: n.height
          };
        },
        pos: function pos(n, x, y) {
          n.setPosition(x, y);
        },
        getPos: function getPos(n) {
          return {
            x: n.x,
            y: n.y
          };
        },
        frameInfo: function frameInfo(f) {
          if (!f || "function" !== typeof f.getRect) return null;
          var r = f.getRect(), o = f.getOffset ? f.getOffset() : {
            x: 0,
            y: 0
          }, s = f.getOriginalSize ? f.getOriginalSize() : r;
          return {
            texture: f.getTexture ? f.getTexture() : f._texture,
            rect: {
              x: r.x,
              y: r.y,
              width: r.width,
              height: r.height
            },
            offset: {
              x: o.x,
              y: o.y
            },
            orig: {
              width: s.width,
              height: s.height
            },
            rotated: !!(f.isRotated && f.isRotated())
          };
        },
        makeFrame: function makeFrame(tex, r, off, size) {
          return new cc.SpriteFrame(tex, new cc.Rect(r.x, r.y, r.width, r.height), false, new cc.Vec2(off.x, off.y), new cc.Size(size.width, size.height));
        },
        getInsets: function getInsets(f) {
          return [ f.insetLeft || 0, f.insetTop || 0, f.insetRight || 0, f.insetBottom || 0 ];
        },
        setInsets: function setInsets(f, i) {
          f.insetLeft = i[0];
          f.insetTop = i[1];
          f.insetRight = i[2];
          f.insetBottom = i[3];
        },
        isActive: function isActive(n) {
          return !!n.active;
        },
        frameSize: function frameSize(f) {
          var s = sizeOf(f);
          return {
            width: s.width,
            height: s.height
          };
        },
        sprite: function sprite(n, frame, sliced) {
          var s = n.addComponent(cc.Sprite);
          s.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sliced && (s.type = cc.Sprite.Type.SLICED);
          s.spriteFrame = frame;
          sliced || (s.trim = trimFor(frame));
          return s;
        },
        setFrame: function setFrame(n, frame) {
          var s = n.getComponent(cc.Sprite);
          if (!s) return;
          s.spriteFrame = frame;
          frame && simple(s) && (s.trim = trimFor(frame));
        },
        children: function children(n) {
          return n.children || [];
        },
        fitTrim: function fitTrim(n) {
          var s = n.getComponent && n.getComponent(cc.Sprite), f = s && s.spriteFrame;
          if (!f || !simple(s) || !(n.width > 0) || !(n.height > 0) || !f.getRect || !f.getOriginalSize) return false;
          var r = f.getRect(), o = f.getOriginalSize();
          if (!r || !o || !r.height || !o.height || Math.abs(r.width - o.width) < .5 && Math.abs(r.height - o.height) < .5) return false;
          var nr = n.width / n.height;
          var er = Math.abs(Math.log(nr / (r.width / r.height))), eo = Math.abs(Math.log(nr / (o.width / o.height)));
          if (Math.min(er, eo) > .1 || Math.abs(er - eo) < .01) return false;
          var want = er < eo;
          if (s.trim === want) return false;
          s.trim = want;
          return true;
        },
        gameUIKit: function gameUIKit() {
          try {
            var g = "function" === typeof require ? require("GameUIKit") : null;
            if (g && "object" === typeof g) return g;
          } catch (_) {}
          return null;
        },
        beforeDraw: function beforeDraw(fn) {
          cc.director && "function" === typeof cc.director.once && cc.Director && cc.Director.EVENT_BEFORE_DRAW && cc.director.once(cc.Director.EVENT_BEFORE_DRAW, fn);
        },
        label: function label(n, fontSize, color, outline) {
          var l = n.addComponent(cc.Label);
          l.fontSize = fontSize;
          l.lineHeight = Math.round(1.25 * fontSize);
          l.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
          l.verticalAlign = cc.Label.VerticalAlign.CENTER;
          n.color = rgb(color);
          if (outline) {
            var o = n.addComponent(cc.LabelOutline);
            o.color = rgb(outline);
            o.width = 3;
          }
          return l;
        },
        setLabel: function setLabel(n, label, text, maxW) {
          label.overflow = cc.Label.Overflow.NONE;
          label.string = text;
          var s = measure(n, label);
          if (s.width > maxW) {
            label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
            n.width = maxW;
            s = measure(n, label);
          }
          s.width || (s = {
            width: Math.min(maxW, text.length * label.fontSize * .55),
            height: label.lineHeight
          });
          return s;
        },
        rect: function rect(n, w, h, color, alpha) {
          var g = n.getComponent(cc.Graphics) || n.addComponent(cc.Graphics);
          g.clear();
          g.fillColor = rgb(color, alpha);
          g.rect(-w / 2, -h / 2, w, h);
          g.fill();
          n.setContentSize(w, h);
        },
        roundRect: function roundRect(n, w, h, r, color, opacity) {
          var g = n.getComponent(cc.Graphics) || n.addComponent(cc.Graphics);
          g.clear();
          g.fillColor = rgb(color, opacity);
          g.roundRect(-w / 2, -h / 2, w, h, r);
          g.fill();
          n.setContentSize(w, h);
        },
        ring: function ring(n, r, lw, color) {
          var g = n.addComponent(cc.Graphics);
          g.lineWidth = lw;
          g.strokeColor = rgb(color);
          g.lineCap = cc.Graphics.LineCap.ROUND;
          g.arc(0, 0, r - lw / 2, 0, 1.5 * Math.PI, true);
          g.stroke();
          n.setContentSize(2 * r, 2 * r);
        },
        blockInput: function blockInput(n) {
          var b = n.getComponent ? n.getComponent(cc.BlockInputEvents) : null;
          b || (b = n.addComponent(cc.BlockInputEvents));
          b && (b.enabled = true);
        },
        unblockInput: function unblockInput(n) {
          var b = n && n.getComponent ? n.getComponent(cc.BlockInputEvents) : null;
          b && (b.enabled = false);
        },
        onTap: function onTap(n, fn, getEpoch) {
          bindSafeTap(n, fn, getEpoch);
        },
        setOpacity: function setOpacity(n, v) {
          tw(n, "opacity", null);
          n.opacity = v;
        },
        tweenOpacity: function tweenOpacity(n, to, ms, cb) {
          tw(n, "opacity", cc.tween(n).to(ms / 1e3, {
            opacity: to
          }).call(function() {
            cb && cb();
          }).start());
        },
        setScale: function setScale(n, s) {
          tw(n, "scale", null);
          n.scale = s;
        },
        tweenScale: function tweenScale(n, to, ms, cb) {
          tw(n, "scale", cc.tween(n).to(ms / 1e3, {
            scale: to
          }).call(function() {
            cb && cb();
          }).start());
        },
        tint: function tint(n, c) {
          walk(n, function(x) {
            "Spinner" !== x.name && (x.color = rgb(c));
          });
        },
        setActive: function setActive(n, b) {
          n.active = !!b;
        },
        isValid: function isValid(n) {
          return !!n && cc.isValid(n);
        },
        frameUsable: function frameUsable(f) {
          if (!f || !cc.isValid(f, true)) return false;
          var t;
          try {
            t = "function" === typeof f.getTexture ? f.getTexture() : f._texture;
          } catch (e) {
            return false;
          }
          if (null === t) return false;
          return !(t && "object" === typeof t && !cc.isValid(t, true));
        },
        setAngle: function setAngle(n, a) {
          n.angle = a;
        },
        destroy: function destroy(n) {
          cc.isValid(n) && n.destroy();
        },
        toTop: function toTop(n) {
          n.zIndex = ++zCounter;
        },
        spin: function spin(n) {
          if (n.__abSpin) return;
          n.__abSpin = cc.tween(n).repeatForever(cc.tween().by(.9, {
            angle: -360
          })).start();
        },
        stopSpin: function stopSpin(n) {
          if (n.__abSpin) {
            try {
              n.__abSpin.stop();
            } catch (_) {}
            n.__abSpin = null;
            n.angle = 0;
          }
        },
        sceneRoot: function sceneRoot() {
          var s = cc.director.getScene();
          var c = s && s.getComponentInChildren ? s.getComponentInChildren(cc.Canvas) : null;
          return c ? c.node : s;
        },
        winSize: function winSize() {
          return {
            width: cc.winSize.width,
            height: cc.winSize.height
          };
        }
      };
      return E;
    }
    var AdBoostKit = createAdBoostKit(makeAdBoostAdapter24(cc));
    module.exports = AdBoostKit;
    cc._RF.pop();
  }, {
    GameUIKit: "GameUIKit"
  } ],
  AdDisplayPolicy: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "e45712KSiNL/a1OF4SrNvCn", "AdDisplayPolicy");
      "use strict";
      var VERSION = 1;
      var ROOT_KEY = "__tiktokKitAdDisplayPolicyV1";
      var MAX_INTEGER = 9007199254740991;
      function rootObject() {
        if ("undefined" !== typeof globalThis) return globalThis;
        if ("undefined" !== typeof window) return window;
        return "undefined" !== typeof global ? global : null;
      }
      function sdkFor(method) {
        var choices = [ "undefined" !== typeof TTMinis && TTMinis && TTMinis.game, "undefined" !== typeof tt && tt ];
        for (var i = 0; i < choices.length; i++) if (choices[i] && "function" === typeof choices[i][method]) return choices[i];
        return null;
      }
      function localStorage() {
        var storage;
        try {
          storage = "undefined" !== typeof cc && cc && cc.sys && cc.sys.localStorage;
        } catch (_) {
          storage = null;
        }
        if (storage && "function" === typeof storage.getItem) return storage;
        try {
          storage = "undefined" !== typeof window && window && window.localStorage;
        } catch (_) {
          storage = null;
        }
        if (storage && "function" === typeof storage.getItem) return storage;
        try {
          var root = rootObject();
          storage = root && root.localStorage;
        } catch (_) {
          storage = null;
        }
        return storage && "function" === typeof storage.getItem ? storage : null;
      }
      function own(o, key) {
        return Object.prototype.hasOwnProperty.call(o, key);
      }
      function record(o) {
        return !!o && "object" === typeof o && !Array.isArray(o);
      }
      function integer(n) {
        return "number" === typeof n && isFinite(n) && n >= 0 && n <= MAX_INTEGER && Math.floor(n) === n;
      }
      function positive(n, fallback) {
        return integer(n) && n > 0 ? n : fallback;
      }
      function fingerprint(text) {
        var a = 2166136261, b = 5381;
        for (var i = 0; i < text.length; i++) {
          a = 16777619 * (a ^ text.charCodeAt(i)) >>> 0;
          b = (33 * b ^ text.charCodeAt(i)) >>> 0;
        }
        return text.length + "-" + a.toString(16) + "-" + b.toString(16);
      }
      function settings(config) {
        config = config || {};
        var block = void 0 === config.adDisplay ? {} : config.adDisplay;
        if (!record(block)) throw new Error("ad_display_invalid_config");
        if (own(block, "enabled") && "boolean" !== typeof block.enabled) throw new Error("ad_display_invalid_enabled");
        if (own(block, "remoteUrl") && "string" !== typeof block.remoteUrl) throw new Error("ad_display_invalid_remote_url");
        var url = block.remoteUrl || "";
        if (url && !/^https:\/\/[^\s/?#]+(?:[/?#]|$)/i.test(url)) throw new Error("ad_display_requires_https");
        var gameId = config.gameId || "", appId = config.appId || "", channel = void 0 === block.channel ? "production" : block.channel;
        if ("string" !== typeof gameId || "string" !== typeof appId || "string" !== typeof channel || !channel) throw new Error("ad_display_invalid_identity");
        if (url && (!gameId || "change-me" === gameId || !appId)) throw new Error("ad_display_unconfigured_identity");
        var source = fingerprint(url);
        return {
          gameId: gameId,
          appId: appId,
          channel: channel,
          url: url,
          source: source,
          enabled: false !== block.enabled,
          refreshAfterMs: positive(block.refreshAfterMs, 6e4),
          requestTimeoutMs: positive(block.requestTimeoutMs, 1500),
          identity: JSON.stringify([ VERSION, gameId, appId, channel, source ])
        };
      }
      function parsed(value) {
        if ("string" === typeof value) try {
          return JSON.parse(value);
        } catch (_) {
          return null;
        }
        return record(value) ? value : null;
      }
      function valid(value, cfg, cached) {
        return record(value) && value.schemaVersion === VERSION && value.gameId === cfg.gameId && value.appId === cfg.appId && value.channel === cfg.channel && integer(value.revision) && record(value.ads) && "boolean" === typeof value.ads.enabled && (!cached || value.sourceFingerprint === cfg.source);
      }
      function acceptedRecord(value, cfg) {
        return {
          schemaVersion: VERSION,
          gameId: cfg.gameId,
          appId: cfg.appId,
          channel: cfg.channel,
          sourceFingerprint: cfg.source,
          revision: value.revision,
          ads: {
            enabled: value.ads.enabled
          }
        };
      }
      function Policy(config, options) {
        options = options || {};
        this._cfg = settings(config);
        this.version = VERSION;
        this.identity = this._cfg.identity;
        this._signature = JSON.stringify([ this._cfg.enabled, this._cfg.refreshAfterMs, this._cfg.requestTimeoutMs ]);
        this.cacheKey = "tiktok:ad-display:v1:" + encodeURIComponent(this.identity);
        this._storage = own(options, "storage") ? options.storage : localStorage();
        this._getSDK = options.getSDK || sdkFor;
        this._request = options.request || null;
        this._now = options.now || Date.now;
        this._setTimeout = options.setTimeout || setTimeout;
        this._clearTimeout = options.clearTimeout || clearTimeout;
        this._accepted = null;
        this._listeners = [];
        this._lastAttempt = null;
        this._inflight = null;
        this._requestSequence = 0;
        this._lifecycleBound = false;
        this._lastOutcome = "default";
        this._cacheWriteFailed = false;
        if (this._storage && "function" === typeof this._storage.getItem) try {
          var raw = this._storage.getItem(this.cacheKey), value = parsed(raw);
          if (valid(value, this._cfg, true)) {
            this._accepted = acceptedRecord(value, this._cfg);
            this._lastOutcome = "cache";
          } else null !== raw && void 0 !== raw && "" !== raw && (this._lastOutcome = "invalid_cache");
        } catch (_) {
          this._lastOutcome = "cache_unreadable";
        }
        false !== options.bindLifecycle && this._bindLifecycle();
      }
      Policy.prototype.isEnabled = function() {
        return this._cfg.enabled && (!this._accepted || true === this._accepted.ads.enabled);
      };
      Policy.prototype.state = function() {
        return {
          version: VERSION,
          identity: this.identity,
          ready: true,
          gameId: this._cfg.gameId,
          appId: this._cfg.appId,
          channel: this._cfg.channel,
          sourceFingerprint: this._cfg.source,
          remoteConfigured: !!this._cfg.url,
          revision: this._accepted ? this._accepted.revision : null,
          enabled: this.isEnabled(),
          localEnabled: this._cfg.enabled,
          remoteEnabled: this._accepted ? this._accepted.ads.enabled : null,
          lastAttemptAt: this._lastAttempt,
          lastOutcome: this._lastOutcome,
          cacheWriteFailed: this._cacheWriteFailed
        };
      };
      Policy.prototype.subscribe = function(fn) {
        if ("function" !== typeof fn) return function() {};
        var self = this, active = true;
        this._listeners.push(fn);
        return function() {
          if (!active) return;
          active = false;
          var index = self._listeners.indexOf(fn);
          index >= 0 && self._listeners.splice(index, 1);
        };
      };
      Policy.prototype._notify = function() {
        var listeners = this._listeners.slice();
        for (var i = 0; i < listeners.length; i++) try {
          listeners[i](this.state());
        } catch (_) {}
      };
      Policy.prototype._bindLifecycle = function() {
        if (this._lifecycleBound || !this._cfg.url) return;
        var sdk, self = this;
        try {
          sdk = this._getSDK("onShow");
        } catch (_) {}
        if (!sdk || "function" !== typeof sdk.onShow) return;
        try {
          sdk.onShow(function() {
            self.refresh();
          });
          this._lifecycleBound = true;
        } catch (_) {}
      };
      Policy.prototype._accept = function(value) {
        if (!valid(value, this._cfg, false)) {
          this._lastOutcome = "invalid_response";
          return;
        }
        var previous = this._accepted;
        if (previous && (value.revision < previous.revision || value.revision === previous.revision && value.ads.enabled !== previous.ads.enabled)) {
          this._lastOutcome = "old_or_conflicting_revision";
          return;
        }
        if (previous && value.revision === previous.revision) {
          this._lastOutcome = "unchanged";
          return;
        }
        var wasEnabled = this.isEnabled();
        this._accepted = acceptedRecord(value, this._cfg);
        this._lastOutcome = "accepted";
        this._cacheWriteFailed = false;
        if (this._storage && "function" === typeof this._storage.setItem) try {
          var text = JSON.stringify(this._accepted);
          this._storage.setItem(this.cacheKey, text);
          this._cacheWriteFailed = "function" !== typeof this._storage.getItem || this._storage.getItem(this.cacheKey) !== text;
        } catch (_) {
          this._cacheWriteFailed = true;
        } else this._cacheWriteFailed = true;
        wasEnabled !== this.isEnabled() && this._notify();
      };
      Policy.prototype.refresh = function() {
        var self = this;
        if (!this._cfg.url) return Promise.resolve(this.state());
        if (this._inflight) return this._inflight;
        var now;
        try {
          now = this._now();
        } catch (_) {
          now = Date.now();
        }
        "number" === typeof now && isFinite(now) || (now = Date.now());
        if (null !== this._lastAttempt && now >= this._lastAttempt && now - this._lastAttempt < this._cfg.refreshAfterMs) return Promise.resolve(this.state());
        this._lastAttempt = now;
        var sdk, request = this._request;
        if (!request) {
          try {
            sdk = this._getSDK("request");
          } catch (_) {}
          sdk && "function" === typeof sdk.request && (request = function request(o) {
            return sdk.request(o);
          });
        }
        if (!request) {
          this._lastOutcome = "request_unavailable";
          return Promise.resolve(this.state());
        }
        var resolve, task, timer, finished = false, sequence = ++this._requestSequence;
        var promise = new Promise(function(done) {
          resolve = done;
        });
        this._inflight = promise;
        function finish(kind, response) {
          if (finished || sequence !== self._requestSequence) return;
          finished = true;
          void 0 !== timer && self._clearTimeout(timer);
          "success" === kind ? response && 200 === response.statusCode ? self._accept(parsed(response.data)) : self._lastOutcome = "invalid_response" : self._lastOutcome = kind;
          self._inflight === promise && (self._inflight = null);
          resolve(self.state());
        }
        timer = this._setTimeout(function() {
          finish("timeout");
          if (task && "function" === typeof task.abort) try {
            task.abort();
          } catch (_) {}
        }, this._cfg.requestTimeoutMs);
        try {
          task = request({
            url: this._cfg.url,
            method: "GET",
            dataType: "json",
            timeout: this._cfg.requestTimeoutMs,
            success: function success(response) {
              finish("success", response);
            },
            fail: function fail() {
              finish("network_error");
            }
          });
          task && "function" === typeof task.then && task.then(function(response) {
            finish("success", response);
          }, function() {
            finish("network_error");
          });
        } catch (_) {
          finish("network_error");
        }
        return promise;
      };
      function get(config, options) {
        options = options || {};
        var root = own(options, "root") ? options.root : rootObject(), cfg = settings(config);
        var existing = root && root[ROOT_KEY];
        if (existing) {
          if (existing.version !== VERSION || existing.identity !== cfg.identity || !existing.instance || existing.instance.version !== VERSION || "function" !== typeof existing.instance.isEnabled) throw new Error("ad_display_policy_identity_conflict");
          if (existing.instance._signature !== JSON.stringify([ cfg.enabled, cfg.refreshAfterMs, cfg.requestTimeoutMs ])) throw new Error("ad_display_policy_config_conflict");
          existing.instance._bindLifecycle();
          return existing.instance;
        }
        var instance = new Policy(config, options);
        root && (root[ROOT_KEY] = {
          version: VERSION,
          identity: instance.identity,
          instance: instance
        });
        return instance;
      }
      function current(root) {
        root = arguments.length ? root : rootObject();
        var entry = root && root[ROOT_KEY];
        return entry && entry.version === VERSION && entry.instance && entry.instance.version === VERSION && entry.identity === entry.instance.identity && "function" === typeof entry.instance.isEnabled ? entry.instance : null;
      }
      module.exports = {
        version: VERSION,
        ROOT_KEY: ROOT_KEY,
        get: get,
        current: current,
        create: function create(config, options) {
          return new Policy(config, options);
        }
      };
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {} ],
  AdvBase: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a81b4GFxx9G64jaOzvR06l5", "AdvBase");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ccclass = cc._decorator.ccclass;
    var AdvBase = function() {
      function AdvBase() {
        this._isInit = false;
        this._isShow = false;
        this._isError = false;
      }
      AdvBase.prototype.getAdvInfo = function() {
        return null;
      };
      AdvBase.prototype.update = function() {
        return;
      };
      AdvBase.prototype.isError = function() {
        return this._isError;
      };
      AdvBase.prototype.isShow = function() {
        return this._isShow;
      };
      AdvBase.prototype.isInit = function() {
        return this._isInit;
      };
      AdvBase._instance = null;
      AdvBase = __decorate([ ccclass ], AdvBase);
      return AdvBase;
    }();
    exports.default = AdvBase;
    cc._RF.pop();
  }, {} ],
  AdvFree: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "16a0dTWJ1VEz7pr3pSK0WUA", "AdvFree");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdvBase_1 = require("./AdvBase");
    var ccclass = cc._decorator.ccclass;
    var AdvFree = function(_super) {
      __extends(AdvFree, _super);
      function AdvFree() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AdvFree_1 = AdvFree;
      AdvFree.instance = function() {
        null === this._instance && (this._instance = new AdvFree_1());
        return this._instance;
      };
      AdvFree.prototype.getNode = function() {
        return null;
      };
      AdvFree.prototype.init = function(param) {};
      AdvFree.prototype.hide = function() {};
      AdvFree.prototype.show = function(param) {};
      var AdvFree_1;
      AdvFree = AdvFree_1 = __decorate([ ccclass ], AdvFree);
      return AdvFree;
    }(AdvBase_1.default);
    exports.default = AdvFree;
    cc._RF.pop();
  }, {
    "./AdvBase": "AdvBase"
  } ],
  AppApi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "beb45flYR9NnJYY2PVAdah+", "AppApi");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../../FrameLog");
    var LocalMgr_1 = require("../LocalMgr");
    var ViewMgr_1 = require("../ViewMgr");
    var DisplayMgr_1 = require("../DisplayMgr");
    var ModalDisplay_1 = require("../../../Display/TipDisplay/ModalDisplay");
    var UI = require("GameUIKit");
    var AppApi = function() {
      function AppApi() {}
      AppApi.onShow = function(call) {
        cc.game.on(cc.game.EVENT_SHOW, function() {
          "function" === typeof call && call({
            scene: "",
            query: "",
            shareTicket: ""
          });
        });
      };
      AppApi.onHide = function(call) {
        cc.game.on(cc.game.EVENT_HIDE, function() {
          "function" === typeof call && call();
        });
      };
      AppApi.isInitAdSdk = function() {
        return this._hasInitAdSdk;
      };
      AppApi.showModal = function(param) {
        DisplayMgr_1.default.closeUI(ModalDisplay_1.default, false);
        DisplayMgr_1.default.openUI(ModalDisplay_1.default, ViewMgr_1.default.tipView, param);
      };
      AppApi.showToast = function(param) {
        UI.toast(String(param && param.title || "Please try again."));
      };
      Object.defineProperty(AppApi, "getStorageSync", {
        get: function() {
          return LocalMgr_1.default.read;
        },
        enumerable: false,
        configurable: true
      });
      AppApi.setStorage = function(param) {
        return LocalMgr_1.default.save(param.key, param.data);
      };
      Object.defineProperty(AppApi, "setStorageSync", {
        get: function() {
          return LocalMgr_1.default.save;
        },
        enumerable: false,
        configurable: true
      });
      AppApi.getLaunchOptionsSync = function() {
        return null;
      };
      AppApi.removeStorageSync = function(key) {
        LocalMgr_1.default.rm(key);
      };
      AppApi.login = function(options) {
        var sessionInfo = this.getStorageSync("session_info");
        var openid = "new_user";
        sessionInfo && sessionInfo.openid && (openid = sessionInfo.openid);
        options.success && options.success({
          code: openid
        });
      };
      AppApi.request = function(options) {
        var xhr = new XMLHttpRequest();
        xhr.timeout = options.timeout;
        xhr.onerror = function() {
          FrameLog_1.default.error("xhr error", xhr.readyState, options.url);
          "function" === typeof options.fail && options.fail({
            readyState: xhr.readyState
          });
        };
        xhr.onabort = function() {
          FrameLog_1.default.error("xhr abort", xhr.readyState, options.url);
          "function" === typeof options.fail && options.fail({
            readyState: xhr.readyState
          });
        };
        xhr.ontimeout = function() {
          FrameLog_1.default.error("xhr timeout", xhr.readyState, options.url);
          "function" === typeof options.fail && options.fail({
            readyState: xhr.readyState
          });
        };
        xhr.onreadystatechange = function() {
          if (4 !== xhr.readyState) {
            FrameLog_1.default.error("xhr ready state is not 4", xhr.readyState, options.url);
            return;
          }
          FrameLog_1.default.log("xhr ready state is 4", xhr.readyState, xhr.status, options.url);
          if (200 === xhr.status) {
            var response = xhr.responseText;
            if (response) {
              var headers = xhr.getAllResponseHeaders();
              var headerArr = headers.trim().split(/[\r\n]+/);
              var headerMap_1 = {};
              headerArr.forEach(function(line) {
                var parts = line.split(": ");
                var header = parts.shift();
                headerMap_1[header] = parts.join(": ");
              });
              var responseJson = JSON.parse(response);
              FrameLog_1.default.log("xhr post success", xhr.status, options.url);
              "function" === typeof options.success && options.success({
                statusCode: xhr.status,
                data: responseJson,
                header: headerMap_1
              });
            } else {
              FrameLog_1.default.log("xhr post fail", options, xhr.readyState, xhr);
              "function" === typeof options.fail && options.fail({
                readyState: xhr.readyState
              });
            }
          } else {
            FrameLog_1.default.log("xhr post fail system", options, xhr.readyState, xhr);
            "function" === typeof options.fail && options.fail({
              readyState: xhr.readyState
            });
          }
        };
        options.method ? xhr.open(options.method, options.url, true) : xhr.open("POST", options.url, true);
        var param = JSON.stringify(options.data);
        for (var item in options.header) options.header.hasOwnProperty(item) && xhr.setRequestHeader(item, options.header[item]);
        xhr.send(param);
      };
      AppApi.getSystemInfoSync = function() {
        return {
          benchmarkLevel: 10,
          version: cc.sys.osVersion
        };
      };
      AppApi._hasInitAdSdk = false;
      return AppApi;
    }();
    exports.default = AppApi;
    cc._RF.pop();
  }, {
    "../../../Display/TipDisplay/ModalDisplay": "ModalDisplay",
    "../../FrameLog": "FrameLog",
    "../DisplayMgr": "DisplayMgr",
    "../LocalMgr": "LocalMgr",
    "../ViewMgr": "ViewMgr",
    GameUIKit: "GameUIKit"
  } ],
  AudioService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "18bfdovk79A84JML0Z6Nyve", "AudioService");
    "use strict";
    (function(root, factory) {
      var api = factory(root);
      "object" === typeof module && module && module.exports && (module.exports = api);
      root && (root.TikTokAudioService = api);
    })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0, function(root) {
      var VERSION = "1.2";
      var DEFAULTS = {
        music: {
          on: true,
          volume: .7
        },
        sfx: {
          on: true,
          volume: 1
        }
      };
      var SAVE_KEY = "audio";
      var THROTTLE_MS = 80;
      var FIRST_FRAME_FALLBACK_MS = 5e3;
      var LATE_SFX_MS = 800;
      function isKey(k) {
        return !!k && "object" === typeof k && 1 === k.__resKey && "string" === typeof k.path && "function" === typeof k.request;
      }
      function clamp(v, d) {
        v = Number(v);
        return isFinite(v) ? Math.max(0, Math.min(1, v)) : d;
      }
      function safely(fn) {
        try {
          return fn();
        } catch (e) {
          return;
        }
      }
      function channel(saved, d) {
        saved = saved && "object" === typeof saved ? saved : {};
        return {
          on: "boolean" === typeof saved.on ? saved.on : d.on,
          volume: clamp(saved.volume, d.volume)
        };
      }
      function resourcePath(file) {
        var p = String(file || "").replace(/\\/g, "/").replace(/^\.?\//, "");
        p = p.replace(/^assets\/resources\//, "").replace(/^resources\//, "");
        return p.replace(/\.(mp3|ogg|wav|m4a|aac)$/i, "");
      }
      function AudioService(options) {
        options = options || {};
        if (!options.backend) throw new Error("AudioService: backend is required (backend24(cc) or backend3x(cc, node))");
        this.backend = options.backend;
        this.keys = options.keys || null;
        this.loader = "function" === typeof options.loader ? options.loader : null;
        this.store = options.store || null;
        this.now = options.now || Date.now;
        this.defaultThrottle = options.throttleMs >= 0 ? options.throttleMs : THROTTLE_MS;
        this.lateSfxMs = options.lateSfxMs >= 0 ? options.lateSfxMs : LATE_SFX_MS;
        this.fallbackMs = "number" === typeof options.firstFrameFallbackMs ? options.firstFrameFallbackMs : FIRST_FRAME_FALLBACK_MS;
        this.setTimer = "function" === typeof options.setTimer ? options.setTimer : "function" === typeof setTimeout ? function(fn, ms) {
          var t = setTimeout(fn, ms);
          t && "function" === typeof t.unref && t.unref();
          return t;
        } : null;
        this.clearTimer = "function" === typeof options.clearTimer ? options.clearTimer : "function" === typeof clearTimeout ? function(t) {
          clearTimeout(t);
        } : null;
        this.fallbackTimer = null;
        this.startedBy = null;
        var d = options.defaults || DEFAULTS;
        var saved = this.store ? safely(function() {
          return options.store.get();
        }) : null;
        var a = saved && saved[SAVE_KEY];
        this.music = channel(a && a.music, channel(d.music, DEFAULTS.music));
        this.sfx = channel(a && a.sfx, channel(d.sfx, DEFAULTS.sfx));
        this.entries = {};
        this.clips = {};
        this.loading = {};
        this.lastPlay = {};
        this.ready = false;
        this.adDepth = 0;
        this.wantedMusic = null;
        this.playingMusic = null;
      }
      AudioService.prototype.register = function(map) {
        var self = this;
        Object.keys(map || {}).forEach(function(id) {
          var e = map[id] || {};
          var key = isKey(e.key) ? e.key : null;
          self.entries[id] = {
            key: key,
            file: key ? key.path : resourcePath(e.file || e.path || id),
            kind: "music" === e.kind || true === e.loop ? "music" : "sfx",
            volume: clamp(e.volume, 1),
            throttle: e.throttle_ms >= 0 ? Number(e.throttle_ms) : self.defaultThrottle,
            loop: false !== e.loop
          };
        });
        return this;
      };
      AudioService.prototype._load = function(id, cb) {
        var self = this, e = this.entries[id];
        if (!e) return cb(new Error("unknown sound " + id));
        if (this.clips[id]) return cb(null, this.clips[id]);
        if (this.loading[id]) {
          this.loading[id].push(cb);
          return;
        }
        this.loading[id] = [ cb ];
        var done = function done(err, clip) {
          var waiting = self.loading[id] || [];
          delete self.loading[id];
          !err && clip && (self.clips[id] = clip);
          waiting.forEach(function(fn) {
            safely(function() {
              fn(err, clip);
            });
          });
        };
        try {
          this._fetch(e, done);
        } catch (err) {
          done(err);
        }
      };
      AudioService.prototype._fetch = function(e, cb) {
        if (e.key) return e.key.request(cb);
        if (this.loader) return this.loader(e.file, cb);
        var table = this.keys || root && root.ResKeys || null, found = null;
        table && Object.keys(table).some(function(name) {
          var k = table[name];
          isKey(k) && "AudioClip" === k.type && "resources" === k.bundle && k.path === e.file && (found = k);
          return !!found;
        });
        if (!found) {
          var err = new Error("AudioService: " + e.file + " is not in ResKeys (run make_res_keys.py after adding the file)");
          err.code = "not_in_res_keys";
          return cb(err);
        }
        found.request(cb);
      };
      AudioService.prototype._musicVolume = function() {
        var e = this.entries[this.playingMusic || this.wantedMusic];
        return this.adDepth > 0 || !this.music.on ? 0 : this.music.volume * (e ? e.volume : 1);
      };
      AudioService.prototype._syncMusic = function() {
        var self = this, b = this.backend, id = this.wantedMusic;
        if (!id || !this.music.on) {
          if (this.playingMusic) {
            safely(function() {
              b.stopMusic();
            });
            this.playingMusic = null;
          }
          return;
        }
        if (!this.ready) return;
        if (this.playingMusic === id) {
          safely(function() {
            b.setMusicVolume(self._musicVolume());
          });
          return;
        }
        if (this.adDepth > 0) return;
        this._load(id, function(err, clip) {
          if (err || !clip) return;
          if (self.wantedMusic !== id || !self.music.on || !self.ready || self.adDepth > 0 || self.playingMusic === id) return;
          self.playingMusic && safely(function() {
            b.stopMusic();
          });
          var e = self.entries[id];
          safely(function() {
            b.playMusic(clip, e.loop, self._musicVolume());
          });
          self.playingMusic = id;
        });
      };
      AudioService.prototype.firstFrameDrawn = function() {
        if (this.ready) return;
        this.ready = true;
        this.startedBy || (this.startedBy = "first_frame");
        if (null !== this.fallbackTimer && this.clearTimer) {
          var t = this.fallbackTimer;
          var c = this.clearTimer;
          safely(function() {
            c(t);
          });
        }
        this.fallbackTimer = null;
        this._syncMusic();
      };
      AudioService.prototype._armFallback = function() {
        var self = this;
        if (this.ready || null !== this.fallbackTimer || !(this.fallbackMs >= 0) || !this.setTimer) return;
        this.fallbackTimer = safely(function() {
          return self.setTimer(function() {
            self.fallbackTimer = null;
            if (self.ready) return;
            self.startedBy = "fallback";
            "undefined" !== typeof console && console.warn && safely(function() {
              console.warn("[AudioService] bindFirstFrame() / firstFrameDrawn() was not called within " + self.fallbackMs + " ms of the first play: sound started by the fallback. Call audio.bindFirstFrame(cc.director, cc.Director) in the home scene start().");
            });
            self.firstFrameDrawn();
          }, self.fallbackMs);
        });
        void 0 === this.fallbackTimer && (this.fallbackTimer = null);
      };
      AudioService.prototype.bindFirstFrame = function(director, Director) {
        var self = this, ev = Director && Director.EVENT_AFTER_DRAW;
        if (!director || "function" !== typeof director.once || !ev) {
          this.firstFrameDrawn();
          return false;
        }
        director.once(ev, function() {
          self.firstFrameDrawn();
        });
        return true;
      };
      AudioService.prototype.playMusic = function(id) {
        if (!this.entries[id]) return "unknown";
        this.wantedMusic = id;
        this._armFallback();
        this._syncMusic();
        if (!this.music.on) return "off";
        return this.ready ? "ok" : "after_first_frame";
      };
      AudioService.prototype.stopMusic = function() {
        this.wantedMusic = null;
        this._syncMusic();
      };
      AudioService.prototype.playSfx = function(id) {
        var self = this, e = this.entries[id];
        if (!e) return "unknown";
        if (!this.sfx.on) return "off";
        if (this.adDepth > 0) return "ad";
        if (!this.ready) {
          this._armFallback();
          return "not_ready";
        }
        var t = this.now();
        if (void 0 !== this.lastPlay[id] && t - this.lastPlay[id] < e.throttle) return "throttled";
        this.lastPlay[id] = t;
        var play = function play(clip) {
          if (!self.sfx.on || self.adDepth > 0) return false;
          safely(function() {
            self.backend.playEffect(clip, self.sfx.volume * e.volume);
          });
          return true;
        };
        if (this.clips[id]) return play(this.clips[id]) ? "ok" : "off";
        this._load(id, function(err, clip) {
          !err && clip && self.now() - t <= self.lateSfxMs && play(clip);
        });
        return "loading";
      };
      AudioService.prototype._save = function() {
        if (!this.store) return false;
        var value = {
          music: {
            on: this.music.on,
            volume: this.music.volume
          },
          sfx: {
            on: this.sfx.on,
            volume: this.sfx.volume
          }
        };
        var r = safely(function() {
          return this.store.update(function(draft) {
            draft[SAVE_KEY] = value;
          });
        }.bind(this));
        return !!(r && r.ok);
      };
      AudioService.prototype._set = function(name, field, value) {
        this[name][field] = "on" === field ? true === value : clamp(value, this[name].volume);
        "music" === name && this._syncMusic();
        return {
          ok: true,
          saved: this._save()
        };
      };
      AudioService.prototype.setMusicOn = function(on) {
        return this._set("music", "on", on);
      };
      AudioService.prototype.setSfxOn = function(on) {
        return this._set("sfx", "on", on);
      };
      AudioService.prototype.setMusicVolume = function(v) {
        return this._set("music", "volume", v);
      };
      AudioService.prototype.setSfxVolume = function(v) {
        return this._set("sfx", "volume", v);
      };
      AudioService.prototype.settings = function() {
        return {
          music: {
            on: this.music.on,
            volume: this.music.volume
          },
          sfx: {
            on: this.sfx.on,
            volume: this.sfx.volume
          },
          ad: this.adDepth > 0,
          ready: this.ready,
          startedBy: this.startedBy
        };
      };
      AudioService.prototype.adBegin = function() {
        this.adDepth += 1;
        var b = this.backend;
        if (1 === this.adDepth) {
          this.playingMusic && safely(function() {
            b.setMusicVolume(0);
          });
          "function" === typeof b.stopAllEffects && safely(function() {
            b.stopAllEffects();
          });
        }
      };
      AudioService.prototype.adEnd = function() {
        if (0 === this.adDepth) return;
        this.adDepth -= 1;
        0 === this.adDepth && this._syncMusic();
      };
      AudioService.prototype.wrapRewarded = function(service) {
        var self = this;
        var wrapped = Object.create(service);
        wrapped.request = function(options) {
          self.adBegin();
          var ended = false;
          var end = function end() {
            if (!ended) {
              ended = true;
              self.adEnd();
            }
          };
          var p;
          try {
            p = service.request(options);
          } catch (e) {
            end();
            throw e;
          }
          return Promise.resolve(p).then(function(r) {
            end();
            return r;
          }, function(e) {
            end();
            throw e;
          });
        };
        return wrapped;
      };
      function backend24(cc) {
        var ae = cc.audioEngine;
        return {
          playMusic: function playMusic(clip, loop, volume) {
            ae.playMusic(clip, loop);
            ae.setMusicVolume(volume);
          },
          setMusicVolume: function setMusicVolume(v) {
            ae.setMusicVolume(v);
          },
          stopMusic: function stopMusic() {
            ae.stopMusic();
          },
          playEffect: function playEffect(clip, volume) {
            var id = ae.playEffect(clip, false);
            ae.setVolume(id, volume);
            return id;
          },
          stopAllEffects: function stopAllEffects() {
            ae.stopAllEffects();
          }
        };
      }
      function backend3x(cc, node) {
        var music = node.addComponent(cc.AudioSource), fx = node.addComponent(cc.AudioSource);
        music.playOnAwake = false;
        fx.playOnAwake = false;
        return {
          playMusic: function playMusic(clip, loop, volume) {
            music.stop();
            music.clip = clip;
            music.loop = loop;
            music.volume = volume;
            music.play();
          },
          setMusicVolume: function setMusicVolume(v) {
            music.volume = v;
          },
          stopMusic: function stopMusic() {
            music.stop();
          },
          playEffect: function playEffect(clip, volume) {
            fx.playOneShot(clip, volume);
          },
          stopAllEffects: function stopAllEffects() {
            fx.stop();
          }
        };
      }
      return {
        VERSION: VERSION,
        SAVE_KEY: SAVE_KEY,
        DEFAULTS: DEFAULTS,
        create: function create(options) {
          return new AudioService(options);
        },
        AudioService: AudioService,
        backend24: backend24,
        backend3x: backend3x,
        resourcePath: resourcePath
      };
    });
    cc._RF.pop();
  }, {} ],
  ConstData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a829pquIVDnZkHtPOnLEDG", "ConstData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ConstData = function() {
      function ConstData() {}
      ConstData.WX_ADV_CONF = {
        BANNER_MIN_WIDTH: 300,
        BANNER_MIN_HEIGHT: 100,
        GAME_ICON_WIDTH: 72,
        GAME_ICON_HEIGHT: 90,
        BANNER_INIT_DELAY: 5,
        GAME_ICON_INIT_DELAY: 10,
        BANNER_INTERVAL: 1,
        GAME_BANNER_INTERVAL: 1.5,
        GAME_ICON_INTERVAL: 4.3,
        REPLACE_COUNT: 1e5,
        REPLACE_TIME_OUT: 3
      };
      ConstData.UNLOCK_WAY = {
        NONE: 0,
        VIDEO: 1,
        SHARE: 2
      };
      ConstData.BANNER_TYPE = {
        NOT_DEFINE: 0,
        BANNER: 1,
        GRID: 2
      };
      ConstData.REWARDED_VIDEO_END_TYPE = {
        END: 1,
        NOT_END: 2,
        ERROR: 3
      };
      ConstData.GAME_BOX_IMAGE_URL = {
        BANNER: "banner_url",
        SCREEN: "page_url",
        ICON: "icon_url"
      };
      ConstData.UNLOCK_TYPE = {
        PASS_GAME: 1,
        TIPS: 2,
        GET_STRENGTH: 3,
        DOUBLE_STRENGTH: 4,
        NEXT_LEVEL: 5,
        GET_GOLD: 6,
        DOUBLE: 7,
        TRY_SKIN: 8
      };
      ConstData.GAME_BOX_TWEEN_TYPE = {
        SHAKE_STOP: 1,
        SHAKE_FOREVER: 2
      };
      ConstData.GAME = {
        Over: 2,
        bool: false,
        isBegin: false
      };
      return ConstData;
    }();
    exports.default = ConstData;
    cc._RF.pop();
  }, {} ],
  Cut: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b31a4OW1HdC9ZzUShiKrwsG", "Cut");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewUI_1 = require("../../Frame/Manager/UI/ViewUI");
    var Global_1 = require("../../Frame/Global");
    var SoundMgr_1 = require("../../Frame/Manager/SoundMgr");
    var Tools_1 = require("../../Frame/Manager/Tools");
    var ccclass = cc._decorator.ccclass;
    var Cut = function(_super) {
      __extends(Cut, _super);
      function Cut() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      Cut.prototype.onCollisionEnter = function(other, self) {
        var id = other.node.uuid;
        if (-1 !== Global_1.default.Fruit.indexOf(id)) return;
        SoundMgr_1.default.playAudioGame("boom");
        Tools_1.default.vibrateShort();
        Global_1.default.Fruit.push(other.node.uuid);
        Global_1.default.Cut.thisCut++;
        other.node.getComponent("Fruit").boom();
        Global_1.default.Cut.curr_number--;
      };
      Cut = __decorate([ ccclass ], Cut);
      return Cut;
    }(ViewUI_1.default);
    exports.default = Cut;
    cc._RF.pop();
  }, {
    "../../Frame/Global": "Global",
    "../../Frame/Manager/SoundMgr": "SoundMgr",
    "../../Frame/Manager/Tools": "Tools",
    "../../Frame/Manager/UI/ViewUI": "ViewUI"
  } ],
  DisplayMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ae129sR51xAO5SNhcySWGs6", "DisplayMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PoolMgr_1 = require("./PoolMgr");
    var FrameLog_1 = require("../FrameLog");
    var ViewMgr_1 = require("./ViewMgr");
    var ViewPanel_1 = require("./UI/ViewPanel");
    var EventMgr_1 = require("./Event/EventMgr");
    var EventData_1 = require("./Event/EventData");
    var WechatApi_1 = require("./API/WechatApi");
    var DisplayMgr = function() {
      function DisplayMgr() {}
      DisplayMgr.openUI = function(uiClass, layer, param, callback) {
        var _this = this;
        void 0 === layer && (layer = ViewMgr_1.default.gameView);
        var url = uiClass.getUrl();
        if (this.loadingUI[url] || this.uiList[url]) {
          FrameLog_1.default.warn("ui\u52a0\u8f7d\u4e2d--\x3e...", null == this.loadingUI[url], " ui\u5df2\u5728\u663e\u793a\u5217\u8868--\x3e", null == this.uiList[url], url);
          return;
        }
        WechatApi_1.default.bannerAdv.hide();
        this.loadingUI[url] = 1;
        PoolMgr_1.default.getAsyncNodeToPool(url, function(temp) {
          delete _this.loadingUI[url];
          var panel = temp.getComponent(ViewPanel_1.default);
          if (!panel.isInit) {
            panel.initUI();
            panel.isInit = true;
          }
          _this.showUI(url, temp, layer, param);
          callback && callback();
        });
        FrameLog_1.default.log("open view", url);
      };
      DisplayMgr.closeAllUI = function() {
        for (var key in this.uiList) this.uiList.hasOwnProperty(key) && this._closeUI(key, this.uiList[key], false, null);
      };
      DisplayMgr._closeUI = function(url, temp, destroy, param) {
        void 0 === destroy && (destroy = false);
        void 0 === param && (param = null);
        var panel = temp.getComponent(ViewPanel_1.default);
        if (!panel) {
          FrameLog_1.default.warn("close UI error", panel, url, temp);
          return;
        }
        if (!panel.isCanClose) return;
        panel && true === panel.hide(param) && (destroy = true);
        var finish = function() {
          destroy ? temp.destroy() : PoolMgr_1.default.putNodeToPool(url, temp);
          param && param.is_emit && EventMgr_1.default.instance().emit(EventData_1.default.VIEW_CLOSE, url);
        };
        delete this.uiList[url];
        temp.activeInHierarchy && panel.playOutTime ? panel.scheduleOnce(finish, panel.playOutTime) : finish();
        FrameLog_1.default.log("close View", url);
      };
      DisplayMgr.closeUI = function(uiClass, destroy, param) {
        void 0 === destroy && (destroy = false);
        void 0 === param && (param = null);
        var temp = this.getUI(uiClass);
        var url = uiClass.getUrl();
        temp && this._closeUI(url, temp, destroy, param);
      };
      DisplayMgr.getUI = function(uiClass) {
        var url = uiClass.getUrl();
        if (this.uiList[url]) return this.uiList[url];
        return null;
      };
      DisplayMgr.showUI = function(url, temp, layerNode, param) {
        void 0 === param && (param = null);
        try {
          temp.parent = layerNode;
          var panel = temp.getComponent(ViewPanel_1.default);
          panel && panel.show(param);
          this.uiList[url] = temp;
          EventMgr_1.default.instance().emit(EventData_1.default.VIEW_OPEN, url);
        } catch (e) {
          FrameLog_1.default.error(e, url, temp, layerNode);
        }
      };
      DisplayMgr.uiList = Object.create({});
      DisplayMgr.loadingUI = {};
      return DisplayMgr;
    }();
    exports.default = DisplayMgr;
    cc._RF.pop();
  }, {
    "../FrameLog": "FrameLog",
    "./API/WechatApi": "WechatApi",
    "./Event/EventData": "EventData",
    "./Event/EventMgr": "EventMgr",
    "./PoolMgr": "PoolMgr",
    "./UI/ViewPanel": "ViewPanel",
    "./ViewMgr": "ViewMgr"
  } ],
  EndDisplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7a635yO6fZCwr1i47Nu19p8", "EndDisplay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewPanel_1 = require("../../Frame/Manager/UI/ViewPanel");
    var GameMgr_1 = require("../../Frame/Manager/GameMgr");
    var WatermelonUI = require("../../Frame/Manager/WatermelonUI");
    var ccclass = cc._decorator.ccclass;
    var EndDisplay = function(_super) {
      __extends(EndDisplay, _super);
      function EndDisplay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._paramData = {};
        _this.settled = false;
        return _this;
      }
      EndDisplay.getUrl = function() {
        return "endDisplay";
      };
      EndDisplay.prototype.initUI = function() {
        var _this = this;
        [ "gameBox", "button" ].forEach(function(path) {
          var n = _this.getNode(path);
          n && (n.active = false);
        });
      };
      EndDisplay.prototype.show = function(param) {
        this._paramData = param || {};
        this.node.active = true;
        this.finish();
      };
      EndDisplay.prototype.finish = function() {
        var _this = this;
        if (this.settled) return;
        if (this._paramData.isSuccess && !this._paramData.replayCompleted) {
          if (!GameMgr_1.default.addLevel()) {
            WatermelonUI.showSaveRetry(this, function() {
              return _this.finish();
            });
            return;
          }
          this._paramData.replayCompleted = true;
        }
        this.settled = true;
        WatermelonUI.showResult(this, !!this._paramData.isSuccess);
      };
      EndDisplay.prototype.hide = function() {
        WatermelonUI.disposeGame(this);
        this.node.active = false;
      };
      EndDisplay.prototype.playIn = function() {};
      EndDisplay.prototype.playOut = function() {};
      EndDisplay = __decorate([ ccclass ], EndDisplay);
      return EndDisplay;
    }(ViewPanel_1.default);
    exports.default = EndDisplay;
    cc._RF.pop();
  }, {
    "../../Frame/Manager/GameMgr": "GameMgr",
    "../../Frame/Manager/UI/ViewPanel": "ViewPanel",
    "../../Frame/Manager/WatermelonUI": "WatermelonUI"
  } ],
  EventData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c8d22ka13NOoa6UW47Lz5+q", "EventData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventData = function() {
      function EventData() {}
      EventData.CHANGE_UNLOCK_TYPE = "change_unlock_type";
      EventData.VIEW_CLOSE = "view_close";
      EventData.UPDATE_WX_USER_INFO = "update_wx_user_info";
      EventData.VIEW_OPEN = "view_open";
      EventData.BANNER_ERROR = "banner_error";
      EventData.BANNER_SUCCESS = "banner_success";
      EventData.GET_CONFIG = "get_config";
      EventData.CLOSE_LOADING = "close_loading";
      EventData.STRENGTH_CHANGE = "strength_change";
      EventData.GAME_CLOSE = "game_close";
      EventData.CHANGE_SKIN = "change_skin";
      EventData.START_GAME = "start_game";
      EventData.GAME_BEGIN = "home_view_hide";
      return EventData;
    }();
    exports.default = EventData;
    cc._RF.pop();
  }, {} ],
  EventMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "47ab0gbRwZJ2bIbThAjrGLf", "EventMgr");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../../FrameLog");
    var EventPar_1 = require("./EventPar");
    var EventMgr = function(_super) {
      __extends(EventMgr, _super);
      function EventMgr() {
        var _this = _super.call(this) || this;
        if (EventMgr._instance) {
          FrameLog_1.default.error("ClientEvent \u4e3a\u5355\u4f8b \u8bf7\u4f7f\u7528ClientEvent.instance. || clientEvent.");
          return _this;
        }
        EventMgr._instance = _this;
        return _this;
      }
      EventMgr.instance = function() {
        return this._instance;
      };
      EventMgr._instance = new EventMgr();
      return EventMgr;
    }(EventPar_1.default);
    exports.default = EventMgr;
    cc._RF.pop();
  }, {
    "../../FrameLog": "FrameLog",
    "./EventPar": "EventPar"
  } ],
  EventPar: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5ae2au8zgdDkrzcTzaXSKta", "EventPar");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../../FrameLog");
    var EventPar = function(_super) {
      __extends(EventPar, _super);
      function EventPar() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EventPar.prototype.on = function(type, handler, target, useCapture) {
        if (!type || !target) {
          FrameLog_1.default.error("\u4e8b\u4ef6\u5bf9\u8c61|\u7c7b\u578b\u4e3a\u7a7a===> type = ", type, "target =", target);
          return;
        }
        return _super.prototype.on.call(this, type, handler, target, useCapture);
      };
      EventPar.prototype.once = function(type, handler, target) {
        if (!type || !target) {
          FrameLog_1.default.error("\u4e8b\u4ef6\u5bf9\u8c61|\u7c7b\u578b\u4e3a\u7a7a===> type = ", type, "target =", target);
          return;
        }
        return _super.prototype.once.call(this, type, handler, target);
      };
      EventPar.prototype.off = function(type, handler, target) {
        if (!type || !target) {
          FrameLog_1.default.error("\u4e8b\u4ef6\u5bf9\u8c61|\u7c7b\u578b\u4e3a\u7a7a===> type = ", type, "target =", target);
          return;
        }
        return _super.prototype.off.call(this, type, handler, target);
      };
      EventPar.prototype.targetOff = function(target) {
        if (!target) {
          FrameLog_1.default.error("\u4e8b\u4ef6\u5bf9\u8c61===>  target =", target);
          return;
        }
        return _super.prototype.targetOff.call(this, target);
      };
      EventPar.prototype.emit = function(type, arg1, arg2, arg3, arg4, arg5) {
        return _super.prototype.emit.call(this, type, arg1, arg2, arg3, arg4, arg5);
      };
      return EventPar;
    }(cc.EventTarget);
    exports.default = EventPar;
    cc._RF.pop();
  }, {
    "../../FrameLog": "FrameLog"
  } ],
  FrameLog: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a6d4hK0/1Gy51Z4m4zWRms", "FrameLog");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Global_1 = require("./Global");
    var FrameLog = function() {
      function FrameLog() {}
      FrameLog.log = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        Global_1.default.IS_DEBUG && console.log.apply(cc.log, args);
      };
      FrameLog.warn = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        Global_1.default.IS_DEBUG && console.warn.apply(cc.warn, args);
      };
      FrameLog.error = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) args[_i] = arguments[_i];
        console.error.apply(cc.error, args);
      };
      return FrameLog;
    }();
    exports.default = FrameLog;
    cc._RF.pop();
  }, {
    "./Global": "Global"
  } ],
  Fruit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "70919X//c9PkayAaHHe8rAY", "Fruit");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tools_1 = require("../../Frame/Manager/Tools");
    var ResMgr_1 = require("../../Frame/Manager/ResMgr");
    var Global_1 = require("../../Frame/Global");
    var ccclass = cc._decorator.ccclass;
    var Fruit = function(_super) {
      __extends(Fruit, _super);
      function Fruit() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._boomJuice = null;
        return _this;
      }
      Fruit.prototype.onLoad = function() {
        var _this = this;
        ResMgr_1.default.setPrefabGame("fruit/juice").then(function(prefab) {
          _this._boomJuice = cc.instantiate(prefab);
        });
        this.node.children.forEach(function(node) {
          node.active = false;
        });
      };
      Fruit.prototype.boom = function() {
        var left = this.node.children[0];
        var right = this.node.children[1];
        var leftPoint = Tools_1.default.positionConversion(this.node.parent.parent.parent.getChildByName("Fragments"), left);
        var rightPoint = Tools_1.default.positionConversion(this.node.parent.parent.parent.getChildByName("Fragments"), right);
        var nodePoint = Tools_1.default.positionConversion(this.node.parent.parent.parent.getChildByName("Fragments"), this.node);
        var data = Tools_1.default.getColor(this.node.name);
        left.parent = this.node.parent.parent.parent.getChildByName("Fragments");
        right.parent = this.node.parent.parent.parent.getChildByName("Fragments");
        var Juice = left.parent.getChildByName("Juice");
        this._boomJuice.parent = this.node.parent.parent.parent.getChildByName("Fragments");
        this._boomJuice.color = this.node.color.fromHEX(data.color);
        this._boomJuice.active = true;
        this._boomJuice.setPosition(nodePoint);
        left.setPosition(leftPoint);
        right.setPosition(rightPoint);
        left.angle = 0;
        right.angle = 0;
        left.active = true;
        right.active = true;
        this.node.getComponent(cc.Sprite).enabled = false;
        cc.tween(left).bezierBy(.2, cc.v2(0, 100), cc.v2(200, 100), cc.v2(200, 50)).delay(.1).to(.3, {
          position: Juice.getPosition(),
          opacity: 0
        }, {
          easing: "smooth"
        }).start();
        cc.tween(right).bezierBy(.2, cc.v2(0, 100), cc.v2(-200, 100), cc.v2(-200, 50)).delay(.1).to(.3, {
          position: Juice.getPosition(),
          opacity: 0
        }, {
          easing: "smooth"
        }).call(function() {
          ResMgr_1.default.setSpriteGame(Juice.getChildByName("mask").getChildByName("sprite").getComponent(cc.Sprite), "game/juice/g" + data.index);
          var height = (Global_1.default.Cut.fruitSum - Global_1.default.Cut.curr_number) / Global_1.default.Cut.fruitSum * 300;
          cc.tween(Juice.getChildByName("mask")).to(.25, {
            height: height + 180
          }, {
            easing: "smooth"
          }).call(function() {
            if (300 === height) {
              cc.tween(Juice).by(1, {
                x: -300
              }, {
                easing: "elasticInOut"
              }).start();
              cc.tween(Juice.getChildByName("mask")).delay(1).to(0, {
                height: 0
              }).start();
            }
          }).start();
        }).start();
        cc.tween(this._boomJuice).delay(.3).to(1, {
          opacity: 0
        }, {
          easing: "smooth"
        }).start();
      };
      Fruit = __decorate([ ccclass ], Fruit);
      return Fruit;
    }(cc.Component);
    exports.default = Fruit;
    cc._RF.pop();
  }, {
    "../../Frame/Global": "Global",
    "../../Frame/Manager/ResMgr": "ResMgr",
    "../../Frame/Manager/Tools": "Tools"
  } ],
  GameDisplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c3076y4Y4hOJ6t/KXwawrNG", "GameDisplay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WatermelonUI = require("../../Frame/Manager/WatermelonUI");
    var ViewPanel_1 = require("../../Frame/Manager/UI/ViewPanel");
    var EventMgr_1 = require("../../Frame/Manager/Event/EventMgr");
    var EventData_1 = require("../../Frame/Manager/Event/EventData");
    var Global_1 = require("../../Frame/Global");
    var Tools_1 = require("../../Frame/Manager/Tools");
    var DisplayMgr_1 = require("../../Frame/Manager/DisplayMgr");
    var ViewMgr_1 = require("../../Frame/Manager/ViewMgr");
    var EndDisplay_1 = require("./EndDisplay");
    var SoundMgr_1 = require("../../Frame/Manager/SoundMgr");
    var LockMgr_1 = require("../../Frame/Manager/LockMgr");
    var ConstData_1 = require("../../Frame/Data/ConstData");
    var ActionMgr_1 = require("../../Frame/Manager/ActionMgr");
    var ResMgr_1 = require("../../Frame/Manager/ResMgr");
    var UI = require("GameUIKit");
    var ccclass = cc._decorator.ccclass;
    var GameDisplay = function(_super) {
      __extends(GameDisplay, _super);
      function GameDisplay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._paramData = {};
        _this._loadEpoch = 0;
        _this._uiAttached = false;
        _this._loadingFruit = true;
        _this._level = 1;
        _this._levelData = {};
        _this._superCut = false;
        _this._cuts = null;
        _this._targetPoint = [];
        _this._cutNumber = 0;
        _this._levelSum = 0;
        _this._levelIndex = 0;
        _this._Juice = null;
        _this._isCut = true;
        _this._Glass = null;
        _this._GameBegin = function() {
          EventMgr_1.default.instance().off(EventData_1.default.GAME_BEGIN, _this._GameBegin, _this);
        };
        _this._GameOver = function(isSuccess) {
          if (Global_1.default.isOver) return;
          Global_1.default.isOver = true;
          _this._paramData.isSuccess = isSuccess;
          _this._paramData.levelId = _this._level;
          Tools_1.default.vibrateLong();
          _this.scheduleOnce(function() {
            DisplayMgr_1.default.openUI(EndDisplay_1.default, ViewMgr_1.default.gameView, _this._paramData, function() {
              DisplayMgr_1.default.closeUI(GameDisplay_1, true, {
                is_emit: true
              });
            });
          }, ConstData_1.default.GAME.Over);
        };
        _this._EmitCut = function() {
          if (_this._loadingFruit || WatermelonUI.isInputBlocked(_this) || !_this._isCut) return;
          _this._cutNumber++;
          Global_1.default.Cut.thisCut = 0;
          _this._isCut = false;
          if (_this._superCut) _this._cuts.children.forEach(function(node, index) {
            SoundMgr_1.default.playAudioGame("cut");
            switch (index) {
             case 0:
              cc.tween(node).by(.5, {
                y: 1500,
                angle: 960
              }, {
                easing: "smooth"
              }).start();
              break;

             case 1:
              cc.tween(node).to(.5, {
                x: 530,
                y: 1600,
                angle: -960
              }, {
                easing: "smooth"
              }).start();
              break;

             case 2:
              cc.tween(node).by(.5, {
                x: -530,
                y: 1600,
                angle: -960
              }, {
                easing: "smooth"
              }).start();
            }
          }); else {
            ActionMgr_1.default.EmitCut(_this._cuts.children[0]);
            SoundMgr_1.default.playAudioGame("cut");
          }
          cc.tween(_this._Juice).to(.1, {
            position: cc.v3(-300, -560, 0)
          }, {
            easing: "elasticInOut"
          }).start();
          _this.scheduleOnce(function() {
            1 === _this._cutNumber && 0 === Global_1.default.Cut.curr_number && cc.tween(_this.getNode("Anim/1")).to(1, {
              position: cc.v3(230, 150, 0)
            }, {
              easing: "elasticInOut"
            }).delay(1).to(0, {
              position: cc.v3(700, 600, 0)
            }).start();
            WatermelonUI.resolveThrow(_this, Global_1.default.Cut.thisCut);
            var number = Global_1.default.Cut.thisCut;
            var node;
            if (number > 5) {
              node = _this.getNode("Anim/0");
              SoundMgr_1.default.playAudioGame("0");
            } else if (3 === number || 4 === number || 5 === number) {
              node = _this.getNode("Anim/" + number);
              SoundMgr_1.default.playAudioGame(String(number));
            } else if (number < 3) return;
            node.active = true;
            node.getComponent(dragonBones.ArmatureDisplay).playAnimation("Sprite", -1);
            _this.scheduleOnce(function() {
              node.active = false;
            }, 1);
          }, .6);
          _this.scheduleOnce(function() {
            (_this._levelData.hasOwnProperty(_this._levelIndex + 1) || 0 !== Global_1.default.Cut.curr_number) && _this._cuts.children.forEach(function(node, index) {
              node.setPosition(cc.v3(0, -1e3, 0));
              cc.tween(node).to(.5, {
                position: _this._targetPoint[index]
              }, {
                easing: "elasticInOut"
              }).start();
              var angle = 0;
              switch (index) {
               case 1:
                angle = -20;
                break;

               case 2:
                angle = 20;
              }
              node.angle = angle;
            });
            if (!Global_1.default.Cut.curr_number) {
              _this._levelIndex++;
              _this._creationLevel();
            }
            _this.scheduleOnce(function() {
              _this._isCut = true;
            }, .5);
          }, 2);
        };
        _this._checkCut = function(boolean) {
          _this._superCut = boolean;
          _this.getNode("There").active = !boolean;
          _this._cuts.children.forEach(function(node, index) {
            index > 0 && (node.active = boolean);
          });
        };
        _this._creationLevel = function() {
          var epoch = ++_this._loadEpoch;
          _this._loadingFruit = true;
          if (_this._levelData.hasOwnProperty(_this._levelIndex)) {
            _this._cutNumber = 0;
            var data_1 = _this._levelData[_this._levelIndex];
            var fruitCount = _this.getNode("Core").children.filter(function(_, index) {
              return -1 !== data_1.points.indexOf(index);
            }).length;
            Global_1.default.Cut.fruitSum = fruitCount;
            Global_1.default.Cut.curr_number = fruitCount;
            ResMgr_1.default.setPrefabGame("fruit/" + data_1.fruit).then(function(prefab) {
              if (!cc.isValid(_this.node) || !_this.node.activeInHierarchy || epoch !== _this._loadEpoch) return;
              _this.getNode("Core").children.forEach(function(parent, index) {
                if (-1 != data_1.points.indexOf(index)) {
                  var fruit = cc.instantiate(prefab);
                  fruit.parent = parent;
                  parent.getComponent(cc.Sprite).enabled = true;
                  fruit.setPosition(cc.v3(0, 0, 0));
                } else parent.getComponent(cc.Sprite).enabled = false;
              });
              data_1.points.forEach(function(value, index) {});
              _this._loadingFruit = false;
              if (!_this._uiAttached) {
                WatermelonUI.attachGame(_this);
                _this._uiAttached = !WatermelonUI.isInputBlocked(_this);
                _this._uiAttached || WatermelonUI.showResourceRetry(_this, function() {
                  return _this._creationLevel();
                });
              }
            }).catch(function() {
              cc.isValid(_this.node) && _this.node.activeInHierarchy && epoch === _this._loadEpoch && WatermelonUI.showResourceRetry(_this, function() {
                return _this._creationLevel();
              });
            });
          } else {
            _this.offTouch(_this.node);
            var close_1 = _this._Juice.getChildByName("button").getChildByName("close");
            var open_1 = _this._Juice.getChildByName("button").getChildByName("open");
            _this._Juice.setPosition(cc.v3(-1e3, -200));
            _this._Juice.scale = 1;
            var label_1 = _this._Juice.getChildByName("label");
            cc.tween(_this.getNode("BgBig")).to(1.8, {
              position: cc.v3(0, 0, 0)
            }, {
              easing: "elasticInOut"
            }).call(function() {
              cc.tween(_this._Juice).to(.8, {
                position: cc.v3(0, -200, 0)
              }, {
                easing: "elasticInOut"
              }).start();
            }).start();
            label_1.active = true;
            close_1.active = false;
            _this.onTouch(open_1, function() {
              _this.offTouch(open_1);
              label_1.active = false;
              close_1.active = true;
              var angle = 3;
              var time = .025;
              var data = Tools_1.default.getColor(_this._levelData[_this._levelIndex - 1].fruit);
              ResMgr_1.default.setSpriteGame(_this.getNode("Fragments/Glass/mask/sprite").getComponent(cc.Sprite), "game/juice/b" + data.index);
              cc.tween(_this._Juice.getChildByName("mask")).delay(.7).to(0, {
                height: 180
              }).to(2, {
                height: 480
              }, {
                easing: "smooth"
              }).start();
              cc.tween(_this._Juice).by(.4, {
                y: 50
              }, {
                easing: "elasticInOut"
              }).delay(.3).call(function() {
                SoundMgr_1.default.playAudioGame("juice");
              }).repeat(50, cc.tween().to(time, {
                angle: angle
              }, {
                easing: "smooth"
              }).to(time, {
                angle: 0
              }, {
                easing: "smooth"
              }).to(time, {
                angle: -angle
              }, {
                easing: "smooth"
              }).to(time, {
                angle: 0
              }, {
                easing: "smooth"
              })).delay(.3).by(.4, {
                y: -50
              }, {
                easing: "elasticInOut"
              }).to(1, {
                position: cc.v3(-1e3, -200)
              }, {
                easing: "elasticInOut"
              }).call(function() {
                cc.tween(_this._Glass).to(1, {
                  position: cc.v3(0, -200, 0)
                }, {
                  easing: "elasticInOut"
                }).call(function() {
                  cc.tween(_this._Glass.getChildByName("drink")).to(1, {
                    position: cc.v3(130, 113, 0)
                  }, {
                    easing: "quadOut"
                  }).start();
                }).delay(1.5).call(function() {
                  SoundMgr_1.default.playAudioGame("water");
                  cc.tween(_this._Glass.getChildByName("mask")).to(5, {
                    height: 0
                  }, {
                    easing: "quadIn"
                  }).call(function() {
                    _this.getNode("Anim/asset").active = true;
                    cc.tween(_this._Glass.getChildByName("drink")).to(1, {
                      position: cc.v3(130, 2113, 0)
                    }, {
                      easing: "quadOut"
                    }).start();
                  }).delay(1.2).repeat(25, cc.tween(_this._Glass.getChildByName("bg")).to(.01, {
                    angle: 5
                  }, {
                    easing: "elasticIn"
                  }).to(.01, {
                    angle: 0
                  }, {
                    easing: "elasticOut"
                  }).to(.01, {
                    angle: -5
                  }, {
                    easing: "elasticIn"
                  }).to(.01, {
                    angle: 0
                  }, {
                    easing: "elasticOut"
                  })).call(function() {
                    _this._GameOver(true);
                  }).start();
                }).start();
              }).start();
            });
          }
        };
        _this._checkCircle = function() {
          var node = _this.getNode("Core");
          var index = Tools_1.default.getRandom(1, 4);
          switch (index) {
           case 1:
            cc.tween(node).repeatForever(cc.tween().by(10, {
              angle: 360
            })).start();
            break;

           case 2:
            cc.tween(node).repeatForever(cc.tween().by(8, {
              angle: 360
            }).by(8, {
              angle: -360
            })).start();
            break;

           case 3:
            cc.tween(node).repeatForever(cc.tween().by(3, {
              angle: 180
            }).by(3, {
              angle: -180
            }).by(8, {
              angle: 360
            }).by(8, {
              angle: -360
            })).start();
          }
        };
        return _this;
      }
      GameDisplay_1 = GameDisplay;
      GameDisplay.getUrl = function() {
        return "gameDisplay";
      };
      GameDisplay.prototype.initUI = function() {
        var _this = this;
        Tools_1.default.getCollision(true);
        Global_1.default.isOver = false;
        this._level = Tools_1.default.getRandomLevel(20);
        this._levelData = Global_1.default.levelData[this._level];
        this._levelSum = this._levelData.lenght;
        this._levelIndex = 0;
        this._cuts = this.getNode("Cuts");
        this._cuts.children.forEach(function(node) {
          _this._targetPoint.push(node.getPosition());
        });
        this._Juice = this.getNode("Fragments/Juice");
        this._Glass = this.getNode("Fragments/Glass");
        this.onTouch(this.node, function() {
          _this._EmitCut();
        }, "check", 1);
        UI.wrapExisting(this.getNode("There"), function() {
          if (_this._superCut || _this._loadingFruit || Global_1.default.isOver || WatermelonUI.isInputBlocked(_this)) return;
          LockMgr_1.default.unLock(1, function() {
            cc.isValid(_this.node) && _this.node.activeInHierarchy && !Global_1.default.isOver && _this._checkCut(true);
          }, _this);
        });
        this.getNode("There").on(cc.Node.EventType.TOUCH_START, function(event) {
          return event.stopPropagation();
        }, this);
        this._checkCircle();
        this._creationLevel();
        var promotion = this.getNode("GameBox");
        promotion && (promotion.active = false);
      };
      GameDisplay.prototype.show = function(param) {
        SoundMgr_1.default.music();
        this._paramData = param || {};
        EventMgr_1.default.instance().on(EventData_1.default.GAME_BEGIN, this._GameBegin, this);
        this.playIn();
      };
      GameDisplay.prototype.hide = function(param) {
        this._loadEpoch++;
        WatermelonUI.disposeGame(this);
        EventMgr_1.default.instance().off(EventData_1.default.GAME_BEGIN, this._GameBegin, this);
      };
      GameDisplay.prototype.onDestroy = function() {
        this._loadEpoch++;
        WatermelonUI.disposeGame(this);
      };
      GameDisplay.prototype.playIn = function() {
        EventMgr_1.default.instance().emit(EventData_1.default.GAME_BEGIN);
      };
      GameDisplay.prototype.playOut = function() {};
      var GameDisplay_1;
      GameDisplay = GameDisplay_1 = __decorate([ ccclass ], GameDisplay);
      return GameDisplay;
    }(ViewPanel_1.default);
    exports.default = GameDisplay;
    cc._RF.pop();
  }, {
    "../../Frame/Data/ConstData": "ConstData",
    "../../Frame/Global": "Global",
    "../../Frame/Manager/ActionMgr": "ActionMgr",
    "../../Frame/Manager/DisplayMgr": "DisplayMgr",
    "../../Frame/Manager/Event/EventData": "EventData",
    "../../Frame/Manager/Event/EventMgr": "EventMgr",
    "../../Frame/Manager/LockMgr": "LockMgr",
    "../../Frame/Manager/ResMgr": "ResMgr",
    "../../Frame/Manager/SoundMgr": "SoundMgr",
    "../../Frame/Manager/Tools": "Tools",
    "../../Frame/Manager/UI/ViewPanel": "ViewPanel",
    "../../Frame/Manager/ViewMgr": "ViewMgr",
    "../../Frame/Manager/WatermelonUI": "WatermelonUI",
    "./EndDisplay": "EndDisplay",
    GameUIKit: "GameUIKit"
  } ],
  GameMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9a682q0odJKjKJvr9XvAcqp", "GameMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Global_1 = require("../Global");
    var EventMgr_1 = require("./Event/EventMgr");
    var EventData_1 = require("./Event/EventData");
    var WatermelonState_1 = require("./WatermelonState");
    var Tools_1 = require("./Tools");
    var GameMgr = function() {
      function GameMgr() {}
      GameMgr.updateWxUser = function(userInfo) {
        if (!userInfo) return;
        "string" === typeof userInfo.avatarUrl && (Global_1.default.userInfo.headimgurl = userInfo.avatarUrl);
        "string" === typeof userInfo.nickName && (Global_1.default.userInfo.nickname = userInfo.nickName);
        EventMgr_1.default.instance().emit(EventData_1.default.UPDATE_WX_USER_INFO);
      };
      GameMgr.updateAdvTime = function() {
        var unused = [];
        for (var _i = 0; _i < arguments.length; _i++) unused[_i] = arguments[_i];
      };
      GameMgr.updateAdvIn = function() {};
      GameMgr.pushAdv = function() {};
      GameMgr.pushUserAction = function() {
        var unused = [];
        for (var _i = 0; _i < arguments.length; _i++) unused[_i] = arguments[_i];
      };
      GameMgr.addLevel = function() {
        var next = JSON.parse(JSON.stringify(Global_1.default.extUserData));
        next.curr_level++;
        next.level = Math.max(next.level, next.curr_level);
        next.rank_level = next.level;
        var saved = WatermelonState_1.default.saveProgress(next);
        if (!saved.ok) return false;
        Global_1.default.extUserData = saved.data;
        Global_1.default.currLevel = 0;
        return true;
      };
      GameMgr.saveUserExtData = function(updateOption) {
        void 0 === updateOption && (updateOption = "local");
        var saved = WatermelonState_1.default.saveProgress(Global_1.default.extUserData);
        if (saved.ok) {
          Global_1.default.extUserData = saved.data;
          return true;
        }
        var previous = WatermelonState_1.default.loadProgress();
        previous.ok && (Global_1.default.extUserData = previous.data);
        Tools_1.default.showToast(saved.error);
        return false;
      };
      GameMgr.changeShareScore = function(score) {
        var next = JSON.parse(JSON.stringify(Global_1.default.extUserData));
        next.share_score += score;
        var saved = WatermelonState_1.default.saveProgress(next);
        if (!saved.ok) return false;
        Global_1.default.extUserData = saved.data;
        EventMgr_1.default.instance().emit(EventData_1.default.CHANGE_UNLOCK_TYPE);
        return true;
      };
      return GameMgr;
    }();
    exports.default = GameMgr;
    cc._RF.pop();
  }, {
    "../Global": "Global",
    "./Event/EventData": "EventData",
    "./Event/EventMgr": "EventMgr",
    "./Tools": "Tools",
    "./WatermelonState": "WatermelonState"
  } ],
  GameUIKit: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "48cddUfQQ5JgKzWw4yXU6eO", "GameUIKit");
    "use strict";
    function createGameUIKit(E) {
      var Kit = {
        version: "1.1.8",
        kit: "GameUIKit"
      };
      var cfg = {
        tapGuardMs: 500,
        closeMinSize: 104,
        maskColor: [ 24, 22, 32 ],
        maskOpacity: 130,
        fadeMs: 160,
        toastMs: 2200,
        toastTop: .22,
        toastFontSize: 30,
        toastTextColor: [ 255, 255, 255 ],
        toastOutlineColor: [ 70, 52, 40 ],
        toastBgColor: [ 48, 40, 52 ],
        toastBgOpacity: 210,
        closeFrame: null,
        toastFrame: null,
        allowStretch: false,
        sfx: null,
        digitFrames: null,
        stackPopups: true,
        disabledText: "Not available yet",
        audio: null,
        onPageOpen: null,
        pageRegistry: "auto"
      };
      var OFF_TINT = [ 110, 110, 110 ];
      var WHITE = [ 255, 255, 255 ];
      var navEpoch = 1;
      var activeEndPages = {
        revive: null,
        result: null
      };
      function currentNavEpoch() {
        return navEpoch;
      }
      function bumpNavEpoch() {
        navEpoch += 1;
        return navEpoch;
      }
      Kit.navEpoch = currentNavEpoch;
      Kit.bumpNavEpoch = bumpNavEpoch;
      var FRAME_KEYS = {
        closeFrame: 1,
        toastFrame: 1,
        digitFrames: 1
      };
      var frameStore = {
        closeFrame: null,
        toastFrame: null,
        digitFrames: null
      };
      var bootClose = null;
      var frameIssues = [];
      function eachFrame(v, fn) {
        if (!v || "object" !== typeof v) return;
        if ("function" === typeof v.getRect || "rect" in v || "texture" in v || "_texture" in v) {
          fn(v);
          return;
        }
        for (var k in v) Object.prototype.hasOwnProperty.call(v, k) && eachFrame(v[k], fn);
      }
      function holdFrame(f) {
        try {
          f && "function" === typeof f.addRef && f.addRef();
        } catch (e) {}
      }
      function dropFrame(f) {
        try {
          f && "function" === typeof f.decRef && f.decRef(false);
        } catch (e) {}
      }
      function usable(f) {
        if (!f) return false;
        if ("function" === typeof E.frameUsable) try {
          return !!E.frameUsable(f);
        } catch (e) {
          return false;
        }
        return true;
      }
      function frameIssue(where, f) {
        for (var i = 0; i < frameIssues.length; i++) if (frameIssues[i].frame === f && frameIssues[i].where === where) return;
        var name = f && (f.name || f._name) || "frame";
        var m = "GameUIKit: " + where + ' picture "' + name + '" was released (a page changed config() and its prefab was freed); using the fallback';
        frameIssues.push({
          where: where,
          name: name,
          frame: f
        });
        E.warn(m);
      }
      Object.keys(FRAME_KEYS).forEach(function(k) {
        Object.defineProperty(cfg, k, {
          enumerable: true,
          configurable: true,
          get: function get() {
            return frameStore[k];
          },
          set: function set(v) {
            var old = frameStore[k];
            if (old === v) return;
            eachFrame(v, holdFrame);
            frameStore[k] = v;
            eachFrame(old, dropFrame);
            if ("closeFrame" === k && !bootClose && usable(v)) {
              bootClose = v;
              holdFrame(v);
            }
          }
        });
      });
      function closePicture(o) {
        if (false === o.closeFrame) return {
          frame: null,
          drawn: false
        };
        var want = o.closeFrame || cfg.closeFrame;
        if (!want) return {
          frame: null,
          drawn: false
        };
        if (usable(want)) return {
          frame: want,
          drawn: false
        };
        frameIssue("close", want);
        var back = bootClose && bootClose !== want && usable(bootClose) ? bootClose : null;
        if (want === cfg.closeFrame && back) {
          holdFrame(back);
          frameStore.closeFrame = back;
        }
        if (back) return {
          frame: back,
          drawn: false
        };
        return {
          frame: null,
          drawn: true
        };
      }
      Kit.frameIssues = function() {
        return frameIssues.map(function(x) {
          return {
            where: x.where,
            name: x.name
          };
        });
      };
      Kit.setup = function(o) {
        o = o || {};
        for (var k in o) Object.prototype.hasOwnProperty.call(o, k) && (cfg[k] = o[k]);
        return Kit;
      };
      Kit.config = function(o) {
        o && "object" === typeof o && Kit.setup(o);
        return cfg;
      };
      function safeCall(fn, a, b) {
        if ("function" !== typeof fn) return;
        try {
          return fn(a, b);
        } catch (e) {
          E.warn("GameUIKit callback failed: " + (e && e.message));
        }
        return;
      }
      function sfx(id) {
        var a = cfg.audio;
        var play = "function" === typeof cfg.sfx ? cfg.sfx : a && "function" === typeof a.playSfx ? function(x) {
          return a.playSfx(x);
        } : null;
        if (!play) return;
        try {
          play(id);
        } catch (e) {
          E.warn('GameUIKit sfx "' + id + '" failed: ' + (e && e.message));
        }
      }
      Kit._sfx = sfx;
      function pageHook(info, node, closeNode) {
        bumpNavEpoch();
        Kit.clearToast({
          page: true
        });
        recordPage(info, node, closeNode);
        if ("function" !== typeof cfg.onPageOpen) return;
        try {
          cfg.onPageOpen(info);
        } catch (e) {
          E.warn("GameUIKit onPageOpen failed: " + (e && e.message));
        }
      }
      function nodePath(node) {
        var names = [];
        try {
          for (var n = node; n && n.parent; n = n.parent) names.unshift(n.name);
        } catch (e) {
          return "";
        }
        return names.join("/");
      }
      function pageStore() {
        if (false === cfg.pageRegistry) return null;
        var g = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : null;
        if (!g) return null;
        var r = g.__pageRegistry;
        if (r && "function" === typeof r.record) return r;
        var on = true === cfg.pageRegistry || !!g.__QA_PAGES;
        try {
          true, true;
          on = true;
        } catch (e) {}
        if (!on) return null;
        var store = {}, order = [];
        r = g.__pageRegistry = {
          kit: "GameUIKit",
          pathOf: nodePath,
          list: function list() {
            return order.map(function(id) {
              return store[id];
            });
          },
          reset: function reset() {
            store = {};
            order = [];
          },
          record: function record(i) {
            var id = String(i && (i.id || i.name || i.node) || "").trim();
            if (!id) return null;
            var row = store[id];
            if (!row) {
              row = store[id] = {
                id: id,
                name: i.name || id,
                kind: i.kind || "popup",
                node: i.node || "",
                close: i.close || null,
                buttons: [],
                ad: [],
                opened: 0
              };
              order.push(id);
            }
            row.opened += 1;
            [ "buttons", "ad" ].forEach(function(k) {
              (i[k] || []).forEach(function(p) {
                p && row[k].indexOf(p) < 0 && row[k].push(p);
              });
            });
            i.close && (row.close = i.close);
            return row;
          }
        };
        return r;
      }
      function recordPage(info, node, closeNode) {
        try {
          var reg = info && pageStore();
          if (!reg) return;
          var path = node ? nodePath(node) : "";
          reg.record({
            id: info.id || info.page || info.name,
            name: info.name,
            kind: info.kind,
            node: path,
            close: closeNode ? nodePath(closeNode) : info.close && path ? path + "/" + info.close : info.close || null,
            buttons: (info.buttons || []).map(String),
            ad: (info.ads || []).map(function(a) {
              return "string" === typeof a ? a : a && (a.slot || a.placementKey) || "";
            })
          });
        } catch (e) {
          E.warn("GameUIKit page record failed: " + (e && e.message));
        }
      }
      Kit._pageHook = pageHook;
      Kit.recordPage = function(info, node, closeNode) {
        pageHook(info, node, closeNode);
      };
      function isThenable(v) {
        return !!v && "function" === typeof v.then;
      }
      function guard(ms, fn) {
        var last = -Infinity;
        return function(ev) {
          var t = E.now();
          if (t - last < ms) return;
          last = t;
          fn(ev);
        };
      }
      Kit._guard = guard;
      function frameSize(frame, w, h) {
        var s = frame ? E.frameSize(frame) : {
          width: 0,
          height: 0
        };
        if (w && !h && s.width > 0) return {
          width: w,
          height: Math.round(s.height * w / s.width)
        };
        if (h && !w && s.height > 0) return {
          width: Math.round(s.width * h / s.height),
          height: h
        };
        return {
          width: w || s.width,
          height: h || s.height
        };
      }
      Kit.fitTrim = function(root) {
        if (!root || "function" !== typeof E.fitTrim || !E.isValid(root)) return 0;
        var changed = 0;
        (function visit(n) {
          E.fitTrim(n) && changed++;
          var c = E.children(n);
          for (var i = 0; i < c.length; i++) visit(c[i]);
        })(root);
        return changed;
      };
      function fitTrimSoon(root) {
        "function" === typeof E.beforeDraw && E.beforeDraw(function() {
          Kit.fitTrim(root);
        });
      }
      function pictureChild(parent, name, frame, w, h) {
        if (frame && !usable(frame)) {
          frameIssue(name, frame);
          frame = null;
        }
        var n = E.node(name, parent);
        var s = frameSize(frame, w, h);
        if (frame && w && h && !cfg.allowStretch) {
          var fs = E.frameSize(frame);
          if (fs.width > 0 && fs.height > 0) {
            var k = Math.min(w / fs.width, h / fs.height);
            Math.abs(fs.width / fs.height / (w / h) - 1) > .02 && (s = {
              width: Math.round(fs.width * k),
              height: Math.round(fs.height * k)
            });
          }
        }
        frame && E.sprite(n, frame);
        E.size(n, s.width, s.height);
        return n;
      }
      function drawnClose(closeNode, size) {
        var icon = E.node("Icon", closeNode);
        E.size(icon, size, size);
        var plate = E.node("Plate", icon);
        E.roundRect(plate, size, size, size / 2, [ 70, 52, 40 ], 235);
        for (var i = 0; i < 2; i++) {
          var bar = E.node("Bar" + i, icon);
          E.roundRect(bar, Math.round(.56 * size), Math.max(6, Math.round(.13 * size)), Math.max(3, Math.round(.065 * size)), [ 255, 255, 255 ], 255);
          "function" === typeof E.setAngle && E.setAngle(bar, i ? -45 : 45);
        }
        return icon;
      }
      function pressFeedback(target) {
        pressTint(target);
      }
      function titleSizeOf(o) {
        var t = o.titleSize;
        if (Array.isArray(t)) return {
          width: t[0] || 0,
          height: t[1] || 0
        };
        if (t && "object" === typeof t) return {
          width: t.width || 0,
          height: t.height || 0
        };
        return {
          width: o.titleWidth || 0,
          height: o.titleHeight || 0
        };
      }
      Kit.popup = function(parent, o) {
        o = o || {};
        if (o.panelFrame && !usable(o.panelFrame) || o.titleFrame && !usable(o.titleFrame)) {
          var o2 = {};
          for (var ok in o) Object.prototype.hasOwnProperty.call(o, ok) && (o2[ok] = o[ok]);
          if (o2.panelFrame && !usable(o2.panelFrame)) {
            frameIssue("panel", o2.panelFrame);
            o2.panelFrame = null;
          }
          if (o2.titleFrame && !usable(o2.titleFrame)) {
            frameIssue("title", o2.titleFrame);
            o2.titleFrame = null;
          }
          o = o2;
        }
        parent = parent || E.sceneRoot();
        var win = E.winSize();
        var state = "open";
        var gen = 1;
        var listeners = [];
        var root = E.node(o.name || "GameUIPopup", parent);
        E.size(root, win.width, win.height);
        E.toTop(root);
        var mask = E.node("Mask", root);
        var maskAlpha = "number" === typeof o.maskOpacity ? o.maskOpacity : cfg.maskOpacity;
        E.rect(mask, 3 * win.width, 3 * win.height, o.maskColor || cfg.maskColor, maskAlpha);
        E.blockInput(mask);
        var maskTarget = 255;
        var panel;
        if (o.panelFrame && (o.panelSliced || o.panelInsets)) {
          var pf = E.frameSize(o.panelFrame);
          var ins = o.panelInsets || E.getInsets(o.panelFrame);
          ins && (ins[0] || ins[1] || ins[2] || ins[3]) || (ins = [ Math.round(.3 * pf.width), Math.round(.3 * pf.height), Math.round(.3 * pf.width), Math.round(.3 * pf.height) ]);
          E.setInsets(o.panelFrame, ins);
          panel = E.node("Panel", root);
          E.sprite(panel, o.panelFrame, true);
          E.size(panel, o.width || pf.width, o.height || pf.height);
        } else panel = pictureChild(root, "Panel", o.panelFrame, o.width, o.height);
        var ps = E.getSize(panel);
        var body = E.node("Body", panel);
        E.size(body, ps.width, ps.height);
        var titleNode = null;
        var closePic = closePicture(o);
        var closeFrameT = closePic.frame;
        if (o.titleFrame) {
          var tsz = titleSizeOf(o);
          var tw0 = tsz.width, th0 = tsz.height;
          if (!tw0 && !th0 && closeFrameT && false !== o.titleFit) {
            var tfs = E.frameSize(o.titleFrame), cfs = E.frameSize(closeFrameT);
            var cHit = Math.max(cfg.closeMinSize, o.closeSize || cfs.width, o.closeSize || cfs.height);
            var ci0 = "number" === typeof o.closeInset ? o.closeInset : 6;
            var maxTW = ps.width - 2 * (cHit + ci0) - 8;
            if (maxTW > 0 && tfs.width > maxTW) {
              tw0 = Math.round(maxTW);
              th0 = Math.round(tfs.height * maxTW / tfs.width);
            }
          }
          titleNode = pictureChild(panel, "Title", o.titleFrame, tw0, th0);
          var ts = E.getSize(titleNode);
          var inset = "number" === typeof o.titleInset ? o.titleInset : Math.round(.05 * ps.height);
          E.pos(titleNode, 0, ps.height / 2 - ts.height / 2 - inset + (o.titleOffsetY || 0));
        }
        var closeNode = null;
        var closeFrame = closePic.frame;
        if (closeFrame || closePic.drawn) {
          var cs = closeFrame ? frameSize(closeFrame, o.closeSize, o.closeSize) : {
            width: o.closeSize || 72,
            height: o.closeSize || 72
          };
          var hit = Math.max(cfg.closeMinSize, cs.width, cs.height);
          closeNode = E.node("Close", panel);
          E.size(closeNode, hit, hit);
          closeFrame ? pictureChild(closeNode, "Icon", closeFrame, cs.width, cs.height) : drawnClose(closeNode, cs.width);
          var ci = "number" === typeof o.closeInset ? o.closeInset : 6;
          E.pos(closeNode, ps.width / 2 - hit / 2 - ci, ps.height / 2 - hit / 2 - ci);
          E.onTap(closeNode, guard(cfg.tapGuardMs, function() {
            if ("open" !== state) return;
            pressFeedback(closeNode);
            tapClose();
          }), currentNavEpoch);
        }
        var closeHandler = "function" === typeof o.onCloseTap ? o.onCloseTap : null;
        function tapClose() {
          closeHandler ? safeCall(closeHandler, handle) : handle.close();
        }
        o.closeOnMask && E.onTap(mask, guard(cfg.tapGuardMs, function() {
          "open" === state && tapClose();
        }), currentNavEpoch);
        function playIn() {
          sfx("ui_popup_open");
          E.setOpacity(mask, 0);
          E.tweenOpacity(mask, maskTarget, cfg.fadeMs);
          E.setScale(panel, .92);
          E.setOpacity(panel, 0);
          E.tweenOpacity(panel, 255, cfg.fadeMs);
          E.tweenScale(panel, 1, cfg.fadeMs);
        }
        var handle = {
          root: root,
          body: body,
          panel: panel,
          mask: mask,
          titleNode: titleNode,
          closeNode: closeNode,
          maskAlpha: maskAlpha,
          isOpen: function isOpen() {
            return "open" === state && E.isValid(root);
          },
          onClose: function onClose(fn) {
            "function" === typeof fn && listeners.push(fn);
            return handle;
          },
          guard: function guard(cb) {
            if ("function" !== typeof cb) throw new Error("GameUIKit popup.guard: not a function");
            var mine = gen;
            return function(a, b, c) {
              if (mine !== gen || "open" !== state || !E.isValid(root)) return;
              return cb(a, b, c);
            };
          },
          close: function close(fn) {
            if ("function" === typeof fn) {
              closeHandler = fn;
              return handle;
            }
            if ("open" !== state) return false;
            state = "closing";
            bumpNavEpoch();
            unstack(handle);
            sfx("ui_popup_close");
            E.tweenOpacity(mask, 0, cfg.fadeMs);
            E.tweenOpacity(panel, 0, cfg.fadeMs);
            gen++;
            E.tweenScale(panel, .92, cfg.fadeMs, function() {
              state = "closed";
              E.setActive(root, false);
              o.keep || E.destroy(root);
              var list = listeners;
              listeners = [];
              for (var i = 0; i < list.length; i++) safeCall(list[i], handle);
            });
            return true;
          },
          open: function open() {
            if (!o.keep || "open" === state || !E.isValid(root)) return false;
            state = "open";
            gen++;
            bumpNavEpoch();
            E.setActive(root, true);
            E.toTop(root);
            playIn();
            stack(handle, o);
            fitTrimSoon(root);
            _openings++;
            false !== o.pageHook && pageHook(popupInfo(), root, closeNode);
            refreshFrom(o, handle);
            return true;
          },
          openings: function openings() {
            return _openings;
          }
        };
        var _openings = 1;
        function popupInfo() {
          return {
            kind: "popup",
            id: o.pageId || o.page || o.name || "GameUIPopup",
            page: o.page || null,
            name: o.name || "GameUIPopup",
            buttons: (o.buttons || []).slice(),
            slots: [],
            close: closeNode ? "Close" : null,
            ads: (o.ads || []).slice(),
            opening: _openings
          };
        }
        bumpNavEpoch();
        playIn();
        stack(handle, o);
        fitTrimSoon(root);
        false !== o.pageHook && pageHook(popupInfo(), root, closeNode);
        refreshFrom(o, handle);
        return handle;
      };
      function refreshFrom(o, handle) {
        if ("function" !== typeof o.refresh) return;
        var saved = null;
        try {
          saved = o.store && "function" === typeof o.store.get ? o.store.get() : null;
        } catch (e) {
          saved = null;
        }
        try {
          o.refresh(saved, handle);
        } catch (e) {
          E.warn('GameUIKit refresh of "' + (o.name || o.pageId || "page") + '" failed: ' + (e && e.message));
        }
      }
      Kit._refreshFrom = refreshFrom;
      var popupStack = [];
      function stack(h, o) {
        if (!cfg.stackPopups || false === o.stack) return;
        popupStack.push(h);
        restack();
      }
      function unstack(h) {
        var i = popupStack.indexOf(h);
        if (i < 0) return;
        popupStack.splice(i, 1);
        restack();
      }
      function alive(h) {
        if (!h.adopted) return h.isOpen();
        try {
          return !!h.spec.isOpen();
        } catch (e) {
          E.warn("GameUIKit adoptPopup isOpen failed: " + (e && e.message));
          return false;
        }
      }
      function cover(h, covered) {
        if (h.covered === covered) return;
        h.covered = covered;
        try {
          h.spec.setCovered(covered);
        } catch (e) {
          E.warn("GameUIKit adoptPopup setCovered failed: " + (e && e.message));
        }
      }
      function restack() {
        var live = [];
        for (var d = 0; d < popupStack.length; d++) alive(popupStack[d]) ? live.push(popupStack[d]) : popupStack[d].adopted && cover(popupStack[d], false);
        popupStack = live;
        for (var i = 0; i < popupStack.length; i++) {
          var h = popupStack[i], top = i === popupStack.length - 1;
          if (h.adopted) {
            cover(h, !top);
            continue;
          }
          [ [ "mask", h.mask ], [ "close", h.closeNode ] ].forEach(function(pair) {
            var n = pair[1], key = "__uiStackHid_" + pair[0];
            if (!n || !E.isValid(n)) return;
            if (!top && E.isActive(n)) {
              E.setActive(n, false);
              h[key] = true;
            } else if (top && h[key]) {
              E.setActive(n, true);
              h[key] = false;
            }
          });
        }
      }
      Kit.openPopups = function() {
        restack();
        return popupStack.slice();
      };
      Kit.adoptPopup = function(spec) {
        if (!spec || "function" !== typeof spec.isOpen || "function" !== typeof spec.setCovered) throw new Error("GameUIKit adoptPopup: needs {isOpen: function, setCovered: function}");
        var noop = function noop() {
          return false;
        };
        if (!cfg.stackPopups || false === spec.stack) return noop;
        for (var j = popupStack.length - 1; j >= 0; j--) {
          var old = popupStack[j];
          if (old.adopted && old.spec.isOpen === spec.isOpen) {
            popupStack.splice(j, 1);
            cover(old, false);
            old.released = true;
          }
        }
        var h = {
          adopted: true,
          kit: "external",
          spec: spec,
          covered: false,
          released: false,
          isOpen: function isOpen() {
            return !h.released && alive(h);
          }
        };
        bumpNavEpoch();
        popupStack.push(h);
        restack();
        return function release() {
          if (h.released) return false;
          h.released = true;
          bumpNavEpoch();
          var i = popupStack.indexOf(h);
          i >= 0 && popupStack.splice(i, 1);
          cover(h, false);
          restack();
          return true;
        };
      };
      function cellFrame(info, cx, cy, cw, ch) {
        var tl = (info.orig.width - info.rect.width) / 2 + info.offset.x;
        var tt = (info.orig.height - info.rect.height) / 2 - info.offset.y;
        var x0 = Math.max(cx, tl), x1 = Math.min(cx + cw, tl + info.rect.width);
        var y0 = Math.max(cy, tt), y1 = Math.min(cy + ch, tt + info.rect.height);
        if (x1 <= x0 || y1 <= y0) {
          x0 = tl;
          x1 = tl + 1;
          y0 = tt;
          y1 = tt + 1;
        }
        return E.makeFrame(info.texture, {
          x: info.rect.x + (x0 - tl),
          y: info.rect.y + (y0 - tt),
          width: x1 - x0,
          height: y1 - y0
        }, {
          x: (x0 + x1) / 2 - (cx + cw / 2),
          y: -((y0 + y1) / 2 - (cy + ch / 2))
        }, {
          width: cw,
          height: ch
        });
      }
      var NARROW = {
        ":": .5,
        "/": .72,
        ".": .45,
        ",": .45,
        "-": .7
      };
      Kit.stripFrames = function(frame, o) {
        o = o || {};
        var info = E.frameInfo(frame);
        if (!info) {
          E.warn("GameUIKit.stripFrames: not a SpriteFrame");
          return o.chars ? {} : [];
        }
        info.rotated && E.warn("GameUIKit.stripFrames: rotated atlas frames are not supported, export the strip as its own PNG");
        var chars = o.chars ? String(o.chars) : null;
        var rects = o.rects;
        if (!rects) {
          var n = chars ? chars.length : o.count || 1;
          var rows = o.rows || 1, perRow = Math.ceil(n / rows);
          var cw = info.orig.width / perRow, ch = info.orig.height / rows;
          rects = [];
          var narrow = chars && o.narrow ? o.narrow : null;
          for (var i = 0; i < n; i++) {
            var cx = i % perRow * cw, k = 1;
            if (narrow) {
              var c0 = chars.charAt(i);
              "string" === typeof narrow ? k = narrow.indexOf(c0) >= 0 ? NARROW[c0] || .6 : 1 : "number" === typeof narrow[c0] && (k = narrow[c0]);
              k > 0 && k <= 1 || (k = 1);
            }
            rects.push([ cx + cw * (1 - k) / 2, Math.floor(i / perRow) * ch, cw * k, ch ]);
          }
        }
        var out = chars ? {} : [];
        for (var k = 0; k < rects.length; k++) {
          var r = rects[k];
          var f = cellFrame(info, r[0], r[1], r[2], r[3]);
          chars ? out[chars.charAt(k)] = f : out.push(f);
        }
        return out;
      };
      Kit.fontFrames = function(font, chars) {
        var cfgF = font && (font._fntConfig || font.fntConfig);
        var frame = font && (font.spriteFrame || font._spriteFrame);
        if (!cfgF || !cfgF.fontDefDictionary || !frame) {
          E.warn("GameUIKit.fontFrames: font has no parsed config or picture");
          return {};
        }
        var info = E.frameInfo(frame);
        var defs = cfgF.fontDefDictionary, out = {};
        for (var code in defs) {
          if (!Object.prototype.hasOwnProperty.call(defs, code)) continue;
          var ch = String.fromCharCode(+code);
          if (chars && String(chars).indexOf(ch) < 0) continue;
          var r = defs[code].rect;
          if (!r || !r.width || !r.height) continue;
          out[ch] = cellFrame(info, r.x, r.y, r.width, r.height);
        }
        return out;
      };
      Kit.toneFor = function(rgb) {
        var l = (.299 * rgb[0] + .587 * rgb[1] + .114 * rgb[2]) / 255;
        return l > .6 ? "dark" : "light";
      };
      var toastState = {
        node: null,
        bg: null,
        label: null,
        timer: null,
        text: ""
      };
      function ensureToast() {
        var t = toastState;
        if (t.node && E.isValid(t.node)) return t;
        var root = E.sceneRoot();
        t.node = E.node("GameUIToast", root);
        t.bg = E.node("Bg", t.node);
        if (cfg.toastFrame && !usable(cfg.toastFrame)) {
          frameIssue("toast", cfg.toastFrame);
          frameStore.toastFrame = null;
        }
        cfg.toastFrame && E.sprite(t.bg, cfg.toastFrame, true);
        t.labelNode = E.node("Text", t.node);
        t.label = E.label(t.labelNode, cfg.toastFontSize, cfg.toastTextColor, cfg.toastOutlineColor);
        return t;
      }
      Kit.toast = function(text, o) {
        if (!text) return null;
        o = o || {};
        text = String(text);
        /[^\x00-\x7F]/.test(text) && E.warn("GameUIKit.toast: non-ASCII text shown in game: " + text);
        var t = ensureToast();
        var win = E.winSize();
        var maxW = Math.min(.84 * win.width, 640);
        E.setActive(t.node, true);
        E.toTop(t.node);
        var sz = E.setLabel(t.labelNode, t.label, text, maxW);
        var bw = sz.width + 56, bh = sz.height + 30;
        E.size(t.node, bw, bh);
        cfg.toastFrame && E.spriteFrameOf(t.bg) ? E.size(t.bg, bw, bh) : E.roundRect(t.bg, bw, bh, Math.min(bh / 2, 28), cfg.toastBgColor, cfg.toastBgOpacity);
        E.pos(t.node, 0, win.height * (.5 - cfg.toastTop));
        t.timer && t.timer();
        E.setOpacity(t.node, 0);
        E.tweenOpacity(t.node, 255, 120);
        t.text = text;
        t.keepOnPage = !!o.keepOnPage;
        var ms = "number" === typeof o.ms ? o.ms : cfg.toastMs;
        t.timer = E.later(ms, function() {
          t.timer = null;
          if (!E.isValid(t.node)) return;
          E.tweenOpacity(t.node, 0, 200, function() {
            E.isValid(t.node) && E.setActive(t.node, false);
            t.text = "";
          });
        });
        return t.node;
      };
      Kit.toastText = function() {
        return toastState.node && E.isValid(toastState.node) ? toastState.text : "";
      };
      Kit.clearToast = function(o) {
        var t = toastState;
        if (!t.node || !E.isValid(t.node) || !t.text) return false;
        if (o && o.page && t.keepOnPage) return false;
        if (t.timer) {
          t.timer();
          t.timer = null;
        }
        E.setActive(t.node, false);
        t.text = "";
        return true;
      };
      Kit.digits = function(parent, o) {
        o = o || {};
        var sets = cfg.digitFrames || {};
        var frames = o.atlasFrames || sets[o.tone || "light"] || sets.light || sets.dark || {};
        var n = E.node(o.name || "Digits", parent);
        var glyphs = [];
        var _value = "";
        var spacing0 = o.spacing || 0, spacing = spacing0;
        var align = o.align || "center";
        function frameFor(ch) {
          if (Array.isArray(frames)) return /[0-9]/.test(ch) ? frames[+ch] : null;
          return frames[ch] || null;
        }
        function set(v) {
          _value = String(v);
          spacing = spacing0;
          var x = 0, used = 0, maxH = 0, placed = [];
          for (var i = 0; i < _value.length; i++) {
            var f = frameFor(_value.charAt(i));
            if (f && !usable(f)) {
              frameIssue("digit", f);
              f = null;
            }
            if (!f) {
              E.warn('GameUIKit.digits: no picture for "' + _value.charAt(i) + '"');
              continue;
            }
            var g = glyphs[used];
            if (g) {
              E.setFrame(g, f);
              E.setActive(g, true);
            } else {
              g = E.node("G" + used, n);
              E.sprite(g, f);
              glyphs.push(g);
            }
            var fs = E.frameSize(f);
            var h = o.height || fs.height;
            var w = fs.width * (h / (fs.height || 1));
            E.size(g, w, h);
            placed.push({
              node: g,
              w: w,
              h: h
            });
            x += w + (placed.length > 1 ? spacing : 0);
            h > maxH && (maxH = h);
            used++;
          }
          for (var j = used; j < glyphs.length; j++) E.setActive(glyphs[j], false);
          var total = x;
          if (o.maxWidth && total > o.maxWidth) {
            var k = o.maxWidth / total, sp = spacing * k;
            total = 0;
            maxH = 0;
            for (var q = 0; q < placed.length; q++) {
              placed[q].w *= k;
              placed[q].h *= k;
              E.size(placed[q].node, placed[q].w, placed[q].h);
              total += placed[q].w + (q > 0 ? sp : 0);
              placed[q].h > maxH && (maxH = placed[q].h);
            }
            spacing = sp;
          }
          var start = "left" === align ? 0 : "right" === align ? -total : -total / 2;
          var cur = start;
          for (var k = 0; k < placed.length; k++) {
            E.pos(placed[k].node, cur + placed[k].w / 2, 0);
            cur += placed[k].w + spacing;
          }
          E.size(n, total, maxH);
          return handle;
        }
        var handle = {
          node: n,
          set: set,
          value: function value() {
            return _value;
          },
          glyphCount: function glyphCount() {
            return glyphs.length;
          }
        };
        set(void 0 === o.value ? 0 : o.value);
        return handle;
      };
      var PRESS_TINT = [ 200, 200, 200 ];
      function boxOf(node, art) {
        var s = E.getSize(node);
        if (s.width > 0 && s.height > 0) return s;
        var a = art || node, visual = E.getSize(a);
        if (!(visual.width > 0) || !(visual.height > 0)) {
          var f = E.spriteFrameOf(a), fs = f ? E.frameSize(f) : {
            width: 0,
            height: 0
          };
          visual = {
            width: visual.width > 0 ? visual.width : fs.width,
            height: visual.height > 0 ? visual.height : fs.height
          };
        }
        a !== node && (visual = E.artSizeIn(node, a, visual.width, visual.height));
        return {
          width: s.width > 0 ? s.width : visual.width,
          height: s.height > 0 ? s.height : visual.height
        };
      }
      function pressTint(target) {
        if (!target || !E.isValid(target)) return;
        E.tint(target, PRESS_TINT);
        E.later(90, function() {
          E.isValid(target) && E.tint(target, WHITE);
        });
      }
      Kit.button = function(node, handler, o) {
        o = o || {};
        if (!node || !E.isValid(node)) throw new Error("GameUIKit.button: no valid node" + (o.name ? " for " + o.name : ""));
        if ("function" !== typeof handler) throw new Error('GameUIKit.button: handler of "' + (o.name || E.nameOf(node)) + '" is ' + (null === handler ? "null" : typeof handler) + " - pass the function itself (this.onRevive.bind(this)), not a name or an undefined method");
        "boolean" === typeof o.active && E.setActive(node, o.active);
        var art = o.art || null;
        var box = {
          width: o.width || 0,
          height: o.height || 0
        };
        if (!box.width || !box.height) {
          var b0 = boxOf(node, art);
          box.width = box.width || b0.width;
          box.height = box.height || b0.height;
        }
        if (o.close) {
          box.width = Math.max(box.width, cfg.closeMinSize);
          box.height = Math.max(box.height, cfg.closeMinSize);
        }
        E.size(node, box.width, box.height);
        E.setScale(node, 1);
        var enabled = false !== o.enabled, fn = handler, disposed = false;
        var feedback = art || node;
        function paint() {
          E.isValid(feedback) && E.tint(feedback, enabled ? WHITE : OFF_TINT);
        }
        var handle = {
          node: node,
          art: art,
          isEnabled: function isEnabled() {
            return enabled;
          },
          setEnabled: function setEnabled(b) {
            enabled = !!b;
            paint();
            return handle;
          },
          setHandler: function setHandler(f) {
            if ("function" !== typeof f) throw new Error("GameUIKit.button.setHandler: not a function");
            fn = f;
            return handle;
          },
          tap: function tap() {
            onTap();
          },
          dispose: function dispose() {
            disposed = true;
          }
        };
        var onTap = guard("number" === typeof o.guardMs ? o.guardMs : cfg.tapGuardMs, function() {
          if (disposed || !E.isValid(node) || !E.isActiveInHierarchy(node)) return;
          if (!enabled) {
            "" !== o.disabledText && Kit.toast(o.disabledText || cfg.disabledText);
            safeCall(o.onDisabledTap, handle);
            return;
          }
          pressTint(feedback);
          sfx(o.sfx || "ui_button_tap");
          try {
            fn(handle);
          } catch (e) {
            E.warn('GameUIKit.button "' + (o.name || E.nameOf(node)) + '" handler failed: ' + (e && e.message));
          }
        });
        E.onTap(node, onTap, currentNavEpoch);
        E.lockSize(node);
        paint();
        return handle;
      };
      Kit.wrapExisting = function(node, handler, o) {
        o = o || {};
        if ("function" !== typeof handler) throw new Error('GameUIKit.wrapExisting: handler of "' + (o.name || node && E.nameOf(node)) + '" is ' + typeof handler);
        if (!node || !E.isValid(node)) throw new Error("GameUIKit.wrapExisting: no valid node");
        var old = E.takeButton(node);
        var opts = {};
        for (var k in o) Object.prototype.hasOwnProperty.call(o, k) && (opts[k] = o[k]);
        var h = Kit.button(node, handler, opts);
        h.oldClickEvents = old;
        return h;
      };
      Kit.newButton = function(parent, handler, o) {
        o = o || {};
        if ("boolean" !== typeof o.active) throw new Error('GameUIKit.newButton "' + (o.name || "Button") + '": give opts.active (true, or false for a button shown later, like the pause key before the run starts)');
        if (!(o.w > 0) || !(o.h > 0)) throw new Error('GameUIKit.newButton "' + (o.name || "Button") + '": give opts.w and opts.h');
        var n = E.node(o.name || "Button", parent || E.sceneRoot());
        E.setActive(n, o.active);
        E.size(n, o.w, o.h);
        E.pos(n, o.x || 0, o.y || 0);
        var art = o.frame ? pictureChild(n, "Art", o.frame, o.w, o.h) : null;
        var opts = {};
        for (var k in o) Object.prototype.hasOwnProperty.call(o, k) && (opts[k] = o[k]);
        opts.art = art;
        opts.width = o.w;
        opts.height = o.h;
        return Kit.button(n, handler, opts);
      };
      Kit.iconValue = function(parent, o) {
        o = o || {};
        if (!(o.w > 0) || !(o.h > 0)) throw new Error("GameUIKit.iconValue: give opts.w and opts.h, the size of the cell");
        var row = E.node(o.name || "IconValue", parent || E.sceneRoot());
        E.size(row, o.w, o.h);
        (o.x || o.y) && E.pos(row, o.x || 0, o.y || 0);
        var iw = o.iconW || o.h, ih = o.iconH || iw, gap = "number" === typeof o.gap ? o.gap : 8;
        var free = o.w - iw - gap;
        if (!(free > 0)) throw new Error("GameUIKit.iconValue: no room for the number (w " + o.w + ", iconW " + iw + ", gap " + gap + ")");
        var icon = o.icon ? pictureChild(row, "Icon", o.icon, iw, ih) : E.node("Icon", row);
        o.icon || E.size(icon, iw, ih);
        E.pos(icon, -o.w / 2 + iw / 2, 0);
        var numberX = -o.w / 2 + iw + gap + free / 2;
        var sets = cfg.digitFrames || {};
        var useDigits = void 0 !== o.digits ? !!o.digits : !!(sets.light || sets.dark || o.atlasFrames);
        var number, _value2 = "";
        if (useDigits) {
          number = Kit.digits(row, {
            name: "Number",
            tone: o.tone,
            atlasFrames: o.atlasFrames,
            height: o.digitHeight || Math.round(.7 * o.h),
            maxWidth: free,
            align: "center",
            value: void 0 === o.value ? 0 : o.value
          });
          E.pos(number.node, numberX, 0);
        } else {
          var ln = E.node("Number", row);
          E.size(ln, free, o.h);
          E.pos(ln, numberX, 0);
          var lab = E.textLabel(ln, {
            overflow: "SHRINK",
            wrap: false,
            align: "CENTER",
            fontSize: o.fontSize || Math.round(.6 * o.h),
            lineHeight: o.h,
            font: o.font || null,
            color: o.color || WHITE,
            outline: o.outline || null,
            text: ""
          });
          number = {
            node: ln,
            label: lab,
            set: function set(v) {
              lab.string = String(v);
            }
          };
        }
        var handle = {
          node: row,
          icon: icon,
          number: number,
          numberBox: {
            x: numberX,
            w: free
          },
          value: function value() {
            return _value2;
          },
          set: function set(v) {
            _value2 = String(void 0 === v || null === v ? "" : v);
            number.set(_value2);
            return handle;
          }
        };
        handle.set(void 0 === o.value ? 0 : o.value);
        return handle;
      };
      Kit.valueLabel = function(node, o) {
        o = o || {};
        if (!node || !E.isValid(node)) throw new Error("GameUIKit.valueLabel: no valid node");
        if (void 0 === o.longest || null === o.longest || "" === String(o.longest)) throw new Error('GameUIKit.valueLabel: give opts.longest, the longest value "' + E.nameOf(node) + '" will show (e.g. "100%", "999999", "00:00:00")');
        var label = E.labelOf(node) || E.label(node, o.fontSize || 30, o.color || WHITE, o.outline || null);
        o.fontSize && (label.fontSize = o.fontSize);
        var longest = String(o.longest);
        var fs0 = label.fontSize || 30;
        var w = E.textWidth(node, label, longest);
        w > 0 || (w = longest.length * fs0 * .6);
        w = Math.ceil(w + ("number" === typeof o.pad ? o.pad : 8));
        o.maxWidth && w > o.maxWidth && (w = o.maxWidth);
        var h = o.height || label.lineHeight || Math.round(1.25 * fs0);
        E.fixLabel(node, label, w, h);
        var handle = {
          node: node,
          label: label,
          width: w,
          height: h,
          longest: longest,
          set: function set(v) {
            label.string = String(v);
            return handle;
          }
        };
        handle.set(void 0 === o.value ? label.string || "" : o.value);
        return handle;
      };
      var PAGE_SLOTS = {
        pause: [ {
          name: "resume",
          x: 0,
          y: .14,
          text: "RESUME",
          need: true
        }, {
          name: "restart",
          x: 0,
          y: -.02,
          text: "RESTART",
          need: true
        }, {
          name: "home",
          x: 0,
          y: -.18,
          text: "HOME",
          need: true
        }, {
          name: "extra",
          x: 0,
          y: -.34,
          text: ""
        } ],
        revive: [ {
          name: "watchAd",
          x: 0,
          y: .02,
          text: "REVIVE",
          ad: true,
          need: true
        }, {
          name: "noThanks",
          x: 0,
          y: -.15,
          text: "NO THANKS",
          need: true
        }, {
          name: "extra",
          x: 0,
          y: -.32,
          text: ""
        } ],
        result: [ {
          name: "double",
          x: 0,
          y: .06,
          text: "x2 CLAIM",
          ad: true
        }, {
          name: "claim",
          x: 0,
          y: -.1,
          text: "CLAIM",
          need: true
        }, {
          name: "home",
          x: -.24,
          y: -.26,
          text: "HOME",
          half: true,
          need: true
        }, {
          name: "next",
          x: .24,
          y: -.26,
          text: "NEXT",
          half: true,
          need: true
        }, {
          name: "extra",
          x: 0,
          y: -.41,
          text: ""
        } ]
      };
      Kit.pageSlots = function(kind) {
        return (PAGE_SLOTS[kind] || []).map(function(s) {
          return s.name;
        });
      };
      function boxesMeet(a, b) {
        return 2 * Math.abs(a.x - b.x) < a.w + b.w && 2 * Math.abs(a.y - b.y) < a.h + b.h;
      }
      function makePage(kind, parent, o) {
        o = o || {};
        var defs = PAGE_SLOTS[kind];
        var session = o.session || null;
        if (session && ("function" !== typeof session.pause || "function" !== typeof session.newRun)) throw new Error("GameUIKit." + kind + "Page: opts.session must be a RunSession (parts/RunSession.js)");
        var popupOpts = {
          name: o.name || "GameUI" + kind.charAt(0).toUpperCase() + kind.slice(1) + "Page",
          keep: true,
          panelFrame: o.panelFrame,
          panelSliced: o.panelSliced,
          panelInsets: o.panelInsets,
          titleFrame: o.titleFrame,
          titleSize: o.titleSize,
          titleWidth: o.titleWidth,
          titleHeight: o.titleHeight,
          titleInset: o.titleInset,
          titleOffsetY: o.titleOffsetY,
          titleFit: o.titleFit,
          width: o.width || 560,
          height: o.height || 900,
          maskColor: o.maskColor,
          maskOpacity: o.maskOpacity,
          closeFrame: "result" === kind ? o.closeFrame || false : o.closeFrame,
          closeSize: o.closeSize,
          pageHook: false
        };
        var popup = Kit.popup(parent, popupOpts);
        var ps = E.getSize(popup.panel);
        var info = E.node("Info", popup.body);
        E.size(info, .86 * ps.width, .2 * ps.height);
        E.pos(info, 0, .27 * ps.height);
        var slotW = o.slotWidth || Math.min(380, Math.round(.7 * ps.width));
        var slotH = o.slotHeight || 110;
        var slots = {}, order = [];
        defs.forEach(function(d) {
          var w = d.half ? Math.min(slotW, Math.round(.42 * ps.width)) : slotW;
          var s = {
            name: d.name,
            def: d,
            x: Math.round(d.x * ps.width),
            y: Math.round(d.y * ps.height),
            w: w,
            h: slotH,
            handle: null,
            ad: false,
            placementKey: null
          };
          order.forEach(function(other) {
            if (boxesMeet(s, other)) throw new Error("GameUIKit." + kind + "Page: slots " + other.name + " and " + s.name + " overlap; make the panel taller");
          });
          slots[d.name] = s;
          order.push(s);
        });
        var page = {
          kind: kind,
          popup: popup,
          root: popup.root,
          body: popup.body,
          panel: popup.panel,
          info: info,
          grantMode: null,
          state: {
            claimed: false,
            busy: false
          }
        };
        var release = null;
        var opening = 0;
        var unsubscribePolicy = null;
        function adEnabled() {
          try {
            return !o.ads || "function" !== typeof o.ads.isEnabled || true === o.ads.isEnabled();
          } catch (e) {
            return false;
          }
        }
        function refreshAdPolicy() {
          if (!o.ads || "function" !== typeof o.ads.refreshPolicy) return;
          try {
            var p = o.ads.refreshPolicy();
            p && "function" === typeof p["catch"] && p["catch"](function() {});
          } catch (e) {}
        }
        function detachPolicy() {
          if (unsubscribePolicy) {
            var off = unsubscribePolicy;
            unsubscribePolicy = null;
            off();
          }
        }
        function paintAdPolicy() {
          if (!E.isValid(popup.root) || !popup.isOpen()) {
            detachPolicy();
            return;
          }
          if (page.state.busy) return;
          var allowed = adEnabled();
          order.forEach(function(s) {
            if (!s.ad || !s.handle || !E.isValid(s.handle.node)) return;
            if (allowed || s.policyHidden) {
              if (allowed && s.policyHidden) {
                s.policyHidden = false;
                E.setActive(s.handle.node, s.policyWasActive);
                s.handle.setEnabled(s.policyWasEnabled);
              }
            } else {
              s.policyHidden = true;
              s.policyWasActive = E.isActive(s.handle.node);
              s.policyWasEnabled = s.handle.isEnabled();
              s.handle.setEnabled(false);
              E.setActive(s.handle.node, false);
            }
          });
        }
        function attachPolicy() {
          if (!unsubscribePolicy && o.ads && "function" === typeof o.ads.subscribePolicy) {
            unsubscribePolicy = o.ads.subscribePolicy(paintAdPolicy) || null;
            popup.onClose(detachPolicy);
          }
          paintAdPolicy();
          refreshAdPolicy();
        }
        function hold() {
          session && !release && (release = session.pause("popup"));
        }
        function letGo() {
          if (release) {
            var r = release;
            release = null;
            r();
          }
        }
        function adCount() {
          return order.filter(function(s) {
            return s.ad && s.handle;
          }).length;
        }
        function hasAds() {
          return !!(o.ads && "function" === typeof o.ads.request || "function" === typeof o.runAd);
        }
        function fill(slotName, spec, handler) {
          var s = slots[slotName];
          if (!s) throw new Error("GameUIKit." + kind + 'Page: no slot "' + slotName + '"; slots are ' + Kit.pageSlots(kind).join(", "));
          if (s.handle) throw new Error("GameUIKit." + kind + 'Page: slot "' + slotName + '" is taken; use an empty slot (' + order.filter(function(x) {
            return !x.handle;
          }).map(function(x) {
            return x.name;
          }).join(", ") + ")");
          spec = spec || {};
          if (spec.ad) {
            if (adCount() > 0) throw new Error("GameUIKit." + kind + "Page: one ad button per page (revive and result x2 are two screens)");
            if (!hasAds()) throw new Error("GameUIKit." + kind + 'Page: slot "' + slotName + '" is an ad button: pass opts.ads (the platform RewardedService instance) or opts.runAd');
          }
          var n = E.node(slotName, popup.body);
          E.size(n, s.w, s.h);
          E.pos(n, s.x, s.y);
          var art = null;
          spec.frame && (art = pictureChild(n, "Art", spec.frame, s.w, s.h));
          var text = void 0 !== spec.text ? spec.text : s.def.text;
          if (spec.textFrame) {
            pictureChild(n, "Text", spec.textFrame, s.w - 24, s.h - 16);
            text = "";
          } else text && E.warn("GameUIKit." + kind + 'Page: button "' + slotName + '" word drawn with a font; pass buttons.' + slotName + '.textFrame (whole-word picture) or a frame with the word on it and text: ""');
          if (text) {
            var tn = E.node("Text", n);
            var tl = E.label(tn, spec.fontSize || 34, spec.textColor || WHITE, spec.outline || null);
            E.setLabel(tn, tl, String(text), s.w - 24);
          }
          s.ad = !!spec.ad;
          s.placementKey = spec.placementKey || null;
          s.handle = Kit.button(n, handler, {
            name: kind + "." + slotName,
            art: art,
            width: s.w,
            height: s.h,
            close: false
          });
          paintAdPolicy();
          return s.handle;
        }
        function record() {
          return {
            kind: "page",
            id: o.pageId || kind,
            page: kind,
            name: popupOpts.name,
            opening: opening,
            buttons: order.filter(function(s) {
              return s.handle;
            }).map(function(s) {
              return s.name;
            }),
            slots: order.map(function(s) {
              return s.name;
            }),
            close: popup.closeNode ? "Close" : null,
            ads: order.filter(function(s) {
              return s.ad && s.handle;
            }).map(function(s) {
              return {
                slot: s.name,
                placementKey: s.placementKey
              };
            })
          };
        }
        page.addButton = function(slotName, spec, handler) {
          if ("function" === typeof spec && void 0 === handler) {
            handler = spec;
            spec = {};
          }
          var h = fill(slotName, spec, handler);
          return h;
        };
        page.button = function(slotName) {
          var s = slots[slotName];
          return s ? s.handle : null;
        };
        page.slot = function(slotName) {
          var s = slots[slotName];
          return s ? {
            name: s.name,
            x: s.x,
            y: s.y,
            width: s.w,
            height: s.h,
            taken: !!s.handle
          } : null;
        };
        page.isOpen = function() {
          return popup.isOpen();
        };
        page.isHolding = function() {
          return !!release;
        };
        page.close = function() {
          detachPolicy();
          letGo();
          return popup.close();
        };
        page.open = function() {
          if (!popup.open()) return false;
          opening++;
          page.state = {
            claimed: false,
            busy: false
          };
          hold();
          pageHook(record(), popup.root, popup.closeNode);
          refreshFrom(o, page);
          attachPolicy();
          return true;
        };
        page.dispose = function() {
          detachPolicy();
          letGo();
        };
        page.guard = function(cb) {
          return popup.guard(cb);
        };
        page.record = record;
        popup.close(function() {
          "function" === typeof page._back ? page._back() : page.close();
        });
        page._runAd = function(slotName, onRewarded) {
          if (page.state.busy) return null;
          refreshAdPolicy();
          if (!adEnabled()) {
            paintAdPolicy();
            return null;
          }
          var st = page.state;
          st.busy = true;
          var s = slots[slotName];
          var adRelease = session ? session.pause("ad") : null;
          var req = {
            placementKey: s.placementKey || o.placementKey,
            ownerId: o.ownerId || "gameui-" + kind,
            isCurrent: function isCurrent() {
              return popup.isOpen() && page.state === st;
            }
          };
          var settled = false;
          function finish(r) {
            if (settled) return;
            settled = true;
            st.busy = false;
            if (adRelease) {
              adRelease();
              adRelease = null;
            }
            if (!popup.isOpen() || page.state !== st) return;
            paintAdPolicy();
            if (r && true === r.rewarded) {
              onRewarded(r);
              return;
            }
            false !== o.toast && ("function" !== typeof o.runAd || r && false === r.feedbackShown) && Kit.toast(r && r.message || "No reward was claimed.");
          }
          try {
            "function" === typeof o.runAd ? o.runAd(o.ads, {
              placementKey: req.placementKey,
              ownerId: req.ownerId,
              isCurrent: req.isCurrent
            }, finish) : Promise.resolve(o.ads.request(req)).then(finish, function(e) {
              E.warn("GameUIKit." + kind + "Page: ad request failed " + (e && e.message));
              finish({
                status: "error",
                rewarded: false,
                message: "The video could not open. Please try again."
              });
            });
          } catch (e) {
            finish({
              status: "error",
              rewarded: false,
              message: "The video could not open. Please try again."
            });
          }
          return true;
        };
        var key = o.currency || "coins";
        "result" === kind && (o.store && "function" === typeof o.store.grant ? page.grantMode = "grant" : o.store && "function" === typeof o.store.update ? page.grantMode = "update" : page.grantMode = "callback");
        page._pay = function(amount, doubled) {
          if (page.state.claimed) return true;
          if (page.state.earned) {
            amount = page.state.earned.amount;
            doubled = page.state.earned.doubled;
          } else doubled && (page.state.earned = {
            amount: amount,
            doubled: true
          });
          var add = {};
          add[key] = amount;
          var res;
          if ("grant" === page.grantMode) {
            var owed = page.state.earned;
            var id = owed && Object.prototype.hasOwnProperty.call(owed, "grantId") ? owed.grantId : "function" === typeof o.grantId ? o.grantId(session) : o.grantId || (session ? "run:" + session.run + ":result" : null);
            owed && (owed.grantId = id);
            res = o.store.grant({
              id: id,
              add: add,
              apply: o.applyReward
            }, function() {});
          } else if ("update" === page.grantMode) res = o.store.update(function(d) {
            var v = Number(d[key]);
            d[key] = (isFinite(v) ? v : 0) + amount;
            "function" === typeof o.applyReward && o.applyReward(d);
          }); else {
            try {
              res = o.onReward(amount, doubled);
            } catch (e) {
              res = {
                ok: false,
                error: e && e.message
              };
            }
            void 0 !== res && true !== res || (res = {
              ok: true
            });
          }
          if (!res || true !== res.ok) {
            Kit.toast(o.saveFailText || "Could not save. Please try again.");
            return false;
          }
          page.state.claimed = true;
          page.state.earned = null;
          safeCall(o.onClaimed, {
            amount: amount,
            doubled: !!doubled,
            already: !!res.already,
            currency: key
          });
          return true;
        };
        page._fill = fill;
        page._slots = slots;
        page._open = function() {
          opening = 1;
          hold();
          pageHook(record(), popup.root, popup.closeNode);
          refreshFrom(o, page);
          attachPolicy();
        };
        return page;
      }
      function need(o, k, kind) {
        if ("function" !== typeof o[k]) throw new Error("GameUIKit." + kind + "Page: opts." + k + " must be a function (it is " + typeof o[k] + ")");
      }
      function specFor(o, slot) {
        return o.buttons && o.buttons[slot] || {};
      }
      function needAds(o, kind) {
        if (!(o.ads && "function" === typeof o.ads.request || "function" === typeof o.runAd)) throw new Error("GameUIKit." + kind + "Page: pass opts.ads (the platform RewardedService instance) or opts.runAd (AdBoostKit.runAd)");
      }
      Kit.pausePage = function(parent, o) {
        o = o || {};
        if (o.session && "function" !== typeof o.initRun) throw new Error("GameUIKit.pausePage: with a session, pass opts.initRun - Restart must rebuild the whole run (session.newRun(initRun))");
        if (!o.session) {
          need(o, "onRestart", "pause");
          E.warn("GameUIKit.pausePage without a RunSession: the game must pause and reset itself");
        }
        need(o, "onHome", "pause");
        var page = makePage("pause", parent, o);
        function resume() {
          page.close();
          safeCall(o.onResume);
        }
        page._back = resume;
        page._fill("resume", specFor(o, "resume"), resume);
        page._fill("restart", specFor(o, "restart"), function() {
          page.close();
          o.session && o.session.newRun(o.initRun);
          safeCall(o.onRestart, o.session ? o.session.state : void 0);
        });
        page._fill("home", specFor(o, "home"), function() {
          page.close();
          o.session && "function" === typeof o.session.resumeAll && o.session.resumeAll();
          safeCall(o.onHome);
        });
        page._open();
        return page;
      };
      Kit.revivePage = function(parent, o) {
        o = o || {};
        need(o, "onRevive", "revive");
        need(o, "onGiveUp", "revive");
        needAds(o, "revive");
        var targetParent = parent || E.sceneRoot();
        var liveRevive = activeEndPages.revive;
        if (!o.allowDuplicate && liveRevive && liveRevive._parent === targetParent && liveRevive.isOpen()) {
          E.warn("GameUIKit.revivePage: already open, duplicate end notification ignored");
          return liveRevive;
        }
        var page = makePage("revive", targetParent, o);
        page._parent = targetParent;
        activeEndPages.revive = page;
        function giveUp() {
          page.close();
          safeCall(o.onGiveUp);
        }
        page._back = giveUp;
        var ws = specFor(o, "watchAd");
        ws.ad = true;
        ws.placementKey = ws.placementKey || o.placementKey;
        page._fill("watchAd", ws, function() {
          page._runAd("watchAd", function(r) {
            page.close();
            o.session && "function" === typeof o.session.clearSettle && o.session.clearSettle();
            safeCall(o.onRevive, r);
          });
        });
        page._fill("noThanks", specFor(o, "noThanks"), function() {
          page.state.busy || giveUp();
        });
        page._open();
        return page;
      };
      Kit.resultPage = function(parent, o) {
        o = o || {};
        need(o, "onNext", "result");
        need(o, "onHome", "result");
        false !== o["double"] && needAds(o, "result");
        if (!(o.store && ("function" === typeof o.store.grant || "function" === typeof o.store.update)) && "function" !== typeof o.onReward) throw new Error("GameUIKit.resultPage: pass opts.store (the SaveStore) or opts.onReward, so the reward is saved");
        var targetParent = parent || E.sceneRoot();
        var liveResult = activeEndPages.result;
        if (!o.allowDuplicate && liveResult && liveResult._parent === targetParent && liveResult.isOpen()) {
          E.warn("GameUIKit.resultPage: already open, duplicate end notification ignored");
          return liveResult;
        }
        var page = makePage("result", targetParent, o);
        page._parent = targetParent;
        activeEndPages.result = page;
        var amount = Math.max(0, Math.round(Number(o.amount) || 0));
        page._back = null;
        if (false !== o["double"]) {
          var ds = specFor(o, "double");
          ds.ad = true;
          ds.placementKey = ds.placementKey || o.placementKey;
          page._fill("double", ds, function() {
            if (page.state.claimed) return;
            if (page.state.earned) {
              page._pay(2 * amount, true);
              return;
            }
            page._runAd("double", function() {
              page._pay(2 * amount, true);
            });
          });
        }
        page._fill("claim", specFor(o, "claim"), function() {
          page.state.busy || page._pay(amount, false);
        });
        function leave(fn) {
          return function() {
            if (page.state.busy) return;
            if (!page._pay(amount, false)) return;
            page.close();
            safeCall(fn);
          };
        }
        page._fill("home", specFor(o, "home"), leave(o.onHome));
        page._fill("next", specFor(o, "next"), leave(o.onNext));
        page._open();
        return page;
      };
      var TEXT_OVERFLOW = {
        shrink: "SHRINK",
        clamp: "CLAMP",
        resize: "RESIZE_HEIGHT"
      };
      Kit.text = function(parent, o) {
        o = o || {};
        var ov = TEXT_OVERFLOW[String(o.overflow || "shrink").toLowerCase()];
        if (!ov) throw new Error("GameUIKit.text: overflow must be shrink, clamp or resize (got " + o.overflow + "): with NONE the text resizes the node");
        if (!(o.w > 0)) throw new Error("GameUIKit.text: give opts.w, the width of the text box (the slot, not the text)");
        if ("RESIZE_HEIGHT" !== ov && !(o.h > 0)) throw new Error('GameUIKit.text: give opts.h, or overflow: "resize" for a box that grows downwards');
        var fs0 = o.fontSize || 28;
        var lh = o.lineHeight || Math.round(1.25 * fs0);
        var n = E.node(o.name || "Text", parent || E.sceneRoot());
        E.size(n, o.w, o.h || lh);
        (o.x || o.y) && E.pos(n, o.x || 0, o.y || 0);
        var label = E.textLabel(n, {
          overflow: ov,
          wrap: false !== o.wrap,
          align: String(o.align || "center").toUpperCase(),
          fontSize: fs0,
          lineHeight: lh,
          font: o.font || null,
          color: o.color || WHITE,
          outline: o.outline || null,
          text: void 0 === o.text || null === o.text ? "" : String(o.text)
        });
        var handle = {
          node: n,
          label: label,
          width: o.w,
          set: function set(t) {
            label.string = void 0 === t || null === t ? "" : String(t);
            return handle;
          }
        };
        return handle;
      };
      Kit.guide = function(target, o) {
        o = o || {};
        if (!target || !E.isValid(target)) throw new Error("GameUIKit.guide: no valid target node");
        var parent = o.parent || E.sceneRoot();
        var root = E.node(o.name || "GameUIGuide", parent);
        E.toTop(root);
        var art = o.frame ? pictureChild(root, "Art", o.frame, o.w, o.h) : null;
        o.blockInput && E.blockInput(root);
        var open = true, stop = null;
        function relayout() {
          if (!open) return false;
          if (!E.isValid(target) || !E.isValid(root)) {
            handle.close();
            return false;
          }
          var c = E.worldCenter(target);
          var p = E.toLocal(parent, c.x, c.y);
          E.pos(root, p.x + (o.offsetX || 0), p.y + (o.offsetY || 0));
          var s = E.getSize(target);
          E.size(root, s.width, s.height);
          var show = E.isActiveInHierarchy(target);
          E.isActive(root) !== show && E.setActive(root, show);
          return true;
        }
        var handle = {
          node: root,
          art: art,
          relayout: relayout,
          isOpen: function isOpen() {
            return open && E.isValid(root);
          },
          close: function close() {
            if (!open) return false;
            open = false;
            if (stop) {
              stop();
              stop = null;
            }
            E.isValid(root) && E.destroy(root);
            return true;
          }
        };
        stop = E.eachLayout(relayout);
        relayout();
        return handle;
      };
      Kit._reset = function() {
        navEpoch = 1;
        activeEndPages = {
          revive: null,
          result: null
        };
        popupStack = [];
        toastState = {
          node: null,
          bg: null,
          label: null,
          timer: null,
          text: ""
        };
      };
      return Kit;
    }
    function makeGameUIAdapter24(cc) {
      var zCounter = 2e4;
      function touchIdOf(ev) {
        if (!ev) return 0;
        if ("function" === typeof ev.getID) return ev.getID();
        if (ev.touch && "function" === typeof ev.touch.getID) return ev.touch.getID();
        return 0;
      }
      function touchObjOf(ev) {
        if (!ev || "object" !== typeof ev) return null;
        if ("function" === typeof ev.getTouch) return ev.getTouch() || ev;
        return ev.touch || ev;
      }
      function bindSafeTap(n, fn, getEpoch) {
        var ET = cc && cc.Node && cc.Node.EventType;
        var TE = ET && ET.TOUCH_END;
        var TS = ET && ET.TOUCH_START;
        var TC = ET && ET.TOUCH_CANCEL;
        if (!TS) {
          n.on(TE, fn);
          return;
        }
        var armed = false, armedId = 0, startEpoch = 0;
        function disarm() {
          armed = false;
        }
        cc.game && cc.game.EVENT_HIDE && "function" === typeof cc.game.on && cc.game.on(cc.game.EVENT_HIDE, disarm, n);
        n.on("active-in-hierarchy-changed", disarm, n);
        n.on(TS, function(ev) {
          var ep = "function" === typeof getEpoch ? getEpoch() : 0;
          armed && startEpoch !== ep && disarm();
          if (armed) return;
          var tObj = touchObjOf(ev);
          if (tObj) if (void 0 === tObj.__uiEpochAtStart) tObj.__uiEpochAtStart = ep; else if (tObj.__uiEpochAtStart !== ep) {
            armed = false;
            return;
          }
          armed = true;
          armedId = touchIdOf(ev);
          startEpoch = ep;
        });
        TC && n.on(TC, function(ev) {
          armed && touchIdOf(ev) === armedId && disarm();
        });
        n.on(TE, function(ev) {
          if (!armed || touchIdOf(ev) !== armedId) return;
          var ep = "function" === typeof getEpoch ? getEpoch() : 0;
          var okEpoch = startEpoch === ep;
          armed = false;
          if (!okEpoch) return;
          fn(ev);
        });
      }
      function rgb(c, a) {
        return new cc.Color(c[0], c[1], c[2], void 0 === a ? 255 : a);
      }
      function tw(n, key, t) {
        var bag = n.__uiTw || (n.__uiTw = {});
        if (bag[key]) try {
          bag[key].stop();
        } catch (_) {}
        bag[key] = t;
        return t;
      }
      function walk(n, fn) {
        fn(n);
        var c = n.children || [];
        for (var i = 0; i < c.length; i++) walk(c[i], fn);
      }
      function sizeOf(f) {
        var r = f.getRect ? f.getRect() : null, o = f.getOriginalSize ? f.getOriginalSize() : null;
        var tex = f.getTexture ? f.getTexture() : f._texture;
        if (!r || !r.width) return o ? {
          width: o.width,
          height: o.height,
          byRect: false
        } : {
          width: 0,
          height: 0,
          byRect: true
        };
        var whole = !!(tex && o && o.width >= tex.width && o.height >= tex.height && (r.width < o.width || r.height < o.height));
        var byRect = !o || whole;
        var s = byRect ? r : o;
        return {
          width: s.width,
          height: s.height,
          byRect: byRect
        };
      }
      function trimFor(f) {
        return !f || sizeOf(f).byRect;
      }
      function simple(s) {
        return !s.type || s.type === cc.Sprite.Type.SIMPLE;
      }
      function measure(n, label) {
        try {
          "function" === typeof label._forceUpdateRenderData ? label._forceUpdateRenderData(true) : "function" === typeof label._updateRenderData && label._updateRenderData(true);
        } catch (_) {}
        return {
          width: n.width,
          height: n.height
        };
      }
      var E = {
        now: function now() {
          return Date.now();
        },
        later: function later(ms, fn) {
          var id = setTimeout(fn, ms);
          return function() {
            clearTimeout(id);
          };
        },
        warn: function warn(m) {
          cc.warn ? cc.warn(m) : "undefined" !== typeof console && console.warn(m);
        },
        node: function node(name, parent) {
          var n = new cc.Node(name);
          parent && parent.addChild(n);
          return n;
        },
        size: function size(n, w, h) {
          n.setContentSize(w, h);
        },
        getSize: function getSize(n) {
          return {
            width: n.width,
            height: n.height
          };
        },
        artSizeIn: function artSizeIn(host, art, w, h) {
          var minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
          for (var i = 0; i < 4; i++) {
            var world = art.convertToWorldSpaceAR(new cc.Vec2(1 & i ? w : 0, 2 & i ? h : 0));
            var p = host.convertToNodeSpaceAR(world);
            minX = Math.min(minX, p.x);
            maxX = Math.max(maxX, p.x);
            minY = Math.min(minY, p.y);
            maxY = Math.max(maxY, p.y);
          }
          return {
            width: maxX - minX,
            height: maxY - minY
          };
        },
        pos: function pos(n, x, y) {
          n.setPosition(x, y);
        },
        getPos: function getPos(n) {
          return {
            x: n.x,
            y: n.y
          };
        },
        frameInfo: function frameInfo(f) {
          if (!f || "function" !== typeof f.getRect) return null;
          var r = f.getRect(), o = f.getOffset ? f.getOffset() : {
            x: 0,
            y: 0
          }, s = f.getOriginalSize ? f.getOriginalSize() : r;
          return {
            texture: f.getTexture ? f.getTexture() : f._texture,
            rect: {
              x: r.x,
              y: r.y,
              width: r.width,
              height: r.height
            },
            offset: {
              x: o.x,
              y: o.y
            },
            orig: {
              width: s.width,
              height: s.height
            },
            rotated: !!(f.isRotated && f.isRotated())
          };
        },
        makeFrame: function makeFrame(tex, r, off, size) {
          return new cc.SpriteFrame(tex, new cc.Rect(r.x, r.y, r.width, r.height), false, new cc.Vec2(off.x, off.y), new cc.Size(size.width, size.height));
        },
        getInsets: function getInsets(f) {
          return [ f.insetLeft || 0, f.insetTop || 0, f.insetRight || 0, f.insetBottom || 0 ];
        },
        setInsets: function setInsets(f, i) {
          f.insetLeft = i[0];
          f.insetTop = i[1];
          f.insetRight = i[2];
          f.insetBottom = i[3];
        },
        isActive: function isActive(n) {
          return !!n.active;
        },
        frameSize: function frameSize(f) {
          var s = sizeOf(f);
          return {
            width: s.width,
            height: s.height
          };
        },
        sprite: function sprite(n, frame, sliced) {
          var s = n.addComponent(cc.Sprite);
          s.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sliced && (s.type = cc.Sprite.Type.SLICED);
          s.spriteFrame = frame;
          sliced || (s.trim = trimFor(frame));
          return s;
        },
        setFrame: function setFrame(n, frame) {
          var s = n.getComponent(cc.Sprite);
          if (!s) return;
          s.spriteFrame = frame;
          frame && simple(s) && (s.trim = trimFor(frame));
        },
        children: function children(n) {
          return n.children || [];
        },
        fitTrim: function fitTrim(n) {
          var s = n.getComponent && n.getComponent(cc.Sprite), f = s && s.spriteFrame;
          if (!f || !simple(s) || !(n.width > 0) || !(n.height > 0) || !f.getRect || !f.getOriginalSize) return false;
          var r = f.getRect(), o = f.getOriginalSize();
          if (!r || !o || !r.height || !o.height || Math.abs(r.width - o.width) < .5 && Math.abs(r.height - o.height) < .5) return false;
          var nr = n.width / n.height;
          var er = Math.abs(Math.log(nr / (r.width / r.height))), eo = Math.abs(Math.log(nr / (o.width / o.height)));
          if (Math.min(er, eo) > .1 || Math.abs(er - eo) < .01) return false;
          var want = er < eo;
          if (s.trim === want) return false;
          s.trim = want;
          return true;
        },
        beforeDraw: function beforeDraw(fn) {
          cc.director && "function" === typeof cc.director.once && cc.Director && cc.Director.EVENT_BEFORE_DRAW && cc.director.once(cc.Director.EVENT_BEFORE_DRAW, fn);
        },
        label: function label(n, fontSize, color, outline) {
          var l = n.addComponent(cc.Label);
          l.fontSize = fontSize;
          l.lineHeight = Math.round(1.25 * fontSize);
          l.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
          l.verticalAlign = cc.Label.VerticalAlign.CENTER;
          n.color = rgb(color);
          if (outline) {
            var o = n.addComponent(cc.LabelOutline);
            o.color = rgb(outline);
            o.width = 3;
          }
          return l;
        },
        setLabel: function setLabel(n, label, text, maxW) {
          label.overflow = cc.Label.Overflow.NONE;
          label.string = text;
          var s = measure(n, label);
          if (s.width > maxW) {
            label.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
            n.width = maxW;
            s = measure(n, label);
          }
          s.width || (s = {
            width: Math.min(maxW, text.length * label.fontSize * .55),
            height: label.lineHeight
          });
          return s;
        },
        labelOf: function labelOf(n) {
          return n && n.getComponent && n.getComponent(cc.Label) || null;
        },
        textWidth: function textWidth(n, label, text) {
          var keep = {
            string: label.string,
            overflow: label.overflow,
            w: n.width,
            h: n.height
          };
          label.overflow = cc.Label.Overflow.NONE;
          label.string = text;
          var s = measure(n, label);
          label.string = keep.string;
          label.overflow = keep.overflow;
          n.setContentSize(keep.w, keep.h);
          return s.width;
        },
        fixLabel: function fixLabel(n, label, w, h) {
          label.enableWrapText = false;
          label.overflow = cc.Label.Overflow.SHRINK;
          n.setContentSize(w, h);
        },
        textLabel: function textLabel(n, o) {
          var l = n.addComponent(cc.Label), HA = cc.Label.HorizontalAlign;
          l.overflow = cc.Label.Overflow[o.overflow];
          l.enableWrapText = !!o.wrap;
          l.horizontalAlign = void 0 !== HA[o.align] ? HA[o.align] : HA.CENTER;
          l.verticalAlign = cc.Label.VerticalAlign.CENTER;
          o.font && (l.font = o.font);
          l.fontSize = o.fontSize;
          l.lineHeight = o.lineHeight;
          n.color = rgb(o.color);
          if (o.outline) {
            var ol = n.addComponent(cc.LabelOutline);
            ol.color = rgb(o.outline);
            ol.width = 3;
          }
          l.string = o.text;
          return l;
        },
        worldCenter: function worldCenter(n) {
          var ax = "number" === typeof n.anchorX ? n.anchorX : .5, ay = "number" === typeof n.anchorY ? n.anchorY : .5;
          var p = n.convertToWorldSpaceAR(new cc.Vec2((.5 - ax) * n.width, (.5 - ay) * n.height));
          return {
            x: p.x,
            y: p.y
          };
        },
        toLocal: function toLocal(parent, x, y) {
          var p = parent.convertToNodeSpaceAR(new cc.Vec2(x, y));
          return {
            x: p.x,
            y: p.y
          };
        },
        eachLayout: function eachLayout(fn) {
          var d = cc.director, ev = cc.Director && cc.Director.EVENT_BEFORE_DRAW, v = cc.view, offs = [];
          if (d && ev && "function" === typeof d.on) {
            d.on(ev, fn);
            offs.push(function() {
              d.off(ev, fn);
            });
          }
          if (v && "function" === typeof v.on) {
            v.on("canvas-resize", fn);
            offs.push(function() {
              v.off("canvas-resize", fn);
            });
          }
          return function() {
            for (var i = 0; i < offs.length; i++) try {
              offs[i]();
            } catch (_) {}
          };
        },
        rect: function rect(n, w, h, color, alpha) {
          var g = n.getComponent(cc.Graphics) || n.addComponent(cc.Graphics);
          g.clear();
          g.fillColor = rgb(color, alpha);
          g.rect(-w / 2, -h / 2, w, h);
          g.fill();
          n.setContentSize(w, h);
        },
        roundRect: function roundRect(n, w, h, r, color, opacity) {
          var g = n.getComponent(cc.Graphics) || n.addComponent(cc.Graphics);
          g.clear();
          g.fillColor = rgb(color, opacity);
          g.roundRect(-w / 2, -h / 2, w, h, r);
          g.fill();
          n.setContentSize(w, h);
        },
        ring: function ring(n, r, lw, color) {
          var g = n.addComponent(cc.Graphics);
          g.lineWidth = lw;
          g.strokeColor = rgb(color);
          g.lineCap = cc.Graphics.LineCap.ROUND;
          g.arc(0, 0, r - lw / 2, 0, 1.5 * Math.PI, true);
          g.stroke();
          n.setContentSize(2 * r, 2 * r);
        },
        blockInput: function blockInput(n) {
          n.addComponent(cc.BlockInputEvents);
        },
        onTap: function onTap(n, fn, getEpoch) {
          bindSafeTap(n, fn, getEpoch);
        },
        setOpacity: function setOpacity(n, v) {
          tw(n, "opacity", null);
          n.opacity = v;
        },
        tweenOpacity: function tweenOpacity(n, to, ms, cb) {
          tw(n, "opacity", cc.tween(n).to(ms / 1e3, {
            opacity: to
          }).call(function() {
            cb && cb();
          }).start());
        },
        setScale: function setScale(n, s) {
          tw(n, "scale", null);
          n.scale = s;
        },
        tweenScale: function tweenScale(n, to, ms, cb) {
          tw(n, "scale", cc.tween(n).to(ms / 1e3, {
            scale: to
          }).call(function() {
            cb && cb();
          }).start());
        },
        tint: function tint(n, c) {
          walk(n, function(x) {
            "Spinner" !== x.name && (x.color = rgb(c));
          });
        },
        setActive: function setActive(n, b) {
          n.active = !!b;
        },
        isValid: function isValid(n) {
          return !!n && cc.isValid(n);
        },
        frameUsable: function frameUsable(f) {
          if (!f || !cc.isValid(f, true)) return false;
          var t = "function" === typeof f.getTexture ? f.getTexture() : f._texture;
          if (null === t) return false;
          return !(t && "object" === typeof t && !cc.isValid(t, true));
        },
        setAngle: function setAngle(n, a) {
          n.angle = a;
        },
        nameOf: function nameOf(n) {
          return n && n.name || "node";
        },
        isActiveInHierarchy: function isActiveInHierarchy(n) {
          if ("boolean" === typeof n.activeInHierarchy) return n.activeInHierarchy;
          for (var x = n; x; x = x.parent) if (false === x.active) return false;
          return true;
        },
        spriteFrameOf: function spriteFrameOf(n) {
          var s = n && n.getComponent && n.getComponent(cc.Sprite);
          return s && s.spriteFrame || null;
        },
        lockSize: function lockSize(n) {
          var s = n.getComponent && n.getComponent(cc.Sprite);
          s && cc.Sprite.SizeMode && s.sizeMode !== cc.Sprite.SizeMode.CUSTOM && (s.sizeMode = cc.Sprite.SizeMode.CUSTOM);
        },
        takeButton: function takeButton(n) {
          var b = cc.Button && n.getComponent && n.getComponent(cc.Button);
          if (!b) return [];
          var old = (b.clickEvents || []).slice();
          b.clickEvents = [];
          var T = cc.Button.Transition;
          T && b.transition === T.SCALE && (b.transition = T.COLOR);
          return old;
        },
        destroy: function destroy(n) {
          cc.isValid(n) && n.destroy();
        },
        toTop: function toTop(n) {
          n.zIndex = ++zCounter;
        },
        spin: function spin(n) {
          if (n.__uiSpin) return;
          n.__uiSpin = cc.tween(n).repeatForever(cc.tween().by(.9, {
            angle: -360
          })).start();
        },
        stopSpin: function stopSpin(n) {
          if (n.__uiSpin) {
            try {
              n.__uiSpin.stop();
            } catch (_) {}
            n.__uiSpin = null;
            n.angle = 0;
          }
        },
        sceneRoot: function sceneRoot() {
          var s = cc.director.getScene();
          var c = s && s.getComponentInChildren ? s.getComponentInChildren(cc.Canvas) : null;
          return c ? c.node : s;
        },
        winSize: function winSize() {
          return {
            width: cc.winSize.width,
            height: cc.winSize.height
          };
        }
      };
      return E;
    }
    var GameUIKit = createGameUIKit(makeGameUIAdapter24(cc));
    (function(g) {
      g && !g.TikTokGameUIKit && (g.TikTokGameUIKit = GameUIKit);
    })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : null);
    module.exports = GameUIKit;
    cc._RF.pop();
  }, {} ],
  Global: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "415abiUWTZP9KfVn5Q9muT0", "Global");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Global = function() {
      function Global() {}
      Global.config = {
        game_box: [],
        sdk: {
          no_action: 1,
          no_export: 0,
          no_share: 0,
          no_dau: 0
        },
        tips: {
          share: []
        },
        subscribe_conf: {
          is_show: 0,
          level: 2,
          per: 0,
          system_rank: 1,
          system_interactive: 0
        },
        game_conf: {
          close_btn: {
            min: 3,
            max: 3,
            is_show: 1
          },
          try_skin: 100
        },
        box_conf: {
          force: [],
          force_id: "",
          home: {
            is_banner: 0,
            is_box: 0,
            is_pop: 0,
            is_full: 0,
            is_menu: 0,
            order: []
          },
          game: {
            is_banner: 0,
            is_box: 0,
            is_pop: 0,
            is_full: 0,
            is_menu: 0,
            order: []
          },
          end: {
            is_banner: 100,
            is_box: 0,
            is_pop: 0,
            is_full: 0,
            is_menu: 0,
            order: []
          },
          hand_and_icon: {
            hand: 8,
            icon: 0
          }
        },
        adv_unit_conf: {
          banner: [ "adunit-8a4d70ae24e68884", "adunit-77dc1074a2f62c1e", "adunit-27f9e2fadca05fdf", "adunit-19147834c4739c63", "adunit-957c2b4d48f84f22", "adunit-ff0fc72e33baa56c" ],
          rewarded_video: [ "adunit-089a87fc2e3fa43f" ],
          grid: [ "adunit-54b1c66d9fd8a9ae" ],
          grid_count: 5
        },
        pos_share_img: [],
        screen_adv_config: {
          space_time: 30,
          per: 50,
          time_out: .2,
          min_time_out: .1
        },
        unlock_conf: {
          share: {
            score: 160,
            change: 100,
            min_time: 3,
            per: 95,
            must_pass_min: 2,
            must_pass_max: 5
          },
          video: {
            change: 1,
            not_end_change: 3
          },
          next_level: 0,
          direct_strength: 0,
          direct_gold: 0
        },
        share_img: [],
        finger: {
          home: {
            begin: 60,
            rank: 10,
            sign: 10,
            skin: 5,
            level: 5,
            more_game: 10
          }
        },
        adv_interval: {
          wx: 30,
          force_wx: 30,
          self: 10,
          is_wx: 0
        },
        ad_move_conf: {
          is_show: 0,
          level: 1,
          per: 100,
          update: 100,
          begin_game: {
            treasure_box: 100,
            box_video: 0
          },
          page: {
            pop_box: {
              per: 100,
              btn_showTime: 0,
              wx_show: .5,
              delay: 3,
              btn_move_time: 1,
              color: "#58abff",
              update_time: 1.8
            },
            full_box: {
              per: 100,
              btn_showTime: 0,
              wx_show: .5,
              delay: 3,
              btn_move_time: 1,
              color: "#58abff",
              update_time: 1.8
            },
            menu_box: {
              per: 100,
              btn_showTime: 0,
              wx_show: .5,
              delay: 3,
              btn_move_time: 1,
              color: "#58abff",
              update_time: 1.8
            },
            end: {
              per: 100,
              btn_showTime: 0,
              wx_show: .5,
              delay: 3,
              btn_move_time: 1,
              color: "#58abff",
              update_time: 1.8
            },
            trea_box: {
              min: 1,
              max: 5,
              is_force: 0
            }
          }
        },
        adv_push: {
          is_show: 1,
          space_time: 20
        },
        tpl_id: []
      };
      Global.orderStr = {
        home: [],
        game: [],
        end: []
      };
      Global.has_init = {
        config: false,
        user: false,
        home: false,
        game: false
      };
      Global.bundle = {
        game: null,
        home: null
      };
      Global.sessionInfo = {
        user_code: null,
        openid: null
      };
      Global.userInfo = {
        headimgurl: "",
        nickname: ""
      };
      Global.hasSubscribeSystemMessageInteractive = false;
      Global.hasSubscribeSystemMessageRank = false;
      Global.hasScopeUserInfo = false;
      Global.extUserData = {
        curr_level: 1,
        level: 1,
        rank_level: 0,
        share_score: 100,
        conf: {
          music: 1,
          effect: 1,
          vibrate: 1
        }
      };
      Global.TWEEN_TIME = {
        GAME_BOX: 4
      };
      Global.FORCE_UPDATE_ADV = true;
      Global.application_id = null;
      Global.NAVIGATE_APP_HAS_GO = {};
      Global.API_HOST = "";
      Global.DATA_HOST = "";
      Global.IS_APP = false;
      Global.IS_OPEN_DATA = false;
      Global.IS_TEST = false;
      Global.OPEN_DATA_KEY = "wxgame";
      Global.IS_DEBUG = false;
      Global.version = "20210205v1.0.1";
      Global.APPLICATION_ID = {
        WECHAT: 4198,
        TT: null,
        QQ: null,
        APP_IOS: null,
        APP_ANDROID: null
      };
      Global.currLevel = 0;
      Global.isOver = false;
      Global.Cut = {
        curr_number: 0,
        thisCut: 0,
        fruitSum: 0,
        cutNumber: 0
      };
      Global.Fruit = [];
      Global.levelData = {
        1: [ {
          fruit: "s6",
          points: [ 2, 7, 12, 17, 22 ]
        }, {
          fruit: "s4",
          points: [ 10, 11, 12, 13, 14 ]
        } ],
        2: [ {
          fruit: "s2",
          points: [ 0, 6, 12, 18, 24 ]
        }, {
          fruit: "s5",
          points: [ 4, 8, 12, 16, 20 ]
        } ],
        3: [ {
          fruit: "s5",
          points: [ 0, 6, 12, 18, 24, 4, 8, 16, 20 ]
        }, {
          fruit: "s9",
          points: [ 2, 7, 12, 17, 22, 10, 11, 13, 14 ]
        } ],
        4: [ {
          fruit: "s6",
          points: [ 2, 6, 7, 8, 10, 11, 12, 13, 14, 17, 22 ]
        }, {
          fruit: "s11",
          points: [ 2, 7, 10, 11, 12, 13, 14, 16, 18, 17, 22 ]
        } ],
        5: [ {
          fruit: "s8",
          points: [ 0, 4, 6, 8, 12, 17, 22 ]
        }, {
          fruit: "s9",
          points: [ 2, 7, 12, 16, 18, 20, 24 ]
        } ],
        6: [ {
          fruit: "s4",
          points: [ 2, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 22 ]
        }, {
          fruit: "s6",
          points: [ 2, 6, 7, 8, 10, 11, 12, 13, 14, 16, 17, 18, 22 ]
        } ],
        7: [ {
          fruit: "s9",
          points: [ 2, 6, 7, 8, 12, 16, 17, 18, 22 ]
        }, {
          fruit: "s11",
          points: [ 2, 6, 7, 8, 12, 16, 17, 18, 22 ]
        } ],
        8: [ {
          fruit: "s2",
          points: [ 0, 2, 4, 6, 7, 8, 12, 17, 22 ]
        }, {
          fruit: "s8",
          points: [ 0, 2, 4, 6, 7, 8, 12, 17, 22 ]
        } ],
        9: [ {
          fruit: "s8",
          points: [ 0, 4, 6, 7, 8, 11, 12, 13, 16, 17, 18, 20, 24 ]
        }, {
          fruit: "s4",
          points: [ 0, 4, 6, 7, 8, 11, 12, 13, 16, 17, 18, 20, 24 ]
        } ],
        10: [ {
          fruit: "s2",
          points: [ 0, 1, 2, 3, 4, 5, 10, 15, 20, 9, 14, 19, 21, 22, 23, 24, 12 ]
        }, {
          fruit: "s4",
          points: [ 0, 1, 2, 3, 4, 5, 10, 15, 20, 9, 14, 19, 21, 22, 23, 24, 12 ]
        } ],
        11: [ {
          fruit: "s5",
          points: [ 0, 1, 2, 3, 4, 8, 12, 16, 20, 21, 22, 23, 24 ]
        }, {
          fruit: "s9",
          points: [ 0, 5, 10, 15, 20, 4, 9, 14, 19, 24 ]
        } ],
        12: [ {
          fruit: "s2",
          points: [ 1, 3, 7, 11, 13, 17, 21, 23 ]
        }, {
          fruit: "s1",
          points: [ 1, 3, 12, 21, 23 ]
        } ],
        13: [ {
          fruit: "s4",
          points: [ 6, 8, 11, 13, 16, 18, 21, 22, 23 ]
        }, {
          fruit: "s4",
          points: [ 1, 2, 3, 6, 11, 12, 13, 16, 21 ]
        }, {
          fruit: "s4",
          points: [ 6, 7, 8, 11, 13, 16, 17, 18 ]
        } ],
        14: [ {
          fruit: "s8",
          points: [ 1, 2, 3, 6, 11, 12, 13, 16, 21, 22, 23 ]
        }, {
          fruit: "s8",
          points: [ 1, 2, 3, 6, 11, 12, 13, 16, 21, 22, 23 ]
        }, {
          fruit: "s8",
          points: [ 1, 2, 3, 6, 11, 12, 13, 16, 21, 22, 23 ]
        } ],
        15: [ {
          fruit: "s6",
          points: [ 1, 2, 3, 8, 11, 12, 13, 16, 21, 22, 23 ]
        }, {
          fruit: "s6",
          points: [ 1, 2, 3, 8, 11, 12, 13, 18, 21, 22, 23 ]
        }, {
          fruit: "s6",
          points: [ 1, 2, 3, 8, 11, 12, 13, 18, 21, 22, 23 ]
        } ],
        16: [ {
          fruit: "s8",
          points: [ 1, 2, 3, 6, 8, 11, 12, 13, 16, 18, 21, 22, 23 ]
        }, {
          fruit: "s8",
          points: [ 1, 2, 3, 6, 8, 11, 12, 13, 16, 18, 21, 22, 23 ]
        }, {
          fruit: "s8",
          points: [ 1, 2, 3, 6, 8, 11, 12, 13, 16, 18, 21, 22, 23 ]
        } ],
        17: [ {
          fruit: "s2",
          points: [ 1, 2, 3, 6, 11, 12, 13, 16, 21, 22, 23 ]
        }, {
          fruit: "s10",
          points: [ 1, 2, 3, 6, 8, 11, 12, 13, 18, 23 ]
        } ],
        18: [ {
          fruit: "s5",
          points: [ 0, 4, 11, 13, 22 ]
        }, {
          fruit: "s5",
          points: [ 2, 7, 12, 17, 22 ]
        }, {
          fruit: "s5",
          points: [ 1, 2, 3, 6, 8, 11, 12, 13, 6, 21 ]
        } ],
        19: [ {
          fruit: "s9",
          points: [ 10, 16, 12, 8, 4 ]
        }, {
          fruit: "s9",
          points: [ 10, 16, 12, 8, 4 ]
        }, {
          fruit: "s9",
          points: [ 10, 16, 12, 8, 4 ]
        } ],
        20: [ {
          fruit: "s4",
          points: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
        }, {
          fruit: "s8",
          points: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
        }, {
          fruit: "s11",
          points: [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24 ]
        } ]
      };
      return Global;
    }();
    exports.default = Global;
    cc._RF.pop();
  }, {} ],
  HomeDisplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "903fasWQxhBrJkHpF+d8r24", "HomeDisplay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Tools_1 = require("../../Frame/Manager/Tools");
    var PoolMgr_1 = require("../../Frame/Manager/PoolMgr");
    var createPlayPreparation = require("PlayPreparation");
    var ViewPanel_1 = require("../../Frame/Manager/UI/ViewPanel");
    var DisplayMgr_1 = require("../../Frame/Manager/DisplayMgr");
    var ViewMgr_1 = require("../../Frame/Manager/ViewMgr");
    var EventMgr_1 = require("../../Frame/Manager/Event/EventMgr");
    var EventData_1 = require("../../Frame/Manager/Event/EventData");
    var SoundMgr_1 = require("../../Frame/Manager/SoundMgr");
    var GameDisplay_1 = require("./GameDisplay");
    var WatermelonUI = require("../../Frame/Manager/WatermelonUI");
    var UI = require("GameUIKit");
    var ccclass = cc._decorator.ccclass;
    var HomeDisplay = function(_super) {
      __extends(HomeDisplay, _super);
      function HomeDisplay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.mn = null;
        _this.playPreparation = null;
        _this.hidePreparation = null;
        _this.showPreparation = null;
        return _this;
      }
      HomeDisplay_1 = HomeDisplay;
      HomeDisplay.getUrl = function() {
        return "homeDisplay";
      };
      HomeDisplay.prepareGame = function(done, progress) {
        var _this = this;
        var task = this.gameTask;
        if (!task) {
          task = {
            done: false,
            listeners: [],
            bundleHandle: null,
            endScope: null,
            highestBytes: 0,
            highestPercent: 0,
            completedDependencies: 0,
            bytesByTotal: Object.create(null)
          };
          this.gameTask = task;
          var finish_1 = function(error, prefab) {
            if (task.done) return;
            task.done = true;
            _this.gameTask === task && (_this.gameTask = null);
            task.endScope && task.endScope();
            var listeners = task.listeners.slice();
            task.listeners = [];
            error || PoolMgr_1.default.addToCaches("gameDisplay", prefab);
            listeners.forEach(function(l) {
              l.cancelled || l.done(error || null);
            });
          };
          var tick_1 = function() {
            return task.listeners.forEach(function(l) {
              l.cancelled || l.progress();
            });
          };
          task.abort = function() {
            if (task.done) return;
            task.bundleHandle && task.bundleHandle.cancel();
            task.endScope && task.endScope(new Error("Game preparation abandoned"));
            finish_1(new Error("Game preparation abandoned"), null);
          };
          task.start = function() {
            task.bundleHandle = Tools_1.default.loadSubPackage("game", function() {
              if (task.done) return;
              tick_1();
              var downloader = cc.assetManager.downloader;
              "function" === typeof downloader.__kitBeginLoadScope && (task.endScope = downloader.__kitBeginLoadScope());
              var options = {
                timeout: 1e4,
                maxRetryCount: 0,
                onFileProgress: function(event, totalBytes) {
                  if (task.done) return;
                  if (Number.isFinite(event) && Number.isFinite(totalBytes) && event > 0 && totalBytes > 0 && event <= totalBytes) {
                    var key = "xhr:" + totalBytes, previous = task.bytesByTotal[key] || 0;
                    if (event > previous) {
                      task.bytesByTotal[key] = event;
                      tick_1();
                    }
                    return;
                  }
                  var bytes = event && event.totalBytesWritten, percent = event && event.progress;
                  var advanced = Number.isFinite(bytes) && bytes > task.highestBytes || Number.isFinite(percent) && percent > task.highestPercent;
                  if (!advanced) return;
                  Number.isFinite(bytes) && (task.highestBytes = Math.max(task.highestBytes, bytes));
                  Number.isFinite(percent) && (task.highestPercent = Math.max(task.highestPercent, percent));
                  tick_1();
                }
              };
              var dependencyProgress = function(finished, total) {
                if (task.done || !Number.isSafeInteger(finished) || !Number.isSafeInteger(total) || finished <= 0 || total <= 0 || finished > total || finished <= task.completedDependencies) return;
                task.completedDependencies = finished;
                tick_1();
              };
              try {
                cc.assetManager.loadAny({
                  path: "game/prefab/gameDisplay",
                  bundle: "game",
                  type: cc.Prefab
                }, options, dependencyProgress, function(error, prefab) {
                  finish_1(error || (prefab ? null : new Error("Game prefab unavailable")), prefab);
                });
              } catch (error) {
                finish_1(error, null);
              }
            }, function(error) {
              return finish_1(error, null);
            }, function() {
              task.done || tick_1();
            }, null);
          };
        }
        var listener = {
          done: done,
          progress: progress,
          cancelled: false
        };
        task.listeners.push(listener);
        if (task.start) {
          var start = task.start;
          task.start = null;
          start();
        }
        return {
          cancel: function() {
            listener.cancelled = true;
            !task.done && task.listeners.every(function(l) {
              return l.cancelled;
            }) && task.abort();
          }
        };
      };
      HomeDisplay.prototype.initUI = function() {
        var _this = this;
        [ "leftBox", "rightBox", "button/more" ].forEach(function(path) {
          var n = _this.getNode(path);
          n && (n.active = false);
        });
        this.mn = this.getNode("mn").getComponent(sp.Skeleton);
        this.playPreparation = createPlayPreparation({
          now: function() {
            return performance.now();
          },
          setInterval: function(fn, ms) {
            return setInterval(fn, ms);
          },
          clearInterval: function(id) {
            return clearInterval(id);
          },
          idleMs: 12e3,
          isCurrent: function() {
            return cc.isValid(_this.node) && _this.node.activeInHierarchy;
          },
          request: function(done, progress) {
            return HomeDisplay_1.prepareGame(done, progress);
          },
          showRetry: function(_error, retry) {
            return WatermelonUI.showResourceRetry(_this, retry, function() {
              return _this.playPreparation.cancel();
            });
          },
          enter: function() {
            return DisplayMgr_1.default.openUI(GameDisplay_1.default, ViewMgr_1.default.gameView, {}, function() {
              return DisplayMgr_1.default.closeUI(HomeDisplay_1, true, {
                is_emit: true
              });
            });
          }
        });
        this.hidePreparation = function() {
          return _this.playPreparation && _this.playPreparation.hide();
        };
        this.showPreparation = function() {
          return _this.playPreparation && _this.playPreparation.show();
        };
        cc.game.on(cc.game.EVENT_HIDE, this.hidePreparation, this);
        cc.game.on(cc.game.EVENT_SHOW, this.showPreparation, this);
        UI.newButton(this.getNode("button/beginGame"), function() {
          return _this.playPreparation.start();
        }, {
          name: "PlayHit",
          w: 185,
          h: 90,
          active: true,
          text: ""
        });
      };
      HomeDisplay.prototype.show = function(param) {
        var _this = this;
        this.node.active = true;
        var audio = SoundMgr_1.default.audioService();
        audio.bindFirstFrame(cc.director, cc.Director);
        SoundMgr_1.default.music();
        WatermelonUI.attachHome(this.node);
        EventMgr_1.default.instance().emit(EventData_1.default.CLOSE_LOADING);
        var index = 1;
        this.mn.setCompleteListener(function() {
          index = 6 === index ? 1 : index + 1;
          cc.isValid(_this.node) && _this.mn.setSkin("d" + index);
        });
      };
      HomeDisplay.prototype.hide = function() {
        WatermelonUI.dismissResourceRetry(this);
        this.playPreparation && this.playPreparation.cancel();
        WatermelonUI.disposeHomeGuides(this.node);
        this.node.active = false;
        this.unscheduleAllCallbacks();
      };
      HomeDisplay.prototype.onDestroy = function() {
        WatermelonUI.dismissResourceRetry(this);
        this.playPreparation && this.playPreparation.dispose();
        cc.game.off(cc.game.EVENT_HIDE, this.hidePreparation, this);
        cc.game.off(cc.game.EVENT_SHOW, this.showPreparation, this);
        WatermelonUI.disposeHomeGuides(this.node);
      };
      HomeDisplay.prototype.playIn = function() {};
      HomeDisplay.prototype.playOut = function() {};
      var HomeDisplay_1;
      HomeDisplay.gameTask = null;
      HomeDisplay = HomeDisplay_1 = __decorate([ ccclass ], HomeDisplay);
      return HomeDisplay;
    }(ViewPanel_1.default);
    exports.default = HomeDisplay;
    cc._RF.pop();
  }, {
    "../../Frame/Manager/DisplayMgr": "DisplayMgr",
    "../../Frame/Manager/Event/EventData": "EventData",
    "../../Frame/Manager/Event/EventMgr": "EventMgr",
    "../../Frame/Manager/PoolMgr": "PoolMgr",
    "../../Frame/Manager/SoundMgr": "SoundMgr",
    "../../Frame/Manager/Tools": "Tools",
    "../../Frame/Manager/UI/ViewPanel": "ViewPanel",
    "../../Frame/Manager/ViewMgr": "ViewMgr",
    "../../Frame/Manager/WatermelonUI": "WatermelonUI",
    "./GameDisplay": "GameDisplay",
    GameUIKit: "GameUIKit",
    PlayPreparation: "PlayPreparation"
  } ],
  HomeGrowthEntries: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "97e6dEwNDxGVa3ITdHgTdyv", "HomeGrowthEntries");
    "use strict";
    var MissionFlow = require("./MissionFlow");
    var TEXT = {
      shortcut: "Add to Home",
      profile: "Profile Revisit",
      collected: "Collected"
    };
    var ICON_WAIT_MS = 2e3;
    var SAVE_FAILED = "Could not save your reward. Please try again.";
    var NO_REWARD_DONE = "Thanks for visiting!";
    function pickReward(config, options) {
      var coins = 0;
      try {
        coins = Number(config.growthReward()) || 0;
      } catch (_) {
        coins = 0;
      }
      var given = "function" === typeof options.reward;
      if (coins > 0) return {
        source: "coins",
        issue: given ? "reward option ignored: this game has coins, growthReward() = " + coins + " (5B, Saul 2026-10-29)" : ""
      };
      if (null != options.reward && !given) throw new Error("HomeGrowthEntries reward must be function (kind, draft)");
      if (given) {
        var t = options.rewardText;
        "string" !== typeof t && void 0 !== t || (t = {
          shortcut: t || "",
          profile: t || ""
        });
        return {
          source: "game",
          reward: options.reward,
          rewardText: {
            shortcut: t.shortcut || "",
            profile: t.profile || ""
          }
        };
      }
      return {
        source: "none",
        reward: function reward() {
          return false;
        },
        rewardText: {
          shortcut: "",
          profile: ""
        },
        issue: "no reward: PlatformConfig.normalLevelCoins is 0 and init() got no reward option; the two entries pay nothing. A game without coins passes {reward, rewardText} (economy_capabilities no_wallet_substitutes, ECON-SHORTCUT / ECON-REVISIT: +3 energy, or add a coin and pay 5B)"
      };
    }
    function Controller(options) {
      options = options || {};
      if (!options.store) throw new Error("HomeGrowthEntries needs the game SaveStore");
      var self = this;
      this.config = options.config || require("./PlatformConfig");
      this.renderState = "function" === typeof options.render ? options.render : function() {};
      this.iconFallback = {
        shortcut: false,
        profile: false
      };
      this.lastView = null;
      var pick = pickReward(this.config, options);
      this.rewardSource = pick.source;
      this.rewardIssue = pick.issue || "";
      this.gameRewardText = pick.rewardText || null;
      var flowOptions = {
        store: options.store,
        config: this.config,
        missions: options.missions,
        native: options["native"],
        missionTimeoutMs: options.missionTimeoutMs,
        render: function render(view) {
          self.lastView = view;
          self._render();
        },
        onGranted: options.onGranted
      };
      if (pick.reward) {
        flowOptions.reward = pick.reward;
        flowOptions.rewardText = pick.rewardText;
      }
      this.flow = new MissionFlow(flowOptions);
      pick.issue && log("HomeGrowthEntries: " + pick.issue);
      logPlatformCalls(this.flow.missions);
      log("runtime " + describeRuntime() + ", native " + this.flow["native"]);
      this._render();
    }
    function log(text) {
      try {
        if ("undefined" === typeof cc || !cc || !cc.sys) return;
        if ("undefined" === typeof console || !console || "function" !== typeof console.info) return;
        console.info("[TikTokKit] " + text);
      } catch (_) {}
    }
    function describeRuntime() {
      var found = [], names = [ "addShortcut", "getShortcutMissionReward", "startEntranceMission", "getEntranceMissionReward" ];
      var candidates = [ [ "TTMinis.game", "undefined" !== typeof TTMinis && TTMinis && TTMinis.game ], [ "tt", "undefined" !== typeof tt && tt ], [ "wx", "undefined" !== typeof wx && wx ] ];
      candidates.forEach(function(pair) {
        var sdk = pair[1];
        if (!sdk) return;
        var can = "function" === typeof sdk.canIUse;
        var parts = names.map(function(name) {
          var answer = "?";
          try {
            answer = can ? String(sdk.canIUse(name)) : "no canIUse";
          } catch (e) {
            answer = "throws";
          }
          return name + ("function" === typeof sdk[name] ? "" : "(missing)") + "=" + answer;
        });
        found.push(pair[0] + " {" + parts.join(", ") + "}");
      });
      return found.length ? found.join("; ") : "no TTMinis.game / tt / wx";
    }
    function logPlatformCalls(missions) {
      if (!missions) return;
      [ "navigate", "query" ].forEach(function(action) {
        var call = missions[action];
        if ("function" !== typeof call) return;
        missions[action] = function(kind, opts) {
          log(kind + " " + action + " ...");
          var answer = call.call(missions, kind, opts);
          answer && "function" === typeof answer.then && answer.then(function(r) {
            r = r || {};
            log(kind + " " + action + " -> " + r.status + (r.api ? " (" + r.api + ")" : "") + (null !== r.errorCode && void 0 !== r.errorCode ? " errorCode " + r.errorCode : "") + (r.errMsg ? " errMsg " + r.errMsg : ""));
          }, function() {});
          return answer;
        };
      });
    }
    Controller.TEXT = TEXT;
    Controller.prototype.rewardAmount = function() {
      try {
        return this.config.growthReward();
      } catch (_) {
        return 0;
      }
    };
    Controller.prototype.state = function() {
      var flow = this.flow, amount = this.rewardAmount(), self = this, view = this.lastView;
      function rewardLabel(kind) {
        if ("game" === self.rewardSource) return self.gameRewardText[kind] || "";
        return amount > 0 ? "+" + amount : "";
      }
      function entry(kind) {
        var claimed = flow.isClaimed(kind), label = rewardLabel(kind);
        return {
          kind: kind,
          title: TEXT[kind],
          claimed: claimed,
          rewardText: label,
          reward: "",
          busy: !!(view && view.kind === kind && view.busy),
          iconFallback: self.iconFallback[kind],
          text: self.iconFallback[kind] ? TEXT[kind] : ""
        };
      }
      var message = view ? view.message : "";
      "none" === this.rewardSource && message === SAVE_FAILED && (message = NO_REWARD_DONE);
      return {
        shortcut: entry("shortcut"),
        profile: entry("profile"),
        message: message,
        native: flow["native"],
        rewardSource: this.rewardSource,
        rewardIssue: this.rewardIssue
      };
    };
    Controller.prototype._render = function() {
      try {
        this.renderState(this.state());
      } catch (_) {}
    };
    Controller.prototype.press = function(kind) {
      if ("shortcut" !== kind && "profile" !== kind) return "ignored";
      var flow = this.flow;
      if (flow.kind !== kind && flow["native"]) {
        flow.open(kind, {
          navigate: true
        });
        return flow["native"] ? "start" : "unsupported";
      }
      if (!flow.refreshPlatform()) return "unsupported";
      if (flow.kind !== kind) {
        flow.open(kind, {
          navigate: true
        });
        return "start";
      }
      if (flow.view().busy) return "busy";
      flow.start();
      return "start";
    };
    Controller.prototype.iconFailed = function(kind) {
      if (false === this.iconFallback[kind]) {
        this.iconFallback[kind] = true;
        this._render();
      }
    };
    Controller.prototype.onShow = function(entry) {
      return this.flow.onShow(entry);
    };
    Controller.prototype.tick = function() {
      this.flow.tick();
    };
    Controller.prototype.dispose = function() {
      this.flow.dispose();
    };
    function platformToast(text) {
      var sdk = "undefined" !== typeof TTMinis && TTMinis && TTMinis.game || "undefined" !== typeof tt && tt || null;
      if (sdk && "function" === typeof sdk.showToast) try {
        sdk.showToast({
          title: text,
          icon: "none",
          duration: 2e3
        });
        return true;
      } catch (_) {}
      return false;
    }
    var NOTICE_MS = 2200;
    function findKitUI() {
      var g = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : null;
      var ui = g && g.TikTokGameUIKit;
      return ui && "function" === typeof ui.toast ? ui : null;
    }
    function makeNotice(o) {
      o = o || {};
      var ui = o.ui && "function" === typeof o.ui.toast ? o.ui : null;
      var cancel = null, current = "", _via = "";
      function stop() {
        if (cancel) {
          try {
            cancel();
          } catch (_) {}
          cancel = null;
        }
      }
      var notice = {
        text: function text() {
          return "GameUIKit" === _via && "function" === typeof ui.toastText ? ui.toastText() : current;
        },
        via: function via() {
          return _via;
        },
        show: function show(text) {
          text = void 0 === text || null === text ? "" : String(text);
          if (!text) return "";
          stop();
          "label" === _via && o.label && o.label.hide();
          current = text;
          if (ui) {
            _via = "GameUIKit";
            ui.toast(text, {
              ms: NOTICE_MS
            });
            return _via;
          }
          if ("function" === typeof o.platform && o.platform(text)) {
            _via = "platform";
            return _via;
          }
          if (o.label && "function" === typeof o.later) {
            _via = "label";
            o.label.set(text);
            cancel = o.later(NOTICE_MS, function() {
              cancel = null;
              current = "";
              o.label.hide();
            });
            return _via;
          }
          _via = "log";
          log("HomeGrowthEntries: " + text);
          current = "";
          return _via;
        },
        clear: function clear() {
          stop();
          "GameUIKit" === _via && "function" === typeof ui.clearToast && "function" === typeof ui.toastText && ui.toastText() === current && ui.clearToast();
          "label" === _via && o.label && o.label.hide();
          current = "";
        }
      };
      return notice;
    }
    function textureLoaded(sprite) {
      var frame = sprite && sprite.spriteFrame;
      var texture = frame && "function" === typeof frame.getTexture ? frame.getTexture() : null;
      return !!(texture && texture.loaded);
    }
    var SLOT = {
      gap: 16,
      topReserve: .12,
      step: 4
    };
    function slotBox(b) {
      return {
        x0: b.x - b.w / 2,
        y0: b.y - b.h / 2,
        x1: b.x + b.w / 2,
        y1: b.y + b.h / 2
      };
    }
    function slotGrow(b, g) {
      return {
        x0: b.x0 - g,
        y0: b.y0 - g,
        x1: b.x1 + g,
        y1: b.y1 + g
      };
    }
    function slotHits(a, b) {
      return a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;
    }
    function slotRows(screen, obstacles, entry, o) {
      var hw = entry.w / 2, hh = entry.h / 2, rows = [];
      var safe = o.safe || {
        x0: -screen.w / 2,
        y0: -screen.h / 2,
        x1: screen.w / 2,
        y1: screen.h / 2 - screen.h * o.topReserve
      };
      var left = safe.x0 + o.gap + hw, right = safe.x1 - o.gap - hw;
      var bottom = safe.y0 + o.gap + hh, top = safe.y1 - hh;
      for (var y = bottom; y <= top; y += o.step) {
        var xs = [];
        for (var x = left; x <= right; x += o.step) {
          var b = {
            x0: x - hw,
            y0: y - hh,
            x1: x + hw,
            y1: y + hh
          };
          obstacles.some(function(ob) {
            return slotHits(b, ob);
          }) || xs.push(x);
        }
        xs.length && rows.push({
          y: y,
          xs: xs
        });
      }
      return rows;
    }
    function slotPair(row, entry, gap) {
      var best = null, xs = row.xs, need = entry.w + gap;
      for (var i = 0; i < xs.length; i++) for (var j = xs.length - 1; j > i; j--) {
        var d = xs[j] - xs[i];
        if (d < need) break;
        var off = Math.abs(xs[i] + xs[j]), score = 4 * off + (d - need);
        (!best || score < best.score) && (best = {
          score: score,
          a: xs[i],
          b: xs[j]
        });
      }
      return best;
    }
    function findFreeSlots(spec) {
      spec = spec || {};
      var screen = spec.screen, entry = spec.entry, count = spec.count || 2;
      if (!screen || !(screen.w > 0) || !(screen.h > 0)) return {
        ok: false,
        error: "screen {w, h} is required"
      };
      if (!entry || !(entry.w > 0) || !(entry.h > 0)) return {
        ok: false,
        error: "entry {w, h} is required"
      };
      var o = {
        gap: void 0 === spec.gap ? SLOT.gap : spec.gap,
        topReserve: void 0 === spec.topReserve ? SLOT.topReserve : spec.topReserve,
        step: spec.step || SLOT.step,
        safe: spec.safe || null
      };
      if (o.safe && !(o.safe.x1 > o.safe.x0 && o.safe.y1 > o.safe.y0)) return {
        ok: false,
        error: "safe {x0, y0, x1, y1} is empty"
      };
      var buttons = (spec.buttons || []).concat(spec.obstacles || []);
      var bad = buttons.filter(function(b) {
        return ![ b.x, b.y, b.w, b.h ].every(isFinite);
      });
      if (bad.length) return {
        ok: false,
        error: "button without x, y, w, h: " + bad.map(function(b) {
          return b.name;
        }).join(", ")
      };
      var obstacles = buttons.map(function(b) {
        return slotGrow(slotBox(b), o.gap);
      });
      var rows = slotRows(screen, obstacles, entry, o);
      var slots = [];
      for (var r = 0; r < rows.length && 2 === count; r++) {
        var p = slotPair(rows[r], entry, o.gap);
        if (p) {
          slots = [ {
            x: p.a,
            y: rows[r].y
          }, {
            x: p.b,
            y: rows[r].y
          } ];
          break;
        }
      }
      if (!slots.length) for (var k = 0; k < count; k++) {
        var extra = obstacles.concat(slots.map(function(s) {
          return slotGrow(slotBox({
            x: s.x,
            y: s.y,
            w: entry.w,
            h: entry.h
          }), o.gap);
        }));
        var free = slotRows(screen, extra, entry, o);
        if (!free.length) return {
          ok: false,
          error: "no free place for " + count + " entries of " + entry.w + "x" + entry.h + " on a " + screen.w + "x" + screen.h + " home with " + buttons.length + " buttons/obstacles (gap " + o.gap + "): make the entries smaller, or ask before moving an original button -- do not guess a position",
          placed: slots.length
        };
        var row = free[0], best = row.xs.reduce(function(m, x) {
          return Math.abs(x) < Math.abs(m) ? x : m;
        }, row.xs[0]);
        slots.push({
          x: best,
          y: row.y
        });
      }
      return {
        ok: true,
        coords: "design units, origin at the screen centre, y up",
        gap: o.gap,
        slots: slots.map(function(s) {
          return {
            x: s.x,
            y: s.y,
            w: entry.w,
            h: entry.h
          };
        })
      };
    }
    function uiTransform(cc, node) {
      var T = cc && cc.UITransform;
      return T && node && "function" === typeof node.getComponent ? node.getComponent(T) : null;
    }
    function worldRect(cc, node) {
      var t = uiTransform(cc, node);
      if (t && "function" === typeof t.getBoundingBoxToWorld) return t.getBoundingBoxToWorld();
      return "function" === typeof node.getBoundingBoxToWorld ? node.getBoundingBoxToWorld() : null;
    }
    function vec(cc, x, y) {
      return cc.v3 ? cc.v3(x, y, 0) : cc.v2 ? cc.v2(x, y) : {
        x: x,
        y: y
      };
    }
    function toLocal(cc, node, x, y) {
      var t = uiTransform(cc, node), owner = t && "function" === typeof t.convertToNodeSpaceAR ? t : node;
      return owner.convertToNodeSpaceAR(vec(cc, x, y));
    }
    function toWorld(cc, node, x, y) {
      var t = uiTransform(cc, node), owner = t && "function" === typeof t.convertToWorldSpaceAR ? t : node;
      return owner.convertToWorldSpaceAR(vec(cc, x, y));
    }
    function boxIn(cc, node, root) {
      var r = worldRect(cc, node);
      if (!r) return null;
      var a = toLocal(cc, root, r.x, r.y), b = toLocal(cc, root, r.x + r.width, r.y + r.height);
      var w = Math.abs(b.x - a.x), h = Math.abs(b.y - a.y);
      return {
        name: node.name,
        x: (a.x + b.x) / 2,
        y: (a.y + b.y) / 2,
        w: w,
        h: h
      };
    }
    function shown(node) {
      if (!node || false === node.active || false === node.activeInHierarchy) return false;
      var op = node.opacity;
      if (void 0 === op && node.getComponent) {
        var uo = node.getComponent("cc.UIOpacity");
        op = uo ? uo.opacity : void 0;
      }
      return void 0 === op || op >= 13;
    }
    var BACKDROP_SHARE = .5;
    function touchTypes(cc) {
      var out = [ "touchstart", "touchend", "touch-start", "touch-end" ];
      [ cc && cc.Node && cc.Node.EventType, cc && cc.NodeEventType ].forEach(function(T) {
        T && [ T.TOUCH_START, T.TOUCH_END ].forEach(function(t) {
          t && out.indexOf(t) < 0 && out.push(t);
        });
      });
      return out;
    }
    function listensTouch(cc, node, types) {
      if ("function" === typeof node.hasEventListener) for (var i = 0; i < types.length; i++) try {
        if (node.hasEventListener(types[i])) return true;
      } catch (_) {}
      return !!node._touchListener;
    }
    function blocksInput(cc, node) {
      var B = cc && cc.BlockInputEvents;
      return !!(B && node.getComponent && node.getComponent(B));
    }
    function collectButtons(cc, root, skip, opts) {
      opts = opts || {};
      var out = [], Btn = cc && cc.Button, types = touchTypes(cc), ignore = opts.ignore || [];
      var area = opts.screen ? opts.screen.w * opts.screen.h : 0;
      var start = opts.searchRoot || root;
      (function walk(node) {
        if (!shown(node) || (skip || []).indexOf(node) >= 0) return;
        if (node !== root && node !== start && ignore.indexOf(node) < 0) {
          var isBtn = !!(Btn && node.getComponent && node.getComponent(Btn));
          var isTouch = !isBtn && listensTouch(cc, node, types);
          if (isBtn || isTouch) {
            var b = boxIn(cc, node, root);
            if (b && b.w > 0 && b.h > 0) {
              b.by = isBtn ? "button" : "touch";
              isTouch && (blocksInput(cc, node) || area && b.w * b.h >= area * BACKDROP_SHARE) ? opts.backdrops && opts.backdrops.push(b.name) : out.push(b);
            }
          }
        }
        (node.children || []).forEach(walk);
      })(start);
      return out;
    }
    function _placeEntries(cc, opts) {
      opts = opts || {};
      var root = opts.root, entries = (opts.entries || []).filter(Boolean);
      if (!root || 2 !== entries.length) return {
        ok: false,
        error: "placeEntries needs root and two entry nodes"
      };
      var rootBox = boxIn(cc, root, root);
      var screen = opts.screen || (rootBox ? {
        w: rootBox.w,
        h: rootBox.h
      } : null);
      var backdrops = [];
      var buttons = collectButtons(cc, root, entries, {
        screen: screen,
        ignore: opts.ignore,
        backdrops: backdrops,
        searchRoot: opts.searchRoot
      }).concat((opts.obstacles || []).map(function(n) {
        return boxIn(cc, n, root);
      }).filter(Boolean));
      var boxes = entries.map(function(n) {
        return boxIn(cc, n, root);
      });
      if (!boxes[0] || !boxes[1]) return {
        ok: false,
        error: "entry node has no size"
      };
      var gap = void 0 === opts.gap ? SLOT.gap : opts.gap;
      var top = screen ? screen.h / 2 - screen.h * (void 0 === opts.topReserve ? SLOT.topReserve : opts.topReserve) : Infinity;
      var inside = function inside(b) {
        return screen && b.x - b.w / 2 >= -screen.w / 2 && b.x + b.w / 2 <= screen.w / 2 && b.y - b.h / 2 >= -screen.h / 2 && b.y + b.h / 2 <= top;
      };
      var clear = boxes.every(function(b) {
        return inside(b) && !buttons.some(function(o) {
          return slotHits(slotBox(b), slotBox(o));
        });
      }) && !slotHits(slotBox(boxes[0]), slotBox(boxes[1]));
      if (clear) return {
        ok: true,
        kept: true,
        slots: boxes,
        buttons: buttons,
        backdrops: backdrops
      };
      var entry = {
        w: Math.max(boxes[0].w, boxes[1].w),
        h: Math.max(boxes[0].h, boxes[1].h)
      };
      var r = findFreeSlots({
        screen: screen,
        buttons: buttons,
        entry: entry,
        safe: opts.safe,
        gap: gap,
        topReserve: opts.topReserve
      });
      r.buttons = buttons;
      r.backdrops = backdrops;
      if (!r.ok) {
        log("HomeGrowthEntries: " + r.error);
        return r;
      }
      entries.forEach(function(node, i) {
        var s = r.slots[i], b = boxes[i];
        var nowW = toWorld(cc, root, b.x, b.y), toW = toWorld(cc, root, s.x, s.y), parent = node.parent || root;
        var p0 = toLocal(cc, parent, nowW.x, nowW.y), p1 = toLocal(cc, parent, toW.x, toW.y);
        var pos = node.position || {
          x: node.x,
          y: node.y
        };
        node.setPosition(vec(cc, pos.x + (p1.x - p0.x), pos.y + (p1.y - p0.y)));
      });
      r.moved = true;
      return r;
    }
    var SETTLE = {
      minFrames: 3,
      maxFrames: 90
    };
    function layoutSignature(cc, opts) {
      opts = opts || {};
      var root = opts.root, entries = (opts.entries || []).filter(Boolean);
      if (!root) return "";
      var list = collectButtons(cc, root, entries, {
        searchRoot: opts.searchRoot,
        ignore: opts.ignore
      }).concat(entries.map(function(n) {
        return boxIn(cc, n, root);
      }).filter(Boolean));
      return list.map(function(b) {
        return b.name + ":" + Math.round(b.x) + "," + Math.round(b.y) + "," + Math.round(b.w) + "," + Math.round(b.h);
      }).join("|");
    }
    function settleGate(o) {
      o = o || {};
      var minF = o.minFrames || SETTLE.minFrames, maxF = o.maxFrames || SETTLE.maxFrames;
      var frame = 0, last = null, gate = {
        result: null,
        done: false
      };
      gate.frames = function() {
        return frame;
      };
      gate.tick = function() {
        if (gate.done) return gate.result;
        frame++;
        var sig = null;
        try {
          sig = String(o.signature());
        } catch (_) {
          sig = null;
        }
        var steady = null !== sig && sig === last;
        last = sig;
        if (!(frame >= minF && steady) && frame < maxF) return null;
        gate.done = true;
        steady || log("HomeGrowthEntries: home layout still moving after " + frame + " frames; entries placed on this frame");
        var r = null;
        try {
          r = o.place();
        } catch (e) {
          r = {
            ok: false,
            error: "place failed: " + (e && e.message)
          };
        }
        r = r || {
          ok: false,
          error: "place returned nothing"
        };
        r.frames = frame;
        r.settled = steady;
        gate.result = r;
        return r;
      };
      return gate;
    }
    Controller.findFreeSlots = findFreeSlots;
    Controller.placeEntries = _placeEntries;
    Controller.settleGate = settleGate;
    Controller.layoutSignature = layoutSignature;
    Controller.makeNotice = makeNotice;
    var exported = {
      Controller: Controller,
      TEXT: TEXT,
      findFreeSlots: findFreeSlots,
      placeEntries: _placeEntries,
      collectButtons: collectButtons,
      settleGate: settleGate,
      layoutSignature: layoutSignature,
      makeNotice: makeNotice,
      SETTLE: SETTLE,
      NOTICE_MS: NOTICE_MS
    };
    "undefined" !== typeof cc && cc && "function" === typeof cc.Class && (exported = cc.Class({
      extends: cc.Component,
      properties: {
        shortcutNode: {
          default: null,
          type: cc.Node
        },
        profileNode: {
          default: null,
          type: cc.Node
        },
        shortcutClaimedNode: {
          default: null,
          type: cc.Node
        },
        profileClaimedNode: {
          default: null,
          type: cc.Node
        },
        messageLabel: {
          default: null,
          type: cc.Label
        }
      },
      statics: {
        Controller: Controller,
        TEXT: TEXT,
        findFreeSlots: findFreeSlots,
        placeEntries: _placeEntries,
        settleGate: settleGate,
        layoutSignature: layoutSignature,
        makeNotice: makeNotice
      },
      init: function init(store, options) {
        options = options || {};
        var self = this;
        this.controller && this.controller.dispose();
        this.controller = new Controller({
          store: store,
          onGranted: options.onGranted,
          missions: options.missions,
          native: options["native"],
          reward: options.reward,
          rewardText: options.rewardText,
          render: function render(state) {
            self._paint(state);
          }
        });
        [ "shortcut", "profile" ].forEach(function(kind) {
          var node = self[kind + "Node"];
          if (!node) {
            cc.error("HomeGrowthEntries: " + kind + "Node is not set");
            return;
          }
          node.active = true;
          node.off(cc.Node.EventType.TOUCH_END, self["_tap_" + kind], self);
          self["_tap_" + kind] = function() {
            self.controller.press(kind);
          };
          node.on(cc.Node.EventType.TOUCH_END, self["_tap_" + kind], self);
          var sprite = node.getComponent(cc.Sprite);
          if (!sprite || !sprite.spriteFrame) {
            self.controller.iconFailed(kind);
            return;
          }
          self.scheduleOnce(function() {
            textureLoaded(sprite) || self.controller.iconFailed(kind);
          }, ICON_WAIT_MS / 1e3);
        });
        this._lastMessage = "";
        this._isHomeVisible = options.isHomeVisible;
        this._notice = makeNotice({
          ui: options.ui || findKitUI(),
          platform: platformToast,
          label: this.messageLabel ? {
            set: function set(t) {
              self.messageLabel.string = t;
              self.messageLabel.node.active = true;
            },
            hide: function hide() {
              cc.isValid(self.messageLabel.node) && (self.messageLabel.node.active = false);
            }
          } : null,
          later: function later(ms, fn) {
            self.scheduleOnce(fn, ms / 1e3);
            return function() {
              self.unschedule(fn);
            };
          }
        });
        this.messageLabel && (this.messageLabel.node.active = false);
        if (false !== options.place) {
          this._placeOptions = options;
          this._settle = settleGate({
            signature: function signature() {
              return layoutSignature(cc, self._placeSpec());
            },
            place: function place() {
              return self.placeEntries();
            }
          });
        }
        this.controller._render();
        this.controller.flow.startEntryTracking();
        return this.controller;
      },
      _placeSpec: function _placeSpec() {
        var o = this._placeOptions || {};
        var root = o.homeRoot || cc.Canvas && cc.Canvas.instance && cc.Canvas.instance.node || cc.find("Canvas") || this.node.parent;
        var panel = o.homePanel || o.homeRoot || null;
        for (var n = this.node; !panel && n && n !== root; n = n.parent) /home/i.test(n.name || "") && (panel = n);
        if (!panel && !this._warnedPanel) {
          this._warnedPanel = true;
          log('HomeGrowthEntries: no home panel found (init({homePanel}) or a parent named like "home"); obstacles are taken from the whole Canvas');
        }
        var size = cc.view && "function" === typeof cc.view.getVisibleSize ? cc.view.getVisibleSize() : null;
        return {
          root: root,
          searchRoot: panel || root,
          entries: [ this.shortcutNode, this.profileNode ],
          screen: size ? {
            w: size.width,
            h: size.height
          } : void 0,
          obstacles: o.obstacles,
          ignore: o.ignore,
          safe: o.safe,
          gap: o.gap,
          topReserve: o.topReserve
        };
      },
      placeEntries: function placeEntries() {
        this.placement = _placeEntries(cc, this._placeSpec());
        this.controller && (this.controller.placement = this.placement);
        return this.placement;
      },
      _label: function _label(node) {
        var child = node.getChildByName("HomeEntryText");
        if (!child) {
          child = new cc.Node("HomeEntryText");
          child.parent = node;
          var label = child.addComponent(cc.Label);
          label.fontSize = 24;
          label.lineHeight = 28;
          label.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
          label.overflow = cc.Label.Overflow.SHRINK;
          child.setContentSize(node.width || 160, node.height || 80);
          child.color = cc.Color.WHITE;
        }
        return child.getComponent(cc.Label);
      },
      _paint: function _paint(state) {
        var self = this;
        [ "shortcut", "profile" ].forEach(function(kind) {
          var node = self[kind + "Node"];
          if (!node) return;
          var e = state[kind], label = self._label(node), badge = self[kind + "ClaimedNode"];
          badge && cc.isValid(badge) && (badge.active = !!e.claimed);
          label.string = e.iconFallback ? e.title : "";
          label.node.active = "" !== label.string;
          var button = node.getComponent(cc.Button);
          button && (button.interactable = !e.busy);
        });
        if (state.message !== this._lastMessage) {
          this._lastMessage = state.message || "";
          state.message ? this._message(state.message) : this._notice && this._notice.clear();
        }
      },
      _canShowNotice: function _canShowNotice() {
        return this.node.activeInHierarchy && ("function" !== typeof this._isHomeVisible || true === this._isHomeVisible());
      },
      _message: function _message(text) {
        this._notice && this._canShowNotice() && this._notice.show(text);
      },
      update: function update() {
        this._settle && !this._settle.done && this._settle.tick();
        this.controller && this.controller.tick();
        if (this._notice && this._lastMessage && !this._canShowNotice()) {
          this._notice.clear();
          this._lastMessage = "";
        }
      },
      onDisable: function onDisable() {
        this._notice && this._notice.clear();
        this._lastMessage = "";
      },
      onDestroy: function onDestroy() {
        this._notice && this._notice.clear();
        this.controller && this.controller.dispose();
        this.controller = null;
      }
    }));
    module.exports = exported;
    cc._RF.pop();
  }, {
    "./MissionFlow": "MissionFlow",
    "./PlatformConfig": "PlatformConfig"
  } ],
  LanguageConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f52f3xNT9NAGYCXbkNOS752", "LanguageConfig");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LanguageConfig = function() {
      function LanguageConfig() {}
      LanguageConfig.getValue = function(languageCode, key) {
        var config = null;
        config = "zh_tw" === languageCode && this.zh_tw.hasOwnProperty(key) ? this.zh_tw : this.zh_cn;
        if (config.hasOwnProperty(key)) return config[key];
        return "";
      };
      LanguageConfig.zh_cn = {
        rewardedVideoNo: "Ad unavailable. Please try again.",
        rewardedVideoErr: "Watch the full ad to claim your reward.",
        loadSubPackageErr: "Could not load the game. Please try again.",
        levelDataErr: "Could not load this level. Please try again.",
        levelInfo: "LEVEL {0}",
        rankLevelInfo: "LEVEL {0}",
        strengthFull: "Energy full",
        skinCurr: "EQUIPPED",
        skinUse: "USE",
        lessGold: "Not enough coins",
        lessStrength: "Not enough energy",
        hasSign: "Reward already claimed",
        signInvalid: "Come back tomorrow",
        goldTips: "COINS x {0}",
        strengthTips: "ENERGY x {0}",
        skinTips: "1 SKIN"
      };
      LanguageConfig.zh_tw = {};
      LanguageConfig = __decorate([ ccclass ], LanguageConfig);
      return LanguageConfig;
    }();
    exports.default = LanguageConfig;
    cc._RF.pop();
  }, {} ],
  LanguageMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7d232O/b9pGrIAZaYSdZAqD", "LanguageMgr");
    "use strict";
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../../FrameLog");
    var ResMgr_1 = require("../ResMgr");
    var LanguageConfig_1 = require("./LanguageConfig");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LanguageMgr = function() {
      function LanguageMgr() {}
      LanguageMgr.getLanguageCode = function() {
        return this._languageCode;
      };
      LanguageMgr.init = function(languageCode) {
        switch (languageCode) {
         case "zh-hant-mo":
         case "zh-hant-cn":
         case "zh-hant-tw":
          languageCode = "zh_tw";
          break;

         default:
          languageCode = -1 !== languageCode.indexOf("zh-hant-") ? "zh_tw" : "zh_cn";
        }
        this._languageCode = languageCode;
        FrameLog_1.default.log("init i18n mgr", languageCode, this._languageCode, cc.sys.language, cc.sys.languageCode);
      };
      LanguageMgr.getValue = function(key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) param[_i - 1] = arguments[_i];
        var result = LanguageConfig_1.default.getValue(this._languageCode, key);
        if (param.length <= 0) return result;
        return this._format(result, param);
      };
      LanguageMgr._format = function(source, param) {
        if (param.length <= 0) return source;
        for (var i = 0; i < param.length; i++) {
          var regExp = new RegExp("\\{" + i + "\\}", "g");
          source = source.replace(regExp, param[i]);
          FrameLog_1.default.log("i18n replace", source, param, regExp, i, param.length, param[i]);
        }
        return source;
      };
      LanguageMgr.setSprite = function(sprite, param) {
        FrameLog_1.default.log("i18n set sprite", param, this._languageCode);
        param.hasOwnProperty(this._languageCode) && ResMgr_1.default.setSprite(sprite, param[this._languageCode], false);
      };
      LanguageMgr._languageCode = "zh_cn";
      LanguageMgr = __decorate([ ccclass ], LanguageMgr);
      return LanguageMgr;
    }();
    exports.default = LanguageMgr;
    cc._RF.pop();
  }, {
    "../../FrameLog": "FrameLog",
    "../ResMgr": "ResMgr",
    "./LanguageConfig": "LanguageConfig"
  } ],
  Loading: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "813cdMJooRNUYVICJjBprv0", "Loading");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var UI = require("GameUIKit");
    var createPlayPreparation = require("PlayPreparation");
    var Tools_1 = require("../Scripts/Frame/Manager/Tools");
    var Global_1 = require("../Scripts/Frame/Global");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Loading = function(_super) {
      __extends(Loading, _super);
      function Loading() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadingRetryWord = null;
        _this.loadingRetryPanel = null;
        _this.loadingRetryMascot = null;
        _this.loadingRetryFont = null;
        _this._loadProgressBar = null;
        _this._loadingView = null;
        _this._lasPer = 0;
        _this._barWidth = 0;
        _this._interval = .01;
        _this.homePreparation = null;
        _this.retryPage = null;
        _this.hidePreparation = null;
        _this.showPreparation = null;
        return _this;
      }
      Loading.prototype.onLoad = function() {
        var _this = this;
        cc.debug.setDisplayStats(false);
        this._loadingView = this.node.getChildByName("loading");
        this._loadingView.active = true;
        this._loadProgressBar = this._loadingView.getChildByName("progressBar").getChildByName("mask");
        this._loadProgressBar.x = -this._loadProgressBar.parent.width / 2;
        this._barWidth = this._loadProgressBar.parent.width;
        this.homePreparation = createPlayPreparation({
          now: function() {
            return performance.now();
          },
          setInterval: function(fn, ms) {
            return setInterval(fn, ms);
          },
          clearInterval: function(id) {
            return clearInterval(id);
          },
          idleMs: 12e3,
          isCurrent: function() {
            return cc.isValid(_this.node) && _this.node.activeInHierarchy;
          },
          request: function(done, progress) {
            _this._lasPer = 0;
            _this._loadProgressBar.width = 0;
            return Tools_1.default.loadSubPackage("home", function() {
              return done(null);
            }, function(error) {
              return done(error || new Error("Home unavailable"));
            }, function(res, total) {
              if (!(total > 0)) return;
              var per = Math.max(0, Math.min(1, res / total));
              if (per > _this._lasPer) {
                _this._lasPer = per;
                _this._loadProgressBar.width = _this._barWidth * per;
              }
              progress();
            }, _this);
          },
          showRetry: function(_error, retry) {
            return _this.showLoadingRetry(retry);
          },
          enter: function() {
            _this.dismissLoadingRetry();
            Global_1.default.has_init.home = true;
            _this.schedule(_this._tryToMain, _this._interval);
          }
        });
        this.hidePreparation = function() {
          return _this.homePreparation.hide();
        };
        this.showPreparation = function() {
          return _this.homePreparation.show();
        };
        cc.game.on(cc.game.EVENT_HIDE, this.hidePreparation, this);
        cc.game.on(cc.game.EVENT_SHOW, this.showPreparation, this);
        this.loadHome();
      };
      Loading.prototype.loadHome = function() {
        this.dismissLoadingRetry();
        this.homePreparation.start();
      };
      Loading.prototype.dismissLoadingRetry = function() {
        if (this.retryPage) {
          this.retryPage.close();
          this.retryPage = null;
        }
      };
      Loading.prototype.showLoadingRetry = function(retry) {
        var _this = this;
        this.dismissLoadingRetry();
        var root = cc.Canvas.instance && cc.Canvas.instance.node || this.node;
        var page = UI.popup(root, {
          name: "LoadingRetry",
          pageId: "loading_retry",
          panelFrame: this.loadingRetryPanel,
          width: 560,
          height: 900,
          closeFrame: false,
          closeOnMask: false
        });
        this.retryPage = page;
        if (!this.loadingRetryPanel) {
          var panel = page.root.getChildByName("Panel"), background = panel.addComponent(cc.Graphics);
          background.fillColor = cc.color(252, 246, 222);
          background.roundRect(-280, -450, 560, 900, 28);
          background.fill();
          background.strokeColor = cc.color(108, 99, 203);
          background.lineWidth = 5;
          background.stroke();
        }
        var mascot = new cc.Node("KitchenMascot");
        mascot.parent = page.body;
        mascot.setPosition(0, 220);
        var mascotSprite = mascot.addComponent(cc.Sprite);
        mascotSprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        mascotSprite.spriteFrame = this.loadingRetryMascot;
        if (this.loadingRetryMascot) {
          var r = this.loadingRetryMascot.getRect(), s = Math.min(300 / r.width, 180 / r.height);
          mascot.setContentSize(r.width * s, r.height * s);
        }
        var message = UI.text(page.body, {
          name: "Message",
          text: "Could not load the game. Please retry.",
          x: 0,
          y: 25,
          w: 460,
          h: 120,
          font: this.loadingRetryFont,
          fontSize: 28,
          color: [ 255, 255, 255 ],
          outline: [ 44, 35, 105 ]
        });
        message.node.setContentSize(460, 120);
        message.node.setPosition(0, 25);
        var retryButton = UI.newButton(page.body, function() {
          if (_this.retryPage !== page || !cc.isValid(_this.node) || !_this.node.activeInHierarchy) return;
          _this.dismissLoadingRetry();
          retry();
        }, {
          name: "Retry",
          active: true,
          text: "",
          x: 0,
          y: -150,
          w: 320,
          h: 100
        });
        var plate = retryButton.node.addComponent(cc.Graphics);
        plate.fillColor = cc.color(143, 229, 196);
        plate.roundRect(-160, -50, 320, 100, 18);
        plate.fill();
        plate.strokeColor = cc.color(82, 169, 146);
        plate.lineWidth = 3;
        plate.stroke();
        var word = new cc.Node("WordArt");
        word.parent = retryButton.node;
        var sprite = word.addComponent(cc.Sprite);
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        sprite.spriteFrame = this.loadingRetryWord;
        if (this.loadingRetryWord) {
          var size = this.loadingRetryWord.getRect(), scale = Math.min(276 / size.width, 68 / size.height);
          word.setContentSize(size.width * scale, size.height * scale);
        }
      };
      Loading.prototype.onDestroy = function() {
        this.homePreparation && this.homePreparation.dispose();
        cc.game.off(cc.game.EVENT_HIDE, this.hidePreparation, this);
        cc.game.off(cc.game.EVENT_SHOW, this.showPreparation, this);
        this.unschedule(this._tryToMain);
        this.dismissLoadingRetry();
      };
      Loading.prototype._tryToMain = function() {
        this.unschedule(this._tryToMain);
        cc.director.loadScene("Main");
      };
      __decorate([ property(cc.SpriteFrame) ], Loading.prototype, "loadingRetryWord", void 0);
      __decorate([ property(cc.SpriteFrame) ], Loading.prototype, "loadingRetryPanel", void 0);
      __decorate([ property(cc.SpriteFrame) ], Loading.prototype, "loadingRetryMascot", void 0);
      __decorate([ property(cc.Font) ], Loading.prototype, "loadingRetryFont", void 0);
      Loading = __decorate([ ccclass ], Loading);
      return Loading;
    }(cc.Component);
    exports.default = Loading;
    cc._RF.pop();
  }, {
    "../Scripts/Frame/Global": "Global",
    "../Scripts/Frame/Manager/Tools": "Tools",
    GameUIKit: "GameUIKit",
    PlayPreparation: "PlayPreparation"
  } ],
  LocalMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d4a12p5SL9HIIG2HtAKmNDY", "LocalMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../FrameLog");
    var LocalMgr = function() {
      function LocalMgr() {}
      LocalMgr.read = function(key) {
        if (null != key) {
          var result = cc.sys.localStorage.getItem(key);
          result && (result = JSON.parse(result));
          FrameLog_1.default.log("storage read", key, result);
          return result;
        }
      };
      LocalMgr.save = function(key, value) {
        try {
          FrameLog_1.default.log("storage save", key, value);
          if (null != key) return cc.sys.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          FrameLog_1.default.error(error);
        }
      };
      LocalMgr.clear = function() {
        return cc.sys.localStorage.clear();
      };
      LocalMgr.rm = function(key) {
        if (null != key) return cc.sys.localStorage.removeItem(key);
      };
      return LocalMgr;
    }();
    exports.default = LocalMgr;
    cc._RF.pop();
  }, {
    "../FrameLog": "FrameLog"
  } ],
  LockMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1dd27LNBI5N8oQU3rL32S+W", "LockMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WatermelonUI = require("./WatermelonUI");
    var ConstData_1 = require("../Data/ConstData");
    var Tools_1 = require("./Tools");
    var WechatApi_1 = require("./API/WechatApi");
    var LockMgr = function() {
      function LockMgr() {}
      LockMgr.unLock = function(unlockType, nextCallback, callObject) {
        var _this = this;
        if (this.busy) return;
        this.busy = true;
        var release = WatermelonUI.pauseForAd(callObject);
        var request = WechatApi_1.default.rewardedVideo.show({
          placementKey: "start_boost",
          callObj: callObject,
          success: function(endType) {
            _this.busy = false;
            release();
            endType === ConstData_1.default.REWARDED_VIDEO_END_TYPE.END ? "function" === typeof nextCallback && nextCallback.call(callObject) : Tools_1.default.showToast(endType === ConstData_1.default.REWARDED_VIDEO_END_TYPE.NOT_END ? "Watch the full ad to unlock Triple Throw." : "Ad unavailable. Please try again.");
          }
        });
        Promise.resolve(request).then(function() {
          _this.busy = false;
          release();
        }, function() {
          _this.busy = false;
          release();
        });
      };
      LockMgr.busy = false;
      return LockMgr;
    }();
    exports.default = LockMgr;
    cc._RF.pop();
  }, {
    "../Data/ConstData": "ConstData",
    "./API/WechatApi": "WechatApi",
    "./Tools": "Tools",
    "./WatermelonUI": "WatermelonUI"
  } ],
  Main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "bbf4cUt24JOebFjxC+Ax9fw", "Main");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WatermelonUI = require("./Frame/Manager/WatermelonUI");
    var WatermelonArt_1 = require("./Frame/Manager/WatermelonArt");
    var GameDisplay_1 = require("./Display/GameDisplay/GameDisplay");
    var EndDisplay_1 = require("./Display/GameDisplay/EndDisplay");
    var SoundMgr_1 = require("./Frame/Manager/SoundMgr");
    var Tools_1 = require("./Frame/Manager/Tools");
    var WechatApi_1 = require("./Frame/Manager/API/WechatApi");
    var Global_1 = require("./Frame/Global");
    var FrameLog_1 = require("./Frame/FrameLog");
    var EventMgr_1 = require("./Frame/Manager/Event/EventMgr");
    var EventData_1 = require("./Frame/Manager/Event/EventData");
    var DisplayMgr_1 = require("./Frame/Manager/DisplayMgr");
    var ViewMgr_1 = require("./Frame/Manager/ViewMgr");
    var LanguageMgr_1 = require("./Frame/Manager/Language/LanguageMgr");
    var HomeDisplay_1 = require("./Display/GameDisplay/HomeDisplay");
    var WatermelonState_1 = require("./Frame/Manager/WatermelonState");
    var ccclass = cc._decorator.ccclass;
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.started = false;
        _this.preparingArt = false;
        _this._tryToStart = function() {
          if (_this.started || !Global_1.default.has_init.home) return;
          var loaded = WatermelonState_1.default.loadProgress();
          if (!loaded.ok) {
            _this.unschedule(_this._tryToStart);
            Tools_1.default.showModal(loaded.error, function() {
              return _this.schedule(_this._tryToStart, .1);
            }, null, _this, "CANCEL", "RETRY");
            return;
          }
          Global_1.default.extUserData = loaded.data;
          Global_1.default.has_init.user = true;
          Global_1.default.has_init.config = true;
          Tools_1.default.setExportOrder();
          WechatApi_1.default.rewardedVideo.init();
          EventMgr_1.default.instance().emit(EventData_1.default.GET_CONFIG);
          _this.started = true;
          _this.unschedule(_this._tryToStart);
          _this.openEnglishHome();
        };
        return _this;
      }
      Main_1 = Main;
      Main.prototype.openEnglishHome = function() {
        var _this = this;
        if (this.preparingArt) return;
        this.preparingArt = true;
        WatermelonArt_1.default.load().then(function(frames) {
          if (!cc.isValid(_this.node)) return;
          _this.preparingArt = false;
          WatermelonUI.registerArt(frames);
          var levelOf = function(c) {
            return c._level || c._paramData && c._paramData.levelId || Global_1.default.currLevel || Global_1.default.extUserData.curr_level;
          };
          var closeOld = function(c) {
            if (c && c.node && c.node.getComponent(GameDisplay_1.default)) {
              WatermelonUI.disposeGame(c);
              DisplayMgr_1.default.closeUI(GameDisplay_1.default, true, {
                is_emit: true
              });
            } else DisplayMgr_1.default.closeUI(EndDisplay_1.default, true, {
              is_emit: true
            });
          };
          WatermelonUI.configure({
            ads: WechatApi_1.default.rewardedVideo.getService(),
            audio: SoundMgr_1.default.audioService(),
            restart: function(c) {
              var levelId = levelOf(c), replayCompleted = !!(c._paramData && c._paramData.replayCompleted);
              closeOld(c);
              Global_1.default.currLevel = levelId;
              DisplayMgr_1.default.openUI(GameDisplay_1.default, ViewMgr_1.default.gameView, {
                levelId: levelId,
                replayCompleted: replayCompleted
              });
            },
            home: function(c) {
              var completed = !!(c._paramData && c._paramData.replayCompleted);
              closeOld(c);
              completed && (Global_1.default.currLevel = 0);
              DisplayMgr_1.default.openUI(HomeDisplay_1.default, ViewMgr_1.default.homeView, {});
            },
            end: function(c, isSuccess) {
              var param = {
                levelId: levelOf(c),
                isSuccess: isSuccess,
                replayCompleted: !!(c._paramData && c._paramData.replayCompleted)
              };
              closeOld(c);
              DisplayMgr_1.default.openUI(EndDisplay_1.default, ViewMgr_1.default.gameView, param);
            }
          });
          DisplayMgr_1.default.openUI(HomeDisplay_1.default, ViewMgr_1.default.homeView, null, function() {
            WatermelonArt_1.default.loadEntryArt(function(slot, frame) {
              if (!cc.isValid(_this.node)) return;
              WatermelonUI.updateEntryArt(slot, frame);
            });
          });
        }).catch(function() {
          if (!cc.isValid(_this.node)) return;
          _this.preparingArt = false;
          Tools_1.default.showModal("Could not load the interface. Please retry.", function() {
            return _this.openEnglishHome();
          }, null, _this, "CANCEL", "RETRY");
        });
      };
      Main.prototype.start = function() {
        Tools_1.default.initCanvas();
      };
      Main.prototype.onLoad = function() {
        cc.debug.setDisplayStats(false);
        Main_1.Ins = this;
        try {
          WechatApi_1.default.init();
          LanguageMgr_1.default.init(cc.sys.languageCode);
          ViewMgr_1.default.init({
            gameView: this.node.getChildByName("gameView"),
            homeView: this.node.getChildByName("homeView"),
            exportView: this.node.getChildByName("exportView"),
            tipView: this.node.getChildByName("tipView"),
            advView: this.node.getChildByName("advView")
          });
          this.schedule(this._tryToStart, .1);
          Tools_1.default.setKeepScreenOn(true);
        } catch (error) {
          FrameLog_1.default.error("Could not initialize the game", error);
        }
      };
      var Main_1;
      Main.Ins = null;
      Main = Main_1 = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    cc._RF.pop();
  }, {
    "./Display/GameDisplay/EndDisplay": "EndDisplay",
    "./Display/GameDisplay/GameDisplay": "GameDisplay",
    "./Display/GameDisplay/HomeDisplay": "HomeDisplay",
    "./Frame/FrameLog": "FrameLog",
    "./Frame/Global": "Global",
    "./Frame/Manager/API/WechatApi": "WechatApi",
    "./Frame/Manager/DisplayMgr": "DisplayMgr",
    "./Frame/Manager/Event/EventData": "EventData",
    "./Frame/Manager/Event/EventMgr": "EventMgr",
    "./Frame/Manager/Language/LanguageMgr": "LanguageMgr",
    "./Frame/Manager/SoundMgr": "SoundMgr",
    "./Frame/Manager/Tools": "Tools",
    "./Frame/Manager/ViewMgr": "ViewMgr",
    "./Frame/Manager/WatermelonArt": "WatermelonArt",
    "./Frame/Manager/WatermelonState": "WatermelonState",
    "./Frame/Manager/WatermelonUI": "WatermelonUI"
  } ],
  MissionFlow: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "71b2bxu6J1JJJO8IQqO3+lb", "MissionFlow");
    "use strict";
    var TikTokMissionService = require("./TikTokMissionService");
    var TEXT = {
      checking: "Checking your reward...",
      wait: "Please wait for the current request.",
      granted: "Reward received: ",
      claimed: "Reward already collected.",
      saveFailed: "Could not save your reward. Please try again.",
      notReady: "Your reward is not ready yet."
    };
    var KINDS = {
      shortcut: true,
      profile: true
    };
    function capabilityRank(sdk) {
      var supports = TikTokMissionService.supportsMethod;
      if (supports(sdk, "startEntranceMission") || supports(sdk, "getEntranceMissionReward")) return 0;
      if (supports(sdk, "addShortcut") || supports(sdk, "getShortcutMissionReward")) return 1;
      if (supports(sdk, "checkScene") || supports(sdk, "navigateToScene")) return 2;
      return 3;
    }
    function sdkCandidates() {
      var groups = [ [], [], [], [] ];
      TikTokMissionService.sdkCandidates().forEach(function(sdk) {
        groups[capabilityRank(sdk)].push(sdk);
      });
      return groups[0].concat(groups[1], groups[2], groups[3]);
    }
    function hasNativeSDK(candidates) {
      return candidates.some(function(sdk) {
        return capabilityRank(sdk) < 3 || "function" === typeof sdk.canIUse;
      });
    }
    var observedStartup = new WeakSet();
    function readEntry(sdk, method) {
      if ("function" !== typeof sdk[method]) return null;
      try {
        var entry = sdk[method]();
        if (entry && ("string" === typeof entry.scene && entry.scene || entryKind(entry))) return entry;
      } catch (_) {}
      return null;
    }
    function initialEntry(candidates) {
      for (var i = 0; i < candidates.length; i++) {
        var sdk = candidates[i];
        if (!sdk || "object" !== typeof sdk && "function" !== typeof sdk) continue;
        if (observedStartup.has(sdk)) return null;
        var entry = readEntry(sdk, "getEnterOptionsSync") || readEntry(sdk, "getLaunchOptionsSync");
        if (entry) {
          observedStartup.add(sdk);
          return entry;
        }
      }
      return null;
    }
    function entryKind(entry) {
      var scene = entry && entry.scene;
      if ("center" === scene || "021036" === scene) return "profile";
      if ("desktop_shortcut" === scene) return "shortcut";
      if (entry && "homepage" === entry.launch_from && "sidebar_card" === entry.location) return "profile";
      return null;
    }
    function MissionFlow(options) {
      options = options || {};
      var copy = {};
      for (var key in options) Object.prototype.hasOwnProperty.call(options, key) && (copy[key] = options[key]);
      options = copy;
      if (options.store && void 0 === options.reward && "function" === typeof options.render) {
        var growth = options.config || require("./PlatformConfig");
        options.reward = function(kind, draft) {
          draft.coins = (Number(draft.coins) || 0) + growth.growthReward();
        };
        if (!options.rewardText) {
          var amount = "";
          try {
            amount = "+" + growth.growthReward() + " Coins";
          } catch (_) {}
          options.rewardText = {
            shortcut: amount,
            profile: amount
          };
        }
      }
      if (!options.store || "function" !== typeof options.reward || "function" !== typeof options.render) throw new Error("MissionFlow needs store, reward(kind, draft) and render(view)");
      this.store = options.store;
      this.reward = options.reward;
      this.renderView = options.render;
      this.onGranted = options.onGranted || null;
      this.rewardText = options.rewardText || {
        shortcut: "",
        profile: ""
      };
      this.ownsMissions = !options.missions;
      this.serviceOptions = options.missionTimeoutMs ? {
        timeoutMs: options.missionTimeoutMs
      } : void 0;
      this.missions = options.missions || new TikTokMissionService(this.serviceOptions);
      this.autoNative = void 0 === options["native"];
      this["native"] = this.autoNative ? hasNativeSDK(sdkCandidates()) : !!options["native"];
      this.trackingEntries = false;
      this.entrySDK = null;
      this.entrySubscription = null;
      this.entryRetry = null;
      this.entryRetryDelay = 100;
      this.kind = null;
      this.directEntry = false;
      this.phase = "closed";
      this.message = "";
      this.version = 0;
      this.op = 0;
      this.entryOp = 0;
    }
    MissionFlow.prototype.isClaimed = function(kind) {
      return this.store.isClaimed(kind);
    };
    MissionFlow.prototype.view = function() {
      var claimed = !!this.kind && this.isClaimed(this.kind);
      var busy = "opening" === this.phase || "checking" === this.phase;
      return {
        open: null !== this.kind && !this.directEntry,
        kind: this.kind,
        phase: this.phase,
        busy: busy,
        claimed: claimed,
        message: this.message,
        native: this["native"],
        rewardText: this.kind && this.rewardText[this.kind] || "",
        action: this.directEntry ? "start" : claimed ? "none" : "idle" === this.phase && this.navigatedOnce ? "check" : "start",
        canStart: !busy && (this.directEntry || !claimed),
        canCheck: !this.directEntry && !busy && !claimed
      };
    };
    MissionFlow.prototype._render = function() {
      try {
        this.renderView(this.view());
      } catch (_) {}
    };
    MissionFlow.prototype._guard = function() {
      var self = this, version = this.version, kind = this.kind;
      return function() {
        return self.version === version && self.kind === kind;
      };
    };
    MissionFlow.prototype.refreshPlatform = function() {
      if (this.disposed) return false;
      this.trackingEntries ? this.startEntryTracking() : this.autoNative && (this["native"] = hasNativeSDK(sdkCandidates()));
      return this["native"];
    };
    MissionFlow.prototype.open = function(kind, options) {
      if (true !== KINDS[kind] || this.disposed) return;
      this.refreshPlatform();
      var direct = !!(options && true === options.navigate);
      if (direct && this.directEntry && this.kind === kind && "opening" === this.phase) return;
      this.missions.cancel();
      this.kind = kind;
      this.directEntry = direct;
      this.version++;
      this.op++;
      this.navigatedOnce = false;
      this.phase = "idle";
      this.message = "";
      if (direct && this["native"]) return this.start();
      !direct && this["native"] && this.isClaimed(kind) && (this.message = TEXT.claimed);
      this._render();
      direct || !this["native"] || this.isClaimed(kind) || this.check();
    };
    MissionFlow.prototype.start = function() {
      if (!this.kind || !this["native"] || "opening" === this.phase || "checking" === this.phase) return;
      var self = this, op = ++this.op, isCurrent = this._guard();
      this.phase = "opening";
      this.message = "";
      var request = this.missions.navigate(this.kind, {
        isCurrent: isCurrent
      });
      this._render();
      return request.then(function(r) {
        if (!isCurrent() || op !== self.op) return;
        self.phase = "idle";
        "success" === r.status && (self.navigatedOnce = true);
        self._render();
      });
    };
    MissionFlow.prototype.check = function() {
      if (!this.kind || !this["native"] || this.directEntry) return;
      if (this.isClaimed(this.kind)) {
        this.message = TEXT.claimed;
        this._render();
        return;
      }
      if ("checking" === this.phase) return this.pendingCheck;
      if ("opening" === this.phase) {
        this.message = TEXT.wait;
        this._render();
        return;
      }
      var self = this, op = ++this.op, isCurrent = this._guard(), kind = this.kind;
      this.phase = "checking";
      this.message = TEXT.checking;
      this._render();
      this.pendingCheck = this.missions.query(kind, {
        isCurrent: isCurrent
      }).then(function(r) {
        if (!isCurrent() || op !== self.op) return;
        self.pendingCheck = null;
        if (r.eligible) {
          self._grant(kind);
          return;
        }
        self.phase = "idle";
        self.message = "ineligible" === r.status ? TEXT.notReady : r.message;
        self._render();
      });
      return this.pendingCheck;
    };
    MissionFlow.prototype._saveReward = function(kind) {
      var self = this;
      return this.store.update(function(draft) {
        if (true === draft.platformClaims[kind]) return false;
        draft.platformClaims[kind] = true;
        return self.reward(kind, draft);
      });
    };
    MissionFlow.prototype._grant = function(kind) {
      var result = this._saveReward(kind);
      if (result.ok) {
        this.phase = "done";
        this.message = TEXT.granted + (this.rewardText[kind] || "");
        this._render();
        if (this.onGranted) try {
          this.onGranted(kind, result.data);
        } catch (_) {}
        return;
      }
      this.phase = "idle";
      this.message = this.isClaimed(kind) ? TEXT.claimed : TEXT.saveFailed;
      this._render();
    };
    MissionFlow.prototype.close = function() {
      this.missions.cancel();
      this.kind = null;
      this.directEntry = false;
      this.version++;
      this.op++;
      this.phase = "closed";
      this.message = "";
      this.pendingCheck = null;
      this._render();
    };
    MissionFlow.prototype.startEntryTracking = function() {
      if (this.disposed || !this.autoNative && !this["native"]) return;
      this.trackingEntries = true;
      var self = this, candidates = sdkCandidates();
      this.autoNative && (this["native"] = hasNativeSDK(candidates));
      var sdk = null, subscription = this.entrySubscription;
      for (var i = 0; i < candidates.length; i++) {
        var candidate = candidates[i];
        if ("function" !== typeof candidate.onShow) continue;
        if (candidate === this.entrySDK && subscription) {
          sdk = candidate;
          break;
        }
        var token = {
          sawShow: false
        };
        var bind = function bind(active) {
          return function(entry) {
            if (self.disposed || self.entrySubscription !== active) return;
            entry && (entry.scene || entryKind(entry)) && (active.sawShow = true);
            self.onShow(entry);
          };
        };
        var listener = bind(token), old = this.entrySubscription;
        this.entrySubscription = token;
        try {
          candidate.onShow(listener);
        } catch (_) {
          this.entrySubscription = old;
          continue;
        }
        if (this.stopEntryTracking) try {
          this.stopEntryTracking();
        } catch (_) {}
        this.entrySDK = sdk = candidate;
        this.stopEntryTracking = function(source, fn) {
          return function() {
            "function" === typeof source.offShow && source.offShow(fn);
          };
        }(candidate, listener);
        subscription = token;
        break;
      }
      if (null !== this.entryRetry && sdk && 0 === capabilityRank(sdk)) {
        clearTimeout(this.entryRetry);
        this.entryRetry = null;
      }
      if (this.autoNative && (!sdk || capabilityRank(sdk) > 0) && null === this.entryRetry) {
        this.entryRetry = setTimeout(function() {
          self.entryRetry = null;
          self.startEntryTracking();
        }, this.entryRetryDelay);
        this.entryRetryDelay = Math.min(2e3, 2 * this.entryRetryDelay);
        this.entryRetry && this.entryRetry.unref && this.entryRetry.unref();
      }
      if (!this["native"] || !sdk && !candidates.length) return;
      if (subscription && subscription.coldRead && subscription.coldSource === candidates[0]) return;
      if (subscription) {
        subscription.coldRead = true;
        subscription.coldSource = candidates[0];
      }
      return Promise.resolve().then(function() {
        if (self.disposed || self.entrySubscription !== subscription || subscription && subscription.sawShow) return;
        var entry = initialEntry(candidates), kind = entryKind(entry);
        if (kind && !self.isClaimed(kind)) return self.onShow(entry);
      });
    };
    MissionFlow.prototype._cancelPendingOnReturn = function() {
      this.op++;
      var entryOp = ++this.entryOp;
      this.pendingCheck = null;
      this.missions.cancel();
      this.entryMissions && this.entryMissions !== this.missions && this.entryMissions.onResume();
      return entryOp;
    };
    MissionFlow.prototype.onShow = function(entry) {
      if (!this["native"] || this.disposed) return;
      var self = this, op = this._cancelPendingOnReturn();
      var kind = entryKind(entry);
      var mayQuery = kind && !this.isClaimed(kind);
      var matchingPanel = mayQuery && this.kind === kind;
      if (matchingPanel || "opening" === this.phase || "checking" === this.phase) {
        this.phase = "idle";
        matchingPanel && (this.navigatedOnce = true);
        this.message = "";
        this._render();
      }
      if (!mayQuery) return;
      this.entryMissions || (this.entryMissions = this.ownsMissions ? new TikTokMissionService(this.serviceOptions) : this.missions);
      var current = function current() {
        return !self.disposed && op === self.entryOp;
      };
      return this.entryMissions.query(kind, {
        isCurrent: current
      }).then(function(result) {
        if (!current() || true !== result.eligible || self.isClaimed(kind)) return;
        var saved = self._saveReward(kind);
        if (!saved.ok || !self.isClaimed(kind)) return;
        if (self.kind === kind) {
          self.op++;
          self.phase = "done";
          self.message = "";
          self.pendingCheck = null;
        }
        var view = self.view();
        view.message = "";
        try {
          self.renderView(view);
        } catch (_) {}
        if (self.onGranted) try {
          self.onGranted(kind, saved.data, {
            source: "entry"
          });
        } catch (_) {}
      });
    };
    MissionFlow.prototype.tick = function() {
      this.missions.tick();
    };
    MissionFlow.prototype.dispose = function() {
      this.disposed = true;
      if (null !== this.entryRetry) {
        clearTimeout(this.entryRetry);
        this.entryRetry = null;
      }
      this.entrySubscription = null;
      if (this.stopEntryTracking) {
        try {
          this.stopEntryTracking();
        } catch (_) {}
        this.stopEntryTracking = null;
      }
      this.entryMissions && this.entryMissions !== this.missions && this.entryMissions.dispose();
      this.close();
      this.ownsMissions && this.missions.dispose();
    };
    MissionFlow.TEXT = TEXT;
    module.exports = MissionFlow;
    cc._RF.pop();
  }, {
    "./PlatformConfig": "PlatformConfig",
    "./TikTokMissionService": "TikTokMissionService"
  } ],
  ModalDisplay: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c38ec1Yp0JNVLYXDMQh4W9h", "ModalDisplay");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewPanel_1 = require("../../Frame/Manager/UI/ViewPanel");
    var DisplayMgr_1 = require("../../Frame/Manager/DisplayMgr");
    var UI = require("GameUIKit");
    var ResKeys = require("ResKeys");
    var ccclass = cc._decorator.ccclass;
    var ModalDisplay = function(_super) {
      __extends(ModalDisplay, _super);
      function ModalDisplay() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.page = null;
        _this.epoch = 0;
        return _this;
      }
      ModalDisplay_1 = ModalDisplay;
      ModalDisplay.getUrl = function() {
        return "modalDisplay";
      };
      ModalDisplay.prototype.initUI = function() {};
      ModalDisplay.prototype.show = function(param) {
        var _this = this;
        this.hide();
        this.node.active = true;
        var epoch = ++this.epoch;
        var page = UI.popup(cc.find("Canvas"), {
          name: "EnglishStartupRetry",
          pageId: "startup_retry",
          width: 560,
          height: 900,
          closeFrame: false,
          closeOnMask: false
        });
        this.page = page;
        var panel = page.root.getChildByName("Panel");
        var fallback = panel.addComponent(cc.Graphics);
        fallback.fillColor = cc.color(252, 246, 222);
        fallback.roundRect(-280, -450, 560, 900, 28);
        fallback.fill();
        fallback.strokeColor = cc.color(73, 100, 255);
        fallback.lineWidth = 6;
        fallback.stroke();
        var message = UI.text(page.body, {
          name: "StartupRetryMessage",
          w: 440,
          h: 240,
          text: String(param && param.content || "The game could not load. Please retry."),
          overflow: "shrink",
          color: [ 255, 255, 255 ],
          outline: [ 55, 44, 145 ],
          fontSize: 30
        });
        message.node.setContentSize(440, 240);
        message.node.setPosition(0, 50);
        var busy = false;
        var retry = UI.newButton(page.body, page.guard(function() {
          if (busy || _this.page !== page) return;
          busy = true;
          _this.hide();
          DisplayMgr_1.default.closeUI(ModalDisplay_1, false, {
            is_emit: true
          });
          param && "function" === typeof param.success && param.success.call(param.callObj, {
            confirm: true,
            cancel: false
          });
        }), {
          name: "BtnStartupRetry",
          w: 300,
          h: 92,
          x: 0,
          y: -180,
          active: true,
          text: "RETRY"
        });
        var live = function() {
          return cc.isValid(_this.node) && _this.page === page && _this.epoch === epoch;
        };
        var load = function(id, done) {
          var key = ResKeys[id];
          if (!key || "function" !== typeof key.request) return;
          key.request(function(error, asset) {
            !error && asset && live() && done(asset);
          });
        };
        load("home_home_english_ui_panel", function(frame) {
          var image = new cc.Node("PanelImage");
          image.parent = panel;
          image.setSiblingIndex(0);
          var sprite = image.addComponent(cc.Sprite);
          sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sprite.spriteFrame = frame;
          image.setContentSize(560, 900);
          fallback.enabled = false;
        });
        load("home_home_english_ui_body_font", function(font) {
          message.label.font = font;
        });
        load("home_home_english_ui_emblem", function(frame) {
          var image = new cc.Node("KitchenMascot");
          image.parent = page.body;
          var rect = frame.getRect(), ratio = Math.min(300 / rect.width, 180 / rect.height);
          var sprite = image.addComponent(cc.Sprite);
          sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sprite.spriteFrame = frame;
          image.setContentSize(rect.width * ratio, rect.height * ratio);
          image.setPosition(0, -345);
        });
        load("home_home_english_ui_word_retry", function(frame) {
          retry.node.children.forEach(function(n) {
            n.active = false;
          });
          var word = new cc.Node("WordArt");
          word.parent = retry.node;
          var rect = frame.getRect(), ratio = Math.min(276 / rect.width, 76 / rect.height);
          var sprite = word.addComponent(cc.Sprite);
          sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
          sprite.spriteFrame = frame;
          word.setContentSize(rect.width * ratio, rect.height * ratio);
        });
      };
      ModalDisplay.prototype.hide = function() {
        this.epoch++;
        if (this.page) {
          var page = this.page;
          this.page = null;
          page.close();
        }
        this.node.active = false;
      };
      ModalDisplay.prototype.onDestroy = function() {
        this.hide();
        this.clear();
      };
      ModalDisplay.prototype.playIn = function() {};
      ModalDisplay.prototype.playOut = function() {};
      var ModalDisplay_1;
      ModalDisplay = ModalDisplay_1 = __decorate([ ccclass ], ModalDisplay);
      return ModalDisplay;
    }(ViewPanel_1.default);
    exports.default = ModalDisplay;
    cc._RF.pop();
  }, {
    "../../Frame/Manager/DisplayMgr": "DisplayMgr",
    "../../Frame/Manager/UI/ViewPanel": "ViewPanel",
    GameUIKit: "GameUIKit",
    ResKeys: "ResKeys"
  } ],
  PhysicsClock: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7bc6cHNT79NSrTtq85Tm/9W", "PhysicsClock");
    "use strict";
    (function(root, factory) {
      var api = factory();
      "object" === typeof module && module && module.exports && (module.exports = api);
      root && (root.TikTokPhysicsClock = api);
      var engine = root && root.cc;
      engine && api.autoInstall(engine);
    })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0, function() {
      var VERSION = "1.0", FIXED_STEP = 1 / 60;
      function manager(cc) {
        try {
          return cc && cc.director && cc.director.getPhysicsManager ? cc.director.getPhysicsManager() : null;
        } catch (e) {
          return null;
        }
      }
      function install(cc) {
        var pm = manager(cc);
        if (!pm) return false;
        pm.enabledAccumulator = true;
        return true === pm.enabledAccumulator;
      }
      function scale(dt) {
        return "number" === typeof dt && dt > 0 && isFinite(dt) ? dt / FIXED_STEP : 1;
      }
      function force(v, dt, cc) {
        var k = scale(dt), lib = cc || "undefined" !== typeof globalThis && globalThis.cc;
        var x = v && v.x || 0, y = v && v.y || 0;
        return lib && lib.v2 ? lib.v2(x * k, y * k) : {
          x: x * k,
          y: y * k
        };
      }
      var hooked = false;
      function autoInstall(cc) {
        var on = install(cc);
        if (!hooked && cc && cc.director && cc.director.on && cc.Director && cc.Director.EVENT_BEFORE_SCENE_LAUNCH) {
          cc.director.on(cc.Director.EVENT_BEFORE_SCENE_LAUNCH, function() {
            install(cc);
          });
          hooked = true;
        }
        !on && cc && cc.game && cc.game.once && cc.game.EVENT_GAME_INITED && cc.game.once(cc.game.EVENT_GAME_INITED, function() {
          install(cc);
        });
        return on;
      }
      return {
        VERSION: VERSION,
        FIXED_STEP: FIXED_STEP,
        install: install,
        scale: scale,
        force: force,
        autoInstall: autoInstall
      };
    });
    cc._RF.pop();
  }, {} ],
  PlatformConfig: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "65d4eB1Lx5PIIcVvUI8b8Jd", "PlatformConfig");
    "use strict";
    var config = {
      kitVersion: 2,
      gameId: "watermelon-slice",
      appId: "7683427172773644296",
      clientKey: "mgq7o8c3rbhdx2kv",
      normalLevelCoins: 0,
      adDisplay: {
        enabled: true,
        channel: "production",
        remoteUrl: "",
        refreshAfterMs: 6e4,
        requestTimeoutMs: 1500
      },
      rewardedPlacements: [ {
        name: "Rewarded 2",
        id: "ad7683064432721709074"
      }, {
        name: "Rewarded",
        id: "ad7683076047361067016"
      }, {
        name: "Rewarded",
        id: "ad7683199506230233095"
      } ],
      placementMap: {
        revive: 0,
        hint: 0,
        start_boost: 0,
        skin: 1,
        background: 1,
        double_coins: 2,
        gift: 2
      }
    };
    config.getAdUnitId = function(key) {
      var index = config.placementMap[key];
      return "number" === typeof index && config.rewardedPlacements[index] ? config.rewardedPlacements[index].id : "";
    };
    config.saveKey = function() {
      return config.gameId + ":" + config.appId + ":save:v1";
    };
    config.GROWTH_REWARD_B = 5;
    config.growthReward = function() {
      var b = config.normalLevelCoins;
      if ("number" !== typeof b || !(b > 0) || Math.floor(b) !== b) throw new Error("PlatformConfig.js: set normalLevelCoins to B (unlock_table.json normal_level_coins)");
      return config.GROWTH_REWARD_B * b;
    };
    module.exports = config;
    cc._RF.pop();
  }, {} ],
  PlayPreparation: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "83939UH68lMjJpaKJPHe501", "PlayPreparation");
    "use strict";
    module.exports = function createPlayPreparation(o) {
      var epoch = 0, pending = false, disposed = false, clock = null, hidden = false, last = 0, idle = 0, requestHandle = null;
      function stop() {
        if (null !== clock) {
          o.clearInterval(clock);
          clock = null;
        }
      }
      function current(t) {
        return !disposed && t === epoch && o.isCurrent();
      }
      function abandon() {
        var handle = requestHandle;
        requestHandle = null;
        handle && "function" === typeof handle.cancel && handle.cancel();
      }
      function invalidate() {
        epoch++;
        pending = false;
        stop();
        abandon();
      }
      function failure(t, error) {
        if (!current(t)) return;
        pending = false;
        stop();
        abandon();
        o.showRetry(error, function() {
          current(t) && start();
        });
      }
      function start() {
        if (disposed || pending || !o.isCurrent()) return;
        var t = ++epoch;
        pending = true;
        idle = 0;
        last = o.now();
        stop();
        clock = o.setInterval(function() {
          var now = o.now(), dt = Math.max(0, now - last);
          last = now;
          dt > 1e3 && (dt = 200);
          if (!current(t)) {
            invalidate();
            return;
          }
          hidden || (idle += dt);
          idle >= o.idleMs && failure(t, new Error("Game loading did not answer. Please retry."));
        }, 200);
        var returnedHandle = o.request(function(error) {
          if (!current(t) || !pending) return;
          if (error) {
            failure(t, error);
            return;
          }
          pending = false;
          stop();
          requestHandle = null;
          epoch++;
          o.enter();
        }, function() {
          if (current(t) && pending) {
            idle = 0;
            last = o.now();
          }
        });
        current(t) && pending && (requestHandle = returnedHandle);
      }
      return {
        start: start,
        cancel: invalidate,
        hide: function hide() {
          hidden = true;
          last = o.now();
        },
        show: function show() {
          hidden = false;
          last = o.now();
        },
        dispose: function dispose() {
          invalidate();
          disposed = true;
        },
        state: function state() {
          return {
            epoch: epoch,
            pending: pending,
            disposed: disposed
          };
        }
      };
    };
    cc._RF.pop();
  }, {} ],
  PoolMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ca3ee2ZbONNEKHHxO2hkUuK", "PoolMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../FrameLog");
    var Global_1 = require("../Global");
    var PoolMgr = function() {
      function PoolMgr() {}
      PoolMgr.addToCaches = function(url, prefab, cnt) {
        void 0 === cnt && (cnt = 1);
        if (url && prefab) {
          if (this.caches[url]) {
            FrameLog_1.default.warn("addPrefabToCaches", url + "\u5df2\u5b58\u5728");
            return false;
          }
          this.caches[url] = prefab;
          this.createToPool(url, cnt);
          return true;
        }
      };
      PoolMgr.createToPool = function(url, cnt) {
        void 0 === cnt && (cnt = 1);
        if (!url || !this.caches[url]) return;
        null == this.gamePool[url] && (this.gamePool[url] = new cc.NodePool());
        cnt -= this.gamePool[url].size();
        for (var i = 0; i < cnt; i++) {
          var item = cc.instantiate(this.caches[url]);
          this.gamePool[url].put(item);
        }
      };
      PoolMgr.putNodeToPool = function(url, item) {
        if (null == item || "" == url || null == url) {
          FrameLog_1.default.warn("putNodeToPool fail", url, item);
          return;
        }
        null == this.gamePool[url] && (this.gamePool[url] = new cc.NodePool());
        item.parent = null;
        this.gamePool[url].put(item);
      };
      PoolMgr.getNodeFromPool = function(url) {
        var item = null;
        null == this.gamePool[url] && (this.gamePool[url] = new cc.NodePool());
        this.gamePool[url].size() > 0 ? item = this.gamePool[url].get() : this.caches[url] ? item = cc.instantiate(this.caches[url]) : FrameLog_1.default.log("PoolMgr empty", url, item);
        return item;
      };
      PoolMgr.getAsyncNodeToPool = function(url, callFun) {
        var _this = this;
        if (!url) {
          FrameLog_1.default.warn("getAsyncNodeToPool", "url\u4e3a\u7a7a");
          return;
        }
        var item = this.getNodeFromPool(url);
        item ? callFun && callFun(item) : "gameDisplay" === url || "endDisplay" === url ? Global_1.default.bundle.game.load("game/prefab/" + url, cc.Prefab, function(err, prefab) {
          if (err) {
            FrameLog_1.default.error("PoolMgr\u52a0\u8f7dprefab\u5931\u8d25", url, err);
            return;
          }
          _this.addToCaches(url, prefab);
          item = _this.getNodeFromPool(url);
          callFun && callFun(item);
        }) : Global_1.default.bundle.home.load("home/prefab/display/" + url, cc.Prefab, function(err, prefab) {
          if (err) {
            FrameLog_1.default.error("PoolMgr\u52a0\u8f7dprefab\u5931\u8d25", url, err);
            return;
          }
          _this.addToCaches(url, prefab);
          item = _this.getNodeFromPool(url);
          callFun && callFun(item);
        });
      };
      PoolMgr.caches = {};
      PoolMgr.gamePool = {};
      return PoolMgr;
    }();
    exports.default = PoolMgr;
    cc._RF.pop();
  }, {
    "../FrameLog": "FrameLog",
    "../Global": "Global"
  } ],
  ResKeys: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1465d/ZcJxN45YUhu01UG3E", "ResKeys");
    "use strict";
    (function(root) {
      var L = {
        audio_game_audio_0: function audio_game_audio_0(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/0", cc.AudioClip, cb);
        },
        audio_game_audio_3: function audio_game_audio_3(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/3", cc.AudioClip, cb);
        },
        audio_game_audio_4: function audio_game_audio_4(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/4", cc.AudioClip, cb);
        },
        audio_game_audio_5: function audio_game_audio_5(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/5", cc.AudioClip, cb);
        },
        audio_game_audio_boom: function audio_game_audio_boom(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/boom", cc.AudioClip, cb);
        },
        audio_game_audio_cut: function audio_game_audio_cut(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/cut", cc.AudioClip, cb);
        },
        audio_game_audio_juice: function audio_game_audio_juice(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/juice", cc.AudioClip, cb);
        },
        audio_game_audio_water: function audio_game_audio_water(cb) {
          cc.assetManager.getBundle("audio").load("game/audio/water", cc.AudioClip, cb);
        },
        audio_home_audio_bg: function audio_home_audio_bg(cb) {
          cc.assetManager.getBundle("audio").load("home/audio/bg", cc.AudioClip, cb);
        },
        audio_home_audio_check: function audio_home_audio_check(cb) {
          cc.assetManager.getBundle("audio").load("home/audio/check", cc.AudioClip, cb);
        },
        game_game_image_end_bg: function game_game_image_end_bg(cb) {
          cc.assetManager.getBundle("game").load("game/image/end/bg", cc.SpriteFrame, cb);
        },
        game_game_image_end_db: function game_game_image_end_db(cb) {
          cc.assetManager.getBundle("game").load("game/image/end/db", cc.SpriteFrame, cb);
        },
        game_game_image_end_victory: function game_game_image_end_victory(cb) {
          cc.assetManager.getBundle("game").load("game/image/end/victory", cc.SpriteFrame, cb);
        },
        game_game_image_game_3s_3s_tex: function game_game_image_game_3s_3s_tex(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/3s/3s_tex", cc.JsonAsset, cb);
        },
        game_game_image_game_3s_3s_tex_spriteframe: function game_game_image_game_3s_3s_tex_spriteframe(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/3s/3s_tex", cc.SpriteFrame, cb);
        },
        game_game_image_game_4s_4s_tex: function game_game_image_game_4s_4s_tex(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/4s/4s_tex", cc.JsonAsset, cb);
        },
        game_game_image_game_4s_4s_tex_spriteframe: function game_game_image_game_4s_4s_tex_spriteframe(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/4s/4s_tex", cc.SpriteFrame, cb);
        },
        game_game_image_game_5s_5s_tex: function game_game_image_game_5s_5s_tex(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/5s/5s_tex", cc.JsonAsset, cb);
        },
        game_game_image_game_5s_5s_tex_spriteframe: function game_game_image_game_5s_5s_tex_spriteframe(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/5s/5s_tex", cc.SpriteFrame, cb);
        },
        game_game_image_game_anim_3lf_tex: function game_game_image_game_anim_3lf_tex(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/anim/3LF_tex", cc.JsonAsset, cb);
        },
        game_game_image_game_anim_3lf_tex_spriteframe: function game_game_image_game_anim_3lf_tex_spriteframe(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/anim/3LF_tex", cc.SpriteFrame, cb);
        },
        game_game_image_game_assets: function game_game_image_game_assets(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/assets", cc.ParticleAsset, cb);
        },
        game_game_image_game_bg: function game_game_image_game_bg(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/bg", cc.SpriteFrame, cb);
        },
        game_game_image_game_bg2: function game_game_image_game_bg2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/bg2", cc.SpriteFrame, cb);
        },
        game_game_image_game_bz: function game_game_image_game_bz(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/bz", cc.SpriteFrame, cb);
        },
        game_game_image_game_close: function game_game_image_game_close(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/close", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_b: function game_game_image_game_core_b(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/b", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_b1: function game_game_image_game_core_b1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/b1", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_b2: function game_game_image_game_core_b2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/b2", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_b3: function game_game_image_game_core_b3(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/b3", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_b4: function game_game_image_game_core_b4(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/b4", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_b5: function game_game_image_game_core_b5(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/b5", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_b6: function game_game_image_game_core_b6(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/b6", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_g: function game_game_image_game_core_g(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/g", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_g1: function game_game_image_game_core_g1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/g1", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_g2: function game_game_image_game_core_g2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/g2", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_g3: function game_game_image_game_core_g3(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/g3", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_g4: function game_game_image_game_core_g4(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/g4", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_g5: function game_game_image_game_core_g5(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/g5", cc.SpriteFrame, cb);
        },
        game_game_image_game_core_g6: function game_game_image_game_core_g6(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/core/g6", cc.SpriteFrame, cb);
        },
        game_game_image_game_cs_cs_tex: function game_game_image_game_cs_cs_tex(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/cs/cs_tex", cc.JsonAsset, cb);
        },
        game_game_image_game_cs_cs_tex_spriteframe: function game_game_image_game_cs_cs_tex_spriteframe(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/cs/cs_tex", cc.SpriteFrame, cb);
        },
        game_game_image_game_d1_2: function game_game_image_game_d1_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/d1-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_d1: function game_game_image_game_d1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/d1", cc.SpriteFrame, cb);
        },
        game_game_image_game_dyy: function game_game_image_game_dyy(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/dyy", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_b: function game_game_image_game_juice_b(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/b", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_b1: function game_game_image_game_juice_b1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/b1", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_b2: function game_game_image_game_juice_b2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/b2", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_b3: function game_game_image_game_juice_b3(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/b3", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_b4: function game_game_image_game_juice_b4(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/b4", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_b5: function game_game_image_game_juice_b5(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/b5", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_b6: function game_game_image_game_juice_b6(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/b6", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_g: function game_game_image_game_juice_g(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/g", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_g1: function game_game_image_game_juice_g1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/g1", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_g2: function game_game_image_game_juice_g2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/g2", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_g3: function game_game_image_game_juice_g3(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/g3", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_g4: function game_game_image_game_juice_g4(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/g4", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_g5: function game_game_image_game_juice_g5(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/g5", cc.SpriteFrame, cb);
        },
        game_game_image_game_juice_g6: function game_game_image_game_juice_g6(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/juice/g6", cc.SpriteFrame, cb);
        },
        game_game_image_game_k: function game_game_image_game_k(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/k", cc.SpriteFrame, cb);
        },
        game_game_image_game_k1: function game_game_image_game_k1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/k1", cc.SpriteFrame, cb);
        },
        game_game_image_game_light: function game_game_image_game_light(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/light", cc.SpriteFrame, cb);
        },
        game_game_image_game_line1: function game_game_image_game_line1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/line1", cc.SpriteFrame, cb);
        },
        game_game_image_game_line2: function game_game_image_game_line2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/line2", cc.SpriteFrame, cb);
        },
        game_game_image_game_open: function game_game_image_game_open(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/open", cc.SpriteFrame, cb);
        },
        game_game_image_game_pj: function game_game_image_game_pj(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/pj", cc.SpriteFrame, cb);
        },
        game_game_image_game_point: function game_game_image_game_point(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/point", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s1_1: function game_game_image_game_tool_s1_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s1-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s1_2: function game_game_image_game_tool_s1_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s1-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s1: function game_game_image_game_tool_s1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s10_1: function game_game_image_game_tool_s10_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s10-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s10_2: function game_game_image_game_tool_s10_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s10-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s10: function game_game_image_game_tool_s10(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s10", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s11_1: function game_game_image_game_tool_s11_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s11-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s11_2: function game_game_image_game_tool_s11_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s11-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s11: function game_game_image_game_tool_s11(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s11", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s2_1: function game_game_image_game_tool_s2_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s2-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s2_2: function game_game_image_game_tool_s2_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s2-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s2: function game_game_image_game_tool_s2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s3_1: function game_game_image_game_tool_s3_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s3-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s3_2: function game_game_image_game_tool_s3_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s3-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s3: function game_game_image_game_tool_s3(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s3", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s4_1: function game_game_image_game_tool_s4_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s4-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s4_2: function game_game_image_game_tool_s4_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s4-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s4: function game_game_image_game_tool_s4(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s4", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s5_1: function game_game_image_game_tool_s5_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s5-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s5_2: function game_game_image_game_tool_s5_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s5-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s5: function game_game_image_game_tool_s5(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s5", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s6_1: function game_game_image_game_tool_s6_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s6-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s6_2: function game_game_image_game_tool_s6_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s6-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s6: function game_game_image_game_tool_s6(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s6", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s7_1: function game_game_image_game_tool_s7_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s7-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s7_2: function game_game_image_game_tool_s7_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s7-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s7: function game_game_image_game_tool_s7(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s7", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s8_1: function game_game_image_game_tool_s8_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s8-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s8_2: function game_game_image_game_tool_s8_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s8-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s8: function game_game_image_game_tool_s8(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s8", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s9_1: function game_game_image_game_tool_s9_1(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s9-1", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s9_2: function game_game_image_game_tool_s9_2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s9-2", cc.SpriteFrame, cb);
        },
        game_game_image_game_tool_s9: function game_game_image_game_tool_s9(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/tool/s9", cc.SpriteFrame, cb);
        },
        game_game_image_game_xg: function game_game_image_game_xg(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/xg", cc.SpriteFrame, cb);
        },
        game_game_image_game_xyy: function game_game_image_game_xyy(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/xyy", cc.SpriteFrame, cb);
        },
        game_game_image_game_ydq: function game_game_image_game_ydq(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/ydq", cc.SpriteFrame, cb);
        },
        game_game_image_game_yy: function game_game_image_game_yy(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/yy", cc.SpriteFrame, cb);
        },
        game_game_image_game_z2: function game_game_image_game_z2(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/z2", cc.SpriteFrame, cb);
        },
        game_game_image_game_zi: function game_game_image_game_zi(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/zi", cc.SpriteFrame, cb);
        },
        game_game_image_game_zzj: function game_game_image_game_zzj(cb) {
          cc.assetManager.getBundle("game").load("game/image/game/zzj", cc.SpriteFrame, cb);
        },
        game_game_prefab_enddisplay: function game_game_prefab_enddisplay(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/endDisplay", cc.Prefab, cb);
        },
        game_game_prefab_fruit_juice: function game_game_prefab_fruit_juice(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/juice", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s1: function game_game_prefab_fruit_s1(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s1", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s10: function game_game_prefab_fruit_s10(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s10", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s11: function game_game_prefab_fruit_s11(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s11", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s2: function game_game_prefab_fruit_s2(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s2", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s3: function game_game_prefab_fruit_s3(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s3", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s4: function game_game_prefab_fruit_s4(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s4", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s5: function game_game_prefab_fruit_s5(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s5", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s6: function game_game_prefab_fruit_s6(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s6", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s7: function game_game_prefab_fruit_s7(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s7", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s8: function game_game_prefab_fruit_s8(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s8", cc.Prefab, cb);
        },
        game_game_prefab_fruit_s9: function game_game_prefab_fruit_s9(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/fruit/s9", cc.Prefab, cb);
        },
        game_game_prefab_gamedisplay: function game_game_prefab_gamedisplay(cb) {
          cc.assetManager.getBundle("game").load("game/prefab/gameDisplay", cc.Prefab, cb);
        },
        home_home_english_ui_body_font: function home_home_english_ui_body_font(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/body-font", cc.TTFFont, cb);
        },
        home_home_english_ui_digit_0: function home_home_english_ui_digit_0(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-0", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_1: function home_home_english_ui_digit_1(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-1", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_2: function home_home_english_ui_digit_2(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-2", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_3: function home_home_english_ui_digit_3(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-3", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_4: function home_home_english_ui_digit_4(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-4", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_5: function home_home_english_ui_digit_5(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-5", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_6: function home_home_english_ui_digit_6(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-6", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_7: function home_home_english_ui_digit_7(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-7", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_8: function home_home_english_ui_digit_8(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-8", cc.SpriteFrame, cb);
        },
        home_home_english_ui_digit_9: function home_home_english_ui_digit_9(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/digit-9", cc.SpriteFrame, cb);
        },
        home_home_english_ui_emblem: function home_home_english_ui_emblem(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/emblem", cc.SpriteFrame, cb);
        },
        home_home_english_ui_entry_profile: function home_home_english_ui_entry_profile(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/entry-profile", cc.SpriteFrame, cb);
        },
        home_home_english_ui_entry_shortcut: function home_home_english_ui_entry_shortcut(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/entry-shortcut", cc.SpriteFrame, cb);
        },
        home_home_english_ui_icon_close: function home_home_english_ui_icon_close(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/icon-close", cc.SpriteFrame, cb);
        },
        home_home_english_ui_icon_pause: function home_home_english_ui_icon_pause(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/icon-pause", cc.SpriteFrame, cb);
        },
        home_home_english_ui_icon_settings: function home_home_english_ui_icon_settings(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/icon-settings", cc.SpriteFrame, cb);
        },
        home_home_english_ui_ofl: function home_home_english_ui_ofl(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/OFL", cc.TextAsset, cb);
        },
        home_home_english_ui_panel: function home_home_english_ui_panel(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/panel", cc.SpriteFrame, cb);
        },
        home_home_english_ui_symbol_minus: function home_home_english_ui_symbol_minus(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/symbol-minus", cc.SpriteFrame, cb);
        },
        home_home_english_ui_symbol_percent: function home_home_english_ui_symbol_percent(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/symbol-percent", cc.SpriteFrame, cb);
        },
        home_home_english_ui_symbol_plus: function home_home_english_ui_symbol_plus(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/symbol-plus", cc.SpriteFrame, cb);
        },
        home_home_english_ui_title_paused: function home_home_english_ui_title_paused(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/title-paused", cc.SpriteFrame, cb);
        },
        home_home_english_ui_title_result: function home_home_english_ui_title_result(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/title-result", cc.SpriteFrame, cb);
        },
        home_home_english_ui_title_revive: function home_home_english_ui_title_revive(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/title-revive", cc.SpriteFrame, cb);
        },
        home_home_english_ui_title_settings: function home_home_english_ui_title_settings(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/title-settings", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_continue: function home_home_english_ui_word_continue(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-continue", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_energy: function home_home_english_ui_word_energy(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-energy", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_general: function home_home_english_ui_word_general(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-general", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_home: function home_home_english_ui_word_home(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-home", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_how_to_play: function home_home_english_ui_word_how_to_play(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-how-to-play", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_music: function home_home_english_ui_word_music(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-music", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_no_thanks: function home_home_english_ui_word_no_thanks(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-no-thanks", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_off: function home_home_english_ui_word_off(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-off", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_on: function home_home_english_ui_word_on(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-on", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_retry: function home_home_english_ui_word_retry(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-retry", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_revive: function home_home_english_ui_word_revive(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-revive", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_sfx: function home_home_english_ui_word_sfx(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-sfx", cc.SpriteFrame, cb);
        },
        home_home_english_ui_word_sound: function home_home_english_ui_word_sound(cb) {
          cc.assetManager.getBundle("home").load("home/english-ui/word-sound", cc.SpriteFrame, cb);
        },
        home_home_image_banner_alert: function home_home_image_banner_alert(cb) {
          cc.assetManager.getBundle("home").load("home/image/banner/alert", cc.SpriteFrame, cb);
        },
        home_home_image_banner_toast: function home_home_image_banner_toast(cb) {
          cc.assetManager.getBundle("home").load("home/image/banner/toast", cc.SpriteFrame, cb);
        },
        home_home_image_hand: function home_home_image_hand(cb) {
          cc.assetManager.getBundle("home").load("home/image/hand", cc.SpriteFrame, cb);
        },
        home_home_image_home_bg: function home_home_image_home_bg(cb) {
          cc.assetManager.getBundle("home").load("home/image/home/bg", cc.SpriteFrame, cb);
        },
        home_home_image_home_button: function home_home_image_home_button(cb) {
          cc.assetManager.getBundle("home").load("home/image/home/button", cc.SpriteFrame, cb);
        },
        home_home_image_home_mn_mn: function home_home_image_home_mn_mn(cb) {
          cc.assetManager.getBundle("home").load("home/image/home/mn/mn", cc.SpriteFrame, cb);
        },
        home_home_image_labelbg: function home_home_image_labelbg(cb) {
          cc.assetManager.getBundle("home").load("home/image/labelBg", cc.SpriteFrame, cb);
        },
        home_home_image_mask: function home_home_image_mask(cb) {
          cc.assetManager.getBundle("home").load("home/image/mask", cc.SpriteFrame, cb);
        },
        home_home_image_mask2: function home_home_image_mask2(cb) {
          cc.assetManager.getBundle("home").load("home/image/mask2", cc.SpriteFrame, cb);
        },
        home_home_image_trea_bg: function home_home_image_trea_bg(cb) {
          cc.assetManager.getBundle("home").load("home/image/trea/bg", cc.SpriteFrame, cb);
        },
        home_home_image_video: function home_home_image_video(cb) {
          cc.assetManager.getBundle("home").load("home/image/video", cc.SpriteFrame, cb);
        },
        home_home_prefab_display_homedisplay: function home_home_prefab_display_homedisplay(cb) {
          cc.assetManager.getBundle("home").load("home/prefab/display/homeDisplay", cc.Prefab, cb);
        },
        home_home_prefab_display_modaldisplay: function home_home_prefab_display_modaldisplay(cb) {
          cc.assetManager.getBundle("home").load("home/prefab/display/modalDisplay", cc.Prefab, cb);
        },
        home_home_prefab_hand: function home_home_prefab_hand(cb) {
          cc.assetManager.getBundle("home").load("home/prefab/hand", cc.Prefab, cb);
        }
      };
      function k(id, path, type, bundle) {
        return Object.freeze({
          __resKey: 1,
          id: id,
          path: path,
          type: type,
          bundle: bundle,
          request: L[id]
        });
      }
      var ResKeys = {
        audio_game_audio_0: k("audio_game_audio_0", "game/audio/0", "AudioClip", "audio"),
        audio_game_audio_3: k("audio_game_audio_3", "game/audio/3", "AudioClip", "audio"),
        audio_game_audio_4: k("audio_game_audio_4", "game/audio/4", "AudioClip", "audio"),
        audio_game_audio_5: k("audio_game_audio_5", "game/audio/5", "AudioClip", "audio"),
        audio_game_audio_boom: k("audio_game_audio_boom", "game/audio/boom", "AudioClip", "audio"),
        audio_game_audio_cut: k("audio_game_audio_cut", "game/audio/cut", "AudioClip", "audio"),
        audio_game_audio_juice: k("audio_game_audio_juice", "game/audio/juice", "AudioClip", "audio"),
        audio_game_audio_water: k("audio_game_audio_water", "game/audio/water", "AudioClip", "audio"),
        audio_home_audio_bg: k("audio_home_audio_bg", "home/audio/bg", "AudioClip", "audio"),
        audio_home_audio_check: k("audio_home_audio_check", "home/audio/check", "AudioClip", "audio"),
        game_game_image_end_bg: k("game_game_image_end_bg", "game/image/end/bg", "SpriteFrame", "game"),
        game_game_image_end_db: k("game_game_image_end_db", "game/image/end/db", "SpriteFrame", "game"),
        game_game_image_end_victory: k("game_game_image_end_victory", "game/image/end/victory", "SpriteFrame", "game"),
        game_game_image_game_3s_3s_tex: k("game_game_image_game_3s_3s_tex", "game/image/game/3s/3s_tex", "JsonAsset", "game"),
        game_game_image_game_3s_3s_tex_spriteframe: k("game_game_image_game_3s_3s_tex_spriteframe", "game/image/game/3s/3s_tex", "SpriteFrame", "game"),
        game_game_image_game_4s_4s_tex: k("game_game_image_game_4s_4s_tex", "game/image/game/4s/4s_tex", "JsonAsset", "game"),
        game_game_image_game_4s_4s_tex_spriteframe: k("game_game_image_game_4s_4s_tex_spriteframe", "game/image/game/4s/4s_tex", "SpriteFrame", "game"),
        game_game_image_game_5s_5s_tex: k("game_game_image_game_5s_5s_tex", "game/image/game/5s/5s_tex", "JsonAsset", "game"),
        game_game_image_game_5s_5s_tex_spriteframe: k("game_game_image_game_5s_5s_tex_spriteframe", "game/image/game/5s/5s_tex", "SpriteFrame", "game"),
        game_game_image_game_anim_3lf_tex: k("game_game_image_game_anim_3lf_tex", "game/image/game/anim/3LF_tex", "JsonAsset", "game"),
        game_game_image_game_anim_3lf_tex_spriteframe: k("game_game_image_game_anim_3lf_tex_spriteframe", "game/image/game/anim/3LF_tex", "SpriteFrame", "game"),
        game_game_image_game_assets: k("game_game_image_game_assets", "game/image/game/assets", "ParticleAsset", "game"),
        game_game_image_game_bg: k("game_game_image_game_bg", "game/image/game/bg", "SpriteFrame", "game"),
        game_game_image_game_bg2: k("game_game_image_game_bg2", "game/image/game/bg2", "SpriteFrame", "game"),
        game_game_image_game_bz: k("game_game_image_game_bz", "game/image/game/bz", "SpriteFrame", "game"),
        game_game_image_game_close: k("game_game_image_game_close", "game/image/game/close", "SpriteFrame", "game"),
        game_game_image_game_core_b: k("game_game_image_game_core_b", "game/image/game/core/b", "SpriteFrame", "game"),
        game_game_image_game_core_b1: k("game_game_image_game_core_b1", "game/image/game/core/b1", "SpriteFrame", "game"),
        game_game_image_game_core_b2: k("game_game_image_game_core_b2", "game/image/game/core/b2", "SpriteFrame", "game"),
        game_game_image_game_core_b3: k("game_game_image_game_core_b3", "game/image/game/core/b3", "SpriteFrame", "game"),
        game_game_image_game_core_b4: k("game_game_image_game_core_b4", "game/image/game/core/b4", "SpriteFrame", "game"),
        game_game_image_game_core_b5: k("game_game_image_game_core_b5", "game/image/game/core/b5", "SpriteFrame", "game"),
        game_game_image_game_core_b6: k("game_game_image_game_core_b6", "game/image/game/core/b6", "SpriteFrame", "game"),
        game_game_image_game_core_g: k("game_game_image_game_core_g", "game/image/game/core/g", "SpriteFrame", "game"),
        game_game_image_game_core_g1: k("game_game_image_game_core_g1", "game/image/game/core/g1", "SpriteFrame", "game"),
        game_game_image_game_core_g2: k("game_game_image_game_core_g2", "game/image/game/core/g2", "SpriteFrame", "game"),
        game_game_image_game_core_g3: k("game_game_image_game_core_g3", "game/image/game/core/g3", "SpriteFrame", "game"),
        game_game_image_game_core_g4: k("game_game_image_game_core_g4", "game/image/game/core/g4", "SpriteFrame", "game"),
        game_game_image_game_core_g5: k("game_game_image_game_core_g5", "game/image/game/core/g5", "SpriteFrame", "game"),
        game_game_image_game_core_g6: k("game_game_image_game_core_g6", "game/image/game/core/g6", "SpriteFrame", "game"),
        game_game_image_game_cs_cs_tex: k("game_game_image_game_cs_cs_tex", "game/image/game/cs/cs_tex", "JsonAsset", "game"),
        game_game_image_game_cs_cs_tex_spriteframe: k("game_game_image_game_cs_cs_tex_spriteframe", "game/image/game/cs/cs_tex", "SpriteFrame", "game"),
        game_game_image_game_d1_2: k("game_game_image_game_d1_2", "game/image/game/d1-2", "SpriteFrame", "game"),
        game_game_image_game_d1: k("game_game_image_game_d1", "game/image/game/d1", "SpriteFrame", "game"),
        game_game_image_game_dyy: k("game_game_image_game_dyy", "game/image/game/dyy", "SpriteFrame", "game"),
        game_game_image_game_juice_b: k("game_game_image_game_juice_b", "game/image/game/juice/b", "SpriteFrame", "game"),
        game_game_image_game_juice_b1: k("game_game_image_game_juice_b1", "game/image/game/juice/b1", "SpriteFrame", "game"),
        game_game_image_game_juice_b2: k("game_game_image_game_juice_b2", "game/image/game/juice/b2", "SpriteFrame", "game"),
        game_game_image_game_juice_b3: k("game_game_image_game_juice_b3", "game/image/game/juice/b3", "SpriteFrame", "game"),
        game_game_image_game_juice_b4: k("game_game_image_game_juice_b4", "game/image/game/juice/b4", "SpriteFrame", "game"),
        game_game_image_game_juice_b5: k("game_game_image_game_juice_b5", "game/image/game/juice/b5", "SpriteFrame", "game"),
        game_game_image_game_juice_b6: k("game_game_image_game_juice_b6", "game/image/game/juice/b6", "SpriteFrame", "game"),
        game_game_image_game_juice_g: k("game_game_image_game_juice_g", "game/image/game/juice/g", "SpriteFrame", "game"),
        game_game_image_game_juice_g1: k("game_game_image_game_juice_g1", "game/image/game/juice/g1", "SpriteFrame", "game"),
        game_game_image_game_juice_g2: k("game_game_image_game_juice_g2", "game/image/game/juice/g2", "SpriteFrame", "game"),
        game_game_image_game_juice_g3: k("game_game_image_game_juice_g3", "game/image/game/juice/g3", "SpriteFrame", "game"),
        game_game_image_game_juice_g4: k("game_game_image_game_juice_g4", "game/image/game/juice/g4", "SpriteFrame", "game"),
        game_game_image_game_juice_g5: k("game_game_image_game_juice_g5", "game/image/game/juice/g5", "SpriteFrame", "game"),
        game_game_image_game_juice_g6: k("game_game_image_game_juice_g6", "game/image/game/juice/g6", "SpriteFrame", "game"),
        game_game_image_game_k: k("game_game_image_game_k", "game/image/game/k", "SpriteFrame", "game"),
        game_game_image_game_k1: k("game_game_image_game_k1", "game/image/game/k1", "SpriteFrame", "game"),
        game_game_image_game_light: k("game_game_image_game_light", "game/image/game/light", "SpriteFrame", "game"),
        game_game_image_game_line1: k("game_game_image_game_line1", "game/image/game/line1", "SpriteFrame", "game"),
        game_game_image_game_line2: k("game_game_image_game_line2", "game/image/game/line2", "SpriteFrame", "game"),
        game_game_image_game_open: k("game_game_image_game_open", "game/image/game/open", "SpriteFrame", "game"),
        game_game_image_game_pj: k("game_game_image_game_pj", "game/image/game/pj", "SpriteFrame", "game"),
        game_game_image_game_point: k("game_game_image_game_point", "game/image/game/point", "SpriteFrame", "game"),
        game_game_image_game_tool_s1_1: k("game_game_image_game_tool_s1_1", "game/image/game/tool/s1-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s1_2: k("game_game_image_game_tool_s1_2", "game/image/game/tool/s1-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s1: k("game_game_image_game_tool_s1", "game/image/game/tool/s1", "SpriteFrame", "game"),
        game_game_image_game_tool_s10_1: k("game_game_image_game_tool_s10_1", "game/image/game/tool/s10-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s10_2: k("game_game_image_game_tool_s10_2", "game/image/game/tool/s10-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s10: k("game_game_image_game_tool_s10", "game/image/game/tool/s10", "SpriteFrame", "game"),
        game_game_image_game_tool_s11_1: k("game_game_image_game_tool_s11_1", "game/image/game/tool/s11-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s11_2: k("game_game_image_game_tool_s11_2", "game/image/game/tool/s11-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s11: k("game_game_image_game_tool_s11", "game/image/game/tool/s11", "SpriteFrame", "game"),
        game_game_image_game_tool_s2_1: k("game_game_image_game_tool_s2_1", "game/image/game/tool/s2-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s2_2: k("game_game_image_game_tool_s2_2", "game/image/game/tool/s2-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s2: k("game_game_image_game_tool_s2", "game/image/game/tool/s2", "SpriteFrame", "game"),
        game_game_image_game_tool_s3_1: k("game_game_image_game_tool_s3_1", "game/image/game/tool/s3-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s3_2: k("game_game_image_game_tool_s3_2", "game/image/game/tool/s3-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s3: k("game_game_image_game_tool_s3", "game/image/game/tool/s3", "SpriteFrame", "game"),
        game_game_image_game_tool_s4_1: k("game_game_image_game_tool_s4_1", "game/image/game/tool/s4-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s4_2: k("game_game_image_game_tool_s4_2", "game/image/game/tool/s4-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s4: k("game_game_image_game_tool_s4", "game/image/game/tool/s4", "SpriteFrame", "game"),
        game_game_image_game_tool_s5_1: k("game_game_image_game_tool_s5_1", "game/image/game/tool/s5-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s5_2: k("game_game_image_game_tool_s5_2", "game/image/game/tool/s5-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s5: k("game_game_image_game_tool_s5", "game/image/game/tool/s5", "SpriteFrame", "game"),
        game_game_image_game_tool_s6_1: k("game_game_image_game_tool_s6_1", "game/image/game/tool/s6-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s6_2: k("game_game_image_game_tool_s6_2", "game/image/game/tool/s6-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s6: k("game_game_image_game_tool_s6", "game/image/game/tool/s6", "SpriteFrame", "game"),
        game_game_image_game_tool_s7_1: k("game_game_image_game_tool_s7_1", "game/image/game/tool/s7-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s7_2: k("game_game_image_game_tool_s7_2", "game/image/game/tool/s7-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s7: k("game_game_image_game_tool_s7", "game/image/game/tool/s7", "SpriteFrame", "game"),
        game_game_image_game_tool_s8_1: k("game_game_image_game_tool_s8_1", "game/image/game/tool/s8-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s8_2: k("game_game_image_game_tool_s8_2", "game/image/game/tool/s8-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s8: k("game_game_image_game_tool_s8", "game/image/game/tool/s8", "SpriteFrame", "game"),
        game_game_image_game_tool_s9_1: k("game_game_image_game_tool_s9_1", "game/image/game/tool/s9-1", "SpriteFrame", "game"),
        game_game_image_game_tool_s9_2: k("game_game_image_game_tool_s9_2", "game/image/game/tool/s9-2", "SpriteFrame", "game"),
        game_game_image_game_tool_s9: k("game_game_image_game_tool_s9", "game/image/game/tool/s9", "SpriteFrame", "game"),
        game_game_image_game_xg: k("game_game_image_game_xg", "game/image/game/xg", "SpriteFrame", "game"),
        game_game_image_game_xyy: k("game_game_image_game_xyy", "game/image/game/xyy", "SpriteFrame", "game"),
        game_game_image_game_ydq: k("game_game_image_game_ydq", "game/image/game/ydq", "SpriteFrame", "game"),
        game_game_image_game_yy: k("game_game_image_game_yy", "game/image/game/yy", "SpriteFrame", "game"),
        game_game_image_game_z2: k("game_game_image_game_z2", "game/image/game/z2", "SpriteFrame", "game"),
        game_game_image_game_zi: k("game_game_image_game_zi", "game/image/game/zi", "SpriteFrame", "game"),
        game_game_image_game_zzj: k("game_game_image_game_zzj", "game/image/game/zzj", "SpriteFrame", "game"),
        game_game_prefab_enddisplay: k("game_game_prefab_enddisplay", "game/prefab/endDisplay", "Prefab", "game"),
        game_game_prefab_fruit_juice: k("game_game_prefab_fruit_juice", "game/prefab/fruit/juice", "Prefab", "game"),
        game_game_prefab_fruit_s1: k("game_game_prefab_fruit_s1", "game/prefab/fruit/s1", "Prefab", "game"),
        game_game_prefab_fruit_s10: k("game_game_prefab_fruit_s10", "game/prefab/fruit/s10", "Prefab", "game"),
        game_game_prefab_fruit_s11: k("game_game_prefab_fruit_s11", "game/prefab/fruit/s11", "Prefab", "game"),
        game_game_prefab_fruit_s2: k("game_game_prefab_fruit_s2", "game/prefab/fruit/s2", "Prefab", "game"),
        game_game_prefab_fruit_s3: k("game_game_prefab_fruit_s3", "game/prefab/fruit/s3", "Prefab", "game"),
        game_game_prefab_fruit_s4: k("game_game_prefab_fruit_s4", "game/prefab/fruit/s4", "Prefab", "game"),
        game_game_prefab_fruit_s5: k("game_game_prefab_fruit_s5", "game/prefab/fruit/s5", "Prefab", "game"),
        game_game_prefab_fruit_s6: k("game_game_prefab_fruit_s6", "game/prefab/fruit/s6", "Prefab", "game"),
        game_game_prefab_fruit_s7: k("game_game_prefab_fruit_s7", "game/prefab/fruit/s7", "Prefab", "game"),
        game_game_prefab_fruit_s8: k("game_game_prefab_fruit_s8", "game/prefab/fruit/s8", "Prefab", "game"),
        game_game_prefab_fruit_s9: k("game_game_prefab_fruit_s9", "game/prefab/fruit/s9", "Prefab", "game"),
        game_game_prefab_gamedisplay: k("game_game_prefab_gamedisplay", "game/prefab/gameDisplay", "Prefab", "game"),
        home_home_english_ui_body_font: k("home_home_english_ui_body_font", "home/english-ui/body-font", "TTFFont", "home"),
        home_home_english_ui_digit_0: k("home_home_english_ui_digit_0", "home/english-ui/digit-0", "SpriteFrame", "home"),
        home_home_english_ui_digit_1: k("home_home_english_ui_digit_1", "home/english-ui/digit-1", "SpriteFrame", "home"),
        home_home_english_ui_digit_2: k("home_home_english_ui_digit_2", "home/english-ui/digit-2", "SpriteFrame", "home"),
        home_home_english_ui_digit_3: k("home_home_english_ui_digit_3", "home/english-ui/digit-3", "SpriteFrame", "home"),
        home_home_english_ui_digit_4: k("home_home_english_ui_digit_4", "home/english-ui/digit-4", "SpriteFrame", "home"),
        home_home_english_ui_digit_5: k("home_home_english_ui_digit_5", "home/english-ui/digit-5", "SpriteFrame", "home"),
        home_home_english_ui_digit_6: k("home_home_english_ui_digit_6", "home/english-ui/digit-6", "SpriteFrame", "home"),
        home_home_english_ui_digit_7: k("home_home_english_ui_digit_7", "home/english-ui/digit-7", "SpriteFrame", "home"),
        home_home_english_ui_digit_8: k("home_home_english_ui_digit_8", "home/english-ui/digit-8", "SpriteFrame", "home"),
        home_home_english_ui_digit_9: k("home_home_english_ui_digit_9", "home/english-ui/digit-9", "SpriteFrame", "home"),
        home_home_english_ui_emblem: k("home_home_english_ui_emblem", "home/english-ui/emblem", "SpriteFrame", "home"),
        home_home_english_ui_entry_profile: k("home_home_english_ui_entry_profile", "home/english-ui/entry-profile", "SpriteFrame", "home"),
        home_home_english_ui_entry_shortcut: k("home_home_english_ui_entry_shortcut", "home/english-ui/entry-shortcut", "SpriteFrame", "home"),
        home_home_english_ui_icon_close: k("home_home_english_ui_icon_close", "home/english-ui/icon-close", "SpriteFrame", "home"),
        home_home_english_ui_icon_pause: k("home_home_english_ui_icon_pause", "home/english-ui/icon-pause", "SpriteFrame", "home"),
        home_home_english_ui_icon_settings: k("home_home_english_ui_icon_settings", "home/english-ui/icon-settings", "SpriteFrame", "home"),
        home_home_english_ui_ofl: k("home_home_english_ui_ofl", "home/english-ui/OFL", "TextAsset", "home"),
        home_home_english_ui_panel: k("home_home_english_ui_panel", "home/english-ui/panel", "SpriteFrame", "home"),
        home_home_english_ui_symbol_minus: k("home_home_english_ui_symbol_minus", "home/english-ui/symbol-minus", "SpriteFrame", "home"),
        home_home_english_ui_symbol_percent: k("home_home_english_ui_symbol_percent", "home/english-ui/symbol-percent", "SpriteFrame", "home"),
        home_home_english_ui_symbol_plus: k("home_home_english_ui_symbol_plus", "home/english-ui/symbol-plus", "SpriteFrame", "home"),
        home_home_english_ui_title_paused: k("home_home_english_ui_title_paused", "home/english-ui/title-paused", "SpriteFrame", "home"),
        home_home_english_ui_title_result: k("home_home_english_ui_title_result", "home/english-ui/title-result", "SpriteFrame", "home"),
        home_home_english_ui_title_revive: k("home_home_english_ui_title_revive", "home/english-ui/title-revive", "SpriteFrame", "home"),
        home_home_english_ui_title_settings: k("home_home_english_ui_title_settings", "home/english-ui/title-settings", "SpriteFrame", "home"),
        home_home_english_ui_word_continue: k("home_home_english_ui_word_continue", "home/english-ui/word-continue", "SpriteFrame", "home"),
        home_home_english_ui_word_energy: k("home_home_english_ui_word_energy", "home/english-ui/word-energy", "SpriteFrame", "home"),
        home_home_english_ui_word_general: k("home_home_english_ui_word_general", "home/english-ui/word-general", "SpriteFrame", "home"),
        home_home_english_ui_word_home: k("home_home_english_ui_word_home", "home/english-ui/word-home", "SpriteFrame", "home"),
        home_home_english_ui_word_how_to_play: k("home_home_english_ui_word_how_to_play", "home/english-ui/word-how-to-play", "SpriteFrame", "home"),
        home_home_english_ui_word_music: k("home_home_english_ui_word_music", "home/english-ui/word-music", "SpriteFrame", "home"),
        home_home_english_ui_word_no_thanks: k("home_home_english_ui_word_no_thanks", "home/english-ui/word-no-thanks", "SpriteFrame", "home"),
        home_home_english_ui_word_off: k("home_home_english_ui_word_off", "home/english-ui/word-off", "SpriteFrame", "home"),
        home_home_english_ui_word_on: k("home_home_english_ui_word_on", "home/english-ui/word-on", "SpriteFrame", "home"),
        home_home_english_ui_word_retry: k("home_home_english_ui_word_retry", "home/english-ui/word-retry", "SpriteFrame", "home"),
        home_home_english_ui_word_revive: k("home_home_english_ui_word_revive", "home/english-ui/word-revive", "SpriteFrame", "home"),
        home_home_english_ui_word_sfx: k("home_home_english_ui_word_sfx", "home/english-ui/word-sfx", "SpriteFrame", "home"),
        home_home_english_ui_word_sound: k("home_home_english_ui_word_sound", "home/english-ui/word-sound", "SpriteFrame", "home"),
        home_home_image_banner_alert: k("home_home_image_banner_alert", "home/image/banner/alert", "SpriteFrame", "home"),
        home_home_image_banner_toast: k("home_home_image_banner_toast", "home/image/banner/toast", "SpriteFrame", "home"),
        home_home_image_hand: k("home_home_image_hand", "home/image/hand", "SpriteFrame", "home"),
        home_home_image_home_bg: k("home_home_image_home_bg", "home/image/home/bg", "SpriteFrame", "home"),
        home_home_image_home_button: k("home_home_image_home_button", "home/image/home/button", "SpriteFrame", "home"),
        home_home_image_home_mn_mn: k("home_home_image_home_mn_mn", "home/image/home/mn/mn", "SpriteFrame", "home"),
        home_home_image_labelbg: k("home_home_image_labelbg", "home/image/labelBg", "SpriteFrame", "home"),
        home_home_image_mask: k("home_home_image_mask", "home/image/mask", "SpriteFrame", "home"),
        home_home_image_mask2: k("home_home_image_mask2", "home/image/mask2", "SpriteFrame", "home"),
        home_home_image_trea_bg: k("home_home_image_trea_bg", "home/image/trea/bg", "SpriteFrame", "home"),
        home_home_image_video: k("home_home_image_video", "home/image/video", "SpriteFrame", "home"),
        home_home_prefab_display_homedisplay: k("home_home_prefab_display_homedisplay", "home/prefab/display/homeDisplay", "Prefab", "home"),
        home_home_prefab_display_modaldisplay: k("home_home_prefab_display_modaldisplay", "home/prefab/display/modalDisplay", "Prefab", "home"),
        home_home_prefab_hand: k("home_home_prefab_hand", "home/prefab/hand", "Prefab", "home")
      };
      ResKeys.BUNDLES = Object.freeze([ "audio", "game", "home" ]);
      ResKeys.HOME = Object.freeze([]);
      ResKeys.DEFERRED = Object.freeze([ "audio_game_audio_0", "audio_game_audio_3", "audio_game_audio_4", "audio_game_audio_5", "audio_game_audio_boom", "audio_game_audio_cut", "audio_game_audio_juice", "audio_game_audio_water", "audio_home_audio_bg", "audio_home_audio_check", "game_game_image_end_bg", "game_game_image_end_db", "game_game_image_end_victory", "game_game_image_game_3s_3s_tex", "game_game_image_game_3s_3s_tex_spriteframe", "game_game_image_game_4s_4s_tex", "game_game_image_game_4s_4s_tex_spriteframe", "game_game_image_game_5s_5s_tex", "game_game_image_game_5s_5s_tex_spriteframe", "game_game_image_game_anim_3lf_tex", "game_game_image_game_anim_3lf_tex_spriteframe", "game_game_image_game_assets", "game_game_image_game_bg", "game_game_image_game_bg2", "game_game_image_game_bz", "game_game_image_game_close", "game_game_image_game_core_b", "game_game_image_game_core_b1", "game_game_image_game_core_b2", "game_game_image_game_core_b3", "game_game_image_game_core_b4", "game_game_image_game_core_b5", "game_game_image_game_core_b6", "game_game_image_game_core_g", "game_game_image_game_core_g1", "game_game_image_game_core_g2", "game_game_image_game_core_g3", "game_game_image_game_core_g4", "game_game_image_game_core_g5", "game_game_image_game_core_g6", "game_game_image_game_cs_cs_tex", "game_game_image_game_cs_cs_tex_spriteframe", "game_game_image_game_d1_2", "game_game_image_game_d1", "game_game_image_game_dyy", "game_game_image_game_juice_b", "game_game_image_game_juice_b1", "game_game_image_game_juice_b2", "game_game_image_game_juice_b3", "game_game_image_game_juice_b4", "game_game_image_game_juice_b5", "game_game_image_game_juice_b6", "game_game_image_game_juice_g", "game_game_image_game_juice_g1", "game_game_image_game_juice_g2", "game_game_image_game_juice_g3", "game_game_image_game_juice_g4", "game_game_image_game_juice_g5", "game_game_image_game_juice_g6", "game_game_image_game_k", "game_game_image_game_k1", "game_game_image_game_light", "game_game_image_game_line1", "game_game_image_game_line2", "game_game_image_game_open", "game_game_image_game_pj", "game_game_image_game_point", "game_game_image_game_tool_s1_1", "game_game_image_game_tool_s1_2", "game_game_image_game_tool_s1", "game_game_image_game_tool_s10_1", "game_game_image_game_tool_s10_2", "game_game_image_game_tool_s10", "game_game_image_game_tool_s11_1", "game_game_image_game_tool_s11_2", "game_game_image_game_tool_s11", "game_game_image_game_tool_s2_1", "game_game_image_game_tool_s2_2", "game_game_image_game_tool_s2", "game_game_image_game_tool_s3_1", "game_game_image_game_tool_s3_2", "game_game_image_game_tool_s3", "game_game_image_game_tool_s4_1", "game_game_image_game_tool_s4_2", "game_game_image_game_tool_s4", "game_game_image_game_tool_s5_1", "game_game_image_game_tool_s5_2", "game_game_image_game_tool_s5", "game_game_image_game_tool_s6_1", "game_game_image_game_tool_s6_2", "game_game_image_game_tool_s6", "game_game_image_game_tool_s7_1", "game_game_image_game_tool_s7_2", "game_game_image_game_tool_s7", "game_game_image_game_tool_s8_1", "game_game_image_game_tool_s8_2", "game_game_image_game_tool_s8", "game_game_image_game_tool_s9_1", "game_game_image_game_tool_s9_2", "game_game_image_game_tool_s9", "game_game_image_game_xg", "game_game_image_game_xyy", "game_game_image_game_ydq", "game_game_image_game_yy", "game_game_image_game_z2", "game_game_image_game_zi", "game_game_image_game_zzj", "game_game_prefab_enddisplay", "game_game_prefab_fruit_juice", "game_game_prefab_fruit_s1", "game_game_prefab_fruit_s10", "game_game_prefab_fruit_s11", "game_game_prefab_fruit_s2", "game_game_prefab_fruit_s3", "game_game_prefab_fruit_s4", "game_game_prefab_fruit_s5", "game_game_prefab_fruit_s6", "game_game_prefab_fruit_s7", "game_game_prefab_fruit_s8", "game_game_prefab_fruit_s9", "game_game_prefab_gamedisplay", "home_home_english_ui_body_font", "home_home_english_ui_digit_0", "home_home_english_ui_digit_1", "home_home_english_ui_digit_2", "home_home_english_ui_digit_3", "home_home_english_ui_digit_4", "home_home_english_ui_digit_5", "home_home_english_ui_digit_6", "home_home_english_ui_digit_7", "home_home_english_ui_digit_8", "home_home_english_ui_digit_9", "home_home_english_ui_emblem", "home_home_english_ui_entry_profile", "home_home_english_ui_entry_shortcut", "home_home_english_ui_icon_close", "home_home_english_ui_icon_pause", "home_home_english_ui_icon_settings", "home_home_english_ui_ofl", "home_home_english_ui_panel", "home_home_english_ui_symbol_minus", "home_home_english_ui_symbol_percent", "home_home_english_ui_symbol_plus", "home_home_english_ui_title_paused", "home_home_english_ui_title_result", "home_home_english_ui_title_revive", "home_home_english_ui_title_settings", "home_home_english_ui_word_continue", "home_home_english_ui_word_energy", "home_home_english_ui_word_general", "home_home_english_ui_word_home", "home_home_english_ui_word_how_to_play", "home_home_english_ui_word_music", "home_home_english_ui_word_no_thanks", "home_home_english_ui_word_off", "home_home_english_ui_word_on", "home_home_english_ui_word_retry", "home_home_english_ui_word_revive", "home_home_english_ui_word_sfx", "home_home_english_ui_word_sound", "home_home_image_banner_alert", "home_home_image_banner_toast", "home_home_image_hand", "home_home_image_home_bg", "home_home_image_home_button", "home_home_image_home_mn_mn", "home_home_image_labelbg", "home_home_image_mask", "home_home_image_mask2", "home_home_image_trea_bg", "home_home_image_video", "home_home_prefab_display_homedisplay", "home_home_prefab_display_modaldisplay", "home_home_prefab_hand" ]);
      Object.freeze(ResKeys);
      "object" === typeof module && module && module.exports && (module.exports = ResKeys);
      root && (root.ResKeys = ResKeys);
    })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0);
    cc._RF.pop();
  }, {} ],
  ResMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45c6eoXipJK6qVxbmvXtRUK", "ResMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../FrameLog");
    var Global_1 = require("../Global");
    var ResMgr = function() {
      function ResMgr() {}
      ResMgr.setSpriteHome = function(sp, _url, needActive, callBack, callObject) {
        var _this = this;
        void 0 === needActive && (needActive = true);
        void 0 === callBack && (callBack = null);
        void 0 === callObject && (callObject = null);
        if (this._sprite.hasOwnProperty(_url)) {
          sp.spriteFrame = this._sprite[_url];
          needActive && (sp.node.active = true);
          "function" === typeof callBack && callBack.call(callObject);
          return;
        }
        Global_1.default.bundle.home.load("home/image/" + _url, cc.SpriteFrame, function(err, spf) {
          if (err) {
            FrameLog_1.default.error(_url, " \u56fe\u7247\u52a0\u8f7d\u9519\u8bef ", err);
            return;
          }
          _this._sprite[_url] = spf;
          sp.spriteFrame = spf;
          needActive && (sp.node.active = true);
          "function" === typeof callBack && callBack.call(callObject);
          return spf;
        });
      };
      ResMgr.setSpriteGame = function(sp, _url, needActive, callBack, callObject) {
        var _this = this;
        void 0 === needActive && (needActive = true);
        void 0 === callBack && (callBack = null);
        void 0 === callObject && (callObject = null);
        if (this._sprite.hasOwnProperty(_url)) {
          sp.spriteFrame = this._sprite[_url];
          needActive && (sp.node.active = true);
          "function" === typeof callBack && callBack.call(callObject);
          return;
        }
        Global_1.default.bundle.game.load("game/image/" + _url, cc.SpriteFrame, function(err, spf) {
          if (err) {
            FrameLog_1.default.error(_url, " \u56fe\u7247\u52a0\u8f7d\u9519\u8bef ", err);
            return;
          }
          _this._sprite[_url] = spf;
          sp.spriteFrame = spf;
          needActive && (sp.node.active = true);
          "function" === typeof callBack && callBack.call(callObject);
          return spf;
        });
      };
      ResMgr.setPrefabHome = function(_url) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this._prefabCaches.hasOwnProperty(_url) && resolve(_this._prefabCaches[_url]);
          Global_1.default.bundle.home.load("home/prefab/" + _url, cc.Prefab, function(err, prefab) {
            if (err) {
              FrameLog_1.default.log("setPrefab error", err, _url);
              reject(false);
              return;
            }
            _this._prefabCaches[_url] = prefab;
            resolve(prefab);
            return prefab;
          });
        });
      };
      ResMgr.setPrefabGame = function(_url) {
        var _this = this;
        return new Promise(function(resolve, reject) {
          _this._prefabCaches.hasOwnProperty(_url) && resolve(_this._prefabCaches[_url]);
          Global_1.default.bundle.game.load("game/prefab/" + _url, cc.Prefab, function(err, prefab) {
            if (err) {
              FrameLog_1.default.log("setPrefab error", err, _url);
              reject(false);
              return;
            }
            _this._prefabCaches[_url] = prefab;
            resolve(prefab);
            return prefab;
          });
        });
      };
      ResMgr._sprite = {};
      ResMgr._prefabCaches = {};
      return ResMgr;
    }();
    exports.default = ResMgr;
    cc._RF.pop();
  }, {
    "../FrameLog": "FrameLog",
    "../Global": "Global"
  } ],
  RewardedService: [ function(require, module, exports) {
    (function(global) {
      "use strict";
      cc._RF.push(module, "925d4lR0NREP6CUPV0hEgQB", "RewardedService");
      "use strict";
      var config = require("./PlatformConfig");
      var AdDisplayPolicy = require("./AdDisplayPolicy");
      var nativeSession = null;
      var sequence = 0;
      var messages = {
        completed: "Reward ready.",
        cancelled: "Video closed. No reward was claimed.",
        error: "The video could not open. Please try again.",
        timeout: "The video took too long to start. Please try again.",
        unsupported: "Rewarded videos are available inside TikTok.",
        busy: "A video is still active. Please finish or close it first.",
        stale: "This session has ended. No reward was claimed.",
        unconfigured: "This reward is not available.",
        disabled: "Ads are currently unavailable."
      };
      function rootSDK(method) {
        var candidates = [ "undefined" !== typeof TTMinis && TTMinis.game, "undefined" !== typeof tt && tt, "undefined" !== typeof wx && wx ];
        for (var i = 0; i < candidates.length; i++) {
          var candidate = candidates[i];
          if (!candidate || "function" !== typeof candidate[method]) continue;
          try {
            if ("function" === typeof candidate.canIUse && !candidate.canIUse(method)) continue;
            return candidate;
          } catch (_) {}
        }
        return null;
      }
      function current(o) {
        try {
          return !o.isCurrent || true === o.isCurrent();
        } catch (_) {
          return false;
        }
      }
      function errorCode(e) {
        if (!e) return null;
        var code = e.errorCode;
        null == code && (code = e.error_code);
        null == code && (code = e.errCode);
        null == code && (code = e.code);
        return "number" === typeof code || "string" === typeof code ? code : null;
      }
      function isUserClose(error, playing) {
        var code = String(errorCode(error));
        var full = error && (error.fullErrorCode || error.full_error_code || error.subErrorCode || error.sub_error_code);
        return "104130001" === code || "104130001" === String(full) || playing && "30001" === code;
      }
      function safely(fn) {
        try {
          fn();
        } catch (_) {}
      }
      function kitRoot() {
        if ("undefined" !== typeof globalThis) return globalThis;
        if ("undefined" !== typeof window) return window;
        return "undefined" !== typeof global ? global : null;
      }
      function createDirect(sdk, adUnitId) {
        var root = kitRoot(), had = false, before;
        if (root) {
          had = Object.prototype.hasOwnProperty.call(root, "__tiktokKitRewardedDirect");
          before = root.__tiktokKitRewardedDirect;
          safely(function() {
            root.__tiktokKitRewardedDirect = true;
          });
        }
        try {
          return sdk.createRewardedVideoAd({
            adUnitId: adUnitId
          });
        } finally {
          root && safely(function() {
            had ? root.__tiktokKitRewardedDirect = before : delete root.__tiktokKitRewardedDirect;
          });
        }
      }
      function makeResult(status, session, error, reason) {
        return {
          status: status,
          rewarded: "completed" === status,
          message: "playback_error" === reason ? "The video was interrupted. Please try again." : messages[status],
          phase: session ? session.phase : "request",
          requestId: session ? session.id : null,
          placementKey: session ? session.options.placementKey : null,
          errorCode: errorCode(error),
          reason: reason || null
        };
      }
      function RewardedService(options) {
        options = options || {};
        this.getSDK = options.getSDK || rootSDK;
        this.policyError = null;
        try {
          this.adDisplayPolicy = options.adDisplayPolicy || AdDisplayPolicy.get(config, options.getSDK ? {
            getSDK: options.getSDK
          } : {});
        } catch (error) {
          this.policyError = error;
          this.adDisplayPolicy = null;
        }
        this.now = options.now || Date.now;
        this.requestTimeoutMs = options.requestTimeoutMs || 15e3;
        this.exitAfterMs = options.exitAfterMs || 3e4;
        this.closeGraceMs = options.closeGraceMs || 2e3;
        this.pending = null;
        this.refreshPolicy();
        var self = this;
        this.poll = false === options.autoPoll ? null : setInterval(function() {
          self.tick();
        }, 100);
        this.poll && this.poll.unref && this.poll.unref();
      }
      RewardedService.prototype.tick = function() {
        var s = this.pending;
        if (!s || s.terminal) return;
        if (!current(s.options)) return s.finish("stale");
        if ("request" === s.phase) s.expireRequest(); else if (null !== s.closeDeadline && null === s.hiddenAt && this.now() >= s.closeDeadline) {
          var cancelled = isUserClose(s.errorSignal, true);
          s.finish(cancelled ? "cancelled" : "error", s.errorSignal, cancelled ? "user_close" : "playback_error");
        } else if (!s.exitNotified && this.exitAvailable()) {
          s.exitNotified = true;
          "function" === typeof s.options.onExitAvailable && safely(function() {
            s.options.onExitAvailable();
          });
        }
      };
      RewardedService.prototype.onHide = function() {
        var s = this.pending;
        if (!s || null !== s.hiddenAt) return;
        var now = this.now();
        s.expireRequest(now) || (s.hiddenAt = now);
      };
      RewardedService.prototype.onShow = function() {
        this.refreshPolicy();
        var s = this.pending;
        if (!s || null === s.hiddenAt) return;
        var away = Math.max(0, this.now() - s.hiddenAt);
        s.hiddenAt = null;
        "request" === s.phase ? s.requestDeadline += away : null !== s.closeDeadline && (s.closeDeadline += away);
      };
      RewardedService.prototype.exitAvailable = function() {
        var s = this.pending;
        return !!(s && !s.terminal && "playing" === s.phase && this.now() >= s.exitAt);
      };
      RewardedService.prototype.exit = function() {
        this.pending && this.pending.finish("cancelled", null, "exit");
      };
      RewardedService.prototype.request = function(options) {
        options = options || {};
        this.tick();
        nativeSession && nativeSession !== this.pending && nativeSession.expireRequest();
        if (nativeSession) return Promise.resolve(makeResult("busy", null));
        if (this.policyError) return Promise.resolve(makeResult("unconfigured", null, null, "ad_policy_not_ready"));
        var sdk;
        try {
          sdk = this.getSDK("createRewardedVideoAd");
        } catch (_) {}
        if (!sdk || "function" !== typeof sdk.createRewardedVideoAd) return Promise.resolve(makeResult("unsupported", null));
        try {
          if ("function" === typeof sdk.canIUse && !sdk.canIUse("createRewardedVideoAd")) return Promise.resolve(makeResult("unsupported", null));
        } catch (_) {
          return Promise.resolve(makeResult("unsupported", null));
        }
        var adUnitId = config.getAdUnitId(options.placementKey);
        if (!adUnitId) return Promise.resolve(makeResult("unconfigured", null));
        if (!current(options)) return Promise.resolve(makeResult("stale", null));
        var self = this;
        return new Promise(function(resolve) {
          var s = {
            id: ++sequence,
            options: options,
            phase: "request",
            ad: null,
            hiddenAt: null,
            requestDeadline: self.now() + self.requestTimeoutMs,
            exitAt: Infinity,
            exitNotified: false,
            terminal: false,
            errorSignal: null,
            hasErrorSignal: false,
            closeDeadline: null
          };
          self.pending = s;
          nativeSession = s;
          s.expireRequest = function(now) {
            if (s.terminal || "request" !== s.phase || null !== s.hiddenAt) return false;
            if ((void 0 === now ? self.now() : now) < s.requestDeadline) return false;
            s.finish("timeout");
            return true;
          };
          var showInvoked = false;
          function onClose(res) {
            if (!showInvoked) {
              s.finish("error", null, "close_before_show");
              return;
            }
            s.expireRequest() || s.finish(res && true === res.isEnded ? "completed" : "cancelled");
          }
          function waitForClose() {
            null === s.closeDeadline && (s.closeDeadline = (null === s.hiddenAt ? self.now() : s.hiddenAt) + self.closeGraceMs);
          }
          function onError(e) {
            if (s.terminal || s.expireRequest()) return;
            if (!showInvoked) {
              s.finish("error", e, "before_show");
              return;
            }
            s.hasErrorSignal && !isUserClose(e, "playing" === s.phase) || (s.errorSignal = e);
            s.hasErrorSignal = true;
            "playing" === s.phase && waitForClose();
          }
          function onShowFailure(e) {
            if (s.terminal || s.expireRequest()) return;
            var cancelled = isUserClose(e, false) || isUserClose(s.errorSignal, false);
            s.finish(cancelled ? "cancelled" : "error", e, cancelled ? "user_close" : "show_failed");
          }
          function onHide() {
            self.pending === s && self.onHide();
          }
          function onShow() {
            self.pending === s && self.onShow();
          }
          function onStarted() {
            if (s.terminal || s.expireRequest()) return;
            s.phase = "playing";
            s.exitAt = self.now() + self.exitAfterMs;
            s.hasErrorSignal && waitForClose();
          }
          s.finish = function(status, error, reason) {
            if (s.terminal) return;
            s.terminal = true;
            self.pending === s && (self.pending = null);
            nativeSession === s && (nativeSession = null);
            if (s.ad) {
              "function" === typeof s.ad.offClose && safely(function() {
                s.ad.offClose(onClose);
              });
              "function" === typeof s.ad.offError && safely(function() {
                s.ad.offError(onError);
              });
            }
            "function" === typeof sdk.offHide && safely(function() {
              sdk.offHide(onHide);
            });
            "function" === typeof sdk.offShow && safely(function() {
              sdk.offShow(onShow);
            });
            resolve(makeResult(current(options) ? status : "stale", s, error, reason));
          };
          try {
            "function" === typeof sdk.onHide && sdk.onHide(onHide);
            "function" === typeof sdk.onShow && sdk.onShow(onShow);
            if (!self.isEnabled()) {
              s.finish("disabled");
              return;
            }
            s.ad = createDirect(sdk, adUnitId);
            if (!s.ad || "function" !== typeof s.ad.onClose || "function" !== typeof s.ad.onError || "function" !== typeof s.ad.show) {
              s.finish("unsupported");
              return;
            }
            s.ad.onClose(onClose);
            if (s.terminal) return;
            s.ad.onError(onError);
            if (s.terminal || s.expireRequest()) return;
            if (!self.isEnabled()) {
              s.finish("disabled");
              return;
            }
            showInvoked = true;
            var shown = s.ad.show();
            shown && "function" === typeof shown.then ? shown.then(onStarted, onShowFailure) : onStarted();
          } catch (e) {
            onShowFailure(e);
          }
        });
      };
      RewardedService.prototype.cancelOwner = function(ownerId) {
        this.pending && this.pending.options.ownerId === ownerId && this.pending.finish("cancelled", null, "owner");
      };
      RewardedService.prototype.isEnabled = function() {
        try {
          return true === this.adDisplayPolicy.isEnabled();
        } catch (_) {
          return false;
        }
      };
      RewardedService.prototype.refreshPolicy = function() {
        try {
          return Promise.resolve(this.adDisplayPolicy.refresh())["catch"](function() {
            return null;
          });
        } catch (_) {
          return Promise.resolve(null);
        }
      };
      RewardedService.prototype.subscribePolicy = function(listener) {
        try {
          return this.adDisplayPolicy.subscribe(listener);
        } catch (_) {
          return function() {};
        }
      };
      RewardedService.prototype.isNativeBusy = function() {
        return null !== nativeSession;
      };
      RewardedService.prototype.dispose = function() {
        this.pending && this.pending.finish("stale");
        null !== this.poll && clearInterval(this.poll);
        this.poll = null;
      };
      module.exports = RewardedService;
      cc._RF.pop();
    }).call(this, "undefined" !== typeof global ? global : "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : {});
  }, {
    "./AdDisplayPolicy": "AdDisplayPolicy",
    "./PlatformConfig": "PlatformConfig"
  } ],
  RunSession: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "100e8WXqrlPaq/EsxPafPty", "RunSession");
    "use strict";
    (function(root, factory) {
      var api = factory();
      "object" === typeof module && module && module.exports && (module.exports = api);
      root && (root.TikTokRunSession = api);
    })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0, function() {
      var VERSION = "1.2", MAX_DT = .1, HIDE = "hide";
      function isValid(cc, node) {
        if (!node) return true;
        if (cc && "function" === typeof cc.isValid) return cc.isValid(node, true);
        return false !== node.isValid;
      }
      var RETIRED = "__tiktokRetired", BODY_TYPES = [ "Collider", "PhysicsCollider", "RigidBody", "Collider2D", "RigidBody2D" ];
      function bodyTypes(cc) {
        var out = [];
        for (var i = 0; i < BODY_TYPES.length; i++) {
          var T = cc && cc[BODY_TYPES[i]];
          "function" === typeof T && out.indexOf(T) < 0 && out.push(T);
        }
        return out;
      }
      function eachNode(node, fn) {
        if (!node) return;
        fn(node);
        var kids = node.children || [];
        for (var i = 0; i < kids.length; i++) eachNode(kids[i], fn);
      }
      function compsOf(node, T) {
        try {
          return T && "function" === typeof node.getComponents && node.getComponents(T) || [];
        } catch (e) {
          return [];
        }
      }
      function stopOn(cc, target) {
        try {
          cc && cc.Tween && "function" === typeof cc.Tween.stopAllByTarget && cc.Tween.stopAllByTarget(target);
        } catch (e) {}
      }
      function retire(cc, node) {
        if (!node) return 0;
        var off = node[RETIRED] || [], types = bodyTypes(cc), Comp = cc && cc.Component;
        eachNode(node, function(n) {
          for (var t = 0; t < types.length; t++) {
            var bodies = compsOf(n, types[t]);
            for (var k = 0; k < bodies.length; k++) {
              var b = bodies[k];
              if (b && b.enabled && off.indexOf(b) < 0) try {
                b.enabled = false;
                off.push(b);
              } catch (e) {}
            }
          }
          stopOn(cc, n);
          try {
            "function" === typeof n.stopAllActions && n.stopAllActions();
          } catch (e) {}
          var comps = compsOf(n, Comp);
          for (var j = 0; j < comps.length; j++) {
            stopOn(cc, comps[j]);
            try {
              "function" === typeof comps[j].unscheduleAllCallbacks && comps[j].unscheduleAllCallbacks();
            } catch (e) {}
          }
        });
        node[RETIRED] = off;
        false !== node.active && (node.active = false);
        return off.length;
      }
      function revive(cc, node) {
        if (!node) return 0;
        var off = node[RETIRED] || [], on = 0;
        node[RETIRED] = null;
        node.active = true;
        for (var i = 0; i < off.length; i++) {
          var b = off[i];
          if (!b || false === b.isValid) continue;
          try {
            b.enabled = true;
            on += 1;
          } catch (e) {}
        }
        return on;
      }
      function hideEvents(cc) {
        var g = cc && cc.game, G = cc && cc.Game;
        return {
          hide: g && g.EVENT_HIDE || G && G.EVENT_HIDE || "game_on_hide",
          show: g && g.EVENT_SHOW || G && G.EVENT_SHOW || "game_on_show"
        };
      }
      function sceneLaunchEvent(cc) {
        var D = cc && cc.Director;
        return D && (D.EVENT_BEFORE_SCENE_LAUNCH || D.EVENT_BEFORE_SCENE_LOADING) || null;
      }
      function create(cc, opts) {
        opts = opts || {};
        var maxDt = "number" === typeof opts.maxDt && opts.maxDt > 0 ? opts.maxDt : MAX_DT;
        var warn = "function" === typeof opts.warn ? opts.warn : function(m) {
          "undefined" !== typeof console && console.warn("[RunSession] " + m);
        };
        var counts = {}, timers = [], alive = true, epoch = 0, nextTimerId = 1, settledOutcome = null;
        var listeners = [];
        var s = {
          VERSION: VERSION,
          state: null,
          run: 0
        };
        function held() {
          for (var k in counts) if (counts[k] > 0) return true;
          return false;
        }
        function edge(was) {
          var now = held();
          if (was === now) return;
          try {
            now && "function" === typeof opts.onPause && opts.onPause(s.reasons());
            now || "function" !== typeof opts.onResume || opts.onResume();
          } catch (e) {
            warn("onPause/onResume threw: " + (e && e.message));
          }
        }
        function dropTimers() {
          for (var i = 0; i < timers.length; i++) timers[i].dead = true;
          timers = [];
        }
        function bump() {
          epoch += 1;
          settledOutcome = null;
          dropTimers();
        }
        var tracked = Array.isArray(opts.tweenTargets) ? opts.tweenTargets.slice() : [];
        s.track = function(target) {
          target && tracked.indexOf(target) < 0 && tracked.push(target);
          return target;
        };
        s.untrack = function(target) {
          var i = tracked.indexOf(target);
          i >= 0 && tracked.splice(i, 1);
        };
        s.tracked = function() {
          return tracked.slice();
        };
        s.stopTracked = function() {
          var n = 0, keep = [];
          for (var i = 0; i < tracked.length; i++) {
            var t = tracked[i];
            if (!t || false === t.isValid || cc && "function" === typeof cc.isValid && !cc.isValid(t, true)) continue;
            keep.push(t);
            stopOn(cc, t);
            try {
              "function" === typeof t.stopAllActions && t.stopAllActions();
            } catch (e) {}
            n += 1;
          }
          tracked = keep;
          return n;
        };
        s.newRun = function(init) {
          if (!alive) {
            warn("newRun after dispose");
            return null;
          }
          s.stopTracked();
          bump();
          s.run += 1;
          var fresh = {
            run: s.run
          };
          var out = "function" === typeof init ? init(fresh) : null;
          s.state = out && "object" === typeof out ? out : fresh;
          return s.state;
        };
        function current(myEpoch) {
          return alive && myEpoch === epoch && isValid(cc, opts.owner);
        }
        s.guard = function(fn, ctx) {
          if ("function" !== typeof fn) throw new Error("RunSession.guard: fn is not a function");
          var mine = epoch;
          return function() {
            if (!current(mine)) return;
            return fn.apply(ctx || this, arguments);
          };
        };
        s.once = function(fn, ctx) {
          if ("function" !== typeof fn) throw new Error("RunSession.once: fn is not a function");
          var mine = epoch, used = false;
          return function() {
            if (used || !current(mine)) return;
            used = true;
            return fn.apply(ctx || this, arguments);
          };
        };
        s.settleOnce = function(outcome, fn, ctx) {
          if (!alive || null !== settledOutcome || !isValid(cc, opts.owner)) return false;
          settledOutcome = String(outcome || "done");
          "function" === typeof fn && fn.call(ctx || s, settledOutcome);
          return true;
        };
        s.settled = function() {
          return settledOutcome;
        };
        s.clearSettle = function() {
          settledOutcome = null;
        };
        s.timer = function(fn, ms, repeat, node) {
          if ("function" !== typeof fn) throw new Error("RunSession.timer: fn is not a function");
          var sec = Math.max(0, (Number(ms) || 0) / 1e3);
          if (repeat && sec <= 0) throw new Error("RunSession.every: interval must be > 0 ms");
          var t = {
            id: nextTimerId++,
            fn: fn,
            left: sec,
            every: repeat ? sec : 0,
            dead: !alive,
            node: node || null
          };
          alive && timers.push(t);
          return {
            cancel: function cancel() {
              t.dead = true;
            }
          };
        };
        s.after = function(ms, fn, node) {
          return s.timer(fn, ms, false, node);
        };
        s.every = function(ms, fn, node) {
          return s.timer(fn, ms, true, node);
        };
        function inside(child, root) {
          for (var n = child; n; n = n.parent) if (n === root) return true;
          return false;
        }
        s.recycle = function(node, o) {
          if (!node) return 0;
          for (var i = 0; i < timers.length; i++) timers[i].node && inside(timers[i].node, node) && (timers[i].dead = true);
          var off = retire(cc, node);
          if (o && o.destroy && "function" === typeof node.destroy) try {
            node.destroy();
          } catch (e) {}
          return off;
        };
        s.reuse = function(node) {
          return revive(cc, node);
        };
        s.tick = function(dt) {
          if (!alive) return 0;
          if (held()) return 0;
          var d = "number" === typeof dt && isFinite(dt) && dt > 0 ? Math.min(dt, maxDt) : 0;
          if (!d || !timers.length) return d;
          var mine = epoch, list = timers.slice();
          for (var i = 0; i < list.length; i++) {
            var t = list[i];
            if (t.dead) continue;
            t.left -= d;
            if (t.left <= 1e-9) {
              t.every && (t.left += t.every);
              t.every && t.left <= 0 && (t.left = t.every);
              t.every || (t.dead = true);
              try {
                t.fn();
              } catch (e) {
                warn("timer threw: " + (e && e.message));
              }
              if (mine !== epoch || !alive || held()) break;
            }
          }
          timers = timers.filter(function(t) {
            return !t.dead;
          });
          return d;
        };
        s.pause = function(reason) {
          var r = reason ? String(reason) : "game", was = held(), done = false;
          counts[r] = (counts[r] || 0) + 1;
          edge(was);
          return function release() {
            if (done) return;
            done = true;
            s.resume(r);
          };
        };
        s.resume = function(reason) {
          var r = reason ? String(reason) : "game";
          if (!counts[r]) return;
          var was = held();
          counts[r] -= 1;
          counts[r] || delete counts[r];
          edge(was);
        };
        s.isPaused = function() {
          return held();
        };
        s.reasons = function() {
          var out = [];
          for (var k in counts) counts[k] > 0 && out.push(k);
          return out.sort();
        };
        s.resumeAll = function() {
          var was = held();
          for (var k in counts) k !== HIDE && delete counts[k];
          edge(was);
        };
        s.adHooks = function() {
          var releases = [];
          return {
            pauseGame: function pauseGame() {
              releases.push(s.pause("ad"));
            },
            resumeGame: function resumeGame() {
              var r = releases.shift();
              r && r();
            }
          };
        };
        s.move = function(node, vx, vy, dt) {
          if (!node) return;
          var d = "number" === typeof dt && isFinite(dt) && dt > 0 ? dt : 0;
          if (!d) return;
          var dx = (Number(vx) || 0) * d, dy = (Number(vy) || 0) * d;
          if (cc && cc.UITransform) {
            var p = node.position;
            node.setPosition(p.x + dx, p.y + dy, p.z || 0);
          } else {
            node.x += dx;
            node.y += dy;
          }
        };
        s.dispose = function() {
          if (!alive) return;
          bump();
          alive = false;
          for (var i = 0; i < listeners.length; i++) {
            var L = listeners[i];
            try {
              L.target.off(L.event, L.fn);
            } catch (e) {}
          }
          listeners = [];
        };
        function listen(target, event, fn) {
          if (!target || !event || "function" !== typeof target.on) return;
          target.on(event, fn);
          listeners.push({
            target: target,
            event: event,
            fn: fn
          });
        }
        if (false !== opts.autoHide && cc && cc.game) {
          var ev = hideEvents(cc);
          listen(cc.game, ev.hide, function() {
            counts[HIDE] || s.pause(HIDE);
          });
          listen(cc.game, ev.show, function() {
            while (counts[HIDE]) s.resume(HIDE);
          });
        }
        if (false !== opts.sceneBound && cc && cc.director) {
          var launch = sceneLaunchEvent(cc);
          launch && listen(cc.director, launch, function() {
            s.dispose();
          });
        }
        return s;
      }
      function step(value, perSecond, dt) {
        var d = "number" === typeof dt && isFinite(dt) && dt > 0 ? dt : 0;
        return (Number(value) || 0) + (Number(perSecond) || 0) * d;
      }
      return {
        VERSION: VERSION,
        MAX_DT: MAX_DT,
        create: create,
        step: step,
        retire: retire,
        revive: revive
      };
    });
    cc._RF.pop();
  }, {} ],
  SaveSchema: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6a80cdpo7xArqN6jRz1B64R", "SaveSchema");
    "use strict";
    (function(root) {
      var schema = {
        defaults: {
          energy: 0,
          progress: {
            conf: {
              effect: 1,
              music: 1,
              vibrate: 1
            },
            curr_level: 1,
            level: 1,
            rank_level: 0,
            share_score: 100
          },
          progressImported: false
        },
        generated_by: "make_save_schema.py",
        keys: {
          audio: {
            in_defaults: false,
            type: "object"
          },
          energy: {
            default: 0,
            min: 0,
            type: "int"
          },
          navigate_game_box: {
            in_defaults: false,
            nullable: true,
            type: "string"
          },
          progress: {
            default: {
              conf: {
                effect: 1,
                music: 1,
                vibrate: 1
              },
              curr_level: 1,
              level: 1,
              rank_level: 0,
              share_score: 100
            },
            type: "object"
          },
          progressImported: {
            default: false,
            type: "bool"
          },
          session_info: {
            in_defaults: false,
            nullable: true,
            type: "string"
          }
        },
        schema: 2,
        spec: "docs/save/save_keys.json",
        spec_sha256: "f07d9814f70f23d553c03a066781b38e0d6b34834d8f168ad52786346e2a352f",
        table_files: {},
        tables: {}
      };
      "object" === typeof module && module && module.exports && (module.exports = schema);
      root && (root.TikTokSaveSchema = schema);
    })("undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : void 0);
    cc._RF.pop();
  }, {} ],
  SaveStore: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9d3d1kaWY9PGoRDt4nukJCm", "SaveStore");
    "use strict";
    var config = require("./PlatformConfig");
    function clone(value) {
      return JSON.parse(JSON.stringify(value));
    }
    function isRecord(value) {
      return !!value && "object" === typeof value && !Array.isArray(value);
    }
    function defaultStorage() {
      return "undefined" !== typeof cc && cc.sys && cc.sys.localStorage ? cc.sys.localStorage : null;
    }
    function defaultStorageKeys() {
      var candidates = [ "undefined" !== typeof TTMinis && TTMinis && TTMinis.game, "undefined" !== typeof tt && tt, "undefined" !== typeof wx && wx ];
      for (var i = 0; i < candidates.length; i++) {
        var c = candidates[i];
        if (!c || "function" !== typeof c.getStorageInfoSync) continue;
        try {
          var info = c.getStorageInfoSync();
          if (info && Array.isArray(info.keys)) return info.keys;
        } catch (_) {}
      }
      return null;
    }
    function isUnreadable(raw) {
      return void 0 === raw || true === raw || false === raw;
    }
    function SaveStore(defaults, options) {
      options = options || {};
      this.key = options.key || config.saveKey();
      this.storage = options.storage || defaultStorage();
      this.storageKeys = options.storageKeys || defaultStorageKeys;
      this.login = "function" === typeof options.login ? options.login : null;
      this.loginTried = false;
      this.now = options.now || Date.now;
      this.defaults = clone(isRecord(defaults) ? defaults : {});
      isRecord(this.defaults.platformClaims) || (this.defaults.platformClaims = {
        shortcut: false,
        profile: false
      });
      isRecord(this.defaults.meta) || (this.defaults.meta = {});
      this.schema = false === options.schema ? null : isRecord(options.schema) ? options.schema : globalSchema();
      this.log = "function" === typeof options.log ? options.log : defaultLog;
      this.grantDayPrefixes = Array.isArray(options.grantDayPrefixes) ? options.grantDayPrefixes.map(String) : GRANT_DAY_PREFIXES;
      this.grantKeepDays = "number" === typeof options.grantKeepDays && options.grantKeepDays >= 1 ? options.grantKeepDays : GRANT_KEEP_DAYS;
      this.repairs = [];
      this.data = null;
      this.status = "unloaded";
    }
    var SUPPORTED_SCHEMA = 2;
    var MAX_REPAIR_LOG = 20;
    var TYPE_ID = "id";
    function globalSchema() {
      var root = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : null;
      var s = root && root.TikTokSaveSchema;
      return isRecord(s) && isRecord(s.keys) ? s : null;
    }
    function defaultLog(line) {
      "undefined" !== typeof console && console.warn && console.warn(line);
    }
    function schemaNumber(value) {
      if ("number" === typeof value) return isFinite(value) ? value : null;
      var n = "string" === typeof value && value.trim().length > 0 ? Number(value) : NaN;
      return isFinite(n) ? n : null;
    }
    function inTable(schema, name, value) {
      var ids = schema.tables && schema.tables[name];
      if (!Array.isArray(ids)) return false;
      var text = String(value);
      for (var i = 0; i < ids.length; i++) if (String(ids[i]) === text) return true;
      return false;
    }
    function checkValue(schema, rule, value, fallback) {
      var t = rule.type, n;
      if (null === value && true === rule.nullable) return {
        ok: true,
        value: null
      };
      if ("object" === t) return isRecord(value) ? {
        ok: true,
        value: value
      } : {
        ok: false,
        why: "not an object"
      };
      if (Array.isArray(rule["enum"]) && "list" !== t && "map" !== t && !rule["enum"].some(function(e) {
        return String(e) === String(value);
      })) return {
        ok: false,
        why: "not one of " + rule["enum"].join(" or ")
      };
      if ("int" === t || "number" === t) {
        n = schemaNumber(value);
        if (null === n) return {
          ok: false,
          why: "not a number"
        };
        if ("int" === t && Math.floor(n) !== n) return {
          ok: false,
          why: "not a whole number"
        };
        if ("number" === typeof rule.min && n < rule.min) return {
          ok: false,
          why: "below " + rule.min
        };
        if ("number" === typeof rule.max && n > rule.max) return {
          ok: false,
          why: "above " + rule.max
        };
        return {
          ok: true,
          value: n
        };
      }
      if ("bool" === t) return "boolean" === typeof value ? {
        ok: true,
        value: value
      } : {
        ok: false,
        why: "not true/false"
      };
      if ("string" === t) {
        if ("string" !== typeof value) return {
          ok: false,
          why: "not text"
        };
        if ("number" === typeof rule.maxLength && value.length > rule.maxLength) return {
          ok: false,
          why: "longer than " + rule.maxLength
        };
        return {
          ok: true,
          value: value
        };
      }
      if (t === TYPE_ID) {
        if (null === value || "object" === typeof value || "boolean" === typeof value) return {
          ok: false,
          why: "not an id"
        };
        return inTable(schema, rule.table, value) ? {
          ok: true,
          value: value
        } : {
          ok: false,
          why: "not in table " + rule.table
        };
      }
      if ("list" === t) {
        if (!Array.isArray(value)) return {
          ok: false,
          why: "not a list"
        };
        var kept = [], dropped = 0;
        value.forEach(function(v) {
          var r = rule.of ? checkValue(schema, rule.of, v) : {
            ok: true,
            value: v
          };
          r.ok ? kept.push(r.value) : dropped++;
        });
        if ("number" === typeof rule.maxItems && kept.length > rule.maxItems) {
          dropped += kept.length - rule.maxItems;
          kept.length = rule.maxItems;
        }
        return {
          ok: true,
          value: kept,
          dropped: dropped
        };
      }
      if ("map" === t) {
        if (!isRecord(value)) return {
          ok: false,
          why: "not a map"
        };
        var out = {}, bad = 0;
        Object.keys(value).forEach(function(k) {
          if (rule.keyTable && !inTable(schema, rule.keyTable, k)) {
            bad++;
            return;
          }
          var r = rule.of ? checkValue(schema, rule.of, value[k]) : {
            ok: true,
            value: value[k]
          };
          if (r.ok) {
            out[k] = r.value;
            return;
          }
          bad++;
          var back = isRecord(fallback) && void 0 !== fallback[k] ? fallback[k] : rule.of && rule.of["default"];
          void 0 !== back && (out[k] = clone(back));
        });
        return {
          ok: true,
          value: out,
          dropped: bad
        };
      }
      return {
        ok: true,
        value: value
      };
    }
    function _short(value) {
      var s;
      try {
        s = JSON.stringify(value);
      } catch (_) {
        s = String(value);
      }
      s = void 0 === s ? String(value) : s;
      return s.length > 60 ? s.slice(0, 57) + "..." : s;
    }
    function pathGet(obj, parts) {
      for (var i = 0; i < parts.length; i++) {
        if (!isRecord(obj) && !Array.isArray(obj)) return;
        obj = obj[parts[i]];
      }
      return obj;
    }
    function applySchema(schema, data, defaults) {
      var repairs = [];
      if (!schema || !isRecord(schema.keys) || !isRecord(data)) return repairs;
      Object.keys(schema.keys).forEach(function(path) {
        var rule = schema.keys[path];
        if (!isRecord(rule)) return;
        var parts = path.split(/\./), last = parts.pop(), parent = pathGet(data, parts);
        if (!isRecord(parent) || void 0 === parent[last]) return;
        var fallback = void 0 !== rule["default"] ? rule["default"] : pathGet(defaults, parts.concat([ last ]));
        var was = parent[last], r = checkValue(schema, rule, was, fallback);
        if (r.ok) {
          parent[last] = r.value;
          r.dropped && repairs.push({
            key: path,
            was: _short(was),
            now: _short(r.value),
            why: r.dropped + " bad entries fixed"
          });
          return;
        }
        void 0 === fallback ? delete parent[last] : parent[last] = clone(fallback);
        repairs.push({
          key: path,
          was: _short(was),
          now: void 0 === fallback ? "(removed)" : _short(fallback),
          why: r.why
        });
      });
      return repairs;
    }
    SaveStore.prototype._applySchema = function() {
      this.repairs = applySchema(this.schema, this.data, this.defaults);
      var log = this.log, n = this.repairs.length;
      this.repairs.slice(0, MAX_REPAIR_LOG).forEach(function(r) {
        try {
          log("[SaveStore] schema: " + r.key + " = " + r.was + " (because: " + r.why + ") -> " + r.now);
        } catch (_) {}
      });
      if (n > MAX_REPAIR_LOG) try {
        log("[SaveStore] schema: " + (n - MAX_REPAIR_LOG) + " more values repaired");
      } catch (_) {}
    };
    SaveStore.prototype._fill = function(data) {
      var self = this;
      Object.keys(this.defaults).forEach(function(k) {
        void 0 === data[k] && (data[k] = clone(self.defaults[k]));
      });
      isRecord(data.platformClaims) || (data.platformClaims = {
        shortcut: false,
        profile: false
      });
      isRecord(data.meta) || (data.meta = {});
      return data;
    };
    SaveStore.prototype.load = function() {
      var result = this._load();
      this._loginOnce();
      return result;
    };
    SaveStore.prototype._loginOnce = function() {
      if (!this.login || this.loginTried) return;
      this.loginTried = true;
      var login = this.login;
      function send() {
        try {
          login();
        } catch (_) {}
      }
      try {
        "function" === typeof setTimeout ? setTimeout(send, 0) : send();
      } catch (_) {}
    };
    SaveStore.prototype._load = function() {
      if (!this.storage) {
        this.data = clone(this.defaults);
        this.status = "unavailable";
        return this._result(false, "storage_unavailable");
      }
      var raw = null, threw = false;
      try {
        raw = this.storage.getItem(this.key);
      } catch (_) {
        threw = true;
      }
      if (threw || isUnreadable(raw)) {
        var keys = null;
        try {
          keys = this.storageKeys();
        } catch (_) {
          keys = null;
        }
        var known = Array.isArray(keys);
        if (known && keys.indexOf(this.key) < 0) return this._fresh();
        if (threw) {
          this.data = clone(this.defaults);
          this.status = "unavailable";
          return this._result(false, "read_failed");
        }
        if (void 0 === raw && !known) {
          this.data = clone(this.defaults);
          this.status = "new";
          return this._result(true);
        }
        return this._recover(raw);
      }
      this.loadedRawText = "string" === typeof raw ? raw : JSON.stringify(raw);
      if (null === raw || "" === raw) {
        this.data = clone(this.defaults);
        this.status = "new";
        return this._result(true);
      }
      var parsed = null;
      try {
        parsed = "string" === typeof raw ? JSON.parse(raw) : raw;
      } catch (_) {
        parsed = null;
      }
      if (!isRecord(parsed)) return this._recover(raw);
      this.data = this._fill(parsed);
      this.status = "loaded";
      if (!this.schema) return this._result(true);
      this._applySchema();
      var loaded = this._result(true);
      this.repairs.length && (loaded.repaired = clone(this.repairs));
      return loaded;
    };
    SaveStore.prototype._fresh = function() {
      this.data = clone(this.defaults);
      this.status = "new";
      var written = this._write(this.data);
      return this._result(true, written);
    };
    SaveStore.prototype._recover = function(raw) {
      try {
        this.storage.setItem(this.key + ":corrupt-backup", "string" === typeof raw ? raw : String(raw));
      } catch (_) {}
      var fresh = clone(this.defaults);
      fresh.meta.recoveredFromCorrupt = this.now();
      this.data = fresh;
      this.status = "recovered";
      var written = this._write(fresh);
      return this._result(null === written, written);
    };
    SaveStore.matchesSerialized = function(text, back) {
      if (back === text) return true;
      if (!back || "object" !== typeof back) return false;
      function canonical(value) {
        if (null === value) return null;
        if (Array.isArray(value)) {
          var array = [];
          for (var i = 0; i < value.length; i++) {
            if (!Object.prototype.hasOwnProperty.call(value, i)) throw new Error("Sparse SDK value");
            array.push(canonical(value[i]));
          }
          if (Object.keys(value).length !== value.length) throw new Error("Extra array properties");
          return array;
        }
        if (value && "object" === typeof value) {
          if ("[object Object]" !== Object.prototype.toString.call(value)) throw new Error("Non-JSON SDK value");
          var out = Object.create(null);
          Object.keys(value).sort().forEach(function(key) {
            out[key] = canonical(value[key]);
          });
          return out;
        }
        if ("string" === typeof value || "boolean" === typeof value || "number" === typeof value && isFinite(value)) return value;
        throw new Error("Non-JSON SDK scalar");
      }
      try {
        return JSON.stringify(canonical(JSON.parse(text))) === JSON.stringify(canonical(back));
      } catch (_) {
        return false;
      }
    };
    SaveStore.prototype._write = function(draft) {
      var text;
      try {
        text = JSON.stringify(draft);
      } catch (_) {
        return "serialize_failed";
      }
      var previous = null;
      try {
        previous = this.storage.getItem(this.key);
      } catch (_) {}
      var rollbackText = "string" === typeof previous ? previous : null;
      if (previous && "object" === typeof previous) {
        try {
          var previousText = JSON.stringify(previous);
          SaveStore.matchesSerialized(previousText, previous) && (rollbackText = previousText);
        } catch (_) {}
        if (null === rollbackText) return "previous_unreadable";
      }
      try {
        this.storage.setItem(this.key, text);
      } catch (_) {
        return "write_failed";
      }
      var back;
      try {
        back = this.storage.getItem(this.key);
      } catch (_) {
        back = null;
      }
      if (SaveStore.matchesSerialized(text, back)) return null;
      if (null !== rollbackText) try {
        this.storage.setItem(this.key, rollbackText);
        if (!SaveStore.matchesSerialized(rollbackText, this.storage.getItem(this.key))) return "rollback_unconfirmed";
      } catch (_) {
        return "rollback_failed";
      }
      return "readback_mismatch";
    };
    SaveStore.prototype._result = function(ok, error) {
      return {
        ok: ok,
        status: this.status,
        error: error || null,
        data: this.data ? clone(this.data) : null
      };
    };
    SaveStore.prototype.get = function() {
      "unloaded" === this.status && this.load();
      return clone(this.data);
    };
    SaveStore.prototype.update = function(mutator) {
      "unloaded" === this.status && this.load();
      if (!this.storage) return this._result(false, "storage_unavailable");
      var draft = clone(this.data);
      var answer;
      try {
        answer = mutator(draft);
      } catch (_) {
        return this._result(false, "mutator_threw");
      }
      if (false === answer) return this._result(false, "cancelled");
      if (!isRecord(draft)) return this._result(false, "invalid_draft");
      var error = this._write(draft);
      if (error) return this._result(false, error);
      this.data = draft;
      "new" !== this.status && "unavailable" !== this.status || (this.status = "loaded");
      return this._result(true);
    };
    var RUN_GRANT_KEEP = 50;
    var GRANT_DAY_PREFIXES = [ "online-ladder:", "timer-chest:", "coin-ad:", "gift:home:", "offline:quick:", "quest-x2:daily:", "wheel:" ];
    var GRANT_KEEP_DAYS = 7;
    var DAY_MS = 864e5;
    var MS_FROM = 14200704e5, MS_TO = 41024448e5;
    function grantDay(id) {
      var parts = id.split(":");
      for (var i = 1; i < parts.length; i++) {
        var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(parts[i]);
        if (m) return Math.floor(Date.UTC(+m[1], +m[2] - 1, +m[3]) / DAY_MS);
        if (/^\d{13}$/.test(parts[i])) {
          var ms = Number(parts[i]);
          if (ms >= MS_FROM && ms < MS_TO) return Math.floor(ms / DAY_MS);
        }
      }
      return null;
    }
    function pruneDatedGrants(grants, prefixes, keepDays, now) {
      var today = Math.floor(now / DAY_MS), removed = 0;
      Object.keys(grants).forEach(function(g) {
        for (var i = 0; i < prefixes.length; i++) {
          if (0 !== g.indexOf(prefixes[i])) continue;
          var day = grantDay(g);
          if (null !== day && day < today - keepDays) {
            delete grants[g];
            removed++;
          }
          return;
        }
      });
      return removed;
    }
    function numberOf(value) {
      if ("number" === typeof value) return isFinite(value) ? value : null;
      if ("string" === typeof value && "" !== value.trim() && isFinite(Number(value))) return Number(value);
      return null;
    }
    SaveStore.prototype.grant = function(delta, onDone) {
      delta = delta || {};
      var add = isRecord(delta.add) ? delta.add : {};
      var id = void 0 === delta.id || null === delta.id || "" === delta.id ? null : String(delta.id);
      var apply = "function" === typeof delta.apply ? delta.apply : null;
      "unloaded" === this.status && this.load();
      if (null !== id && this.data && isRecord(this.data.meta) && isRecord(this.data.meta.grants) && Object.prototype.hasOwnProperty.call(this.data.meta.grants, id)) {
        var same = this._result(true);
        same.already = true;
        return same;
      }
      var self = this, defaults = this.defaults, problem = null;
      var r = this.update(function(draft) {
        var keys = Object.keys(add);
        for (var i = 0; i < keys.length; i++) {
          var k = keys[i], step = numberOf(add[k]);
          if (null === step) {
            problem = "invalid_amount";
            return false;
          }
          if (!(k in draft) && !(k in defaults)) {
            problem = "unknown_key";
            return false;
          }
          var now = numberOf(draft[k]);
          null === now && (now = numberOf(defaults[k]) || 0);
          if (now + step < 0) {
            problem = "not_enough";
            return false;
          }
          draft[k] = now + step;
        }
        if (apply && false === apply(draft)) {
          problem = "cancelled";
          return false;
        }
        if (null !== id) {
          isRecord(draft.meta.grants) || (draft.meta.grants = {});
          draft.meta.grants[id] = draft.meta.grantSeq = (numberOf(draft.meta.grantSeq) || 0) + 1;
          if (0 === id.indexOf("run:")) {
            var runs = Object.keys(draft.meta.grants).filter(function(g) {
              return 0 === g.indexOf("run:");
            });
            runs.sort(function(a, b) {
              return draft.meta.grants[a] - draft.meta.grants[b];
            });
            while (runs.length > RUN_GRANT_KEEP) delete draft.meta.grants[runs.shift()];
          }
          var now = Number(self.now());
          isFinite(now) && pruneDatedGrants(draft.meta.grants, self.grantDayPrefixes, self.grantKeepDays, now);
          draft.meta.grants[id] = draft.meta.grantSeq;
        }
      });
      if (!r.ok) {
        problem && (r.error = problem);
        return r;
      }
      r.already = false;
      if ("function" === typeof onDone) try {
        onDone(r);
      } catch (e) {
        r.callbackError = String(e && e.message || e);
        "undefined" !== typeof console && console.error("[SaveStore] grant onDone", e);
      }
      return r;
    };
    SaveStore.prototype.best = function(key, value) {
      var score = numberOf(value);
      "unloaded" === this.status && this.load();
      if (null === score || !key) {
        var bad = this._result(false, "invalid_value");
        bad.best = this.data ? numberOf(this.data[key]) : null;
        bad.isNew = false;
        return bad;
      }
      var current = numberOf(this.data[key]);
      if (null !== current && score <= current) {
        var kept = this._result(true);
        kept.best = current;
        kept.isNew = false;
        return kept;
      }
      var r = this.update(function(draft) {
        draft[key] = score;
      });
      r.best = r.ok ? score : current;
      r.isNew = r.ok;
      return r;
    };
    SaveStore.prototype.isClaimed = function(kind) {
      "unloaded" === this.status && this.load();
      if (this.data.meta && this.data.meta.recoveredFromCorrupt) return true;
      return true === this.data.platformClaims[kind];
    };
    SaveStore.SUPPORTED_SCHEMA = SUPPORTED_SCHEMA;
    SaveStore.GRANT_DAY_PREFIXES = GRANT_DAY_PREFIXES.slice();
    SaveStore.checkWithSchema = function(schema, data, defaults) {
      var copy = clone(data);
      return {
        data: copy,
        repairs: applySchema(schema, copy, defaults || {})
      };
    };
    module.exports = SaveStore;
    cc._RF.pop();
  }, {
    "./PlatformConfig": "PlatformConfig"
  } ],
  SoundMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "67cb5MfQSdE84ku5b5qu5Pz", "SoundMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WatermelonState_1 = require("./WatermelonState");
    var AudioService = require("AudioService");
    var ResKeys = require("ResKeys");
    var SoundMgr = function() {
      function SoundMgr() {}
      SoundMgr.audioService = function() {
        var _this = this;
        if (!this.audio) {
          var store = WatermelonState_1.default.storeForAudio();
          this.audio = AudioService.create({
            store: store,
            keys: ResKeys,
            backend: AudioService.backend24(cc)
          });
          var events_1 = {};
          Object.keys(ResKeys).forEach(function(id) {
            if (!/^audio_(home|game)_audio_/.test(id)) return;
            var tail = id.replace(/^audio_/, "");
            var eventId = (0 === tail.indexOf("home_") ? "home_" : "game_") + tail;
            var key = ResKeys[id];
            var lazyKey = Object.assign({}, key, {
              request: function(cb) {
                var cached = cc.assetManager.getBundle("audio");
                if (cached) {
                  key.request(cb);
                  return;
                }
                _this.audioBundleTask || (_this.audioBundleTask = new Promise(function(resolve, reject) {
                  cc.assetManager.loadBundle("audio", function(error, bundle) {
                    return error || !bundle ? reject(error || new Error("audio")) : resolve(bundle);
                  });
                }));
                _this.audioBundleTask.then(function() {
                  _this.audioBundleTask = null;
                  key.request(cb);
                }, function(error) {
                  _this.audioBundleTask = null;
                  cb(error);
                });
              }
            });
            events_1[eventId] = {
              key: lazyKey,
              kind: "home_home_audio_bg" === eventId ? "music" : "sfx",
              volume: 1
            };
          });
          this.audio.register(events_1);
          if (!store.get().audio) {
            var progress = WatermelonState_1.default.loadProgress();
            if (progress.ok) {
              this.audio.setMusicOn(0 !== progress.data.conf.music);
              this.audio.setSfxOn(0 !== progress.data.conf.effect);
            }
          }
        }
        return this.audio;
      };
      SoundMgr.music = function(isStop) {
        void 0 === isStop && (isStop = true);
        var audio = this.audioService();
        isStop ? audio.playMusic("home_home_audio_bg") : audio.stopMusic();
      };
      SoundMgr.playAudioHome = function(url) {
        this.audioService().playSfx("home_home_audio_" + url.toLowerCase());
      };
      SoundMgr.playAudioGame = function(url) {
        this.audioService().playSfx("game_game_audio_" + url.toLowerCase());
      };
      SoundMgr.audio = null;
      SoundMgr.audioBundleTask = null;
      return SoundMgr;
    }();
    exports.default = SoundMgr;
    cc._RF.pop();
  }, {
    "./WatermelonState": "WatermelonState",
    AudioService: "AudioService",
    ResKeys: "ResKeys"
  } ],
  TikTokMissionService: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "433b4vKli1JGImhBBlXiTTR", "TikTokMissionService");
    "use strict";
    var methods = {
      shortcut: {
        navigation: "addShortcut",
        query: "getShortcutMissionReward"
      },
      profile: {
        navigation: "startEntranceMission",
        query: "getEntranceMissionReward"
      }
    };
    var messages = {
      eligible: "Your reward is ready to claim.",
      ineligible: "",
      unsupported: "This feature is available inside a supported TikTok app.",
      error: "The request failed. Please try again.",
      timeout: "The check took too long. Please try again.",
      invalid: "No reward information was returned. Please try again.",
      cancelled: "The check ended. Please try again.",
      stale: "This check has ended. Please check again."
    };
    function usable(candidate, method) {
      if (!candidate || "function" !== typeof candidate[method]) return false;
      if ("function" !== typeof candidate.canIUse) return true;
      try {
        return false !== candidate.canIUse(method);
      } catch (_) {
        return false;
      }
    }
    function sdkCandidates() {
      var list = [], roots = [];
      function add(api) {
        api && ("object" === typeof api || "function" === typeof api) && list.indexOf(api) < 0 && list.push(api);
      }
      function addRoot(root) {
        root && roots.indexOf(root) < 0 && roots.push(root);
      }
      "undefined" !== typeof globalThis && addRoot(globalThis);
      "undefined" !== typeof GameGlobal && addRoot(GameGlobal);
      "undefined" !== typeof window && addRoot(window);
      roots.forEach(function(root) {
        try {
          var retained = root.__tiktokKitMissionSDKProvidersV1;
          Array.isArray(retained) && retained.forEach(add);
        } catch (_) {}
      });
      try {
        add("undefined" !== typeof TTMinis && TTMinis && TTMinis.game);
      } catch (_) {}
      try {
        add("undefined" !== typeof tt && tt);
      } catch (_) {}
      try {
        add("undefined" !== typeof wx && wx);
      } catch (_) {}
      roots.forEach(function(root) {
        try {
          add(root.TTMinis && root.TTMinis.game);
        } catch (_) {}
        try {
          add(root.tt);
        } catch (_) {}
        try {
          add(root.wx);
        } catch (_) {}
      });
      return list;
    }
    function sdk(method) {
      var candidates = sdkCandidates();
      for (var i = 0; i < candidates.length; i++) if (usable(candidates[i], method)) return candidates[i];
      return null;
    }
    function isCurrent(options) {
      try {
        return !options.isCurrent || true === options.isCurrent();
      } catch (_) {
        return false;
      }
    }
    function result(status, action, request, e) {
      var code = e ? void 0 !== e.errorCode ? e.errorCode : void 0 !== e.errCode ? e.errCode : e.code : void 0;
      var detail = e && (e.errMsg || e.message) || null;
      return {
        status: status,
        eligible: "eligible" === status,
        rewarded: false,
        message: "navigation" === action ? "" : messages[status],
        requestId: request ? request.id : null,
        kind: request ? request.kind : null,
        api: request ? request.method : null,
        errorCode: void 0 === code ? null : code,
        errMsg: null === detail ? null : String(detail)
      };
    }
    function TikTokMissionService(options) {
      options = options || {};
      this.getSDK = options.getSDK || sdk;
      this.now = options.now || Date.now;
      this.timeoutMs = options.timeoutMs || 1e4;
      this.pending = {};
      this.epoch = 0;
      this.sequence = 0;
      var self = this;
      this.poll = false === options.autoPoll ? null : setInterval(function() {
        self.tick();
      }, 100);
      this.poll && this.poll.unref && this.poll.unref();
    }
    TikTokMissionService.prototype.tick = function() {
      var self = this;
      Object.keys(this.pending).forEach(function(key) {
        var r = self.pending[key];
        isCurrent(r.options) ? self.now() >= r.deadline ? r.settle("timeout") : null !== r.emptyAt && self.now() >= r.emptyAt && r.settle("invalid") : r.settle("stale");
      });
    };
    TikTokMissionService.prototype._call = function(kind, action, options) {
      options = options || {};
      this.tick();
      var method = methods[kind] && methods[kind][action];
      if (!method) return Promise.resolve(result("unsupported", action, null));
      var key = kind + ":" + action;
      if (this.pending[key]) return this.pending[key].promise;
      var api;
      try {
        api = this.getSDK(method);
      } catch (_) {}
      if (!usable(api, method)) return Promise.resolve(result("unsupported", action, null));
      if (!isCurrent(options)) return Promise.resolve(result("stale", action, null));
      var self = this;
      var resolve;
      var promise = new Promise(function(done) {
        resolve = done;
      });
      var r = {
        id: ++this.sequence,
        kind: kind,
        method: method,
        action: action,
        options: options,
        epoch: this.epoch,
        deadline: this.now() + this.timeoutMs,
        emptyAt: null,
        settled: false,
        promise: promise
      };
      r.settle = function(status, error) {
        if (r.settled) return;
        r.settled = true;
        self.pending[key] === r && delete self.pending[key];
        resolve(result(r.epoch === self.epoch && isCurrent(options) ? status : "stale", action, r, error));
      };
      this.pending[key] = r;
      function empty() {
        if (r.settled) return;
        null === r.emptyAt && (r.emptyAt = Math.min(r.deadline, self.now() + 100));
      }
      function success(value) {
        if (r.settled) return;
        if ("navigation" === action) return r.settle("success");
        value && true === value.canReceiveReward ? r.settle("eligible") : value && false === value.canReceiveReward ? r.settle("ineligible") : empty();
      }
      function fail(error) {
        r.settle("error", error);
      }
      try {
        var returned = api[method]({
          success: success,
          fail: fail,
          complete: empty
        });
        returned && "function" === typeof returned.then && returned.then(success, fail);
      } catch (error) {
        fail(error);
      }
      return promise;
    };
    TikTokMissionService.prototype.navigate = function(kind, options) {
      return this._call(kind, "navigation", options);
    };
    TikTokMissionService.prototype.query = function(kind, options) {
      return this._call(kind, "query", options);
    };
    TikTokMissionService.prototype.cancel = function() {
      this.epoch++;
      var self = this;
      Object.keys(this.pending).forEach(function(key) {
        self.pending[key].settle("cancelled");
      });
    };
    TikTokMissionService.prototype.onResume = function() {
      this.cancel();
    };
    TikTokMissionService.prototype.dispose = function() {
      this.cancel();
      null !== this.poll && clearInterval(this.poll);
      this.poll = null;
    };
    TikTokMissionService.sdkCandidates = sdkCandidates;
    TikTokMissionService.supportsMethod = usable;
    module.exports = TikTokMissionService;
    cc._RF.pop();
  }, {} ],
  Tools: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "32b3aymZR1HB4yQueRdAFE0", "Tools");
    "use strict";
    var __spreadArrays = this && this.__spreadArrays || function() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, 
      k++) r[k] = a[j];
      return r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../FrameLog");
    var WechatApi_1 = require("./API/WechatApi");
    var Global_1 = require("../Global");
    var Main_1 = require("../../Main");
    var ResMgr_1 = require("./ResMgr");
    var ConstData_1 = require("../Data/ConstData");
    var GameMgr_1 = require("./GameMgr");
    var ViewMgr_1 = require("./ViewMgr");
    var ActionMgr_1 = require("./ActionMgr");
    var DisplayMgr_1 = require("./DisplayMgr");
    var ModalDisplay_1 = require("../../Display/TipDisplay/ModalDisplay");
    var UI = require("GameUIKit");
    var Tools = function() {
      function Tools() {
        this.onCollisionEnter = function(other, self) {};
      }
      Tools.subStr = function(str, n) {
        var r = /[^\x00-\xff]/g;
        if (str.replace(r, "mm").length <= n) return str;
        var m = Math.floor(n / 2);
        for (var i = m; i < str.length; i++) if (str.substr(0, i).replace(r, "mm").length >= n) return str.substr(0, i) + "...";
        return str;
      };
      Tools.setNickName = function(userNameLabel, nickName) {
        try {
          userNameLabel.string = nickName ? this.subStr(nickName, 13) : "Guest";
        } catch (e) {
          cc.error("\u5f00\u653e\u57df\u8bbe\u7f6e\u6635\u79f0\u5f02\u5e38", userNameLabel, nickName, e);
        }
      };
      Tools.getRes = function(code, msg) {
        return {
          code: code,
          msg: msg
        };
      };
      Tools.vibrateShort = function() {
        try {
          if (1 !== Global_1.default.extUserData.conf.vibrate) return;
          WechatApi_1.default.systemInterface.vibrateShort ? WechatApi_1.default.systemInterface.vibrateShort({
            success: function(res) {
              FrameLog_1.default.log("vibrateShort success", res);
            }
          }) : FrameLog_1.default.log("vibrateShort fail, not api");
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.vibrateLong = function() {
        try {
          if (1 !== Global_1.default.extUserData.conf.vibrate) return;
          WechatApi_1.default.systemInterface.vibrateLong ? WechatApi_1.default.systemInterface.vibrateLong({
            success: function(res) {
              FrameLog_1.default.log("vibrateLong success", res);
            }
          }) : FrameLog_1.default.log("vibrateLong fail, not api");
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.deepClone = function(obj) {
        try {
          return JSON.parse(JSON.stringify(obj));
        } catch (e) {
          return obj;
        }
      };
      Tools.shuffleArray = function(array) {
        try {
          var temp = void 0, length = array.length;
          for (var i = 0; i < length - 1; i++) {
            var index = Math.floor(Math.random() * length--);
            temp = array[index];
            array[index] = array[length];
            array[length] = temp;
          }
        } catch (e) {
          FrameLog_1.default.error("shuffle\u5f02\u5e38", e, array);
        }
        return array;
      };
      Tools.shuffleString = function(strData) {
        var resultStr = "";
        try {
          var length = strData.length;
          var stringArray = [];
          for (var i = 0; i < length; i++) stringArray[i] = strData[i];
          stringArray = Tools.shuffleArray(stringArray);
          for (var i = 0; i < stringArray.length; i++) resultStr += stringArray[i];
        } catch (e) {
          FrameLog_1.default.error("shuffle\u5f02\u5e38", e, strData, resultStr);
        }
        return resultStr;
      };
      Tools.getNumFixed = function(num, fractionDigits) {
        try {
          var result = parseFloat(num.toFixed(fractionDigits));
          FrameLog_1.default.log("getNumFixed", num, result);
          return result;
        } catch (e) {
          FrameLog_1.default.error("getNumFixed\u5f02\u5e38", e, num);
          return num;
        }
      };
      Tools.getRealRandomMax = function(maxValue) {
        return Math.random() * maxValue;
      };
      Tools.getRandomMax = function(maxValue) {
        return Math.floor(Math.random() * maxValue);
      };
      Tools.getRandomByArray = function(array) {
        try {
          return array[this.getRandomMax(array.length)];
        } catch (e) {
          FrameLog_1.default.error("\u83b7\u53d6\u6570\u7ec4\u968f\u673a\u503c\u5f02\u5e38", e);
        }
        return {};
      };
      Tools.getBannerList = function() {
        var newBanner = "";
        var bannerList = this._bannerList;
        for (var i = 0; i < Global_1.default.config.adv_unit_conf.banner.length; i++) {
          if (bannerList.length === Global_1.default.config.adv_unit_conf.banner.length) {
            this._bannerList = [];
            return Global_1.default.config.adv_unit_conf.banner[0];
          }
          var value = Global_1.default.config.adv_unit_conf.banner[i];
          if (-1 === bannerList.indexOf(value)) {
            newBanner = value;
            bannerList.push(value);
            FrameLog_1.default.log(" banner id ... ", newBanner);
            return newBanner;
          }
        }
      };
      Tools.TestBannerSum = function(banner) {
        var _this = this;
        0 === this._bannerSum.length && Global_1.default.config.adv_unit_conf.banner.forEach(function(value) {
          _this._bannerSum.push({
            id: value,
            sum: 0
          });
        });
        this._bannerSum.forEach(function(value) {
          if (value.id === banner) {
            value.sum++;
            _this._TestNode.getComponent(cc.Label).string = String(value.sum);
          }
        });
      };
      Tools.getRandom = function(minValue, maxValue) {
        return Math.floor(Math.random() * (maxValue - minValue) + minValue);
      };
      Tools.getRealRandom = function(minValue, maxValue) {
        return Math.random() * (maxValue - minValue) + minValue;
      };
      Tools.getSystemInfo = function() {
        try {
          this._systemInfo || (this._systemInfo = WechatApi_1.default.systemInterface.getSystemInfoSync());
          return this._systemInfo;
        } catch (e) {
          FrameLog_1.default.error("\u83b7\u53d6\u7cfb\u7edf\u914d\u7f6e\u5f02\u5e38", e);
          return this._systemInfo;
        }
      };
      Tools.showRewardedVideo = function() {
        Tools.checkIsShow(Global_1.default.config.ad_move_conf.screen_rewarded) ? WechatApi_1.default.rewardedVideo.show({
          success: function(endType) {
            switch (endType) {
             case ConstData_1.default.REWARDED_VIDEO_END_TYPE.END:
              Tools.checkPer(50);
              break;

             case ConstData_1.default.REWARDED_VIDEO_END_TYPE.ERROR:
             default:
              WechatApi_1.default.screenAdv.show();
            }
          },
          callObj: this
        }) : WechatApi_1.default.screenAdv.show();
      };
      Tools.sort = function(arr, begin, end) {
        void 0 === begin && (begin = 0);
        void 0 === end && (end = arr.length);
        if (end <= begin) return arr;
        var i = begin;
        var j = end;
        var key = arr[begin].sort;
        while (true) {
          while (true) {
            if (i == j) break;
            if (arr[j].sort < key) {
              var temp = arr[j];
              arr[j] = arr[i];
              arr[i] = temp;
              break;
            }
            j--;
          }
          while (true) {
            if (i == j) break;
            if (arr[i].sort > key) {
              var temp = arr[i];
              arr[i] = arr[j];
              arr[j] = temp;
              break;
            }
            i++;
          }
          if (i == j) break;
        }
        end - j > 1 && (arr = Tools.sort(arr, j + 1, end));
        i - begin > 1 && (arr = Tools.sort(arr, begin, i));
        return arr;
      };
      Tools.quickSort = function(arr) {
        if (arr.length < 2) return arr;
        var pivot = Math.floor(Math.random() * arr.length);
        var minArr = [];
        var maxArr = [];
        for (var i = 0; i < arr.length; i++) {
          arr[i].sort >= arr[pivot].sort && i !== pivot && maxArr.push(arr[i]);
          arr[i].sort < arr[pivot].sort && i !== pivot && minArr.push(arr[i]);
        }
        return __spreadArrays(Tools.quickSort(minArr), [ arr[pivot] ], Tools.quickSort(maxArr));
      };
      Tools.convertCcPositionToNative = function(ccPosition, ccParentNodeSize, nodeSize) {
        var x = ccPosition.x + ccParentNodeSize.width / 2 - nodeSize.width / 2;
        var y = ccParentNodeSize.height / 2 - ccPosition.y - nodeSize.height / 2;
        return cc.v3(x, y, 0);
      };
      Tools.convertNativePositionToCc = function(cc2dPosition, cc2dParentNodeSize, nodeSize) {
        var x = cc2dPosition.x + nodeSize.width / 2 - cc2dParentNodeSize.width / 2;
        var y = cc2dParentNodeSize.height / 2 - cc2dPosition.y - nodeSize.height / 2;
        return cc.v3(x, y, 0);
      };
      Tools.setSpriteFrame = function(node, spriteFrame) {
        if (!node) return;
        node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      };
      Tools.showModal = function(text, confirmCall, cancelCall, callObj, cancelText, confirmText) {
        void 0 === confirmCall && (confirmCall = null);
        void 0 === cancelCall && (cancelCall = null);
        void 0 === callObj && (callObj = null);
        void 0 === cancelText && (cancelText = "CANCEL");
        void 0 === confirmText && (confirmText = "OK");
        try {
          var param = {
            content: text,
            cancelText: cancelText,
            confirmText: confirmText,
            callObj: this,
            success: function(res) {
              res.confirm ? "function" === typeof confirmCall && null !== callObj && confirmCall.call(callObj) : res.cancel && "function" === typeof cancelCall && null !== callObj && cancelCall.call(callObj);
            },
            fail: function() {
              "function" === typeof confirmCall && null !== callObj && confirmCall.call(callObj);
            }
          };
          DisplayMgr_1.default.closeUI(ModalDisplay_1.default, false, {
            is_emit: true
          });
          DisplayMgr_1.default.openUI(ModalDisplay_1.default, ViewMgr_1.default.tipView, param);
        } catch (e) {
          "function" === typeof confirmCall && null !== callObj && confirmCall.call(callObj);
        }
      };
      Tools.changeNode = function(delayTime, node, conf, obj, dstPosition, srcPosition, isPop) {
        var _this = this;
        void 0 === dstPosition && (dstPosition = null);
        void 0 === srcPosition && (srcPosition = null);
        void 0 === isPop && (isPop = false);
        if (false === delayTime) return false;
        if (this.checkBannerIsError()) {
          isPop ? WechatApi_1.default.bannerAdv.hide() : cc.tween(node).by(.1, {
            y: 200
          }, {
            easing: "smooth"
          }).start();
          return false;
        }
        null !== dstPosition && obj.scheduleOnce(function() {
          node.position = dstPosition.clone();
        }, delayTime + .05);
        var wxShowTime = conf.wx_show;
        var wxHideDelay = conf.delay;
        var duration = delayTime + wxHideDelay + wxShowTime + .5;
        obj.scheduleOnce(function() {
          if (_this.checkBannerIsError()) {
            WechatApi_1.default.bannerAdv.hide();
            return;
          }
          obj.scheduleOnce(function() {
            Tools.pauseRecorderGame();
            if (_this.checkBannerIsError()) {
              WechatApi_1.default.bannerAdv.hide();
              return;
            }
            var name = "";
            obj && obj.node && obj.node.name && (name = obj.node.name);
            GameMgr_1.default.updateAdvTime(true, wxShowTime, name);
            WechatApi_1.default.bannerAdv.show();
            obj.scheduleOnce(function() {
              if (isPop) {
                WechatApi_1.default.bannerAdv.hide();
                obj.scheduleOnce(function() {
                  WechatApi_1.default.bannerAdv.show();
                  obj.scheduleOnce(function() {
                    WechatApi_1.default.bannerAdv.hide();
                  }, 1);
                }, .6);
              } else cc.tween(node).by(conf.btn_move_time, {
                y: 200
              }, {
                easing: "smooth"
              }).start();
              Tools.resumeRecorderGame();
            }, wxHideDelay);
            isPop || obj.scheduleOnce(function() {
              obj.scheduleOnce(function() {
                WechatApi_1.default.bannerAdv.hide();
                obj.scheduleOnce(function() {
                  WechatApi_1.default.bannerAdv.show();
                }, .6);
              }, .6);
            }, wxHideDelay - 1.5);
          }, wxShowTime);
        }, delayTime);
        return duration;
      };
      Tools.changeAllAdvMove = function(per) {
        void 0 === per && (per = 100);
        try {
          void 0 !== Global_1.default.config.ad_move_conf.begin_game.treasure_box && (Global_1.default.config.ad_move_conf.begin_game.treasure_box = per);
          void 0 !== Global_1.default.config.ad_move_conf.begin_game.treasure_box && (Global_1.default.config.ad_move_conf.begin_game.treasure_box = per);
          if (Global_1.default.config.ad_move_conf.page) for (var key in Global_1.default.config.ad_move_conf.page) {
            void 0 !== Global_1.default.config.ad_move_conf.page[key].per && (Global_1.default.config.ad_move_conf.page[key].per = per);
            void 0 !== Global_1.default.config.ad_move_conf.page[key].treasure_box && (Global_1.default.config.ad_move_conf.page[key].treasure_box = per);
          }
          Global_1.default.FORCE_UPDATE_ADV = 100 === per;
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.delayShowCloseBtn = function(node, time) {
        try {
          if (!Global_1.default.config.game_conf || !Global_1.default.config.game_conf.close_btn || 1 !== Global_1.default.config.game_conf.close_btn.is_show) {
            node.active = true;
            return false;
          }
          node.active = false;
          var delayTime = time;
          Main_1.default.Ins.scheduleOnce(function() {
            node.active = true;
          }, delayTime);
          return delayTime;
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.getBannerPos = function() {
        return this._nodeWordSpacePosition[WechatApi_1.default.bannerAdv.getNode().uuid];
      };
      Tools.initNodeWordSpacePosition = function(node) {
        if (!this._nodeWordSpacePosition.hasOwnProperty(node.uuid)) {
          var position = node.parent.convertToWorldSpaceAR(node.position.clone()).clone();
          this._nodeWordSpacePosition[node.uuid] = position.clone();
        }
      };
      Tools.getWxNodeInfoByCcNode = function(node, dstWidth, dstHeight) {
        void 0 === dstWidth && (dstWidth = null);
        void 0 === dstHeight && (dstHeight = null);
        var position = null;
        if (this._nodeWordSpacePosition.hasOwnProperty(node.uuid)) position = this._nodeWordSpacePosition[node.uuid].clone(); else {
          position = node.parent.convertToWorldSpaceAR(node.position.clone()).clone();
          this._nodeWordSpacePosition[node.uuid] = position.clone();
        }
        var left = 0;
        var top = 0;
        var frameSize = cc.view.getFrameSize();
        var winSize = cc.winSize;
        top = (position.y > 0, winSize.height / 2 - position.y - node.height * node.anchorY);
        var scaleX = frameSize.width / winSize.width;
        var scaleY = frameSize.height / winSize.height;
        var nodeFrameWidth = node.width * scaleX;
        var nodeFrameHeight = node.height * scaleY;
        left = position.x > 0 ? winSize.width / 2 + position.x - node.width * node.anchorX : winSize.width / 2 - -position.x - node.width * node.anchorX;
        var width = nodeFrameWidth;
        var height = nodeFrameHeight;
        left *= scaleX;
        top *= scaleY;
        if (null !== dstWidth && nodeFrameWidth < dstWidth) {
          left -= (dstWidth - nodeFrameWidth) / 2;
          width = dstWidth;
        }
        if (null !== dstHeight && nodeFrameHeight < dstHeight) {
          top -= (dstHeight - nodeFrameHeight) / 2;
          height = dstHeight;
        }
        return {
          left: left,
          top: top,
          width: width,
          height: height
        };
      };
      Tools._updateWxUser = function() {
        var _this = this;
        if (!WechatApi_1.default.systemInterface.getUserInfo || this._hasUpdateWxUser) {
          FrameLog_1.default.error("\u4e0d\u9700\u8981\u66f4\u65b0\u7528\u6237\u4fe1\u606f", this._hasUpdateWxUser);
          return false;
        }
        WechatApi_1.default.systemInterface.getUserInfo({
          success: function(res) {
            FrameLog_1.default.log("getUserInfo success", res);
            if ("getUserInfo:ok" == res.errMsg) {
              _this._hasUpdateWxUser = true;
              GameMgr_1.default.updateWxUser(res.userInfo);
            }
          }
        });
      };
      Tools.resumeRecorderGame = function() {
        try {
          if (!this._gameRecorderMgr) return;
          this._gameRecorderMgr.resume();
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.pauseRecorderGame = function() {
        try {
          if (!this._gameRecorderMgr) return;
          this._gameRecorderMgr.pause();
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.stopRecorderGame = function() {
        try {
          if (!this._gameRecorderMgr) return;
          this._gameRecorderMgr.stop();
          this.recordInfo.end = new Date().getTime() / 1e3;
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.showFeedbackButton = function(btnNode) {
        try {
          btnNode.active = false;
          if (1 !== Global_1.default.config.game_conf.feedback) return false;
          if (!WechatApi_1.default.systemInterface.createFeedbackButton) return false;
          btnNode.active = true;
          var nodeInfo = this.getWxNodeInfoByCcNode(btnNode);
          var style = {
            left: nodeInfo.left,
            top: nodeInfo.top,
            width: nodeInfo.width,
            height: nodeInfo.height,
            backgroundColor: ""
          };
          if (null === this._feedbackButtonInstance) {
            this._feedbackButtonInstance = WechatApi_1.default.systemInterface.createFeedbackButton({
              type: "text",
              text: "",
              style: style
            });
            FrameLog_1.default.log("\u521d\u59cb\u5316\u610f\u89c1\u53cd\u9988\u6309\u94ae", nodeInfo, Tools.getSystemInfo(), this._feedbackButtonInstance);
          }
          if (this._feedbackButtonInstance) {
            this._updateObjectOneByOne(this._feedbackButtonInstance.style, style);
            this._feedbackButtonInstance.show();
          }
        } catch (e) {
          FrameLog_1.default.error("\u663e\u793a\u610f\u89c1\u53cd\u9988btn\u5f02\u5e38", e);
        }
        return true;
      };
      Tools.hideFeedbackButton = function() {
        try {
          this._feedbackButtonInstance && this._feedbackButtonInstance.hide();
        } catch (e) {
          FrameLog_1.default.error("\u9690\u85cf\u610f\u89c1\u53cd\u9988btn\u5f02\u5e38", e);
        }
        return true;
      };
      Tools.showGetUserInfoButton = function(btnNode) {
        var _this = this;
        try {
          if (Global_1.default.hasScopeUserInfo) {
            FrameLog_1.default.log("can not create user info btn, has auth");
            this._updateWxUser();
            return true;
          }
          if (!WechatApi_1.default.systemInterface.createUserInfoButton) {
            WechatApi_1.default.systemInterface.authorize && !Global_1.default.hasScopeUserInfo && WechatApi_1.default.systemInterface.authorize({
              scope: "scope.userInfo",
              success: function() {
                _this._updateWxUser();
              }
            });
            FrameLog_1.default.log("can not create user info btn, no function", Global_1.default.hasScopeUserInfo);
            return true;
          }
          var nodeInfo = this.getWxNodeInfoByCcNode(btnNode);
          var style = {
            left: nodeInfo.left,
            top: nodeInfo.top,
            width: nodeInfo.width,
            height: nodeInfo.height,
            backgroundColor: ""
          };
          if (!this._getUserInfoButtonInstance) {
            FrameLog_1.default.log("\u521d\u59cb\u5316\u6388\u6743\u6309\u94ae", nodeInfo, Tools.getSystemInfo(), btnNode, style);
            var button = WechatApi_1.default.systemInterface.createUserInfoButton({
              type: "text",
              text: "",
              style: style
            });
            if (!button) return false;
            button.onTap(function(res) {
              try {
                _this.initWxSetting();
                if ("getUserInfo:ok" == res.errMsg) {
                  GameMgr_1.default.updateWxUser(res.userInfo);
                  _this._hasUpdateWxUser = true;
                }
                _this._getUserInfoButtonInstance && _this._getUserInfoButtonInstance.hide();
                FrameLog_1.default.log("\u83b7\u53d6\u5fae\u4fe1\u4fe1\u606f\u6210\u529f", res);
              } catch (e) {
                FrameLog_1.default.error("\u5fae\u4fe1\u6388\u6743\u7528\u6237\u4fe1\u606f\u70b9\u51fb\u5f02\u5e38", e);
              }
            });
            this._getUserInfoButtonInstance = button;
          }
          if (this._getUserInfoButtonInstance) {
            this._updateObjectOneByOne(this._getUserInfoButtonInstance.style, style);
            this._getUserInfoButtonInstance.style.top = style.top;
            this._getUserInfoButtonInstance.show();
          }
        } catch (e) {
          FrameLog_1.default.error("\u521d\u59cb\u5316\u83b7\u53d6\u5fae\u4fe1\u6388\u6743\u7528\u6237\u4fe1\u606fbutton\u5f02\u5e38 ", e);
          return false;
        }
      };
      Tools._updateObjectOneByOne = function(dstObj, srcObj) {
        for (var key in srcObj) dstObj.hasOwnProperty(key) && srcObj.hasOwnProperty(key) && (dstObj[key] = srcObj[key]);
      };
      Tools.hideGetUserInfoButton = function() {
        this._getUserInfoButtonInstance && this._getUserInfoButtonInstance.hide();
      };
      Tools.showGameClubButton = function(btnNode) {
        try {
          btnNode.active = false;
          if (1 !== Global_1.default.config.game_conf.game_club) return false;
          if (!WechatApi_1.default.systemInterface.createGameClubButton) return false;
          btnNode.active = true;
          var nodeInfo = this.getWxNodeInfoByCcNode(btnNode);
          var style = {
            left: nodeInfo.left,
            top: nodeInfo.top,
            width: nodeInfo.width,
            height: nodeInfo.height
          };
          if (null === this._gameClubButtonInstance.hasOwnProperty(btnNode.uuid)) {
            this._gameClubButtonInstance = WechatApi_1.default.systemInterface.createGameClubButton({
              type: "image",
              icon: "green",
              style: style
            });
            FrameLog_1.default.log("\u521d\u59cb\u5316\u6e38\u620f\u5708\u6309\u94ae", nodeInfo, Tools.getSystemInfo(), this._gameClubButtonInstance);
          }
          if (this._gameClubButtonInstance) {
            this._updateObjectOneByOne(this._gameClubButtonInstance.style, style);
            this._gameClubButtonInstance.show();
          }
        } catch (e) {
          FrameLog_1.default.error("\u663e\u793agameClubButton\u5f02\u5e38", e);
        }
        return true;
      };
      Tools.hideGameClubButton = function(btnNode) {
        try {
          if (this._gameClubButtonInstance) {
            this._gameClubButtonInstance.hide();
            return false;
          }
        } catch (e) {
          FrameLog_1.default.error("\u9690\u85cfgameClubButton\u5f02\u5e38", e);
        }
        return true;
      };
      Tools.scrollViewOneItem = function(scrollView, direction) {
        void 0 === direction && (direction = "v");
        if (scrollView.isScrolling() || scrollView.isAutoScrolling()) return;
        if (scrollView.content.childrenCount <= 0) return;
        var uuid = scrollView.uuid;
        var count = scrollView.content.childrenCount;
        var scrollViewMax = 0;
        var pageSize = 0;
        var itemSize = 0;
        var layout = scrollView.content.getComponent(cc.Layout);
        if (!layout) return;
        var lineSize = 1;
        if ("h" === direction) {
          itemSize = scrollView.content.children[0].width + layout.spacingX;
          pageSize = scrollView.node.width / itemSize;
          scrollViewMax = scrollView.getMaxScrollOffset().x;
          lineSize = Math.round(scrollView.content.height / (scrollView.content.children[0].height + layout.spacingY));
        } else {
          itemSize = scrollView.content.children[0].height + layout.spacingY;
          pageSize = scrollView.node.height / itemSize;
          scrollViewMax = scrollView.getMaxScrollOffset().y;
          lineSize = Math.round(scrollView.content.width / (scrollView.content.children[0].width + layout.spacingX));
        }
        if (scrollViewMax <= 0) return;
        var keepVar = scrollView.getScrollOffset().x;
        var scrollOffVar = scrollView.getScrollOffset().y;
        if ("h" === direction) {
          scrollOffVar = -scrollView.getScrollOffset().x;
          keepVar = scrollView.getScrollOffset().y;
        }
        scrollOffVar + itemSize > scrollViewMax ? this._scrollViewData[uuid] = "prev" : scrollOffVar < itemSize && (this._scrollViewData[uuid] = "next");
        this._scrollViewData.hasOwnProperty(uuid) || (this._scrollViewData[uuid] = "next");
        var endPosition = null;
        endPosition = "next" == this._scrollViewData[uuid] ? "h" === direction ? cc.v2(itemSize + scrollOffVar, keepVar) : cc.v2(keepVar, itemSize + scrollOffVar) : "h" === direction ? cc.v2(scrollOffVar - itemSize, keepVar) : cc.v2(keepVar, scrollOffVar - itemSize);
        "h" === direction ? 0 !== endPosition.x && (endPosition.x = Math.round(endPosition.x / itemSize) * itemSize) : 0 !== endPosition.y && (endPosition.y = Math.round(endPosition.y / itemSize) * itemSize);
        scrollView.scrollToOffset(endPosition, .5);
      };
      Tools.setKeepScreenOn = function(keepScreenOn) {
        void 0 === keepScreenOn && (keepScreenOn = true);
        try {
          if (!WechatApi_1.default.systemInterface.setKeepScreenOn) return;
          WechatApi_1.default.systemInterface.setKeepScreenOn({
            keepScreenOn: keepScreenOn
          });
        } catch (e) {
          FrameLog_1.default.error("\u8bbe\u7f6e\u5c4f\u5e55\u5e38\u4eae\u5f02\u5e38", e, keepScreenOn, WechatApi_1.default.systemInterface);
        }
      };
      Tools.setUnlockWaySprite = function(unlockWay, node, opacity) {
        void 0 === opacity && (opacity = null);
        var sprite = node.getChildByName("way").getComponent(cc.Sprite);
        if (!sprite) return;
        if (null === opacity) {
          opacity = 255;
          Global_1.default.config.ad_move_conf && void 0 !== Global_1.default.config.ad_move_conf.video_icon && (opacity = Global_1.default.config.ad_move_conf.video_icon);
        }
        sprite.node.opacity = opacity;
        if (unlockWay === ConstData_1.default.UNLOCK_WAY.NONE) {
          sprite.node.active = false;
          return;
        }
        sprite.node.active = false;
        ResMgr_1.default.setSpriteHome(sprite, unlockWay === ConstData_1.default.UNLOCK_WAY.SHARE ? "share" : "video");
      };
      Tools.getMenuButtonBoundingClientRect = function() {
        var viewSize = cc.view.getFrameSize();
        var winSize = cc.winSize;
        var ratio = winSize.width / viewSize.width;
        var rect = {
          width: 87,
          height: 32,
          top: 10,
          bottom: 42,
          left: viewSize.width - 10 - 87,
          right: viewSize.width - 10
        };
        cc.winSize.height > 1334 && (rect.top = 40);
        if (WechatApi_1.default.systemInterface.getMenuButtonBoundingClientRect) {
          var rectApi = WechatApi_1.default.systemInterface.getMenuButtonBoundingClientRect();
          rectApi.top && (rect = rectApi);
        }
        var obj = {
          center: ratio * (rect.top + .5 * rect.height),
          rect: rect,
          ratio: ratio
        };
        FrameLog_1.default.log("\u80f6\u56ca\u4f4d\u7f6e\uff1a", JSON.stringify(obj));
        return obj;
      };
      Tools.isWxAdvInterval = function() {
        try {
          return !Global_1.default.config || !Global_1.default.config.game_conf || 1 === Global_1.default.config.adv_interval.is_wx;
        } catch (e) {
          FrameLog_1.default.error("isAdvInterval\u5f02\u5e38", e);
          return true;
        }
      };
      Tools.showToast = function(title, duration) {
        void 0 === duration && (duration = 1500);
        UI.toast(String(title || "Please try again."));
      };
      Tools.checkIsShow = function(per) {
        try {
          if (!Global_1.default.config || !Global_1.default.config.ad_move_conf) return false;
          return !(1 !== Global_1.default.config.ad_move_conf.is_show || !this.checkPer(per) || Global_1.default.extUserData.curr_level < Global_1.default.config.ad_move_conf.level);
        } catch (e) {
          return false;
        }
      };
      Tools.checkBannerIsError = function() {
        return !WechatApi_1.default.bannerAdv || WechatApi_1.default.bannerAdv.isError();
      };
      Tools.checkNodeIsShow = function() {
        if (this.checkBannerIsError()) return false;
        return this.checkIsShow(Global_1.default.config.ad_move_conf.per);
      };
      Tools.changeNodePosition = function(nodeList, dstNode) {
        void 0 === dstNode && (dstNode = null);
        null === dstNode && (dstNode = WechatApi_1.default.bannerAdv.getNode());
        if (null === dstNode) return;
        for (var i = 0; i < nodeList.length; i++) {
          var node = nodeList[i];
          var nodePosition = node.position.clone();
          var dstWordPosition = null;
          if (this._nodeWordSpacePosition.hasOwnProperty(dstNode.uuid)) dstWordPosition = this._nodeWordSpacePosition[dstNode.uuid].clone(); else {
            dstWordPosition = dstNode.parent.convertToWorldSpaceAR(dstNode.position.clone()).clone();
            this._nodeWordSpacePosition[dstNode.uuid] = dstWordPosition.clone();
          }
          var resultPosition = node.parent.convertToNodeSpaceAR(dstWordPosition);
          node.y = dstWordPosition.y;
          FrameLog_1.default.log("node.y ... ", node.y, resultPosition);
        }
      };
      Tools.checkPer = function(per) {
        if (!per) return false;
        return Tools.getRandomMax(100) <= per;
      };
      Tools.initWxSetting = function() {
        if (!WechatApi_1.default.systemInterface.getSetting) {
          FrameLog_1.default.log("get setting fail, no function");
          return false;
        }
        WechatApi_1.default.systemInterface.getSetting({
          withSubscriptions: true,
          success: function(res) {
            try {
              res.authSetting["scope.userInfo"] && (Global_1.default.hasScopeUserInfo = true);
              if (res.subscriptionsSetting && res.subscriptionsSetting.itemSettings) {
                var status = res.subscriptionsSetting.itemSettings["SYS_MSG_TYPE_RANK"];
                status && (Global_1.default.hasSubscribeSystemMessageRank = true);
                status = res.subscriptionsSetting.itemSettings["SYS_MSG_TYPE_INTERACTIVE"];
                status && (Global_1.default.hasSubscribeSystemMessageInteractive = true);
              }
              FrameLog_1.default.log("\u83b7\u53d6\u5fae\u4fe1setting\u6210\u529f", res, Global_1.default.hasScopeUserInfo, Global_1.default.hasSubscribeSystemMessageRank, Global_1.default.hasSubscribeSystemMessageInteractive);
            } catch (e) {
              FrameLog_1.default.error("\u83b7\u53d6\u5fae\u4fe1setting\u5f02\u5e38", e, res);
            }
          }
        });
      };
      Tools.getAdvInterval = function(isWx) {
        void 0 === isWx && (isWx = true);
        var result = 30;
        try {
          result = isWx ? Global_1.default.config.adv_interval.wx : Global_1.default.config.adv_interval.self;
        } catch (e) {
          FrameLog_1.default.error(" \u83b7\u53d6\u5e7f\u544a\u533a\u95f4\u9519\u8bef", e);
        }
        result || (result = 30);
        return result;
      };
      Tools.showLoading = function(msg) {
        void 0 === msg && (msg = "Loading...");
        WechatApi_1.default.systemInterface.showLoading && WechatApi_1.default.systemInterface.showLoading({
          title: msg
        });
      };
      Tools.hideLoading = function() {
        WechatApi_1.default.systemInterface.hideLoading && WechatApi_1.default.systemInterface.hideLoading();
      };
      Tools.initCanvas = function() {
        var size = cc.view.getFrameSize();
        var designResolution = cc.Canvas.instance.designResolution;
        try {
          if (size.height / size.width < designResolution.height / designResolution.width) {
            cc.Canvas.instance.fitHeight = true;
            cc.Canvas.instance.fitWidth = false;
          }
        } catch (e) {
          FrameLog_1.default.error("initCanvas fail", size, designResolution, e);
        }
      };
      Tools.hideAllChild = function(node) {
        for (var i = 0; i < node.childrenCount; i++) node.children[i].active = false;
      };
      Tools.loadSubPackage = function(name, successCall, failCall, onProgress, callObj) {
        var _this = this;
        var record = this.bundleTasks[name];
        if (!record) {
          record = {
            done: false,
            listeners: [],
            highestBytes: 0,
            highestPercent: 0,
            endScope: null
          };
          this.bundleTasks[name] = record;
          var finish_1 = function(error, bundle) {
            if (record.done) return;
            record.done = true;
            _this.bundleTasks[name] === record && delete _this.bundleTasks[name];
            record.endScope && record.endScope();
            error || (Global_1.default.bundle[name] = bundle);
            var listeners = record.listeners.slice();
            record.listeners = [];
            listeners.forEach(function(l) {
              if (l.cancelled) return;
              if (error) "function" === typeof l.fail && l.fail.call(l.owner, error); else {
                "function" === typeof l.progress && l.progress(1, 1);
                "function" === typeof l.success && l.success.call(l.owner);
              }
            });
          };
          record.start = function() {
            var cached = cc.assetManager.getBundle(name);
            if (cached) {
              finish_1(null, cached);
              return;
            }
            var downloader = cc.assetManager.downloader;
            var beginScope = downloader.__kitBeginLoadScope;
            "function" === typeof beginScope && (record.endScope = beginScope.call(downloader));
            var options = {
              timeout: 1e4,
              maxRetryCount: 0,
              onFileProgress: function(event) {
                if (record.done) return;
                var bytes = event && event.totalBytesWritten, percent = event && event.progress;
                var advanced = Number.isFinite(bytes) && bytes > record.highestBytes || Number.isFinite(percent) && percent > record.highestPercent;
                if (!advanced) return;
                Number.isFinite(bytes) && (record.highestBytes = Math.max(record.highestBytes, bytes));
                Number.isFinite(percent) && (record.highestPercent = Math.max(record.highestPercent, percent));
                var total = event && event.totalBytesExpectedToWrite;
                record.listeners.forEach(function(l) {
                  if (l.cancelled || "function" !== typeof l.progress) return;
                  Number.isFinite(bytes) && total > 0 ? l.progress(bytes, total) : Number.isFinite(percent) && l.progress(percent, 100);
                });
              }
            };
            try {
              cc.assetManager.loadBundle(name, options, function(error, bundle) {
                return finish_1(error || (bundle ? null : new Error("Bundle unavailable")), bundle);
              });
            } catch (error) {
              finish_1(error, null);
            }
          };
          record.abort = function(error) {
            if (record.done) return;
            record.endScope && record.endScope(error);
            finish_1(error, null);
          };
        }
        var listener = {
          success: successCall,
          fail: failCall,
          progress: onProgress,
          owner: callObj,
          cancelled: false
        };
        record.listeners.push(listener);
        if (record.start) {
          var start = record.start;
          record.start = null;
          start();
        }
        return {
          cancel: function() {
            listener.cancelled = true;
            !record.done && record.listeners.every(function(l) {
              return l.cancelled;
            }) && record.abort(new Error("Loading attempt abandoned"));
          }
        };
      };
      Tools.checkScreenIsMax = function() {
        return Global_1.default.IS_APP || cc.winSize.height > 1600;
      };
      Tools.initFingerNode = function(nodeParent) {
        var node = new cc.Node();
        var sprite = node.addComponent(cc.Sprite);
        ResMgr_1.default.setSpriteHome(sprite, "hand", false);
        node.parent = nodeParent;
        node.active = false;
        return node;
      };
      Tools.startFingerNode = function(node, nodeList) {
        node.stopAllActions();
        try {
          var dstNode = null;
          for (var i = 0; i < nodeList.length; i++) {
            var item = nodeList[i];
            if (Tools.checkPer(item[0])) {
              dstNode = item[1];
              break;
            }
          }
          if (null === dstNode) {
            var item = Tools.getRandomByArray(nodeList);
            dstNode = item[1];
          }
          var dstPosition = node.parent.convertToNodeSpaceAR(dstNode.parent.convertToWorldSpaceAR(dstNode.position.clone()));
          node.x = dstPosition.x + dstNode.width / 2;
          node.y = dstPosition.y - dstNode.height / 2;
          ActionMgr_1.default.scaleStop(node, .5, 2, .3, 2);
          node.active = true;
        } catch (e) {
          FrameLog_1.default.error(e);
        }
      };
      Tools.setExportOrder = function() {
        [ "home", "game", "end" ].forEach(function(view) {
          Global_1.default.orderStr[view] = [];
          var config = Global_1.default.config.box_conf[view];
          config.order = [];
          config.is_box = 0;
          config.is_banner = 0;
          config.is_pop = 0;
          config.is_full = 0;
          config.is_menu = 0;
        });
      };
      Tools.positionConversion = function(goalNode, rawNode) {
        return goalNode.convertToNodeSpaceAR(rawNode.parent.convertToWorldSpaceAR(rawNode.getPosition().clone()));
      };
      Tools.getCollision = function(isOpen, draw, bounding) {
        void 0 === isOpen && (isOpen = true);
        void 0 === draw && (draw = false);
        void 0 === bounding && (bounding = false);
        var Manager = cc.director.getCollisionManager();
        Manager.enabled = isOpen;
        Manager.enabledDebugDraw = draw;
        Manager.enabledDrawBoundingBox = bounding;
      };
      Tools.getPhysics = function(isOpen, draw, TestNode) {
        void 0 === isOpen && (isOpen = true);
        void 0 === draw && (draw = false);
        void 0 === TestNode && (TestNode = null);
        var Manager = cc.director.getPhysicsManager();
        Manager.enabledAccumulator = true;
        Manager.enabled = isOpen;
        draw && (cc.director.getPhysicsManager().debugDrawFlags = cc.PhysicsManager.DrawBits.e_aabbBit | cc.PhysicsManager.DrawBits.e_jointBit | cc.PhysicsManager.DrawBits.e_shapeBit);
        if (!TestNode) return;
        this._TestNode = TestNode;
      };
      Tools.prototype.onCollisionExit = function(other, self) {};
      Tools.prototype.onCollisionStay = function(other, self) {};
      Tools.onTouchAll = function(node, start, move, end, cancel, target, bool) {
        void 0 === bool && (bool = true);
        if (node) if (bool) {
          node.on(cc.Node.EventType.TOUCH_START, start, target);
          node.on(cc.Node.EventType.TOUCH_MOVE, move, target);
          node.on(cc.Node.EventType.TOUCH_END, end, target);
          node.on(cc.Node.EventType.TOUCH_CANCEL, cancel, target);
        } else {
          node.off(cc.Node.EventType.TOUCH_START, start, target);
          node.off(cc.Node.EventType.TOUCH_MOVE, move, target);
          node.off(cc.Node.EventType.TOUCH_END, end, target);
          node.off(cc.Node.EventType.TOUCH_CANCEL, cancel, target);
        }
      };
      Tools.getInteger = function(num, type) {
        void 0 === type && (type = "round");
        var value;
        switch (type) {
         case "ceil":
          value = Math.ceil(num);
          break;

         case "floor":
          value = Math.floor(num);
          break;

         case "round":
          value = Math.round(num);
          break;

         case "two":
          value = Number(num.toFixed(2));
        }
        return num;
      };
      Tools.getChildrenIndex = function(node) {
        var parent = node.parent;
        for (var i = 0; i < parent.children.length; i++) {
          var value = parent.children[i];
          if (node === value) return i;
        }
      };
      Tools.getPointInNode = function(point, node) {
        return node.getBoundingBoxToWorld().contains(point);
      };
      Tools.getRandomLevel = function(maxLevel) {
        if (Global_1.default.currLevel) return Global_1.default.currLevel;
        var currLevel = Global_1.default.extUserData.curr_level;
        currLevel > maxLevel && (currLevel = Tools.getRandom(1, maxLevel));
        Global_1.default.currLevel = currLevel;
        return currLevel;
      };
      Tools.dragonStop = function(node, bool) {
        node && (node.getComponent(dragonBones.ArmatureDisplay).timeScale = Number(bool));
      };
      Tools.getArrRandom = function(arr, num) {
        var reArr = [];
        var curr_arr = Tools.deepClone(arr);
        curr_arr.forEach(function(value, index) {
          var forNum = Tools.getRandom(0, curr_arr.length - 1);
          reArr.push(curr_arr[forNum]);
          curr_arr.splice(forNum, 1);
          if (reArr.length === num) return reArr;
        });
        return reArr;
      };
      Tools.getColor = function(str) {
        var color = "";
        var index = 0;
        switch (str) {
         case "s1":
         case "s2":
         case "s3":
          color = "#f4aa0a";
          index = 1;
          break;

         case "s4":
         case "s5":
          color = "#20b839";
          index = 2;
          break;

         case "s6":
         case "s7":
          color = "#da2b60";
          index = 3;
          break;

         case "s8":
         case "s9":
          color = "#f7963f";
          index = 4;
          break;

         case "s10":
          color = "#e23ee8";
          index = 5;
          break;

         case "s11":
          color = "#3e66e8";
          index = 6;
        }
        return {
          color: color,
          index: index
        };
      };
      Tools._systemInfo = null;
      Tools._bannerList = [];
      Tools._bannerSum = [];
      Tools._TestNode = null;
      Tools._nodeWordSpacePosition = {};
      Tools._hasUpdateWxUser = false;
      Tools._gameRecorderMgr = null;
      Tools.recordInfo = {
        begin: 0,
        end: 0
      };
      Tools._gameRecorderShareInstance = null;
      Tools._feedbackButtonInstance = null;
      Tools._getUserInfoButtonInstance = null;
      Tools._gameClubButtonInstance = null;
      Tools._scrollViewData = {};
      Tools.bundleTasks = {};
      Tools._touchAllFunc = {};
      return Tools;
    }();
    exports.default = Tools;
    cc._RF.pop();
  }, {
    "../../Display/TipDisplay/ModalDisplay": "ModalDisplay",
    "../../Main": "Main",
    "../Data/ConstData": "ConstData",
    "../FrameLog": "FrameLog",
    "../Global": "Global",
    "./API/WechatApi": "WechatApi",
    "./ActionMgr": "ActionMgr",
    "./DisplayMgr": "DisplayMgr",
    "./GameMgr": "GameMgr",
    "./ResMgr": "ResMgr",
    "./ViewMgr": "ViewMgr",
    GameUIKit: "GameUIKit"
  } ],
  ViewMgr: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "def774N4p5APoV3ncRqdhHe", "ViewMgr");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ViewMgr = function() {
      function ViewMgr() {}
      ViewMgr.init = function(param) {
        this.gameView = param.gameView;
        this.homeView = param.homeView;
        this.exportView = param.exportView;
        this.tipView = param.tipView;
        this.advView = param.advView;
      };
      ViewMgr.gameView = null;
      ViewMgr.homeView = null;
      ViewMgr.exportView = null;
      ViewMgr.tipView = null;
      ViewMgr.advView = null;
      return ViewMgr;
    }();
    exports.default = ViewMgr;
    cc._RF.pop();
  }, {} ],
  ViewPanel: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1cbarw1aFOroSte0etBBXP", "ViewPanel");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../../FrameLog");
    var ViewUI_1 = require("./ViewUI");
    var EventMgr_1 = require("../Event/EventMgr");
    var ccclass = cc._decorator.ccclass;
    var ViewPanel = function(_super) {
      __extends(ViewPanel, _super);
      function ViewPanel() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isInit = false;
        _this.isCanClose = true;
        _this.playOutTime = 0;
        _this.playInTime = 0;
        return _this;
      }
      ViewPanel.getUrl = function() {
        FrameLog_1.default.error("\u9700\u91cd\u5199getUrl");
        return "";
      };
      ViewPanel.prototype.onDestroy = function() {
        EventMgr_1.default.instance().targetOff(this);
        _super.prototype.onDestroy.call(this);
      };
      ViewPanel = __decorate([ ccclass ], ViewPanel);
      return ViewPanel;
    }(ViewUI_1.default);
    exports.default = ViewPanel;
    cc._RF.pop();
  }, {
    "../../FrameLog": "FrameLog",
    "../Event/EventMgr": "EventMgr",
    "./ViewUI": "ViewUI"
  } ],
  ViewUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "879c3vkza9N46+zY8Q4CWo9", "ViewUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var FrameLog_1 = require("../../FrameLog");
    var SoundMgr_1 = require("../SoundMgr");
    var ccclass = cc._decorator.ccclass;
    var ViewUI = function(_super) {
      __extends(ViewUI, _super);
      function ViewUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._touchList = {};
        _this._enableList = {};
        return _this;
      }
      ViewUI.prototype.setInteractable = function(target, v, isGray) {
        void 0 === isGray && (isGray = true);
        if (!target) return;
        var button = target.getComponent(cc.Button);
        if (button) {
          button.enableAutoGrayEffect = isGray;
          button.interactable = v;
        }
        this._enableList[target.name] = {
          enabled: v,
          isGray: isGray
        };
      };
      ViewUI.prototype.onTouch = function(target, handler, sound, scale, stopEvent) {
        var _this = this;
        void 0 === sound && (sound = "check");
        void 0 === scale && (scale = .9);
        void 0 === stopEvent && (stopEvent = true);
        if (!target || !handler) {
          FrameLog_1.default.error("target || handler\u4e3a\u7a7a--\x3e", target, handler);
          return;
        }
        var targetName = target.name;
        if (this._touchList[targetName] && this._touchList[targetName].target == target) {
          FrameLog_1.default.warn("\u91cd\u590d\u8bbe\u7f6e--\x3e", targetName);
          return;
        }
        var button = target.getComponent(cc.Button);
        if (1 != scale && !button) {
          button = target.addComponent(cc.Button);
          button.transition = cc.Button.Transition.SCALE;
          button.zoomScale = scale;
        }
        var enabled = true;
        var isGray = true;
        if (this._enableList[target.name]) {
          enabled = this._enableList[target.name].enabled;
          isGray = this._enableList[target.name].isGray;
        }
        this.setInteractable(target, enabled, isGray);
        var callObj = this;
        var touchHandler = function(event) {
          var _a = (_this._enableList[target.name] || {}).enabled, enabled = void 0 === _a || _a;
          if (!enabled) return;
          stopEvent && event.stopPropagation();
          sound && "" != sound && SoundMgr_1.default.playAudioHome(sound);
          handler.call(callObj, event);
        };
        target.on(cc.Node.EventType.TOUCH_START, touchHandler);
        this._touchList[targetName] = {
          target: target,
          handler: touchHandler,
          callObj: callObj
        };
      };
      ViewUI.prototype.offTouch = function(target) {
        if (!target) {
          FrameLog_1.default.error("target \u4e3a\u7a7a");
          return;
        }
        var targetName = target.name;
        if (this._touchList[targetName]) {
          var touchHandler = this._touchList[targetName].handler;
          target.off(cc.Node.EventType.TOUCH_START, touchHandler);
          delete this._touchList[targetName];
        }
        delete this._enableList[targetName];
      };
      ViewUI.prototype.clear = function() {
        for (var key in this._touchList) this.offTouch(this._touchList[key].target);
      };
      ViewUI.prototype.onDestroy = function() {
        this.clear();
      };
      ViewUI.prototype.getNode = function(path) {
        var node = null;
        if ("" == path || !path) return null;
        node = -1 != path.indexOf("/") ? cc.find(path, this.node) : this.node.getChildByName(path);
        node || FrameLog_1.default.warn("\u672a\u627e\u5230\u8be5\u8282\u70b9  path=", path);
        return node;
      };
      ViewUI = __decorate([ ccclass ], ViewUI);
      return ViewUI;
    }(cc.Component);
    exports.default = ViewUI;
    cc._RF.pop();
  }, {
    "../../FrameLog": "FrameLog",
    "../SoundMgr": "SoundMgr"
  } ],
  WatermelonArt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c72a0J2kK9GiqP2XF14rh+K", "WatermelonArt");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResKeys = require("ResKeys");
    var names = {
      on: "word-on",
      off: "word-off",
      soundTab: "word-sound",
      generalTab: "word-general",
      howToPlay: "word-how-to-play",
      minus: "symbol-minus",
      plus: "symbol-plus",
      percent: "symbol-percent",
      digit0: "digit-0",
      digit1: "digit-1",
      digit2: "digit-2",
      digit3: "digit-3",
      digit4: "digit-4",
      digit5: "digit-5",
      digit6: "digit-6",
      digit7: "digit-7",
      digit8: "digit-8",
      digit9: "digit-9",
      pause: "icon-pause",
      settings: "icon-settings",
      close: "icon-close",
      panel: "panel",
      pauseTitle: "title-paused",
      reviveTitle: "title-revive",
      resultTitle: "title-result",
      settingsTitle: "title-settings",
      continue: "word-continue",
      retry: "word-retry",
      home: "word-home",
      revive: "word-revive",
      noThanks: "word-no-thanks",
      energy: "word-energy",
      shortcut: "entry-shortcut",
      profile: "entry-profile",
      music: "word-music",
      sfx: "word-sfx",
      bodyFont: "body-font",
      mascot: "emblem"
    };
    var WatermelonArt = function() {
      function WatermelonArt() {}
      WatermelonArt.load = function() {
        var _this = this;
        if (this.pending) return this.pending;
        this.pending = Promise.all(Object.keys(names).filter(function(slot) {
          return "shortcut" !== slot && "profile" !== slot;
        }).map(function(slot) {
          return new Promise(function(resolve, reject) {
            var id = "home_home_english_ui_" + names[slot].replace(/-/g, "_");
            var key = ResKeys[id];
            if (!key || "function" !== typeof key.request) {
              reject(new Error("Missing interface resource: " + id));
              return;
            }
            key.request(function(error, asset) {
              return error || !asset ? reject(error || new Error(id)) : resolve([ slot, asset ]);
            });
          });
        })).then(function(entries) {
          var result = {};
          entries.forEach(function(pair) {
            return result[pair[0]] = pair[1];
          });
          return result;
        });
        this.pending = this.pending.catch(function(error) {
          _this.pending = null;
          throw error;
        });
        return this.pending;
      };
      WatermelonArt.loadEntryArt = function(onReady) {
        [ "shortcut", "profile" ].forEach(function(slot) {
          var id = "home_home_english_ui_" + names[slot].replace(/-/g, "_");
          var key = ResKeys[id];
          if (!key || "function" !== typeof key.request) {
            cc.error("Missing optional entry art", id);
            return;
          }
          key.request(function(error, asset) {
            if (error || !asset) {
              cc.error("Optional entry art unavailable", id, error);
              return;
            }
            onReady(slot, asset);
          });
        });
      };
      WatermelonArt.pending = null;
      return WatermelonArt;
    }();
    exports.default = WatermelonArt;
    cc._RF.pop();
  }, {
    ResKeys: "ResKeys"
  } ],
  WatermelonState: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f84288BuyxIqZzwfgJJHg9X", "WatermelonState");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SaveStore = require("SaveStore");
    var SaveSchema = require("SaveSchema");
    var defaults = function() {
      return {
        curr_level: 1,
        level: 1,
        rank_level: 0,
        share_score: 100,
        conf: {
          music: 1,
          effect: 1,
          vibrate: 1
        }
      };
    };
    var clone = function(value) {
      return JSON.parse(JSON.stringify(value));
    };
    function valid(value) {
      if (!value || "object" !== typeof value || Array.isArray(value)) return false;
      var integer = function(v, min) {
        return "number" === typeof v && Number.isSafeInteger(v) && v >= min;
      };
      return integer(value.curr_level, 1) && integer(value.level, 1) && value.level >= value.curr_level && integer(value.rank_level, 0) && "number" === typeof value.share_score && Number.isFinite(value.share_score) && !!value.conf && [ "music", "effect", "vibrate" ].every(function(k) {
        return 0 === value.conf[k] || 1 === value.conf[k];
      });
    }
    function legacyProgress(raw) {
      try {
        "string" === typeof raw && (raw = JSON.parse(raw));
        var value_1 = raw && raw.ext_data;
        "string" === typeof value_1 && (value_1 = JSON.parse(value_1));
        if (!value_1 || "object" !== typeof value_1 || Array.isArray(value_1)) return null;
        var result_1 = defaults();
        [ "curr_level", "level", "rank_level", "share_score" ].forEach(function(k) {
          Object.prototype.hasOwnProperty.call(value_1, k) && (result_1[k] = value_1[k]);
        });
        value_1.conf && "object" === typeof value_1.conf && [ "music", "effect", "vibrate" ].forEach(function(k) {
          Object.prototype.hasOwnProperty.call(value_1.conf, k) && (result_1.conf[k] = value_1.conf[k]);
        });
        return valid(result_1) ? result_1 : null;
      } catch (_) {
        return null;
      }
    }
    var WatermelonState = function() {
      function WatermelonState() {
        this.store = null;
        this.loaded = false;
      }
      WatermelonState.prototype.ensureLoaded = function() {
        try {
          this.store || (this.store = new SaveStore(SaveSchema.defaults, {
            schema: SaveSchema
          }));
          if (!this.loaded) {
            var result = this.store.load();
            if (false === result || result && false === result.ok) return {
              ok: false,
              error: "Could not load saved progress."
            };
            this.loaded = true;
          }
          return {
            ok: true
          };
        } catch (_) {
          return {
            ok: false,
            error: "Could not load saved progress."
          };
        }
      };
      WatermelonState.prototype.repairProgress = function() {
        var store = this.store, state = store.get(), old = state.progress;
        var value = old && "object" === typeof old && !Array.isArray(old) ? old : {};
        var next = defaults();
        var integer = function(v, min) {
          return "number" === typeof v && Number.isSafeInteger(v) && v >= min;
        };
        integer(value.curr_level, 1) && (next.curr_level = value.curr_level);
        integer(value.level, 1) && (next.level = value.level);
        next.level = Math.max(next.level, next.curr_level);
        integer(value.rank_level, 0) && (next.rank_level = value.rank_level);
        "number" === typeof value.share_score && Number.isFinite(value.share_score) && (next.share_score = value.share_score);
        value.conf && "object" === typeof value.conf && [ "music", "effect", "vibrate" ].forEach(function(k) {
          0 !== value.conf[k] && 1 !== value.conf[k] || (next.conf[k] = value.conf[k]);
        });
        try {
          var backupKey = store.key + ":progress-repair-backup";
          var existing = store.storage.getItem(backupKey);
          if (null === existing || void 0 === existing || "" === existing) {
            var text = store.loadedRawText;
            if ("string" !== typeof text) return {
              ok: false,
              error: "Saved progress backup unavailable."
            };
            store.storage.setItem(backupKey, text);
            if (!SaveStore.matchesSerialized(text, store.storage.getItem(backupKey))) return {
              ok: false,
              error: "Saved progress backup could not be confirmed."
            };
          }
          var written = store.update(function(draft) {
            draft.progress = clone(next);
          });
          if (!written || !written.ok) return {
            ok: false,
            error: "Could not repair saved progress. Please retry."
          };
          return {
            ok: true,
            data: clone(store.get().progress)
          };
        } catch (_) {
          return {
            ok: false,
            error: "Could not repair saved progress. Please retry."
          };
        }
      };
      WatermelonState.prototype.loadProgress = function(originalSdkUser) {
        var loaded = this.ensureLoaded();
        if (!loaded.ok) return loaded;
        try {
          var saved = this.store.get();
          if (!saved.progressImported && void 0 !== originalSdkUser) {
            var migrated = legacyProgress(originalSdkUser);
            if (!migrated) return {
              ok: false,
              error: "Original saved progress is invalid."
            };
            var write = this.saveProgress(migrated);
            if (!write.ok) return write;
            saved = this.store.get();
          }
          if (!valid(saved.progress)) return this.repairProgress();
          return {
            ok: true,
            data: clone(saved.progress)
          };
        } catch (_) {
          return {
            ok: false,
            error: "Could not read saved progress."
          };
        }
      };
      WatermelonState.prototype.saveProgress = function(next) {
        if (!valid(next)) return {
          ok: false,
          error: "Progress is invalid."
        };
        var loaded = this.ensureLoaded();
        if (!loaded.ok) return loaded;
        try {
          var write = this.store.update(function(draft) {
            draft.progress = clone(next);
            draft.progressImported = true;
          });
          if (!write || !write.ok) return {
            ok: false,
            error: "Could not save. Please try again."
          };
          var saved = this.store.get().progress;
          if (!valid(saved) || JSON.stringify(saved) !== JSON.stringify(next)) return {
            ok: false,
            error: "Saved progress could not be confirmed."
          };
          return {
            ok: true,
            data: clone(saved)
          };
        } catch (_) {
          return {
            ok: false,
            error: "Could not save. Please try again."
          };
        }
      };
      WatermelonState.prototype.storeForAudio = function() {
        var loaded = this.ensureLoaded();
        if (!loaded.ok) throw new Error(loaded.error);
        return this.store;
      };
      return WatermelonState;
    }();
    exports.default = new WatermelonState();
    cc._RF.pop();
  }, {
    SaveSchema: "SaveSchema",
    SaveStore: "SaveStore"
  } ],
  WatermelonUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d98b6BfHHpOtojKWicXfKkF", "WatermelonUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.disposeHomeGuides = exports.inspectRun = exports.showSaveRetry = exports.showResourceRetry = exports.dismissResourceRetry = exports.pauseForAd = exports.openSettings = exports.forceWorldPaused = exports.disposeGame = exports.showResult = exports.resolveThrow = exports.isInputBlocked = exports.attachGame = exports.attachHome = exports.updateEntryArt = exports.missingArt = exports.registerArt = exports.configure = void 0;
    var UI = require("GameUIKit");
    var AdBoostKit = require("AdBoostKit");
    var RunSession = require("RunSession");
    var HomeGrowthEntries = require("HomeGrowthEntries");
    var WatermelonState_1 = require("./WatermelonState");
    var ccclass = cc._decorator.ccclass;
    var hooks;
    var art = {};
    var runs = new Map();
    function bodyText(parent, options) {
      var style = Object.assign({}, options, {
        color: [ 255, 255, 255 ],
        outline: [ 55, 44, 145 ]
      });
      var handle = UI.text(parent, style);
      handle.node.setContentSize(options.w, options.h);
      handle.node.setPosition(options.x || 0, options.y || 0);
      return handle;
    }
    function decoratePopup(page) {
      if (page && page.body && art.mascot) {
        var y = page.root && "GameUIRevivePage" === page.root.name ? 200 : -345;
        frameTitle(page.body, "KitchenMascot", art.mascot, 0, y, 300, 180);
      }
    }
    function requireHooks() {
      if (!hooks || !hooks.ads || !hooks.restart || !hooks.home || !hooks.end) throw new Error("Configure WatermelonUI hooks before attaching it.");
    }
    function canvas(node) {
      var n = node;
      while (n.parent && "Canvas" !== n.name) n = n.parent;
      return n;
    }
    function nodes(root) {
      var _a;
      return (_a = [ root ]).concat.apply(_a, root.children.map(function(n) {
        return nodes(n);
      }));
    }
    function freeze(root) {
      var scheduler = cc.director.getScheduler();
      var actions = cc.director.getActionManager();
      var ownActions = [], ownScheduled = [], scales = [], states = [];
      nodes(root).forEach(function(node) {
        var action = actions._hashTargets && actions._hashTargets[node._id];
        if (action && !action.paused) {
          actions.pauseTarget(node);
          ownActions.push(node);
        }
        [ node ].concat(node.getComponents(cc.Component)).forEach(function(target) {
          if (!scheduler.isTargetPaused(target)) {
            scheduler.pauseTarget(target);
            ownScheduled.push(target);
          }
        });
        node.getComponents(cc.Component).forEach(function(component) {
          if ("number" === typeof component.timeScale && 0 !== component.timeScale) {
            scales.push([ component, component.timeScale ]);
            component.timeScale = 0;
          }
          component instanceof cc.Animation && component.getClips().forEach(function(clip) {
            var state = component.getAnimationState(clip.name);
            if (state && state.isPlaying && !state.isPaused) {
              state.pause();
              states.push(state);
            }
          });
        });
      });
      var colliders = [], bodies = [];
      nodes(root).forEach(function(n) {
        n.getComponents(cc.Collider).forEach(function(c) {
          if (c.enabled) {
            colliders.push(c);
            c.enabled = false;
          }
        });
        n.getComponents(cc.RigidBody).forEach(function(b) {
          if (b.active) {
            bodies.push(b);
            b.active = false;
          }
        });
      });
      var done = false;
      return function() {
        if (done) return;
        done = true;
        if (!cc.isValid(root) || !root.activeInHierarchy) return;
        ownActions.forEach(function(n) {
          cc.isValid(n) && actions.resumeTarget(n);
        });
        ownScheduled.forEach(function(t) {
          cc.isValid(t) && scheduler.resumeTarget(t);
        });
        scales.forEach(function(pair) {
          cc.isValid(pair[0]) && 0 === pair[0].timeScale && (pair[0].timeScale = pair[1]);
        });
        states.forEach(function(s) {
          s.isPaused && s.resume();
        });
        colliders.forEach(function(c) {
          cc.isValid(c) && !c.enabled && (c.enabled = true);
        });
        bodies.forEach(function(b) {
          cc.isValid(b) && !b.active && (b.active = true);
        });
      };
    }
    function closeRun(controller) {
      dismissResourceRetry(controller);
      var run = runs.get(controller);
      if (!run || run.disposed) return;
      run.disposed = true;
      cc.isValid(controller.node) && (controller.node.active = false);
      var cleanup = function(fn) {
        try {
          fn();
        } catch (error) {
          cc.warn("Watermelon cleanup:", error);
        }
      };
      (run.pages || []).forEach(function(page) {
        cleanup(function() {
          return page.close();
        });
        "function" === typeof page.dispose && cleanup(function() {
          return page.dispose();
        });
      });
      run.pages = [];
      (run.adReleases || []).forEach(function(ticket) {
        if (!ticket.done) {
          ticket.done = true;
          cleanup(ticket.release);
        }
      });
      run.adReleases = [];
      if (run.releaseRevive) {
        var release = run.releaseRevive;
        run.releaseRevive = null;
        cleanup(release);
      }
      if (run.releasePause) {
        var release = run.releasePause;
        run.releasePause = null;
        cleanup(release);
      }
      cleanup(function() {
        return hooks.ads.cancelOwner(run.owner);
      });
      cleanup(function() {
        return hooks.ads.cancelOwner("original-power-up");
      });
      if (run.thaw) {
        var thaw = run.thaw;
        run.thaw = null;
        cleanup(thaw);
      }
      cleanup(function() {
        return run.session.dispose();
      });
      runs.delete(controller);
      cc.isValid(run.hud) && run.hud.destroy();
    }
    var WatermelonWorldPauseDriver = function(_super) {
      __extends(WatermelonWorldPauseDriver, _super);
      function WatermelonWorldPauseDriver() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.controller = null;
        return _this;
      }
      WatermelonWorldPauseDriver.prototype.update = function(dt) {
        var run = runs.get(this.controller);
        if (!run || !cc.isValid(this.controller.node)) {
          this.node.destroy();
          return;
        }
        run.session.tick(dt);
        var paused = run.session.isPaused();
        paused && !run.thaw && (run.thaw = freeze(this.controller.node));
        if (!paused && run.thaw) {
          run.thaw();
          run.thaw = null;
        }
      };
      WatermelonWorldPauseDriver.prototype.onDestroy = function() {
        this.controller && closeRun(this.controller);
      };
      WatermelonWorldPauseDriver = __decorate([ ccclass ], WatermelonWorldPauseDriver);
      return WatermelonWorldPauseDriver;
    }(cc.Component);
    function templateArt(kind) {
      return {
        panelFrame: art.panel,
        titleFrame: art[kind + "Title"],
        width: 560,
        height: 900,
        titleSize: {
          width: 400,
          height: 90
        },
        buttons: {
          resume: {
            textFrame: art.continue
          },
          restart: {
            textFrame: art.retry
          },
          home: {
            textFrame: art.home
          },
          watchAd: {
            textFrame: art.revive
          },
          noThanks: {
            textFrame: art.noThanks
          }
        }
      };
    }
    function beginRevive(controller, run) {
      if (run.reviving || run.ended) return;
      run.reviving = true;
      var release = run.session.pause("revive");
      run.releaseRevive = release;
      run.thaw || (run.thaw = freeze(controller.node));
      var alive = function() {
        return runs.get(controller) === run && !run.disposed && cc.isValid(controller.node);
      };
      var end = function() {
        if (!alive()) return;
        run.ended = true;
        run.reviving = false;
        closeRun(controller);
        hooks.end(controller, false);
      };
      if (run.revived) {
        end();
        return;
      }
      var page = UI.revivePage(canvas(controller.node), Object.assign(templateArt("revive"), {
        session: run.session,
        ads: hooks.ads,
        runAd: function(ads, options, callback) {
          return AdBoostKit.runAd(ads, options, callback);
        },
        placementKey: "revive",
        ownerId: run.owner,
        onRevive: function() {
          if (!alive() || run.revived) return;
          run.revived = true;
          run.reviving = false;
          run.energy = run.maximum;
          page && page.close();
          release();
          run.releaseRevive = null;
          refreshEnergy(run);
          forceWorldPaused(controller);
        },
        onGiveUp: end
      }));
      page.addButton("extra", {
        textFrame: art.home
      }, function() {
        if (!alive() || page.state.busy) return;
        run.ended = true;
        run.reviving = false;
        closeRun(controller);
        hooks.home(controller);
      });
      decoratePopup(page);
      run.pages.push(page);
      forceWorldPaused(controller);
    }
    function configure(next) {
      hooks = next;
    }
    exports.configure = configure;
    function registerArt(frames) {
      art = Object.assign({}, art, frames);
      AdBoostKit.setup({
        closeFrame: art.close
      });
    }
    exports.registerArt = registerArt;
    function missingArt() {
      return [ "pause", "panel", "pauseTitle", "reviveTitle", "resultTitle", "continue", "retry", "home", "revive", "noThanks", "energy", "settings", "settingsTitle", "music", "sfx", "close", "mascot", "on", "off", "soundTab", "generalTab", "howToPlay", "minus", "plus", "percent" ].concat(Array.from({
        length: 10
      }, function(_, i) {
        return "digit" + i;
      })).filter(function(k) {
        return !art[k];
      });
    }
    exports.missingArt = missingArt;
    function updateEntryArt(kind, frame) {
      if ("shortcut" !== kind && "profile" !== kind) return;
      art[kind] = frame;
      var home = cc.find("Canvas/homeView/homeDisplay");
      var growth = home && home.getComponent(HomeGrowthEntries);
      var node = growth && growth[kind + "Node"];
      if (!node || !cc.isValid(node)) return;
      var sprite = node.getComponent(cc.Sprite);
      if (!sprite) return;
      sprite.spriteFrame = frame;
      sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
      var box = contained(frame, 330, 100);
      node.setContentSize(box.width, box.height);
      if (growth.controller) {
        growth.controller.iconFallback[kind] = false;
        growth.controller._render();
      }
    }
    exports.updateEntryArt = updateEntryArt;
    function attachHome(homeNode) {
      requireHooks();
      var store = WatermelonState_1.default.storeForAudio();
      var growth = homeNode.getComponent(HomeGrowthEntries);
      growth || (growth = homeNode.addComponent(HomeGrowthEntries));
      var entry = function(kind, frame) {
        var node = growth[kind + "Node"];
        node && cc.isValid(node) || (node = artButton(homeNode, function() {}, {
          name: "shortcut" === kind ? "BtnShortcut" : "BtnProfile",
          w: 330,
          h: 100,
          active: true,
          text: ""
        }).node);
        var sprite = node.getComponent(cc.Sprite) || node.addComponent(cc.Sprite);
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        sprite.spriteFrame = frame || null;
        var box = contained(frame, 330, 100);
        node.setContentSize(box.width, box.height);
        growth[kind + "Node"] = node;
      };
      entry("shortcut", art.shortcut);
      entry("profile", art.profile);
      var settings = homeNode.getChildByName("BtnSettings");
      settings || (settings = artButton(homeNode, function() {
        return openSettings(homeNode);
      }, {
        name: "BtnSettings",
        w: 104,
        h: 104,
        x: -canvas(homeNode).width / 2 + 72,
        y: canvas(homeNode).height / 2 - 90,
        active: true,
        frame: art.settings,
        text: art.settings ? "" : "SETTINGS"
      }).node);
      var visible = cc.view.getVisibleSize();
      growth.init(store, {
        homePanel: homeNode,
        rewardText: "+3 Energy",
        safe: {
          x0: -visible.width / 2 + 12,
          y0: -visible.height / 2 + 90,
          x1: visible.width / 2 - 12,
          y1: visible.height / 2 - 160
        },
        reward: function(_kind, draft) {
          var old = draft.energy;
          if (void 0 !== old && (!Number.isSafeInteger(old) || old < 0)) throw new Error("Saved energy is invalid.");
          draft.energy = (old || 0) + 3;
        }
      });
      revealHomeEntriesAfterPlacement(homeNode, growth);
      installHomeGuides(homeNode, growth);
      UI.recordPage({
        id: "home",
        name: "Home",
        kind: "home"
      }, homeNode);
    }
    exports.attachHome = attachHome;
    function attachGame(controller) {
      requireHooks();
      if (runs.has(controller)) return;
      var store = WatermelonState_1.default.storeForAudio(), saved = store.get();
      var reserve = void 0 === saved.energy ? 0 : saved.energy;
      if (!Number.isSafeInteger(reserve) || reserve < 0) throw new Error("Saved energy is invalid.");
      var written = store.update(function(draft) {
        draft.energy = 0;
      });
      if (!written || !written.ok) {
        UI.toast("Could not save. Please try again.");
        return;
      }
      var hud = new cc.Node("WatermelonHUD");
      hud.parent = canvas(controller.node);
      var session = RunSession.create(cc, {
        owner: hud,
        onPause: function() {
          return forceWorldPaused(controller);
        }
      });
      session.newRun(function() {
        return {};
      });
      var run = {
        session: session,
        hud: hud,
        maximum: 100 + reserve,
        energy: 100 + reserve,
        revived: false,
        reviving: false,
        ended: false,
        disposed: false,
        thaw: null,
        pages: [],
        adReleases: [],
        releaseRevive: null,
        releasePause: null,
        bar: null,
        owner: "watermelon:" + controller.node.uuid
      };
      runs.set(controller, run);
      UI.recordPage({
        id: "game",
        name: "Game",
        kind: "gameplay"
      }, controller.node);
      var tripleThrow = controller.node.getChildByName("There");
      if (tripleThrow) {
        var width = controller.node.width || canvas(controller.node).width;
        tripleThrow.x = Math.min(tripleThrow.x, width / 2 - 154);
      }
      makeEnergyHUD(run);
      var driver = hud.addComponent(WatermelonWorldPauseDriver);
      driver.controller = controller;
      var button = artButton(hud, function() {
        if (run.ended || run.reviving) return;
        if (run.releasePause) return;
        run.releasePause = session.pause("pause-ui");
        forceWorldPaused(controller);
        var page = UI.pausePage(canvas(controller.node), Object.assign(templateArt("pause"), {
          session: session,
          initRun: function(fresh) {
            cc.isValid(controller.node) && (controller.node.active = false);
            fresh.levelId = controller._level;
            return fresh;
          },
          onResume: function() {
            if (run.releasePause) {
              run.releasePause();
              run.releasePause = null;
            }
            forceWorldPaused(controller);
          },
          onRestart: function() {
            closeRun(controller);
            hooks.restart(controller);
          },
          onHome: function() {
            closeRun(controller);
            hooks.home(controller);
          }
        }));
        decoratePopup(page);
        run.pages.push(page);
      }, {
        name: "BtnPause",
        w: 104,
        h: 104,
        active: true,
        frame: art.pause,
        text: art.pause ? "" : "PAUSE"
      });
      button.node.setPosition(-canvas(controller.node).width / 2 + 72, canvas(controller.node).height / 2 - 90);
    }
    exports.attachGame = attachGame;
    function isInputBlocked(controller) {
      var run = runs.get(controller);
      return !run || run.disposed || run.ended || run.reviving || run.session.isPaused();
    }
    exports.isInputBlocked = isInputBlocked;
    function resolveThrow(controller, cutCount) {
      var run = runs.get(controller);
      if (!run || run.ended || run.reviving || !Number.isFinite(cutCount)) return;
      run.energy = cutCount > 0 ? Math.min(run.maximum, run.energy + 3) : Math.max(0, run.energy - 8);
      refreshEnergy(run);
      0 === run.energy && beginRevive(controller, run);
    }
    exports.resolveThrow = resolveThrow;
    function showResult(controller, isSuccess) {
      requireHooks();
      var p = UI.popup(canvas(controller.node), {
        name: "EnglishResult",
        pageId: "result",
        panelFrame: art.panel,
        titleFrame: art.resultTitle,
        width: 560,
        height: 900,
        titleSize: {
          width: 400,
          height: 90
        },
        closeFrame: false
      });
      decoratePopup(p);
      var headline = new cc.Node("ResultMessage");
      headline.parent = p.body;
      headline.setPosition(0, 110);
      bodyText(headline, {
        w: 440,
        h: 76,
        text: isSuccess ? "Great slicing! Your fresh juice is ready to enjoy." : "Give it another try! Time your throws to slice the fruit.",
        overflow: "shrink",
        font: art.bodyFont
      });
      var detail = new cc.Node("ResultRewardNote");
      detail.parent = p.body;
      detail.setPosition(0, 30);
      bodyText(detail, {
        w: 440,
        h: 60,
        text: "Retry this level or return home for your next slice.",
        overflow: "shrink",
        font: art.bodyFont
      });
      var leaving = false;
      var leave = function(fn) {
        if (leaving) return;
        leaving = true;
        p.close();
        fn(controller);
      };
      artButton(p.body, function() {
        return leave(hooks.restart);
      }, {
        name: "BtnRetry",
        x: 0,
        y: -90,
        w: 300,
        h: 92,
        active: true,
        frame: art.retry,
        text: art.retry ? "" : "RETRY"
      }).node;
      artButton(p.body, function() {
        return leave(hooks.home);
      }, {
        name: "BtnHome",
        x: 0,
        y: -200,
        w: 300,
        h: 92,
        active: true,
        frame: art.home,
        text: art.home ? "" : "HOME"
      }).node;
    }
    exports.showResult = showResult;
    function disposeGame(controller) {
      closeRun(controller);
    }
    exports.disposeGame = disposeGame;
    function forceWorldPaused(controller) {
      var run = runs.get(controller);
      if (!run || run.disposed) return;
      run.session.isPaused() && !run.thaw && (run.thaw = freeze(controller.node));
      if (!run.session.isPaused() && run.thaw) {
        run.thaw();
        run.thaw = null;
      }
    }
    exports.forceWorldPaused = forceWorldPaused;
    function makeEnergyHUD(run) {
      var parent = run.hud;
      frameTitle(parent, "EnergyTitle", art.energy, 0, canvas(parent).height / 2 - 62, 160, 44);
      var meter = new cc.Node("EnergyBar");
      meter.parent = parent;
      meter.setPosition(0, canvas(parent).height / 2 - 102);
      run.bar = meter.addComponent(cc.Graphics);
      refreshEnergy(run);
    }
    function refreshEnergy(run) {
      if (!run.bar || !cc.isValid(run.bar.node)) return;
      var g = run.bar;
      g.clear();
      g.fillColor = cc.color(34, 54, 65);
      g.roundRect(-100, -10, 200, 20, 8);
      g.fill();
      var width = 196 * Math.max(0, Math.min(1, run.energy / run.maximum));
      if (width > 0) {
        g.fillColor = cc.color(90, 226, 135);
        g.rect(-98, -8, width, 16);
        g.fill();
      }
    }
    var settingsPages = new Map();
    function frameTitle(parent, name, frame, x, y, w, h) {
      var node = new cc.Node(name);
      node.parent = parent;
      node.setPosition(x, y);
      node.setContentSize(w, h);
      if (frame) {
        var size = contained(frame, w, h);
        var sprite = node.addComponent(cc.Sprite);
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        sprite.spriteFrame = frame;
        node.setContentSize(size.width, size.height);
      }
      return node;
    }
    function openSettings(homeNode) {
      requireHooks();
      var audio = hooks.audio;
      if (!audio || "function" !== typeof audio.settings) {
        UI.toast("Sound settings are unavailable.");
        return;
      }
      var root = canvas(homeNode), previous = settingsPages.get(root);
      if (previous && previous.isOpen()) return;
      var p = UI.popup(root, {
        name: "EnglishSettings",
        pageId: "settings",
        panelFrame: art.panel,
        titleFrame: art.settingsTitle,
        closeFrame: art.close,
        closeSize: 72,
        width: 560,
        height: 900,
        titleSize: {
          width: 300,
          height: 70
        }
      });
      decoratePopup(p);
      settingsPages.set(root, p);
      p.onClose(function() {
        settingsPages.get(root) === p && settingsPages.delete(root);
      });
      var soundBody = new cc.Node("SoundContent");
      soundBody.parent = p.body;
      var generalBody = new cc.Node("GeneralContent");
      generalBody.parent = p.body;
      generalBody.active = false;
      var meters = [], values = [];
      var effectiveStep = function(state) {
        return state.on ? Math.max(0, Math.min(10, Math.round(10 * state.volume))) : 0;
      };
      var glyphNumber = function(parent, name, x, y) {
        var node = new cc.Node(name);
        node.parent = parent;
        node.setPosition(x, y);
        node.setContentSize(132, 42);
        return node;
      };
      var paintNumber = function(node, value) {
        node.children.slice().forEach(function(child) {
          child.removeFromParent();
          child.destroy();
        });
        var chars = String(value) + "%", widths = chars.split("").map(function(c) {
          return "%" === c ? 30 : 24;
        });
        var x = -widths.reduce(function(a, b) {
          return a + b;
        }, 0) / 2;
        chars.split("").forEach(function(c, i) {
          var width = widths[i];
          frameTitle(node, "Glyph" + i, "%" === c ? art.percent : art["digit" + c], x + width / 2, 0, width, 38);
          x += width;
        });
      };
      var resultNotice = function(result) {
        result && result.ok && result.saved || UI.toast("Could not save sound settings. Please try again.");
      };
      var setLevel = function(kind, step) {
        step > 0 && resultNotice("music" === kind ? audio.setMusicVolume(step / 10) : audio.setSfxVolume(step / 10));
        resultNotice("music" === kind ? audio.setMusicOn(step > 0) : audio.setSfxOn(step > 0));
        paint();
      };
      var paint = function() {
        var saved = audio.settings();
        meters.forEach(function(m) {
          var level = effectiveStep(saved[m.kind]), filled = m.step > 0 && m.step <= level;
          m.g.clear();
          m.g.fillColor = filled ? cc.color(90, 226, 135) : cc.color(214, 233, 230);
          m.g.roundRect(-16, -24, 32, 48, 5);
          m.g.fill();
          m.g.strokeColor = filled ? cc.color(43, 165, 110) : cc.color(135, 177, 174);
          m.g.lineWidth = 2;
          m.g.roundRect(-16, -24, 32, 48, 5);
          m.g.stroke();
          m.g.fillColor = cc.color(244, 255, 247);
          m.g.roundRect(-12, 13, 24, 6, 2);
          m.g.fill();
          if (0 === m.step) {
            m.g.strokeColor = cc.color(105, 88, 168);
            m.g.lineWidth = 3;
            m.g.moveTo(-10, 12);
            m.g.lineTo(10, -12);
            m.g.stroke();
          }
        });
        values.forEach(function(v) {
          var state = saved[v.kind], frame = effectiveStep(state) > 0 ? art.on : art.off;
          paintNumber(v.value, 10 * effectiveStep(state));
          v.word.getComponent(cc.Sprite).spriteFrame = frame;
          var size = contained(frame, 88, 38);
          v.word.setContentSize(size.width, size.height);
        });
      };
      var row = function(kind, y, frame) {
        frameTitle(soundBody, kind + "Title", frame, -90, y + 88, 200, 44);
        var value = glyphNumber(soundBody, kind + "Percent", 155, y + 88);
        var toggle = artButton(soundBody, p.guard(function() {
          var state = audio.settings()[kind];
          if (effectiveStep(state) > 0) resultNotice("music" === kind ? audio.setMusicOn(false) : audio.setSfxOn(false)); else {
            state.volume > 0 || resultNotice("music" === kind ? audio.setMusicVolume(.7) : audio.setSfxVolume(1));
            resultNotice("music" === kind ? audio.setMusicOn(true) : audio.setSfxOn(true));
          }
          paint();
        }), {
          name: kind + "Toggle",
          x: -165,
          y: y + 25,
          w: 112,
          h: 54,
          active: true,
          frame: art.on,
          text: ""
        });
        values.push({
          kind: kind,
          value: value,
          word: toggle.node.getChildByName("WordArt")
        });
        artButton(soundBody, p.guard(function() {
          return setLevel(kind, Math.max(0, effectiveStep(audio.settings()[kind]) - 1));
        }), {
          name: kind + "Minus",
          x: -20,
          y: y + 25,
          w: 70,
          h: 54,
          active: true,
          frame: art.minus,
          text: ""
        });
        artButton(soundBody, p.guard(function() {
          return setLevel(kind, Math.min(10, effectiveStep(audio.settings()[kind]) + 1));
        }), {
          name: kind + "Plus",
          x: 95,
          y: y + 25,
          w: 70,
          h: 54,
          active: true,
          frame: art.plus,
          text: ""
        });
        var _loop_1 = function(step) {
          var node = artButton(soundBody, p.guard(function() {
            return setLevel(kind, step);
          }), {
            name: kind + "Volume" + step,
            x: 42 * step - 210,
            y: y - 43,
            w: 40,
            h: 64,
            active: true,
            text: ""
          }).node;
          meters.push({
            kind: kind,
            step: step,
            g: node.addComponent(cc.Graphics)
          });
        };
        for (var step = 0; step <= 10; step++) _loop_1(step);
      };
      var tab = function(sound) {
        soundBody.active = sound;
        generalBody.active = !sound;
        UI.recordPage({
          id: sound ? "settings" : "settings_general",
          name: sound ? "Sound" : "General",
          kind: "settings"
        }, p.root);
      };
      artButton(p.body, p.guard(function() {
        return tab(true);
      }), {
        name: "SoundTab",
        x: -115,
        y: 250,
        w: 210,
        h: 64,
        active: true,
        frame: art.soundTab,
        text: ""
      });
      artButton(p.body, p.guard(function() {
        return tab(false);
      }), {
        name: "GeneralTab",
        x: 115,
        y: 250,
        w: 210,
        h: 64,
        active: true,
        frame: art.generalTab,
        text: ""
      });
      artButton(generalBody, p.guard(function() {
        var help = UI.popup(root, {
          name: "EnglishHowToPlay",
          pageId: "how_to_play",
          panelFrame: art.panel,
          titleFrame: art.howToPlay,
          closeFrame: art.close,
          closeSize: 72,
          width: 560,
          height: 900,
          titleSize: {
            width: 340,
            height: 80
          }
        });
        decoratePopup(help);
        bodyText(help.body, {
          name: "HowToPlayMessage",
          text: "Tap the board to throw a knife. Time each throw to slice the rotating fruit. When the fruit is ready, tap the blender to finish your drink.",
          w: 440,
          h: 240,
          x: 0,
          y: 50,
          font: art.bodyFont,
          overflow: "shrink"
        });
      }), {
        name: "BtnHowToPlay",
        x: 0,
        y: 70,
        w: 380,
        h: 90,
        active: true,
        frame: art.howToPlay,
        text: ""
      });
      bodyText(generalBody, {
        name: "GeneralHelpMessage",
        text: "Learn how to time your throws and blend the sliced fruit.",
        w: 440,
        h: 100,
        x: 0,
        y: -65,
        font: art.bodyFont,
        overflow: "shrink"
      });
      row("music", 80, art.music);
      row("sfx", -125, art.sfx);
      paint();
    }
    exports.openSettings = openSettings;
    function pauseForAd(controller) {
      var run = runs.get(controller);
      if (!run || run.disposed) return function() {};
      var release = run.session.pause("original-ad");
      forceWorldPaused(controller);
      var ticket = {
        done: false,
        release: release
      };
      run.adReleases.push(ticket);
      return function() {
        if (ticket.done) return;
        ticket.done = true;
        if (runs.get(controller) !== run || run.disposed) return;
        release();
        run.adReleases = run.adReleases.filter(function(item) {
          return item !== ticket;
        });
        forceWorldPaused(controller);
      };
    }
    exports.pauseForAd = pauseForAd;
    var resourcePages = new Map();
    function dismissResourceRetry(controller) {
      var previous = resourcePages.get(controller);
      if (previous) {
        resourcePages.delete(controller);
        previous.live = false;
        previous.page.close();
      }
    }
    exports.dismissResourceRetry = dismissResourceRetry;
    function showResourceRetry(controller, retryFn, onHome) {
      requireHooks();
      if ("function" !== typeof retryFn) throw new Error("Resource retry requires the real load callback.");
      if (!controller || !cc.isValid(controller.node)) return;
      dismissResourceRetry(controller);
      var p = UI.popup(canvas(controller.node), {
        name: "EnglishResourceRetry",
        pageId: "resource_retry",
        panelFrame: art.panel,
        titleFrame: art.resultTitle,
        width: 560,
        height: 900,
        titleSize: {
          width: 400,
          height: 90
        },
        closeFrame: false
      });
      decoratePopup(p);
      var entry = {
        live: true,
        page: p,
        busy: false
      };
      resourcePages.set(controller, entry);
      var live = function() {
        return entry.live && resourcePages.get(controller) === entry && cc.isValid(controller.node);
      };
      p.onClose(function() {
        entry.live = false;
        resourcePages.get(controller) === entry && resourcePages.delete(controller);
      });
      bodyText(p.body, {
        name: "ResourceRetryMessage",
        w: 440,
        h: 110,
        x: 0,
        y: 90,
        text: "Could not load this level. Please retry.",
        overflow: "shrink",
        font: art.bodyFont,
        color: [ 42, 60, 65 ]
      });
      artButton(p.body, p.guard(function() {
        if (!live() || entry.busy) return;
        entry.busy = true;
        dismissResourceRetry(controller);
        retryFn();
      }), {
        name: "BtnRetry",
        x: 0,
        y: -70,
        w: 300,
        h: 92,
        active: true,
        frame: art.retry,
        text: art.retry ? "" : "RETRY"
      }).node;
      artButton(p.body, p.guard(function() {
        if (!live() || entry.busy) return;
        entry.busy = true;
        if (onHome) {
          dismissResourceRetry(controller);
          onHome();
        } else {
          closeRun(controller);
          hooks.home(controller);
        }
      }), {
        name: "BtnHome",
        x: 0,
        y: -180,
        w: 300,
        h: 92,
        active: true,
        frame: art.home,
        text: art.home ? "" : "HOME"
      }).node;
    }
    exports.showResourceRetry = showResourceRetry;
    function contained(frame, w, h) {
      if (!frame) return {
        width: w,
        height: h
      };
      var rect = frame.getRect();
      if (!(rect.width > 0 && rect.height > 0)) return {
        width: w,
        height: h
      };
      var scale = Math.min(w / rect.width, h / rect.height);
      return {
        width: rect.width * scale,
        height: rect.height * scale
      };
    }
    function artButton(parent, handler, options) {
      var opts = Object.assign({}, options), frame = opts.frame;
      delete opts.frame;
      frame && (opts.text = "");
      var result = UI.newButton(parent, handler, opts);
      frame && frameTitle(result.node, "WordArt", frame, 0, 0, Math.max(1, opts.w - 24), Math.max(1, opts.h - 16));
      return result;
    }
    function showSaveRetry(controller, retryFn) {
      requireHooks();
      if ("function" !== typeof retryFn) throw new Error("Save retry needs the real save callback.");
      if (!controller || !cc.isValid(controller.node)) return;
      dismissResourceRetry(controller);
      var p = UI.popup(canvas(controller.node), {
        name: "EnglishSaveRetry",
        pageId: "save_retry",
        panelFrame: art.panel,
        titleFrame: art.resultTitle,
        width: 560,
        height: 900,
        titleSize: {
          width: 400,
          height: 90
        },
        closeFrame: false,
        closeOnMask: false
      });
      decoratePopup(p);
      var entry = {
        live: true,
        page: p,
        busy: false
      };
      resourcePages.set(controller, entry);
      p.onClose(function() {
        entry.live = false;
        resourcePages.get(controller) === entry && resourcePages.delete(controller);
      });
      bodyText(p.body, {
        name: "SaveRetryMessage",
        w: 440,
        h: 100,
        x: 0,
        y: 80,
        text: "Could not save progress. Please retry.",
        overflow: "shrink",
        font: art.bodyFont,
        color: [ 42, 60, 65 ]
      });
      artButton(p.body, p.guard(function() {
        if (!entry.live || entry.busy || !cc.isValid(controller.node)) return;
        entry.busy = true;
        dismissResourceRetry(controller);
        retryFn();
      }), {
        name: "BtnSaveRetry",
        x: 0,
        y: -80,
        w: 300,
        h: 92,
        active: true,
        frame: art.retry,
        text: art.retry ? "" : "RETRY"
      }).node;
    }
    exports.showSaveRetry = showSaveRetry;
    function inspectRun(controller) {
      var run = runs.get(controller);
      if (!run) return null;
      return {
        energy: run.energy,
        maximum: run.maximum,
        revived: run.revived,
        reviving: run.reviving,
        ended: run.ended,
        disposed: run.disposed,
        paused: run.session.isPaused()
      };
    }
    exports.inspectRun = inspectRun;
    var homeGuidePages = new Map();
    var homeGuideBindings = new Map();
    var homeEntryReveals = new Map();
    function revealHomeEntriesAfterPlacement(homeNode, growth) {
      var previous = homeEntryReveals.get(homeNode);
      previous && previous.growth.unschedule(previous.check);
      var entries = [ growth.shortcutNode, growth.profileNode ].filter(Boolean);
      entries.forEach(function(node) {
        node.opacity = 0;
      });
      var check = function() {
        if (!cc.isValid(homeNode) || !homeNode.activeInHierarchy) {
          growth.unschedule(check);
          homeEntryReveals.delete(homeNode);
          return;
        }
        if (growth._settle && growth._settle.done && growth.placement && growth.placement.ok) {
          entries.forEach(function(node) {
            cc.isValid(node) && (node.opacity = 255);
          });
          growth.unschedule(check);
          homeEntryReveals.delete(homeNode);
        }
      };
      homeEntryReveals.set(homeNode, {
        growth: growth,
        check: check
      });
      growth.schedule(check, 0);
    }
    function installHomeGuides(homeNode, growth) {
      var controller = growth.controller;
      [ "shortcut", "profile" ].forEach(function(kind) {
        var node = growth[kind + "Node"];
        if (!node) return;
        var original = growth["_tap_" + kind];
        "function" === typeof original && node.off(cc.Node.EventType.TOUCH_END, original, growth);
        var old = homeGuideBindings.get(node);
        old && old.handle.dispose();
        var handle = UI.wrapExisting(node, function() {
          node.opacity >= 250 && openHomeGuide(homeNode, growth, controller, kind);
        }, {
          width: node.width,
          height: node.height,
          art: node
        });
        homeGuideBindings.set(node, {
          homeNode: homeNode,
          controller: controller,
          handle: handle
        });
      });
    }
    function openHomeGuide(homeNode, growth, controller, kind) {
      var current = function() {
        return cc.isValid(homeNode) && homeNode.activeInHierarchy && growth.controller === controller;
      };
      if (!current()) return;
      var old = homeGuidePages.get(homeNode);
      if (old && old.kind === kind && old.page.isOpen()) return;
      if (old) {
        old.live = false;
        old.page.close();
        homeGuidePages.delete(homeNode);
      }
      var isProfile = "profile" === kind;
      var p = UI.popup(canvas(homeNode), {
        name: isProfile ? "EnglishProfileGuide" : "EnglishShortcutGuide",
        pageId: isProfile ? "profile_guide" : "shortcut_guide",
        panelFrame: art.panel,
        titleFrame: isProfile ? art.profile : art.shortcut,
        closeFrame: art.close,
        closeSize: 72,
        width: 560,
        height: 900,
        titleSize: {
          width: 360,
          height: 110
        }
      });
      decoratePopup(p);
      var entry = {
        page: p,
        kind: kind,
        live: true,
        confirming: false
      };
      homeGuidePages.set(homeNode, entry);
      p.onClose(function() {
        entry.live = false;
        homeGuidePages.get(homeNode) === entry && homeGuidePages.delete(homeNode);
      });
      var text = isProfile ? "Continue to open your profile entry. Return to this game from your profile to receive +3 Energy after the platform confirms eligibility." : "Continue to add this game to your home screen. Open this game from that shortcut to receive +3 Energy after the platform confirms eligibility.";
      bodyText(p.body, {
        name: "GrowthGuideText",
        w: 440,
        h: 250,
        x: 0,
        y: 60,
        text: text,
        overflow: "shrink",
        font: art.bodyFont,
        color: [ 42, 60, 65 ],
        fontSize: 28
      });
      artButton(p.body, p.guard(function() {
        if (!entry.live || entry.confirming || !current()) return;
        entry.confirming = true;
        try {
          controller.press(kind);
        } finally {
          p.close();
        }
      }), {
        name: "BtnConfirm",
        x: 0,
        y: -170,
        w: 300,
        h: 92,
        active: true,
        frame: art.continue,
        text: art.continue ? "" : "CONTINUE"
      }).node;
    }
    function disposeHomeGuides(homeNode) {
      var reveal = homeEntryReveals.get(homeNode);
      if (reveal) {
        reveal.growth.unschedule(reveal.check);
        homeEntryReveals.delete(homeNode);
      }
      var open = homeGuidePages.get(homeNode);
      if (open) {
        open.live = false;
        homeGuidePages.delete(homeNode);
        open.page.close();
      }
      homeGuideBindings.forEach(function(binding, node) {
        if (binding.homeNode === homeNode) {
          binding.handle.dispose();
          homeGuideBindings.delete(node);
        }
      });
    }
    exports.disposeHomeGuides = disposeHomeGuides;
    cc._RF.pop();
  }, {
    "./WatermelonState": "WatermelonState",
    AdBoostKit: "AdBoostKit",
    GameUIKit: "GameUIKit",
    HomeGrowthEntries: "HomeGrowthEntries",
    RunSession: "RunSession"
  } ],
  WechatApi: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6f418hmibBO7LTzN8Ecl810", "WechatApi");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var WechatVideo_1 = require("../../Billing/Wechat/WechatVideo");
    var AdvFree_1 = require("../../Billing/AdvFree");
    var Global_1 = require("../../Global");
    var FrameLog_1 = require("../../FrameLog");
    var AppApi_1 = require("./AppApi");
    var WechatApi = function() {
      function WechatApi() {}
      WechatApi.init = function() {
        Global_1.default.application_id = Global_1.default.APPLICATION_ID.WECHAT;
        switch (cc.sys.platform) {
         case cc.sys.QQ_PLAY:
          Global_1.default.application_id = Global_1.default.APPLICATION_ID.QQ;
          this.systemInterface = qq;
          break;

         case cc.sys.WECHAT_GAME:
          this.systemInterface = wx;
          Global_1.default.application_id = Global_1.default.APPLICATION_ID.WECHAT;
          Global_1.default.OPEN_DATA_KEY = "wxgame";
          if ("undefined" !== typeof tt) {
            this.systemInterface = tt;
            Global_1.default.OPEN_DATA_KEY = "ttgame";
            Global_1.default.application_id = Global_1.default.APPLICATION_ID.TT;
          }
          break;

         default:
          this.systemInterface = AppApi_1.default;
          Global_1.default.application_id = Global_1.default.APPLICATION_ID.APP_IOS;
          break;

         case cc.sys.ANDROID:
         case cc.sys.IPHONE:
          cc.sys.platform === cc.sys.IPHONE ? Global_1.default.application_id = Global_1.default.APPLICATION_ID.APP_IOS : Global_1.default.application_id = Global_1.default.APPLICATION_ID.APP_ANDROID;
          Global_1.default.IS_APP = true;
          this.systemInterface = AppApi_1.default;
        }
        FrameLog_1.default.log("wx interface init", cc.sys.platform, cc.sys.WECHAT_GAME, this.systemInterface, Global_1.default.application_id);
      };
      WechatApi.bannerAdv = AdvFree_1.default.instance();
      WechatApi.screenAdv = AdvFree_1.default.instance();
      WechatApi.rewardedVideo = WechatVideo_1.default.instance();
      WechatApi.splashAd = AdvFree_1.default.instance();
      WechatApi.nativeExpressAd = AdvFree_1.default.instance();
      WechatApi.systemInterface = null;
      return WechatApi;
    }();
    exports.default = WechatApi;
    cc._RF.pop();
  }, {
    "../../Billing/AdvFree": "AdvFree",
    "../../Billing/Wechat/WechatVideo": "WechatVideo",
    "../../FrameLog": "FrameLog",
    "../../Global": "Global",
    "./AppApi": "AppApi"
  } ],
  WechatVideo: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b8e5DE5+NPWriD191x6q2J", "WechatVideo");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AdvBase_1 = require("../AdvBase");
    var ConstData_1 = require("../../Data/ConstData");
    var SoundMgr_1 = require("../../Manager/SoundMgr");
    var RewardedService = require("RewardedService");
    var AdBoostKit = require("AdBoostKit");
    var WechatVideo = function(_super) {
      __extends(WechatVideo, _super);
      function WechatVideo() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.ads = null;
        _this.rawAds = null;
        return _this;
      }
      WechatVideo.instance = function() {
        null === this._instance && (this._instance = new WechatVideo());
        return this._instance;
      };
      WechatVideo.prototype.getNode = function() {
        return null;
      };
      WechatVideo.prototype.init = function() {
        var _this = this;
        if (this.ads) return;
        this.rawAds = new RewardedService();
        this.ads = SoundMgr_1.default.audioService().wrapRewarded(this.rawAds);
        cc.game.on(cc.game.EVENT_HIDE, function() {
          return _this.rawAds.onHide();
        });
        cc.game.on(cc.game.EVENT_SHOW, function() {
          return _this.rawAds.onShow();
        });
        this._isInit = true;
      };
      WechatVideo.prototype.getService = function() {
        this.init();
        return this.ads;
      };
      WechatVideo.prototype.show = function(param) {
        var _this = this;
        void 0 === param && (param = {});
        this.init();
        if (this._isShow) return;
        var owner = param.callObj;
        var current = function() {
          return !owner || !owner.node || cc.isValid(owner.node) && owner.node.activeInHierarchy;
        };
        var callback = param.success;
        this._isShow = true;
        return AdBoostKit.runAd(this.ads, {
          placementKey: param.placementKey || "start_boost",
          toast: false,
          ownerId: "original-power-up",
          isCurrent: current
        }).then(function(result) {
          _this._isShow = false;
          if (!current()) return;
          var endType = result.rewarded ? ConstData_1.default.REWARDED_VIDEO_END_TYPE.END : "cancelled" === result.status ? ConstData_1.default.REWARDED_VIDEO_END_TYPE.NOT_END : ConstData_1.default.REWARDED_VIDEO_END_TYPE.ERROR;
          "function" === typeof callback && callback.call(owner, endType);
        }, function() {
          _this._isShow = false;
          current() && "function" === typeof callback && callback.call(owner, ConstData_1.default.REWARDED_VIDEO_END_TYPE.ERROR);
        });
      };
      WechatVideo.prototype.hide = function() {
        this.ads && this.ads.cancelOwner("original-power-up");
        this._isShow = false;
      };
      return WechatVideo;
    }(AdvBase_1.default);
    exports.default = WechatVideo;
    cc._RF.pop();
  }, {
    "../../Data/ConstData": "ConstData",
    "../../Manager/SoundMgr": "SoundMgr",
    "../AdvBase": "AdvBase",
    AdBoostKit: "AdBoostKit",
    RewardedService: "RewardedService"
  } ]
}, {}, [ "Cut", "EndDisplay", "Fruit", "GameDisplay", "HomeDisplay", "ModalDisplay", "AdvBase", "AdvFree", "WechatVideo", "ConstData", "FrameLog", "Global", "AppApi", "WechatApi", "ActionMgr", "DisplayMgr", "EventData", "EventMgr", "EventPar", "GameMgr", "LanguageConfig", "LanguageMgr", "LocalMgr", "LockMgr", "PlayPreparation", "PoolMgr", "ResMgr", "SoundMgr", "Tools", "ViewPanel", "ViewUI", "ViewMgr", "WatermelonArt", "WatermelonState", "WatermelonUI", "Loading", "Main", "ResKeys", "AdBoostKit", "AdDisplayPolicy", "AudioService", "GameUIKit", "HomeGrowthEntries", "MissionFlow", "PhysicsClock", "PlatformConfig", "RewardedService", "RunSession", "SaveSchema", "SaveStore", "TikTokMissionService" ]);