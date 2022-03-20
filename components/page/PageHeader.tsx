import OverflowHiddenContainer, {
  OverridableStyling,
} from '../containers/container.hidden';
import FacetTitle from '../facets/facet.title';
import { InternalLink } from '../PageLink';

type PageHeaderType = {
  title: string;
  msg: string | JSX.Element;
  headerType: string;
  icon: JSX.Element;
  linkClassOverrides?: string;
  linkText?: string;
  pageLinkRoute?: string;
} & OverridableStyling;

const PageHeader: React.FC<PageHeaderType> = ({
  title,
  msg,
  icon,
  linkClassOverrides,
  linkText,
  classOverrides,
  style,
  headerType,
  pageLinkRoute,
}) => {
  return (
    <div className={classOverrides} style={style}>
      <FacetTitle title={headerType} icon={icon} />
      <OverflowHiddenContainer containerType="h2">
        {title}
      </OverflowHiddenContainer>
      <OverflowHiddenContainer containerType="paragraph">
        {msg}
      </OverflowHiddenContainer>
      {pageLinkRoute && linkText ? (
        <InternalLink route={pageLinkRoute} classOverrides={linkClassOverrides}>
          {linkText}
        </InternalLink>
      ) : undefined}
    </div>
  );
};

export default PageHeader;
