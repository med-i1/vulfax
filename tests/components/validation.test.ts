import { describe, expect, it } from "vitest";
import { createContactSchema } from "@/lib/validation";

const schema = createContactSchema({
  name: "name error",
  email: "email error",
  message: "message error",
});

const valid = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  company: "",
  message: "We are exploring a new digital platform and need a technical partner.",
};

describe("createContactSchema", () => {
  it("accepts a valid payload", () => {
    expect(schema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    const result = schema.safeParse({ ...valid, email: "not-an-email" });
    expect(result.success).toBe(false);
    if (!result.success) {
      expect(result.error.issues[0]?.message).toBe("email error");
    }
  });

  it("rejects a message shorter than 20 characters", () => {
    const result = schema.safeParse({ ...valid, message: "too short" });
    expect(result.success).toBe(false);
  });

  it("trims whitespace before validating the name", () => {
    const result = schema.safeParse({ ...valid, name: "   A   " });
    expect(result.success).toBe(false);
  });
});
