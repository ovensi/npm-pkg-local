import { defineComponent } from "vue";
import { makeStringProp } from "./utils";

type Names = "aaa" | "bbb" | "ccc";

export const HelloWorld = defineComponent({
  name: "HelloWorld",
  props: {
    msg: makeStringProp<Names>("aaa"),
  },
  setup(props) {
    return () => (
      <div>
        <h1>
          hello world!
          <br />
          {props.msg}
        </h1>
      </div>
    );
  },
});
