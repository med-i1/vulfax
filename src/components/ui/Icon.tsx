import {
  ArrowUp,
  ArrowUpRight,
  Check,
  Cloud,
  Compass,
  Cpu,
  Gauge,
  Layers,
  Mail,
  Menu,
  Shield,
  Signal,
  Sparkles,
  Target,
  Workflow,
  X,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/types/content";

const icons: Record<IconName, LucideIcon> = {
  cpu: Cpu,
  layers: Layers,
  shield: Shield,
  sparkles: Sparkles,
  cloud: Cloud,
  gauge: Gauge,
  compass: Compass,
  workflow: Workflow,
  signal: Signal,
  target: Target,
  "arrow-up-right": ArrowUpRight,
  "arrow-up": ArrowUp,
  check: Check,
  menu: Menu,
  close: X,
  mail: Mail,
};

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className, strokeWidth = 1.6 }: IconProps) {
  const Component = icons[name];
  return (
    <Component
      className={className}
      strokeWidth={strokeWidth}
      aria-hidden="true"
      focusable="false"
    />
  );
}
