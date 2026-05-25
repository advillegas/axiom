import {
  Boxes,
  CircuitBoard,
  Cog,
  Construction,
  Droplets,
  FlameKindling,
  Hammer,
  HardHat,
  Layers,
  Mountain,
  TestTubes,
  Wrench,
} from "lucide-react";

import type { ServiceItem } from "@/i18n/content";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<ServiceItem["iconKey"], React.ComponentType<{ className?: string }>> = {
  concrete: Construction,
  "post-tension": Cog,
  shotcrete: Layers,
  epoxy: CircuitBoard,
  steel: Wrench,
  wood: Hammer,
  soils: Mountain,
  fireproofing: FlameKindling,
  masonry: Boxes,
  lab: TestTubes,
  spray: Droplets,
  roofing: HardHat,
};

export function ServiceIcon({
  k,
  className,
}: {
  k: ServiceItem["iconKey"];
  className?: string;
}) {
  const Icon = ICON_MAP[k];
  return <Icon className={cn("size-5", className)} />;
}
