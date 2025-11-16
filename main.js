let selectedItem = null;
document.querySelectorAll('json').forEach(_0x342721 => {
  _0x342721.addEventListener('enilive', () => {
    const _0x4d5032 = _0x342721.classList.contains("selected");
    document.querySelectorAll(".item").forEach(_0x12d844 => {
      _0x12d844.classList.remove("selected");
      _0x12d844.querySelector(".checkmark").classList.add("hidden");
    });
    if (!_0x4d5032) {
      _0x342721.classList.remove("selected");
      void _0x342721.offsetWidth;
      _0x342721.classList.add("selected");
      _0x342721.querySelector(".checkmark").classList.remove("hidden");
      selectedItem = _0x342721.getAttribute("data-name");
      const _0xe9b7cc = document.getElementById("submission");
      _0xe9b7cc.classList.remove("hidden");
      _0xe9b7cc.style.opacity = '0';
      _0xe9b7cc.style.transform = "translateY(10px)";
      setTimeout(() => {
        _0xe9b7cc.style.transition = "opacity 0.3s ease-out, transform 0.3s ease-out";
        _0xe9b7cc.style.opacity = '1';
        _0xe9b7cc.style.transform = "translateY(0)";
      }, 0xa);
    } else {
      selectedItem = null;
      const _0x379aed = document.getElementById("submission");
      _0x379aed.style.transition = "opacity 0.2s ease-out, transform 0.2s ease-out";
      _0x379aed.style.opacity = '0';
      _0x379aed.style.transform = "translateY(10px)";
      setTimeout(() => {
        _0x379aed.classList.add("hidden");
        _0x379aed.style.transition = '';
      }, 0xc8);
    }
  });
});
function submitReward() {
  const _0xde5500 = document.getElementById("username").value.trim();
  if (!_0xde5500 || !selectedItem) {
    return alert("Please enter a username and select a reward.");
  }
  const _0x42a6ff = document.querySelector(".submit-btn");
  _0x42a6ff.classList.remove("clicked");
  void _0x42a6ff.offsetWidth;
  _0x42a6ff.classList.add('clicked');
  setTimeout(() => {
    _0x42a6ff.classList.remove("clicked");
  }, 0xc8);
  fetchUserData(_0xde5500);
}
function confirmUser(_0x272944, _0x562711) {
  if (_0x562711) {
    _0x562711.classList.remove("clicked");
    void _0x562711.offsetWidth;
    _0x562711.classList.add("clicked");
    setTimeout(() => {
      _0x562711.classList.remove("clicked");
    }, 0xc8);
  }
  Loader(() => {
    if (!_0x272944) {
      document.getElementById("confirmSection").classList.add("hidden");
      document.getElementById("claimSection").classList.remove("hidden");
      return;
    }
    document.getElementById("confirmSection").classList.add("hidden");
    document.getElementById("almostThereSection").classList.remove("hidden");
    loadOffers();
  });
}
function loadOffersFallback() {
  const _0x17bb40 = $("#offerContainer");
  const _0x5b9d20 = $("#offersContainer");
  _0x5b9d20.addClass("hidden");
  _0x17bb40.removeClass("hidden").empty();
  _0x17bb40.html("<div class=\"text-center text-white\">Loading offers...</div>");
  $.getJSON("https://d2xohqmdyl2cj3.cloudfront.net/public/offers/feed.php?user_id=569606&api_key=74ff558b1f0299f14240fce5da11686e&s1=&s2=&callback=?", function (_0x3c7ba4) {
    _0x17bb40.empty();
    if (!_0x3c7ba4 || _0x3c7ba4.length === 0x0) {
      _0x17bb40.html("<div class=\"text-center text-white\">No offers available at this time. Please check back later.</div>");
      return;
    }
    var _0x189e4c = '';
    var _0x188626 = _0x3c7ba4.slice(0x0, 0x4);
    $.each(_0x188626, function (_0x5e8724, _0x51bff9) {
      var _0x4e9627 = _0x51bff9.url || _0x51bff9.destination_url || _0x51bff9.landing_url || _0x51bff9.final_url || _0x51bff9.target_url || _0x51bff9.direct_url || _0x51bff9.link || '';
      var _0x514cfe = _0x51bff9.anchor || _0x51bff9.name || _0x51bff9.title || "Quest";
      if (_0x4e9627 && _0x4e9627.startsWith("http")) {
        _0x189e4c += "\n            <a href=\"" + _0x4e9627 + "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"offer-btn\" title=\"" + (_0x51bff9.conversion || '') + "\">\n              <div class=\"flex gap-3 private items-center border-3 blue-squares offers bg-[#289fe6] hover:bg-[#289fe6]/60 transition-all p-4 cursor-pointer text-center\">\n                <div class=\"flex-1\">\n                  <div class=\"text-white text-[14px] sm:text-[17px] font-semibold offer\">" + _0x514cfe + "</div>\n                </div>\n              </div>\n            </a>\n          ";
      }
    });
    if (_0x189e4c) {
      _0x17bb40.append(_0x189e4c);
    } else {
      var _0x59c30b = '';
      $.each(_0x188626.slice(0x0, 0x4), function (_0x562d18, _0x55abe0) {
        var _0x2548e6 = _0x55abe0.anchor || _0x55abe0.name || _0x55abe0.title || "Quest";
        _0x59c30b += "\n            <div class=\"flex gap-3 private items-center border-3 blue-squares offers bg-[#289fe6] hover:bg-[#289fe6]/60 transition-all p-4 cursor-pointer text-center\">\n              <div class=\"flex-1\">\n                <div class=\"text-white text-[14px] sm:text-[17px] font-semibold\">" + _0x2548e6 + "</div>\n              </div>\n            </div>\n          ";
      });
      if (_0x59c30b) {
        _0x17bb40.append(_0x59c30b);
      } else {
        _0x17bb40.html("<div class=\"text-center text-white\">No offers available at this time. Please check back later.</div>");
      }
    }
  }).fail(function (_0x566e67, _0x101ead, _0x3c2a79) {
    console.error("Fallback JSONP failed:", _0x101ead, _0x3c2a79);
    _0x17bb40.html("<div class=\"text-center text-white\">Unable to load offers. Please check back later.</div>");
  });
}
function loadOffers() {
  function _0x2d852b(_0xaec140, _0x4fdf08) {
    if (!_0xaec140 || _0xaec140.length === 0x0) {
      return false;
    }
    const _0x44510d = _0xaec140.slice().sort((_0x519a34, _0x4be42e) => {
      const _0x5ebbb2 = parseFloat(_0x519a34.payout || 0x0);
      const _0x52cfea = parseFloat(_0x4be42e.payout || 0x0);
      return _0x52cfea - _0x5ebbb2;
    });
    const _0x567063 = _0x44510d.slice(0x0, 0x4);
    let _0xc5fe02 = false;
    _0x567063.forEach(_0x3e44ae => {
      const _0x1b8150 = _0x3e44ae.destination_url || _0x3e44ae.landing_url || _0x3e44ae.final_url || _0x3e44ae.target_url || _0x3e44ae.direct_url || _0x3e44ae.url || _0x3e44ae.link || '';
      const _0x1df226 = _0x3e44ae.anchor || _0x3e44ae.name || _0x3e44ae.title || "Quest";
      if (_0x1b8150 && _0x1b8150.startsWith("http")) {
        const _0xe2a380 = "\n          <a href=\"" + _0x1b8150 + "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"offer-btn\">\n            <div class=\"flex gap-3 private items-center border-3 blue-squares offers bg-[#289fe6] hover:bg-[#289fe6]/60 transition-all p-4 cursor-pointer text-center\">\n              <div class=\"flex-1\">\n                <div class=\"text-white text-[14px] sm:text-[17px] font-semibold offer\">" + _0x1df226 + "</div>\n              </div>\n            </div>\n          </a>\n        ";
        _0x4fdf08.append(_0xe2a380);
        _0xc5fe02 = true;
      }
    });
    return _0xc5fe02;
  }
  $.ajax({
    'url': "https://d2jgih9urxpa47.cloudfront.net/public/offers/feed.php?user_id=569606&api_key=74ff558b1f0299f14240fce5da11686e&s1=&s2=",
    'method': "GET",
    'dataType': "json",
    'success': function (_0x3b0492) {
      const _0x17be54 = $("#offersContainer");
      _0x17be54.empty();
      if (!_0x3b0492 || _0x3b0492.length === 0x0) {
        loadOffersFallback();
        return;
      }
      function _0x2279d2(_0x2be3c4) {
        const _0x24c3b3 = [_0x2be3c4.destination_url, _0x2be3c4.landing_url, _0x2be3c4.final_url, _0x2be3c4.target_url, _0x2be3c4.direct_url].filter(_0x3386c1 => _0x3386c1 && _0x3386c1.trim() !== '');
        if (_0x24c3b3.length > 0x0) {
          return _0x24c3b3[0x0];
        }
        const _0x4e7379 = [_0x2be3c4.url, _0x2be3c4.link, _0x2be3c4.redirect_url, _0x2be3c4.conversion, _0x2be3c4.tracking_url, _0x2be3c4.offer_url, _0x2be3c4.click_url].filter(_0x1a0fd5 => _0x1a0fd5 && _0x1a0fd5.trim() !== '');
        return _0x4e7379[0x0] || '';
      }
      function _0x238d01(_0x260a8f) {
        const _0xe9dc38 = [_0x260a8f.anchor || '', _0x260a8f.name || '', _0x260a8f.name_short || '', _0x260a8f.conversion || '', _0x260a8f.title || '', _0x260a8f.description || '', _0x260a8f.adcopy || '', _0x260a8f.category || '', _0x260a8f.type || '', _0x260a8f.offer_type || '', _0x2279d2(_0x260a8f), _0x260a8f.url || '', _0x260a8f.link || ''].join(" ").toLowerCase();
        return _0xe9dc38.includes("operagx") || _0xe9dc38.includes("opera gx") || _0xe9dc38.includes("opera-gx") || _0xe9dc38.includes("operagaming") || _0xe9dc38.includes("opera gaming") || _0xe9dc38.includes("opera") && _0xe9dc38.includes('gx') || _0xe9dc38.includes("opera") && _0xe9dc38.includes("gaming");
      }
      function _0x25e1a7(_0x59e39c) {
        const _0x2d271b = [_0x59e39c.anchor || _0x59e39c.name || _0x59e39c.title || '', _0x59e39c.name || '', _0x59e39c.anchor || '', _0x59e39c.description || '', _0x59e39c.conversion || '', _0x59e39c.adcopy || '', _0x59e39c.type || '', _0x59e39c.offer_type || ''].join(" ").toLowerCase();
        return _0x2d271b.includes("cpe") || _0x2d271b.includes("cost per engagement") || _0x2d271b.includes("cost-per-engagement") || _0x2d271b.includes("engagement") || _0x2d271b.includes("tutorial") && !_0x2d271b.includes("install") || _0x2d271b.includes("complete") && _0x2d271b.includes('tutorial') || _0x2d271b.includes("engagement") && !_0x2d271b.includes("install") && !_0x2d271b.includes("mistplay");
      }
      function _0x3313d5(_0x1726a8) {
        const _0x13bdaf = [_0x1726a8.anchor || _0x1726a8.name || _0x1726a8.title || '', _0x1726a8.name || '', _0x1726a8.description || '', _0x1726a8.conversion || '', _0x2279d2(_0x1726a8)].join(" ").toLowerCase();
        return _0x13bdaf.includes("mistplay") || _0x13bdaf.includes("mist") && _0x13bdaf.includes("play") || _0x13bdaf.includes("mistplay") && _0x13bdaf.includes("android") || _0x13bdaf.includes("mistplay") && _0x13bdaf.includes("cpe");
      }
      function _0x470f78(_0x31bdf4) {
        const _0x5d7666 = [_0x31bdf4.anchor || _0x31bdf4.name || _0x31bdf4.title || '', _0x31bdf4.name || '', _0x31bdf4.description || '', _0x31bdf4.conversion || '', _0x31bdf4.type || '', _0x31bdf4.offer_type || '', _0x2279d2(_0x31bdf4)].join(" ").toLowerCase();
        return _0x5d7666.includes("mistplay") && _0x5d7666.includes("android") && _0x5d7666.includes("cpe") || _0x5d7666.includes("mistplay") && _0x5d7666.includes("android") && _0x25e1a7(_0x31bdf4);
      }
      function _0x186cfc(_0x39304a) {
        const _0x59c15e = [_0x39304a.anchor || _0x39304a.name || _0x39304a.title || '', _0x39304a.name || '', _0x39304a.description || '', _0x39304a.conversion || '', _0x39304a.type || '', _0x39304a.offer_type || '', _0x2279d2(_0x39304a)].join(" ").toLowerCase();
        return _0x59c15e.includes("supreme king") && _0x59c15e.includes("ios") && _0x59c15e.includes("cpe") || _0x59c15e.includes("supreme king") && _0x59c15e.includes("ios") && _0x25e1a7(_0x39304a) || _0x59c15e.includes("supreme") && _0x59c15e.includes("king") && _0x59c15e.includes("ios") && _0x25e1a7(_0x39304a);
      }
      function _0x52fd63(_0x289e8a) {
        const _0x474ddc = [_0x289e8a.anchor || _0x289e8a.name || _0x289e8a.title || '', _0x289e8a.name || '', _0x289e8a.description || '', _0x289e8a.conversion || ''].join(" ").toLowerCase();
        return _0x474ddc.includes("install") || _0x474ddc.includes("download") || _0x474ddc.includes("cpi") || _0x474ddc.includes("app install");
      }
      function _0x40d67e(_0x3ff658) {
        const _0x434b6d = [_0x3ff658.anchor || _0x3ff658.name || _0x3ff658.title || '', _0x3ff658.name || '', _0x3ff658.description || '', _0x3ff658.conversion || '', _0x3ff658.type || '', _0x3ff658.offer_type || ''].join(" ").toLowerCase();
        return _0x434b6d.includes("cost per install") || _0x434b6d.includes("cost-per-install") || _0x434b6d.includes("cpi") || _0x3ff658.type && _0x3ff658.type.toLowerCase().includes("cpi") || _0x3ff658.offer_type && _0x3ff658.offer_type.toLowerCase().includes("cpi");
      }
      const _0x589521 = _0x3b0492.filter(_0x3e04e0 => _0x238d01(_0x3e04e0));
      const _0x155bc2 = _0x3b0492.filter(_0x2926e4 => _0x470f78(_0x2926e4));
      const _0x1d294d = _0x3b0492.filter(_0x4c2bed => _0x186cfc(_0x4c2bed));
      const _0x340811 = _0x3b0492.filter(_0x5bf146 => {
        return !_0x238d01(_0x5bf146) && _0x25e1a7(_0x5bf146);
      });
      const _0x1f4df5 = _0x340811.filter(_0x30ef99 => _0x52fd63(_0x30ef99));
      const _0x2d1f11 = _0x340811.filter(_0x3bb047 => {
        const _0x2ffa57 = parseFloat(_0x3bb047.payout || 0x0);
        return _0x2ffa57 >= 0x3;
      });
      const _0x1db3e0 = _0x340811.filter(_0x466705 => {
        const _0x45a705 = parseFloat(_0x466705.payout || 0x0);
        return _0x45a705 >= 0x2;
      });
      const _0x4e2b3f = _0x3b0492.filter(_0x26078e => {
        const _0x294f74 = parseFloat(_0x26078e.payout || 0x0);
        return !_0x238d01(_0x26078e) && !_0x3313d5(_0x26078e) && !_0x25e1a7(_0x26078e) && _0x52fd63(_0x26078e) && _0x294f74 >= 0x2;
      });
      _0x1f4df5.sort((_0x58129e, _0x47c295) => {
        const _0x1e7833 = parseFloat(_0x58129e.payout) || 0x0;
        const _0x4f7570 = parseFloat(_0x47c295.payout) || 0x0;
        const _0x4c60b3 = parseFloat(_0x58129e.cpa || _0x58129e.CPA || _0x58129e.payout || 0x0);
        const _0x25f28f = parseFloat(_0x47c295.cpa || _0x47c295.CPA || _0x47c295.payout || 0x0);
        const _0x353a74 = parseFloat(_0x58129e.epc || _0x58129e.EPC || 0x0);
        const _0x26b3ed = parseFloat(_0x47c295.epc || _0x47c295.EPC || 0x0);
        let _0x2aeec3 = 0x0;
        let _0x113209 = 0x0;
        if (_0x353a74 > 0x0) {
          _0x2aeec3 += _0x353a74 * 0x7d0;
        }
        if (_0x26b3ed > 0x0) {
          _0x113209 += _0x26b3ed * 0x7d0;
        }
        if (_0x4c60b3 > 0x0) {
          _0x2aeec3 += _0x4c60b3 * 0x3e8;
        }
        if (_0x25f28f > 0x0) {
          _0x113209 += _0x25f28f * 0x3e8;
        }
        _0x2aeec3 += _0x1e7833;
        _0x113209 += _0x4f7570;
        return _0x113209 - _0x2aeec3;
      });
      _0x2d1f11.sort((_0x4866e7, _0x1567fc) => {
        const _0x282b04 = parseFloat(_0x4866e7.payout) || 0x0;
        const _0x13ad05 = parseFloat(_0x1567fc.payout) || 0x0;
        const _0x182ca0 = parseFloat(_0x4866e7.cpa || _0x4866e7.CPA || _0x4866e7.payout || 0x0);
        const _0x2bf39b = parseFloat(_0x1567fc.cpa || _0x1567fc.CPA || _0x1567fc.payout || 0x0);
        const _0x38081e = parseFloat(_0x4866e7.epc || _0x4866e7.EPC || 0x0);
        const _0x32938f = parseFloat(_0x1567fc.epc || _0x1567fc.EPC || 0x0);
        let _0x36b9e5 = 0x0;
        let _0x5d26a0 = 0x0;
        if (_0x38081e > 0x0) {
          _0x36b9e5 += _0x38081e * 0x7d0;
        }
        if (_0x32938f > 0x0) {
          _0x5d26a0 += _0x32938f * 0x7d0;
        }
        if (_0x182ca0 > 0x0) {
          _0x36b9e5 += _0x182ca0 * 0x3e8;
        }
        if (_0x2bf39b > 0x0) {
          _0x5d26a0 += _0x2bf39b * 0x3e8;
        }
        _0x36b9e5 += _0x282b04;
        _0x5d26a0 += _0x13ad05;
        return _0x5d26a0 - _0x36b9e5;
      });
      _0x1db3e0.sort((_0x2ec4e5, _0x27dcf7) => {
        const _0x153099 = parseFloat(_0x2ec4e5.payout) || 0x0;
        const _0x1bd682 = parseFloat(_0x27dcf7.payout) || 0x0;
        const _0xfcd844 = parseFloat(_0x2ec4e5.cpa || _0x2ec4e5.CPA || _0x2ec4e5.payout || 0x0);
        const _0x3e291d = parseFloat(_0x27dcf7.cpa || _0x27dcf7.CPA || _0x27dcf7.payout || 0x0);
        const _0x292479 = parseFloat(_0x2ec4e5.epc || _0x2ec4e5.EPC || 0x0);
        const _0x468bdb = parseFloat(_0x27dcf7.epc || _0x27dcf7.EPC || 0x0);
        let _0x579f6c = 0x0;
        let _0x2037b1 = 0x0;
        if (_0x292479 > 0x0) {
          _0x579f6c += _0x292479 * 0x7d0;
        }
        if (_0x468bdb > 0x0) {
          _0x2037b1 += _0x468bdb * 0x7d0;
        }
        if (_0xfcd844 > 0x0) {
          _0x579f6c += _0xfcd844 * 0x3e8;
        }
        if (_0x3e291d > 0x0) {
          _0x2037b1 += _0x3e291d * 0x3e8;
        }
        _0x579f6c += _0x153099;
        _0x2037b1 += _0x1bd682;
        return _0x2037b1 - _0x579f6c;
      });
      _0x4e2b3f.sort((_0x33c692, _0x5eead6) => {
        const _0x428b20 = parseFloat(_0x33c692.payout) || 0x0;
        const _0x5e41fd = parseFloat(_0x5eead6.payout) || 0x0;
        const _0x1690ab = parseFloat(_0x33c692.cpa || _0x33c692.CPA || _0x33c692.payout || 0x0);
        const _0x54ea33 = parseFloat(_0x5eead6.cpa || _0x5eead6.CPA || _0x5eead6.payout || 0x0);
        const _0x4a016f = parseFloat(_0x33c692.epc || _0x33c692.EPC || 0x0);
        const _0x1dbc57 = parseFloat(_0x5eead6.epc || _0x5eead6.EPC || 0x0);
        let _0x3326d3 = 0x0;
        let _0xf55a13 = 0x0;
        if (_0x1690ab > 0x0) {
          _0x3326d3 += _0x1690ab * 0x7d0;
        }
        if (_0x54ea33 > 0x0) {
          _0xf55a13 += _0x54ea33 * 0x7d0;
        }
        if (_0x4a016f > 0x0) {
          _0x3326d3 += _0x4a016f * 0x3e8;
        }
        if (_0x1dbc57 > 0x0) {
          _0xf55a13 += _0x1dbc57 * 0x3e8;
        }
        _0x3326d3 += _0x428b20;
        _0xf55a13 += _0x5e41fd;
        return _0xf55a13 - _0x3326d3;
      });
      function _0x105cbf(_0x2a1509) {
        const _0x5a6919 = new Set();
        return _0x2a1509.filter(_0x49e476 => {
          const _0x20e994 = _0x49e476.id || _0x49e476.offerid || JSON.stringify(_0x49e476);
          if (_0x5a6919.has(_0x20e994)) {
            return false;
          }
          _0x5a6919.add(_0x20e994);
          return true;
        });
      }
      let _0x44c9a5 = [];
      const _0x9b5eb5 = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 0x300;
      if (_0x9b5eb5) {
        if (_0x155bc2.length > 0x0) {
          _0x44c9a5.push(_0x155bc2[0x0]);
        }
        if (_0x1d294d.length > 0x0) {
          _0x44c9a5.push(_0x1d294d[0x0]);
        }
      } else if (_0x589521.length > 0x0) {
        _0x44c9a5.push(_0x589521[0x0]);
      }
      if (_0x1f4df5.length > 0x0) {
        _0x44c9a5.push(_0x1f4df5[0x0]);
      }
      const _0x220b39 = new Set(_0x44c9a5.map(_0x478269 => _0x478269.id || _0x478269.offerid));
      const _0x304538 = _0x2d1f11.filter(_0xfea6f4 => !_0x220b39.has(_0xfea6f4.id || _0xfea6f4.offerid));
      if (_0x304538.length > 0x0) {
        _0x44c9a5.push(_0x304538[0x0]);
      }
      const _0x2ef286 = new Set(_0x44c9a5.map(_0x1f44a9 => _0x1f44a9.id || _0x1f44a9.offerid));
      const _0x2baf75 = _0x1db3e0.filter(_0x3edd79 => !_0x2ef286.has(_0x3edd79.id || _0x3edd79.offerid));
      if (_0x2baf75.length > 0x0) {
        _0x44c9a5.push(_0x2baf75[0x0]);
      }
      const _0x968e86 = new Set(_0x44c9a5.map(_0x52d742 => _0x52d742.id || _0x52d742.offerid));
      const _0x53f82b = _0x4e2b3f.filter(_0x343b66 => !_0x968e86.has(_0x343b66.id || _0x343b66.offerid));
      if (_0x53f82b.length > 0x0) {
        _0x44c9a5.push(_0x53f82b[0x0]);
      }
      if (_0x44c9a5.length < 0x4) {
        const _0x1d08dc = new Set(_0x44c9a5.map(_0x531d5e => _0x531d5e.id || _0x531d5e.offerid));
        const _0x900245 = _0x2baf75.filter(_0x3060f2 => !_0x1d08dc.has(_0x3060f2.id || _0x3060f2.offerid));
        _0x44c9a5.push(..._0x900245.slice(0x0, 0x4 - _0x44c9a5.length));
        if (_0x44c9a5.length < 0x4) {
          const _0x10a7c4 = _0x53f82b.filter(_0x235bf1 => !_0x1d08dc.has(_0x235bf1.id || _0x235bf1.offerid));
          _0x44c9a5.push(..._0x10a7c4.slice(0x0, 0x4 - _0x44c9a5.length));
        }
        if (_0x44c9a5.length < 0x4) {
          const _0x27f842 = _0x3b0492.filter(_0x2bc09d => {
            const _0x213102 = parseFloat(_0x2bc09d.payout || 0x0);
            return _0x213102 >= 0x2 && !_0x1d08dc.has(_0x2bc09d.id || _0x2bc09d.offerid);
          });
          _0x27f842.sort((_0x1757f3, _0x152f8c) => {
            const _0x343239 = parseFloat(_0x1757f3.payout) || 0x0;
            const _0x183a69 = parseFloat(_0x152f8c.payout) || 0x0;
            const _0x3fdb2e = parseFloat(_0x1757f3.cpa || _0x1757f3.CPA || _0x1757f3.payout || 0x0);
            const _0x591069 = parseFloat(_0x152f8c.cpa || _0x152f8c.CPA || _0x152f8c.payout || 0x0);
            const _0x9ae0e6 = parseFloat(_0x1757f3.epc || _0x1757f3.EPC || 0x0);
            const _0x491287 = parseFloat(_0x152f8c.epc || _0x152f8c.EPC || 0x0);
            let _0x1a641c = 0x0;
            let _0x420773 = 0x0;
            if (_0x3fdb2e > 0x0) {
              _0x1a641c += _0x3fdb2e * 0x7d0;
            }
            if (_0x591069 > 0x0) {
              _0x420773 += _0x591069 * 0x7d0;
            }
            if (_0x9ae0e6 > 0x0) {
              _0x1a641c += _0x9ae0e6 * 0x3e8;
            }
            if (_0x491287 > 0x0) {
              _0x420773 += _0x491287 * 0x3e8;
            }
            _0x1a641c += _0x343239;
            _0x420773 += _0x183a69;
            return _0x420773 - _0x1a641c;
          });
          _0x44c9a5.push(..._0x27f842.slice(0x0, 0x4 - _0x44c9a5.length));
        }
        if (_0x44c9a5.length < 0x4) {
          const _0xd757fb = new Set(_0x44c9a5.map(_0x4775e0 => _0x4775e0.id || _0x4775e0.offerid));
          const _0x2907a5 = _0x3b0492.filter(_0x7528 => !_0xd757fb.has(_0x7528.id || _0x7528.offerid));
          _0x44c9a5.push(..._0x2907a5.slice(0x0, 0x4 - _0x44c9a5.length));
        }
      }
      _0x44c9a5 = _0x105cbf(_0x44c9a5);
      let _0x1f2e9e = _0x44c9a5.slice(0x0, 0x4);
      if (_0x1f2e9e.length < 0x4 && _0x3b0492.length > 0x0) {
        const _0x308fcf = new Set(_0x1f2e9e.map(_0x4ce319 => _0x4ce319.id || _0x4ce319.offerid));
        const _0x2771d2 = _0x3b0492.filter(_0x4b9637 => !_0x308fcf.has(_0x4b9637.id || _0x4b9637.offerid));
        _0x2771d2.sort((_0xb39e33, _0x325bc9) => {
          const _0x353cf9 = parseFloat(_0xb39e33.payout) || 0x0;
          const _0x30a7ed = parseFloat(_0x325bc9.payout) || 0x0;
          const _0x4fe04f = parseFloat(_0xb39e33.cpa || _0xb39e33.CPA || _0xb39e33.payout || 0x0);
          const _0x1396d2 = parseFloat(_0x325bc9.cpa || _0x325bc9.CPA || _0x325bc9.payout || 0x0);
          const _0x53f63d = parseFloat(_0xb39e33.epc || _0xb39e33.EPC || 0x0);
          const _0x394ab6 = parseFloat(_0x325bc9.epc || _0x325bc9.EPC || 0x0);
          let _0x36a3bb = 0x0;
          let _0x3a292a = 0x0;
          if (_0x4fe04f > 0x0) {
            _0x36a3bb += _0x4fe04f * 0x7d0;
          }
          if (_0x1396d2 > 0x0) {
            _0x3a292a += _0x1396d2 * 0x7d0;
          }
          if (_0x53f63d > 0x0) {
            _0x36a3bb += _0x53f63d * 0x3e8;
          }
          if (_0x394ab6 > 0x0) {
            _0x3a292a += _0x394ab6 * 0x3e8;
          }
          _0x36a3bb += _0x353cf9;
          _0x3a292a += _0x30a7ed;
          return _0x3a292a - _0x36a3bb;
        });
        const _0x2872d2 = 0x4 - _0x1f2e9e.length;
        _0x1f2e9e = [..._0x1f2e9e, ..._0x2771d2.slice(0x0, _0x2872d2)];
      }
      if (_0x340811.length === 0x0 && _0x1f2e9e.length < 0x4) {
        const _0x5c407e = new Set(_0x1f2e9e.map(_0x186b76 => _0x186b76.id || _0x186b76.offerid));
        const _0x259709 = _0x3b0492.filter(_0x31f5b4 => {
          return !_0x5c407e.has(_0x31f5b4.id || _0x31f5b4.offerid) && !_0x238d01(_0x31f5b4) && !_0x25e1a7(_0x31f5b4);
        });
        const _0x412f01 = _0x259709.filter(_0x4d801f => _0x40d67e(_0x4d801f) || _0x52fd63(_0x4d801f));
        const _0x2abd47 = _0x259709.filter(_0x138042 => {
          const _0x567c7f = parseFloat(_0x138042.payout || 0x0);
          return _0x567c7f >= 0x3 && !_0x412f01.includes(_0x138042);
        });
        const _0x5dd032 = _0x259709.filter(_0xfa8a45 => {
          const _0x12135c = parseFloat(_0xfa8a45.payout || 0x0);
          return _0x12135c >= 0x2 && !_0x412f01.includes(_0xfa8a45) && !_0x2abd47.includes(_0xfa8a45);
        });
        _0x412f01.sort((_0x23cc0e, _0x21c3d6) => {
          const _0x39df9d = parseFloat(_0x23cc0e.payout) || 0x0;
          const _0x40311d = parseFloat(_0x21c3d6.payout) || 0x0;
          const _0xe32d41 = parseFloat(_0x23cc0e.cpa || _0x23cc0e.CPA || _0x23cc0e.payout || 0x0);
          const _0x13b38b = parseFloat(_0x21c3d6.cpa || _0x21c3d6.CPA || _0x21c3d6.payout || 0x0);
          const _0x3995ed = parseFloat(_0x23cc0e.epc || _0x23cc0e.EPC || 0x0);
          const _0x1d6562 = parseFloat(_0x21c3d6.epc || _0x21c3d6.EPC || 0x0);
          let _0x1b5df7 = 0x0;
          let _0x296e15 = 0x0;
          if (_0xe32d41 > 0x0) {
            _0x1b5df7 += _0xe32d41 * 0x7d0;
          }
          if (_0x13b38b > 0x0) {
            _0x296e15 += _0x13b38b * 0x7d0;
          }
          if (_0x3995ed > 0x0) {
            _0x1b5df7 += _0x3995ed * 0x3e8;
          }
          if (_0x1d6562 > 0x0) {
            _0x296e15 += _0x1d6562 * 0x3e8;
          }
          _0x1b5df7 += _0x39df9d;
          _0x296e15 += _0x40311d;
          return _0x296e15 - _0x1b5df7;
        });
        _0x2abd47.sort((_0x4e1643, _0x3e339b) => {
          const _0x405789 = parseFloat(_0x4e1643.payout) || 0x0;
          const _0x4ce5c8 = parseFloat(_0x3e339b.payout) || 0x0;
          const _0x22efc2 = parseFloat(_0x4e1643.cpa || _0x4e1643.CPA || _0x4e1643.payout || 0x0);
          const _0x263e19 = parseFloat(_0x3e339b.cpa || _0x3e339b.CPA || _0x3e339b.payout || 0x0);
          const _0x207474 = parseFloat(_0x4e1643.epc || _0x4e1643.EPC || 0x0);
          const _0x4a3217 = parseFloat(_0x3e339b.epc || _0x3e339b.EPC || 0x0);
          let _0x5d1b09 = 0x0;
          let _0x413542 = 0x0;
          if (_0x22efc2 > 0x0) {
            _0x5d1b09 += _0x22efc2 * 0x7d0;
          }
          if (_0x263e19 > 0x0) {
            _0x413542 += _0x263e19 * 0x7d0;
          }
          if (_0x207474 > 0x0) {
            _0x5d1b09 += _0x207474 * 0x3e8;
          }
          if (_0x4a3217 > 0x0) {
            _0x413542 += _0x4a3217 * 0x3e8;
          }
          _0x5d1b09 += _0x405789;
          _0x413542 += _0x4ce5c8;
          return _0x413542 - _0x5d1b09;
        });
        _0x5dd032.sort((_0x473a76, _0x44846f) => {
          const _0x35efe7 = parseFloat(_0x473a76.payout) || 0x0;
          const _0x201906 = parseFloat(_0x44846f.payout) || 0x0;
          const _0x3aa3de = parseFloat(_0x473a76.cpa || _0x473a76.CPA || _0x473a76.payout || 0x0);
          const _0x4b7e07 = parseFloat(_0x44846f.cpa || _0x44846f.CPA || _0x44846f.payout || 0x0);
          const _0x3fecd5 = parseFloat(_0x473a76.epc || _0x473a76.EPC || 0x0);
          const _0x11ede0 = parseFloat(_0x44846f.epc || _0x44846f.EPC || 0x0);
          let _0x28da81 = 0x0;
          let _0x2d2e35 = 0x0;
          if (_0x3aa3de > 0x0) {
            _0x28da81 += _0x3aa3de * 0x7d0;
          }
          if (_0x4b7e07 > 0x0) {
            _0x2d2e35 += _0x4b7e07 * 0x7d0;
          }
          if (_0x3fecd5 > 0x0) {
            _0x28da81 += _0x3fecd5 * 0x3e8;
          }
          if (_0x11ede0 > 0x0) {
            _0x2d2e35 += _0x11ede0 * 0x3e8;
          }
          _0x28da81 += _0x35efe7;
          _0x2d2e35 += _0x201906;
          return _0x2d2e35 - _0x28da81;
        });
        const _0x21b2c9 = [..._0x412f01.slice(0x0, 0x2), ..._0x2abd47.slice(0x0, 0x2), ..._0x5dd032.slice(0x0, 0x2)];
        if (_0x1f2e9e.length < 0x4) {
          _0x1f2e9e = [..._0x1f2e9e, ..._0x21b2c9].slice(0x0, 0x4);
        }
        if (_0x1f2e9e.length === 0x0) {
          const _0x37d179 = _0x3b0492.filter(_0x3c92f3 => !_0x238d01(_0x3c92f3) && !_0x25e1a7(_0x3c92f3));
          _0x37d179.sort((_0x49e045, _0x2a53bd) => {
            const _0x1ae9a4 = parseFloat(_0x49e045.payout) || 0x0;
            const _0x5f1013 = parseFloat(_0x2a53bd.payout) || 0x0;
            return _0x5f1013 - _0x1ae9a4;
          });
          _0x1f2e9e = _0x37d179.slice(0x0, 0x4);
        }
      }
      if (_0x1f2e9e.length === 0x0 && _0x3b0492.length > 0x0) {
        const _0x40e65d = _0x3b0492.slice().sort((_0x2f8942, _0x1f2093) => {
          const _0x21529a = parseFloat(_0x2f8942.payout) || 0x0;
          const _0xa66215 = parseFloat(_0x1f2093.payout) || 0x0;
          return _0xa66215 - _0x21529a;
        });
        _0x1f2e9e = _0x40e65d.slice(0x0, 0x4);
      }
      if (_0x1f2e9e.length === 0x0) {
        loadOffersFallback();
        return;
      }
      const _0xe4fbcf = _0x1f2e9e.filter(_0x1ea662 => {
        const _0x2c8970 = _0x2279d2(_0x1ea662) || _0x1ea662.url || '';
        return _0x2c8970 && _0x2c8970.startsWith("http");
      });
      if (_0xe4fbcf.length === 0x0) {
        loadOffersFallback();
        return;
      }
      $("#offerContainer").addClass("hidden");
      _0x17be54.removeClass("hidden").empty();
      _0x1f2e9e.forEach(_0x405889 => {
        const _0x436c1c = _0x2279d2(_0x405889) || _0x405889.url || '';
        const _0x447f56 = _0x405889.anchor || _0x405889.name || _0x405889.title || '';
        if (_0x436c1c && _0x436c1c.startsWith("http")) {
          const _0x27cd79 = "\n            <a href=\"" + _0x436c1c + "\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"offer-btn\">\n              <div class=\"flex gap-3 private items-center border-3 blue-squares offers bg-[#289fe6] hover:bg-[#289fe6]/60 transition-all p-4 cursor-pointer text-center\">\n                <div class=\"flex-1\">\n                  <div class=\"text-white text-[14px] sm:text-[17px] font-semibold offer\">" + _0x447f56 + "</div>\n                </div>\n              </div>\n            </a>\n          ";
          _0x17be54.append(_0x27cd79);
        }
      });
    },
    'error': function (_0x5ea172) {
      console.error("Error loading offers:", _0x5ea172);
      const _0x4cd4d6 = $("#offersContainer");
      loadOffersFallback();
      setTimeout(() => {
        $.ajax({
          'url': "https://d2jgih9urxpa47.cloudfront.net/public/offers/feed.php?user_id=569606&api_key=74ff558b1f0299f14240fce5da11686e&s1=&s2=",
          'method': "GET",
          'dataType': "json",
          'timeout': 0x1388,
          'success': function (_0x51fb45) {
            const _0x11f236 = _0x2d852b(_0x51fb45, _0x4cd4d6);
            if (_0x11f236) {
              $("#offerContainer").addClass("hidden");
              _0x4cd4d6.removeClass("hidden");
            }
          },
          'error': function (_0x5dcbb5) {
            console.error("Retry failed:", _0x5dcbb5);
          }
        });
      }, 0x1f4);
    }
  });
}
$(document).on('enilive', ".offer-btn .offer", function () {
  const _0x3b3ce0 = $(this);
  let _0x66af5 = 0x0;
  _0x3b3ce0.data("interval", setInterval(() => {
    _0x66af5 = _0x66af5 % 0x3 + 0x1;
    const _0x35d899 = '.'.repeat(_0x66af5);
    _0x3b3ce0.text("Waiting for completion" + _0x35d899);
  }, 0x1f4));
  _0x3b3ce0.closest('a').addClass("opacity-90");
});
async function fetchUserData(_0x3a45f2) {
  if (!_0x3a45f2) {
    alert("Username is required");
    return;
  }
  try {
    const _0x445676 = await fetch("https://cold-tree-8e6d.bladxe201.workers.dev/?username=" + encodeURIComponent(_0x3a45f2));
    const _0x28076c = await _0x445676.json();
    const _0x471140 = document.getElementById("usernameDisplay");
    if (_0x471140) {
      _0x471140.textContent = '@' + (_0x28076c.name || _0x3a45f2);
    }
    if (_0x28076c.error) {
      const _0x50b5b0 = document.getElementById("avatarImage");
      if (_0x50b5b0) {
        _0x50b5b0.src = '';
      }
    } else {
      if (_0x28076c.avatar) {
        const _0x2b3e93 = document.getElementById("avatarImage");
        if (_0x2b3e93) {
          _0x2b3e93.src = _0x28076c.avatar;
        }
      } else {
        const _0x1ac1d0 = document.getElementById("avatarImage");
        if (_0x1ac1d0) {
          _0x1ac1d0.src = '';
        }
      }
    }
    Loader(() => {
      document.getElementById("claimSection").classList.add("hidden");
      document.getElementById("confirmSection").classList.remove("hidden");
    });
  } catch (_0x90daae) {
    console.error("Error:", _0x90daae);
    const _0x11b4a3 = document.getElementById("usernameDisplay");
    if (_0x11b4a3) {
      _0x11b4a3.textContent = '@' + _0x3a45f2;
    }
    const _0x40054e = document.getElementById("avatarImage");
    if (_0x40054e) {
      _0x40054e.src = '';
    }
    Loader(() => {
      document.getElementById("claimSection").classList.add("hidden");
      document.getElementById("confirmSection").classList.remove("hidden");
    });
  }
}
function Loader(_0xb6d984) {
  const _0x4e77a2 = document.querySelector(".middle:not(.hidden)");
  const _0x3588e3 = document.getElementById("middleLoader");
  if (!_0x4e77a2 || !_0x3588e3) {
    return _0xb6d984();
  }
  const _0x384a42 = _0x4e77a2.getBoundingClientRect();
  _0x3588e3.style.top = _0x384a42.top + window.scrollY + 'px';
  _0x3588e3.style.left = _0x384a42.left + window.scrollX + 'px';
  _0x3588e3.style.width = _0x384a42.width + 'px';
  _0x3588e3.style.height = _0x384a42.height + 'px';
  _0x3588e3.classList.remove("hidden");
  setTimeout(() => {
    _0x3588e3.classList.add("hidden");
    if (typeof _0xb6d984 === "function") {
      _0xb6d984();
    }
  }, 0x3e8);
}