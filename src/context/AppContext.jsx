import { createContext } from "react";
import PropTypes from 'prop-types';

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const currancy = "$";

    const calculateAge = (dob)=>{
        const today = new Date()
        const birthdate = new Date(dob)
        let age = today.getFullYear() - birthdate.getFullYear()
        return age
    }
    const months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("-");
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2];
};

    const value = {
        // Add context values here
        calculateAge,
        slotDateFormat,
        currancy
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

// PropTypes validation
AppContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppContextProvider;
