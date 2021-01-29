import { PageLinkWithHiddenText } from "../PageLink";

export interface ISegmentProps {
  title: string;
  data: string[];
  summary: string;
  url: string;
}

export const Segment = (props: ISegmentProps) => {
  const { title, data, summary, url } = props;

  <div className="segment segment__work">
    <h3 className="segment__title"> { title || 'A Project' }</h3>
    <div className="segment__data">
      { data ?? 'Work' }
    </div>
    <p className="segment__summary"> { summary || 'Words describing the project' } </p>
    <PageLinkWithHiddenText 
      route={url}
      text='See The Work'
    />
  </div>
}

export type SegmentType = typeof Segment;