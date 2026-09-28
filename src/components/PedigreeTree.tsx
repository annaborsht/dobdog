export interface PedigreeEntry {
  gen: number;
  side: "sire" | "dam";
  row: string;
  reg: string;
  name: string;
}

export interface PedigreeLabels {
  parents: string;
  grandParents: string;
  greatGrandParents: string;
  greatGreatGrandParents?: string;
}

export default function PedigreeTree({
  header,
  entries,
  labels,
}: {
  header?: string;
  entries: PedigreeEntry[];
  labels: PedigreeLabels;
}) {
  const maxGen = Math.max(...entries.map((d) => d.gen));

  return (
    <div className="dog-pedigree-section">
      {header && <h2>{header}</h2>}

      <div
        className="pedigree-labels"
        style={{ "--pedigree-gens": maxGen } as React.CSSProperties}
      >
        <span>{labels.parents}</span>
        <span>{labels.grandParents}</span>
        <span>{labels.greatGrandParents}</span>
        {maxGen >= 4 && labels.greatGreatGrandParents && (
          <span>{labels.greatGreatGrandParents}</span>
        )}
      </div>

      <div
        className="pedigree-tree"
        style={
          {
            "--pedigree-gens": maxGen,
            "--pedigree-rows": Math.pow(2, maxGen),
          } as React.CSSProperties
        }
      >
        {entries.map((dog, i) => (
          <div
            key={i}
            className={`pedigree-cell pedigree-gen${dog.gen} pedigree-${dog.side}`}
            style={{ gridRow: dog.row, gridColumn: dog.gen }}
          >
            <span className="pedigree-name">{dog.name}</span>
            <span className="pedigree-reg">{dog.reg}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
