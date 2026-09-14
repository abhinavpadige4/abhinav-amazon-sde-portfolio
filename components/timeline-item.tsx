export interface TimelineItemProps {
  company: string;
  role: string;
  dates: string;
  points: string[];
}

export default function TimelineItem({
  company,
  role,
  dates,
  points,
}: TimelineItemProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-start gap-4">
        <div className="w-2 h-2 bg-primary rounded-full"></div>
        <div>
          <h3 className="font-bold text-foreground">{company}</h3>
          <h4 className="text-muted-foreground">{role}</h4>
          <p className="text-sm text-muted-foreground">{dates}</p>
        </div>
      </div>
      <ul className="list-disc list-inside space-y-1 text-muted-foreground pl-5">
        {points.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}