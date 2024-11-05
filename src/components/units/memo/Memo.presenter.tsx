import { IMemoUIProps } from "../../../commons/types/types";
import * as M from "./Memo.styles";

export default function MemoUI(props: IMemoUIProps) {
  return (
    <M.Memo>
      <M.MemoLabel>Memo</M.MemoLabel>
      <M.MemoContents
        defaultValue={props.item?.memo}
        onChange={props.onChangeMemo}
      ></M.MemoContents>
    </M.Memo>
  );
}
