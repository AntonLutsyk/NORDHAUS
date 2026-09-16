/* @ds-bundle: {"format":4,"namespace":"NORDHAUSDesignSystem_74af41","components":[{"name":"Accordion","sourcePath":"components/content/Accordion.jsx"},{"name":"ContactCTA","sourcePath":"components/content/ContactCTA.jsx"},{"name":"FeatureList","sourcePath":"components/content/FeatureList.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"ArrowLink","sourcePath":"components/core/ArrowLink.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"Figure","sourcePath":"components/core/Figure.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"Wordmark","sourcePath":"components/core/Wordmark.jsx"},{"name":"ImageTextModule","sourcePath":"components/editorial/ImageTextModule.jsx"},{"name":"SectionIntro","sourcePath":"components/editorial/SectionIntro.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"ProjectCard","sourcePath":"components/projects/ProjectCard.jsx"},{"name":"ProjectMeta","sourcePath":"components/projects/ProjectMeta.jsx"},{"name":"SpecTable","sourcePath":"components/projects/SpecTable.jsx"}],"sourceHashes":{"components/content/Accordion.jsx":"d62c2bc9c6c1","components/content/ContactCTA.jsx":"77bf95038e0e","components/content/FeatureList.jsx":"bc64ba066877","components/content/Testimonial.jsx":"e769f03bc162","components/core/ArrowLink.jsx":"7723a792974d","components/core/Button.jsx":"ab8c01d97f8f","components/core/Eyebrow.jsx":"f03c32f58e73","components/core/Figure.jsx":"d64870dfabdd","components/core/Icon.jsx":"ad305148dcd0","components/core/Wordmark.jsx":"febd364331b4","components/editorial/ImageTextModule.jsx":"b572040fb50b","components/editorial/SectionIntro.jsx":"0225eeb70d5d","components/navigation/SiteFooter.jsx":"3844f05130ce","components/navigation/SiteHeader.jsx":"16e57f1da8d0","components/projects/ProjectCard.jsx":"dcd6a8d66e57","components/projects/ProjectMeta.jsx":"27394d31d144","components/projects/SpecTable.jsx":"b82efa1bc06b","ui_kits/website/HomeScreen.jsx":"88b1bafa76b9","ui_kits/website/ProjectScreen.jsx":"5595b5ba9672","ui_kits/website/ProjectsScreen.jsx":"9a6bccd75c6a","ui_kits/website/StudioScreen.jsx":"6da19688a5d4","ui_kits/website/data.js":"53f8297198bb"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NORDHAUSDesignSystem_74af41 = window.NORDHAUSDesignSystem_74af41 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small mono label with an optional index (1.1, 02, …). Opens sections, captions and spec groups. */
function Eyebrow({
  children,
  index,
  tone = "secondary",
  rule = false,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "10px",
      font: "var(--text-meta-font)",
      letterSpacing: "var(--tracking-meta-wide)",
      textTransform: "uppercase",
      color: tone === "primary" ? "var(--text-primary)" : tone === "accent" ? "var(--text-accent)" : "var(--text-secondary)",
      ...style
    }
  }, rest), index != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)"
    }
  }, index) : null, /*#__PURE__*/React.createElement("span", null, children), rule ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: 1,
      height: "1px",
      background: "var(--border-hairline)"
    }
  }) : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/Figure.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const RATIOS = {
  hero: "16 / 9",
  landscape: "4 / 3",
  editorial: "3 / 2",
  square: "1 / 1",
  portrait: "4 / 5",
  tall: "3 / 4",
  panorama: "21 / 9"
};

/** The system's media frame: fixed ratio, hairline, slow scale on hover, optional caption or overlay.
    With no `src` it renders the NORDHAUS photography placeholder — honest, labelled, never a fake render. */
function Figure({
  src,
  alt = "",
  ratio = "editorial",
  radius = "md",
  caption,
  meta,
  overlay,
  scrim = false,
  hoverZoom = true,
  placeholderLabel = "Architectural photography",
  className = "",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const r = RATIOS[ratio] || ratio;
  const radiusValue = radius === "none" ? "0" : `var(--radius-${radius})`;
  return /*#__PURE__*/React.createElement("figure", _extends({
    className: className,
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: "relative",
      aspectRatio: r,
      width: "100%",
      overflow: "hidden",
      borderRadius: radiusValue,
      background: "var(--surface-media)",
      boxShadow: src ? "none" : "inset 0 0 0 1px var(--border-hairline)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: hover && hoverZoom ? "scale(var(--hover-image-scale))" : "scale(1)",
      transition: "var(--transition-image)"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "flex-end",
      padding: "14px",
      font: "var(--text-meta-font)",
      letterSpacing: "var(--tracking-meta-wide)",
      textTransform: "uppercase",
      color: "var(--text-tertiary)"
    }
  }, placeholderLabel), scrim ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--scrim-gradient)",
      pointerEvents: "none"
    }
  }) : null, overlay ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      pointerEvents: "none"
    }
  }, overlay) : null), caption || meta ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, caption ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) var(--size-body-sm)/1.4 var(--font-core)`,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)"
    }
  }, caption) : null, meta ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "0.04em",
      color: "var(--text-secondary)"
    }
  }, meta) : null) : null);
}
Object.assign(__ds_scope, { Figure });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Figure.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide (ISC) path data, inlined so components carry no CDN dependency.
   Stroke weight is set to 1.5 by default — the refined NORDHAUS weight. */
const PATHS = {
  "arrow-up-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  })),
  "arrow-right": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  "arrow-left": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  })),
  "arrow-down": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19 12-7 7-7-7"
  })),
  "chevron-down": /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  "chevron-right": /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14"
  })),
  minus: /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }),
  x: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  menu: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 6h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 12h16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 18h16"
  })),
  mail: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
  })),
  phone: /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"
  }),
  "map-pin": /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  })),
  leaf: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
  })),
  ruler: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7.5 10.5 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m10.5 7.5 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13.5 4.5 2 2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.5 13.5 2 2"
  })),
  thermometer: /*#__PURE__*/React.createElement("path", {
    d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
  }),
  star: /*#__PURE__*/React.createElement("path", {
    d: "M11.5 2.9a.6.6 0 0 1 1 0l2.4 5a.6.6 0 0 0 .5.3l5.4.8c.5.1.7.7.3 1l-3.9 3.8a.6.6 0 0 0-.2.6l1 5.4a.6.6 0 0 1-.9.6l-4.8-2.5a.6.6 0 0 0-.6 0l-4.8 2.5a.6.6 0 0 1-.9-.6l1-5.4a.6.6 0 0 0-.2-.6L2.9 10c-.4-.3-.2-.9.3-1l5.4-.8a.6.6 0 0 0 .5-.3Z"
  })
};

/** Thin wrapper over the inlined Lucide glyph set used across NORDHAUS. */
function Icon({
  name,
  size = 16,
  strokeWidth = 1.5,
  className = "",
  style,
  ...rest
}) {
  const glyph = PATHS[name];
  if (!glyph) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: name === "star" ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    focusable: "false",
    className: className,
    style: {
      flex: "0 0 auto",
      display: "block",
      ...style
    }
  }, rest), glyph);
}
const ICON_NAMES = Object.keys(PATHS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** FAQ accordion — hairline rows, arrow that rotates to a down-right on open, height-animated answer. */
function Accordion({
  items = [],
  defaultOpen = 0,
  allowMultiple = false,
  className = "",
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(() => defaultOpen == null ? [] : [defaultOpen]);
  const toggle = i => setOpen(cur => cur.includes(i) ? cur.filter(x => x !== i) : allowMultiple ? [...cur, i] : [i]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      borderTop: "var(--border-hair)",
      ...style
    }
  }, rest), items.map((item, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: item.question,
      style: {
        borderBottom: "var(--border-hair)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-8)",
        padding: "var(--space-5) 0",
        background: "transparent",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        color: "var(--text-primary)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: `var(--weight-medium) var(--size-title-3)/1.4 var(--font-core)`,
        letterSpacing: "-0.02em"
      }
    }, item.question), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "arrow-up-right",
      size: 16,
      style: {
        color: isOpen ? "var(--text-primary)" : "var(--text-secondary)",
        transform: isOpen ? "rotate(90deg)" : "none",
        transition: "transform var(--transition-line),color var(--transition-ui)"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateRows: isOpen ? "1fr" : "0fr",
        transition: "grid-template-rows var(--dur-base) var(--ease-out-soft)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        color: "var(--text-secondary)",
        maxWidth: "var(--measure-long)",
        paddingBottom: "var(--space-6)",
        opacity: isOpen ? 1 : 0,
        transition: "opacity var(--dur-base) var(--ease-standard)"
      }
    }, item.answer))));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/content/FeatureList.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Numbered feature list — hairline rows with an index, a short title and one line of support. */
function FeatureList({
  items = [],
  columns = 1,
  numbered = true,
  icons = false,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
      columnGap: "var(--grid-gap-wide)",
      borderTop: "var(--border-hair)",
      ...style
    }
  }, rest), items.map((item, i) => /*#__PURE__*/React.createElement("div", {
    key: item.title,
    style: {
      display: "grid",
      gridTemplateColumns: "auto minmax(0,1fr)",
      gap: "var(--space-5)",
      padding: "var(--space-6) 0",
      borderBottom: "var(--border-hair)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "0.06em",
      color: "var(--text-tertiary)",
      paddingTop: "4px",
      minWidth: "22px"
    }
  }, icons && item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: item.icon,
    size: 18,
    style: {
      color: "var(--text-accent)"
    }
  }) : numbered ? String(i + 1).padStart(2, "0") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) var(--size-title-3)/1.3 var(--font-core)`,
      letterSpacing: "-0.02em"
    }
  }, item.title), item.body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-font)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure)"
    }
  }, item.body) : null))));
}
Object.assign(__ds_scope, { FeatureList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureList.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Owner testimonial — portrait beside a set quote, with an attribution line and optional rating. */
function Testimonial({
  quote,
  name,
  role,
  location,
  src,
  rating,
  layout = "beside",
  className = "",
  style,
  ...rest
}) {
  const attribution = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) var(--size-body-sm)/1.4 var(--font-core)`,
      letterSpacing: "-0.01em"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "0.05em",
      color: "var(--text-secondary)"
    }
  }, [role, location].filter(Boolean).join(" · ")), rating ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "4px",
      marginTop: "6px",
      color: "var(--text-accent)"
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 11,
    style: {
      opacity: i < Math.round(rating) ? 1 : 0.25
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      color: "var(--text-secondary)",
      marginLeft: "4px"
    }
  }, rating.toFixed(1))) : null);
  const body = /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      justifyContent: "space-between",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: `var(--weight-regular) var(--size-title-2)/1.42 var(--font-core)`,
      letterSpacing: "-0.018em",
      color: "var(--text-primary)",
      maxWidth: "34ch"
    }
  }, quote), attribution);
  if (layout === "stacked") {
    return /*#__PURE__*/React.createElement("div", _extends({
      className: className,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement(__ds_scope.Figure, {
      src: src,
      ratio: "portrait",
      placeholderLabel: name,
      hoverZoom: false,
      style: {
        maxWidth: "180px"
      }
    }), body);
  }
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.55fr) minmax(0,1fr)",
      gap: "var(--grid-gap-wide)",
      alignItems: "stretch",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Figure, {
    src: src,
    ratio: "portrait",
    placeholderLabel: name,
    hoverZoom: false
  }), body);
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/ArrowLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Inline text link with a travelling arrow and a rule that draws in on hover. The system's default "read more". */
function ArrowLink({
  children,
  href = "#",
  direction = "up-right",
  size = "md",
  tone = "primary",
  underline = true,
  onClick,
  className = "",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const font = size === "sm" ? "var(--size-body-sm)" : size === "lg" ? "var(--size-body-lg)" : "var(--size-body)";
  const glyph = direction === "right" ? "arrow-right" : direction === "down" ? "arrow-down" : "arrow-up-right";
  const shift = direction === "right" ? `translateX(var(--arrow-travel))` : direction === "down" ? `translateY(var(--arrow-travel))` : `translate(var(--arrow-travel),calc(-1 * var(--arrow-travel)))`;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      font: `var(--weight-medium) ${font}/1.3 var(--font-core)`,
      letterSpacing: "-0.01em",
      color: tone === "secondary" ? "var(--text-secondary)" : tone === "accent" ? "var(--text-accent)" : "var(--text-primary)",
      textDecoration: "none",
      paddingBottom: underline ? "4px" : 0,
      position: "relative",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: glyph,
    size: size === "sm" ? 13 : 15,
    style: {
      transform: hover ? shift : "none",
      transition: "transform var(--transition-line)"
    }
  }), underline ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: "1px",
      background: "currentColor",
      opacity: hover ? 1 : 0.28,
      transform: hover ? "scaleX(1)" : "scaleX(1)",
      transformOrigin: "left",
      transition: "opacity var(--transition-line)"
    }
  }) : null);
}
Object.assign(__ds_scope, { ArrowLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ArrowLink.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    font: "var(--size-body-sm)",
    padY: "var(--pad-button-y-sm)",
    padX: "var(--pad-button-x-sm)",
    gap: "8px",
    badge: 22
  },
  md: {
    font: "var(--size-body)",
    padY: "var(--pad-button-y)",
    padX: "var(--pad-button-x)",
    gap: "10px",
    badge: 26
  }
};

/** Compact, squared-off action. Solid for the one primary move on a view; quiet and ghost for everything else. */
function Button({
  children,
  variant = "solid",
  size = "md",
  withArrow = false,
  icon,
  href,
  disabled = false,
  fullWidth = false,
  onClick,
  type = "button",
  className = "",
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const active = hover && !disabled;
  const palette = {
    solid: {
      background: active ? "var(--action-solid-bg-hover)" : "var(--action-solid-bg)",
      color: "var(--action-solid-fg)",
      border: "1px solid transparent"
    },
    quiet: {
      background: "transparent",
      color: "var(--action-quiet-fg)",
      border: `1px solid ${active ? "var(--action-quiet-border-hover)" : "var(--action-quiet-border)"}`
    },
    ghost: {
      background: active ? "var(--surface-sunken)" : "transparent",
      color: "var(--action-quiet-fg)",
      border: "1px solid transparent"
    }
  }[variant] || {};
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : undefined,
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    font: `var(--weight-medium) ${s.font}/1 var(--font-core)`,
    letterSpacing: "-0.01em",
    padding: `${s.padY} ${s.padX}`,
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "background var(--transition-ui),border-color var(--transition-ui),color var(--transition-ui),opacity var(--transition-ui)",
    ...palette,
    ...(disabled ? {
      opacity: 0.45,
      color: "var(--action-disabled-fg)",
      borderColor: variant === "quiet" ? "var(--action-disabled-border)" : "transparent"
    } : null),
    ...style
  };
  if (withArrow) {
    base.paddingRight = size === "sm" ? "5px" : "6px";
  }
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === "sm" ? 14 : 16
  }) : null, /*#__PURE__*/React.createElement("span", null, children), withArrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: s.badge,
      height: s.badge,
      borderRadius: "var(--radius-pill)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: variant === "solid" ? "var(--action-solid-fg)" : "var(--action-solid-bg)",
      color: variant === "solid" ? "var(--action-solid-bg)" : "var(--action-solid-fg)",
      transform: active ? "translate(2px,-2px)" : "none",
      transition: "transform var(--transition-line)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: size === "sm" ? 12 : 14,
    strokeWidth: 1.75
  })) : null);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className,
    style: base,
    ...rest
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, handlers), content);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick
  }, handlers), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/content/ContactCTA.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Closing call to action: eyebrow, one large statement, a short note and a single primary action. */
function ContactCTA({
  eyebrow = "Ready to start?",
  index,
  title = "Tell us about the site. We will tell you what can be built on it.",
  note = "Send a location and a rough brief. You will hear back from an architect, not a sales team, within two working days.",
  action = "Book a consultation",
  secondary,
  tone = "light",
  onAction,
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("section", _extends({
    className: `${tone === "dark" ? "nh-dark " : ""}${className}`,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,0.62fr) minmax(0,1.38fr)",
      gap: "var(--grid-gap-wide)",
      padding: tone === "dark" ? "var(--space-24) var(--page-gutter)" : 0,
      alignItems: "start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index
  }, eyebrow), note ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-font)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-secondary)",
      maxWidth: "30ch"
    }
  }, note) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-10)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: `var(--weight-medium) var(--size-display-2)/1.06 var(--font-display)`,
      letterSpacing: "var(--tracking-display)",
      margin: 0,
      maxWidth: "22ch"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "solid",
    withArrow: true,
    onClick: onAction
  }, action), secondary ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "quiet"
  }, secondary) : null)));
}
Object.assign(__ds_scope, { ContactCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ContactCTA.jsx", error: String((e && e.message) || e) }); }

// components/core/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* No logo file was supplied with the brief, so the NORDHAUS mark IS the name,
   set in the core grotesk at tight tracking. Never substitute an invented symbol. */
const SIZES = {
  sm: 15,
  md: 19,
  lg: 28,
  xl: 56,
  hero: 148
};

/** The NORDHAUS wordmark — type-only lockup. Use `descriptor` for the header/footer lockup. */
function Wordmark({
  size = "md",
  descriptor,
  tone = "inherit",
  href,
  as = "span",
  className = "",
  style,
  ...rest
}) {
  const px = typeof size === "number" ? size : SIZES[size] || SIZES.md;
  const Tag = href ? "a" : as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: className,
    style: {
      display: "inline-flex",
      alignItems: "baseline",
      gap: px >= 40 ? "18px" : "10px",
      color: tone === "inherit" ? "var(--text-primary)" : tone === "inverse" ? "var(--text-inverse)" : tone,
      textDecoration: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: px >= 40 ? "var(--weight-semibold)" : "var(--weight-bold)",
      fontSize: px,
      lineHeight: 0.9,
      letterSpacing: px >= 40 ? "-0.04em" : "-0.02em"
    }
  }, "NORDHAUS"), descriptor ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "var(--tracking-meta-wide)",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      whiteSpace: "nowrap"
    }
  }, descriptor) : null);
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ImageTextModule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The workhorse editorial block: one large image paired with a text column, offset and asymmetric by default. */
function ImageTextModule({
  index,
  eyebrow,
  title,
  body,
  bullets,
  link,
  linkHref = "#",
  src,
  alt = "",
  ratio = "editorial",
  imageSide = "left",
  imageSpan = "wide",
  offsetText = true,
  className = "",
  style,
  ...rest
}) {
  const wide = imageSpan === "wide";
  const cols = wide ? "minmax(0,1.6fr) minmax(0,1fr)" : "minmax(0,1fr) minmax(0,1fr)";
  const media = /*#__PURE__*/React.createElement(__ds_scope.Figure, {
    src: src,
    alt: alt,
    ratio: ratio,
    placeholderLabel: title || "Architectural photography"
  });
  const text = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      alignSelf: offsetText ? "end" : "start",
      paddingBottom: offsetText ? "var(--space-6)" : 0
    }
  }, eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      font: `var(--weight-medium) var(--size-display-3)/1.08 var(--font-display)`,
      letterSpacing: "var(--tracking-display)",
      margin: 0
    }
  }, title) : null, body ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-font)",
      color: "var(--text-secondary)",
      maxWidth: "var(--measure)"
    }
  }, body) : null, bullets && bullets.length ? /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      margin: 0,
      padding: 0,
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      borderTop: "var(--border-hair)",
      paddingTop: "var(--space-4)"
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      display: "flex",
      gap: "12px",
      font: "var(--text-body-font)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-accent)"
    }
  }, "\u2014"), /*#__PURE__*/React.createElement("span", null, b)))) : null, link ? /*#__PURE__*/React.createElement(__ds_scope.ArrowLink, {
    href: linkHref,
    size: "sm"
  }, link) : null);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "grid",
      gridTemplateColumns: cols,
      gap: "var(--grid-gap-wide)",
      alignItems: "stretch",
      ...style
    }
  }, rest), imageSide === "left" ? /*#__PURE__*/React.createElement(React.Fragment, null, media, text) : /*#__PURE__*/React.createElement(React.Fragment, null, text, media));
}
Object.assign(__ds_scope, { ImageTextModule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ImageTextModule.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionIntro.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Section opener: numbered eyebrow, display heading, and a short deck offset to the right. The system's standard asymmetry. */
function SectionIntro({
  index,
  eyebrow,
  title,
  deck,
  align = "split",
  level = 2,
  action,
  className = "",
  style,
  ...rest
}) {
  const Heading = `h${level}`;
  const size = level === 1 ? "var(--size-display-1)" : level === 3 ? "var(--size-display-3)" : "var(--size-display-2)";
  const heading = /*#__PURE__*/React.createElement(Heading, {
    style: {
      font: `var(--weight-medium) ${size}/var(--leading-display) var(--font-display)`,
      letterSpacing: "var(--tracking-display)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, title);
  const body = deck || action ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)",
      alignItems: "flex-start",
      maxWidth: "var(--measure)"
    }
  }, deck ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-body-font)",
      color: "var(--text-secondary)"
    }
  }, deck) : null, action) : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)",
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index,
    rule: align === "split"
  }, eyebrow) : null, align === "split" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
      gap: "var(--grid-gap-wide)",
      alignItems: "end"
    }
  }, heading, body) : align === "center" ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      gap: "var(--space-5)"
    }
  }, heading, body) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, heading, body));
}
Object.assign(__ds_scope, { SectionIntro });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionIntro.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DEFAULT_COLUMNS = [{
  title: "Sitemap",
  links: ["Homes", "Projects", "Process", "Studio", "Journal", "Contact"]
}, {
  title: "Elsewhere",
  links: ["Instagram", "Pinterest", "LinkedIn", "ArchDaily"]
}];

/** Dark closing footer: contact line, email capture, link columns and the oversized wordmark bleeding off the baseline. */
function SiteFooter({
  email = "studio@nordhaus.no",
  address = "Sagveien 21, 0459 Oslo",
  columns = DEFAULT_COLUMNS,
  legal = "© 2026 Nordhaus AS · Org. 918 442 771",
  onSubscribe,
  className = "",
  style,
  ...rest
}) {
  const [value, setValue] = React.useState("");
  return /*#__PURE__*/React.createElement("footer", _extends({
    className: `nh-dark ${className}`,
    style: {
      paddingTop: "var(--space-24)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--page-gutter)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr) repeat(2,minmax(0,0.6fr))",
      gap: "var(--grid-gap-wide)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "var(--tracking-meta-wide)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, "Let's talk"), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${email}`,
    style: {
      font: `var(--weight-medium) var(--size-title-2)/1.2 var(--font-core)`,
      letterSpacing: "-0.02em",
      color: "var(--text-primary)",
      textDecoration: "underline",
      textDecorationColor: "var(--border-strong)",
      textUnderlineOffset: "6px"
    }
  }, email), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-font)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-secondary)"
    }
  }, address)), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (onSubscribe) onSubscribe(value);
      setValue("");
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "var(--tracking-meta-wide)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, "Studio letter"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      borderBottom: "1px solid var(--border-strong)",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => setValue(e.target.value),
    placeholder: "Email",
    style: {
      flex: 1,
      minWidth: 0,
      background: "transparent",
      border: 0,
      outline: "none",
      color: "var(--text-primary)",
      fontSize: "var(--size-body)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    "aria-label": "Subscribe",
    style: {
      background: "transparent",
      border: 0,
      color: "var(--text-primary)",
      cursor: "pointer",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "arrow-up-right",
    size: 16
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "0.04em",
      color: "var(--text-tertiary)"
    }
  }, "Four notes a year. Projects, materials, openings.")), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "var(--tracking-meta-wide)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: "var(--size-body-sm)",
      color: "var(--text-secondary)",
      textDecoration: "none"
    },
    onMouseEnter: e => e.currentTarget.style.color = "var(--text-primary)",
    onMouseLeave: e => e.currentTarget.style.color = "var(--text-secondary)"
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-20)",
      paddingTop: "var(--space-5)",
      borderTop: "1px solid var(--border-hairline)",
      display: "flex",
      justifyContent: "space-between",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "0.06em",
      color: "var(--text-tertiary)"
    }
  }, legal), /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-meta-font)",
      letterSpacing: "0.06em",
      color: "var(--text-tertiary)"
    }
  }, "Oslo \xB7 Bergen \xB7 Troms\xF8"))), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      marginTop: "var(--space-10)",
      marginBottom: "-2.2vw",
      display: "flex",
      justifyContent: "center",
      lineHeight: 0.78,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: "var(--weight-semibold)",
      fontSize: "15.4vw",
      letterSpacing: "-0.045em",
      color: "var(--text-primary)",
      whiteSpace: "nowrap"
    }
  }, "NORDHAUS")));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Site header: wordmark left, centred nav, one contact affordance right. Overlays photography when `overlay`. */
function SiteHeader({
  items = [{
    label: "Homes",
    href: "#homes"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Process",
    href: "#process"
  }, {
    label: "Studio",
    href: "#studio"
  }],
  active,
  overlay = false,
  phone = "+47 22 84 10 60",
  cta,
  onNavigate,
  className = "",
  style,
  ...rest
}) {
  const tone = overlay ? "#F5F4F0" : "var(--text-primary)";
  return /*#__PURE__*/React.createElement("header", _extends({
    className: className,
    style: {
      position: overlay ? "absolute" : "relative",
      insetInline: 0,
      top: 0,
      zIndex: 20,
      borderBottom: overlay ? "1px solid rgba(245,244,240,.18)" : "var(--border-hair)",
      background: overlay ? "transparent" : "var(--surface-page)",
      color: tone,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--page-max)",
      margin: "0 auto",
      padding: "0 var(--page-gutter)",
      height: "var(--header-height)",
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Wordmark, {
    size: "sm",
    href: "#",
    tone: tone
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      justifySelf: "center"
    }
  }, items.map(it => {
    const isActive = active === it.label;
    return /*#__PURE__*/React.createElement("a", {
      key: it.label,
      href: it.href,
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it);
        }
      },
      style: {
        font: `var(--weight-${isActive ? "medium" : "regular"}) var(--size-body-sm)/1 var(--font-core)`,
        letterSpacing: "-0.005em",
        color: tone,
        opacity: isActive ? 1 : overlay ? 0.78 : 0.72,
        textDecoration: "none",
        paddingBottom: "3px",
        borderBottom: `1px solid ${isActive ? "currentColor" : "transparent"}`,
        transition: "opacity var(--transition-ui),border-color var(--transition-ui)"
      },
      onMouseEnter: e => e.currentTarget.style.opacity = 1,
      onMouseLeave: e => e.currentTarget.style.opacity = isActive ? 1 : overlay ? 0.78 : 0.72
    }, it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      justifySelf: "end",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, phone ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      font: "var(--text-meta-font)",
      letterSpacing: "0.06em",
      color: tone,
      opacity: 0.8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "phone",
    size: 13
  }), phone) : null, cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: overlay ? "quiet" : "solid",
    style: overlay ? {
      color: "#F5F4F0",
      borderColor: "rgba(245,244,240,.4)"
    } : undefined
  }, cta) : null)));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/projects/ProjectMeta.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Mono metadata line — location, area, year — separated by a thin middot. Used under every project image. */
function ProjectMeta({
  items = [],
  separator = "·",
  tone = "secondary",
  className = "",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: "8px",
      font: "var(--text-meta-font)",
      letterSpacing: "0.05em",
      color: tone === "primary" ? "var(--text-primary)" : tone === "tertiary" ? "var(--text-tertiary)" : "var(--text-secondary)",
      ...style
    }
  }, rest), items.map((it, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: `${it}-${i}`
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.5
    }
  }, separator) : null, /*#__PURE__*/React.createElement("span", null, it))));
}
Object.assign(__ds_scope, { ProjectMeta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/ProjectMeta.jsx", error: String((e && e.message) || e) }); }

// components/projects/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** A project in the index grid: image, reference number, and a single metadata line. Deliberately card-less. */
function ProjectCard({
  id,
  title,
  location,
  year,
  area,
  src,
  alt = "",
  ratio = "editorial",
  size = "md",
  href = "#",
  onSelect,
  className = "",
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const titleSize = size === "lg" ? "var(--size-title-2)" : size === "sm" ? "var(--size-body-sm)" : "var(--size-body)";
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: e => {
      if (onSelect) {
        e.preventDefault();
        onSelect(id);
      }
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      textDecoration: "none",
      color: "inherit",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Figure, {
    src: src,
    alt: alt,
    ratio: ratio,
    placeholderLabel: title,
    hoverZoom: true
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      paddingTop: "2px",
      borderTop: `1px solid ${hover ? "var(--border-strong)" : "var(--border-hairline)"}`,
      transition: "border-color var(--transition-line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) ${titleSize}/1.35 var(--font-core)`,
      letterSpacing: "-0.015em",
      marginTop: "10px"
    }
  }, id ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.82em",
      marginRight: "10px"
    }
  }, id) : null, title), /*#__PURE__*/React.createElement(__ds_scope.ProjectMeta, {
    items: [location, area, year].filter(Boolean)
  })));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/projects/SpecTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Technical specification block — hairline-separated label/value rows, optionally in two columns. */
function SpecTable({
  title = "Specification",
  index,
  rows = [],
  columns = 1,
  dense = false,
  className = "",
  style,
  ...rest
}) {
  const pad = dense ? "10px" : "14px";
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      ...style
    }
  }, rest), title ? /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index,
    rule: true
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns},minmax(0,1fr))`,
      columnGap: "var(--grid-gap-wide)"
    }
  }, rows.map(row => /*#__PURE__*/React.createElement("div", {
    key: row.label,
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,1fr) auto",
      gap: "var(--space-6)",
      alignItems: "baseline",
      padding: `${pad} 0`,
      borderBottom: "var(--border-hair)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: "var(--text-body-font)",
      fontSize: "var(--size-body-sm)",
      color: "var(--text-secondary)"
    }
  }, row.label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: `var(--weight-medium) var(--size-body-sm)/1.4 var(--font-core)`,
      letterSpacing: "-0.01em",
      color: "var(--text-primary)",
      textAlign: "right",
      fontVariantNumeric: "tabular-nums"
    }
  }, row.value, row.unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)",
      fontFamily: "var(--font-mono)",
      fontSize: "0.82em",
      marginLeft: "5px"
    }
  }, row.unit) : null)))));
}
Object.assign(__ds_scope, { SpecTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/projects/SpecTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const DS = window.NORDHAUSDesignSystem_74af41;
  const {
    SiteHeader,
    Wordmark,
    Button,
    Figure,
    Eyebrow,
    SectionIntro,
    ImageTextModule,
    ProjectCard,
    FeatureList,
    Testimonial,
    Accordion,
    ContactCTA,
    ArrowLink,
    ProjectMeta
  } = DS;
  const D = window.NH_DATA;
  function Hero({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: "relative",
        background: "var(--nh-ink-950)",
        color: "var(--nh-ivory-100)",
        overflow: "hidden"
      }
    }, /*#__PURE__*/React.createElement(SiteHeader, {
      overlay: true,
      items: D.nav,
      active: "Homes",
      cta: "Book a consultation",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: "84px",
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        lineHeight: 0.82,
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: "14.4vw",
        letterSpacing: "-0.045em",
        color: "#F5F4F0",
        whiteSpace: "nowrap"
      }
    }, "NORDHAUS")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        paddingTop: "230px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative",
        height: "66vh",
        minHeight: "460px",
        background: "var(--nh-gray-800)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: "26px",
        font: "var(--text-meta-font)",
        letterSpacing: "var(--tracking-meta-wide)",
        textTransform: "uppercase",
        color: "rgba(245,244,240,.42)"
      }
    }, "Hero photography \xB7 Mountain Retreat 0890, Lofoten"), /*#__PURE__*/React.createElement("div", {
      "aria-hidden": "true",
      style: {
        position: "absolute",
        inset: 0,
        background: "var(--scrim-gradient)"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "var(--page-gutter)",
        bottom: "38px",
        maxWidth: "30ch"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--weight-medium) 19px/1.42 var(--font-core)",
        letterSpacing: "-0.015em",
        color: "#F5F4F0"
      }
    }, "Modular homes, engineered in Trondheim and assembled on your ground in nine days.")), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        right: "var(--page-gutter)",
        bottom: "38px",
        display: "flex",
        alignItems: "center",
        gap: "16px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--text-meta-font)",
        letterSpacing: "0.06em",
        color: "rgba(245,244,240,.65)"
      }
    }, "01 / 04"), /*#__PURE__*/React.createElement(Button, {
      variant: "solid",
      withArrow: true,
      style: {
        background: "#F5F4F0",
        color: "#111211"
      }
    }, "Book a consultation")))));
  }
  function Manifesto() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section) var(--page-gutter)",
        maxWidth: "var(--page-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,0.55fr) minmax(0,1.45fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: "01"
    }, "The premise"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-10)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--weight-medium) var(--size-display-2)/1.04 var(--font-display)",
        letterSpacing: "var(--tracking-display)",
        maxWidth: "20ch"
      }
    }, "A house should be finished before it reaches the site."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)",
        gap: "var(--grid-gap-wide)",
        maxWidth: "860px"
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        color: "var(--text-secondary)"
      }
    }, "We build in a hall in Trondheim, to tolerances a site cannot hold. Walls arrive square, services arrive tested, and the weather gets no say in the programme."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        color: "var(--text-secondary)"
      }
    }, "What that buys is not speed for its own sake. It is a fixed price, a known date, and the attention left over to get the proportions right.")))));
  }
  function FeaturedProject() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "0 0 var(--section)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "0 var(--page-gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.75fr) minmax(0,1fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      ratio: "hero",
      radius: "md",
      placeholderLabel: "Mountain Retreat 0890 \xB7 exterior, dusk"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
        paddingBottom: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: "1.1"
    }, "Built around real living"), /*#__PURE__*/React.createElement("h3", {
      style: {
        font: "var(--weight-medium) var(--size-display-3)/1.06 var(--font-display)",
        letterSpacing: "var(--tracking-display)"
      }
    }, "Mountain Retreat 0890"), /*#__PURE__*/React.createElement(ProjectMeta, {
      items: ["Lofoten, Norway", "164 m²", "2025"]
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        color: "var(--text-secondary)"
      }
    }, "Sited on rock above the fjord, turned eleven degrees off the road so the long glazing takes the southern light and the gable takes the wind."), /*#__PURE__*/React.createElement(ArrowLink, {
      size: "sm"
    }, "View the project")))));
  }
  function Models({
    onNavigate
  }) {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section-tight) var(--page-gutter)",
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(SectionIntro, {
      index: "02",
      eyebrow: "The catalogue",
      title: "Three plans. One structural grid.",
      deck: "Every NORDHAUS home is assembled from the same catalogue of parts. The difference between them is how many bays, and which way they face.",
      action: /*#__PURE__*/React.createElement(ArrowLink, {
        onClick: e => {
          e.preventDefault();
          onNavigate({
            label: "Projects"
          });
        }
      }, "See them built")
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        gap: "var(--grid-gap-wide)"
      }
    }, D.models.map((m, i) => /*#__PURE__*/React.createElement("div", {
      key: m.name,
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      ratio: i === 1 ? "tall" : "landscape",
      placeholderLabel: m.name
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        borderTop: "var(--border-hair)",
        paddingTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        gap: "12px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--weight-medium) var(--size-title-3)/1.3 var(--font-core)",
        letterSpacing: "-0.02em"
      }
    }, m.name), /*#__PURE__*/React.createElement(ProjectMeta, {
      items: [m.area, m.rooms],
      tone: "tertiary"
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        fontSize: "var(--size-body-sm)",
        color: "var(--text-secondary)"
      }
    }, m.note))))));
  }
  function Materials() {
    return /*#__PURE__*/React.createElement("section", {
      className: "nh-dark",
      style: {
        padding: "var(--section) var(--page-gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(ImageTextModule, {
      index: "03",
      eyebrow: "Materials",
      title: "Timber that ages in place",
      body: "Untreated Nordic pine silvers in three winters and is never painted again. Beneath it, cross-laminated spruce carries the loads and stores the carbon that grew it.",
      bullets: ["CLT spruce structural frame", "Triple-glazed larch windows", "Air-source heat pump, A-class envelope"],
      link: "Read the material note",
      imageSide: "right",
      ratio: "landscape"
    }), /*#__PURE__*/React.createElement(FeatureList, {
      columns: 2,
      items: D.process.slice(0, 4)
    })));
  }
  function Selected({
    onSelect
  }) {
    const p = D.projects;
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "var(--section) var(--page-gutter)",
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(SectionIntro, {
      index: "04",
      eyebrow: "Selected projects",
      title: "Forty-two homes across the Nordics",
      deck: "Sited on rock, sand, forest floor and reclaimed farmland. The catalogue stayed the same; the ground did not."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(12,minmax(0,1fr))",
        gap: "var(--grid-gap-wide)",
        rowGap: "var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "span 7"
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p[0], {
      size: "lg",
      onSelect: onSelect
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "span 4",
        gridColumnStart: 9,
        alignSelf: "end"
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p[1], {
      onSelect: onSelect
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "span 4",
        gridColumnStart: 2
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p[2], {
      onSelect: onSelect
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "span 5",
        gridColumnStart: 7
      }
    }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p[4], {
      size: "lg",
      ratio: "editorial",
      onSelect: onSelect
    })))));
  }
  function Voices() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "0 var(--page-gutter) var(--section)",
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(SectionIntro, {
      index: "05",
      eyebrow: "Owners",
      title: "Stories from the houses we built",
      align: "split",
      deck: "Two owners, four years apart, on what changed after they moved in."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,minmax(0,1fr))",
        gap: "var(--grid-gap-wide)"
      }
    }, D.testimonials.map(t => /*#__PURE__*/React.createElement(Testimonial, _extends({
      key: t.name
    }, t)))));
  }
  function Questions() {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        padding: "0 var(--page-gutter) var(--section)",
        maxWidth: "var(--page-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,0.7fr) minmax(0,1.3fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--weight-medium) var(--size-display-3)/1.02 var(--font-display)",
        letterSpacing: "var(--tracking-display)",
        maxWidth: "10ch"
      }
    }, "Frequently asked questions"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        fontSize: "var(--size-body-sm)",
        color: "var(--text-secondary)",
        maxWidth: "30ch"
      }
    }, "The five we are asked most often. Anything else, write to the studio directly."), /*#__PURE__*/React.createElement(Figure, {
      ratio: "landscape",
      placeholderLabel: "Interior detail",
      style: {
        maxWidth: "180px"
      }
    })), /*#__PURE__*/React.createElement(Accordion, {
      items: D.faq,
      defaultOpen: 1
    })));
  }
  function HomeScreen({
    onNavigate = () => {},
    onSelect = () => {}
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Hero, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(Manifesto, null), /*#__PURE__*/React.createElement(FeaturedProject, null), /*#__PURE__*/React.createElement(Models, {
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement(Materials, null), /*#__PURE__*/React.createElement(Selected, {
      onSelect: onSelect
    }), /*#__PURE__*/React.createElement(Voices, null), /*#__PURE__*/React.createElement(Questions, null), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "0 var(--page-gutter) var(--section-loose)"
      }
    }, /*#__PURE__*/React.createElement(ContactCTA, {
      index: "06",
      onAction: () => onNavigate({
        label: "Studio"
      })
    })));
  }
  window.HomeScreen = HomeScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const DS = window.NORDHAUSDesignSystem_74af41;
  const {
    SiteHeader,
    Figure,
    Eyebrow,
    SpecTable,
    ProjectMeta,
    ArrowLink,
    ImageTextModule,
    ContactCTA,
    ProjectCard
  } = DS;
  const D = window.NH_DATA;
  function ProjectScreen({
    projectId = "0890",
    onNavigate = () => {},
    onSelect = () => {}
  }) {
    const p = D.projects.find(x => x.id === projectId) || D.projects[0];
    const others = D.projects.filter(x => x.id !== p.id).slice(0, 3);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
      items: D.nav,
      active: "Projects",
      cta: "Book a consultation",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "var(--space-16) var(--page-gutter) var(--space-12)"
      }
    }, /*#__PURE__*/React.createElement(ArrowLink, {
      direction: "right",
      size: "sm",
      tone: "secondary",
      underline: false,
      onClick: e => {
        e.preventDefault();
        onNavigate({
          label: "Projects"
        });
      },
      style: {
        flexDirection: "row-reverse",
        marginBottom: "var(--space-12)"
      }
    }, "Back to the index"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "minmax(0,1.3fr) minmax(0,1fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "end"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: p.id
    }, "Project"), /*#__PURE__*/React.createElement("h1", {
      style: {
        font: "var(--weight-medium) var(--size-display-1)/1.0 var(--font-display)",
        letterSpacing: "var(--tracking-display)",
        maxWidth: "12ch"
      }
    }, p.title)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-5)",
        paddingBottom: "var(--space-2)"
      }
    }, /*#__PURE__*/React.createElement(ProjectMeta, {
      items: [p.location, p.area, p.year]
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        color: "var(--text-secondary)",
        maxWidth: "var(--measure)"
      }
    }, "Sited on rock above the fjord, turned eleven degrees off the road so the long glazing takes the southern light and the closed gable takes the wind off the water.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      ratio: "panorama",
      radius: "none",
      hoverZoom: false,
      placeholderLabel: `${p.title} · exterior, south elevation`
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "0 var(--page-gutter) var(--section)",
        display: "grid",
        gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(2,minmax(0,1fr))",
        gap: "var(--grid-gap-wide)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      ratio: "portrait",
      placeholderLabel: "Threshold detail"
    }), /*#__PURE__*/React.createElement(Figure, {
      ratio: "portrait",
      placeholderLabel: "Kitchen, morning light",
      style: {
        marginTop: "var(--space-16)"
      }
    }), /*#__PURE__*/React.createElement(Figure, {
      ratio: "landscape",
      placeholderLabel: "Living volume",
      style: {
        gridColumn: "span 2"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-16)",
        position: "sticky",
        top: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(SpecTable, {
      index: "3.1",
      title: "Specification",
      rows: D.spec
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: "3.2"
    }, "Programme"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        fontSize: "var(--size-body-sm)",
        color: "var(--text-secondary)"
      }
    }, "Site study February 2024. Production began 6 May. Delivered to site 22 July; envelope closed on day four; handover 14 August 2025."), /*#__PURE__*/React.createElement(ArrowLink, {
      size: "sm"
    }, "Download the drawing set")))), /*#__PURE__*/React.createElement("div", {
      className: "nh-dark",
      style: {
        padding: "var(--section) var(--page-gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto"
      }
    }, /*#__PURE__*/React.createElement(ImageTextModule, {
      index: "04",
      eyebrow: "On the ground",
      title: "Nine days from foundation to closed envelope",
      body: "The bays arrived on three trucks over two mornings. A four-person crew set them on the prepared slab; the roof went on before the first rain of the week.",
      bullets: ["Three factory bays", "Crane-set in 11 hours", "Commissioned 14 days later"],
      imageSide: "left",
      ratio: "editorial"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "var(--section) var(--page-gutter) var(--section-loose)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-16)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: "05",
      rule: true
    }, "Nearby projects"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(3,minmax(0,1fr))",
        gap: "var(--grid-gap-wide)"
      }
    }, others.map(o => /*#__PURE__*/React.createElement(ProjectCard, _extends({
      key: o.id
    }, o, {
      ratio: "landscape",
      onSelect: onSelect
    })))), /*#__PURE__*/React.createElement(ContactCTA, {
      index: "06",
      title: "Considering a site like this one?",
      action: "Book a consultation",
      onAction: () => onNavigate({
        label: "Studio"
      })
    })));
  }
  window.ProjectScreen = ProjectScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ProjectsScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
(() => {
  const DS = window.NORDHAUSDesignSystem_74af41;
  const {
    SiteHeader,
    SectionIntro,
    ProjectCard,
    Eyebrow,
    Button,
    ProjectMeta
  } = DS;
  const D = window.NH_DATA;
  const FILTERS = ["All", "Norway", "Sweden", "Denmark", "Finland", "Faroes"];
  function ProjectsScreen({
    onNavigate = () => {},
    onSelect = () => {}
  }) {
    const [filter, setFilter] = React.useState("All");
    const list = filter === "All" ? D.projects : D.projects.filter(p => p.location.includes(filter));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
      items: D.nav,
      active: "Projects",
      cta: "Book a consultation",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "var(--space-24) var(--page-gutter) var(--section)"
      }
    }, /*#__PURE__*/React.createElement(SectionIntro, {
      index: "01",
      eyebrow: "Index",
      level: 1,
      title: "Forty-two homes, 2019 \u2014 2026",
      deck: "Every completed NORDHAUS home, in the order it was handed over. Reference numbers follow the production sequence, not the calendar."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-8)",
        margin: "var(--space-16) 0 var(--space-10)",
        borderBottom: "var(--border-hair)",
        paddingBottom: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: "var(--space-2)",
        flexWrap: "wrap"
      }
    }, FILTERS.map(f => /*#__PURE__*/React.createElement(Button, {
      key: f,
      size: "sm",
      variant: filter === f ? "solid" : "ghost",
      onClick: () => setFilter(f)
    }, f))), /*#__PURE__*/React.createElement(ProjectMeta, {
      items: [`${list.length} projects`, "Sorted by reference"],
      tone: "tertiary"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "grid",
        gridTemplateColumns: "repeat(12,minmax(0,1fr))",
        gap: "var(--grid-gap-wide)",
        rowGap: "var(--space-16)"
      }
    }, list.map((p, i) => {
      const pattern = [{
        span: 7,
        start: 1,
        size: "lg",
        ratio: "editorial"
      }, {
        span: 4,
        start: 9,
        size: "md",
        ratio: "landscape",
        offset: true
      }, {
        span: 4,
        start: 1,
        size: "md",
        ratio: "tall"
      }, {
        span: 6,
        start: 6,
        size: "lg",
        ratio: "landscape"
      }, {
        span: 5,
        start: 2,
        size: "md",
        ratio: "editorial"
      }, {
        span: 5,
        start: 8,
        size: "md",
        ratio: "landscape",
        offset: true
      }][i % 6];
      return /*#__PURE__*/React.createElement("div", {
        key: p.id,
        style: {
          gridColumn: `${pattern.start} / span ${pattern.span}`,
          marginTop: pattern.offset ? "var(--space-16)" : 0
        }
      }, /*#__PURE__*/React.createElement(ProjectCard, _extends({}, p, {
        ratio: pattern.ratio,
        size: pattern.size,
        onSelect: onSelect
      })));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        justifyContent: "center",
        marginTop: "var(--section-tight)"
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "quiet"
    }, "Load the next twelve"))));
  }
  window.ProjectsScreen = ProjectsScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StudioScreen.jsx
try { (() => {
(() => {
  const DS = window.NORDHAUSDesignSystem_74af41;
  const {
    SiteHeader,
    SectionIntro,
    Figure,
    Eyebrow,
    FeatureList,
    Button,
    Icon,
    SpecTable,
    Accordion
  } = DS;
  const D = window.NH_DATA;
  function StudioScreen({
    onNavigate = () => {}
  }) {
    const [sent, setSent] = React.useState(false);
    const [form, setForm] = React.useState({
      name: "",
      email: "",
      site: "",
      brief: ""
    });
    const set = k => e => setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    const field = (k, label, placeholder, multiline) => /*#__PURE__*/React.createElement("label", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--text-meta-font)",
        letterSpacing: "var(--tracking-meta-wide)",
        textTransform: "uppercase",
        color: "var(--text-secondary)"
      }
    }, label), multiline ? /*#__PURE__*/React.createElement("textarea", {
      value: form[k],
      onChange: set(k),
      placeholder: placeholder,
      rows: 4,
      style: {
        background: "transparent",
        border: 0,
        borderBottom: "var(--border-hair)",
        padding: "8px 0",
        outline: "none",
        resize: "vertical",
        fontSize: "var(--size-body)"
      }
    }) : /*#__PURE__*/React.createElement("input", {
      value: form[k],
      onChange: set(k),
      placeholder: placeholder,
      style: {
        background: "transparent",
        border: 0,
        borderBottom: "var(--border-hair)",
        padding: "10px 0",
        outline: "none",
        fontSize: "var(--size-body)"
      }
    }));
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
      items: D.nav,
      active: "Studio",
      onNavigate: onNavigate
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "var(--space-24) var(--page-gutter) var(--section-tight)"
      }
    }, /*#__PURE__*/React.createElement(SectionIntro, {
      index: "01",
      eyebrow: "Studio",
      level: 1,
      title: "Seventeen people in a hall in Trondheim",
      deck: "Four architects, two engineers, a production team of nine, and two people who answer the phone. We build about twelve houses a year and have no intention of building forty."
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 var(--section)"
      }
    }, /*#__PURE__*/React.createElement(Figure, {
      ratio: "panorama",
      radius: "none",
      hoverZoom: false,
      placeholderLabel: "Production hall, Trondheim"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "0 var(--page-gutter) var(--section)",
        display: "grid",
        gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.2fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-8)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: "02"
    }, "How a project runs"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        color: "var(--text-secondary)",
        maxWidth: "34ch"
      }
    }, "Six stages, eleven to fourteen months from first site visit to handover. One architect and one project lead stay with it throughout."), /*#__PURE__*/React.createElement(SpecTable, {
      title: "At a glance",
      index: "2.1",
      dense: true,
      rows: [{
        label: "Typical programme",
        value: "11–14",
        unit: "months"
      }, {
        label: "Houses per year",
        value: "12"
      }, {
        label: "Structural warranty",
        value: "10",
        unit: "years"
      }, {
        label: "Studio founded",
        value: "2016"
      }]
    })), /*#__PURE__*/React.createElement(FeatureList, {
      items: D.process
    })), /*#__PURE__*/React.createElement("div", {
      className: "nh-dark",
      style: {
        padding: "var(--section) var(--page-gutter)"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "minmax(0,0.8fr) minmax(0,1.2fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: "03"
    }, "Start a project"), /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--weight-medium) var(--size-display-3)/1.06 var(--font-display)",
        letterSpacing: "var(--tracking-display)",
        maxWidth: "14ch"
      }
    }, "Tell us about the site."), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--text-body-font)",
        fontSize: "var(--size-body-sm)",
        color: "var(--text-secondary)",
        maxWidth: "30ch"
      }
    }, "A location and a rough brief is enough to begin. You will hear back from an architect, not a sales team, within two working days."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        marginTop: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: "10px",
        alignItems: "center",
        fontSize: "var(--size-body-sm)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    }), "studio@nordhaus.no"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: "10px",
        alignItems: "center",
        fontSize: "var(--size-body-sm)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "phone",
      size: 15
    }), "+47 22 84 10 60"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        gap: "10px",
        alignItems: "center",
        fontSize: "var(--size-body-sm)",
        color: "var(--text-secondary)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "map-pin",
      size: 15
    }), "Sagveien 21, 0459 Oslo"))), sent ? /*#__PURE__*/React.createElement("div", {
      style: {
        border: "var(--border-hair)",
        borderRadius: "var(--radius-md)",
        padding: "var(--space-12)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-4)"
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      index: "\u2014",
      tone: "accent"
    }, "Received"), /*#__PURE__*/React.createElement("p", {
      style: {
        font: "var(--weight-medium) var(--size-title-2)/1.35 var(--font-core)",
        letterSpacing: "-0.02em",
        maxWidth: "26ch"
      }
    }, "Thank you. An architect will read this and reply within two working days."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      variant: "quiet",
      size: "sm",
      onClick: () => setSent(false)
    }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
      onSubmit: e => {
        e.preventDefault();
        setSent(true);
      },
      style: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "var(--space-10) var(--grid-gap-wide)"
      }
    }, field("name", "Name", "Ingrid Solheim"), field("email", "Email", "ingrid@example.no"), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "span 2"
      }
    }, field("site", "Site", "Municipality, or a map reference")), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "span 2"
      }
    }, field("brief", "Brief", "Rooms, budget range, when you would like to move in", true)), /*#__PURE__*/React.createElement("div", {
      style: {
        gridColumn: "span 2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "var(--space-6)"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: "var(--text-meta-font)",
        letterSpacing: "0.05em",
        color: "var(--text-tertiary)",
        maxWidth: "34ch"
      }
    }, "We keep enquiries private and do not add you to a mailing list."), /*#__PURE__*/React.createElement(Button, {
      type: "submit",
      variant: "solid",
      withArrow: true
    }, "Send to the studio"))))), /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: "var(--page-max)",
        margin: "0 auto",
        padding: "var(--section) var(--page-gutter) var(--section-loose)",
        display: "grid",
        gridTemplateColumns: "minmax(0,0.7fr) minmax(0,1.3fr)",
        gap: "var(--grid-gap-wide)",
        alignItems: "start"
      }
    }, /*#__PURE__*/React.createElement("h2", {
      style: {
        font: "var(--weight-medium) var(--size-display-3)/1.02 var(--font-display)",
        letterSpacing: "var(--tracking-display)",
        maxWidth: "10ch"
      }
    }, "Frequently asked questions"), /*#__PURE__*/React.createElement(Accordion, {
      items: D.faq,
      defaultOpen: null
    })));
  }
  window.StudioScreen = StudioScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StudioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// NORDHAUS UI-kit sample content. Copy is written to the brand voice — specific, calm, measurable.
window.NH_DATA = {
  nav: [{
    label: "Homes",
    href: "#homes"
  }, {
    label: "Projects",
    href: "#projects"
  }, {
    label: "Process",
    href: "#process"
  }, {
    label: "Studio",
    href: "#studio"
  }],
  projects: [{
    id: "0890",
    title: "Mountain Retreat",
    location: "Lofoten, Norway",
    area: "164 m²",
    year: "2025",
    ratio: "editorial"
  }, {
    id: "0124",
    title: "Lakeside House",
    location: "Dalarna, Sweden",
    area: "118 m²",
    year: "2024",
    ratio: "landscape"
  }, {
    id: "0045",
    title: "Coastal Villa",
    location: "Skagen, Denmark",
    area: "96 m²",
    year: "2025",
    ratio: "landscape"
  }, {
    id: "0005",
    title: "Forest Cabin",
    location: "Kuusamo, Finland",
    area: "72 m²",
    year: "2024",
    ratio: "landscape"
  }, {
    id: "0008",
    title: "Dune House",
    location: "Rømø, Denmark",
    area: "140 m²",
    year: "2024",
    ratio: "landscape"
  }, {
    id: "0100",
    title: "Nordic Lake House",
    location: "Saimaa, Finland",
    area: "188 m²",
    year: "2025",
    ratio: "portrait"
  }, {
    id: "0012",
    title: "Cliffside House",
    location: "Streymoy, Faroes",
    area: "104 m²",
    year: "2024",
    ratio: "landscape"
  }, {
    id: "0042",
    title: "Archipelago Villa",
    location: "Åland, Sweden",
    area: "212 m²",
    year: "2023",
    ratio: "editorial"
  }],
  models: [{
    name: "Haus 72",
    area: "72 m²",
    rooms: "2 rooms",
    note: "One volume, one roof pitch. The smallest thing we will build."
  }, {
    name: "Haus 118",
    area: "118 m²",
    rooms: "4 rooms",
    note: "The standard family plan. Two bays, a covered threshold between them."
  }, {
    name: "Haus 164",
    area: "164 m²",
    rooms: "5 rooms",
    note: "An L around a sheltered yard, sited for the prevailing wind."
  }],
  spec: [{
    label: "Internal area",
    value: "164",
    unit: "m²"
  }, {
    label: "Structure",
    value: "CLT spruce frame"
  }, {
    label: "Cladding",
    value: "Untreated Nordic pine"
  }, {
    label: "Glazing",
    value: "Triple, larch frames"
  }, {
    label: "Heating",
    value: "Air-source heat pump"
  }, {
    label: "Energy class",
    value: "A"
  }, {
    label: "Factory production",
    value: "11",
    unit: "weeks"
  }, {
    label: "On-site assembly",
    value: "9",
    unit: "days"
  }],
  process: [{
    title: "Site study",
    body: "Access, orientation, ground conditions and planning constraints, surveyed before a line is drawn."
  }, {
    title: "Plan selection",
    body: "One of three structural grids, adapted to the site rather than the other way round."
  }, {
    title: "Fixed price",
    body: "Agreed in full before production begins. No provisional sums, no staged escalation."
  }, {
    title: "Factory build",
    body: "Eleven weeks under cover in Trondheim. Weather does not enter the programme."
  }, {
    title: "Assembly",
    body: "Nine days on a prepared foundation. The envelope is closed on day four."
  }, {
    title: "Handover",
    body: "Commissioning, a measured survey and a ten-year structural warranty."
  }],
  faq: [{
    question: "How long does installation take?",
    answer: "Nine days on a prepared foundation, with the envelope closed on day four. Factory production runs in parallel and takes a further eleven weeks."
  }, {
    question: "Can the design be adapted?",
    answer: "Layouts, finishes, cladding and glazing can be tailored within the structural grid. The grid itself is fixed — that is what keeps the price fixed."
  }, {
    question: "Are the homes suitable for all climates?",
    answer: "They are built for the Nordic range: −35 °C to +30 °C, coastal salt exposure and 2 kN/m² snow load as standard. Outside that range we specify the envelope per site."
  }, {
    question: "Do you assist throughout the process?",
    answer: "One architect and one project lead stay with the project from the site study to handover. Groundworks and connections are coordinated by us and quoted separately."
  }, {
    question: "What is included in the price?",
    answer: "Structure, envelope, windows, services and interior finishes. Foundations, site access and utility connections are quoted after the site study."
  }],
  testimonials: [{
    quote: "We moved in eleven weeks after the slab was poured. Nothing about that felt rushed.",
    name: "Ingrid Solheim",
    role: "Owner, Coastal Villa 0045",
    location: "Skagen",
    rating: 5
  }, {
    quote: "I work remotely four days a week. The house was drawn around where the light lands at ten in the morning.",
    name: "Lars Johansen",
    role: "Owner, Mountain Retreat 0890",
    location: "Lofoten",
    rating: 5
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.ContactCTA = __ds_scope.ContactCTA;

__ds_ns.FeatureList = __ds_scope.FeatureList;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.ArrowLink = __ds_scope.ArrowLink;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Figure = __ds_scope.Figure;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.ImageTextModule = __ds_scope.ImageTextModule;

__ds_ns.SectionIntro = __ds_scope.SectionIntro;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ProjectMeta = __ds_scope.ProjectMeta;

__ds_ns.SpecTable = __ds_scope.SpecTable;

})();
