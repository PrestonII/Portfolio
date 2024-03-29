import PageHeader from '../page/PageHeader';
import SidebarAbout from '../sidebar/Sidebar.About';
import { ReactComponent as IconPerson } from '../assets/ICON_PERSON.svg';
import { ReactComponent as IconGen1 } from '../assets/ICON_GEN_1.svg';
import { ReactComponent as IconGen2 } from '../assets/ICON_GEN_2.svg';
import { ReactComponent as IconGen3 } from '../assets/ICON_GEN_3.svg';
import { ReactComponent as IconGen4 } from '../assets/ICON_GEN_4.svg';
import { ReactComponent as IconGen5 } from '../assets/ICON_GEN_5.svg';
import { ReactComponent as IconGen6 } from '../assets/ICON_GEN_6.svg';
import { ReactComponent as IconGen7 } from '../assets/ICON_GEN_7.svg';
import { ReactComponent as IconGen8 } from '../assets/ICON_GEN_8.svg';
import { ReactComponent as IconGen9 } from '../assets/ICON_GEN_9.svg';
import { ReactComponent as IconGen10 } from '../assets/ICON_GEN_10.svg';
import { ReactComponent as IconGen11 } from '../assets/ICON_GEN_11.svg';
import { ReactComponent as IconGen12 } from '../assets/ICON_GEN_12.svg';
import { ReactComponent as IconGen13 } from '../assets/ICON_GEN_13.svg';
import { ReactComponent as IconGen14 } from '../assets/ICON_GEN_14.svg';
import { ReactComponent as IconGen15 } from '../assets/ICON_GEN_15.svg';
import stylesHome from '../home/subhome.module.scss';
import stylesAbout from './about.module.scss';
import { useState } from 'react';

const AboutPage: React.FC = () => {
  const [showNLD, setShowNLD] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const headerType = 'Me?';
  const title = `Generalist By Nature`;
  const nolosdos = (
    <b
      onMouseEnter={() => setShowNLD(true)}
      onMouseLeave={() => setShowNLD(false)}
      onMouseMove={(e) => setPosition({ x: e.clientX, y: e.clientY })}
    >
      porque no los dos?{' '}
    </b>
  );

  const msg = (
    <div className={stylesAbout.about__image__wrapper}>
      For much of my career I've had to choose between doing one thing or
      another. Physical or Digital. Code or Design. My background in
      architecture has helped me embrace more of a {nolosdos}
      approach to things.
    </div>
  );

  return (
    <>
      <div
        style={{ top: position.y, left: position.x }}
        className={
          showNLD ? stylesAbout.about__image : stylesAbout.image__hidden
        }
      />
      <SidebarAbout />
      <div className={stylesHome.subhome}>
        <div className={stylesAbout.about__wrapper}>
          <PageHeader
            {...{
              title,
              msg,
              headerType,
              icon: <IconPerson className={stylesAbout.about__icons__red} />,
              linkText: 'Thoughts On My Career',
              linkClassOverrides: stylesHome.subhome__link,
              classOverrides: stylesHome.subhome__title,
            }}
          />
          <div className={stylesAbout.about__icons}>
            <div className={stylesAbout.about__icons__row}>
              <IconGen1
                className={`
                  ${stylesAbout.about__icons__upgradedSize} 
                  ${stylesAbout.about__icons__red} 
                  ${stylesAbout.about__icons__uniformStroke__first} 
                  ${stylesAbout.about__icons__upgradedStroke__second}
                `}
              />
              <IconGen2
                className={`
                  ${stylesAbout.about__icons__upgradedSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
              <IconGen3
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red} 
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
            </div>
            <div className={stylesAbout.about__icons__row}>
              <IconGen4
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
              <IconGen5
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
              <IconGen6
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
            </div>
            <div className={stylesAbout.about__icons__row}>
              <IconGen7
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red} 
                  ${stylesAbout.about__icons__upgradedStroke__first}
                `}
              />
              <IconGen8
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                `}
              />
              <IconGen9
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
            </div>
            <div className={stylesAbout.about__icons__row}>
              <IconGen10
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
              <IconGen11
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
              <IconGen12
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__second} 
                `}
              />
            </div>
            <div className={stylesAbout.about__icons__row}>
              <IconGen13
                className={`
                  ${stylesAbout.about__icons__upgradedSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                  ${stylesAbout.about__icons__upgradedStroke__second} 
                `}
              />
              <IconGen14
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
              <IconGen15
                className={`
                  ${stylesAbout.about__icons__uniformSize} 
                  ${stylesAbout.about__icons__red}
                  ${stylesAbout.about__icons__uniformStroke__first} 
                `}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
