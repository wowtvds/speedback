export default (fileName) => {
	const head = document.head;
	const link = document.createElement("link");

	link.type = "text/css";
	link.rel = "stylesheet";
	link.href = fileName;

	head.appendChild(link);
}