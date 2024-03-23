import { Meteors } from '../components/Meteors'
import LandingPage from '../pages/LandingPage'

const MeteorBackgroundWrapper = (Component) => {
  const InnerComponent = (props) => {
    return (
      <div
        className="relative h-full w-full overflow-hidden bg-center bg-cover "
        // style={{ backgroundImage: `url(IMG_00561.PNG)`, zIndex: 1 }}
      >
        <Meteors />
        <Component style="zIndex: 2 " {...props} />
      </div>
    )
  }

  return InnerComponent
}

const LandingPageWithMeteors = MeteorBackgroundWrapper(LandingPage)
export default LandingPageWithMeteors
