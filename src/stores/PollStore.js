import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Java or C++",
    answerA: "Java",
    answerB: "C++",
    votesA: 10,
    votesB: 9,
  },
]);

export default PollStore;
