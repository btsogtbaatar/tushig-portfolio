import { useNavigate } from 'react-router-dom';
import AboutMe from '../components/AboutMe';
import SplineBase from '../components/SplineBase';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <SplineBase
        scene="https://prod.spline.design/cTmqyiCELyXP90Us/scene.splinecode"
        className="min-h-screen"
        onSplineMouseDown={(e) => navigate(`/${e.target.name}`)}
      />
      <AboutMe />
    </div>
  );
}
