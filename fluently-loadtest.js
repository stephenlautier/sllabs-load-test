import http from "k6/http";

export const options = {
	vus: 50,
	duration: "30s",
};

// export default function () {
// 	http.get("http://localhost:5500/api/heroes/azmodan");
// }
export default function () {
	http.get("http://localhost:5500/api/heroes/azmodan", { headers: { "Content-Type": "application/x-msgpack" } });
}
