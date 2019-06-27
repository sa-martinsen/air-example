import {stream} from "m2"

export default () => stream(emt => {
  emt([{ blocks: [
      { id: 0, type: "red", msg: "someone-text1" },
      { id: 1, type: "red", msg: "someone-azaza" },
      { id: 2, type: "blue", msg: "someone-lkj" },
      { id: 3, type: "blue", msg: "" },
      { id: 4, type: "red", msg: "someone-485" },
  ] }]);
});