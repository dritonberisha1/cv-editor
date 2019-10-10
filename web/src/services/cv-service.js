class CvService {
    saveData(data) {
        localStorage.setItem("sv-data", JSON.stringify(data));
        return new Promise((resolve) => {
            resolve();
        })
    }

    getData() {
        const data = localStorage.getItem("sv-data");
        return new Promise((resolve) => {
            resolve(JSON.parse(data));
        })

    }
}

export default new CvService();