import { StudentContext } from "../../StudentContext";
import { useContext } from "react";

const Greeting = () => {
    let StudentName = useContext(StudentContext);

    return (
        <div>
            <h1>Greeting {StudentName}</h1>
        </div>
    );
};

export default Greeting;