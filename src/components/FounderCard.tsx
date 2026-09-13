import { existsSync, readdirSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { founder } from "@/content/site";

const TEAM_DIR = "team";
const IMAGE_EXT = /\.(jpe?g|png|webp|avif|gif)$/i;

/**
 * Find the founder portrait in public/team.
 *
 * Deliberately forgiving about the filename: whatever image gets dropped
 * into that folder is used, so saving it as `moses.png`, `portrait.jpeg`
 * or `linkedin (1).jpg` all work without a code change. A name containing
 * "moses" wins if several images are present.
 *
 * Returns the public path, or null when the folder holds no image — in
 * which case the card falls back to initials rather than a broken image.
 */
function findPortrait(): string | null {
  // An explicit path in content wins, when that exact file exists.
  if (founder.photo) {
    const explicit = path.join(process.cwd(), "public", founder.photo);
    if (existsSync(explicit)) return founder.photo;
  }

  try {
    const dir = path.join(process.cwd(), "public", TEAM_DIR);
    const images = readdirSync(dir).filter((f) => IMAGE_EXT.test(f));
    if (images.length === 0) return null;

    const preferred =
      images.find((f) => /moses|founder|portrait/i.test(f)) ?? images[0]!;
    return `/${TEAM_DIR}/${preferred}`;
  } catch {
    return null;
  }
}

export function FounderCard() {
  const portrait = findPortrait();

  return (
    <div className="founder">
      <div className="founder__frame">
        {portrait ? (
          <Image
            src={portrait}
            alt={`${founder.name}, ${founder.role}`}
            width={520}
            height={520}
            // The frame is 260px wide (240px on narrow screens), so this is
            // the widest it is ever painted. Without it Next serves a
            // viewport-sized variant for a thumbnail-sized slot.
            sizes="260px"
          />
        ) : (
          <span className="founder__initials" aria-hidden="true">
            {founder.initials}
          </span>
        )}
      </div>

      <div className="founder__body">
        <h3 className="founder__name">{founder.name}</h3>
        <p className="founder__role">{founder.role}</p>
        {founder.body.map((para) => (
          <p key={para.slice(0, 40)}>{para}</p>
        ))}

        {founder.facts ? (
          <dl className="founder__facts">
            {founder.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </div>
  );
}
