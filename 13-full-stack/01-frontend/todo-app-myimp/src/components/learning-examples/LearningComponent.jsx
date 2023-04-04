import FirstComponent, {FifthComponent} from "./FirstComponent";
//import FifthComponent from './FirstComponent' // comes default component
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import LearningJavaScript from "./LearningJavaScript";

function LearningComponent() {
    return (
        <div className="App">
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthComponent />
            <LearningJavaScript />
        </div>
    );
}

export default LearningComponent;