/* @ds-bundle: {"format":4,"namespace":"DesignSystem_d83544","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"6100f0b469cf","components/actions/IconButton.jsx":"6d6d2bea82c8","components/core/Avatar.jsx":"1bfa8667e48b","components/core/Badge.jsx":"ad2884692230","components/core/Card.jsx":"f29b67c18a59","components/core/Icon.jsx":"1350481cb40f","components/core/Tag.jsx":"ca92ee816ab1","components/feedback/Dialog.jsx":"7aafea6a6a52","components/feedback/Toast.jsx":"dcbc45fcf007","components/feedback/Tooltip.jsx":"805718014ee4","components/forms/Checkbox.jsx":"90121f637aca","components/forms/Field.jsx":"167e2eb73bcc","components/forms/Input.jsx":"22b9587f6fa7","components/forms/Radio.jsx":"896fd16844e1","components/forms/Select.jsx":"b2385e6c58f8","components/forms/Switch.jsx":"b8d97f74acd1","components/forms/Textarea.jsx":"acbd066c78ae","components/navigation/Tabs.jsx":"4580ed04f6f2","ui_kits/app/AppSidebar.jsx":"29e6e37bf8b6","ui_kits/app/AppTopBar.jsx":"d3271537a8ce","ui_kits/app/InvitesView.jsx":"9c55c1c30f3a","ui_kits/app/TableDetail.jsx":"d71ef599f8dd","ui_kits/app/TablesView.jsx":"e6899c002149","ui_kits/website/DinnerGrid.jsx":"e1e90e0c3ac8","ui_kits/website/Hero.jsx":"14a862f277c6","ui_kits/website/Membership.jsx":"b1a009e3b493","ui_kits/website/SiteFooter.jsx":"9f3a36bf2b40","ui_kits/website/SiteHeader.jsx":"853ee648c240"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_d83544 = window.DesignSystem_d83544 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: "ls-btn--sm",
  md: "",
  lg: "ls-btn--lg"
};
function Button({
  variant = "primary",
  size = "md",
  block = false,
  disabled = false,
  href,
  iconLeft,
  iconRight,
  className = "",
  children,
  ...rest
}) {
  const cls = ["ls-btn", `ls-btn--${variant}`, SIZES[size] || "", block ? "ls-btn--block" : "", className].filter(Boolean).join(" ");
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children, iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      className: cls,
      href: href
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: rest.type || "button",
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  variant = "plain",
  size = "md",
  label,
  className = "",
  children,
  ...rest
}) {
  const cls = ["ls-iconbtn", variant !== "plain" ? `ls-iconbtn--${variant}` : "", size === "sm" ? "ls-iconbtn--sm" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    type: "button",
    "aria-label": label,
    title: label
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name = "",
  size = "md",
  ring = false,
  className = ""
}) {
  const cls = ["ls-avatar", size !== "md" ? `ls-avatar--${size}` : "", ring ? "ls-avatar--ring" : "", className].filter(Boolean).join(" ");
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join("");
  if (src) return /*#__PURE__*/React.createElement("img", {
    className: cls,
    src: src,
    alt: name
  });
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    "aria-label": name
  }, initials || "•");
}
function AvatarStack({
  people = [],
  size = "sm"
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ls-avatar-stack"
  }, people.map((p, i) => /*#__PURE__*/React.createElement(Avatar, {
    key: i,
    size: size,
    name: typeof p === "string" ? p : p.name,
    src: typeof p === "string" ? undefined : p.src
  })));
}
Object.assign(__ds_scope, { Avatar, AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  tone = "brand",
  solid = false,
  dot = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["ls-badge", tone !== "brand" ? `ls-badge--${tone}` : "", solid ? "ls-badge--solid" : "", dot ? "ls-badge--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = "default",
  eyebrow,
  title,
  media,
  footer,
  interactive = false,
  className = "",
  children,
  ...rest
}) {
  const cls = ["ls-card", variant !== "default" ? `ls-card--${variant}` : "", interactive ? "ls-card--interactive" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media && /*#__PURE__*/React.createElement("div", {
    className: "ls-card__media"
  }, media), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "ls-card__eyebrow"
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    className: "ls-card__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "ls-card__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "ls-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide is loaded from CDN by the host page:
   <script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.js"></script> */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  className = "",
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const draw = () => {
      if (window.lucide && ref.current) {
        ref.current.innerHTML = "";
        const i = document.createElement("i");
        i.setAttribute("data-lucide", name);
        ref.current.appendChild(i);
        window.lucide.createIcons({
          attrs: {
            width: size,
            height: size,
            "stroke-width": strokeWidth
          },
          nameAttr: "data-lucide",
          root: ref.current
        });
      }
    };
    draw();
    const t = setTimeout(draw, 400);
    return () => clearTimeout(t);
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: size,
      height: size,
      color: "currentColor",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Tag({
  selected = false,
  onRemove,
  onClick,
  className = "",
  children,
  ...rest
}) {
  const cls = ["ls-tag", selected ? "ls-tag--selected" : "", onClick ? "ls-tag--clickable" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    onClick: onClick
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    className: "ls-tag__remove",
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    }
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  title,
  onClose,
  actions,
  width,
  className = "",
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ls-dialog__scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: ["ls-dialog", className].filter(Boolean).join(" "),
    style: width ? {
      maxWidth: width
    } : undefined,
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation()
  }, onClose && /*#__PURE__*/React.createElement("span", {
    className: "ls-dialog__close"
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    size: "sm",
    label: "Close",
    onClick: onClose
  }, "\u2715")), title && /*#__PURE__*/React.createElement("h2", {
    className: "ls-dialog__title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "ls-dialog__body"
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    className: "ls-dialog__actions"
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  tone = "brand",
  title,
  onClose,
  className = "",
  children
}) {
  const cls = ["ls-toast", tone !== "brand" ? `ls-toast--${tone}` : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "status"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-toast__rule"
  }), /*#__PURE__*/React.createElement("span", null, title && /*#__PURE__*/React.createElement("div", {
    className: "ls-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "ls-toast__body"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    className: "ls-toast__close",
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose
  }, "\u2715"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  placement = "top",
  open,
  className = "",
  children
}) {
  const cls = ["ls-tooltip", placement === "bottom" ? "ls-tooltip--bottom" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", {
    className: cls,
    "data-open": open ? "true" : undefined
  }, children, /*#__PURE__*/React.createElement("span", {
    className: "ls-tooltip__bubble",
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["ls-choice", "ls-choice--check", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ls-choice__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "ls-choice__desc"
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  htmlFor,
  className = "",
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ["ls-field", className].filter(Boolean).join(" ")
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "ls-field__label",
    htmlFor: htmlFor
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "ls-field__error"
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    className: "ls-field__hint"
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  invalid = false,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    className: ["ls-input", className].filter(Boolean).join(" "),
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["ls-choice", "ls-choice--radio", className].filter(Boolean).join(" ")
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio"
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "ls-choice__text"
  }, /*#__PURE__*/React.createElement("span", null, label), description && /*#__PURE__*/React.createElement("span", {
    className: "ls-choice__desc"
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  options = [],
  placeholder,
  className = "",
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    className: ["ls-select", className].filter(Boolean).join(" ")
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), children || options.map(o => typeof o === "string" ? /*#__PURE__*/React.createElement("option", {
    key: o,
    value: o
  }, o) : /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  label,
  disabled = false,
  className = ""
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ["ls-switch", className].filter(Boolean).join(" "),
    "data-on": String(!!checked),
    "data-disabled": String(!!disabled)
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-switch__track"
  }), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked, e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 1,
      height: 1
    }
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  invalid = false,
  rows = 4,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: ["ls-textarea", className].filter(Boolean).join(" "),
    rows: rows,
    "aria-invalid": invalid || undefined
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = "underline",
  className = ""
}) {
  const cls = ["ls-tabs", variant === "pill" ? "ls-tabs--pill" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls,
    role: "tablist"
  }, items.map(it => {
    const id = typeof it === "string" ? it : it.value;
    const label = typeof it === "string" ? it : it.label;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "ls-tab",
      role: "tab",
      type: "button",
      "aria-selected": value === id,
      onClick: () => onChange && onChange(id)
    }, label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppSidebar.jsx
try { (() => {
const {
  Icon,
  Avatar,
  Badge,
  Button
} = window.DesignSystem_d83544;
function AppSidebar({
  view,
  onView
}) {
  const nav = [["tables", "Tables", "calendar-days"], ["invites", "Invites", "mail", 3], ["members", "Members", "users"], ["messages", "Messages", "message-circle"], ["settings", "Settings", "settings"]];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 248,
      flex: "none",
      background: "var(--surface-inverse)",
      color: "var(--blush-100)",
      display: "flex",
      flexDirection: "column",
      padding: "var(--space-6) var(--space-4)",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-3)",
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      color: "var(--blush-100)"
    }
  }, "Liron Social"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--blush-300)"
    }
  }, "Host console")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 2
    }
  }, nav.map(([id, label, icon, count]) => {
    const on = view === id;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      onClick: () => onView(id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        border: 0,
        cursor: "pointer",
        textAlign: "left",
        font: "inherit",
        fontSize: "var(--text-body-sm)",
        padding: "10px var(--space-3)",
        borderRadius: "var(--radius-md)",
        background: on ? "rgba(251,217,227,.14)" : "transparent",
        color: on ? "var(--blush-50)" : "var(--blush-200)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 17
    }), label, count && /*#__PURE__*/React.createElement(Badge, {
      tone: "critical",
      style: {
        marginLeft: "auto"
      }
    }, count));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    block: true,
    onClick: () => onView("tables")
  }, "Set a table"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)",
      padding: "0 var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Liron Adler",
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)"
    }
  }, "Liron Adler"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro)",
      color: "var(--blush-300)"
    }
  }, "Host \xB7 Tel Aviv")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 15,
    style: {
      marginLeft: "auto",
      opacity: .6
    }
  }))));
}
window.AppSidebar = AppSidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppSidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/AppTopBar.jsx
try { (() => {
const {
  Input,
  IconButton,
  Icon,
  Tooltip
} = window.DesignSystem_d83544;
function AppTopBar({
  title,
  tabs
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "var(--space-5) var(--space-7)",
      borderBottom: "1px solid var(--line-hairline)",
      background: "var(--surface-card)"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "var(--text-title-2)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 260,
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search tables, members"
  })), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Notifications"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Notifications",
    variant: "outline"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell"
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "New table"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "New table",
    variant: "solid"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }))), tabs);
}
window.AppTopBar = AppTopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/AppTopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/InvitesView.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Avatar,
  Tag,
  Icon
} = window.DesignSystem_d83544;
function InvitesView({
  onDecide
}) {
  const reqs = [{
    name: "Dana Shefer",
    note: "Came to two dinners in Jaffa. Wants the spring circle.",
    tags: ["Member", "Jaffa"]
  }, {
    name: "Ido Levi",
    note: "New — heard about us from Maya.",
    tags: ["Guest"]
  }, {
    name: "Tamar Bar",
    note: "Asked twice for the no-phones dinner.",
    tags: ["Member", "Waitlist"]
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr .8fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, reqs.map(r => /*#__PURE__*/React.createElement(Card, {
    key: r.name,
    style: {
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: r.name
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title-3)",
      color: "var(--text-heading)"
    }
  }, r.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)"
    }
  }, r.note), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, r.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "quiet",
    onClick: () => onDecide(r.name, false)
  }, "Not now"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => onDecide(r.name, true)
  }, "Offer a seat")))))), /*#__PURE__*/React.createElement(Card, {
    variant: "inverse",
    eyebrow: "Waitlist",
    title: "28 people waiting"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--blush-200)",
      fontSize: "var(--text-body-sm)"
    }
  }, "Most are waiting on a Thursday table in Tel Aviv. Two more tables would clear the list."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm"
  }, "Open another table"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-caption)",
      color: "var(--blush-300)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 14
  }), "Average wait: 11 days"))));
}
window.InvitesView = InvitesView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/InvitesView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TableDetail.jsx
try { (() => {
const {
  Card,
  Field,
  Input,
  Textarea,
  Select,
  Switch,
  Checkbox,
  Radio,
  Button,
  Badge,
  Avatar,
  Icon,
  Tabs
} = window.DesignSystem_d83544;
function TableDetail({
  table,
  onBack,
  onPublish
}) {
  const [tab, setTab] = React.useState("Details");
  const [auto, setAuto] = React.useState(true);
  const guests = ["Noa Ben", "Ari Katz", "Maya Dor", "Tal Rom", "Ido Levi", "Dana Sh"];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 15
    }),
    onClick: onBack
  }, "All tables"), /*#__PURE__*/React.createElement(Badge, {
    tone: "positive",
    dot: true
  }, "Published"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "quiet",
    size: "sm"
  }, "Duplicate"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onPublish
  }, "Save changes"))), /*#__PURE__*/React.createElement(Tabs, {
    items: ["Details", "Guests", "Messages"],
    value: tab,
    onChange: setTab,
    variant: "pill"
  }), tab === "Details" && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.3fr .7fr",
      gap: "var(--space-6)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Table name",
    htmlFor: "tn"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "tn",
    defaultValue: table.title
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "City",
    htmlFor: "tc"
  }, /*#__PURE__*/React.createElement(Select, {
    id: "tc",
    defaultValue: "Tel Aviv",
    options: ["Tel Aviv", "Jaffa", "Haifa"]
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Seats",
    htmlFor: "ts"
  }, /*#__PURE__*/React.createElement(Input, {
    id: "ts",
    type: "number",
    defaultValue: 8
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "The invitation",
    hint: "Two sentences. Say what the evening feels like, not what's on the menu.",
    htmlFor: "ti"
  }, /*#__PURE__*/React.createElement(Textarea, {
    id: "ti",
    defaultValue: "We set eight places at the long table and cook something slow. Come hungry, leave late."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-field__label"
  }, "Who can book"), /*#__PURE__*/React.createElement(Radio, {
    name: "who",
    label: "Members first, then guests",
    defaultChecked: true
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "who",
    label: "Members only"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Ask about dietary needs",
    defaultChecked: true
  })), /*#__PURE__*/React.createElement(Switch, {
    checked: auto,
    onChange: setAuto,
    label: "Auto-approve members from the waitlist"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "tint",
    eyebrow: "When",
    title: table.when
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 14
  }), "Neve Tzedek, Tel Aviv")), /*#__PURE__*/React.createElement(Card, {
    variant: "sand",
    eyebrow: "Cover",
    title: "Photo"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 120,
      borderRadius: "var(--radius-md)",
      background: "var(--gradient-warm)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-micro)",
      color: "var(--wine-900)",
      opacity: .65
    }
  }, "image placeholder"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline",
    block: true
  }, "Replace")))), tab === "Guests" && /*#__PURE__*/React.createElement(Card, {
    style: {
      padding: 0,
      gap: 0,
      overflow: "hidden"
    }
  }, guests.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: g,
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-6)",
      borderTop: i ? "1px solid var(--line-hairline)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: g,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--text-heading)"
    }
  }, g), /*#__PURE__*/React.createElement(Badge, {
    tone: i < 4 ? "positive" : "warning",
    style: {
      marginLeft: "var(--space-3)"
    }
  }, i < 4 ? "Confirmed" : "Waitlist"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, i < 4 ? "Booked 4 Mar" : "Asked 9 Mar"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost"
  }, "Message")))), tab === "Messages" && /*#__PURE__*/React.createElement(Card, {
    style: {
      gap: "var(--space-4)"
    }
  }, [["Noa Ben", "Can I bring a bottle of something?"], ["You", "Always. Red, if you're choosing."]].map(([who, msg], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-start",
      flexDirection: who === "You" ? "row-reverse" : "row"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: who,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "60%",
      background: who === "You" ? "var(--wine-900)" : "var(--surface-raised)",
      color: who === "You" ? "var(--blush-100)" : "var(--text-body)",
      padding: "var(--space-3) var(--space-4)",
      borderRadius: "var(--radius-lg)",
      fontSize: "var(--text-body-sm)"
    }
  }, msg))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "flex-end",
      paddingTop: "var(--space-3)",
      borderTop: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement(Textarea, {
    placeholder: "Write to the table\u2026",
    rows: 2
  }), /*#__PURE__*/React.createElement(Button, {
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 15
    })
  }, "Send"))));
}
window.TableDetail = TableDetail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TableDetail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TablesView.jsx
try { (() => {
const {
  Tabs,
  Card,
  Badge,
  Tag,
  Button,
  AvatarStack,
  Icon
} = window.DesignSystem_d83544;
const ROWS = [{
  id: 1,
  title: "Long table, Neve Tzedek",
  when: "Thu 12 Mar · 18:00",
  status: "live",
  seats: "6 / 8",
  people: ["Noa Ben", "Ari Katz", "Maya Dor", "Tal Rom", "Ido Levi", "Dana Sh"]
}, {
  id: 2,
  title: "Sunday supper by the port",
  when: "Sun 15 Mar · 19:30",
  status: "live",
  seats: "3 / 8",
  people: ["Maya Dor", "Tal Rom", "Ido Levi"]
}, {
  id: 3,
  title: "Quiet dinner, no phones",
  when: "Wed 1 Apr · 18:30",
  status: "draft",
  seats: "0 / 8",
  people: []
}, {
  id: 4,
  title: "Wine, bread, arguments",
  when: "Fri 27 Mar · 20:00",
  status: "review",
  seats: "4 / 8",
  people: ["Noa Ben", "Dana Sh", "Ari Katz", "Tal Rom"]
}];
const TONE = {
  live: ["positive", "Published"],
  draft: ["brand", "Draft"],
  review: ["warning", "Needs review"]
};
function TablesView({
  onOpen
}) {
  const [tab, setTab] = React.useState("Upcoming");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-4)"
    }
  }, [["Seats filled", "42 / 56"], ["This month", "6 tables"], ["Waitlist", "28 people"], ["Show rate", "94%"]].map(([k, v]) => /*#__PURE__*/React.createElement(Card, {
    key: k,
    variant: "sand",
    style: {
      gap: "var(--space-1)",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "ls-card__eyebrow"
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title-1)",
      color: "var(--text-heading)",
      lineHeight: 1.1
    }
  }, v)))), /*#__PURE__*/React.createElement(Tabs, {
    items: ["Upcoming", "Drafts", "Past"],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--line-hairline)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-card)",
      overflow: "hidden"
    }
  }, ROWS.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: r.id,
    onClick: () => onOpen(r),
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      padding: "var(--space-5) var(--space-6)",
      borderTop: i ? "1px solid var(--line-hairline)" : "none",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "var(--radius-md)",
      background: "var(--blush-100)",
      display: "grid",
      placeItems: "center",
      color: "var(--wine-900)",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "utensils",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 3,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-title-3)",
      color: "var(--text-heading)"
    }
  }, r.title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, r.when, " \xB7 ", r.seats, " seats")), /*#__PURE__*/React.createElement(Badge, {
    tone: TONE[r.status][0],
    dot: r.status === "live",
    style: {
      marginLeft: "var(--space-4)"
    }
  }, TONE[r.status][1]), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    people: r.people
  }), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "outline"
  }, "Open"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    selected: true
  }, "All cities"), /*#__PURE__*/React.createElement(Tag, null, "Tel Aviv"), /*#__PURE__*/React.createElement(Tag, null, "Jaffa"), /*#__PURE__*/React.createElement(Tag, null, "Haifa")));
}
window.TablesView = TablesView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TablesView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/DinnerGrid.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Tag,
  Tabs,
  Icon
} = window.DesignSystem_d83544;
const DINNERS = [{
  id: 1,
  city: "Tel Aviv",
  title: "Long table, Neve Tzedek",
  when: "Thu 12 Mar · 18:00",
  host: "Liron",
  seats: 2,
  tags: ["Dinners", "8 seats"],
  tone: "positive"
}, {
  id: 2,
  city: "Jaffa",
  title: "Sunday supper by the port",
  when: "Sun 15 Mar · 19:30",
  host: "Maya",
  seats: 5,
  tags: ["Dinners", "Vegetarian"],
  tone: "brand"
}, {
  id: 3,
  city: "Haifa",
  title: "Breakfast for late risers",
  when: "Sat 21 Mar · 10:00",
  host: "Ari",
  seats: 0,
  tags: ["Brunch"],
  tone: "critical"
}, {
  id: 4,
  city: "Tel Aviv",
  title: "Six weeks, one circle",
  when: "Starts 2 Apr",
  host: "Noa",
  seats: 3,
  tags: ["Circles", "Members"],
  tone: "brand"
}, {
  id: 5,
  city: "Jaffa",
  title: "Wine, bread, arguments",
  when: "Fri 27 Mar · 20:00",
  host: "Ido",
  seats: 4,
  tags: ["Dinners"],
  tone: "brand"
}, {
  id: 6,
  city: "Tel Aviv",
  title: "Quiet dinner, no phones",
  when: "Wed 1 Apr · 18:30",
  host: "Tal",
  seats: 1,
  tags: ["Dinners", "No phones"],
  tone: "warning"
}];
function DinnerGrid({
  onRsvp
}) {
  const [city, setCity] = React.useState("All cities");
  const list = DINNERS.filter(d => city === "All cities" || d.city === city);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: "var(--width-content)",
      margin: "0 auto",
      padding: "var(--space-10) var(--gutter-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-6)",
      marginBottom: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "March"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-title-1)"
    }
  }, "Tables open right now")), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    items: ["All cities", "Tel Aviv", "Jaffa", "Haifa"],
    value: city,
    onChange: setCity
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)"
    }
  }, list.map(d => /*#__PURE__*/React.createElement(Card, {
    key: d.id,
    interactive: true,
    eyebrow: d.city,
    title: d.title,
    media: /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "100%",
        display: "grid",
        placeItems: "center",
        fontFamily: "var(--font-mono)",
        fontSize: "var(--text-micro)",
        color: "var(--wine-900)",
        opacity: .6
      }
    }, "image placeholder"),
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, d.seats > 0 ? /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      onClick: () => onRsvp(d)
    }, "Take a seat") : /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: "quiet",
      onClick: () => onRsvp(d)
    }, "Join waitlist"), /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: "auto",
        display: "flex",
        alignItems: "center",
        gap: 6,
        fontSize: "var(--text-caption)",
        color: "var(--text-muted)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "clock",
      size: 14
    }), d.when))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      marginBottom: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: d.tone,
    dot: d.seats > 0
  }, d.seats > 0 ? d.seats + " seats left" : "Full"), d.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t))), "Hosted by ", d.host, ". Bring an appetite and one story worth telling."))));
}
window.DinnerGrid = DinnerGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/DinnerGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button,
  Badge,
  AvatarStack
} = window.DesignSystem_d83544;
function Hero({
  onBrowse
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--gradient-warm)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--width-content)",
      margin: "0 auto",
      padding: "var(--space-11) var(--gutter-page) var(--space-10)",
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-10)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Tel Aviv \xB7 Jaffa \xB7 Haifa"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(3rem,5.2vw,4.75rem)"
    }
  }, "Small tables,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      color: "var(--wine-900)"
    }
  }, "real talk")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-lg)",
      maxWidth: "46ch"
    }
  }, "We set eight places, cook something slow, and let the evening go long. No name tags. No pitching. Just supper with people you haven't met yet."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onBrowse
  }, "See this month's dinners"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline",
    href: "#"
  }, "How it works")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center",
      paddingTop: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    people: ["Noa Ben", "Ari Katz", "Maya Dor", "Tal Rom", "Ido Levi"]
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-caption)",
      color: "var(--text-muted)"
    }
  }, "612 members have shared a table since 2021"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      aspectRatio: "4/5",
      borderRadius: "var(--radius-xl)",
      background: "var(--blush-200)",
      overflow: "hidden",
      boxShadow: "var(--shadow-raised)",
      display: "flex",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "grid",
      placeItems: "center",
      color: "var(--wine-900)",
      fontSize: "var(--text-caption)",
      opacity: .65,
      fontFamily: "var(--font-mono)"
    }
  }, "image placeholder \xB7 4:5 supper photo"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      padding: "var(--space-6)",
      background: "var(--gradient-protect)",
      display: "flex",
      alignItems: "center",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    solid: true
  }, "Thu 18:00"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--sand-50)",
      fontSize: "var(--text-body-sm)"
    }
  }, "Long table, Neve Tzedek \u2014 2 seats left")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Membership.jsx
try { (() => {
const {
  Card,
  Button,
  Badge,
  Icon
} = window.DesignSystem_d83544;
function Membership({
  onJoin
}) {
  const plans = [{
    name: "Guest",
    price: "Free",
    body: "Come to one dinner a season. Pay per seat.",
    cta: "Browse dinners",
    variant: "default"
  }, {
    name: "Member",
    price: "₪90 / mo",
    body: "Two dinners a month, first pick on new tables, the members' circle.",
    cta: "Become a member",
    variant: "inverse",
    featured: true
  }, {
    name: "Host",
    price: "By invitation",
    body: "Set your own table with us. We cover food, you bring the room.",
    cta: "Apply to host",
    variant: "tint"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-raised)",
      borderTop: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--width-content)",
      margin: "0 auto",
      padding: "var(--space-10) var(--gutter-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      marginBottom: "var(--space-7)",
      maxWidth: "52ch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow"
  }, "Membership"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-title-1)"
    }
  }, "Three ways to sit down with us")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-5)",
      alignItems: "start"
    }
  }, plans.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    variant: p.variant,
    eyebrow: p.name,
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--font-display)"
      }
    }, p.price),
    footer: /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      variant: p.featured ? "accent" : "outline",
      block: true,
      onClick: onJoin
    }, p.cta)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, p.featured && /*#__PURE__*/React.createElement(Badge, {
    solid: true
  }, "Most chosen"), /*#__PURE__*/React.createElement("span", null, p.body), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      fontSize: "var(--text-caption)",
      opacity: .8
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14
  }), "Cancel any time")))))));
}
window.Membership = Membership;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Membership.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteFooter.jsx
try { (() => {
const {
  Field,
  Input,
  Button,
  Icon
} = window.DesignSystem_d83544;
function SiteFooter() {
  const cols = [["Gather", ["Dinners", "Circles", "Host with us", "Cities"]], ["Read", ["Journal", "Table notes", "Recipes"]], ["Liron Social", ["About", "Members", "Contact", "Press"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-inverse)",
      color: "var(--text-inverse)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--width-content)",
      margin: "0 auto",
      padding: "var(--space-10) var(--gutter-page) var(--space-7)",
      display: "grid",
      gridTemplateColumns: "1.4fr repeat(3,1fr)",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      color: "var(--blush-100)"
    }
  }, "Liron Social"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--blush-200)",
      maxWidth: "32ch"
    }
  }, "One letter a week: who's cooking, who's coming, what we're arguing about."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      alignItems: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "you@email.com",
    style: {
      background: "rgba(255,255,255,.08)",
      borderColor: "rgba(251,217,227,.28)",
      color: "var(--sand-50)"
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "accent"
  }, "Join"))), cols.map(([h, items]) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-micro)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--blush-300)"
    }
  }, h), items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      fontSize: "var(--text-body-sm)",
      color: "var(--blush-100)",
      border: 0
    }
  }, i))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--width-content)",
      margin: "0 auto",
      padding: "0 var(--gutter-page) var(--space-7)",
      display: "flex",
      gap: "var(--space-4)",
      alignItems: "center",
      fontSize: "var(--text-caption)",
      color: "var(--blush-300)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Liron Social"), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "instagram"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  }))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
const {
  Button,
  Icon
} = window.DesignSystem_d83544;
function SiteHeader({
  page,
  onNavigate
}) {
  const links = [["dinners", "Dinners"], ["circles", "Circles"], ["journal", "Journal"], ["about", "About"]];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 20,
      background: "rgba(247,245,240,.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--line-hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--width-content)",
      margin: "0 auto",
      padding: "0 var(--gutter-page)",
      height: 76,
      display: "flex",
      alignItems: "center",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("home");
    },
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      color: "var(--wine-900)",
      letterSpacing: "-.02em",
      border: 0
    }
  }, "Liron Social"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      marginLeft: "auto"
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(id);
    },
    style: {
      fontSize: "var(--text-body-sm)",
      color: page === id ? "var(--wine-900)" : "var(--text-body)",
      border: 0,
      borderBottom: page === id ? "1px solid var(--coral-500)" : "1px solid transparent",
      paddingBottom: 2
    }
  }, label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    href: "#"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    onClick: () => onNavigate("dinners")
  }, "Find a table"))));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
