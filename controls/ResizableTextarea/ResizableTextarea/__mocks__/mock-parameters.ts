/* istanbul ignore file */

import { IInputs } from "../generated/ManifestTypes";
import {
  MockDecimalNumberProperty,
  MockEnumProperty,
  MockStringProperty,
  MockWholeNumberProperty,
} from "./mock-context";

export function getMockParameters(): IInputs {
  return {
    Text: new MockStringProperty(),
    Default: new MockStringProperty(),
    MaxLength: new MockWholeNumberProperty(),
    HintText: new MockStringProperty(),
    EmptyPlaceholderText: new MockStringProperty(),
    ResizedHeight: new MockWholeNumberProperty(),
    ResizedWidth: new MockWholeNumberProperty(),
    DefaultHeight: new MockWholeNumberProperty(),
    DefaultWidth: new MockWholeNumberProperty(),
    MinHeight: new MockWholeNumberProperty(),
    MaxHeight: new MockWholeNumberProperty(),
    MinWidth: new MockWholeNumberProperty(),
    MaxWidth: new MockWholeNumberProperty(),
    PaddingLeft: new MockWholeNumberProperty(),
    PaddingRight: new MockWholeNumberProperty(),
    PaddingTop: new MockWholeNumberProperty(),
    PaddingBottom: new MockWholeNumberProperty(),
    LeftPaddingAdjustment: new MockWholeNumberProperty(),
    AllowResize: new MockEnumProperty<"0" | "1" | "2" | "3">(),
    EnableSpellCheck: new MockEnumProperty<"0" | "1">(),
    FontName: new MockStringProperty(),
    FontSize: new MockDecimalNumberProperty(),
    FontSizeUnits: new MockEnumProperty(),
    FontColor: new MockStringProperty("1"),
    FontWeight: new MockStringProperty(),
    DisabledFontColor: new MockStringProperty(),
    DisabledFontWeight: new MockStringProperty(),
    FocusFontColor: new MockStringProperty(),
    FocusFontWeight: new MockStringProperty(),
    HoverFontColor: new MockStringProperty(),
    HoverFontWeight: new MockStringProperty(),
    HintFontColor: new MockStringProperty(),
    HintFontWeight: new MockStringProperty(),
    FillColor: new MockStringProperty(),
    DisabledFillColor: new MockStringProperty(),
    FocusFillColor: new MockStringProperty(),
    HoverFillColor: new MockStringProperty(),
    DisabledHoverFillColor: new MockStringProperty(),
    BorderColor: new MockStringProperty(),
    BorderThickness: new MockWholeNumberProperty(),
    BorderRadius: new MockWholeNumberProperty(),
    DisabledBorderColor: new MockStringProperty(),
    FocusBorderColor: new MockStringProperty(),
    FocusBorderThickness: new MockWholeNumberProperty(),
    HoverBorderColor: new MockStringProperty(),
    HoverBorderThickness: new MockWholeNumberProperty(),
    RenderBorderStyle: new MockEnumProperty<"0" | "1">(),
    AccessibilityLabel: new MockStringProperty(),
    InputEvent: new MockStringProperty(),
  };
}
