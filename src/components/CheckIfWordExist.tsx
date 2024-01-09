import axios from 'axios';

const CheckIfWordExist = async (word : string) => {
    try {
        const response = await axios.get(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        );
        console.log('is Exist:', response.status);
        if (response.status === 404) return false;
        return true;
    } catch (error) {
        console.error('Error checking if word exist:', error);
        return false;
    }
};

export default CheckIfWordExist;
