import { describe, expect, it } from "vitest";
import PackageJson from "../package.json" with { type: "json" };

describe("package metadata", () => {
  it("publishes a library package with an explicit tarball boundary", () => {
    expect(PackageJson.name).toBe("@xesrevinu/npm-library-template");
    expect(PackageJson.files).toEqual(["dist", "README.md", "LICENSE"]);
    expect(PackageJson.publishConfig).toEqual({
      access: "public",
      provenance: true,
    });
    expect(PackageJson.packageManager).toBe("bun@1.3.10");
  });
});
