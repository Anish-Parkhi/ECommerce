import {
  FormControlContext_default,
  useFormControl
} from "./chunk-XD73RXYW.js";
import {
  _extends,
  _objectWithoutPropertiesLoose,
  capitalize_default,
  clsx_m_default,
  composeClasses,
  extendSxProp,
  generateUtilityClass,
  generateUtilityClasses,
  init_base,
  init_capitalize,
  init_clsx_m,
  init_esm,
  init_esm2,
  init_extends,
  init_generateUtilityClass,
  init_objectWithoutPropertiesLoose,
  init_styled,
  init_useThemeProps,
  require_jsx_runtime,
  styled_default,
  useThemeProps
} from "./chunk-VTTHXK3B.js";
import "./chunk-PRK46SJB.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  require_prop_types
} from "./chunk-5AUPUJGB.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/InputAdornment/InputAdornment.js
init_objectWithoutPropertiesLoose();
init_extends();
var React2 = __toESM(require_react());
var import_prop_types2 = __toESM(require_prop_types());
init_clsx_m();
init_base();
init_capitalize();

// node_modules/@mui/material/Typography/Typography.js
init_objectWithoutPropertiesLoose();
init_extends();
var React = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());
init_clsx_m();
init_esm2();
init_base();
init_styled();
init_useThemeProps();
init_capitalize();

// node_modules/@mui/material/Typography/typographyClasses.js
init_esm();
init_generateUtilityClass();
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
var typographyClasses = generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);

// node_modules/@mui/material/Typography/Typography.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
var useUtilityClasses = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize_default(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
var TypographyRoot = styled_default("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== "inherit" && styles[`align${capitalize_default(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant && theme.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
}));
var defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
var colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
var transformDeprecatedColors = (color) => {
  return colorTransformations[color] || color;
};
var Typography = React.forwardRef(function Typography2(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTypography"
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color
  }));
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx_m_default(classes.root, className)
  }, other));
});
true ? Typography.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: import_prop_types.default.oneOf(["center", "inherit", "justify", "left", "right"]),
  /**
   * The content of the component.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: import_prop_types.default.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: import_prop_types.default.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: import_prop_types.default.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: import_prop_types.default.oneOfType([import_prop_types.default.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), import_prop_types.default.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: import_prop_types.default.object
} : void 0;
var Typography_default = Typography;

// node_modules/@mui/material/InputAdornment/InputAdornment.js
init_styled();

// node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js
init_esm();
init_generateUtilityClass();
function getInputAdornmentUtilityClass(slot) {
  return generateUtilityClass("MuiInputAdornment", slot);
}
var inputAdornmentClasses = generateUtilityClasses("MuiInputAdornment", ["root", "filled", "standard", "outlined", "positionStart", "positionEnd", "disablePointerEvents", "hiddenLabel", "sizeSmall"]);
var inputAdornmentClasses_default = inputAdornmentClasses;

// node_modules/@mui/material/InputAdornment/InputAdornment.js
init_useThemeProps();
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var _span;
var _excluded2 = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];
var overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[`position${capitalize_default(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};
var useUtilityClasses2 = (ownerState) => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ["root", disablePointerEvents && "disablePointerEvents", position && `position${capitalize_default(position)}`, variant, hiddenLabel && "hiddenLabel", size && `size${capitalize_default(size)}`]
  };
  return composeClasses(slots, getInputAdornmentUtilityClass, classes);
};
var InputAdornmentRoot = styled_default("div", {
  name: "MuiInputAdornment",
  slot: "Root",
  overridesResolver
})(({
  theme,
  ownerState
}) => _extends({
  display: "flex",
  height: "0.01em",
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: "2em",
  alignItems: "center",
  whiteSpace: "nowrap",
  color: (theme.vars || theme).palette.action.active
}, ownerState.variant === "filled" && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${inputAdornmentClasses_default.positionStart}&:not(.${inputAdornmentClasses_default.hiddenLabel})`]: {
    marginTop: 16
  }
}, ownerState.position === "start" && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, ownerState.position === "end" && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, ownerState.disablePointerEvents === true && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: "none"
}));
var InputAdornment = React2.forwardRef(function InputAdornment2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputAdornment"
  });
  const {
    children,
    className,
    component = "div",
    disablePointerEvents = false,
    disableTypography = false,
    position,
    variant: variantProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded2);
  const muiFormControl = useFormControl() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (true) {
      if (variantProp === muiFormControl.variant) {
        console.error("MUI: The `InputAdornment` variant infers the variant prop you do not have to provide one.");
      }
    }
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = _extends({}, props, {
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  });
  const classes = useUtilityClasses2(ownerState);
  return (0, import_jsx_runtime2.jsx)(FormControlContext_default.Provider, {
    value: null,
    children: (0, import_jsx_runtime2.jsx)(InputAdornmentRoot, _extends({
      as: component,
      ownerState,
      className: clsx_m_default(classes.root, className),
      ref
    }, other, {
      children: typeof children === "string" && !disableTypography ? (0, import_jsx_runtime2.jsx)(Typography_default, {
        color: "text.secondary",
        children
      }) : (0, import_jsx_runtime3.jsxs)(React2.Fragment, {
        children: [position === "start" ? (
          /* notranslate needed while Google Translate will not fix zero-width space issue */
          _span || (_span = (0, import_jsx_runtime2.jsx)("span", {
            className: "notranslate",
            children: "​"
          }))
        ) : null, children]
      })
    }))
  });
});
true ? InputAdornment.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `IconButton` or string.
   */
  children: import_prop_types2.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types2.default.object,
  /**
   * @ignore
   */
  className: import_prop_types2.default.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types2.default.elementType,
  /**
   * Disable pointer events on the root.
   * This allows for the content of the adornment to focus the `input` on click.
   * @default false
   */
  disablePointerEvents: import_prop_types2.default.bool,
  /**
   * If children is a string then disable wrapping in a Typography component.
   * @default false
   */
  disableTypography: import_prop_types2.default.bool,
  /**
   * The position this adornment should appear relative to the `Input`.
   */
  position: import_prop_types2.default.oneOf(["end", "start"]).isRequired,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types2.default.oneOfType([import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.object, import_prop_types2.default.bool])), import_prop_types2.default.func, import_prop_types2.default.object]),
  /**
   * The variant to use.
   * Note: If you are using the `TextField` component or the `FormControl` component
   * you do not have to set this manually.
   */
  variant: import_prop_types2.default.oneOf(["filled", "outlined", "standard"])
} : void 0;
var InputAdornment_default = InputAdornment;
export {
  InputAdornment_default as default,
  getInputAdornmentUtilityClass,
  inputAdornmentClasses_default as inputAdornmentClasses
};
//# sourceMappingURL=@mui_material_InputAdornment.js.map
