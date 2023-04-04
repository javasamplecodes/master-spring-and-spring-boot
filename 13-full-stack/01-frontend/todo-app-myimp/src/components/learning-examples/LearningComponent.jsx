import FirstComponent, {FifthComponent} from "./FirstComponent";
//import FifthComponent from './FirstComponent' // comes default component
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";

function LearningComponent() {
    return (
        <div className="App">
            <FirstComponent />
            <SecondComponent />
            <ThirdComponent />
            <FourthComponent />
            <FifthComponent />
        </div>
    );
}

export default LearningComponent;