import { Segment, SegmentType } from './segment.component';

export interface ISegmentList {
  data: SegmentType[]
}

export const SegmentList = ({data: segments}: ISegmentList) => (
  <div className="segmentlist">
    { segments }
  </div>
)