import { isMobile } from 'react-device-detect';
import { useNavigate } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import BuiltWith from '../components/BuiltWith';
import SplineBase from '../components/SplineBase';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className='select-none'>
      {isMobile ? (
        <SplineBase
          className="min-h-screen mx-auto"
          scene="https://prod.spline.design/ys6ta4FuLcbIQulx/scene.splinecode"
          onSplineMouseUp={(e) => {
            setTimeout(() => {
              navigate(`/${e.target.name}`);
            }, 500);
          }}
        />
      ) : (
        <SplineBase
          scene="https://prod.spline.design/959YOTp5rIDs61Jd/scene.splinecode"
          className="min-h-screen mx-auto"
          onSplineMouseUp={(e) => {
            setTimeout(() => {
              navigate(`/${e.target.name}`);
            }, 500);
          }}
        />
      )}
      <AboutMe />
      <BuiltWith />
    </div>
  );
}
