import React from "react";
import Count from "../hooks/Count";
import Greeting from "../components/ui/Greeting";
import { StudentContext } from "../StudentContext";

const About = () => {
    let name = "Vaishnavi";

    return (
        <div>
            <StudentContext.Provider value={name}>
                <Greeting />
            </StudentContext.Provider>

            <Count />
        </div>
    );
};

export default About;