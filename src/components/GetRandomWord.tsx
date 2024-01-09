import axios from 'axios';

const GetRandomWord = async () => {
    try {
        const response = await axios.get(
            'https://random-word-api.herokuapp.com/word?length=5'
        );
        const randomWord = response.data[0];
        // console.log('Random word:', response);
        return randomWord;
    } catch (error) {
        console.error('Error fetching random word:', error);
        return null;
    }
};

export default GetRandomWord;
