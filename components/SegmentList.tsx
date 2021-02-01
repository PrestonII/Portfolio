import { Segment, SegmentType } from './Segment';

export interface ISegmentList {
  data: SegmentType[]
}

export const SegmentList = ({data: segments}: ISegmentList) => (
  <div className="segmentlist">
    { segments }
  </div>
)