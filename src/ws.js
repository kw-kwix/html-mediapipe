import { io } from "socket.io-client";

const host = "https://fast-dawn-28658.herokuapp.com/";

export const socket = io(host);
