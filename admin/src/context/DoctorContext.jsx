import { createContext } from "react";
import PropTypes from 'prop-types';

export const DoctorContext = createContext();

const DoctorContextProvider = (props) => {
    const value = {
        // Add context values here
    };

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    );
};

// PropTypes validation
DoctorContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DoctorContextProvider;
