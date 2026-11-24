"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/animations/Reveal";
import { content } from "@/content";
import { siteConfig } from "@/config/site";
import {
  createContactSchema,
  type ContactFormValues,
} from "@/lib/validation";
import { cn } from "@/lib/utils";

type SubmitStatus = "idle" | "local" | "sent" | "error";

const inputClass =
  "h-12 w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 text-sm text-ink placeholder:text-muted/50 transition-colors duration-300 focus:border-accent/60 focus:bg-white/[0.05] focus:outline-none aria-[invalid=true]:border-rose-400/60";

export function Contact() {
  const { contact } = content;
  const copy = contact.form;
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const schema = useMemo(
    () => createContactSchema(copy.errors),
    [copy.errors],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: { name: "", email: "", company: "", message: "" },
  });

  async function onSubmit(values: ContactFormValues) {
    setStatus("idle");

    if (!siteConfig.contactEndpoint) {
      // No delivery integration exists yet: validate, then say so plainly
      // instead of pretending the message was sent.
      setStatus("local");
      return;
    }

    try {
      const response = await fetch(siteConfig.contactEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_60%_70%_at_50%_100%,rgba(101,117,255,0.18),transparent_70%)]"
      />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              description={contact.description}
              narrow
            />

            <ul className="mt-9 space-y-4">
              {contact.aside.map((item, index) => (
                <Reveal key={item} delay={0.06 * index}>
                  <li className="flex items-start gap-3 text-sm text-muted">
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full border border-accent/30 bg-accent/10 text-accent">
                      <Icon name="check" className="size-3" strokeWidth={2.2} />
                    </span>
                    {item}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="glass-panel rounded-3xl p-6 sm:p-8">
                <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted"
                      >
                        {copy.name}{" "}
                        <span aria-hidden="true" className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        autoComplete="name"
                        placeholder={copy.namePlaceholder}
                        aria-invalid={errors.name ? "true" : "false"}
                        aria-describedby={errors.name ? "contact-name-error" : undefined}
                        className={cn(inputClass)}
                        {...register("name")}
                      />
                      {errors.name ? (
                        <p id="contact-name-error" className="mt-2 text-xs text-rose-300">
                          {errors.name.message}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted"
                      >
                        {copy.email}{" "}
                        <span aria-hidden="true" className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        autoComplete="email"
                        placeholder={copy.emailPlaceholder}
                        aria-invalid={errors.email ? "true" : "false"}
                        aria-describedby={errors.email ? "contact-email-error" : undefined}
                        className={cn(inputClass)}
                        {...register("email")}
                      />
                      {errors.email ? (
                        <p id="contact-email-error" className="mt-2 text-xs text-rose-300">
                          {errors.email.message}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted"
                    >
                      {copy.company}
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      autoComplete="organization"
                      placeholder={copy.companyPlaceholder}
                      className={cn(inputClass)}
                      {...register("company")}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-muted"
                    >
                      {copy.message}{" "}
                      <span aria-hidden="true" className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder={copy.messagePlaceholder}
                      aria-invalid={errors.message ? "true" : "false"}
                      aria-describedby={errors.message ? "contact-message-error" : undefined}
                      className={cn(inputClass, "h-auto resize-y py-3 leading-relaxed")}
                      {...register("message")}
                    />
                    {errors.message ? (
                      <p id="contact-message-error" className="mt-2 text-xs text-rose-300">
                        {errors.message.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-[11px] text-muted/70">
                      {copy.requiredHint}
                    </p>
                    <Button
                      type="submit"
                      size="md"
                      disabled={isSubmitting}
                      trailingIcon={
                        <Icon name="arrow-up-right" className="size-4" />
                      }
                    >
                      {isSubmitting ? copy.submitting : copy.submit}
                    </Button>
                  </div>

                  <div aria-live="polite" className="min-h-[1px]">
                    {status === "local" ? (
                      <div className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                        <p className="text-sm font-medium text-ink">
                          {copy.localOnlyTitle}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-muted">
                          {copy.localOnlyBody}
                        </p>
                      </div>
                    ) : null}

                    {status === "sent" ? (
                      <div className="rounded-xl border border-emerald-400/25 bg-emerald-400/8 p-4">
                        <p className="text-sm font-medium text-emerald-200">
                          {copy.successTitle}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-emerald-200/70">
                          {copy.successBody}
                        </p>
                      </div>
                    ) : null}

                    {status === "error" ? (
                      <div className="rounded-xl border border-rose-400/25 bg-rose-400/8 p-4">
                        <p className="text-sm font-medium text-rose-200">
                          {copy.errorTitle}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-rose-200/70">
                          {copy.errorBody}
                        </p>
                      </div>
                    ) : null}
                  </div>
                </form>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
