import { InternalLink } from "./PageLink";

export interface ISegmentProps {
  title: string;
  data: string[];
  summary: string;
  url: string;
  segmentType?: string;
}

export const Segment = (props: ISegmentProps) => {
  const { title, data, summary, url, segmentType } = props;

  <div className={`segment segment__${segmentType}`}>
    <h3 className="segment__title"> { title || 'A Project' }</h3>
    <div className="segment__data">
      { data ?? 'Work' }
    </div>
    <p className="segment__summary"> { summary || 'Words describing the project' } </p>
    <InternalLink 
      route={url}
    >See The Work</InternalLink>
  </div>
}

export type SegmentType = typeof Segment;