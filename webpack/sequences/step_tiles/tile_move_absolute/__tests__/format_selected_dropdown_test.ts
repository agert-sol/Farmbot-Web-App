import { formatSelectedDropdown } from "../format_selected_dropdown";
import { fakeResourceIndex } from "../test_helpers";

describe("formatSelectedDropdown()", () => {
  it("returns dropdown item: tool", () => {
    const dropdown = formatSelectedDropdown(fakeResourceIndex(),
      { kind: "tool", args: { tool_id: 1 } });
    expect(dropdown).toEqual({ label: "Tool: Generic Tool", value: 1 });
  });

  it("returns dropdown item: point", () => {
    const dropdown = formatSelectedDropdown(fakeResourceIndex(),
      {
        kind: "point", args: {
          pointer_type: "GenericPointer", pointer_id: 2
        }
      });
    expect(dropdown).toEqual({
      label: "Map Point: Point 1 (10, 20, 30) ",
      value: 2
    });
  });

  it("returns dropdown item: tool", () => {
    const dropdown = formatSelectedDropdown(fakeResourceIndex(),
      {
        kind: "point", args: {
          pointer_type: "ToolSlot", pointer_id: 3
        }
      });
    expect(dropdown).toEqual({
      label: "Tool Slot: using Generic Tool (100, 200, 300) ",
      value: 3
    });
  });

  it("returns dropdown item: coordinate", () => {
    const dropdown = formatSelectedDropdown(fakeResourceIndex(),
      { kind: "coordinate", args: { x: 10, y: 20, z: 30 } });
    expect(dropdown).toEqual({ label: "None", value: "" });
  });
});
