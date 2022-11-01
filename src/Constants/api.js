export const api = {
    base: "http://188.166.76.128:8888/api/task",
    get getAll() {
        return `${this.base}/getAll`;
    },
    get save() {
        return `${this.base}/save`;
    },
};
