

const url = `https://pygobackend.up.railway.app/translate`

export const makeTranslation = async (bodyRequest: object) => {
    try {
        console.dir(url)
        const response = fetch(url, {
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