export const makeTranslation = async (bodyRequest: object) => {
    try {
        
        const response = fetch('http://localhost:5000/translate', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(bodyRequest),
        })
        
        return response;
    } catch (error) {
        return error
    }
}