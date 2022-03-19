import { ReactComponent as ArrowIcon } from "../assets/ARROW_ICON.svg";
import { IconType } from "./Types";

const ArrowDirections = [
  "N",
  "NE",
  "E",
  "SE",
  "S",
  "SW",
  "W",
  "NW"
] as const;

type ArrowDirection = typeof ArrowDirections[number];

type ArrowIconType = IconType & {
  direction?: ArrowDirection
}

const getTransform = (direction?: ArrowDirection): string => {
  let trans = "0deg"

  switch(direction) {
    case 'SE':
      trans = '45deg'
      break;
    case 'S':
      trans = '90deg'
      break;
    case 'SW':
      trans = '135deg'
      break;
    case 'W':
      trans = '180deg'
      break;
    case 'NW':
      trans = '225deg'
      break;
    case 'N':
      trans = '270deg'
      break;
    case 'NE':
      trans = '315deg'
      break;
    case 'E':
    default:
      break;
  }

  return trans;
}

export const IconArrow: React.FC<ArrowIconType> = (props) => (
  <ArrowIcon 
    onClick={props.onClick}
    style={{transform: `rotate(${getTransform(props.direction)})`}}
  />
)