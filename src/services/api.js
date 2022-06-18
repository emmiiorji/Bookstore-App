const baseURL = () => 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const appURL = () => `${baseURL()}/apps/gl3ZSEnyiLqitqwm65SL`;
export const bookURL = () => `${appURL()}/books`;
export const deleteBookURL = (bookId) => `${bookURL()}/${bookId}`;

export default appURL;
