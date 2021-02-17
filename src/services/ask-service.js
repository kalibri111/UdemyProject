export default class AskService{
    _baseApi = 'http://127.0.0.1:8000/ask_the_prepod/api/v1.0'

    async getResource(url) {
        const res = await fetch(`${this._baseApi}${url}`);
        return await res.json();
    }

    async getAllQuestions() {
        return this.getResource(`/questions/`);
    }
}