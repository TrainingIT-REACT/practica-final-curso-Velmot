import React from "react";
import {
  renameKeys,
  formatSongDuration
} from "../Application/components/utils";

describe("Components Utils", () => {
  it("Rename Keys", () => {
    expect(renameKeys({ old: "new" }, { old: "value" })).toEqual({
      new: "value"
    });
  });
  describe("Format Song Duration", () => {
    it("1 min", () => {
      expect(formatSongDuration(60)).toBe("1:00");
    });
    it("50 sec", () => {
      expect(formatSongDuration(50)).toBe("0:50");
    });
    it("1 min & 9 secs", () => {
      expect(formatSongDuration(69)).toBe("1:09");
    });
  });
});
