import app from "./app";

const main = () => {
    app.listen(app.get("port"));
    console.log(`http://localhost:${app.get("port")}/api/languages`);
};

main();

