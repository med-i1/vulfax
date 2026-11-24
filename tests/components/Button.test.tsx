import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "@/components/ui/Button";

describe("Button", () => {
  it("renders an anchor when href is provided", () => {
    render(<Button href="#contact">Start a conversation</Button>);
    const link = screen.getByRole("link", { name: "Start a conversation" });
    expect(link).toHaveAttribute("href", "#contact");
  });

  it("renders a button by default and forwards clicks", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Send message</Button>);

    const button = screen.getByRole("button", { name: "Send message" });
    expect(button).toHaveAttribute("type", "button");

    await userEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies the requested variant classes", () => {
    render(
      <Button variant="secondary" size="lg">
        Secondary
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Secondary" });
    expect(button.className).toContain("glass-panel");
    expect(button.className).toContain("h-14");
  });
});
